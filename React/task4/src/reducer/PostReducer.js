const postReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_POST':
        return state.concat([action.pro]);
      case 'Show':
        return action.pro
      default:
        return state;
    }
  }
  export default postReducer;