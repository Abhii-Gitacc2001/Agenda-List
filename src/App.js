
import './App.css';
import React, { Component } from 'react'
import reactDom from 'react-dom';
import Plan from './Plan'

class App extends Component {
  state=
  {
    items:[],
    text:""
  }
  handleChange = e => {
     this.setState({text:e.target.value});
  }
  changeAdd = e =>
  {
    if(this.state.text!=="")
    {
    const items=[...this.state.items,this.state.text];
    this.setState({items:items,text:""});
    }
    // {console.log(this.state.items)};
  }
  handleDelete = id =>
  {
    const update=this.state.items.filter((ele,i) =>{
      return i!==id
    })
    this.setState({items:update})
  }
  render() {
    return (
      <React.Fragment>
      <div className="container">
        <h1>Today plan</h1>
        <div className="part-1">
          <b>Text:</b><input type="text" className="hbds" placeholder="Write your plan" value={this.state.text} onChange={this.handleChange} />
          <button className="btn btn-primary" onClick={this.changeAdd}>Add Work</button>
        </div>
      </div>
      <div className="container-1">
          <ul>
             {
               this.state.items.map((value,id) =>{
                 return <Plan sendData={this.handleDelete} key={id} id={id} value={value}/>
               })
             } 
          </ul>
      </div>
      </React.Fragment>
    )
  }
}


export default App;
