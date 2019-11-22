/**
 * created by 41587 on 2019/11/21
 */
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



