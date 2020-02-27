import React from 'react';

class FromDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'zhangsan',
            info:'个人信息',
            city:'beijing',
            flag:true,
            gender:'male'
        }
        this.nameInputRef = React.createRef() //
    }

    render() {
        //受控组件
        return (
            <div>
                <p>{this.state.name}</p>
                <label htmlFor="inputName">姓名：</label>
                <input id="inputName" value={this.state.name} onChange={this.onInputChange}></input>
                {/* select  -使用 value  */}
                <select value={this.state.city} onChange={this.onSelectChange}>
                    <option value="bejing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="shenzhen">深圳</option>
                </select>
                <p>{this.state.city}</p>

                {/* 非受控组件 */}
                <input defaultValue={this.state.name} ref={this.nameInputRef}></input>
                    <span>state.name:{this.state.name}</span>
                <br/>
                <button onClick={this.alertName}>alertName</button>
            </div>
        )
    }

    onInputChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    onSelectChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    alertName = () => {
        const elem = this.nameInputRef.current
        alert(elem.value)
    }
}

export default FromDemo;