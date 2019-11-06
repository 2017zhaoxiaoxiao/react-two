import React, { Component } from 'react';
import Header from './components/Header';
import {HashRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import Start from './container/Start';
import About from './container/About';
import Login from './container/Login';
import Topic from './container/content/Topic';
import TopicAsk from './container/content/TopicAsk';
import TopicShare from './container/content/TopicAsk';
import TopicGood from './container/content/TopicGood';
import TopicJob from './container/content/TpoicJob';

export default class App extends Component {
    render() {
        return (
            <Router>
               <div>
                 <Header/>
                 <div className='main'>
                    <div className="content">
                        <Route path='/home' component={Home}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/about' component={About}/>
                        <Route path='/login' component={Login}/>
                        <Route path={'/all/:page/:id'} component={Topic}/>
                        <Route path={'/share/:page/:id'} component={TopicShare}/>
                        <Route path={'/ask/:page/:id'} component={TopicAsk}/>
                        <Route path={'/good/:page/:id'} component={TopicGood}/>
                        <Route path={'/job/:page/:id'} component={TopicJob}/>
                    </div>
                    <div className="sider">


                    </div>
                 </div>
               </div>
            </Router>
        )
    }
}
