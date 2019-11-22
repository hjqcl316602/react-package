/**
 * created by 41587 on 2019/11/21
 */
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    console.log(this.props)
  }
  render = () => this.props.children;
}

export  default  App
