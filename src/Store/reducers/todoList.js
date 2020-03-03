import {ADD_TODO}  from '../actionType'
let initialState = {
    todos: [
      { 
        id: 1,
        completed:false
      },
      { 
        id: 2,
        completed:false
      },
      { 
        id: 3,
        completed:false
      }
    ]
}
//同步action
export function addTodo(id) {
  return { type: ADD_TODO, id }
}

//异步action
export const addTodoAsync = text =>{
  return (dispatch) =>{
    //异步获取数据
    setTimeout(() => {
      dispatch(addTodo(3))
    },1000)
  }
}
export const listReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_TODO:
           let todos=state.todos;
           todos = [ ...todos,{
            id: action.id,
            completed: false
          }]
          return {
            ...state,todos
          }
        default:
          return state
      }
}


