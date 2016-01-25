import React, {Component, PropTypes} from 'react';

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
      	{data.map(item => <li>item</li>)}
      </ul>
    );
  }
}
