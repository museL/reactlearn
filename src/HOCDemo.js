import React from "react"

const HOCDemo = (props) =>{
    const { x, y } = props.mouse //接受mouse 属性
    return (
        <div style={ { height:'600px'}}>
            <h1>the mouse positon is ( {x}, {y} )</h1>
            <p>{props.a}</p>
        </div>
    )

}

const withMouse = ( Component ) => {
    class withMouseComponent extends React.Component {
        constructor(props){
            super(props);
            this.state = { x:0, y:0 }
        }

        handleMouseMove = (event) =>{
            this.setState({
                x:event.clientX,
                y:event.clientY
            })
        }

        render(){
            return (
                <div style={{ height:'500px' }} onMouseMove={this.handleMouseMove}>
                        {/* 1.透传所有 props 2.增加mouse 属性 */}
                    <Component {...this.props} mouse={this.state}></Component>
                </div>
            )
        }
    }

    return withMouseComponent
}


export default withMouse(HOCDemo)