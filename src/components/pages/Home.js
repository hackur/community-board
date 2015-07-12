'use strict';

import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'redux/react';
import * as Board from './../../modules/Board';
import BoardSelector from './../BoardSelector';

@connect(state => ({})) class Home extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		var {
			dispatch
			} = this.props;
		return (
			<main>
				<h1>Community Board</h1>

				<p>Community board is a kanban style board powered by GitHub Issues.</p>

				<h2>View a GitHub Issue Board</h2>
				<BoardSelector />
			</main>
		);
	}
}
export default Home;