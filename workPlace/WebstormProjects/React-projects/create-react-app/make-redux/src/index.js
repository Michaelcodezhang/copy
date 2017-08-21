function renderApp (newAppState,oldAppState={}) {
  if(newAppState===oldAppState)return
  console.log('render app...')
  renderTitle(newAppState.title,oldAppState.title)
  renderContent(newAppState.content,oldAppState.content)
}

function renderTitle (newTitle,oldTitle={}) {
  if(newTitle===oldTitle)return
  console.log('render title...')
  const titleDOM=document.getElementById('title')
  titleDOM.innerHTML=newTitle.text
  titleDOM.style.color=newTitle.color
}

function renderContent (newContent,oldContent={}) {
  if(newContent===oldContent)return
  console.log('render content...')
  const contentDOM=document.getElementById('content')
  contentDOM.innerHTML=newContent.text
  contentDOM.style.color=newContent.color
}

function reducer (state,action) {
  if(!state){
    return{
      title:{
        text:'炉石传说',
        color:'#f00'
      },
      content:{
        text:'这款游戏是暴雪娱乐出版的',
        color:'#00f'
      }
    }
  }
  switch (action.type){
    case 'UPDATE_TITLE_TEXT':
      return{
        ...state,
        title:{
          ...state.title,
          text:action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return{
        ...state,
        title:{
          ...state.title,
          color:action.color
        }
      }
    default:
      return state
  }
}

function createStore(reducer)  {
  let state=null
  const listeners=[]
  const subscribe=(listener)=>listeners.push(listener)
  const getState=()=>state
  const dispatch=(action)=>{
    state=reducer(state,action)
    listeners.forEach((listener)=>{
      listener()
    })
  }
  dispatch()
  return {getState,dispatch,subscribe}
}

const store=createStore(reducer)
let oldState=store.getState()
store.subscribe(()=>{
  const newState=store.getState()
  renderApp(newState,oldState)
  oldState=newState
})
renderApp(store.getState())
store.dispatch({type:'UPDATE_TITLE_COLOR',color:'#0f0'})
store.dispatch({type:'UPDATE_TITLE_TEXT',text:'守望先锋'})