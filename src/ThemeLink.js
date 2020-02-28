import React from "react"

const ThemeContext = React.createContext('light');

class ThemeDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'light'
        }
    }

    render() {
        return <ThemeContext.Provider value={this.state.theme}>
            <Toolbar></Toolbar>
            <button onClick={this.changeTheme}>change Theme </button>
        </ThemeContext.Provider>
    }

    changeTheme = () => {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        })
    }
}

function Toolbar(props) {
    return (
        <div>
            <ThemeButton></ThemeButton>
            <ThemeLink></ThemeLink>
        </div>
    )
}

class ThemeButton extends React.Component {
    render() {
        const theme = this.context
        return <div>
            <p>button theme is {theme}</p>
        </div>
    }
}
ThemeButton.contextType = ThemeContext //指定 contextType 读取当前 context


function ThemeLink(props) {
    return <ThemeContext.Consumer>
        {value => <p> link theme is {value} </p>}
    </ThemeContext.Consumer>
}

export default ThemeDemo