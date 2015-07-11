'use strict';

import React, {PropTypes} from 'react';
import {Form} from 'formsy-react';
import Input from './FormControls/Input';

export default class extends React.Component {
	static defaultProps = {};
	static propTypes = {};
	static contextTypes = {
		router: PropTypes.func.isRequired
	};

	constructor(props, context) {
		super(props, context);
		this.state = {
			isDisabled: true
		};
	}

	render() {
		return (
			<Form onValidSubmit={loadBoard.bind(this)} onValid={enable.bind(this, true)}
			      onInvalid={enable.bind(this, false)}> <Input name="username" required isInline={true}
			                                                   validationError="username is required"
			                                                   placeholder="username"/><span>/</span><Input
				name="repoName" required isInline={true}
				validationError="repository name is required"
				placeholder="repository name"/>
				<button type="submit" disabled={this.state.isDisabled}>
					View
				</button>
			</Form>
		);
	}
}

function enable(isValid) {
	this.setState({isDisabled: !isValid});
}

function loadBoard(model) {
	var {loadBoard} = this.props;
	var accountType = 'github';
	var username = model.username;
	var repoName = model.repoName;
	loadBoard(accountType, username, repoName)
		.then(() => {
			this.context.router.transitionTo(`/${accountType}/${username}/${repoName}`);
		})
}