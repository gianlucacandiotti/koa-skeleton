import React, {Component} from 'react';
import ExamplePure from '../../pure/ExamplePure/ExamplePure';

export default class ExampleContainer extends Component {
  state = {
    data: [
    	'Hello',
    	'World',
    	'Example'
    ]
  };

  render() {
  	const {
  		data
  	} = this.state;

    return (
      <ExamplePure data={data} />
    );
  }
}
