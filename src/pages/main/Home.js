import React, { Component } from 'react'
import { Flex, Carousel, Grid } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import { gethomelist } from '../../apis/apis'
/* const data = Array.from(new Array(9)).map((_val, i) => ({//括号为json对象
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
})); */
//前端维护的数据一般定在外头，或者抽取单独文件在引入
/* const data = [
    { icon: require(`../../assets/imgs/icon_1.png`), text: '新房' },
    { icon: require(`../../assets/imgs/icon_2.png`), text: '新房' },
    { icon: require(`../../assets/imgs/icon_3.png`), text: '新房' },
    { icon: require(`../../assets/imgs/icon_4.png`), text: '新房' },
    { icon: require(`../../assets/imgs/icon_5.png`), text: '新房' },
    { icon: require(`../../assets/imgs/icon_6.png`), text: '新房' },
    { icon: require(`../../assets/imgs/icon_7.png`), text: '新房' },
    { icon: require(`../../assets/imgs/icon_2.png`), text: '新房' },
    { icon: require(`../../assets/imgs/icon_1.png`), text: '新房' }
] */
const data = [//这种方式存数据比上方更方便维护
    { icon: 'icon_1', text: '新房' },
    { icon: 'icon_2', text: '新房' },
    { icon: 'icon_3', text: '新房' },
    { icon: 'icon_4', text: '新房' },
    { icon: 'icon_5', text: '新房' },
    { icon: 'icon_6', text: '新房' },
    { icon: 'icon_7', text: '新房' },
    { icon: 'icon_2', text: '新房' },
    { icon: 'icon_1', text: '新房' }
].map(v => ({//处理icon 拼接
    icon: require(`../../assets/imgs/${v.icon}.png`),
    text: v.text
}))

class Home extends Component {

    state = {
        city: '定位中',
        data: ['carousel_1', 'carousel_2', 'carousel_3'],
        imgHeight: 176,
        houselist: []
    }

    gowhere = (url) => {
        this.props.history.push(url)//父子组件传的this.props.history  也可以通过高阶组件
    }

    componentDidMount() {
        window.AMap.plugin('AMap.CitySearch', () => {
            var citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity((status, result) => {
                if (status === 'complete' && result.info === 'OK') {
                    let city = result.city
                    this.setState({ city })
                }
            })
        })

        this.gethome()

    }
    gethome = () => {//发送房产列表接口
        gethomelist()
            .then(res => {
                this.setState({ houselist: res.data })
                console.log(res);

            })
            .catch(err => {
                console.log(err);

            })

    }
    render() {
        let { houselist } = this.state
        return (
            <div>
                <Flex style={{ backgroundColor: '#29C775', height: 50 }}>
                    <div style={{ width: 80, color: '#fff', paddingLeft: 10 }} onClick={() => this.gowhere('/map')}>{this.state.city} ▼</div>
                    <Flex onClick={() => this.gowhere('/serch')} align='center' style={{ padding: 5, borderRadius: 15, backgroundColor: '#fff', flex: 1, marginLeft: 10 }}>
                        <img style={{ width: 20, height: 20, marginRight: 10 }} alt="" src={require('../../assets/imgs/search.png')}></img>
                        <span style={{}}>come Baby</span>
                    </Flex>
                    <img onClick={() => this.gowhere('/citilist')} style={{ width: 40, height: 40, marginLeft: 10 }} alt="" src={require('../../assets/imgs/map.png')}></img>
                </Flex>
                {/* 轮播图 */}

                <Carousel
                    infinite//无限循环
                >
                    {/* 插槽 */}
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require(`../../assets/imgs/${val}.jpg`)}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                            />
                        </a>
                    ))}
                </Carousel>
                {/* 九宫格*/}
                <Grid data={data} isCarousel />
                {/* 列表*/}
                <div>
                    {
                        houselist.map(v => {
                            return (//jsx对象
                                <Flex style={{ backgroundColor: "#fff", padding: 4 }} key={v.id}>
                                    <img src={v.pic} alt='' style={{ width: 100, height: 100 }}></img>
                                    <div style={{ flex: 1 }}>
                                        <Flex justify="between">
                                            <span>{v.name}</span>
                                            <span style={{ color: "pink", }}>{v.price}</span>
                                        </Flex>
                                        <div>{v.address}</div>
                                        <div>pool</div>
                                    </div>
                                </Flex>
                            )
                        })
                    }

                </div>


            </div>
        )
    }
}
export default withRouter(Home);//高阶函数  接受组件为参数返回一个新的组件