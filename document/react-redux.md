# redux

安装 yarn add redux react-redux 
创建redux文件夹并在其创建index.js
```

import { createStore, combineReducers } from 'redux';

function counter(state = 0, action) {
    switch (action.type) {
        case 'increase':
            return  state + 1
        default:
            return state
    }
}
//使用combineReducers须知； State 的属性名必须与子 Reducer 同名。如果不同名，就要采用下面的写法。

export default createStore(combineReducers({   counter  }))

``` 

入口文件index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import redux from './redux';
import { Provider } from 'react-redux';
import './style/index.less'
ReactDOM.render(<Provider store={　redux }><Router /></Provider>, document.getElementById('root'));
```

组件中使用
```
import React ,{ Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return { counter  : state.counter }
}

function mapDispatchToProps(dispatch) {
    return {
        changeName:()=>dispatch({ type :'increase'})
    }
}
@connect(mapStateToProps,mapDispatchToProps)

class Home extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        console.log(this.props)
    }
    render(){
        console.log(this.props)
        let { changeName , counter  } = this.props
        return (
            <div className="header">
                home
                { counter }
                <button onClick={ changeName }>切换名字</button>
            </div>
        )
    }
}

export default Home

```
