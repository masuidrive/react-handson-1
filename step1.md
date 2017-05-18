# StaticなReact

まずは、動かないReactのページを作ります。
プログラムというよりHTMLの代わりにJSXに慣れてください。



## JSの中に普通にHTMLが書けます

JSのコードの中にいきなりタグが入ります。

```
import React from 'react';
import { render } from 'react-dom';

render(
  <div>
    <h1>リスト</h1>
    <ul>
      <li>Foo</li>
      <li>Bar</li>
      <li>Buzz</li>
    </ul>
  </div>,
  document.getElementById('app')
);
```

実行されれる時、上記のコードは下記のようにコンパイルされます。

```
render(
  React.createElement("div", null, [ 
    React.createElement("h1", null, "リスト"),
    React.createElement("ul", null,[
      React.createElement("li", null, "Foo"),
      React.createElement("li", null, "Bar"),
      React.createElement("li", null, "Buzz")
    ])
  ]),
  document.getElementById('app')
)
```

## 式も書けます

JSX内部でも`{ ... }`で書こうと、JSの式を書くことができます。

```
import React from 'react';
import { render } from 'react-dom';

render(
  <div>
<<<<<<< HEAD
    <h1>{"リ" + "ス" + "ト"}</h1>
=======
    <h1>{ "リ" + "ス" + "ト" }</h1>
>>>>>>> master
    <ul>
      <li>Foo</li>
      <li>Bar</li>
      <li>Buzz</li>
    </ul>
  </div>,
  document.getElementById('app')
);
```

## スタイルはHashで渡すし、クラス名はclassNameで

コンポーネント(タグ)のアトリビュートはHTMLと同じように渡せますが、文字列型以外は`{...}`でJSのObjectとして渡します。

あと`class`だけ`className`になります

```
import React from 'react';
import { render } from 'react-dom';

render(
  <div>
    <h1>{"リ" + "ス" + "ト"}</h1>
    <ul>
      <li style={ { fontSize: 30 } }>Foo</li>
      <li className="listItem">Bar</li>
      <li>Buzz</li>
    </ul>
  </div>,
  document.getElementById('app')
);
```

CSSは普通にHTMLに追加

```
<style>
.listItem { color: red }
</style>
```

## コンポーネント(タグ)は自分で作れます

新しいコンポーネントを定義できます。

パラメータは第一引数で渡ってきます。


```
import React from 'react';
import { render } from 'react-dom';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

render(
  <div>
    <Welcome name="your name" />
    <ul>
      <li style={ { fontSize: 30 } }>Foo</li>
      <li className="listItem">Bar</li>
      <li>Buzz</li>
    </ul>
  </div>,
  document.getElementById('app')
);
```

## もうちょっと複雑に

`{ ... }`の中に書けるのは式だけ。なのでif文は書けません。

`{ ... }`の中にさらにJSXを書くこともできます。

```
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
  if((typeof props.count) != 'undefined') {
    counter = ` (${props.count})`;
  }
  return <li>{ props.name }{ counter }</li>;
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
```

### 演習

- `<Item/>`の`count`が定義されていない場合は文字を灰色に、`count`が10以下の場合は赤く、それ以外の場合は黒で表示する様に修正してください。
- カウンタの表示を少し小さめに表示してください



