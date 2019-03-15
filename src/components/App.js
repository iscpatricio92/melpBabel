import React, { Component } from 'react';
import './App.scss';
import { NavbarComponent } from './NavBar/';
import GridComponent  from './Grid/';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: {}
    };
}
componentDidMount(){
    var url = `https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json`;
    fetch(url).then(
      response => response.json()
    ).then(
      json => {
        this.setState({data: json});
      }
    );
}
  render() {
    const loaded=(this.state.data).length;
    
    return (
      <div className="App">
        <NavbarComponent  />   
        {loaded ?
        <GridComponent data={this.state.data} /> :
        <div className="loaderImage"></div>}
        {/*<Routes />
        <FooterComponent setActive={()=> this.ddlfunction()} ddlActive={this.state.ddlActive} />
        */}
      </div>
    );
  }
}

export default App;
