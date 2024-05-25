"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[392],{988:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=i(4848),s=i(8453);const a={sidebar_position:2},t="FluentValidation",l={id:"design-packages/fluentvalidation/README",title:"FluentValidation",description:"\ubaa9\ud45c",source:"@site/docs/03-design-packages/02-fluentvalidation/README.md",sourceDirName:"03-design-packages/02-fluentvalidation",slug:"/design-packages/fluentvalidation/",permalink:"/ArchDdd/docs/design-packages/fluentvalidation/",draft:!1,unlisted:!1,editUrl:"https://github.com/hhko/ArchDdd/tree/main/docs/docs/03-design-packages/02-fluentvalidation/README.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"MediatR",permalink:"/ArchDdd/docs/design-packages/MediatR/"},next:{title:"\ud14c\uc2a4\ud2b8 \ud328\ud0a4\uc9c0",permalink:"/ArchDdd/docs/category/\ud14c\uc2a4\ud2b8-\ud328\ud0a4\uc9c0"}},o={},d=[{value:"\ubaa9\ud45c",id:"\ubaa9\ud45c",level:2},{value:"\uc720\ud6a8\uc131 \uac80\uc0ac",id:"\uc720\ud6a8\uc131-\uac80\uc0ac",level:2},{value:"\uc720\uc2a4\ucf00\uc774\uc2a4 \uc785\ub825 \uba54\uc2dc\uc9c0",id:"\uc720\uc2a4\ucf00\uc774\uc2a4-\uc785\ub825-\uba54\uc2dc\uc9c0",level:3},{value:"\uc720\ud6a8\uc131 \uac80\uc0ac \ub4f1\ub85d",id:"\uc720\ud6a8\uc131-\uac80\uc0ac-\ub4f1\ub85d",level:3},{value:"\uba54\uc2dc\uc9c0 \uad6c\uc131",id:"\uba54\uc2dc\uc9c0-\uad6c\uc131",level:2},{value:"\uc720\ud6a8\uc131 \uac80\uc0ac Behavior \uad6c\ud604",id:"\uc720\ud6a8\uc131-\uac80\uc0ac-behavior-\uad6c\ud604",level:3},{value:"\uc720\ud6a8\uc131 \uac80\uc0ac Behavior \ub4f1\ub85d",id:"\uc720\ud6a8\uc131-\uac80\uc0ac-behavior-\ub4f1\ub85d",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"fluentvalidation",children:"FluentValidation"}),"\n",(0,r.jsx)(n.h2,{id:"\ubaa9\ud45c",children:"\ubaa9\ud45c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AbstractValidator<T>"}),": ",(0,r.jsx)(n.strong,{children:"\uc720\uc2a4\ucf00\uc774\uc2a4"})," \uc785\ub825 \uba54\uc2dc\uc9c0(",(0,r.jsx)(n.code,{children:"IRequest"}),") \uc720\ud6a8\uc131\uc744 \uac80\uc0ac\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\uc720\ud6a8\uc131-\uac80\uc0ac",children:"\uc720\ud6a8\uc131 \uac80\uc0ac"}),"\n",(0,r.jsx)(n.h3,{id:"\uc720\uc2a4\ucf00\uc774\uc2a4-\uc785\ub825-\uba54\uc2dc\uc9c0",children:"\uc720\uc2a4\ucf00\uc774\uc2a4 \uc785\ub825 \uba54\uc2dc\uc9c0"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'// RegisterUserCommand: \uc720\uc2a4\ucf00\uc774\uc2a4 \uc785\ub825 \uba54\uc2dc\uc9c0\r\ninternal sealed class RegisterUserCommandValidator : AbstractValidator<RegisterUserCommand>\r\n{\r\n    public RegisterUserCommandValidator()\r\n    {\r\n        RuleFor(x => x.ConfirmPassword)\r\n            .Equal(x => x.Password)\r\n            .WithMessage("{PropertyName} failed");\r\n\r\n        // ...\r\n    }\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\uc720\ud6a8\uc131-\uac80\uc0ac-\ub4f1\ub85d",children:"\uc720\ud6a8\uc131 \uac80\uc0ac \ub4f1\ub85d"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:"// IServiceCollection services\r\n\r\n// \uc5b4\uc148\ube14\ub9ac AbstractValidator \uad6c\ud604 \ud074\ub798\uc2a4 \ubaa8\ub450\ub97c \ub4f1\ub85d\ud569\ub2c8\ub2e4.\r\nservices.AddValidatorsFromAssembly(\r\n    assembly: ArchDdd.Application.AssemblyReference.Assembly,\r\n    includeInternalTypes: true);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\uba54\uc2dc\uc9c0-\uad6c\uc131",children:"\uba54\uc2dc\uc9c0 \uad6c\uc131"}),"\n",(0,r.jsx)(n.h3,{id:"\uc720\ud6a8\uc131-\uac80\uc0ac-behavior-\uad6c\ud604",children:"\uc720\ud6a8\uc131 \uac80\uc0ac Behavior \uad6c\ud604"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs"})}),"\n",(0,r.jsx)(n.h3,{id:"\uc720\ud6a8\uc131-\uac80\uc0ac-behavior-\ub4f1\ub85d",children:"\uc720\ud6a8\uc131 \uac80\uc0ac Behavior \ub4f1\ub85d"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:"// IServiceCollection services\r\nservices.AddMediatR(configuration =>\r\n{\r\n    // \uc5b4\uc148\ube14\ub9ac IRequest \uad6c\ud604 \ud074\ub798\uc2a4 \ubaa8\ub450\ub97c \ub4f1\ub85d\ud569\ub2c8\ub2e4.\r\n    configuration.RegisterServicesFromAssembly(typeof(AssemblyReference).Assembly);\r\n\r\n    // Behavior \uc21c\uc11c\ub294 \uc911\uc694\ud558\ub2e4.\r\n    //  - \ud638\ucd9c \ud638\ucd9c \uc21c\uc11c: LoggingPipeline -> ValidatorPipeline -> \uba54\uc2dc\uc9c0 \ud578\ub4e4\ub7ec\r\n    //  - \ubc18\ud658 \ud638\ucd9c \uc21c\uc11c: LoggingPipeline <- ValidatorPipeline <- \uba54\uc2dc\uc9c0 \ud578\ub4e4\ub7ec\r\n    configuration.AddOpenBehavior(typeof(LoggingPipeline<,>));\r\n    configuration.AddOpenBehavior(typeof(ValidatorPipeline<,>));\r\n    // ...\r\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var r=i(6540);const s={},a=r.createContext(s);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);