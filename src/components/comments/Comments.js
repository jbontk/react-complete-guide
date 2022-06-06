import {useCallback, useEffect, useState} from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import {useParams} from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import {getAllComments} from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {quoteId} = useParams();

  const {sendRequest, status, data: comments} = useHttp(getAllComments, true);

  //
  // On first load
  //
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  //
  // Reload after a comment was added
  //
  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  let commentsJsx;
  if (status === 'completed' && !comments?.length) {
    commentsJsx = <p className='centered'>No comments yet!</p>;
  }
  else if (status === 'pending') {
    commentsJsx = <div className='centered'><LoadingSpinner/></div>;
  } else {
    commentsJsx = <CommentsList comments={comments}/>
  }


  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler}/>}
      {commentsJsx}
    </section>
  );
};

export default Comments;
