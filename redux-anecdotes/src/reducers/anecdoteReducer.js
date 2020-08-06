import anecdoteService from "../services/anecdotes";

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE": {
      const newState = state.map((stateUnit) =>
        stateUnit.id === action.data.id ? action.data : stateUnit
      );
      return newState;
    }
    case "NEW": {
      const newState = action.data;
      return state.concat(newState);
    }
    case "INIT":
      return action.data;
    default: {
      return state;
    }
  }
};

export const voteAnecdote = (anecdote) => {
  return {
    type: "VOTE",
    data: {
      content: anecdote.content,
      id: anecdote.id,
      votes: anecdote.votes + 1,
    },
  };
};

export const initializeAnecdotes= () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes,
    })
  }
}

export const createAnecdote = (data) => {
  return {
    type: "NEW",
    data,
  };
};

export default anecdoteReducer;
