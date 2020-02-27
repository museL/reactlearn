import React from 'react';
import "./text_2.css"

class JSXBaseDemo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"muse",
            flag:true
        }
    }
    render(){
        const  rawHtml = '<span>富文本内容<i>斜体</i><b>加粗</b></span>'
        const rawHtmlData = {
            __html:rawHtml
        }
        return (
            <div>
              {/* 获取变量 */}
                <div>{this.state.name}</div>
                {/* 表达式 */}
                <div>{this.state.flag?"yes":"no"}</div>
                {/* class */}
                <div className="title">设置 css class</div>
                {/* style */}
                <div style={{fontSize:'30px',color:'blue'}}>设置style</div>
                {/* 原生html */}
                <div dangerouslySetInnerHTML={rawHtmlData}></div>

            </div>
           
        )
    }
}
export default JSXBaseDemo;