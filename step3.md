# フォームで入力しよう

## アイテムを追加できるようにstateへ入れる

```
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Foo", count: 10 },
        { name: "Bar", count: 30 },
        { name: "Buzz", count: 20 }
      ]
    }
  }

  render() {
    return (
      <div>
        <ItemList>
          { this.state.items.map((item) =>
            <Item name={ item.name } initCount={ item.count } />
          ) }
        </ItemList>
      </div>
    );
  }
}
```

## クリックの処理をItemからAppへ戻す

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
  return (
    <li>
      { props.name }{ counter }
      <button onClick={ props.onCountUp }>+ 1</button>
    </li>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Foo", count: 10 },
        { name: "Bar", count: 30 },
        { name: "Buzz", count: 20 }
      ]
    }
  }

  incrCount(idx) {
    // 直接変更しないようにarrayをdeep clone
    var newItems = JSON.parse(JSON.stringify(this.state.items));
    newItems[idx].count += 1;
    this.setState({ items: newItems });
  }

  render() {
    return (
      <div>
        <ItemList>
          { this.state.items.map((item, idx) =>
            <Item name={ item.name } count={ item.count } onCountUp={ (event) => this.incrCount(idx) } key={ idx } />
          ) }
        </ItemList>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
```

## 中間演習

- ItemListの下に、全カウントの合計を表示してください


## アイテム追加フォーム

```
// Appクラスのみ
class App extends React.Component {
  // ...中略...
  render() {
    return (
      <div>
        <div>
          <input placeholder="入力してね"/>
          <button>追加</button>
        </div>
        <ItemList>
          { this.state.items.map((item, idx) =>
            <Item name={ item.name } count={ item.count } onCountUp={ (event) => this.incrCount(idx) } key={ idx } />
          ) }
        </ItemList>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
```


## 追加ルーチン
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
  return (
    <li>
      { props.name }{ counter }
      <button onClick={ props.onCountUp }>+ 1</button>
    </li>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Foo", count: 10 },
        { name: "Bar", count: 30 },
        { name: "Buzz", count: 20 }
      ],
      formText: ""
    }
  }

  incrCount(idx) {
    // 直接変更しないようにarrayをdeep clone
    var newItems = JSON.parse(JSON.stringify(this.state.items));
    newItems[idx].count += 1;
    this.setState({ items: newItems });
  }

  updateFormText(text) {
    this.setState({
      formText: text
    });
  }

  addItem() {
    if(this.state.formText != "") {
      var newItems = JSON.parse(JSON.stringify(this.state.items));
      newItems.push({
        name: this.state.formText,
        count: 0
      })
      this.setState({
        items: newItems,
        formText: ""
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <input placeholder="入力してね" value={ this.state.formText } onChange={ (event) => this.updateFormText(event.target.value) }/>
          <button onClick={ (event) => this.addItem() }>追加</button>
        </div>

        <ItemList>
          { this.state.items.map((item, idx) =>
            <Item name={ item.name } count={ item.count } onCountUp={ (event) => this.incrCount(idx) } key={ idx } />
          ) }
        </ItemList>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
```