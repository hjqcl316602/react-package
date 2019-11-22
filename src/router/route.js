/**
 * created by 41587 on 2019/11/21
 */

import React,{ Component } from 'react'
import { Route,withRouter  } from 'react-router-dom'

class EnRoute extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        console.log(this)
        this.setTitle(this.props.title )
    }
    setTitle =( title ) =>{
        document.title = title
    }
    render(){
        return (
            <Route {...this.props}>

            </Route>
        )
    }
}
export default withRouter(EnRoute)
