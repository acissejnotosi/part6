const initialState = "";

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW": {
      return action.data.message;
    }
    case "HIDDE": {
      return "";
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
      message,
    },
  };
};

export const hidde = () => {
  return {
    type: "HIDDE",
  };
};

export default notificationReducer;
