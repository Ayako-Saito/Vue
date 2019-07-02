module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
        publicPath: '/dist'
    },
};
// mode:
// development、production、noneの3種類。実行モードにより、コードの圧縮具合が異なる。
// developmentの時、改行空白、コメントはそのまま。productionの時は改行空白コメントは削除。
// entry:
// エントリーポイントの設定。各モジュールを読み込む設定を書く場所。
// webpackはエントリーポイントを起点として、import命令を辿って依存するファイルを取得してバンドルする。
// 今回は'.src/js/app.js'がエントリーポイント。ここにメインの処理を記述していく。
// output:
// バンドル結果の出力設定。
// 出力するファイル名や出力先のパスを指定する。 
// path: 出力先のディレクトリを指定
// filename: 出力時のファイル名
// publicPath: webpackのプラグインが利用する。本番のビルド時にコンパイルしたファイル内のURLを変更。