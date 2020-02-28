import React from 'react';


class StateDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        //受控组件
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.increase}>累计</button>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.count !== this.state.count) {
            return true
        }
        
        return false
    }

    increase = () => {

        //不要直接修改 state， 使用不可变值
        // this.setState({
        //     count: this.state.count + 1
        // },()=>{
        //     console.log(this.state.count);
        // })
        // //异步
        // console.log(this.state.count);


        //在setTimeout中setState是同步的
        // setTimeout(() => {
        //     this.setState({
        //         count: this.state.count + 1
        //     })

        //     console.log(this.state.count);
        // })

        //setState 可能会合并

        //传入对象，会被合并。执行结果只一次 +1 
        // this.setState({
        //     count: this.state.count + 1
        // })

        // this.setState({
        //     count: this.state.count + 1
        // })

        // this.setState({
        //     count: this.state.count + 1
        // })

        //传入函数，不会合并，执行结果是 +3

        this.setState((prevState, props) =>{
            return {
                count: prevState.count + 1
            }
        })

        this.setState((prevState, props) =>{
            return {
                count: prevState.count + 1
            }
        })

        this.setState((prevState, props) =>{
            return {
                count: prevState.count + 1
            }
        })

    }
    bodyClickHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count);
    }
    componentWillMount() {

        //在自己定义的DOM 事件，setState是同步的
        // document.body.addEventListener('click', this.bodyClickHandler);
    }

    componentWillUnmount() {
        // document.body.removeEventListener('click', this.bodyClickHandler);
    }
}

export default StateDemo;