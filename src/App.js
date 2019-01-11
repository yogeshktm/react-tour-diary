import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { DiaryNameInput } from './components/DiaryNameInput';
import { Diary } from './components/Diary';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentDiaryTxt:"",
      currentEventTxt:"",
      diaryName:null,
      events:[],
      todayEntryDone:false
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleEventInput = this.handleEventInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleAddEventClick = this.handleAddEventClick.bind(this);
    //this.checkTodayLogDone();
  }
  checkTodayLogDone(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    let printToday = dd +'/' + mm  + '/' + yyyy;
    
    function isTodayLogDone(log) { 
      return log.date === printToday;
    }
    let todaysLog = this.state.events.filter(isTodayLogDone);
    console.log(todaysLog);
    if(todaysLog.length > -1){
      this.setState({
        todayEntryDone:true
      })
    }
  }
  handleInput(e){
    let inputText = e.target.value;
    this.setState({
      currentDiaryTxt:inputText
    })
  }
  handleEventInput(e){
    let inputText = e.target.value;
    this.setState({
      currentEventTxt:inputText
    })
  }
  handleAdd(e){
    e.preventDefault();
    let currentText = this.state.currentDiaryTxt;
    // const list = this.state.diary.concat(currentText);
    this.setState({
      diaryName:currentText
    })
  }
  handleAddEventClick(e){
    e.preventDefault();
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    let printToday = dd +'/' + mm  + '/' + yyyy;
    let currentEventTxt = this.state.currentEventTxt;
    let newEvent = [
      {
        'date':printToday,
        'event':currentEventTxt
      }
    ];
    const list = this.state.events.concat(newEvent);
    this.setState({
      events:list
    })
    this.checkTodayLogDone();
    localStorage.setItem('eventsData',list);
  }
  render() {
    return (
      <div className="App">
        { this.state.diaryName === null ?  <DiaryNameInput inputText={this.props.currentDiaryTxt} handleInput={this.handleInput} handleAdd={this.handleAdd}/> : "" }
        <Diary diaryName={this.state.diaryName} onChange={this.handleEventInput} eventsData={this.state.events} todayLog={this.state.todayEntryDone}/>
        {!this.state.todayEntryDone ? <Button btnText="Add event" onClick={this.handleAddEventClick}/> : "" }
      </div>
    );
  }
}

export default App;
