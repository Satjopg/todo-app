# To-Do APP
* React.jsを使ってToDoアプリを作成！

# 作成手順
1. taskの追加
2. toggleの追加
3. taskの削除
4. localStorageへの保存機能の追加

と行っていく。

# taskの追加
Componentに分解すると以下のように考えられる。  

親:TodoApp(追加したタスク全ての値を管理)  
子:TaskList(追加したタスクのリストの管理)  
子:TaskForm(追加したいタスクの入力欄)  

実装する機能としては、タスクを入力欄に記述し  
その内容を表示する。  
また、追加された分もつなげて表示をする。

# toggleの追加
toggleと言うのはこのように<s>打ち消し線</s>をすること。  
この機能は、タスクが完了か否かを判断するのに使用できる。  

やること：  
まず、タスクをComponentとして定義し直すことである。  
これは、タスクの要素がinputの値以外にも  
完了かどうかを判断する値が必要になるからである。  
また、それと同時に完了かどうかの入力を受け取る欄がタスクごとにひつようとなる。  
なので、Componentとしてタスクを作り直す。

この定義により、Taskが持つ値は  
textと完了の２つになる。ゆえに、これも定義し直す必要がある。  

# かっけえデザイン
1. reactstrapの利用  

 * package.jsonに以下を追記
  ```json
  "dependencies": {
    ...
    "reactstrap": "^3.9.1",
    "react-addons-css-transition-group": "^15.4.1",
    "react-addons-transition-group": "^15.4.1"
  }
  ```
 * ターミナルでinstall
   ```
   $ npm install
   ```
 * HTMLタグに応じてimportを行うと適応される。(今回のはシンプルすぎて全然かわらんけど...)
  ```javascript
  // 例:div要素のContainerが利用されていたとき
  import { Container } from "reactstrap";
  ```

2. material-uiの利用
 * package.jsonに以下のように追記  
 ```json
 "dependencies": {
   ...
   "material-ui": "^0.16.4",
   "react-tap-event-plugin": "^2.0.1"
 }
 ```
 * ターミナルでインストール
 ```
 $ npm install
 ```
 * あとはSource参照！！(これは変わる！！)
