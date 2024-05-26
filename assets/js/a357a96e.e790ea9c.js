"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[694],{7207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=t(4848),o=t(8453);const s={sidebar_position:6},i="EFCore",d={id:"design-packages/efcore/README",title:"EFCore",description:"ORM(Object Relational Mapping)",source:"@site/docs/03-design-packages/06-efcore/README.md",sourceDirName:"03-design-packages/06-efcore",slug:"/design-packages/efcore/",permalink:"/ArchDdd/docs/design-packages/efcore/",draft:!1,unlisted:!1,editUrl:"https://github.com/hhko/ArchDdd/tree/main/docs/docs/03-design-packages/06-efcore/README.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Polly",permalink:"/ArchDdd/docs/design-packages/polly/"},next:{title:"\ud14c\uc2a4\ud2b8 \ud328\ud0a4\uc9c0",permalink:"/ArchDdd/docs/category/\ud14c\uc2a4\ud2b8-\ud328\ud0a4\uc9c0"}},a={},c=[];function l(e){const n={blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"efcore",children:"EFCore"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"ORM(Object Relational Mapping)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"# Microsoft.EntityFrameworkCore.Design\r\n\r\n# \ub3c4\uad6c \uc124\uce58\r\ndotnet tool install --global dotnet-ef\r\n\r\n# \ub3c4\uad6c \uc5c5\ub370\uc774\ud2b8\r\ndotnet tool update --global dotnet-ef\r\n\r\ndotnet tool list -g\r\ndotnet-ef --version\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"# ef tool \uc0ac\uc6a9\uc744 \uc704\ud55c \ud328\ud0a4\uc9c0\r\nMicrosoft.EntityFrameworkCore.Design\r\n\r\n# Migrations \ud329\ud1a0\ub9c1 \ud074\ub798\uc2a4\r\nIDesignTimeDbContextFactory\r\n\r\n# Migrations \uc2a4\ud06c\ub9bd\ud2b8 \uc0dd\uc131\r\ndotnet ef migrations add init -p .\\ArchDdd.Adapters.Persistence\\\r\n    Build started...\r\n    Build succeeded.\r\n    The entity type 'User' is configured to use schema 'Master', but SQLite does not support schemas. \r\n        This configuration will be ignored by the SQLite provider.\r\n        Done. To undo this action, use 'ef migrations remove'\r\n\r\n# \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc0dd\uc131\r\ndotnet ef database update -p .\\ArchDdd.Adapters.Persistence\\\r\n    Build started...\r\n    Build succeeded.\r\n    Applying migration '20240526223353_init'.\r\n    Done.\r\n\r\n    ArchDddDb.db \ud30c\uc77c \uc0dd\uc131\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"dotnet ef database update\r\ndotnet ef database update -- --environment Production\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:'Usage: dotnet ef migrations add [arguments] [options]\r\n\r\nArguments:\r\n  <NAME>  The name of the migration.\r\n\r\nOptions:\r\n  -o|--output-dir <PATH>                 The directory to put files in. Paths are relative to the project directory. Defaults to "Migrations".\r\n  -p|--project <PROJECT>                 The project to use. Defaults to the current working directory.\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"dotnet ef database drop\r\ndotnet ef database update\r\ndotnet ef database update -- --environment Production\r\ndotnet ef database update 20180904195021_InitialCreate --connection your_connection_string\r\n\r\ndotnet ef dbcontext info\r\ndotnet ef dbcontext list\r\ndotnet ef dbcontext optimize\r\ndotnet ef dbcontext scaffold\r\ndotnet ef dbcontext script\r\n\r\ndotnet ef migrations add\r\ndotnet ef migrations bundle\r\ndotnet ef migrations has-pending-model-changes\r\ndotnet ef migrations list\r\ndotnet ef migrations remove\r\ndotnet ef migrations script\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);