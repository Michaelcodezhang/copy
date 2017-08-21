import React,{Component} from 'react'
import PercentageShower from './PercentageShower'
import Input from './Input'

class PercentageApp extends Component{
  constructor (){
    super()
    this.state={
      num:0
    }
  }
  handleChangeOnPercent(n){
    console.log(n)
    this.setState({
      num:n
    })
  }
  render(){
    const data={num:this.state.num}
    return(
      <div>
        <Input onShow={this.handleChangeOnPercent.bind(this)}/>
        <PercentageShower n={this.state.num}/>
      </div>
    )
  }
}

export default PercentageApp

