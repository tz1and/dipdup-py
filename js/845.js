"use strict";(self.webpackChunkdipdup_docs=self.webpackChunkdipdup_docs||[]).push([[845],{845:(e,t,r)=>{function n(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(r){if("default"!==r&&!(r in e)){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}}))})),Object.freeze(e)}r.r(t),r.d(t,{c:()=>s});var i={exports:{}};!function(e){var t={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},r=e.Pos;function n(e,r){return"pairs"==r&&"string"==typeof e?e:"object"==typeof e&&null!=e[r]?e[r]:t[r]}e.defineOption("autoCloseBrackets",!1,(function(t,r,s){s&&s!=e.Init&&(t.removeKeyMap(i),t.state.closeBrackets=null),r&&(a(n(r,"pairs")),t.state.closeBrackets=r,t.addKeyMap(i))}));var i={Backspace:function(t){var i=o(t);if(!i||t.getOption("disableInput"))return e.Pass;for(var a=n(i,"pairs"),s=t.listSelections(),l=0;l<s.length;l++){if(!s[l].empty())return e.Pass;var c=u(t,s[l].head);if(!c||a.indexOf(c)%2!=0)return e.Pass}for(l=s.length-1;l>=0;l--){var f=s[l].head;t.replaceRange("",r(f.line,f.ch-1),r(f.line,f.ch+1),"+delete")}},Enter:function(t){var r=o(t),i=r&&n(r,"explode");if(!i||t.getOption("disableInput"))return e.Pass;for(var a=t.listSelections(),s=0;s<a.length;s++){if(!a[s].empty())return e.Pass;var c=u(t,a[s].head);if(!c||i.indexOf(c)%2!=0)return e.Pass}t.operation((function(){var e=t.lineSeparator()||"\n";t.replaceSelection(e+e,null),l(t,-1),a=t.listSelections();for(var r=0;r<a.length;r++){var n=a[r].head.line;t.indentLine(n,null,!0),t.indentLine(n+1,null,!0)}}))}};function a(e){for(var t=0;t<e.length;t++){var r=e.charAt(t),n="'"+r+"'";i[n]||(i[n]=s(r))}}function s(t){return function(i){return function(t,i){var a=o(t);if(!a||t.getOption("disableInput"))return e.Pass;var s=n(a,"pairs"),u=s.indexOf(i);if(-1==u)return e.Pass;for(var h,p=n(a,"closeBefore"),d=n(a,"triples"),g=s.charAt(u+1)==i,v=t.listSelections(),b=u%2==0,k=0;k<v.length;k++){var y,O=v[k],P=O.head,S=t.getRange(P,r(P.line,P.ch+1));if(b&&!O.empty())y="surround";else if(!g&&b||S!=i)if(g&&P.ch>1&&d.indexOf(i)>=0&&t.getRange(r(P.line,P.ch-2),P)==i+i){if(P.ch>2&&/\bstring/.test(t.getTokenTypeAt(r(P.line,P.ch-2))))return e.Pass;y="addFour"}else if(g){var x=0==P.ch?" ":t.getRange(r(P.line,P.ch-1),P);if(e.isWordChar(S)||x==i||e.isWordChar(x))return e.Pass;y="both"}else{if(!b||!(0===S.length||/\s/.test(S)||p.indexOf(S)>-1))return e.Pass;y="both"}else y=g&&f(t,P)?"both":d.indexOf(i)>=0&&t.getRange(P,r(P.line,P.ch+3))==i+i+i?"skipThree":"skip";if(h){if(h!=y)return e.Pass}else h=y}var A=u%2?s.charAt(u-1):i,B=u%2?i:s.charAt(u+1);t.operation((function(){if("skip"==h)l(t,1);else if("skipThree"==h)l(t,3);else if("surround"==h){for(var e=t.getSelections(),r=0;r<e.length;r++)e[r]=A+e[r]+B;for(t.replaceSelections(e,"around"),e=t.listSelections().slice(),r=0;r<e.length;r++)e[r]=c(e[r]);t.setSelections(e)}else"both"==h?(t.replaceSelection(A+B,null),t.triggerElectric(A+B),l(t,-1)):"addFour"==h&&(t.replaceSelection(A+A+A+A,"before"),l(t,1))}))}(i,t)}}function o(e){var t=e.state.closeBrackets;return!t||t.override?t:e.getModeAt(e.getCursor()).closeBrackets||t}function l(e,t){for(var r=[],n=e.listSelections(),i=0,a=0;a<n.length;a++){var s=n[a];s.head==e.getCursor()&&(i=a);var o=s.head.ch||t>0?{line:s.head.line,ch:s.head.ch+t}:{line:s.head.line-1};r.push({anchor:o,head:o})}e.setSelections(r,i)}function c(t){var n=e.cmpPos(t.anchor,t.head)>0;return{anchor:new r(t.anchor.line,t.anchor.ch+(n?-1:1)),head:new r(t.head.line,t.head.ch+(n?1:-1))}}function u(e,t){var n=e.getRange(r(t.line,t.ch-1),r(t.line,t.ch+1));return 2==n.length?n:null}function f(e,t){var n=e.getTokenAt(r(t.line,t.ch+1));return/\bstring/.test(n.type)&&n.start==t.ch&&(0==t.ch||!/\bstring/.test(e.getTokenTypeAt(t)))}a(t.pairs+"`")}(r(7480).a.exports);var a=i.exports,s=Object.freeze(n({__proto__:null,[Symbol.toStringTag]:"Module",default:a},[i.exports]))}}]);