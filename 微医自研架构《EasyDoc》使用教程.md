---
# 主题列表：juejin, github, smartblue, cyanosis, channing-cyan, fancy, hydrogen, condensed-night-purple, greenwillow, v-green, vue-pro, healer-readable, mk-cute, jzman, geek-black, awesome-green, qklhk-chocolate
# 贡献主题：https://github.com/xitu/juejin-markdown-themes
theme: cyanosis
highlight:
---

![56.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/402951b5fad2494086a3a2e604c84e88~tplv-k3u1fbpfcp-watermark.image)


## EasyDoc是什么
- WHAT：EasyDoc是一个`易配置的降本提效的项目文档系统`
- WHY：
    - 减低复杂项目的`上手难度`，提升用户体验
    - 抹平项目组新老人员`信息差`
    - 将项目的业务细节载体从`开发者`变更为`文档工具`
- HOW：通过流程`用户引导`、流程`操作手册`、页面`说明文档`、`项目说明`文档、`关键点注解`文档等方式实现
- 现状：EasyDoc已经在微医集团内部孵化一年多了，已经接入了十几个线上应用，正在集团内部全面推广中。同时向社区开源推广，`希望能给社区带来一点新鲜的血液`，期待大家的使用接入，有任何问题欢迎留言评论、或在github给我们提意见。
- 典型场景：管理后台、复杂表单、复杂流程、复杂交互😉😉
- 不适场景：大屏项目、游戏类项目🤣🤣
## EasyDoc视频使用演示
[EasyDoc哔哩哔哩演示视频](https://www.bilibili.com/medialist/play/473288250?from=space&business=space_series&business_id=548384&desc=1&spm_id_from=333.999.0.0)

## EasyDoc使用教程

### 1. 安装依赖

```
npm i we-easydoc --save
```

### 2. 初始化参数

```javascript
// 使用默认参数
import EasyDoc from 'easy-doc'
EasyDoc.init()

// 自定义参数
EasyDoc.init({
  urlPrefix: "/easy-doc",
  easyDocPath: "/public/easy-doc/EasyDoc.json",
  easyManualsPath: "/public/easy-doc/Manuals.json",
  easyProjectsPath: "/public/easy-doc/Projects.json",
});
```



-   Easydoc.init 函数参数说明

| 参数               | 类型                         | 必填 | 默认值                       | 说明                                          |
| ---------------- | -------------------------- | -- | ------------------------- | ------------------------------------------- |
| easyDocPath      | string                     | 否  | '/easy-doc/EasyDoc.json'  |                                             |
| easyManualsPath  | string                     | 否  | '/easy-doc/Manuals.json'  |                                             |
| easyProjectsPath | string                     | 否  | '/easy-doc/Projects.json' |                                             |
| minHeight        | number                     | 否  | 100                       | 文档节点弹窗最小高度                                  |
| minWidth         | number                     | 否  | 200                       | 文档节点弹窗最小宽度                                  |
| maxWidth         | number                     | 否  | 450                       | 文档节点弹窗最大宽度                                  |
| editHeight       | number                     | 否  |                           | 可编辑节点弹窗固定高度                                 |
| editWidth        | number                     | 否  |                           | 可编辑节点弹窗固定宽度                                 |
| urlPrefix        | string                     | 否  |                           | 静态资源路径前缀，自动添加到所以easydoc请求前面                 |
| env              | (() => AuthEnum) \| string | 否  | 'DEVELOPMENT'             | 当前文档可见范围'DEVELOPMENT'> 'TEST' >'PRODUCTION' |
| showGuideMask    | boolean                    | 否  | false                     | 节点展示时，下方是否显示半透明蒙层                           |
| mountPanel       | boolean                    | 否  | true                      | 是否挂载右上角面板                                   |
| ignorePaths      | string[]                  | 否  | []                       | 不启用easydoc的页面路径数组                           |
| hasEasyDocJSON   | boolean                    | 否  | true                      | 是否请求Easydoc.json文件                          |
| hasManualsJSON   | boolean                    | 否  | true                      | 是否请求Manuals.json文件                          |
| hasProjectsJSON  | boolean                    | 否  | true                      | 是否请求Projects.json文件                         |


-   env 参数扩展讲解
    -   'dev' 或 'DEVELOPMENT' 表示生产环境、测试环境、开发环境可见所有文档
    -   'test' 或 'TEST' 表示生产环境、测试环境可见所有文档
    -   'pro' 或 'PRODUCTION' 表示生产环境可见所有文档

```javascript
// 可以指定权限 dev > test > pro
EasyDoc.init({
  env: 'pro', // dev | test | pro
})
// 可以传入函数计算求值
EasyDoc.init({
  env: () => {
    switch (process.env.NODE_ENV) {
      case 'production':
        return 'pro'
      case 'test':
        return 'test'
      case 'development':
        return 'dev'
      default:
        return 'pro'
    }
  },
})
// 可以根据域名后缀判断
EasyDoc.init({
  env: () => {
    if (window.location.href.indexOf('.guahao.cn') > -1) {
      return 'pro'
    }
    if (window.location.href.indexOf('.guahao-test.com') > -1) {
      return 'test'
    }
    return 'dev'
  },
})
```
### 3. 编写项目文档

项目文档是对整个项目的介绍说明、注意事项备注等，在项目第一次打开时自动弹出，此后不再自动弹出，清除浏览器缓存失效；也可通过点击右上角项目文档查看。

-   public/easy-doc/Projects.json（静态文件夹也可能是static而不是public）
-   name：项目文档名称
-   description：项目文档内容
-   可编写纯文字或插入html ，特别是跳转a链接
-   auth：项目文档可见范围
-   可以编写多个项目文档，如无项目文档，跳过此步

```json
[
  {
    "name": "Diting最佳实践",
    "description": "Diting最佳实践的详细介绍Diting最佳实践的详细介绍Diting最佳实践的详细介绍Diting最佳实践的详细介绍Diting最佳实践的详细介绍",
    "auth": "pro"
  },
  {
    "name": "Gtrace-最佳实践",
    "description": "Gtrace-最佳实践的详细介绍Gtrace-最佳实践的详细介绍Gtrace-最佳实践的详细介绍Gtrace-最佳实践的详细介绍Gtrace-最佳实践的详细介绍",
    "auth": "pro"
  },
  {
    "name": "Kano最佳实践",
    "description": "Kano最佳实践的详细介绍Kano最佳实践的详细介绍Kano最佳实践的详细介绍Kano最佳实践的详细介绍Kano最佳实践的详细介绍Kano最佳实践的详细介绍",
    "auth": "pro"
  },
  {
    "name": "MQ最佳实践",
    "description": "MQ最佳实践的详细介绍MQ最佳实践的详细介绍MQ最佳实践的详细介绍MQ最佳实践的详细介绍MQ最佳实践的详细介绍MQ最佳实践的详细介绍",
    "auth": "pro"
  },
  {
    "name": "配置中心gconfig 最佳实践",
    "description": "配置中心gconfig 最佳实践的详细介绍配置中心gconfig 最佳实践的详细介绍配置中心gconfig 最佳实践的详细介绍配置中心gconfig 最佳实践的详细介绍配置中心gconfig 最佳实践的详细介绍",
    "auth": "pro"
  }
]
```

### 4. 编写页面文档

页面文档是对某个页面的介绍说明，注意事项的备注。通过Easydoc.json指定页面和json文件的映射关系，再在json文件中编写。

-   public/easy-doc/Easydoc.json
-   match：匹配路由的正则表达式
-   jsonFile：对应的json文件路径

```json
[
  {
    "match": "/user/list",
    "jsonFile": "/public/easy-doc/user3.json"
  },
  {
    "match": "/dept/list/[0-9]+",
    "jsonFile": "/public/easy-doc/dept.json"
  },
  {
    "match": "/handle-doc.html",
    "jsonFile": "/public/easy-doc/handle-doc.json"
  },
]
```

-   public/easy-doc/user3.json
-   name：页面说明名称
-   description：页面说明内容
-   auth：页面说明可见范围

```json
{
  "pages": [
    {
      "name": "第一个user页面介绍",
      "description": "这是一段内容",
      "auth": "dev"
    },
    {
      "name": "第一个user页面介绍",
      "description": "这是又一段内容",
      "auth": "test"
    }
  ],
}
```

### 5. 编写页面节点文档

页面节点文档是对某个页面的某个节点的介绍说明，注意事项的备注。通过Easydoc.json指定页面和json文件的映射关系，再在json文件中编写文档，在页面的dom节点上添加docId实现映射。

-   public/easy-doc/Easydoc.json
-   match：匹配路由的正则表达式
-   jsonFile：对应的json文件路径

```json
[
  {
    "match": "/user/list",
    "jsonFile": "/public/easy-doc/user3.json"
  },
  {
    "match": "/dept/list/[0-9]+",
    "jsonFile": "/public/easy-doc/dept.json"
  },
  {
    "match": "/handle-doc.html",
    "jsonFile": "/public/easy-doc/handle-doc.json"
  },
]
```

-   public/easy-doc/user3.json
-   name：页面说明名称
-   description：页面说明内容
-   auth：页面说明可见范围
-   direction：节点弹窗方位，非必填
-   zIndex：指定zIndex防止遮挡，非必填

```json
{
  "docs": [
    {
      "docId": "dept-list",
      "description": "当切换为运行状态时当切换为运行状态时当切换为运行状态时",
      "auth": "pro",
      "direction": "LT",
      "zIndex": 100
    },
    {
      "docId": "dept-btn",
      "description": "方方速递速速递速速递速递对，个按按钮方速递对，一个按按钮方速递对，",
      "auth": "dev",
      "direction": "BR"
    }
  ],
}
```

-   /user/list对应的vue文件

```html
<div>
  <div docId='dept-list'>
    user list 页面 html
  <div>
    <el-button docId='dept-btn'>
    user list 页面 的 btn
  <div>
</div>
```

### 6. 编写可编辑节点文档

可编辑节点文档用于前台系统展示，后面系统编辑前台展示内容的场景。在此场景中将前台某块内容和后台对该内容的编辑页面连接起来，点击直接跳转过去进行配置，方便产品运营的使用。通过Easydoc.json指定页面和json文件的映射关系，再在json文件中编写文档，在页面的dom节点上添加docId实现映射。

-   public/easy-doc/Easydoc.json
-   match：匹配路由的正则表达式
-   jsonFile：对应的json文件路径

```json
[
  {
    "match": "/user/list",
    "jsonFile": "/public/easy-doc/user3.json"
  },
  {
    "match": "/dept/list/[0-9]+",
    "jsonFile": "/public/easy-doc/dept.json"
  },
  {
    "match": "/handle-doc.html",
    "jsonFile": "/public/easy-doc/handle-doc.json"
  },
]
```

-   public/easy-doc/user3.json
-   name：页面说明名称
-   description：页面说明内容
-   auth：页面说明可见范围
-   direction：节点弹窗方位，非必填
-   zIndex：指定zIndex防止遮挡，非必填

```json
{
  "edits": [
    {
      "docId": "dept-list",
      "editUrl": "https://fanyi.baidu.com/translate?aldtype=16047&keyfrom=baidu&smartresult=dict&lang=auto2zh#ru/zh/EasyDoc",
      "auth": "dev",
      "direction": "TL",
      "zIndex": 200
    },
    {
      "docId": "dept-btn",
      "editUrl": "https://fanyi.baidu.com/translate?aldtype=16047&keyfrom=baidu&smartresult=dict&lang=auto2zh#ru/zh/EasyDoc",
      "auth": "test",
      "direction": "LB"
    }
  ],
}
```

-   /user/list对应的vue文件

```html
<div>
  <div docId='dept-list'>
    user list 页面 html
  <div>
    <el-button docId='dept-btn'>
    user list 页面 的 btn
  <div>
</div>
```

### 7. 编写操作手册

操作手册是动态实时可操作的使用说明书，点击可以自动跳到操作手册对应的第一个页面，跟着步骤一步一步的实践动手，方便新手更好的学习系统的使用、了解功能背后隐藏的业务信息。

-   public/easy-doc/Manuals.json
-   注意：通过指定type=link，linkManualName=操作手册名称，可以实现从一个操作手册跳到另一个操作手册
-   可以在步骤的description中添加a链接，实现外链跳转
-   记得要在对应页面的dom中加上步骤中的docId哦

```json
[
   {
    "name": "操作手册A",
    "description": "这是关于操作手册A的描述<a href='http://wcp.gops.guahao.cn/frontend-refactor/home/page'>去WCP</a>",
    "initUrl": "/dept/list", // 打开操作手册的时候会跳到此初始url
    "steps": [
      {
        "url": "/dept/list",
        "description": "操作手册A第一步有两个按钮高亮",
        "nodes": [
          {
            "docId": "dept-open-btn1",
            "description": "操作手册A第一步节点1",
            "auth": "pro",
            "zIndex": 1000 // 指定zIndex防止遮挡，非必填
          },
          {
            "docId": "dept-open-btn2",
            "description": "操作手册A第一步节点2",
            "auth": "pro"
          }
        ]
      },
      ..steps // 多个步骤此处省略
      
  {
    "name": "操作手册B",
    "description": "这是关于操作手册B的描述",
    "initUrl": "/user/list", // 打开操作手册的时候会跳到此初始url
    "steps": [
      {
        "url": "/user/list",
        "description": "操作手册B第一步有两个按钮高亮",
        "nodes": [
          {
            "docId": "dept-open-btn2",
            "description": "操作手册A第一步节点2",
            "auth": "pro"
          }
        ]
      },
       {
        "description": "点击从操作手册B直接跳到操作手册A",
        "type": "link",
        "linkManualName": "操作手册A"
      }
    ]
]
```

### 9. 编写用户引导

用户引导是固定的步骤引导，一般用于新功能的第一次使用时介绍如何使用。

-   EasyDoc.initGuide(guide: GuideNode) 初始化用户引导数据
-   EasyDoc.startGuide() 开始当前的用户引导
-   EasyDoc.jumpGuideStep(stepIdx: number, guideStep?: GuideStep) 跳到当前用户引导的第几步，从0计数；第二个参数传入表示替换当前步骤内容
-   EasyDoc.closeGuide() 主动关闭当前操作手册

```javascript
  // 初始化用户引导数据
  EasyDoc.initGuide({
    'name': '用户引导A',
    'steps': [
      {
        'url': '/dept/list',
        'node': {
          'docId': 'guide1',
          'description': '用户引导<br />A第一步节点1',
          'auth': 'pro'
        }
      },
      {
        'url': '/dept/list',
        'node': {
          'docId': 'guide2',
          'description': '用户引导A第一步节点2',
          'auth': 'pro'
        }
      },
      {
        'url': '/dept/list',
        'node': {
          'docId': 'guide3',
          'description': '用户引导A第一步节点3',
          'auth': 'pro'
        }
      },
      {
        'url': '/dept/list',
        'node': {
          'docId': 'guide4',
          'description': '用户引导A第一步节点4',
          'auth': 'pro'
        }
      },
      {
        'url': '/dept/list',
        'node': {
          'docId': 'guide5',
          'description': '用户引导A第一步节点5',
          'auth': 'pro'
        }
      },
      {
        'url': '/dept/list',
        'node': {
          'docId': 'guide6',
          'description': '用户引导A第一步节点6',
          'auth': 'pro'
        }
      },
    ]
  })
  // 开始当前用户引导
  EasyDoc.startGuide()
  // 4秒后跳到用户引导第4步，并修改第4步内容，并不显示下一步按钮
  setTimeout(() => {
    EasyDoc.jumpGuideStep(3, {
      'url': '/dept/list',
      'node': {
        'docId': 'guide4',
        'description': '手动修改内容',
        'auth': 'pro'
      },
      next: false,//是否显示下一步按钮
    },)
  }, 4000)
  // 再3秒后关闭当前用户引导
  setTimeout(() => {
    EasyDoc.closeGuide()
  }, 7000)
```

## EasyDoc扩展用法

### 1. docId的多种兼容写法

-   docId、doc-id、docid、data-docId、data-doc-id、data-docid都可以匹配
-   docId不能以数字开头
-   一个dom节点上可以写多个docId，用空格隔开
-   单个docId也可以匹配当前页面的多个dom节点，设置noUnique=true即可，默认一个页面只匹配一个dom节点

```html
<div docId="user-list-query user-list-search"></div>
<div docId="user-btn user-list-query"></div>

{
  "docs": [
    {
      "docId": "user-btn-query",
      "description": "点击查询用户列表",
      "auth": "dev",
      "direction": "BL",
      "noUnique": true //单个docId也可以匹配当前页面的多个dom节点
    }
  ]
}
```

### 2. direction弹窗方位的说明

-   direction是可选属性，默认自适应位置，用户可以指定方位来调整显示效果
-   TL 上左
-   TR 上右
-   TC 上中
-   RT 右上
-   RB 右下
-   RC 右中
-   BL 下左
-   BR 下右
-   BC 下中
-   LT 左上
-   LB 左下
-   LC 左中

### 3. 路径前缀
- 某些系统会配置url前缀，比如某网站http://www.baidu.com 对应的json文件地址为：http://www.baidu.com/easy-doc/Easydoc.json, 当其配置了前缀 frontend-refactor 使得访问路径变成了http://www.baidu.com/frontend-refactor, 导致json文件找不到了。我们只需要在初始化时增加urlPrefix参数即可。

```javascript
  EasyDoc.init({
    urlPrefix: "/frontend-refactor",
    easyDocPath: "/public/easy-doc/EasyDoc.json",
    easyManualsPath: "/public/easy-doc/Manuals.json",
    easyProjectsPath: "/public/easy-doc/Projects.json",
  });
```

-   假设某网站线上地址和测试地址不一致那应该怎么办呢？方案如下：

```javascript
let urlPrefix = ``
let easyDocPath = `/public/easy-doc/EasyDoc.json`
let easyManualsPath = `/public/easy-doc/Manuals.json`
let easyProjectsPath = `/public/easy-doc/Projects.json`
// 线上
if (location.origin === 'http://xxxxx') {
  urlPrefix = `/frontend-refactor`
  easyDocPath = `http://xxxxx/frontend-refactor/public/easy-doc/EasyDoc.json`
  easyManualsPath = `http://xxxxx/frontend-refactor/public/easy-doc/Manuals.json`
  easyProjectsPath = `http://xxxxx/frontend-refactor/public/easy-doc/Projects.json`
}
EasyDoc.init({
  urlPrefix,
  easyDocPath,
  easyManualsPath,
  easyProjectsPath
})
```

### 4. 清除F12 network 找不到json文件报错404

-   我们默认会请求public/easy-doc/EasyDoc.json、Manuals.json、Projects.json文件，但是该项目可能暂时并没有配置该文档，所以network里面就会报404找不到该文件。
-   这个问题并不影响业务，但是业务方找业务bug的时候看到Easydoc的404错误总是怀疑Easydoc有问题，所以特此优化处理一下。

```javascript
EasyDoc.init({
  hasEasyDocJSON: false, //默认true, 设为false则不请求该json
  hasManualsJSON: false, //默认true, 设为false则不请求该json
  hasProjectsJSON: false, //默认true, 设为false则不请求该json
});
```

### 5. CHANGLOG.md

通过此文件可以看到每次更新的内容介绍和对应的版本，了解EasyDoc的历史发展

### other: 其他问题

其他问题请联系开发者在线解答。

- [李运通](https://juejin.cn/user/1292681403180136) 😜😜
- [杨毅臻](https://juejin.cn/user/1679709496940616) 😎😎
- [胡宁](https://juejin.cn/user/2928754708718168) ✌✌
- [焦传锴](https://juejin.cn/user/1266247427691405) 😉😉
- [权明扬](https://juejin.cn/user/4125023356589831) 😘😘
- [黄丹丹](https://juejin.cn/user/3729960318014471)🤞🤞

## EasyDoc gitbub地址
https://github.com/wefront/we-easydoc

记得给我们`点赞`✨✨点个star哟🤞🤞（づ￣3￣）づ╭❤～
