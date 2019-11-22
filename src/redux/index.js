
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
