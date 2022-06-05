import { useState } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import {useParams} from 'react-router-dom';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {quoteId} = useParams();

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments for {quoteId}...</p>
    </section>
  );
};

export default Comments;
