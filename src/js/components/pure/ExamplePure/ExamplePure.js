import React, {Component, PropTypes} from 'react';
import {map} from 'ramda';

export default class ExamplePure extends Component {
	static propTypes = {
		data: React.PropTypes.array
	};

	render() {
		const {
			data
		} = this.props;

		return (
			<ul>
				{map(item => <li key={item.id}>{item.title}</li>, data)}
			</ul>
		);
	}
}