import React,{Component} from 'react'

class Input extends Component{
  static defaultProps={
    onShow(){
      return 0
    }
  }
  constructor (){
    super()
    this.state={
      num:0
    }
  }
  handleChangeOnInput(event){
    this.setState({
      num:event.target.value
    })
    if(this.props.onShow){
      const n=event.target.value
      this.props.onShow(n)
    }
  }
  render(){
    return(
      <div>
        <input
          type='number'
          value={this.state.num}
          onChange={this.handleChangeOnInput.bind(this)}/>
      </div>
    )
  }
}

export default Input