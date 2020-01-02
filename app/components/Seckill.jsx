import React from 'react' // 在 React V15.5 版本之前，类型校验的能力，和 react 是在一起；

import './Seckill.less'

import JSONP from '../util/jsonp'

export default class Seckill extends React.Component {

	// 初始化私有的数据
	constructor(props) {
		super()
		this.state = {
			more: "",
			goodsList: [],
			times: "",
			hour: 0,
			min: 0,
			sec: 0
		}
	}

	// 相当于 Vue 中的 created 函数；组件的 props 和 state 数据，都已经可以被访问了；
	componentWillMount() { }

	// 虚拟DOM正在被创建；当 render 执行完， 虚拟DOM才创建到内存中；
	render() {
		let countid = 0;

		return (<div>
			<div className="time-left">
				<i className="clock"></i>
				<span className="hadle-time">掌上时间</span>
				<span className="squre-time">{this.state.hour}</span>
				<div className="squre-dot">:</div>
				<span className="squre-time">{this.state.min}</span>
				<div className="squre-dot">:</div>
				<span className="squre-time">{this.state.sec}</span>
				<a href={this.state.more} className="more" >更多秒杀 > </a>
			</div>

			<div className="goods">
				<ul>
					{
						this.state.goodsList.map((item) => {
							return (

								<li key={'key' + countid++}>
									<a href={item.url}>
										<img src={item.icon} alt="" />
										<p className="p1">¥{item.sprice}</p>
										<p className="p2">¥{item.price}</p>
									</a>
								</li>

							)
						})
					}
				</ul>

			</div>

		</div>)
	}

	// 已经第一次被渲染到页面上；相当于 Vue 中的 mounted 函数；用于初始化第三方插件
	componentDidMount() {
		JSONP(this.props.source, {}, "callback", function (res) {
			if (res.status == 1) {
				console.log(res);
				this.setState({
					more: res.more,
					goodsList: res.data,
					times: res.times
				})
				this.setTIme(res.times)
			}
		}.bind(this))


	}

	setTIme(time) {
		let that = this
		let hour = 0
		let min = 0
		let sec = 0
		window.setInterval(() => {
			time -= 1
			hour = parseInt(time / 3600)
			hour = hour > 10 ? hour : '0' + hour

			min = parseInt((time - (hour * 3600)) / 60)
			min = min > 10 ? min : '0' + min

			sec = parseInt(time % 60)
			sec = sec > 10 ? sec : '0' + sec

			that.setState({
				hour,
				min,
				sec
			})
		}, 1000)
	}
}
