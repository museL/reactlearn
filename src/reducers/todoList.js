
let initialState = {
    list: []
}

function addTodo(text) {
    return {
      type: ADD_TODO,
      text
    }
  }

const listReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'ADD_TODO':
          return [
              ...state,{
                id: action.id,
                text: action.text,
                completed: false
              }
          ]
        default:
          return state
      }
}

export default listReducer;
