const base = {
  htmlFiles: 'html/**/*.html',
  apiFiles: 'api/**/*.md',
  htmlPath: 'html/',
  apiPath: 'api/'
}

// md => html 渲染配置
const renderOptions = {
  base: base.apiPath,
  dest: base.htmlPath, // 渲染后文件存放目
  themeTemplate: 'default',
  // ... 其它配置参考
  // https://github.com/danielgtaylor/aglio#agliorender-blueprint-options-callback
}

// Mock 配置
const drakovOptions = {
  serverPort: 8000, // server 地址 localhost:8000
  watch: true,
  sourceFiles: base.apiFiles,
  staticPaths: base.htmlPath,
  // ... 其它配置参考 https://github.com/Aconex/drakov
}

module.exports.base = base
module.exports.renderOptions = renderOptions
module.exports.drakovOptions = drakovOptions
