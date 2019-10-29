import React from 'react';
import Board from './components/Board/Board';
class App extends React.Component {

  constructor(props) {
    super(props);

    /*App State will be stored here */
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Board size={5} />
      </div>
    );
  }
}

export default App;