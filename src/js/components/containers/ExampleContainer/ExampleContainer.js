import React, {Component} from 'react';
import ExamplePure from '../../pure/ExamplePure/ExamplePure';

export default class ExampleContainer extends Component {
	render() {
		const {
			data
		} = this.props;

		return (
			<ExamplePure data={data} />
		);
	}
}
