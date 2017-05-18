import React from 'react';
import { render } from 'react-dom';

function ItemList(props) {
  return <ul>{ props.children }</ul>
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initCount
    }
  }

  incrCount() {
    this.setState({
      count: (this.state.count || 0) + 1
    });
  }

  render() {
    var counter;
    if((typeof this.state.count) != 'undefined') {
      counter = ` (${this.state.count})`;
    }
    return (<li>
      { this.props.name }{ counter }
      <button onClick={ (event) => this.incrCount() }>+ 1</button>
    </li>);
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ItemList>
          <Item name="Foo" initCount={ 10 } />
          <Item name="Bar" count={ 30 } />
          <Item name="Buzz"/>
        </ItemList>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));