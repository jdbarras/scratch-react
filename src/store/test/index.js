
const defaultState = {
  testString: 'Jeff'
};

const test = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default test;