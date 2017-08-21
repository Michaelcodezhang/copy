//tutorial1.js | 创建CommentBox组件
 var CommentBox=React.createClass({render:function () {
     return ( <div className="commentBox"> Hello,world! I am a CommentBox.</div> );
 }});
// //CommentBox组件嵌入
// React.render(<CommentBox/>,document.getElementById('content'));

// //tutorial2.js | 创建CommentList组件和CommentForm组件
var CommentList=React.createClass({render:function () {
     return (<div className="commentlist">Hello, world! I am a CommentList. </div>)
}});
var CommentForm=React.createClass({render:function () {
    return (<div className="commentform">Hello, world! I am a CommentForm. </div>)
}});
//tutorial3.js | 用CommentList组件和CommentForm组件更新CommentBox组件
CommentBox=React.createClass({render:function () {
    return (<div className="commentBox">
                <h1>Comments</h1> <CommentList/> <CommentForm/>
            </div>);
}});
// //CommentBox组件嵌入
// React.render(<CommentBox/>,document.getElementById('content'));
//tutorial4.js | 更新CommentList组件
CommentList=React.createClass({render:function () {
    return (<div className="commentList">
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>
            </div>);
}});
//tutorial5.js | 创建Comment组件
var Comment=React.createClass({render:function () {
    return (<div className="comment">
                <h2 className="commentAuthor">{this.props.author}</h2>
                {this.props.children}
            </div>)
}});
// //CommentBox组件嵌入
// React.render(<CommentBox/>,document.getElementById('content'));
//tutorial6.js | Markdown嵌入
// var converter=new showdown.Converter();
// Comment=React.createClass({render:function () {
//     return (<div className="comment">
//                 <h2 className="commentAuthor">{this.props.author}</h2>
//                 {converter.makeHtml(this.props.children.toString())}
//             </div>);
// }});
// //CommentBox组件嵌入
// React.render(<CommentBox/>,document.getElementById('content'));
//tutorial7.js | Markdown转化为HTML渲染再嵌入
var converter=new showdown.Converter();
Comment=React.createClass({render:function () {
    var rawMarkup=converter.makeHtml(this.props.children.toString());
    return (<div className="comment">
                <h2 className="commentAuthor">{this.props.author}</h2>
                <span dangerouslySetInnerHTML={{__html: rawMarkup}}/>
            </div>)
}});
// //CommentBox组件嵌入
// React.render(<CommentBox/>,document.getElementById('content'));

//×××××××××××××××××××××以下部分存在问题/问题已解决***********************
//×××××××××××××××××××××接入数据模型*******************************
//tutorial8.js | 接入JSON数据模型
var data=[{author:"Peter Hunt",text:"This is one comment"},
    {author:"Jordan Walke",text:"This is *another* comment"}];
//tutorial9.js | 通过props传递数据到CommentList
CommentBox=React.createClass({render:function () {
    return (<div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data}/>
                <CommentForm/>
            </div>);
}});
// //CommentBox组件嵌入
// React.render(<CommentBox data={data}/>,document.getElementById('content'));
//tutorial10.js | 实现动态渲染评论
CommentList = React.createClass({ render: function() {
        var commentNodes = this.props.data.map(function (comment) {
            return ( <Comment author={comment.author}> {comment.text} </Comment> );
        });
        return ( <div className="commentList"> {commentNodes} </div> );
} });

// //CommentBox组件嵌入
// React.render(<CommentBox data={data}/>,document.getElementById('content'));
//tutorial11.js | CommentBox组件嵌入 | 从服务器获取数据
React.render( <CommentBox url="comments.json"/>,document.getElementById('content'));
//tutorial12.js | 添加评论数组
CommentBox=React.createClass({
    getInitialState:function () {
        return {data:[]};
    },
    render:function () {
        return (<div className="commentBox">
                    <h1>Comments</h1>
                    <CommentList data="this.state.data"/>
                    <CommentForm/>
                </div>)
    }
})