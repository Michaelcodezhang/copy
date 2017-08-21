import React,{Component} from 'react'

function formatName (user) {
  return user.firstName+' '+user.lastName
}

const user={
  firstName:'Harper',
  lastName:'Perez'
}

class Index extends Component{
  render(){
    return(
      <div>
        Hello,{formatName(user)}
      </div>
    )
  }
}

export default Index