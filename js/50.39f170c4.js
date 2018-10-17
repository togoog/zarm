(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{382:function(e,n,t){"use strict";t.r(n);var i=t(3),r=t.n(i),s=t(4),a=t.n(s),l=t(2),o=t.n(l),c=t(5),d=t.n(c),m=t(403),f=(t(699),function(e){function n(){var e,i,s,l;a()(this,n);for(var c=arguments.length,d=Array(c),m=0;m<c;m++)d[m]=arguments[m];return i=s=o()(this,(e=n.__proto__||r()(n)).call.apply(e,[this].concat(d))),s.document=function(){return{document:t(427),className:"file-picker-page"}},l=i,o()(s,l)}return d()(n,e),n}(m.a));n.default=f},403:function(e,n,t){"use strict";var i=t(3),r=t.n(i),s=t(4),a=t.n(s),l=t(6),o=t.n(l),c=t(2),d=t.n(c),m=t(5),f=t.n(m),p=t(0),u=t.n(p),h=t(404),g=t.n(h),k=t(405),v=t.n(k),b=(t(406),function(e){function n(){return a()(this,n),d()(this,(n.__proto__||r()(n)).apply(this,arguments))}return f()(n,e),o()(n,[{key:"render",value:function(){var e=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),n=e.document,t=e.className;if("string"==typeof n){var i=new g.a.Renderer;i.table=function(e,n){return'<div class="grid-container"><table class="grid"><thead>'+e+"</thead><tbody>"+n+"</tbody></table></div>"},i.code=function(e,n){return'<pre><code class="hljs '+n+'">'+(!(!n||!v.a.getLanguage(n))?v.a.highlight(n,e).value:e)+"</code></pre>"},g.a.setOptions({renderer:i});var r=g()(n,{renderer:i});return u.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:r}})}return u.a.createElement("span",null)}}]),n}(u.a.Component));n.a=b},427:function(e,n){e.exports='## 文件选择器 FilePicker\n\n\n\n### 基本用法\n```jsx\nimport { Cell, FilePicker, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      files: [],\n    };\n  }\n\n  onSelect(file) {\n    console.log(file);\n    const { files } = this.state;\n    files.push(file);\n\n    this.setState({\n      files,\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        {this.state.files.map((item, index) => <Cell key={+index}>{item.fileName}</Cell>)}\n        <div className="file-picker-wrapper">\n          <FilePicker\n            className="file-picker-btn"\n            onChange={selected => this.onSelect(selected)}\n          >\n            <Icon type="add" />\n          </FilePicker>\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 多选模式\n```jsx\nimport { Cell, FilePicker, Icon, Toast, Badge } from \'zarm\';\n\nconst MAX_FILES_COUNT = 5;\n\nfunction onBeforeSelect() {\n  alert(\'执行 onBeforeSelect 方法\');\n}\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      files: [],\n    };\n  }\n\n  onSelect(selFiles) {\n    let { files } = this.state;\n    files = files.concat(selFiles);\n    if (files.length > MAX_FILES_COUNT) {\n      Toast.show(\'最多只能选择5张图片\')\n      return;\n    }\n    this.setState({ files });\n  }\n\n  remove(index) {\n    const { files } = this.state;\n    files.splice(index, 1);\n    this.setState({ files });\n    Toast.show(\'删除成功\');\n  }\n\n  imgRender() {\n    const { files } = this.state;\n\n    return files.map((item, index) => {\n      return (\n        <Badge\n          key={+index}\n          sup\n          className="file-picker-item"\n          shape="circle"\n          text={<Icon type="wrong" />}\n          onClick={() => this.remove(index)}\n        >\n          <div className="file-picker-item-img">\n            <a href={item.thumbnail} target="_blank" rel="noopener noreferrer">\n              <img src={item.thumbnail} alt="" />\n            </a>\n          </div>\n        </Badge>\n      );\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <div className="file-picker-wrapper">\n          {this.imgRender()}\n          {\n            (this.state.files.length < MAX_FILES_COUNT) && (\n              <FilePicker\n                multiple\n                className="file-picker-btn"\n                accept="image/*"\n                onBeforeSelect={onBeforeSelect}\n                onChange={selected => this.onSelect(selected)}\n              >\n                <Icon type="add" />\n              </FilePicker>\n            )\n          }\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 禁用状态\n```jsx\nimport { FilePicker, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="file-picker-wrapper">\n        <FilePicker className="file-picker-btn" disabled>\n          <Icon type="add" />\n        </FilePicker>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-file-picker | | 类名前缀 |\n| className | string | | | 追加类名 |\n| accept | string | | | 允许上传的附件格式 |\n| multiple | boolean | false | | 是否多选 |\n| capture | string | | 照相机`camera`, 摄像机`camcorder`, 录音`microphone`| 唤起的原生应用 |\n| disabled | boolean | false | | 是否禁用 |\n| onBeforeSelect | <code>() => boolean</code> | () => { return true; } | | 选择前触发的事件 |\n| onChange | <code>(file: Object &#124; Array&lt;Object&gt;) => void</code> | noop | \\(file: Object &#124; Array&lt;Object&gt;\\) | 值变化时触发的回调函数 |'},699:function(e,n,t){}}]);