import React from "react";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { connect } from "react-redux";
import { show } from "../reducers/notificationReducer";

const AnecdoteList = (props) => {
  const vote = (id) => {
    const votedAnecdote = props.anecdotes.find(
      (anecdote) => anecdote.id === id
    );
    props.voteAnecdote(votedAnecdote);
    props.show(`you voted ${votedAnecdote.content} `);
  };

  return (
    <>
      {props.anecdotes.map((anecdote) => (
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

const mapStateToProps = (state) => {
  if (state.anecdotes === []) return { anecdotes: state.anecdotes };
  if (state.filter === "") {
    return { anecdotes: state.anecdotes.sort((a, b) => a.votes < b.votes) };
  }
  return {
    anecdotes: state.anecdotes
      .sort((a, b) => a.votes < b.votes)
      .filter((anecdote) => anecdote.content.includes(state.filter)),
  };
};

const mapDispatchToProps = { voteAnecdote, show };

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);
export default ConnectedAnecdoteList;
