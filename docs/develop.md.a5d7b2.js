(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1268:function(n,s){n.exports={content:["article",["blockquote",["p","本篇待完善"]],["h2","注意事项"],["ul",["li",["p","组件，以及文档的文件命名，需要使用「小写」+「-」的形式，否则会有识别问题。"]]],["h2","组件"],["h3","开发"],["p","在 ",["code","src"]," 目录下，新增一个组件的目录，类似上面的 ",["code","empty-line"]," 组件。目录名需要保持",["strong","小写"],"。如果是自定义组件，最好需要取一个 ",["code","antd"]," 中所不包含的组件名称。添加完文件之后，在 ",["code","entry/config.tsx"]," 中增加 ",["code","demo"]," 的配置。此时应该可以看到组件，并继续开发了。"],["h3","样式"],["p","命名规范主要参考 antd 的样式命名，一种类似 ",["a",{title:null,href:"http://getbem.com/"},"BEM"]," 的方式"],["h5","设置样式前缀"],["p","需要增加 ",["code","dantd"]," 前缀，组件库前缀不应该与 ",["code","antd"]," 重名。"],["pre",{lang:"less",highlighted:'<span class="token atrule">@dantd-table-prefix-cls<span class="token punctuation">:</span> ~\'@</span><span class="token punctuation">{</span>dantd<span class="token operator">-</span>prefix<span class="token punctuation">}</span><span class="token operator">-</span>table\'<span class="token punctuation">;</span>\n\n<span class="token selector">.@{dantd-table-prefix-cls}</span> <span class="token punctuation">{</span>\n    <span class="token selector">&amp;-header</span> <span class="token punctuation">{</span>\n        <span class="token number">...</span>\n    <span class="token punctuation">}</span>\n    <span class="token number">...</span>\n<span class="token punctuation">}</span>'},["code","@dantd-table-prefix-cls: ~'@{dantd-prefix}-table';\n\n.@{dantd-table-prefix-cls} {\n    &-header {\n        ...\n    }\n    ...\n}"]],["h5","使用 ",["code","ant"]," 的 ",["code","less"]," 变量"],["p","引入变量，使用即可"],["pre",{lang:"less",highlighted:'<span class="token variable">@import</span> <span class="token string">\'~antd/es/style/themes/default.less\'</span><span class="token punctuation">;</span>\n<span class="token selector">...\n\n.active</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@primary-color</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","@import '~antd/es/style/themes/default.less';\n...\n\n.active {\n    color: @primary-color;\n}"]],["h5","国际化"],["blockquote",["p","类组件使用国际化的方式待补充"]],["p","组件库中提供了两个国际化工具，自定义hooks ",["code","useIntl"]," ，高阶组件 ",["code","withIntl"]," 。使用方式如下："],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> useIntl\nimport { useIntl } from <span class="token string">\'../locale-provider\'</span><span class="token comment" spellcheck="true">;</span>\n<span class="token keyword">const</span> { t } <span class="token operator">=</span> <span class="token function">useIntl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n<span class="token function">t</span><span class="token punctuation">(</span><span class="token string">\'xxx.xxx\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","// useIntl\nimport { useIntl } from '../locale-provider';\nconst { t } = useIntl();\nt('xxx.xxx');"]],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> withIntl\nimport { withIntl } from <span class="token string">\'../locale-provider\'</span><span class="token comment" spellcheck="true">;</span>\n\nprops<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">\'xxx.xxx\'</span><span class="token punctuation">)</span>\n\nexport <span class="token keyword">default</span> <span class="token function">withIntl</span><span class="token punctuation">(</span>Comp<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","// withIntl\nimport { withIntl } from '../locale-provider';\n\nprops.t('xxx.xxx')\n\nexport default withIntl(Comp);"]],["p","然后在 ",["code","../locale"]," 补充文案即可。"],["h3","测试"],["p","测试文件需要保持 ",["code",".test.tsx"]," 的后缀。相关技术栈以及文档："],["ul",["li",["p",["a",{title:null,href:"https://jestjs.io/"},"Jest"],"：JavaScript 测试框架。"]],["li",["p",["a",{title:null,href:"https://testing-library.com/docs/react-testing-library/intro"},"@testing-library/react"],"：将 React 组件转化成 Dom 节点来测试，而不是渲染的 React 组件的实例，可以当做是 ",["a",{title:null,href:"http://airbnb.io/enzyme/"},"Enzyme"]," 的替代。编写测试脚本，并保证希望测试到的地方已经覆盖。"]]],["p","更多请参考：",["a",{title:null,href:"https://juejin.im/post/6844904095682134029"},"使用 React Testing Library 和 Jest 完成单元测试"]],["h3","发布"],["pre",{lang:null,highlighted:"$ npm run build\n$ npm login\n$ npm version patch\n$ git push\n$ npm publish"},["code","$ npm run build\n$ npm login\n$ npm version patch\n$ git push\n$ npm publish"]],["h1","文档"],["h3","开发文档"],["p","在组件的 ",["code","demo"]," 文件夹中添加 ",["code",".md"]," 文件开发文档，并运行命令查看效果"],["pre",{lang:null,highlighted:"npm start"},["code","npm start"]],["h3","构建文档"],["pre",{lang:null,highlighted:"npm run site"},["code","npm run site"]],["h3","发布文档"],["pre",{lang:null,highlighted:"npm run deploy"},["code","npm run deploy"]]],meta:{order:1,title:"如何开发一个组件？",filename:"docs/develop.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#注意事项",title:"注意事项"},"注意事项"]],["li",["a",{className:"bisheng-toc-h2",href:"#组件",title:"组件"},"组件"]],["li",["a",{className:"bisheng-toc-h1",href:"#文档",title:"文档"},"文档"]]]}}}]);