export const initialState = null;

export const reducer = (state, action) => {
  // if (action.type == "USER") {
  //   return action.payload;
  // }
  // return state;
  switch (action.type) {
    case "USER":
      return action.payload;
      break;
    case "CLEAR":
      return null;
      break;
    case "default":
      return state;
  }
};
