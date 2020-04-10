import React, { Component } from 'react'
import { TabBar, Switch } from 'antd-mobile';
import My from './My';
import Wechat from './Wechart';
import History from './Hisstroy';
import Home from './Home';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0,
            data: [
                { id: 0, title: '首页', num: "home" },
                { id: 1, title: "群聊", num: "wechat" },
                { id: 2, title: "历史", num: "historys" },
                { id: 3, title: "我的", num: "my" }
            ]
        };
    }

    renderContent(id) {

        switch (id) {
            case 0:
                /*   return <Home history={this.props.history} />;//传值 */
                return <Home />;
            case 1:
                return <Wechat />;
            case 2:
                return <History />;
            case 3:
                return <My />;
            default:
                return <div>首页</div>
        }

    }
    render() {
        let { data } = this.state
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                >
                    {data.map((v) => {
                        return (
                            <TabBar.Item
                                title={v.title}
                                key={v.id}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../../assets/imgs/' + v.num + '.png')}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../../assets/imgs/' + v.num + '_s.png')}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selected={this.state.selectedTab === v.id}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: v.id,
                                    });
                                }}
                                data-seed="logId"
                            >
                                {this.renderContent(v.id)}
                            </TabBar.Item>
                        )
                    })
                    }
                </TabBar>

            </div >
        );
    }
}
