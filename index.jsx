
require('./app/lib/common.css');
import "./app/lib/swiper.min.css"

import React from 'react';
import ReactDOM from 'react-dom';

import Search from './app/components/search.jsx';
import MySearch from './app/components/MySearch.jsx'

import Header from './app/components/header.jsx';
import MyHeader1 from './app/components/MyHeader1.jsx'

import Otherapp from './app/components/otherapp.jsx';
import Apps from './app/components/apps.jsx';

import Spike from './app/components/spike.jsx';
import Seckill from './app/components/Seckill.jsx';

import More from './app/components/more.jsx';
import MyMore from './app/components/MyMore.jsx';

import Like from './app/components/like.jsx';
import MyLike from './app/components/MyLike'


ReactDOM.render(
	<div>
		{/* <Search /> */}
		<MySearch />

		{/* <Header source="http://localhost:3000/data/swiper" /> */}
		{/* <MyHeader source="http://localhost:3000/data/swiper" /> */}
		<MyHeader1 source="http://localhost:3000/data/swiper" />

		{/* <Otherapp source="http://localhost:3000/data/otherapp" /> */}
		<Apps source="http://localhost:3000/data/otherapp" />

		<Seckill source="http://localhost:3000/data/spike" />
		{/* <Spike source="http://localhost:3000/data/spike" /> */}

		<MyMore source="http://localhost:3000/data/more" />
		{/* <More source="http://localhost:3000/data/more" /> */}


		<MyLike source="http://localhost:3000/data/like" />
		{/* <Like source="http://localhost:3000/data/like" /> */}
	</div>,
	document.querySelector("#myApp")
);
