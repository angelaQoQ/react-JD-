import React from 'react' // 在 React V15.5 版本之前，类型校验的能力，和 react 是在一起；
import JSONP from '../util/jsonp';

import './MyLike.less';

export default class MyLike extends React.Component {

	// 初始化私有的数据
	constructor(props) {
		super()
		this.state = {
			list: []
		}
	}

	// 相当于 Vue 中的 created 函数；组件的 props 和 state 数据，都已经可以被访问了；
	componentWillMount() { }

	// 虚拟DOM正在被创建；当 render 执行完， 虚拟DOM才创建到内存中；
	render() {
		return (<div className="guess-you-like">

			<ul>
				{
					this.state.list.map((item) => {
						return (
							<li>
								<a href={item.url}>
									<img src={item.icon} alt="" />
									<p className="desc">{item.desc}</p>
									<div className="price">
										<span className="pri">¥{item.price}</span>
										<a href={item.more} className="similar">看相似</a>
									</div>
								</a>
							</li>
						)
					})
				}
			</ul>

		</div>)
	}

	// 已经第一次被渲染到页面上；相当于 Vue 中的 mounted 函数；用于初始化第三方插件
	componentDidMount() {
		JSONP(this.props.source, {}, "callback", (res) => {
			console.log(res)
			if (res.status == 1) {
				this.setState({
					list: res.data
				})
			}
		})
	}
}
