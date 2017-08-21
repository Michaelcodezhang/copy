import React,{Component} from 'react'

function formatName (user) {
  return user.firstName + ' ' + user.lastName
}

const user={
  firstName:'Harper',
  lastName:'Perez'
}

function getGreeting (user) {
  if(user){
    return <h1>Hello,{formatName(user)}!</h1>
  }
  return <h1>Hello,Stranger.</h1>
}
class Index extends Component{
  render(){
    return (
      <div style={{backgroundColor:'#0f0'}}>
        {getGreeting()}
      </div>
    )
  }
}

export default Index