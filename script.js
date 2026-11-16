'use strict';
const copy = {
  en: {
    pageTitle: 'LiteMC — A little lighter. A world of possibility.',
    description: 'A little lighter. A world of possibility. Meet LiteMC, a thoughtfully simple Minecraft Java launcher.',
    skip: 'Skip to content', navigation: 'Main navigation', navFeatures: 'Overview', navAppearance: 'Design', comingSoon: 'Coming soon',
    eyebrow: 'A fresh way into Minecraft Java.', heroLine1: 'A little lighter.', heroLine2: 'A world of possibility.',
    heroDescription: 'Your versions, mods, and shaders. Beautifully together.', explore: 'Meet LiteMC',
    showcaseLabel: 'Interactive launcher concept', demoNavigation: 'Preview navigation', play: 'Play', versions: 'Versions', mods: 'Mods', shaders: 'Shaders', settings: 'Settings',
    ready: 'A new world awaits.', launch: "Let's play", toast: 'Your next adventure. Coming soon.', caption: 'Less in the way. More in your world.', concept: 'Interactive concept',
    compatibility: 'One launcher. So many ways to play.', featuresKicker: 'THOUGHTFULLY SIMPLE.', featuresLine1: 'Everything you need.', featuresLine2: 'Room for what you love.',
    versionsTitle: 'Every world, its own space.', versionsCopy: 'From vanilla to modded. Keep your versions organized and your instances separate.',
    vanillaNote: 'Back to the essentials.', fabricNote: 'Make it your own.', forgeNote: 'A little more possibility.', installed: 'Installed',
    modsShaders: 'Mods & shaders', modsTitle: 'Familiar blocks. Fresh ideas.', modsCopy: 'Discover mods, explore dependencies, and find shaders for compatible instances.', madeForWorld: 'A world that feels like you.',
    flow: 'In your flow', flowLine1: 'Keep playing.', flowLine2: 'Keep exploring.', flowCopy: 'Manage downloads, mods, and shaders while your game keeps running.',
    gameRunning: 'Minecraft is running', inGame: 'In game', nextWorld: 'Preparing your next world',
    yourSpace: 'Your space', accountTitle: 'Your name. Your way.', accountCopy: 'Microsoft accounts or an offline nickname. Your folders, your Java, your preferences.', accountNote: 'Adventure looks good on you.', offline: 'Offline',
    appearanceKicker: 'A LITTLE MORE YOU.', appearanceLine1: 'Five shades.', appearanceLine2: 'One good feeling.', appearanceCopy: 'Soft color. Frosted glass. A view worth opening.', themePicker: 'Choose a theme',
    glassTitle: 'A fresh perspective.', glassNote: 'Your world, beautifully framed.',
    soonKicker: 'GOOD THINGS TAKE A LITTLE TIME.', soonLine1: 'Your next adventure.', soonLine2: 'Coming soon.', soonCopy: 'Something lighter is on the way.', inWorks: 'In the making',
    footerLine: 'A little lighter. A world of possibility.', backTop: 'Back to top ↑', legal: 'An independent launcher. Not affiliated with Mojang or Microsoft.',
    themeLabels: {white:'White', green:'Sage', pink:'Blush', blue:'Sky', yellow:'Butter'},
    themes: {white:'White. Simply serene.', green:'Sage. A breath of fresh air.', pink:'Blush. A softer kind of joy.', blue:'Sky. A little room to dream.', yellow:'Butter. A touch of sunshine.'},
    panels: {
      download: {title:'Your worlds, together.', description:'Vanilla or modded. Find your next starting point.', rows:[['Minecraft Java','Vanilla'],['Fabric / Forge','Mod loaders'],['NeoForge / OptiFine','More possibilities']]},
      mods: {title:'Make room for more.', description:'Find mods that fit your world.', rows:[['Search & discover','Find your favorites'],['Details & dependencies','See what fits'],['Instance management','Keep it organized']]},
      shaders: {title:'See it in a new light.', description:'Discover shaders for compatible instances.', rows:[['Choose an instance','Check compatibility'],['Browse shaders','Find your look'],['Enable in game','Enjoy the view']]},
      settings: {title:'Feels like your own.', description:'The little details, just how you like them.', rows:[['Folders','Your own space'],['Java & memory','Your preferences'],['Appearance','Five soft shades']]}
    }
  },
  zh: {
    pageTitle: 'LiteMC — 轻一点，玩尽想象。', description: 'LiteMC，一款简洁的 Minecraft Java 启动器。版本、模组与光影，恰到好处地融为一体。',
    skip: '跳转到内容', navigation: '主导航', navFeatures: '概览', navAppearance: '设计', comingSoon: '敬请期待',
    eyebrow: '开启 Minecraft Java 的新方式。', heroLine1: '轻一点，', heroLine2: '玩尽想象。', heroDescription: '版本、模组与光影，恰到好处地融为一体。', explore: '认识 LiteMC',
    showcaseLabel: '启动器交互式概念演示', demoNavigation: '演示导航', play: '启动', versions: '版本', mods: '模组', shaders: '光影', settings: '设置',
    ready: '下一个世界，等你出发。', launch: '启动游戏', toast: '下一场冒险，敬请期待。', caption: '让准备少一点，让世界多一点。', concept: '交互式概念演示',
    compatibility: '一个入口，不止一种玩法。', featuresKicker: '简单，经过用心。', featuresLine1: '所需，都在。', featuresLine2: '所爱，尽情。',
    versionsTitle: '每个世界，各有空间。', versionsCopy: '从原版到模组世界，版本井然有序，实例各自独立。', vanillaNote: '回归简单的快乐。', fabricNote: '玩出自己的风格。', forgeNote: '多一点可能。', installed: '已安装',
    modsShaders: '模组与光影', modsTitle: '熟悉的方块，全新的灵感。', modsCopy: '发现模组，查看前置依赖，为兼容实例挑选喜欢的光影。', madeForWorld: '让世界，更像你。',
    flow: '自在，不间断', flowLine1: '世界在运行。', flowLine2: '灵感不必等。', flowCopy: '游戏运行时，依然可以下载版本、管理模组与光影。',
    gameRunning: 'Minecraft 运行中', inGame: '尽情探索', nextWorld: '为下一个世界做好准备',
    yourSpace: '你的空间', accountTitle: '你的名字，你的玩法。', accountCopy: '微软账号或离线昵称，自由切换。目录、Java 与偏好，延续你的习惯。', accountNote: '下一场冒险，属于你。', offline: '离线昵称',
    appearanceKicker: '多一点，你的风格。', appearanceLine1: '五种色彩，', appearanceLine2: '一样心动。', appearanceCopy: '柔和配色，通透磨砂。每次打开，都是好风景。', themePicker: '选择主题',
    glassTitle: '换个角度，心动如初。', glassNote: '为你的世界，留一扇好看的窗。',
    soonKicker: '美好，值得一点等待。', soonLine1: '下一场冒险，', soonLine2: '敬请期待。', soonCopy: '更轻盈的体验，即将到来。', inWorks: '用心准备中',
    footerLine: '轻一点，玩尽想象。', backTop: '回到顶部 ↑', legal: '独立第三方启动器，与 Mojang 或 Microsoft 无隶属关系。',
    themeLabels: {white:'白色', green:'浅绿', pink:'粉色', blue:'浅蓝', yellow:'浅黄'},
    themes: {white:'白色 · 留一份纯粹', green:'浅绿 · 像清晨一样清新', pink:'粉色 · 温柔一点也很好', blue:'浅蓝 · 把天空带到身边', yellow:'浅黄 · 收集一束暖阳'},
    panels: {
      download: {title:'每个世界，都在这里。', description:'从原版到模组，找到下一次出发的起点。', rows:[['Minecraft Java','原版'],['Fabric / Forge','模组加载器'],['NeoForge / OptiFine','更多选择']]},
      mods: {title:'为世界加点想象。', description:'找到适合你世界的模组。', rows:[['搜索与浏览','发现模组'],['简介与依赖','了解更多'],['按实例管理','保持有序']]},
      shaders: {title:'换一种光，看世界。', description:'为兼容实例挑选喜欢的光影。', rows:[['选择实例','检查兼容性'],['浏览光影','找到喜欢的风格'],['在游戏内启用','享受风景']]},
      settings: {title:'顺手，也顺心。', description:'每个小细节，都合你心意。', rows:[['文件与目录','自己的空间'],['Java 与内存','自己的偏好'],['个性化','五种柔和配色']]}
    }
  }
};
let language = 'en';
let selectedTheme = 'green';
let selectedView = 'launch';
const panel = document.getElementById('demo-panel');
function renderPanel() {
  const data = copy[language].panels[selectedView];
  panel.hidden = !data;
  panel.replaceChildren();
  if (!data) return;
  const heading = document.createElement('h3'); heading.textContent = data.title;
  const description = document.createElement('p'); description.textContent = data.description;
  panel.append(heading, description);
  data.rows.forEach(row => {
    const div = document.createElement('div'); div.className = 'panel-row';
    row.forEach(value => {const span = document.createElement('span');span.textContent = value;div.append(span);});
    panel.append(div);
  });
}
function renderTheme() {
  document.querySelectorAll('.theme-picker button').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.theme === selectedTheme));
    button.setAttribute('aria-label', copy[language].themeLabels[button.dataset.theme]);
  });
  document.querySelectorAll('.app-demo, .theme-preview').forEach(item => {item.dataset.theme = selectedTheme;});
  document.getElementById('theme-name').textContent = copy[language].themes[selectedTheme];
}
function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = copy[language].pageTitle;
  document.querySelector('meta[name="description"]').content = copy[language].description;
  document.querySelectorAll('[data-i18n]').forEach(element => {element.textContent = copy[language][element.dataset.i18n];});
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {element.setAttribute('aria-label', copy[language][element.dataset.i18nAria]);});
  const label = document.getElementById('language-label');
  label.textContent = language === 'en' ? '中文' : 'EN';
  label.lang = language === 'en' ? 'zh-CN' : 'en';
  document.getElementById('language-toggle').setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : '切换到英文');
  document.querySelector('.brand').setAttribute('aria-label', language === 'en' ? 'LiteMC home' : 'LiteMC 首页');
  renderPanel(); renderTheme();
}
// English on the first visit. Remember only an explicit language choice.
try {if (localStorage.getItem('litemc-language') === 'zh') language = 'zh';} catch {}
setLanguage(language);
 document.getElementById('language-toggle').addEventListener('click', () => {
  setLanguage(language === 'en' ? 'zh' : 'en');
  try {localStorage.setItem('litemc-language', language);} catch {}
});
 document.querySelectorAll('.theme-picker button').forEach(button => {
  button.addEventListener('click', () => {selectedTheme = button.dataset.theme;renderTheme();});
});
 document.querySelectorAll('.demo-tab').forEach(button => {
  button.addEventListener('click', () => {
    selectedView = button.dataset.view;
    document.querySelectorAll('.demo-tab').forEach(item => {item.classList.toggle('active', item === button);item.setAttribute('aria-pressed', String(item === button));});
    renderPanel();
  });
});
let toastTimer;
 document.getElementById('demo-launch').addEventListener('click', () => {
  const toast = document.getElementById('demo-toast'); toast.hidden = false;
  clearTimeout(toastTimer);toastTimer = setTimeout(() => {toast.hidden = true;}, 4500);
});
// Optional project link only. Public downloads remain “Coming soon”.
try {
  const url = new URL((window.LITEMC_SITE || {}).repository);
  if (url.protocol === 'https:' && url.hostname === 'github.com' && !url.username && !url.password && /^\/[\w.-]+\/[\w.-]+\/?$/.test(url.pathname)) {
    const link = document.querySelector('.repo-link');
    link.href = `${url.origin}${url.pathname.replace(/\/$/, '')}`;link.hidden = false;
  }
} catch {}
