#　stateを使って動くページを作ろう

## stateを使えるようにクラスでコンポーネントを作る

コンポーネントに保存する変数はstateと呼びます。

(コードを短くするためにWelcomeは消します)

参考: http://qiita.com/kotaroito/items/e36ebac185b6b1d8538d

```
import React from 'react';
import { render } from 'react-dom';

function ItemList(props) {
  return <ul>{ props.children }</ul>
}

function Item(props) {
  var counter;
  if((typeof props.count) != 'undefined') {
    counter = ` (${props.count})`;
  }
  return (<li>
    { props.name }{ counter }
  </li>);
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ItemList>
          <Item name="Foo" count={ 10 } />
          <Item name="Bar" count={ 30 } />
          <Item name="Buzz"/>
        </ItemList>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
```

## ボタンを配置してイベントを設置

基本的にDOMから値は読まないので、入力値はイベントで受け取ります。

`onClick`の中で書かれている`(event) => this.incrFoo()`は、`(function(event) { this.incrFoo() }).bind(this)`と等価です。

参考: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/arrow_functions

```
// Appクラスだけ差し替え
class App extends React.Component {
  incrFoo() {
    console.log("incr");
  }

  render() {
    return (
      <div>
        <ItemList>
          <Item name="Foo" count={ 10 } />
          <Item name="Bar" count={ 30 } />
          <Item name="Buzz"/>
        </ItemList>
        <button onClick={ (event) => this.incrFoo() }>Foo + 1</button>
      </div>
    );
  }
}
```

### カウンターの値をstateに

stateの初期化は直接行ってもいいけど、更新は必ず`this.setState(...)`で行う

参考: https://facebook.github.io/react/docs/state-and-lifecycle.html

```
// Appクラスだけ差し替え
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fooCounter: 0
    }
  }

  incrFoo() {
    this.setState({
      fooCounter: this.state.fooCounter + 1
    });
    // この時点ではthis.stateは書き換わっていない
  }

  render() {
    return (
      <div>
        <ItemList>
          <Item name="Foo" count={ this.state.fooCounter } />
          <Item name="Bar" count={ 30 } />
          <Item name="Buzz"/>
        </ItemList>
        <button onClick={ (event) => this.incrFoo() }>Foo + 1</button>
      </div>
    );
  }
}
```

### 演習

- `<button>`を`<Item>`の中に移動しよう
- 三行とも別々のカウンターが動くように
