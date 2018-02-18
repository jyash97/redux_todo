import React from 'react';
import {connect} from 'react-redux'
import {toggleItem,removeItem} from './actionCreator';

class Items extends React.Component{

  render(){
    return(
      <div className='task-container'>
        <h1>{this.props.title}</h1>
        {
          this.props.tasks.map(task => (
            <div className='task' key={task.id}>
              <p>{task.name}</p>
              <button onClick={()=>this.props.handleRemove(task.id)}>Remove</button>
              <button onClick={()=>this.props.handleToggle(task.id)}>
                {
                  this.props.title === 'Todo' ? ('Completed') : ('Undo')
                }
              </button>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleRemove(id){
    dispatch(removeItem(id));
  },
  handleToggle(id){
    dispatch(toggleItem(id));
  }
})

export default connect(null,mapDispatchToProps)(Items);
