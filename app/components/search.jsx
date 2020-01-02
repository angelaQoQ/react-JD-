
require('./search.css');
import React from 'react';

let Search = React.createClass({
	/**
	 * 组件在客户端被实例化,第一次创建会调用5个hook
	 *
	 *
	 * 初始化组件属性, 组件的所有实例间共享
	 * getDefaultProps :
	 * 		1.只会调用一次,该组件类后续所有应用都不会再调用getDefaultProps
	 * 		2.对象上的属性全部会挂载到this.props对象上
	 * 		3.此外初始化属性值还可以在 组件挂载时 通过标签属性赋值  <Search data="{ [1,2,3,4] }"/>
	 * 		4.在组件内使用this.props.组件属性名获取
	 *
	 *
	 * 初始化组件实例数据, 具体实例内私有
	 * getInitialState :
	 *		1.只会调用一次,初始化每个实例的state,在getInitialState方法内部可以访问到当前组件的props
	 * 		2.同Vue不同 数据同步, 修改数据要使用this.setState(属性, 值),这点与小程序相同
	 *
	 *
	 * shouldComponentUpdate
	 *
	 *
	 * 在首次渲染前调用, 在渲染页面render之前, 最后的修改state的机会
	 * componentWillMount
	 *
	 *
	 * 创建虚拟DOM, 用来表示组件的输出. render方法是必须的
	 * render
	 *		1. return的VDOM中只能通过 this.props||this.state访问数据, 不能修改
	 *		2. 只能返回一个根元素, 根元素里面有多少不管
	 *		3. 不能修改组件状态和输出
	 *
	 *
	 * 装载后触发, 真实DOM此刻出现
	 * componentDidMount ---> 在服务端实例化时不会调用
	 * 		1. 最早获取DOM对象的函数,类似Vue的mounted
	 *
	 * 总结: getInitialState和getDefaultProps的区别:
	 * 	组件类只调用一次的是getDefaultProps-实例共享, 每次实例化的时候getInitialState都调用-实例私有
	 *
	 *
	*/
	getInitialState: function () {
		return {
			bg: "transparent",
		}
	},
	componentDidMount: function () {

		window.onscroll = (event) => {
			let realHeight = document.documentElement.scrollTop || document.body.scrollTop;
			let optatic = 0.8 * (realHeight / 142);
			if (optatic <= 0.8) {
				this.setState({
					bg: `rgba(234, 44, 44, ${optatic})`,
				})
			}
		}
	},
	render: function () {
		let bColor = this.state.bg ? this.state.bg : 'transprent';
		return (
			<div id="search" className="pf" style={{ background: bColor }}>
				<div className="search pr">
					<div className="sl pa">
						<i></i>
					</div>
					<div className="frc pr">
						<span className="searchicon pa"></span>
						<form>
							<input placeholder="全场畅饮，部分低至99减50" type="text" />
						</form>
					</div>
					<div className="sub pa">
						<span>登录</span>
					</div>
				</div>
			</div>
		);
	}
})

module.exports = Search;
