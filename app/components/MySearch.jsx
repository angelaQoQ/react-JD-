import React from 'react' // 在 React V15.5 版本之前，类型校验的能力，和 react 是在一起；
// import Types from 'prop-types' // 导入类型校验的包
import './MySearch.less'

export default class Counter extends React.Component {
	// 为外界传递过来的 props 属性值，做类型校验
	// static propTypes = {
	// 	// 如果，外界在使用组件的时候，某个 props 属性是必须要被传递的，则 可以是用 isRequired 来进行标记；
	// 	data: Types.number.isRequired // 规定， 外界传递过来的 data 必须是 number，否则，就报错；
	// }

	// 如果外界在使用组件的时候，没有传递规定的属性值，则 组件内，需要有一个默认的属性值；
	// static defaultProps = {
	// 	data: 0
	// }

	// 初始化私有的数据
	constructor(props) {
		super()
		this.state = {
			placeHolder: "全场畅饮,部分低至1折",
			searchValue: "",
			opacity: 1,
		}
	}

	// 相当于 Vue 中的 created 函数；组件的 props 和 state 数据，都已经可以被访问了；
	componentWillMount() {
		this.windScroll()
	}

	// 虚拟DOM正在被创建；当 render 执行完， 虚拟DOM才创建到内存中；
	render() {

		return (
			<div id="my_search" style={{ "background": `rgba(3,3,3,${this.state.opacity})` }}>

				{/* logo */}
				<i className="jd_logo"></i>

				{/* 搜索框 */}
				<form className="search">
					<i onClick={this.search.bind(this)}></i>
					<input
						type="text"
						onKeyUp={this.changeSearchValue.bind(this)}
						// value={this.state.searchValue}
						// defaultValue={this.state.searchValue}
						placeholder={this.state.placeHolder} />
				</form>

				{/* 登录按钮 */}
				<a className="login" onClick={this.login} >登录</a>


			</div>)
	}

	// Methods---------------------------------
	login() {
		console.log("跳转登录页");
		return false;
	}

	search(e) {
		console.log("跳转搜索页,搜索内容:" + this.state.searchValue);
	}

	changeSearchValue(e) {
		this.setState({
			searchValue: e.target.value
		})
		console.log(this.state.searchValue);
	}

	windScroll() {
		let that = this
		window.onscroll = function (e) {

			let scrollTop = document.documentElement.scrollTop - 0
			if(scrollTop<18){
			}else if(scrollTop > 36){
				that.setState({
					'opacity': 0.3
				})
			}else{
				that.setState({
					'opacity': (36 / Math.ceil(scrollTop)).toFixed(2)
				})
			}
		}
	}


	// HOOKS----------------------------------
	// 已经第一次被渲染到页面上；相当于 Vue 中的 mounted 函数；用于初始化第三方插件
	componentDidMount() { }

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
