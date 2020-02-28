import React from 'react';
import "./text_6.css"
import ReactDom from "react-dom";

class ProtalsDemo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            // <div className="modal">
            //     {this.props.children}
            // </div>
            //使用Portal 渲染到body上
            //fixed 元素要放在body 上 ,有更好的浏览器兼容性。
            ReactDom.createPortal(
                <div className="modal">
                    {this.props.children}
               </div>,document.body
            )
        )
    }

}


export default ProtalsDemo;