import React,{Component,PropTypes} from 'react'
import Comment from './Comment'

class CommentList extends Component{
  static propTypes={
    comments:PropTypes.array,
    handleDeleteComment:PropTypes.func
  }
  static defaultProps={
    comments:[]
  }
  handleDeleteComment(index){
    if(this.props.onDeleteComment){
      this.props.onDeleteComment(index)
    }
  }
  render(){
    return(
      <div>
        {this.props.comments.map((comment,i)=>
          <Comment
            comment={comment}
            onDeleteComment={this.handleDeleteComment.bind(this)}
            key={i}
            index={i}/>
        )}
      </div>
    )
  }
}

export default CommentList