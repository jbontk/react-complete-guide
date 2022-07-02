import Card from "../UI/Card";
import "./Search.css";
import React, { useEffect, useState } from "react";
import { Ingredient } from "../../models/ingredient";
import axios from "axios";
import { INGREDIENTS_API } from "../..";

type SearchProps = {
  onLoadIngredients: (ingredeints: Ingredient[]) => void;
};

const Search = React.memo((props: SearchProps) => {
  const [filter, setFilter] = useState<string>("");
  const { onLoadIngredients } = props;

  useEffect(() => {
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


    axios
      .get<{ [k: string]: { title: string; amount: number } }>(
        INGREDIENTS_API + filterQuery
      )
      .then(({ data }) => {
        const ingredientsArray = Object.keys(data).map(
          (k) => new Ingredient(k, data[k].title, data[k].amount)
        );
        onLoadIngredients(ingredientsArray);
      });
  }, [filter, onLoadIngredients]);

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
