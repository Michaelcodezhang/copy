import React,{PropTypes} from 'react'

class Clock extends React.Component{
  static propTypes={
    date:PropTypes.object
  }
  constructor (props){
    super(props)
    this.state={date:new Date()}
  }
  componentDidMount(){
    this.timerID=setInterval(
      ()=>this._updateTime(),
      1000
    )
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  _updateTime(){
    this.setState({
      date:new Date()
    })
  }
  render(){
    return (
      <div>
        <h1>Hello,world!</h1>
        <h2>It is {this.state.date.toLocaleString()}.</h2>
      </div>
    )
  }
}

export default Clock