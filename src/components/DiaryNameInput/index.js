import React from 'react';
import {Button} from '../Button';
export class DiaryNameInput extends React.Component{
  render(){
    return(
      <div className="form-group diary-name-input">
        <form onSubmit={this.props.handleAdd}>
        <label>Diary Name</label>
        <input type="text" onChange={this.props.handleInput}/>
        <Button btnText="Save"/>
        </form>
      </div>
    )
  }
}