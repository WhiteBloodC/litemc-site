# LiteMC 项目介绍页

为 LiteMC v20 制作的中文产品介绍页。浅色、留白、柔和绿色、磨砂玻璃界面，适配电脑和手机。纯 HTML / CSS / JavaScript，无需安装依赖或构建。

## 本地预览

直接打开 `index.html`，或在本目录运行：

```sh
python -m http.server 4173 --bind 127.0.0.1
```

浏览器访问 `http://127.0.0.1:4173`。

## 填写 GitHub 与下载地址

修改 `site.config.js`：

```js
window.LITEMC_SITE = {
  repository: 'https://github.com/你的用户名/你的仓库',
  windowsDownload: '',
  macosDownload: '',
};
```

仓库未填写时，按钮指向页面内的发布状态提示。填入仓库后，GitHub 链接自动启用，下载按钮默认进入该仓库 Releases；也可分别填写真实 HTTPS 安装包地址。页面不内置虚构地址、不提供启动器安装包。

## 放到 GitHub Pages

1. 将本目录的 `index.html`、`styles.css`、`script.js`、`site.config.js`、`.nojekyll` 和 `assets/` 上传到网站仓库根目录。
2. 在仓库 **Settings → Pages → Build and deployment** 选择 **Deploy from a branch**。
3. 选择存放网页的分支和 **/(root)**，保存。部署成功后，以 GitHub 显示的网址为准。

若合并到现有启动器仓库，也可以将网页文件放进 `docs/`，在 Pages 选择 **/docs**。保留现有 README 和启动器源码，无需替换应用文件。GitHub Pages 功能可用性以仓库与账号设置为准。

## 内容与素材

- 页面展示版本、加载器、模组、光影、账号、自定义目录、主题及游戏与下载并行等功能，依据当前 LiteMC v20 交付说明。
- 顶部产品窗口是为本页编写的交互式示意，支持导航与主题切换；不能在浏览器中实际启动或下载游戏。
- 背景取自启动器现有五套主题，压缩为 WebP。发布前应确认你拥有这些原素材的网页展示权限。
- Windows 与 macOS 的要求、构建和验证边界保留在页面文案中。无未经验证的性能、体积或安全宣传。
- 没有分析追踪、第三方字体、CDN 脚本或在线依赖。
