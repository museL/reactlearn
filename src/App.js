import React from 'react';
import logo from './logo.svg';
import './App.css';
import  List from './text_1'
import JSXBaseDemo from './text_2'
import EventDemo from './text_3'
import FromDemo from './text_4'
import TodoListDEmo from  './text5'
import StateDemo from './StateDemo'
import ProtalsDemo from './text6'
import ThemeDemo from './ThemeLink'
import LazyDemo from './lazyDemo'
import HOCDemo from './HOCDemo'
import RenderPropDemo from './RenderPropDemo'
import TodoList from './TodoList'
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
			  {/* <List list={this.state.list}></List>
			  <JSXBaseDemo></JSXBaseDemo>
			  <EventDemo></EventDemo>
			  <FromDemo></FromDemo> */}
			  {/* <TodoListDEmo></TodoListDEmo>
			  <HOCDemo a="100"></HOCDemo>
			  <RenderPropDemo a="100"></RenderPropDemo> */}
			  <TodoList></TodoList>
			  {/* <StateDemo></StateDemo>
			  <ProtalsDemo>modal 内容</ProtalsDemo>
			  <ThemeDemo></ThemeDemo>
			  <LazyDemo></LazyDemo> */}
			</div>
		  )
	}
 
}

export default App;
