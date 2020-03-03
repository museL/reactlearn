import React from "react"
import { addTodoAsync } from './Store/reducers/todoList'
import {connect} from 'react-redux'
class TodoList extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const  {todos,onTodoClick} = this.props;
        return (
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} {...todo} onClick={() => onTodoClick(index)} > {todo.id} </li>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
      todos: state.listReducer.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onTodoClick: id => {
        dispatch(addTodoAsync(id))
      }
    }
}

  const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)

export default VisibleTodoList;