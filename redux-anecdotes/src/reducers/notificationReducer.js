const initialState = "qualquer coisa";

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW": {
      console.log(action.data.content);
      return action.data.message;
    }
    default: {
      return state;
    }
  }
};

export const show = (message) => {
  return {
    type: "SHOW",
    data: {
      message
    },
  };
};

export default notificationReducer;
