import React from 'react';
import logo from './logo.svg';
import './App.css';
import  List from './text_1'
import JSXBaseDemo from './text_2'
import EventDemo from './text_3'
import FromDemo from './text_4'
import TodoListDEmo from  './text5'
import StateDemo from './StateDemo'

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			list:[
				{
					name:"标题1",
					id:"1"
				},
				{
					name:"标题2",
					id:"2"
				},
				{
					name:"标题3",
					id:"3"
				}
			]
		}
	}
	render(){
		return (
			<div className="App">
			  <List list={this.state.list}></List>
			  <JSXBaseDemo></JSXBaseDemo>
			  <EventDemo></EventDemo>
			  <FromDemo></FromDemo>
			  <TodoListDEmo></TodoListDEmo>
			  <StateDemo></StateDemo>
			</div>
		  )
	}
 
}

export default App;
