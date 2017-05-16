# Reactハンズオン用資料

当日までに下記の環境構築をお願いします。

## 1. Dockerをインストールする

下記のURLを参考にしてDocker環境をインストールしてください。

### macOS
 - http://qiita.com/scrummasudar/items/750aa52f4e0e747eed68

### Windows10 Pro
 - http://qiita.com/busonx/items/849a861d8bb93c71bbe7

### Windows
 - http://qiita.com/maemori/items/52b1639fba4b1e68fccd
 - http://qiita.com/hidekuro/items/aa83583b20db5a6857d8


## 2. このリポジトリをcloneする
- `git clone https://github.com/masuidrive/react-handson-1.git`

## 3. 起動テストをする
- example1ディレクトリに移動して
- `docker-compose up`を実行する
- `app_1  | webpack: Compiled successfully.`と出たら、 `http://localhost:8080/` をブラウザで開く
- Windows環境でDocker toolboxの人は、localhostの代わりにDocker MachineのIPアドレスを指定してください
 - `$ docker-machine ip` で表示されます

## 4. ChromeのReact Developer Toolsをインストールする

Google Chromeをインストールして、[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)と[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)をインストールしておいてください




