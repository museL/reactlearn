import React from "react"
const ThemeContext = React.lazy(() => import('./ThemeLink'))

class LazyDemo extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <p>引入一个动态组件</p>
            <hr />
            <React.Suspense fallback={<div>loading....</div>}>
                <ThemeContext/>
            </React.Suspense>
        </div>
    }
}


export  default LazyDemo;