# LiteMC · Product website

默认英文，可切换简体中文。包含交互式启动器演示、五色主题、滚动渐变叙事、核心功能与细节介绍。包含下载入口、Jayon Workshop 工作室标识及联系邮箱 jayonwang08@gmail.com。

## 上传与更新

交付包里的 `index.html` 是完整网页：样式、脚本、图标和五套背景全部内嵌。只需将它覆盖到 GitHub Pages 当前使用的目录（根目录或 docs），并提交推送。保留 `.nojekyll` 即可。

无需另外上传 assets、styles.css 或 script.js；网页不会再加载旧版外部脚本和样式。下载压缩包后请先解压，不要把 ZIP 本身作为网页上传。

## 下载与联系

顶部和首页按钮进入下载区，下载区按钮打开 site.config.js 中的 downloadUrl。当前已接入 https://github.com/WhiteBloodC/LiteMC-Release/releases 。修改配置后运行 python build_site.py。下载链接在构建时写入页面，即使 JavaScript 不可用也能打开。邮箱使用 mailto 链接，交给访客自己的邮件应用处理，网页不会自动发送邮件。

## 滚动方式

电脑端只在 01 / 02 / 03 分屏区按滚轮手势逐幕切换，并可使用左右箭头按钮选择。功能宫格与其他内容保持自然滚动；手机和系统“减少动态效果”模式不接管滚轮。

## 本地预览

双击 index.html 即可使用。开发时也可运行 `python preview_server.py`，访问 http://127.0.0.1:4174。预览服务只返回本页，不公开其他项目文件。

## 修改源码

- 页面结构与英文回退内容：site.template.html
- 两套语言与交互、动画：script.js
- 样式与响应式布局：styles.css
- 下载地址（downloadUrl）与可选 GitHub 项目链接：site.config.js
- 现有主题图片和图标：assets/

修改后运行 `python build_site.py`，重新生成 index.html。构建仅使用 Python 标准库，无需安装依赖。交付包只包含发布文件；上述开发文件保留在本地工程。

页面中的产品窗口是交互式概念演示，不在浏览器中实际启动或安装游戏。滚动动画尊重系统“减少动态效果”设置；没有 JavaScript 时，英文内容仍然可阅读。产品功能依据 LiteMC v20 交付资料，素材沿用现有启动器背景。
