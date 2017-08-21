import React,{Component} from 'react'

class PercentageShower extends Component{
  static defaultProps={
    num:0
  }
  render(){
    return(
      <div>
        {(Math.round((this.props.n)*10000)/100).toFixed(2)+'%'}
      </div>
    )
  }
}

export default PercentageShower