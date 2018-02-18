import React from 'react';
import {connect} from 'react-redux';
import {addItem} from './actionCreator';

class AddItem extends React.Component{

  state={
    text:''
  };

  handleEnter=(e)=>{
    if(e.key === 'Enter'){
      this.handleAdd();
    };
  }

  handleText=(e)=>{
    this.setState({
      text:e.target.value
    });
  }

  handleAdd=()=>{
    this.setState({
      text:''
    });
    if(this.state.text !== '')
      this.props.handleItem(this.state.text);
    else {
        alert('Please enter some text')
    }
  }

  render(){
    return(
      <div className='add-task'>
        <input type="text" placeholder='Enter New task' value={this.state.text} onKeyPress={this.handleEnter} onChange={this.handleText}/>
        <button onClick={this.handleAdd}>New Task +</button>
      </div>
    )
  }
}

const mapDispatchToProps=dispatch=>({
  handleItem(value){
    dispatch(addItem(value));
  }
})

export default connect(null,mapDispatchToProps)(AddItem);
