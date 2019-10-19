!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=13)}([function(e,r){e.exports=require("chalk")},function(e,r){e.exports=require("@babel/runtime/regenerator")},function(e,r){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,r){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("inquirer")},function(e){e.exports=JSON.parse('{"name":"react-native-semver-update","version":"1.0.0","description":"Automaticly updates a project version and build number for react-native","preferGlobal":true,"bin":{"rnsemup":"./bin.js"},"scripts":{"build":"webpack --config ./webpack.config.js --mode production","dev:live":"nodemon ./dist/index.js","dev:static":"webpack --watch --config ./webpack.config.js --mode development","lint":"eslint ./src","start":"node ./dist/index.js","postinstall":"node ./postinstall.js"},"repository":{"type":"git","url":"git+https://github.com/zmnv/react-native-semver-update.git"},"keywords":["react","native","semver","update","menu","automatization","cli"],"author":"Valeriy Zimnev (@zmnv)","license":"MIT","bugs":{"url":"https://github.com/zmnv/react-native-semver-update/issues"},"homepage":"https://github.com/zmnv/react-native-semver-update#readme","dependencies":{"chalk":"^2.4.2","inquirer":"^7.0.0"},"devDependencies":{"@babel/core":"^7.4.3","@babel/plugin-proposal-class-properties":"^7.4.4","@babel/plugin-transform-runtime":"^7.4.3","@babel/preset-env":"^7.4.3","@babel/runtime":"^7.5.5","babel-eslint":"^10.0.2","babel-loader":"^8.0.5","clean-webpack-plugin":"^2.0.1","eslint":"^6.5.1","eslint-config-airbnb-base":"^14.0.0","eslint-import-resolver-alias":"^1.1.2","eslint-plugin-import":"^2.18.2","nodemon":"^1.18.11","raw-loader":"^2.0.0","webpack":"^4.29.6","webpack-cli":"^3.3.0","webpack-merge":"^4.2.1","webpack-node-externals":"^1.7.2"},"babel":{"presets":["@babel/preset-env"],"plugins":["@babel/plugin-proposal-class-properties","@babel/plugin-transform-runtime"]}}')},function(e,r){e.exports=require("@babel/runtime/helpers/typeof")},function(e,r){e.exports=require("@babel/runtime/helpers/inherits")},function(e,r){e.exports=require("@babel/runtime/helpers/wrapNativeSuper")},function(e,r){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,r){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,r,t){"use strict";t.r(r);var n=t(1),o=t.n(n),a=t(2),i=t.n(a),u={UPDATE:{PROJECT_VERSION_VARIANT:"Project Version",BUILD_NUMBER_VARIANT:"Build Number"},PLATFORM:{ALL:"All",ANDROID:"Android",IOS:"iOS",PACKAGE:"Package"}},c=t(0),s=t.n(c);function p(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:" ",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e},o="",a=0;a<r;){var i=e[a]||t;o=o.concat(i),a+=1}return e.length>r&&(o=o.replace(/.$/,"…")),n(o)}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.m1,t=void 0===r?"":r,n=e.m2,o=void 0===n?"":n,a=e.m3,i=void 0===a?"":a,u=e.m4,c=void 0===u?"":u,l=e.m5,b=void 0===l?"":l,f=11,d=p("Package",f,void 0,s.a.yellowBright),v=p("Android",f,void 0,s.a.greenBright),m=p("iOS",f,void 0,s.a.cyanBright),g=p("Package Version",16,void 0,s.a.whiteBright),O=p("Build Number",16,void 0,s.a.whiteBright),h=p(t,f,void 0,s.a.yellowBright),A=p(o,f,void 0,s.a.greenBright),y=p(i,f,void 0,s.a.cyanBright),R=p(c,f,void 0,s.a.greenBright),P=p(b,f,void 0,s.a.cyanBright);return s.a.gray("\n┌──────────────────┬─────────────┬─────────────┬─────────────┐\n│                  │ ".concat(d," │ ").concat(v," │ ").concat(m," │\n├──────────────────┼─────────────┼─────────────┼─────────────┤\n│ ").concat(g," │ ").concat(h," │ ").concat(A," │ ").concat(y," │\n├──────────────────┼─────────────┼─────────────┼─────────────┤\n│ ").concat(O," │ -           │ ").concat(R," │ ").concat(P," │\n└──────────────────┴─────────────┴─────────────┴─────────────┘\n"))};function b(e,r){var t=e.versions.Package.projectVersion,n=e.versions[u.PLATFORM.IOS],o=e.versions[u.PLATFORM.ANDROID],a=l({m1:t,m2:o&&o.projectVersion,m3:n&&n.projectVersion,m4:o&&String(o.buildNumber),m5:n&&String(n.buildNumber),header:r});console.log(a)}var f=t(3),d=t.n(f),v=t(4),m=t(8),g=t.n(m),O=t(9),h=t.n(O),A=(t(11),t(12),t(10)),y=t.n(A);function R(e,r){R=function(e,r){return new a(e,void 0,r)};var t=y()(RegExp),n=RegExp.prototype,o=new WeakMap;function a(e,r,n){var a=t.call(this,e,r);return o.set(a,n||o.get(e)),a}function i(e,r){var t=o.get(r);return Object.keys(t).reduce((function(r,n){return r[n]=e[t[n]],r}),Object.create(null))}return h()(a,t),a.prototype.exec=function(e){var r=n.exec.call(this,e);return r&&(r.groups=i(r,this)),r},a.prototype[Symbol.replace]=function(e,r){if("string"==typeof r){var t=o.get(this);return n[Symbol.replace].call(this,e,r.replace(/\$<([^>]+)>/g,(function(e,r){return"$"+t[r]})))}if("function"==typeof r){var a=this;return n[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!==g()(e[e.length-1])&&e.push(i(e,a)),r.apply(this,e)}))}return n[Symbol.replace].call(this,e,r)},R.apply(this,arguments)}var P={ANDROID:{buildVersion:R(/(^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*versionName ")(.*)("$)/gm,{buildVersion:2}),buildNumber:R(/(^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*versionCode )([0-9]*)($)/gm,{buildNumber:2})},IOS:{buildVersion:R(/(^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*MARKETING_VERSION = )(.*)(;$)/gm,{buildVersion:2}),buildNumber:R(/(^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*CURRENT_PROJECT_VERSION = )(.*)(;$)/gm,{buildNumber:2})}},x=t(5),N=process.cwd(),j={PACKAGE:Object(x.resolve)(N,"./package.json"),ANDROID:Object(x.resolve)(N,"./android/app/build.gradle"),IOS:Object(x.resolve)(N,"./ios/enapter.xcodeproj/project.pbxproj")},F=function(e){return Object(v.readFileSync)(e,"utf8")};function w(e,r){return{projectVersion:new RegExp(e.buildVersion).exec(r)[2],buildNumber:Number(new RegExp(e.buildNumber).exec(r)[2])}}function I(){var e,r,t=(e={Package:JSON.parse(F(j.PACKAGE))},d()(e,u.PLATFORM.IOS,F(j.IOS)),d()(e,u.PLATFORM.ANDROID,F(j.ANDROID)),e);return{files:t,versions:(r={Package:{projectVersion:t.Package.version}},d()(r,u.PLATFORM.IOS,w(P.IOS,t[u.PLATFORM.IOS])),d()(r,u.PLATFORM.ANDROID,w(P.ANDROID,t[u.PLATFORM.ANDROID])),r)}}function k(){var e=!1,r={};return Object.keys(j).forEach((function(t){var n=Object(v.existsSync)(j[t]);r[t]={path:j[t],isFound:n},n||(e=!0)})),e&&(console.log(s.a.redBright("[Error] Some of files not found:\n")),Object.keys(j).forEach((function(e){var t;console.log(e),console.log("– path:",r[e].path),console.log("– is found:",(t=r[e].isFound)?s.a.greenBright(t):s.a.redBright(t)),console.log("")}))),e}var T=t(7),D=s.a.magentaBright("".concat(T.name," ").concat(T.version)),S=t(6);function E(){return L.apply(this,arguments)}function L(){return(L=i()(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.prompt)([{type:"list",name:"updateFor",message:"What do you want to update?",choices:[u.UPDATE.BUILD_NUMBER_VARIANT,u.UPDATE.PROJECT_VERSION_VARIANT]}]);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return V.apply(this,arguments)}function V(){return(V=i()(o.a.mark((function e(r){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[u.PLATFORM.ALL,u.PLATFORM.PACKAGE,u.PLATFORM.ANDROID,u.PLATFORM.IOS],r===u.UPDATE.BUILD_NUMBER_VARIANT&&delete t[1],e.next=4,Object(S.prompt)([{type:"list",name:"platform",message:"Choose the platform:",choices:t}]);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return _.apply(this,arguments)}function _(){return(_=i()(o.a.mark((function e(r){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.prompt)([{type:"input",name:"version",message:r}]);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U="[writeFile]";function C(e,r){try{Object(v.writeFileSync)(e,r)}catch(e){console.log(U,e)}}function q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function G(e,r){if(r){var t=j.PACKAGE,n=e.files.Package,o=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?q(t,!0).forEach((function(r){d()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},n,{version:r}),a=JSON.stringify(o,null,2);JSON.stringify(n,null,2)!==a&&C(t,a)}}function J(e,r,t,n,o){var a=j[r.toUpperCase()],i=e.files[r],u=e.versions,c=u.projectVersion,s=u.buildNumber,p=i;n&&c!==n&&(p=p.replace(t.buildVersion,(function(e,r,t,o){return"".concat(r).concat(n).concat(o)}))),o&&s!==o&&(p=p.replace(t.buildNumber,(function(e,r,t,n){return"".concat(r).concat(o).concat(n)}))),i!==p&&C(a,p)}function K(e,r,t){J(e,u.PLATFORM.ANDROID,P.ANDROID,r,t)}function $(e,r,t){J(e,u.PLATFORM.IOS,P.IOS,r,t)}function z(e,r){return W.apply(this,arguments)}function W(){return(W=i()(o.a.mark((function e(r,t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("Input the new Project Version:");case 2:n=e.sent,a=n.version,e.t0=t,e.next=e.t0===u.PLATFORM.PACKAGE?7:e.t0===u.PLATFORM.ANDROID?9:e.t0===u.PLATFORM.IOS?11:e.t0===u.PLATFORM.ALL?13:17;break;case 7:return G(r,a),e.abrupt("break",17);case 9:return K(r,a),e.abrupt("break",17);case 11:return $(r,a),e.abrupt("break",17);case 13:return G(r,a),K(r,a),$(r,a),e.abrupt("break",17);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,r){return H.apply(this,arguments)}function H(){return(H=i()(o.a.mark((function e(r,t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("Input the new Build Number:");case 2:n=e.sent,a=n.version,e.t0=t,e.next=e.t0===u.PLATFORM.ANDROID?7:e.t0===u.PLATFORM.IOS?9:e.t0===u.PLATFORM.ALL?11:14;break;case 7:return K(r,null,a),e.abrupt("break",14);case 9:return $(r,null,a),e.abrupt("break",14);case 11:return K(r,null,a),$(r,null,a),e.abrupt("break",14);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){return X.apply(this,arguments)}function X(){return(X=i()(o.a.mark((function e(r){var t,n,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return t=e.sent,n=t.updateFor,e.next=6,M(n);case 6:a=e.sent,i=a.platform,e.t0=n,e.next=e.t0===u.UPDATE.PROJECT_VERSION_VARIANT?11:e.t0===u.UPDATE.BUILD_NUMBER_VARIANT?14:17;break;case 11:return e.next=13,z(r,i);case 13:return e.abrupt("break",17);case 14:return e.next=16,Z(r,i);case 16:return e.abrupt("break",17);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=i()(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(D),!k()){e.next=4;break}return e.abrupt("return");case 4:return b(r=I(),"Before"),e.next=8,Q(r);case 8:b(I(),"After");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){Y.apply(this,arguments)})()}]);
//# sourceMappingURL=index.js.map