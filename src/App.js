import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable'
import Login from './pages/Login'


//懒加载 Loadable的两个配置项loader和loading的值必须是函数

const Loding = () => <div>加载中。。。</div>//函数组件

const Main = Loadable({
  loader: () => import(/*webpackChunkName:'Main'*/'./pages/main/Main'),
  loading: Loding
})
const Reg = Loadable({
  loader: () => import(/*webpackChunkName:'reg'*/'./pages/Reg'),
  loading: Loding
})
const Person = Loadable({
  loader: () => import(/*webpackChunkName:'person'*/'./pages/Person'),
  loading: Loding
})
const Citilist = Loadable({
  loader: () => import(/*webpackChunkName:'Citilist'*/'./pages/Citilist'),
  loading: Loding
})
const Serch = Loadable({
  loader: () => import(/*webpackChunkName:'Serch'*/'./pages/Serch'),
  loading: Loding
})
const Map = Loadable({
  loader: () => import(/*webpackChunkName:'Map'*/'./pages/Map'),
  loading: Loding
})
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/main' exact component={Main} />
          <Route path='/reg' exact component={Reg} />
          <Route path='/person' exact component={Person} />
          <Route path='/serch' exact component={Serch} />
          <Route path='/citilist' exact component={Citilist} />
          <Route path='/map' exact component={Map} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
