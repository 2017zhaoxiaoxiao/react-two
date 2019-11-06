import React, { Component } from 'react'

let url ='https://cnodejs.org/api/v1/topics?tab=job&page=';
let page=1;
let id=0;
export default class TopicJob extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
         page=this.props.match.params.page;
         id=this.props.match.params.id;
         console.log(page);
        fetch(url+page)
        .then((res)=>res.json())
        .then((res)=>{
           this.setState({data:res.data[id]});
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page!==this.props.match.params.page){
            let page=this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topics?tab=job&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
           this.setState({data:res.data[id]});
            })
        }
       
    }
   
    render(){
        return (
            <div>
              <div style={{backgroundColor:'white',padding:"10px 10px 10px 10px"}}dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
            </div>
        )
    }
}

