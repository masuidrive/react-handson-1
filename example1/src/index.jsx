import React from 'react';
import { render } from 'react-dom';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function ItemList(props) {
  return <ul>{ props.children }</ul>
}

function Item(props) {
  var counter;
  var fontColor = 'black';

  if((typeof props.count) == 'undefined') {
    fontColor = 'gray';
  }
  else {
    counter = ` (${props.count})`;
    if(props.count <= 10) {
      fontColor = 'red';
    }
  }

  return <li style={ { color: fontColor } }>{ props.name }{ counter }</li>;
  // 無理して一行で書くなら三項演算子とか `||` を使う
  // return <li>{ props.name }{ (typeof props.count) != 'undefined' ? ` (${props.count})` : '' }</li>
}

render(
  <div>
    <Welcome name="your name" />
    <ItemList>
      <Item name="Foo" count={ 10 } />
      <Item name="Bar" count={ 30 } />
      <Item name="Buzz"/>
    </ItemList>
  </div>,
  document.getElementById('app')
);
