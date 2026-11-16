'use strict';
const themes = {white:'白色 · 留一份纯粹',green:'浅绿 · 像清晨一样清新',pink:'粉色 · 温柔一点也很好',blue:'浅蓝 · 把天空带到身边',yellow:'浅黄 · 收集一束暖阳'};
document.querySelectorAll('.theme-picker button').forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.dataset.theme;
    document.querySelectorAll('.theme-picker button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('.app-demo, .theme-preview').forEach(item => { item.dataset.theme = theme; });
    document.getElementById('theme-name').textContent = themes[theme];
  });
});
const panels = {
  download: {title:'下载，简单有序。',description:'原版与模组加载器，在同一个地方管理。',rows:[['Minecraft Java','原版'],['Fabric / Forge','模组加载器'],['NeoForge / OptiFine','更多选择']]},
  mods: {title:'为世界加点想象。',description:'选择目标版本，搜索模组并查看前置依赖。',rows:[['搜索与浏览','发现模组'],['简介与依赖树','了解更多'],['按实例管理','保持有序']]},
  shaders: {title:'换一种光，看世界。',description:'为具备光影能力的实例挑选兼容光影。',rows:[['选择兼容实例','检查能力'],['搜索与下载','挑选光影'],['在游戏内启用','开始体验']]},
  settings: {title:'顺手，才是好设置。',description:'自定义目录、Java 与主题，保留你的习惯。',rows:[['文件与目录','自由选择'],['Java 与内存','按需配置'],['个性化','五种主题']]}
};
const panel = document.getElementById('demo-panel');
document.querySelectorAll('.demo-tab').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.demo-tab').forEach(item => {item.classList.toggle('active', item === button);item.setAttribute('aria-pressed', String(item === button));});
    const data = panels[button.dataset.view];
    panel.hidden = !data;
    if (data) {
      panel.replaceChildren();
      const heading = document.createElement('h3'); heading.textContent = data.title;
      const description = document.createElement('p'); description.textContent = data.description;
      panel.append(heading, description);
      data.rows.forEach(row => {const div = document.createElement('div');div.className='panel-row';row.forEach(value=>{const span=document.createElement('span');span.textContent=value;div.append(span);});panel.append(div);});
    }
  });
  button.setAttribute('aria-pressed', String(button.classList.contains('active')));
});
let toastTimer;
document.getElementById('demo-launch').addEventListener('click', () => {
  const toast = document.getElementById('demo-toast'); toast.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => {toast.hidden=true;}, 6000);
});
const config = window.LITEMC_SITE || {};
function safeHttps(value) {try {const url=new URL(value);return url.protocol==='https:'&&!url.username&&!url.password?url:null;} catch {return null;}}
const repoUrl = safeHttps(config.repository);
const repo = repoUrl && repoUrl.hostname==='github.com' && /^\/[\w.-]+\/[\w.-]+\/?$/.test(repoUrl.pathname) ? `${repoUrl.origin}${repoUrl.pathname.replace(/\/$/,'')}` : '';
if (repo) {
  document.querySelectorAll('.repo-link').forEach(link=>{link.href=repo;});
  document.getElementById('repository-status').textContent='在 GitHub 查看发布版本、更新记录与使用说明。';
}
document.querySelectorAll('.release-link').forEach(link => {
  const platform = link.dataset.platform;
  const direct = safeHttps(platform==='windows'?config.windowsDownload:config.macosDownload);
  const target = direct ? direct.href : repo ? `${repo}/releases` : '';
  if (target) {link.href=target;link.replaceChildren(document.createTextNode(direct?'下载 LiteMC ': '前往发布页 '));const arrow=document.createElement('span');arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');link.append(arrow);}
});
