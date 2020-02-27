import React from 'react';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            theme:true
        }
    }
    render(){
        console.log(this.props);
        const { list } = this.props;
        const balckBtn = <button className="btn-black">black</button>
        const whiteBtn = <button className="btn-white">whiteBtn</button>
        // if (this.stat.theme === 'black'){
        //     return balckBtn
        // }else {
        //     return whiteBtn
        // }
        return (
            <div>
                {
                    //列表渲染
                    list.map((item,index)=>{
                    return (<div key={item.id}>{index}{item.id}{item.name}</div>)
                    })   
                }
 
            </div>
           
        )
    }
    componentDidMount(){
        console.log("ComponentDidMount")
    }
    componentDidUpdate(prevProps){
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
}

export default List;


//函数组件
function list(props) {
    const { list } = this.props

    return <ul>
        { list.map((item,index)=>{
            return <li key={item.id}>{item.title}</li>
        })}
    </ul>
}