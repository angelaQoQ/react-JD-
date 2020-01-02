import React from 'react' // 在 React V15.5 版本之前，类型校验的能力，和 react 是在一起；

import Swiper from "../lib/swiper.min.js"
import JSONP from "../util/jsonp.js"

export default class Counter extends React.Component {

	// 初始化私有的数据
	constructor(props) {
		super()
		this.state = {
			imgList:[]
		}
	}

	// 相当于 Vue 中的 created 函数；组件的 props 和 state 数据，都已经可以被访问了；
	componentWillMount() { }

	// 虚拟DOM正在被创建；当 render 执行完， 虚拟DOM才创建到内存中；
	render() {

		let countKey = 0
		return (<div>
			<div className="swiper-container">

				<div className="swiper-wrapper">

					{
						this.state.imgList.map((item)=>{
							return (

								<div className="swiper-slide" key={"slide"+countKey++}>
									<img src={item} alt=""/>
								</div>

							)
						})
					}

				</div>

				<div className="swiper-pagination"></div>

			</div>
		</div>)
	}

	// 已经第一次被渲染到页面上；相当于 Vue 中的 mounted 函数；用于初始化第三方插件
	componentDidMount() {
		JSONP(this.props.source, {}, "callback", function (res) {
			if (res.status == 1) {
				this.setState({
					imgList: res.data
				})
				new Swiper('.swiper-container', {
					loop: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					autoplay: 3000,
					autoplayDisableOnInteraction: false,
				})
			}
		}.bind(this))

	}

	// 运行阶段的第一个生命周期函数
	// 使用这个 函数，可以按需更新页面；减少不必要的 DOM 渲染；
	shouldComponentUpdate(nextProps, nextState) {
		// 注意： 在 shouldComponentUpdate 方法中，如果想获取 最新的 state 值，千万不要使用 this.state.***  会比 nextProps,nextState晚一步
		return true //更新
		// return false 不更新
	}

	// 运行阶段 第二个生命周期函数 【组件将要被更新】
	componentWillUpdate() {
		// console.log(document.getElementById('myh3').innerHTML)
	}

	componentDidUpdate() { }

	// 组件的 porps 被改变，会重新触发 componentWillRevceiveProps
	componentWillReceiveProps(nextProps) { // 组件将要接收新属性
		this.setState({
			data: nextProps.data
		})
	}
}
