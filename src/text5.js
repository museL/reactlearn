import React from 'react';
import PropTypes from "prop-types"

class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { list } = this.props;
        return (
            <ul>
                {list.map((item, index) => {
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
        )
    }

}
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.inputOnchage}></input>
                <button onClick={this.submitTitle}>提交</button>
            </div>
        )
    }
    inputOnchage = (e) => {

        this.setState({
            value: e.target.value
        })
        console.log(e.target.value)
        // this.props.submitTitle(e.target.value);
    }

    submitTitle = (e) => {
        this.props.submitTitle(this.state.value);
    }
}


class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <p>{this.props.text}</p>
    }

    componentWillUpdate(){
        console.log('footer did update')
    }

    shouldComponentUpdate(nextProps, nextState){

        if(nextProps.text !== this.props.text){
            return true
        }
        return false
    }
    //React 默认: 父组件更新，子组件则无条件更新
    //性能优化对于 react 更为重要！
    //SCU 一定要用吗？ 需要的时候才用
}

class TodoListDEmo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '底部文字',
            list: [
                {
                    id: "id-1",
                    title: "标题1"
                },
                {
                    id: "id-2",
                    title: "标题2"
                },
                {
                    id: "id-3",
                    title: "标题3"
                }
            ]
        }
    }

    render() {
        //受控组件
        return (
            <div>
                <Input submitTitle={this.onSumbitTitle} />
                <List list={this.state.list}></List>
                <Footer text={this.state.text}/>
            </div>
        )
    }
    onSumbitTitle = (title) => {
        this.setState({
            list: [...this.state.list, {
                id: `id-${Date.now()}`,
                title
            }],
        })
    }
}

export default TodoListDEmo;