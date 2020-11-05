# umi project d

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn dev
```

Start the prod server

```bash
$ yarn build
$ yarn start
```

# 国际化
 目前是按照cookie > 浏览器默认语言 > 默认语言顺序选择
 由于服务端获取不到localStorage，所以要通过cookie将
 所需信息带到服务端

# 部署
 部署时可以用pm2进行部署（注意要采用多进程方式部署）
 静态文件最好是放cdn，如果放到服务器上，最好是用nginx直接配置静态目录

 # 开发
 熟悉umi,了解SSR,观看https://umijs.org/zh-CN/docs/ssr

 组件报错可以看浏览器控制台, 服务器渲染报错看server控制台

 数据流使用dva

 本地mock数据写在 ./mock文件夹

 路由和配置写在 ./.umirc.ts

 axios封住写在 ./src/apiConfig
