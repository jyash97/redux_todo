import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Items from './Items'
import AddItem from './AddItem'

class App extends Component {
  render() {
    const data =this.props.items;
    const completed =  data.filter( task => task.done);
    const todo =  data.filter( task => !task.done);
    return (
      <div className='container'>
        <h1>REDUX TODO APP</h1>
        <AddItem />
        <Items title='Todo' tasks={todo} />
        <Items title='Completed' tasks={completed}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items:state
});

export default connect(mapStateToProps)(App);
