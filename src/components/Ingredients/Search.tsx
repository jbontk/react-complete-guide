import Card from "../UI/Card";
import "./Search.css";
import React, { useEffect, useState } from "react";
import { Ingredient } from "../../models/ingredient";
import { INGREDIENTS_API } from "../..";
import useHttp from "../../hooks/use-http";

type SearchProps = {
  onLoadIngredients: (ingredeints: Ingredient[]) => void;
};

const Search = React.memo((props: SearchProps) => {
  const [filter, setFilter] = useState("");
  const { onLoadIngredients } = props;

  const fetchRequest = useHttp();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filterQuery = filter.trim().length
        ? `?orderBy="title"&equalTo="${filter}"`
        : "";

      //
      // Need to update Firebase rules for filtering to work:
      //
      // {
      //  "rules": {
      //   .....
      //     "ingredients": {
      //         ".indexOn": "title"
      //      }
      //  }
      // }
      //
      fetchRequest('GET', INGREDIENTS_API + filterQuery)
        .then(data => {
          const ingredientsArray = Object.keys(data).map(
            (k) => new Ingredient(k, data[k].title, data[k].amount)
          );
          onLoadIngredients(ingredientsArray);
        });
    }, 500);

    return () => clearTimeout(timeout);

  }, [filter, onLoadIngredients, fetchRequest]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
