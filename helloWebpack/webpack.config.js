moule.exports = {   // 設定ファイルの外枠
    // mode:
    // development、production、noneの3種類。実行モードにより、コードの圧縮具合が異なる。
    // developmentの時、改行空白、コメントはそのまま。productionの時は改行空白コメントは削除。
    mode: 'development',
    // entry:
    // エントリーポイントの設定。各モジュールを読み込む設定を書く場所。
    // webpackはエントリーポイントを起点として、import命令を辿って依存するファイルを取得してバンドルする。
    // 今回は'.src/js/app.js'がエントリーポイント。ここにメインの処理を記述していく。
    entry: '.src/js/app.js',
    outout: {
        path: `${__dirname}/dist`,
        filename: `bundle.js`,
        publicPath: `/dist`
    },
};