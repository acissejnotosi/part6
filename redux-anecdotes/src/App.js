import React from "react";
import { voteAnecdote } from "./reducers/anecdoteReducer";
import { useSelector, useDispatch } from "react-redux";
import  AnecdoteForm  from "./components/AnecdoteForm";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAnecdote(anecdotes.find((anecdote) => anecdote.id === id)));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  );
};

export default App;
