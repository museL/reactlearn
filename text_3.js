import React from 'react';

class EventDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'zhangsan',
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
        this.clickHandlerl = this.clickHandlerl.bind(this);
    }

    render() {
        return (
            <div>
                <div>点击写法一</div>
                <div onClick={this.clickHandlerl}>{this.state.name}</div>
                <div>点击写法二</div>
                <div onClick={this.clickHandlerl2.bind(this)}>{this.state.name}</div>
                <div>点击写法三</div>
                <div onClick={this.clickHandlerl3}>{this.state.name}</div>
                <a href="https://imooc.com" onClick={this.clickHandlerl4}>点击我</a>
                <div>
                {
                    //列表渲染
                    this.state.list.map((item,index)=>{
                        return (<div onClick={(e) => this.clickHandlerl5(item.id,item.name,e)} key={item.id}>{index}{item.id}{item.name}</div>)
                    })   
                }
 
            </div>
            </div>
        )
    }

    clickHandlerl() {
        this.setState({
            name: 'list'
        })
    }

    clickHandlerl2() {
        this.setState({
            name: 'list'
        })
    }

    // 静态方法，this 指向当前实例
    clickHandlerl3 = (event) => {
       

        this.setState({
            name: 'list'
        })
    }


    clickHandlerl4 = (event) => {
        event.preventDefault() //阻止默认行为
        event.stopPropagation() // 阻止冒泡

        console.log("target",event.target)
        console.log("current target",event.currentTarget)

        console.log("event",event) //不是原生的event 是SyntheticEvent 组合事件

        console.log("event.__proto__.constructor",event.__proto__.constructor)

        console.log("nativeEvent",event.nativeEvent)
        console.log("nativeEvent target",event.nativeEvent.target)
        console.log("event.nativeEvent.currentTarget",event.nativeEvent.currentTarget)

        //event 是SyntheticEvent ，模拟DOM 事件所有能力
        //event.nativeEvent 是原生事件对象
        // 所有的事件都被挂载到 document 上
        // 和DOM 事件不一样 和vue 事件也不一样


    }

    clickHandlerl5 = (id, name ,event) => {
        console.log(id,name);
        console.log(event);
    }
}

export default EventDemo;