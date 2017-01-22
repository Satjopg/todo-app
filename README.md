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
