import React from 'react';

export class Diary extends React.Component{
  // constructor(props){
  //   super(props);
  //   let events = localStorage.getItem(eventsData);
  // }
  render(){
    const { diaryName,todayLog } = this.props;
    return(
      <div className="diary-container">
        <h1>{diaryName} {this.props.diaryName === null ? "" : "Diary"}</h1>
        { !todayLog ? <textarea onChange={this.props.onChange}></textarea> : "" }
        <h3>Diary Entries</h3>
        { todayLog ? "You have completed your today's diary note. Come back and add tommorow" : ""}
        {
          // eventsData ? events.map((item) => {
          //    return(
          //    <div clasName="diary">
          //    <h1>Date:{item.date}</h1>
          //    <p>{item.event}</p>
          //    </div>)
          // }) : "No entries found"
        }
      </div>
    )
  }
}