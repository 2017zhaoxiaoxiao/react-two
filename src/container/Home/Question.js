import React, { Component } from 'react'
import {Link} from 'react-router-dom';
let page;
let url ='https://cnodejs.org/api/v1/topics?tab=ask&page=';
export default class Question extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        page=this.props.match.params.page;
        fetch(url+page)
        .then((res)=>res.json())
        .then((res)=>{
           this.setState({data:res.data});
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page!==this.props.match.params.page){
            let page=this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topics?tab=ask&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
           this.setState({data:res.data});
            })
        }
       
    }
    showContent(item){
        
    }
    render(){
        return (
            <div>
                {
                    this.state.data.map((item,key)=>(
                    console.log(item),
                    <div onClick={()=>this.showContent(item)} key={item.id} style={{width:900,height:52,background:'#fff',borderBottom:"solid 1px #ddd",padding:"10px 10px 0px 10px"}}>
                        <img src={item.author.avatar_url} style={{float:'left',width:30,heigth:30}}/>
                         <p style={{float:'left',marginLeft:'5px',marginTop:'8px'}}>{item.reply_count}/{item.visit_count}</p>
                         <Link to={'/ask/'+page+'/'+key}>
                        <div style={{color:'black',fontSize:'14px',float:'left',marginLeft:'20px',marginTop:'8px',width:540,overflow:'hidden',whiteSpace:'nowrap', textOverflow:'ellipsis'}} dangerouslySetInnerHTML={{__html:item.title}}></div>
                        </Link>
                        <p style={{width:'50px',height:'20px',marginTop:'8px',float:'right'}}>4小时前</p>
                        <img src={item.author.avatar_url} style={{width:30,heigth:30,float:'right',marginRight:'5px'}}/>  
                    </div>
                    ))
                }
                
                   

                <ul style={{float:'left',width:900,height:52,backgroundColor:'white'}}>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(<li key={item} style={{backgroundColor:'#ffffff',float:'left',width:30,padding:'4px 12px',lineHeight:'20px',border:'solid 1px #e1e1e1'}}> 
                        <Link to={'/home/topic/'+item}>{item}</Link></li>))
                    }
                    </ul>
               
                
            </div>
        )
    }
}

