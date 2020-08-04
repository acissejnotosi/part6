import React from "react";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { useSelector, useDispatch } from "react-redux";
import { show, hidde } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();

  const vote = (id) => {
    const votedAnecdote = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(voteAnecdote(votedAnecdote));
    dispatch(show(`you voted ${votedAnecdote.content} `));
    setTimeout(() => dispatch(hidde()), 5000);
  };

  return (
    <>
      {anecdotes
        .sort((a, b) => a.votes < b.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </>
  );
};

export default AnecdoteList;
