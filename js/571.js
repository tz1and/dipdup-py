"use strict";(self.webpackChunkdipdup_docs=self.webpackChunkdipdup_docs||[]).push([[571,980,105],{4980:(e,t,n)=>{n.r(t),n.d(t,{a:()=>o,m:()=>a});var r=n(7480);function i(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}var o={exports:{}};!function(e){var t=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),n=e.Pos,r={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function i(e){return e&&e.bracketRegex||/[(){}[\]]/}function o(e,t,o){var a=e.getLineHandle(t.line),s=t.ch-1,c=o&&o.afterCursor;null==c&&(c=/(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className));var f=i(o),u=!c&&s>=0&&f.test(a.text.charAt(s))&&r[a.text.charAt(s)]||f.test(a.text.charAt(s+1))&&r[a.text.charAt(++s)];if(!u)return null;var h=">"==u.charAt(1)?1:-1;if(o&&o.strict&&h>0!=(s==t.ch))return null;var d=e.getTokenTypeAt(n(t.line,s+1)),m=l(e,n(t.line,s+(h>0?1:0)),h,d,o);return null==m?null:{from:n(t.line,s),to:m&&m.pos,match:m&&m.ch==u.charAt(0),forward:h>0}}function l(e,t,o,l,a){for(var s=a&&a.maxScanLineLength||1e4,c=a&&a.maxScanLines||1e3,f=[],u=i(a),h=o>0?Math.min(t.line+c,e.lastLine()+1):Math.max(e.firstLine()-1,t.line-c),d=t.line;d!=h;d+=o){var m=e.getLine(d);if(m){var g=o>0?0:m.length-1,p=o>0?m.length:-1;if(!(m.length>s))for(d==t.line&&(g=t.ch-(o<0?1:0));g!=p;g+=o){var C=m.charAt(g);if(u.test(C)&&(void 0===l||(e.getTokenTypeAt(n(d,g+1))||"")==(l||""))){var v=r[C];if(v&&">"==v.charAt(1)==o>0)f.push(C);else{if(!f.length)return{pos:n(d,g),ch:C};f.pop()}}}}}return d-o!=(o>0?e.lastLine():e.firstLine())&&null}function a(e,r,i){for(var l=e.state.matchBrackets.maxHighlightLineLength||1e3,a=i&&i.highlightNonMatching,s=[],c=e.listSelections(),f=0;f<c.length;f++){var u=c[f].empty()&&o(e,c[f].head,i);if(u&&(u.match||!1!==a)&&e.getLine(u.from.line).length<=l){var h=u.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";s.push(e.markText(u.from,n(u.from.line,u.from.ch+1),{className:h})),u.to&&e.getLine(u.to.line).length<=l&&s.push(e.markText(u.to,n(u.to.line,u.to.ch+1),{className:h}))}}if(s.length){t&&e.state.focused&&e.focus();var d=function(){e.operation((function(){for(var e=0;e<s.length;e++)s[e].clear()}))};if(!r)return d;setTimeout(d,800)}}function s(e){e.operation((function(){e.state.matchBrackets.currentlyHighlighted&&(e.state.matchBrackets.currentlyHighlighted(),e.state.matchBrackets.currentlyHighlighted=null),e.state.matchBrackets.currentlyHighlighted=a(e,!1,e.state.matchBrackets)}))}function c(e){e.state.matchBrackets&&e.state.matchBrackets.currentlyHighlighted&&(e.state.matchBrackets.currentlyHighlighted(),e.state.matchBrackets.currentlyHighlighted=null)}e.defineOption("matchBrackets",!1,(function(t,n,r){r&&r!=e.Init&&(t.off("cursorActivity",s),t.off("focus",s),t.off("blur",c),c(t)),n&&(t.state.matchBrackets="object"==typeof n?n:{},t.on("cursorActivity",s),t.on("focus",s),t.on("blur",c))})),e.defineExtension("matchBrackets",(function(){a(this,!0)})),e.defineExtension("findMatchingBracket",(function(e,t,n){return(n||"boolean"==typeof t)&&(n?(n.strict=t,t=n):t=t?{strict:!0}:null),o(this,e,t)})),e.defineExtension("scanForBracket",(function(e,t,n,r){return l(this,e,t,n,r)}))}(r.a.exports);var l=o.exports,a=Object.freeze(i({__proto__:null,[Symbol.toStringTag]:"Module",default:l},[o.exports]))},6105:(e,t,n)=>{n.r(t),n.d(t,{a:()=>o,s:()=>a});var r=n(7480);function i(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}var o={exports:{}};!function(e){var t,n,r=e.Pos;function i(e,t){for(var n=function(e){var t=e.flags;return null!=t?t:(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}(e),r=n,i=0;i<t.length;i++)-1==r.indexOf(t.charAt(i))&&(r+=t.charAt(i));return n==r?e:new RegExp(e.source,r)}function o(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function l(e,t,n){t=i(t,"g");for(var o=n.line,l=n.ch,a=e.lastLine();o<=a;o++,l=0){t.lastIndex=l;var s=e.getLine(o),c=t.exec(s);if(c)return{from:r(o,c.index),to:r(o,c.index+c[0].length),match:c}}}function a(e,t,n){if(!o(t))return l(e,t,n);t=i(t,"gm");for(var a,s=1,c=n.line,f=e.lastLine();c<=f;){for(var u=0;u<s&&!(c>f);u++){var h=e.getLine(c++);a=null==a?h:a+"\n"+h}s*=2,t.lastIndex=n.ch;var d=t.exec(a);if(d){var m=a.slice(0,d.index).split("\n"),g=d[0].split("\n"),p=n.line+m.length-1,C=m[m.length-1].length;return{from:r(p,C),to:r(p+g.length-1,1==g.length?C+g[0].length:g[g.length-1].length),match:d}}}}function s(e,t,n){for(var r,i=0;i<=e.length;){t.lastIndex=i;var o=t.exec(e);if(!o)break;var l=o.index+o[0].length;if(l>e.length-n)break;(!r||l>r.index+r[0].length)&&(r=o),i=o.index+1}return r}function c(e,t,n){t=i(t,"g");for(var o=n.line,l=n.ch,a=e.firstLine();o>=a;o--,l=-1){var c=e.getLine(o),f=s(c,t,l<0?0:c.length-l);if(f)return{from:r(o,f.index),to:r(o,f.index+f[0].length),match:f}}}function f(e,t,n){if(!o(t))return c(e,t,n);t=i(t,"gm");for(var l,a=1,f=e.getLine(n.line).length-n.ch,u=n.line,h=e.firstLine();u>=h;){for(var d=0;d<a&&u>=h;d++){var m=e.getLine(u--);l=null==l?m:m+"\n"+l}a*=2;var g=s(l,t,f);if(g){var p=l.slice(0,g.index).split("\n"),C=g[0].split("\n"),v=u+p.length,S=p[p.length-1].length;return{from:r(v,S),to:r(v+C.length-1,1==C.length?S+C[0].length:C[C.length-1].length),match:g}}}}function u(e,t,n,r){if(e.length==t.length)return n;for(var i=0,o=n+Math.max(0,e.length-t.length);;){if(i==o)return i;var l=i+o>>1,a=r(e.slice(0,l)).length;if(a==n)return l;a>n?o=l:i=l+1}}function h(e,i,o,l){if(!i.length)return null;var a=l?t:n,s=a(i).split(/\r|\n\r?/);e:for(var c=o.line,f=o.ch,h=e.lastLine()+1-s.length;c<=h;c++,f=0){var d=e.getLine(c).slice(f),m=a(d);if(1==s.length){var g=m.indexOf(s[0]);if(-1==g)continue e;return o=u(d,m,g,a)+f,{from:r(c,u(d,m,g,a)+f),to:r(c,u(d,m,g+s[0].length,a)+f)}}var p=m.length-s[0].length;if(m.slice(p)==s[0]){for(var C=1;C<s.length-1;C++)if(a(e.getLine(c+C))!=s[C])continue e;var v=e.getLine(c+s.length-1),S=a(v),k=s[s.length-1];if(S.slice(0,k.length)==k)return{from:r(c,u(d,m,p,a)+f),to:r(c+s.length-1,u(v,S,k.length,a))}}}}function d(e,i,o,l){if(!i.length)return null;var a=l?t:n,s=a(i).split(/\r|\n\r?/);e:for(var c=o.line,f=o.ch,h=e.firstLine()-1+s.length;c>=h;c--,f=-1){var d=e.getLine(c);f>-1&&(d=d.slice(0,f));var m=a(d);if(1==s.length){var g=m.lastIndexOf(s[0]);if(-1==g)continue e;return{from:r(c,u(d,m,g,a)),to:r(c,u(d,m,g+s[0].length,a))}}var p=s[s.length-1];if(m.slice(0,p.length)==p){var C=1;for(o=c-s.length+1;C<s.length-1;C++)if(a(e.getLine(o+C))!=s[C])continue e;var v=e.getLine(c+1-s.length),S=a(v);if(S.slice(S.length-s[0].length)==s[0])return{from:r(c+1-s.length,u(v,S,v.length-s[0].length,a)),to:r(c,u(d,m,p.length,a))}}}}function m(e,t,n,o){var s;this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=e,n=n?e.clipPos(n):r(0,0),this.pos={from:n,to:n},"object"==typeof o?s=o.caseFold:(s=o,o=null),"string"==typeof t?(null==s&&(s=!1),this.matches=function(n,r){return(n?d:h)(e,t,r,s)}):(t=i(t,"gm"),o&&!1===o.multiline?this.matches=function(n,r){return(n?c:l)(e,t,r)}:this.matches=function(n,r){return(n?f:a)(e,t,r)})}String.prototype.normalize?(t=function(e){return e.normalize("NFD").toLowerCase()},n=function(e){return e.normalize("NFD")}):(t=function(e){return e.toLowerCase()},n=function(e){return e}),m.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var n=this.doc.clipPos(t?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(n=r(n.line,n.ch),t?(n.ch--,n.ch<0&&(n.line--,n.ch=(this.doc.getLine(n.line)||"").length)):(n.ch++,n.ch>(this.doc.getLine(n.line)||"").length&&(n.ch=0,n.line++)),0!=e.cmpPos(n,this.doc.clipPos(n))))return this.atOccurrence=!1;var i=this.matches(t,n);if(this.afterEmptyMatch=i&&0==e.cmpPos(i.from,i.to),i)return this.pos=i,this.atOccurrence=!0,this.pos.match||!0;var o=r(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:o,to:o},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var i=e.splitLines(t);this.doc.replaceRange(i,this.pos.from,this.pos.to,n),this.pos.to=r(this.pos.from.line+i.length-1,i[i.length-1].length+(1==i.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",(function(e,t,n){return new m(this.doc,e,t,n)})),e.defineDocExtension("getSearchCursor",(function(e,t,n){return new m(this,e,t,n)})),e.defineExtension("selectMatches",(function(t,n){for(var r=[],i=this.getSearchCursor(t,this.getCursor("from"),n);i.findNext()&&!(e.cmpPos(i.to(),this.getCursor("to"))>0);)r.push({anchor:i.from(),head:i.to()});r.length&&this.setSelections(r,0)}))}(r.a.exports);var l=o.exports,a=Object.freeze(i({__proto__:null,[Symbol.toStringTag]:"Module",default:l},[o.exports]))},3571:(e,t,n)=>{n.r(t),n.d(t,{s:()=>c});var r=n(7480),i=n(6105),o=n(4980);function l(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}var a={exports:{}};!function(e){var t=e.commands,n=e.Pos;function r(t,r){t.extendSelectionsBy((function(i){return t.display.shift||t.doc.extend||i.empty()?function(t,r,i){if(i<0&&0==r.ch)return t.clipPos(n(r.line-1));var o=t.getLine(r.line);if(i>0&&r.ch>=o.length)return t.clipPos(n(r.line+1,0));for(var l,a="start",s=r.ch,c=s,f=i<0?0:o.length,u=0;c!=f;c+=i,u++){var h=o.charAt(i<0?c-1:c),d="_"!=h&&e.isWordChar(h)?"w":"o";if("w"==d&&h.toUpperCase()==h&&(d="W"),"start"==a)"o"!=d?(a="in",l=d):s=c+i;else if("in"==a&&l!=d){if("w"==l&&"W"==d&&i<0&&c--,"W"==l&&"w"==d&&i>0){if(c==s+1){l="w";continue}c--}break}}return n(r.line,c)}(t.doc,i.head,r):r<0?i.from():i.to()}))}function i(t,r){if(t.isReadOnly())return e.Pass;t.operation((function(){for(var e=t.listSelections().length,i=[],o=-1,l=0;l<e;l++){var a=t.listSelections()[l].head;if(!(a.line<=o)){var s=n(a.line+(r?0:1),0);t.replaceRange("\n",s,null,"+insertLine"),t.indentLine(s.line,null,!0),i.push({head:s,anchor:s}),o=a.line+1}}t.setSelections(i)})),t.execCommand("indentAuto")}function o(t,r){for(var i=r.ch,o=i,l=t.getLine(r.line);i&&e.isWordChar(l.charAt(i-1));)--i;for(;o<l.length&&e.isWordChar(l.charAt(o));)++o;return{from:n(r.line,i),to:n(r.line,o),word:l.slice(i,o)}}function l(e,t){for(var n=e.listSelections(),r=[],i=0;i<n.length;i++){var o=n[i],l=e.findPosV(o.anchor,t,"line",o.anchor.goalColumn),a=e.findPosV(o.head,t,"line",o.head.goalColumn);l.goalColumn=null!=o.anchor.goalColumn?o.anchor.goalColumn:e.cursorCoords(o.anchor,"div").left,a.goalColumn=null!=o.head.goalColumn?o.head.goalColumn:e.cursorCoords(o.head,"div").left;var s={anchor:l,head:a};r.push(o),r.push(s)}e.setSelections(r)}t.goSubwordLeft=function(e){r(e,-1)},t.goSubwordRight=function(e){r(e,1)},t.scrollLineUp=function(e){var t=e.getScrollInfo();if(!e.somethingSelected()){var n=e.lineAtHeight(t.top+t.clientHeight,"local");e.getCursor().line>=n&&e.execCommand("goLineUp")}e.scrollTo(null,t.top-e.defaultTextHeight())},t.scrollLineDown=function(e){var t=e.getScrollInfo();if(!e.somethingSelected()){var n=e.lineAtHeight(t.top,"local")+1;e.getCursor().line<=n&&e.execCommand("goLineDown")}e.scrollTo(null,t.top+e.defaultTextHeight())},t.splitSelectionByLine=function(e){for(var t=e.listSelections(),r=[],i=0;i<t.length;i++)for(var o=t[i].from(),l=t[i].to(),a=o.line;a<=l.line;++a)l.line>o.line&&a==l.line&&0==l.ch||r.push({anchor:a==o.line?o:n(a,0),head:a==l.line?l:n(a)});e.setSelections(r,0)},t.singleSelectionTop=function(e){var t=e.listSelections()[0];e.setSelection(t.anchor,t.head,{scroll:!1})},t.selectLine=function(e){for(var t=e.listSelections(),r=[],i=0;i<t.length;i++){var o=t[i];r.push({anchor:n(o.from().line,0),head:n(o.to().line+1,0)})}e.setSelections(r)},t.insertLineAfter=function(e){return i(e,!1)},t.insertLineBefore=function(e){return i(e,!0)},t.selectNextOccurrence=function(t){var r=t.getCursor("from"),i=t.getCursor("to"),l=t.state.sublimeFindFullWord==t.doc.sel;if(0==e.cmpPos(r,i)){var a=o(t,r);if(!a.word)return;t.setSelection(a.from,a.to),l=!0}else{var s=t.getRange(r,i),c=l?new RegExp("\\b"+s+"\\b"):s,f=t.getSearchCursor(c,i),u=f.findNext();if(u||(u=(f=t.getSearchCursor(c,n(t.firstLine(),0))).findNext()),!u||function(t,n,r){for(var i=0;i<t.length;i++)if(0==e.cmpPos(t[i].from(),n)&&0==e.cmpPos(t[i].to(),r))return!0;return!1}(t.listSelections(),f.from(),f.to()))return;t.addSelection(f.from(),f.to())}l&&(t.state.sublimeFindFullWord=t.doc.sel)},t.skipAndSelectNextOccurrence=function(n){var r=n.getCursor("anchor"),i=n.getCursor("head");t.selectNextOccurrence(n),0!=e.cmpPos(r,i)&&n.doc.setSelections(n.doc.listSelections().filter((function(e){return e.anchor!=r||e.head!=i})))},t.addCursorToPrevLine=function(e){l(e,-1)},t.addCursorToNextLine=function(e){l(e,1)};var a="(){}[]";function s(t){for(var r=t.listSelections(),i=[],o=0;o<r.length;o++){var l=r[o],s=l.head,c=t.scanForBracket(s,-1);if(!c)return!1;for(;;){var f=t.scanForBracket(s,1);if(!f)return!1;if(f.ch==a.charAt(a.indexOf(c.ch)+1)){var u=n(c.pos.line,c.pos.ch+1);if(0!=e.cmpPos(u,l.from())||0!=e.cmpPos(f.pos,l.to())){i.push({anchor:u,head:f.pos});break}if(!(c=t.scanForBracket(c.pos,-1)))return!1}s=n(f.pos.line,f.pos.ch+1)}}return t.setSelections(i),!0}function c(e){return e?/\bpunctuation\b/.test(e)?e:void 0:null}function f(t,r,i){if(t.isReadOnly())return e.Pass;for(var o,l=t.listSelections(),a=[],s=0;s<l.length;s++){var c=l[s];if(!c.empty()){for(var f=c.from().line,u=c.to().line;s<l.length-1&&l[s+1].from().line==u;)u=l[++s].to().line;l[s].to().ch||u--,a.push(f,u)}}a.length?o=!0:a.push(t.firstLine(),t.lastLine()),t.operation((function(){for(var e=[],l=0;l<a.length;l+=2){var s=a[l],c=a[l+1],f=n(s,0),u=n(c),h=t.getRange(f,u,!1);r?h.sort((function(e,t){return e<t?-i:e==t?0:i})):h.sort((function(e,t){var n=e.toUpperCase(),r=t.toUpperCase();return n!=r&&(e=n,t=r),e<t?-i:e==t?0:i})),t.replaceRange(h,f,u),o&&e.push({anchor:f,head:n(c+1,0)})}o&&t.setSelections(e,0)}))}function u(t,n){t.operation((function(){for(var r=t.listSelections(),i=[],l=[],a=0;a<r.length;a++)(c=r[a]).empty()?(i.push(a),l.push("")):l.push(n(t.getRange(c.from(),c.to())));var s;for(t.replaceSelections(l,"around","case"),a=i.length-1;a>=0;a--){var c=r[i[a]];if(!(s&&e.cmpPos(c.head,s)>0)){var f=o(t,c.head);s=f.from,t.replaceRange(n(f.word),f.from,f.to)}}}))}function h(t){var n=t.getCursor("from"),r=t.getCursor("to");if(0==e.cmpPos(n,r)){var i=o(t,n);if(!i.word)return;n=i.from,r=i.to}return{from:n,to:r,query:t.getRange(n,r),word:i}}function d(e,t){var r=h(e);if(r){var i=r.query,o=e.getSearchCursor(i,t?r.to:r.from);(t?o.findNext():o.findPrevious())?e.setSelection(o.from(),o.to()):(o=e.getSearchCursor(i,t?n(e.firstLine(),0):e.clipPos(n(e.lastLine()))),(t?o.findNext():o.findPrevious())?e.setSelection(o.from(),o.to()):r.word&&e.setSelection(r.from,r.to))}}t.selectScope=function(e){s(e)||e.execCommand("selectAll")},t.selectBetweenBrackets=function(t){if(!s(t))return e.Pass},t.goToBracket=function(t){t.extendSelectionsBy((function(r){var i=t.scanForBracket(r.head,1,c(t.getTokenTypeAt(r.head)));if(i&&0!=e.cmpPos(i.pos,r.head))return i.pos;var o=t.scanForBracket(r.head,-1,c(t.getTokenTypeAt(n(r.head.line,r.head.ch+1))));return o&&n(o.pos.line,o.pos.ch+1)||r.head}))},t.swapLineUp=function(t){if(t.isReadOnly())return e.Pass;for(var r=t.listSelections(),i=[],o=t.firstLine()-1,l=[],a=0;a<r.length;a++){var s=r[a],c=s.from().line-1,f=s.to().line;l.push({anchor:n(s.anchor.line-1,s.anchor.ch),head:n(s.head.line-1,s.head.ch)}),0!=s.to().ch||s.empty()||--f,c>o?i.push(c,f):i.length&&(i[i.length-1]=f),o=f}t.operation((function(){for(var e=0;e<i.length;e+=2){var r=i[e],o=i[e+1],a=t.getLine(r);t.replaceRange("",n(r,0),n(r+1,0),"+swapLine"),o>t.lastLine()?t.replaceRange("\n"+a,n(t.lastLine()),null,"+swapLine"):t.replaceRange(a+"\n",n(o,0),null,"+swapLine")}t.setSelections(l),t.scrollIntoView()}))},t.swapLineDown=function(t){if(t.isReadOnly())return e.Pass;for(var r=t.listSelections(),i=[],o=t.lastLine()+1,l=r.length-1;l>=0;l--){var a=r[l],s=a.to().line+1,c=a.from().line;0!=a.to().ch||a.empty()||s--,s<o?i.push(s,c):i.length&&(i[i.length-1]=c),o=c}t.operation((function(){for(var e=i.length-2;e>=0;e-=2){var r=i[e],o=i[e+1],l=t.getLine(r);r==t.lastLine()?t.replaceRange("",n(r-1),n(r),"+swapLine"):t.replaceRange("",n(r,0),n(r+1,0),"+swapLine"),t.replaceRange(l+"\n",n(o,0),null,"+swapLine")}t.scrollIntoView()}))},t.toggleCommentIndented=function(e){e.toggleComment({indent:!0})},t.joinLines=function(e){for(var t=e.listSelections(),r=[],i=0;i<t.length;i++){for(var o=t[i],l=o.from(),a=l.line,s=o.to().line;i<t.length-1&&t[i+1].from().line==s;)s=t[++i].to().line;r.push({start:a,end:s,anchor:!o.empty()&&l})}e.operation((function(){for(var t=0,i=[],o=0;o<r.length;o++){for(var l,a=r[o],s=a.anchor&&n(a.anchor.line-t,a.anchor.ch),c=a.start;c<=a.end;c++){var f=c-t;c==a.end&&(l=n(f,e.getLine(f).length+1)),f<e.lastLine()&&(e.replaceRange(" ",n(f),n(f+1,/^\s*/.exec(e.getLine(f+1))[0].length)),++t)}i.push({anchor:s||l,head:l})}e.setSelections(i,0)}))},t.duplicateLine=function(e){e.operation((function(){for(var t=e.listSelections().length,r=0;r<t;r++){var i=e.listSelections()[r];i.empty()?e.replaceRange(e.getLine(i.head.line)+"\n",n(i.head.line,0)):e.replaceRange(e.getRange(i.from(),i.to()),i.from())}e.scrollIntoView()}))},t.sortLines=function(e){f(e,!0,1)},t.reverseSortLines=function(e){f(e,!0,-1)},t.sortLinesInsensitive=function(e){f(e,!1,1)},t.reverseSortLinesInsensitive=function(e){f(e,!1,-1)},t.nextBookmark=function(e){var t=e.state.sublimeBookmarks;if(t)for(;t.length;){var n=t.shift(),r=n.find();if(r)return t.push(n),e.setSelection(r.from,r.to)}},t.prevBookmark=function(e){var t=e.state.sublimeBookmarks;if(t)for(;t.length;){t.unshift(t.pop());var n=t[t.length-1].find();if(n)return e.setSelection(n.from,n.to);t.pop()}},t.toggleBookmark=function(e){for(var t=e.listSelections(),n=e.state.sublimeBookmarks||(e.state.sublimeBookmarks=[]),r=0;r<t.length;r++){for(var i=t[r].from(),o=t[r].to(),l=t[r].empty()?e.findMarksAt(i):e.findMarks(i,o),a=0;a<l.length;a++)if(l[a].sublimeBookmark){l[a].clear();for(var s=0;s<n.length;s++)n[s]==l[a]&&n.splice(s--,1);break}a==l.length&&n.push(e.markText(i,o,{sublimeBookmark:!0,clearWhenEmpty:!1}))}},t.clearBookmarks=function(e){var t=e.state.sublimeBookmarks;if(t)for(var n=0;n<t.length;n++)t[n].clear();t.length=0},t.selectBookmarks=function(e){var t=e.state.sublimeBookmarks,n=[];if(t)for(var r=0;r<t.length;r++){var i=t[r].find();i?n.push({anchor:i.from,head:i.to}):t.splice(r--,0)}n.length&&e.setSelections(n,0)},t.smartBackspace=function(t){if(t.somethingSelected())return e.Pass;t.operation((function(){for(var r=t.listSelections(),i=t.getOption("indentUnit"),o=r.length-1;o>=0;o--){var l=r[o].head,a=t.getRange({line:l.line,ch:0},l),s=e.countColumn(a,null,t.getOption("tabSize")),c=t.findPosH(l,-1,"char",!1);if(a&&!/\S/.test(a)&&s%i==0){var f=new n(l.line,e.findColumn(a,s-i,i));f.ch!=l.ch&&(c=f)}t.replaceRange("",c,l,"+delete")}}))},t.delLineRight=function(e){e.operation((function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange("",t[r].anchor,n(t[r].to().line),"+delete");e.scrollIntoView()}))},t.upcaseAtCursor=function(e){u(e,(function(e){return e.toUpperCase()}))},t.downcaseAtCursor=function(e){u(e,(function(e){return e.toLowerCase()}))},t.setSublimeMark=function(e){e.state.sublimeMark&&e.state.sublimeMark.clear(),e.state.sublimeMark=e.setBookmark(e.getCursor())},t.selectToSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find();t&&e.setSelection(e.getCursor(),t)},t.deleteToSublimeMark=function(t){var n=t.state.sublimeMark&&t.state.sublimeMark.find();if(n){var r=t.getCursor(),i=n;if(e.cmpPos(r,i)>0){var o=i;i=r,r=o}t.state.sublimeKilled=t.getRange(r,i),t.replaceRange("",r,i)}},t.swapWithSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find();t&&(e.state.sublimeMark.clear(),e.state.sublimeMark=e.setBookmark(e.getCursor()),e.setCursor(t))},t.sublimeYank=function(e){null!=e.state.sublimeKilled&&e.replaceSelection(e.state.sublimeKilled,null,"paste")},t.showInCenter=function(e){var t=e.cursorCoords(null,"local");e.scrollTo(null,(t.top+t.bottom)/2-e.getScrollInfo().clientHeight/2)},t.findUnder=function(e){d(e,!0)},t.findUnderPrevious=function(e){d(e,!1)},t.findAllUnder=function(e){var t=h(e);if(t){for(var n=e.getSearchCursor(t.query),r=[],i=-1;n.findNext();)r.push({anchor:n.from(),head:n.to()}),n.from().line<=t.from.line&&n.from().ch<=t.from.ch&&i++;e.setSelections(r,i)}};var m=e.keyMap;m.macSublime={"Cmd-Left":"goLineStartSmart","Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-Left":"goSubwordLeft","Ctrl-Right":"goSubwordRight","Ctrl-Alt-Up":"scrollLineUp","Ctrl-Alt-Down":"scrollLineDown","Cmd-L":"selectLine","Shift-Cmd-L":"splitSelectionByLine",Esc:"singleSelectionTop","Cmd-Enter":"insertLineAfter","Shift-Cmd-Enter":"insertLineBefore","Cmd-D":"selectNextOccurrence","Shift-Cmd-Space":"selectScope","Shift-Cmd-M":"selectBetweenBrackets","Cmd-M":"goToBracket","Cmd-Ctrl-Up":"swapLineUp","Cmd-Ctrl-Down":"swapLineDown","Cmd-/":"toggleCommentIndented","Cmd-J":"joinLines","Shift-Cmd-D":"duplicateLine",F5:"sortLines","Shift-F5":"reverseSortLines","Cmd-F5":"sortLinesInsensitive","Shift-Cmd-F5":"reverseSortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Cmd-F2":"toggleBookmark","Shift-Cmd-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Cmd-K Cmd-D":"skipAndSelectNextOccurrence","Cmd-K Cmd-K":"delLineRight","Cmd-K Cmd-U":"upcaseAtCursor","Cmd-K Cmd-L":"downcaseAtCursor","Cmd-K Cmd-Space":"setSublimeMark","Cmd-K Cmd-A":"selectToSublimeMark","Cmd-K Cmd-W":"deleteToSublimeMark","Cmd-K Cmd-X":"swapWithSublimeMark","Cmd-K Cmd-Y":"sublimeYank","Cmd-K Cmd-C":"showInCenter","Cmd-K Cmd-G":"clearBookmarks","Cmd-K Cmd-Backspace":"delLineLeft","Cmd-K Cmd-1":"foldAll","Cmd-K Cmd-0":"unfoldAll","Cmd-K Cmd-J":"unfoldAll","Ctrl-Shift-Up":"addCursorToPrevLine","Ctrl-Shift-Down":"addCursorToNextLine","Cmd-F3":"findUnder","Shift-Cmd-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Cmd-[":"fold","Shift-Cmd-]":"unfold","Cmd-I":"findIncremental","Shift-Cmd-I":"findIncrementalReverse","Cmd-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"macDefault"},e.normalizeKeyMap(m.macSublime),m.pcSublime={"Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-T":"transposeChars","Alt-Left":"goSubwordLeft","Alt-Right":"goSubwordRight","Ctrl-Up":"scrollLineUp","Ctrl-Down":"scrollLineDown","Ctrl-L":"selectLine","Shift-Ctrl-L":"splitSelectionByLine",Esc:"singleSelectionTop","Ctrl-Enter":"insertLineAfter","Shift-Ctrl-Enter":"insertLineBefore","Ctrl-D":"selectNextOccurrence","Shift-Ctrl-Space":"selectScope","Shift-Ctrl-M":"selectBetweenBrackets","Ctrl-M":"goToBracket","Shift-Ctrl-Up":"swapLineUp","Shift-Ctrl-Down":"swapLineDown","Ctrl-/":"toggleCommentIndented","Ctrl-J":"joinLines","Shift-Ctrl-D":"duplicateLine",F9:"sortLines","Shift-F9":"reverseSortLines","Ctrl-F9":"sortLinesInsensitive","Shift-Ctrl-F9":"reverseSortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Ctrl-F2":"toggleBookmark","Shift-Ctrl-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Ctrl-K Ctrl-D":"skipAndSelectNextOccurrence","Ctrl-K Ctrl-K":"delLineRight","Ctrl-K Ctrl-U":"upcaseAtCursor","Ctrl-K Ctrl-L":"downcaseAtCursor","Ctrl-K Ctrl-Space":"setSublimeMark","Ctrl-K Ctrl-A":"selectToSublimeMark","Ctrl-K Ctrl-W":"deleteToSublimeMark","Ctrl-K Ctrl-X":"swapWithSublimeMark","Ctrl-K Ctrl-Y":"sublimeYank","Ctrl-K Ctrl-C":"showInCenter","Ctrl-K Ctrl-G":"clearBookmarks","Ctrl-K Ctrl-Backspace":"delLineLeft","Ctrl-K Ctrl-1":"foldAll","Ctrl-K Ctrl-0":"unfoldAll","Ctrl-K Ctrl-J":"unfoldAll","Ctrl-Alt-Up":"addCursorToPrevLine","Ctrl-Alt-Down":"addCursorToNextLine","Ctrl-F3":"findUnder","Shift-Ctrl-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Ctrl-[":"fold","Shift-Ctrl-]":"unfold","Ctrl-I":"findIncremental","Shift-Ctrl-I":"findIncrementalReverse","Ctrl-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"pcDefault"},e.normalizeKeyMap(m.pcSublime);var g=m.default==m.macDefault;m.sublime=g?m.macSublime:m.pcSublime}(r.a.exports,i.a.exports,o.a.exports);var s=a.exports,c=Object.freeze(l({__proto__:null,[Symbol.toStringTag]:"Module",default:s},[a.exports]))}}]);