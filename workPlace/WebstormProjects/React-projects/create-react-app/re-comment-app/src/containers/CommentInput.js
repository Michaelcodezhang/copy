import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import CommentInput from '../components/CommentInput'
import {addComment} from '../reducers/comments'

class  CommentInputContainer extends Component{
  static propTypes={
    comments:PropTypes.array,
    onSubmit:PropTypes.func
  }
  constructor (){
    super()
    this.state={
      username:''
    }
  }
  componentWillMount(){
    this._loadUsername()
  }
  _saveUsername(username){
    localStorage.setItem('username',JSON.stringify({username:username}))
  }
  _loadUsername(){
    const username=JSON.parse(localStorage.getItem('username'))
    if(username){
      this.setState(username)
    }
  }
  handleSubmit(comment){
    if(!comment)return
    if(!comment.username)return alert('请输入用户名！')
    if(!comment.content)return alert('请输入评论内容！')
    if(this.props.onSubmit){
      this.props.onSubmit(comment)
    }
    const {comments}=this.props
    const newComments=[...comments,comment]
    localStorage.setItem('comments',JSON.stringify(newComments))
  }
  render(){
    return (
      <CommentInput
        username={this.state.username}
        onSubmit={this.handleSubmit.bind(this)}
        onUserNameInputBlur={this._saveUsername.bind(this)}/>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    comments:state.comments
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    onSubmit:(comment)=>{
      dispatch(addComment(comment))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputContainer)