import { Component } from 'react';

class Awesome extends Component {
  render() {
    return (
      <div className="my-awesome-component">
        Hello World
        {this.props.message && this.props.message}
      </div>
    );
  }
}

export default Awesome;
