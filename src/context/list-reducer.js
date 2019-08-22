const reducer = (state, action) => {
    switch (action.type) {
      case 'addToList':
        return { list: action.payload };
  
      default:
        return state;
    }
};

export default reducer;
