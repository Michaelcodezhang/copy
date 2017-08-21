import React,{PropTypes} from 'react'
import ListItem from './ListItem'

class NumberList extends React.Component{
  static propTypes={
    numbers:PropTypes.array
  }
  constructor (props){
    super(props)
  }
  render(){
    const numbers=this.props.numbers
    return (
      <ul>{
        numbers.map((number,i)=>
        <ListItem key={number.toString()}
                  value={number}/>)
      }</ul>
    )
  }
}

export default NumberList