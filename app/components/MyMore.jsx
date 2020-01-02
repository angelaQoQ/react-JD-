import React from 'react' // 在 React V15.5 版本之前，类型校验的能力，和 react 是在一起；

import "./MyMore.less"

import JSONP from '../util/jsonp'

import Swiper from '../lib/swiper.min.js';

export default class MyMore extends React.Component {

	// 初始化私有的数据
	constructor(props) {
		super()
		this.state = {
			list1: [],
			list2: []
		}
	}

	// 相当于 Vue 中的 created 函数；组件的 props 和 state 数据，都已经可以被访问了；
	componentWillMount() { }

	// 虚拟DOM正在被创建；当 render 执行完， 虚拟DOM才创建到内存中；
	render() {
		let count = 0
		return (<div className="more">
			<ul>
				{
					this.state.list1.map((item) => {
						return (
							<li className={count > 2 ? "b" : "t"} key={"key" + count++}>
								<a href={item.url}>
									<img src={item.icon} alt="" />
								</a>
							</li>
						)
					})
				}
			</ul>

			<div className="swiper-container2">
				<div className="swiper-wrapper">
					{
						this.state.list2.map((item) => {
							return (
								< div className="swiper-slide" key={"slide" + count++} >
									<a href={item.url}>
										<img src={item.icon} alt="" />
									</a>
								</div>
							)
						})
					}
				</div>
			</div>

		</div >)
	}

	// 已经第一次被渲染到页面上；相当于 Vue 中的 mounted 函数；用于初始化第三方插件
	componentDidMount() {
		JSONP(this.props.source, {}, "callback", function (res) {
			if (res.status == 1) {
				this.setState({
					list1: res.data.splice(0, 5),
					list2: res.data
				})
				console.log(res.data);

				new Swiper('.swiper-container2', {
					loop: true,
					autoplay: 3000,
					autoplayDisableOnInteraction: false,
				})
			}

		}.bind(this))
	}
}
