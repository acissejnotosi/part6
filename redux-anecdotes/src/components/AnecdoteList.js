import React from "react";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { useSelector, useDispatch } from "react-redux";
import { show, hidde } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (anecdotes === []) return anecdotes;
    if (filter === "") {
      return anecdotes.sort((a, b) => a.votes < b.votes);
    }
    return anecdotes
      .sort((a, b) => a.votes < b.votes)
      .filter((anecdote) => anecdote.content.includes(filter));
  });
  const dispatch = useDispatch();

  const vote = (id) => {
    const votedAnecdote = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(voteAnecdote(votedAnecdote));
    dispatch(show(`you voted ${votedAnecdote.content} `));
    setTimeout(() => dispatch(hidde()), 5000);
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
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
