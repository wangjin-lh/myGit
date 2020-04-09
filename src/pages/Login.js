import React, { Component } from 'react'
import { Flex, List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { getlogin } from '../apis/apis'


export default class Login extends Component {
    state = {
        name: '',
        pwd: ''
    }
    //登录
    loginHandler = () => {
        // console.log(this.refs.name.state.value);不受控获取值
        let { name, pwd } = this.state
        const parms = {
            password: pwd,
            phoneNum: name,
        }
        getlogin(parms).then(res => {
            console.log(res);

            //跳转到首页  保存token值
            const { token, data } = res
            if (token) {
                localStorage.setItem('token', token)
                localStorage.setItem('phoneNum', data.phoneNum)
                this.props.history.push('/main')
            } else {
                console.log(111);
            }
        })
    }
    getName = (val) => {
        this.setState({ name: val })
    }
    getPwd = (val) => {
        this.setState({ pwd: val })
    }
    render() {
        return (
            <div style={{ backgroundColor: '#fff', height: '100%' }}>
                <Flex justify="center" style={{ paddingTop: 50 }}>
                    <img alt='' style={{ width: 100, height: 100 }} src={require('../assets/imgs/logo.png')} />
                </Flex>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WingBlank size="lg">
                    <List>
                        <InputItem
                            ref='name'
                            value={this.state.name}
                            onChange={this.getName}
                            placeholder="请输入手机号"
                        >
                            {/* {<div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} /> }*/}
                            <div><i className="iconfont icon-user" style={{ fontSize: 25, color: '#29C775' }}></i></div>
                        </InputItem>

                        <InputItem
                            ref='pwd'
                            value={this.state.pwd}
                            onChange={this.getPwd}
                            placeholder="请输入密码"
                        >
                            <div><i className="iconfont icon-pwd" style={{ fontSize: 25, color: '#29C775' }}></i></div>
                        </InputItem>
                    </List>
                    <WhiteSpace size="xl" />
                    <Button style={{ backgroundColor: '#29C775', color: '#fff' }} onClick={this.loginHandler}>登录</Button>
                    <WhiteSpace />
                    <Flex justify="between">
                        <Link to="/reg" style={{ color: '#29C775' }}>手机快速注册</Link>
                        <Link to="/person" style={{ color: '#29C775' }}>忘记密码</Link>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
}
