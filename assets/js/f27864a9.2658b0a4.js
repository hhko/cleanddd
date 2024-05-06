"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5670],{4408:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>A,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=s(4848),t=s(8453);const r={sidebar_position:1},c="\ud658\uacbd \uc124\uc815",a={id:"design/appsettings/README",title:"\ud658\uacbd \uc124\uc815",description:"Registration",source:"@site/docs/03-design/01-appsettings/README.md",sourceDirName:"03-design/01-appsettings",slug:"/design/appsettings/",permalink:"/archddd/docs/design/appsettings/",draft:!1,unlisted:!1,editUrl:"https://github.com/hhko/archddd/tree/main/docs/docs/03-design/01-appsettings/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\uc124\uacc4",permalink:"/archddd/docs/category/\uc124\uacc4"},next:{title:"\uc911\uc7ac\uc790 \ud328\ud134",permalink:"/archddd/docs/design/mediator/"}},A={},l=[{value:"Registration",id:"registration",level:2},{value:"\uc2e4\ud589 \ubc0f \uc124\uc815 \ud30c\uc77c",id:"\uc2e4\ud589-\ubc0f-\uc124\uc815-\ud30c\uc77c",level:2},{value:"Framework \ucc38\uc870",id:"framework-\ucc38\uc870",level:2},{value:"CLI",id:"cli",level:2},{value:"\uc8fc\uc694 \uc778\ud130\ud398\uc774\uc2a4",id:"\uc8fc\uc694-\uc778\ud130\ud398\uc774\uc2a4",level:2},{value:"\uaddc\uce59",id:"\uaddc\uce59",level:2},{value:"TODO",id:"todo",level:2},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:2}];function d(e){const n={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",img:"img",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\ud658\uacbd-\uc124\uc815",children:"\ud658\uacbd \uc124\uc815"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(5776).A+"",width:"515",height:"131"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Abstractions\r\n  Registration                \ub124\uc784\uc2a4\ud398\uc774\uc2a4: Microsoft.Extensions.DependencyInjection\r\n    AdapterInfrastructureLayerRegistration\r\n    OptionsRegistration\r\nOptions                       \ud638\ucd9c \uc21c\uc11c: XxxOptionsSetup -> XxxOptionsValidator\r\n  DatabaseOptions\r\n  DatabaseOptionsSetup        \uc0c1\uc18d: IConfigureOptions<DatabaseOptions>\r\n  DatabaseOptionsValidator    \uc0c1\uc18d: IValidateOptions<DatabaseOptions>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"registration",children:"Registration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"namespace Microsoft.Extensions.DependencyInjection;\r\n\r\npublic static class AdapterInfrastructureLayerRegistration\r\n{\r\n    public static IServiceCollection RegisterAdapterInfrastructureLayer(this IServiceCollection services)\r\n    {\r\n        services.RegisterOptions();\r\n\r\n        return services;\r\n    }\r\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Registration"})," \ud3f4\ub354\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ud074\ub798\uc2a4 \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub294 ",(0,i.jsx)(n.code,{children:"Microsoft.Extensions.DependencyInjection"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Host"}),"\uc5d0\uc11c \ucd94\uac00\uc801\uc778 ",(0,i.jsx)(n.code,{children:"using"})," \uad6c\ubb38 \uc5c6\uc774 ",(0,i.jsx)(n.code,{children:"...Registration.cs"}),"\uc5d0 \uc815\uc758\ud55c ",(0,i.jsx)(n.code,{children:"Register..."})," \ud655\uc7a5 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"namespace Microsoft.Extensions.DependencyInjection;\r\n\r\npublic static class OptionsRegistration\r\n{\r\n    internal static IServiceCollection RegisterOptions(this IServiceCollection services)\r\n    {\r\n        services.ConfigureOptions<DatabaseOptionsSetup>();\r\n        services.AddSingleton<IValidateOptions<DatabaseOptions>, DatabaseOptionsValidator>();\r\n\r\n        return services;\r\n    }\r\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"XxxRegistration"}),": \ud074\ub798\uc2a4 \uc774\ub984\r\n",(0,i.jsx)(n.code,{children:"RegisterXxx"}),": \uba54\uc11c\ub4dc \uc774\ub984(IServiceCollection` \ud655\uc7a5 \uba54\uc11c\ub4dc)"]}),"\n",(0,i.jsx)(n.h2,{id:"\uc2e4\ud589-\ubc0f-\uc124\uc815-\ud30c\uc77c",children:"\uc2e4\ud589 \ubc0f \uc124\uc815 \ud30c\uc77c"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(3229).A+"",width:"2859",height:"1524"})}),"\n",(0,i.jsx)(n.h2,{id:"framework-\ucc38\uc870",children:"Framework \ucc38\uc870"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(8828).A+"",width:"1790",height:"621"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"services.GetOptions<DatabaseOptions>();\r\n\r\npublic static TOptions GetOptions<TOptions>(this IServiceCollection services)\r\n    where TOptions : class, new()\r\n{\r\n    var serviceProvider = services.BuildServiceProvider();\r\n    return serviceProvider.GetRequiredService<IOptions<TOptions>>().Value;\r\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'dotnet run --project .\\src\\ArchDdd.Host\\ --launch-profile "\uace0\ud615\ud638.ArchDdd.Host"\r\ndotnet run --project .\\src\\ArchDdd.Host\\ --environment "\uace0\ud615\ud638"\r\n\r\n.\\ArchDdd.Host.exe --environment "\uace0\ud615\ud638"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\uc8fc\uc694-\uc778\ud130\ud398\uc774\uc2a4",children:"\uc8fc\uc694 \uc778\ud130\ud398\uc774\uc2a4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"IConfigureOptions<T>\r\n{\r\n  void Configure(T options);\r\n}\r\n\r\nIValidateOptions<T>\r\n{\r\n  public ValidateOptionsResult Validate(string? name, T options)\r\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\uaddc\uce59",children:"\uaddc\uce59"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"public sealed class DatabaseOptions\r\n{\r\n  public const string DatabaseConfig = nameof(DatabaseConfig);\r\n}\r\n\r\npublic class DatabaseOptionsValidator : AbstractValidator<DatabaseOptions>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["DatabaseOptions","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"sealed \ud074\ub798\uc2a4"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"XxxOptions"})," \ud074\ub798\uc2a4 \uc774\ub984"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"XxxConfig"})," public const string \ubcc0\uc218"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["DatabaseOptionsValidator","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"XxxOptionsValidator"})," \ud074\ub798\uc2a4 \uc774\ub984"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AbstractValidator<XxxOptions>"})," \uc0c1\uc18d"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"todo",children:"TODO"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","\uc635\uc158 \ud074\ub798\uc2a4 \uad6c\uc131"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","N\uac1c -> 1\uac1c \uc635\uc158 \ud074\ub798\uc2a4 \uad6c\uc131"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Adapter \ub808\uc774\uc5b4, Registration \uacfc\uc815\uc5d0\uc11c \uc635\uc158 \uac12 \uc811\uadfc\ud558\uae30"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,i.jsx)(n.del,{children:"Adapter \ub808\uc774\uc5b4, \uc0dd\uc131\uc790\uc5d0\uc11c \uc635\uc158 \uac12 \uc811\uadfc\ud558\uae30"})]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,i.jsx)(n.del,{children:"Application \ub610\ub294 Domain \ub808\uc774\uc5b4, \uc0dd\uc131\uc790\uc5d0\uc11c \uc635\uc158 \uac12 \uc811\uadfc\ud558\uae30?"})]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","FluentValidation \ud1b5\ud569"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","\uc124\uc815 \uac1c\uc778\ud654 ",(0,i.jsx)(n.code,{children:"appsettings.{\ud638\uc2a4\ud2b8\uba85}.json"})]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","CLI \ubaa8\ub4dc \uc9c0\uc815?"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\ub2e8\uc704 \ud14c\uc2a4\ud2b8"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Quartz: ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=iD3jrj3RBuc",children:"https://www.youtube.com/watch?v=iD3jrj3RBuc"})]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","IConfigureOptions?"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\ucc38\uace0-\uc790\ub8cc",children:"\ucc38\uace0 \uc790\ub8cc"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options?view=aspnetcore-8.0",children:"Options pattern in ASP.NET Core"})]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,i.jsx)(n.a,{href:"https://code-maze.com/aspnet-configuration-options-validation/",children:"ASP.NET Core Configuration \u2013 Options Validation"})]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-8.0",children:"Use multiple environments in ASP.NET Core"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Production"}),"\n",(0,i.jsxs)(n.li,{children:["Development","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ud638\uc2a4\ud2b8\uba85"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/performance/overview?view=aspnetcore-8.0",children:"ASP.NET Core performance"})]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8828:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2024-03-29-17-31-12-105246c9207d3546e760cc8a79f84330.png"},3229:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2024-04-02-00-31-18-ee030362bf29c4ef761f827afc395a31.png"},5776:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,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"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var i=s(6540);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);