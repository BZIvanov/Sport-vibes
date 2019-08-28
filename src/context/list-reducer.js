const reducer = (state, action) => {
    switch (action.type) {
      case 'addToList':
        return { list: action.payload };
      case 'completeItem':
        state.list.splice(action.payload, 1);
        return { list: state.list };
  
      default:
        return state;
    }
};

export default reducer;
