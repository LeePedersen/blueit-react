export default (state = {}, action) => {
  const { username, title, content, tally, id } = action;
  switch (action.type) {
  case 'ADD_POST':
    let newState = Object.assign({}, state, {
      [id]: {
        username: username,
        title: title,
        content: content,
        tally: tally,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
