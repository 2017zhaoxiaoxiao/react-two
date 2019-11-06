import React, { Component } from 'react';
import {HashRouter as Route,Link,Redirect,Switch} from 'react-router-dom';
import All from './Home/All';
import Good from './Home/Good';
import Share from './Home/Share';
import Job from './Home/Job';
import Test from './Home/Test';
import Question from './Home/Question';

export default class Home extends Component {
    render() {
        let url =this.props.match.url
        return (
       
          <div class="panel">
            <div class="header">
                <Link class="tab-topic current-tab" to={url+'/all/1'}>全部</Link>
                <Link class="tab-topic current-tab" to={url+'/good/1'}>精华</Link>
                <Link class="tab-topic current-tab" to={url+'/share/1'}>分享</Link>
                <Link class="tab-topic current-tab" to={url+'/question/1'}>问答</Link>
                <Link class="tab-topic current-tab" to={url+'/job/1'}>招聘</Link>
                <Link class="tab-topic current-tab" to={url+'/test/1'}>客户端测试</Link>
            </div>
        
            <div>
              <Switch>
                <Route path={`${url}`+'/all/:page'} component={All}/>
                <Route path={`${url}`+'/good/:page'} component={Good}/>
                <Route path={`${url}`+'/share/:page'} component={Share}/>
                <Route path={`${url}`+'/question/:page'} component={Question}/>
                <Route path={`${url}`+'/job/:page'} component={Job}/>
                <Route path={`${url}`+'/test/:page'} component={Test}/>
                <Route path={'/home/topic/:page'} component={All}/>
                <Redirect from='/*' to={url+'/all/1'}/>  
              </Switch>
            </div>
         
          </div>
         
        )
    }
}
