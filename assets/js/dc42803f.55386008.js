"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4445],{1439:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=n(4848),t=n(8453);const o={},i="\ud658\uacbd \uad6c\uc131 \uc790\ub3d9\ud654",d={id:"infrastructure/postgres/step02/README",title:"\ud658\uacbd \uad6c\uc131 \uc790\ub3d9\ud654",description:"pgAdmin \uc790\ub3d9\ud654",source:"@site/docs/05-infrastructure/03-postgres/step02/README.md",sourceDirName:"05-infrastructure/03-postgres/step02",slug:"/infrastructure/postgres/step02/",permalink:"/archddd/docs/infrastructure/postgres/step02/",draft:!1,unlisted:!1,editUrl:"https://github.com/hhko/archddd/tree/main/docs/docs/05-infrastructure/03-postgres/step02/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\uae30\ubcf8 \uc124\uce58",permalink:"/archddd/docs/infrastructure/postgres/step01/"},next:{title:"Q&A",permalink:"/archddd/docs/category/qa"}},a={},c=[{value:"pgAdmin \uc790\ub3d9\ud654",id:"pgadmin-\uc790\ub3d9\ud654",level:2},{value:"\uc11c\ubc84 \ucd94\uac00",id:"\uc11c\ubc84-\ucd94\uac00",level:3},{value:"PassFile \ud30c\uc77c",id:"passfile-\ud30c\uc77c",level:3},{value:"PostgreSQL \uc790\ub3d9\ud654",id:"postgresql-\uc790\ub3d9\ud654",level:2},{value:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc0dd\uc131",id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\uc0dd\uc131",level:3}];function l(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"\ud658\uacbd-\uad6c\uc131-\uc790\ub3d9\ud654",children:"\ud658\uacbd \uad6c\uc131 \uc790\ub3d9\ud654"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(4720).A+"",width:"323",height:"711"})}),"\n",(0,s.jsx)(r.h2,{id:"pgadmin-\uc790\ub3d9\ud654",children:"pgAdmin \uc790\ub3d9\ud654"}),"\n",(0,s.jsx)(r.h3,{id:"\uc11c\ubc84-\ucd94\uac00",children:"\uc11c\ubc84 \ucd94\uac00"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yml",children:"volumes:\r\n  - ./docker_pgadmin_servers.json:/pgadmin4/servers.json\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\r\n  "Servers": {\r\n    "1": {\r\n      "Name": "Docker Compose",\r\n      "Group": "Servers",\r\n      "Port": 5432,\r\n      "Username": "postgres",\r\n      "Host": "postgres",\r\n      "SSLMode": "prefer",\r\n      "MaintenanceDB": "postgres",\r\n      "PassFile": "/tmp/pgpassfile"\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"passfile-\ud30c\uc77c",children:"PassFile \ud30c\uc77c"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yml",children:'# hostname:port:database:username:password\r\nentrypoint:\r\n  - "/bin/sh"\r\n  - "-c"\r\n  - "/bin/echo \'postgres:5432:*:postgres:postgres\' > /tmp/pgpassfile && chmod 600 /tmp/pgpassfile && /entrypoint.sh"\n'})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(r.h2,{id:"postgresql-\uc790\ub3d9\ud654",children:"PostgreSQL \uc790\ub3d9\ud654"}),"\n",(0,s.jsx)(r.h3,{id:"\ub370\uc774\ud130\ubca0\uc774\uc2a4-\uc0dd\uc131",children:"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc0dd\uc131"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yml",children:"volumes:\r\n  - ./docker_postgres_init.sql:/docker-entrypoint-initdb.d/init.sql\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"-- \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc0dd\uc131\r\nCREATE DATABASE demo1\r\n    WITH\r\n    OWNER = postgres\r\n    ENCODING = 'UTF8'\r\n    LC_COLLATE = 'en_US.utf8'\r\n    LC_CTYPE = 'en_US.utf8'\r\n    TABLESPACE = pg_default\r\n    CONNECTION LIMIT = -1;\r\n\r\nCREATE DATABASE demo2\r\n    WITH\r\n    OWNER = postgres\r\n    ENCODING = 'UTF8'\r\n    LC_COLLATE = 'en_US.utf8'\r\n    LC_CTYPE = 'en_US.utf8'\r\n    TABLESPACE = pg_default\r\n    CONNECTION LIMIT = -1;\r\n\r\n-- \ud14c\uc774\ube14 \uc0dd\uc131\r\nCREATE TABLE test(\r\n  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,\r\n  name TEXT NOT NULL,\r\n  archived BOOLEAN NOT NULL DEFAULT FALSE\r\n);\r\n\r\n-- \ub370\uc774\ud130 \ucd94\uac00\r\nINSERT INTO test (name, archived)\r\n  VALUES ('test row 1', true),\r\n  ('test row 2', false);\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},4720:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/2024-05-02-16-26-25-a18558348268696b5c684d6bd8db1d7d.png"},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>d});var s=n(6540);const t={},o=s.createContext(t);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);