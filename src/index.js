import React from 'react';
import { render } from 'react-dom';
import TimeUnit from './components/TimeUnit';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: ++this.state.count
      });
    }, 1000);
  }
  render() {
    console.log(this.state.count);
    return (
      <div>
        <TimeUnit number={this.state.count} label="Seg"/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
