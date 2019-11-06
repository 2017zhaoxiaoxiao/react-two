import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Login extends Component {
   
    render() {
       
        return (
            <div>
                <div style={{width:900,height:52,backgroundColor:'#f6f6f6'}}>
                    <span style={{color:'#80bd01'}}>主页</span>/登录
                </div>
                <div style={{backgroundColor:'#ffffff',paddingTop:40}}>
                    <form id='signin_form'  action='/signin' method='post'>
                    <div style={{fontSize:14,marginBottom:20}}>
                        <label style={{fontSize:14,fontWeight:400}} >用户名</label>
                        <div style={{marginBottom:20}}>
                            <input style={{width:284,height:30,borderRadius:4}} id='name' name='name' size='30' type='text'/>
                        </div>
                    </div>
                    <div style={{fontSize:14,marginBottom:20}}>
                        <label for='pass'>密码</label>      
                        <div>
                            <input style={{width:284,height:30,borderRadius:4}} id='pass' name='pass' size='30' type='password'/>
                        </div>
                    </div>
                    <Link to='/home/all'>
                        <input type='submit'  style={{borderRadius:3,width:52,height:34,backgroundColor:'#08c'}} value='登录'/>
                    </Link>
                    </form>
                </div>
            </div>
        
        )
    }
}
