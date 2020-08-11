const initialState = "";

var timeoutID;

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
  return async (dispatch) => {
    clearTimeout(timeoutID);
    dispatch({
      type: "SHOW",
      data: {
        message,
      },
    });
    timeoutID = setTimeout(
      () =>
        dispatch({
          type: "HIDDE",
        }),
      5000
    );
  };
};

export default notificationReducer;
