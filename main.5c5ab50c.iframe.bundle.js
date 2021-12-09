(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Wafer})),__webpack_require__.d(__webpack_exports__,"b",(function(){return fromTextToValue}));__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js");var react=__webpack_require__("./node_modules/react/index.js"),quantities=(__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/js-quantities/build/quantities.js")),quantities_default=__webpack_require__.n(quantities);function fromTextToValue(text){var parser=new quantities_default.a(text);return{value:parser.scalar,units:parser.units()}}function unifyUnits(value){var _value$units;return quantities_default()(value.value,null!==(_value$units=value.units)&&void 0!==_value$units?_value$units:"mm").to("mm").scalar}function calculateDivisions(diameter,length){return Math.floor(diameter/length)+(diameter%length>0?2:1)}function distance(x,y,center){return Math.sqrt(Math.pow(x-center,2)+Math.pow(y-center,2))}function maxDistance(_ref){var column=_ref.column,width=_ref.width,row=_ref.row,height=_ref.height,center=_ref.center;return Math.max(distance(column*width,row*height,center),distance(column*width+width,row*height,center),distance(column*width,row*height+height,center),distance(column*width+width,row*height+height,center))}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Wafer(props){var diameter=props.diameter,chipWidth=props.chipWidth,chipHeight=props.chipHeight,size=props.size,_props$pickedItems=props.pickedItems,pickedItems=void 0===_props$pickedItems?[]:_props$pickedItems,_props$hideText=props.hideText,hideText=void 0!==_props$hideText&&_props$hideText,_props$selected=props.selected,selected=void 0===_props$selected?[]:_props$selected,onSelect=props.onSelect,_useMemo=Object(react.useMemo)((function(){var diameterPhysical=unifyUnits(diameter),widthPhysical=unifyUnits(chipWidth),heightPhysical=unifyUnits(chipHeight),columns=calculateDivisions(diameterPhysical,widthPhysical),rows=calculateDivisions(diameterPhysical,heightPhysical),widthSvg=size/columns;return{rows:rows,columns:columns,radius:diameterPhysical*widthSvg/(2*widthPhysical),width:widthSvg,height:size/rows,center:size/2}}),[diameter,chipWidth,chipHeight,size]),rows=_useMemo.rows,columns=_useMemo.columns,width=_useMemo.width,height=_useMemo.height,center=_useMemo.center,radius=_useMemo.radius,devices=Object(react.useMemo)((function(){return function listLabels(_ref2){for(var rows=_ref2.rows,columns=_ref2.columns,picked=_ref2.picked,width=_ref2.width,height=_ref2.height,center=_ref2.center,radius=_ref2.radius,labels=new Array(rows*columns),index=0,currNumber=0,row=0;row<rows;row++)for(var column=0;column<columns;column++)maxDistance({column:column,width:width,row:row,height:height,center:center})>=radius?labels[index]={label:"",picked:!1}:function(){var label=String(++currNumber),pickedSearch=picked.find((function(item){return item.index===label}));labels[index]=pickedSearch?{label:pickedSearch.label||label,picked:!0}:{label:label,picked:!1}}(),index++;return labels}({rows:rows,columns:columns,picked:pickedItems,width:width,height:height,center:center,radius:radius})}),[rows,columns,pickedItems,width,height,center,radius]),groupsSquares=Object(react.useMemo)((function(){for(var groupsSquares=new Array(rows),_loop=function _loop(row){for(var rowGroup=new Array(columns),_loop2=function _loop2(column){var index=row*columns+column,translate="translate("+column*width+", "+row*height+")";rowGroup[column]=Object(jsx_runtime.jsxs)("g",{transform:translate,children:[Object(jsx_runtime.jsx)("rect",{x:0,y:0,width:width,height:height,fill:devices[index].picked?"#5dbb6d":"transparent",stroke:"#222",onClick:function onClick(){return onSelect({x:column,y:row},devices[index].label,devices[index].picked)}}),!hideText&&Object(jsx_runtime.jsx)("text",{x:width/2,y:height/2,dominantBaseline:"middle",textAnchor:"middle",children:devices[index].label})]},column)},column=0;column<columns;column++)_loop2(column);groupsSquares[row]=Object(jsx_runtime.jsx)("g",{children:rowGroup},row)},row=0;row<rows;row++)_loop(row);return groupsSquares}),[rows,columns,height,width,devices,hideText,onSelect]),selectionBorders=Object(react.useMemo)((function(){return selected.map((function(val){switch(typeof val){case"string":var index=devices.findIndex((function(_ref){return _ref.label===val}));if(index<0)return null;var x=index%columns*width,y=Math.floor(index/columns)*height;return Object(jsx_runtime.jsx)("path",{d:"M"+x+" "+y+"h"+width+"v"+height+"h"+-width+"Z",fill:"none",stroke:"red"},"string-"+val);case"object":var _x=val.x,_y=val.y;return Object(jsx_runtime.jsx)("path",{d:"M"+_x*width+" "+_y*height+"h"+width+"v"+height+"h"+-width+"Z",fill:"none",stroke:"red"},"coord-"+_x+"-"+_y);default:throw new Error(typeof val+" is not an accepted value for selection")}}))}),[columns,devices,height,width,selected]);return Object(jsx_runtime.jsxs)("svg",{height:size,width:size,children:[Object(jsx_runtime.jsx)("circle",{cx:center,cy:center,fill:"#549ADA",r:radius}),groupsSquares,selectionBorders]})}Wafer.displayName="Wafer";try{Wafer.displayName="Wafer",Wafer.__docgenInfo={description:"",displayName:"Wafer",props:{diameter:{defaultValue:null,description:"",name:"diameter",required:!0,type:{name:"Value"}},chipWidth:{defaultValue:null,description:"",name:"chipWidth",required:!0,type:{name:"Value"}},chipHeight:{defaultValue:null,description:"",name:"chipHeight",required:!0,type:{name:"Value"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},pickedItems:{defaultValue:null,description:"List of taken items",name:"pickedItems",required:!0,type:{name:"WaferItem[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(position: PositionType, label: string, picked: boolean) => void"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"(string | PositionType)[]"}},hideText:{defaultValue:null,description:"",name:"hideText",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Wafer.tsx#Wafer"]={docgenInfo:Wafer.__docgenInfo,name:"Wafer",path:"src/Wafer.tsx#Wafer"})}catch(__react_docgen_typescript_loader_error){}},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./wafer.stories.tsx":"./stories/wafer.stories.tsx","./waferText.stories.tsx":"./stories/waferText.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/wafer.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic})),__webpack_require__.d(__webpack_exports__,"Dens",(function(){return Dens}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Wafer",component:_src__WEBPACK_IMPORTED_MODULE_3__.a,argTypes:{onSelect:{action:"onSelect"}},args:{pickedItems:[{index:"3"},{index:"5",label:"owner"}],selected:["3","12",{x:3,y:3}],diameter:{value:300,units:"mm"},size:320}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var Basic=Template.bind({});Basic.storyName="Simple example",Basic.args={chipHeight:{value:70,units:"mm"},chipWidth:{value:50,units:"mm"},hideText:!1};var Dens=Template.bind({});Dens.storyName="Dense example",Dens.args=Object.assign({},Basic.args,{chipHeight:{value:20,units:"mm"},chipWidth:{value:20,units:"mm"},hideText:!0}),Basic.parameters=Object.assign({storySource:{source:"(args) => <Wafer {...args} />"}},Basic.parameters),Dens.parameters=Object.assign({storySource:{source:"(args) => <Wafer {...args} />"}},Dens.parameters)},"./stories/waferText.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Wafer",component:_src__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{onSelect:{action:"onSelect"}},args:{pickedItems:[],selected:[],diameter:"300 mm",size:320,hideText:!1,chipHeight:"70 mm",chipWidth:"50 mm"}};var Text=function Text(args){var diameter=Object(_src__WEBPACK_IMPORTED_MODULE_2__.b)(args.diameter),chipHeight=Object(_src__WEBPACK_IMPORTED_MODULE_2__.b)(args.chipHeight),chipWidth=Object(_src__WEBPACK_IMPORTED_MODULE_2__.b)(args.chipWidth);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},args,{diameter:diameter,chipHeight:chipHeight,chipWidth:chipWidth}))};Text.displayName="Text",Text.storyName="Text example",Text.parameters=Object.assign({storySource:{source:"(args: TemplateArgs) => {\n  const diameter = fromTextToValue(args.diameter);\n  const chipHeight = fromTextToValue(args.chipHeight);\n  const chipWidth = fromTextToValue(args.chipWidth);\n  return (\n    <Wafer\n      {...args}\n      diameter={diameter}\n      chipHeight={chipHeight}\n      chipWidth={chipWidth}\n    />\n  );\n}"}},Text.parameters);try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{diameter:{defaultValue:null,description:"",name:"diameter",required:!0,type:{name:"Value & string"}},chipWidth:{defaultValue:null,description:"",name:"chipWidth",required:!0,type:{name:"Value & string"}},chipHeight:{defaultValue:null,description:"",name:"chipHeight",required:!0,type:{name:"Value & string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},pickedItems:{defaultValue:null,description:"List of taken items",name:"pickedItems",required:!0,type:{name:"WaferItem[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(position: PositionType, label: string, picked: boolean) => void"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"(string | PositionType)[]"}},hideText:{defaultValue:null,description:"",name:"hideText",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/waferText.stories.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"stories/waferText.stories.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);