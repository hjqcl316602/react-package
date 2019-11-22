# ready

## 支持less
1.安装 less less-loader
yarn add less less-loader

2.配置
首先需要将项目的配置文件暴露出来，yarn eject
找到config->webpack.config.js

~~~
添加less配置1
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
添加less配置2
{
  test: lessRegex,
  exclude: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
    },
    'less-loader'
  ),
  // Don't consider CSS imports dead code even if the
  // containing package claims to have no side effects.
  // Remove this when webpack adds a warning or an error for this.
  // See https://github.com/webpack/webpack/issues/6571
  sideEffects: true,
},
// Adds support for CSS Modules, but using SASS
// using the extension .module.scss or .module.sass
{
  test: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
      modules: true,
      getLocalIdent: getCSSModuleLocalIdent,
    },
    'less-loader'
  ),
}
~~~

