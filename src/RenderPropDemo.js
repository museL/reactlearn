import React from 'react';
import PropTypes from "prop-types"

const RenderPropDemo = (props) => (
    <div style={{ height: '500px'}}>
        <p>{props.a}</p>
        <Mouse render={
            ({x,y}) => <h1>the mouse positon is ( {x}, {y} )</h1>
        }></Mouse>
    </div>  
)


class Mouse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            x:0,
            y:0
        }
    }

    handleMouseMove = (event) =>　{
        this.setState({
            x:event.clientX,
            y:event.clientY
        })
    }

    render(){
        return (
            <div  style={{ height: '500px'}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}


Mouse.propTypes = {
    render: PropTypes.func.isRequired
}

export default RenderPropDemo;