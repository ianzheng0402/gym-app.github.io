/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{273:function(e,t,n){!function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var o,p=new Promise((function(c,l){n(o=e[t].apply(e,r)).then(c,l)}));return p.request=o,p}function o(e,t,n){var p=r(e,t,n);return p.then((function(e){if(e)return new v(e,p.request)}))}function c(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function l(e,t,n,o){o.forEach((function(o){o in n.prototype&&(e.prototype[o]=function(){return r(this[t],o,arguments)})}))}function f(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function d(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return o(this[t],r,arguments)})}))}function h(e){this._index=e}function v(cursor,e){this._cursor=cursor,this._request=e}function _(e){this._store=e}function w(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function y(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new w(n)}function m(e){this._db=e}c(h,"_index",["name","keyPath","multiEntry","unique"]),l(h,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),d(h,"_index",IDBIndex,["openCursor","openKeyCursor"]),c(v,"_cursor",["direction","key","primaryKey","value"]),l(v,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(v.prototype[e]=function(){var cursor=this,t=arguments;return Promise.resolve().then((function(){return cursor._cursor[e].apply(cursor._cursor,t),n(cursor._request).then((function(e){if(e)return new v(e,cursor._request)}))}))})})),_.prototype.createIndex=function(){return new h(this._store.createIndex.apply(this._store,arguments))},_.prototype.index=function(){return new h(this._store.index.apply(this._store,arguments))},c(_,"_store",["name","keyPath","indexNames","autoIncrement"]),l(_,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),d(_,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),f(_,"_store",IDBObjectStore,["deleteIndex"]),w.prototype.objectStore=function(){return new _(this._tx.objectStore.apply(this._tx,arguments))},c(w,"_tx",["objectStoreNames","mode"]),f(w,"_tx",IDBTransaction,["abort"]),y.prototype.createObjectStore=function(){return new _(this._db.createObjectStore.apply(this._db,arguments))},c(y,"_db",["name","version","objectStoreNames"]),f(y,"_db",IDBDatabase,["deleteObjectStore","close"]),m.prototype.transaction=function(){return new w(this._db.transaction.apply(this._db,arguments))},c(m,"_db",["name","version","objectStoreNames"]),f(m,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[_,h].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],o=this._store||this._index,c=o[e].apply(o,n.slice(0,-1));c.onsuccess=function(){r(c.result)}})}))})),[h,_].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(o){n.iterateCursor(e,(function(cursor){cursor?(r.push(cursor.value),void 0===t||r.length!=t?cursor.continue():o(r)):o(r)}))}))})})),e.openDb=function(e,t,n){var p=r(indexedDB,"open",[e,t]),o=p.request;return o&&(o.onupgradeneeded=function(e){n&&n(new y(o.result,e.oldVersion,o.transaction))}),p.then((function(e){return new m(e)}))},e.deleteDb=function(e){return r(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})}(t)},357:function(e,t,n){"use strict";n.r(t);var r,o=n(137),c=n.n(o),l=n(139),f=n(67),d=n(86),h=n(273),v=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),_=new d.ErrorFactory("installations","Installations",v);function w(e){return e instanceof d.FirebaseError&&e.code.includes("request-failed")}function y(e){return"https://firebaseinstallations.googleapis.com/v1/projects/"+e.projectId+"/installations"}function m(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function j(e,t){return Object(f.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(f.__generator)(this,(function(o){switch(o.label){case 0:return[4,t.json()];case 1:return n=o.sent(),r=n.error,[2,_.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function O(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function k(e,t){var n=t.refreshToken,r=O(e);return r.append("Authorization",function(e){return"FIS_v2 "+e}(n)),r}function S(e){return Object(f.__awaiter)(this,void 0,void 0,(function(){var t;return Object(f.__generator)(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return(t=n.sent()).status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function I(e,t){var n=t.fid;return Object(f.__awaiter)(this,void 0,void 0,(function(){var t,r,body,o,c,l;return Object(f.__generator)(this,(function(f){switch(f.label){case 0:return t=y(e),r=O(e),body={fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.4.4"},o={method:"POST",headers:r,body:JSON.stringify(body)},[4,S((function(){return fetch(t,o)}))];case 1:return(c=f.sent()).ok?[4,c.json()]:[3,3];case 2:return l=f.sent(),[2,{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:m(l.authToken)}];case 3:return[4,j("Create Installation",c)];case 4:throw f.sent()}}))}))}function C(e){return new Promise((function(t){setTimeout(t,e)}))}var T=/^[cdef][\w-]{21}$/;function D(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return(t=e,btoa(String.fromCharCode.apply(String,Object(f.__spread)(t))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}(e);return T.test(t)?t:""}catch(e){return""}}function P(e){return e.appName+"!"+e.appId}var K=new Map;function E(e,t){var n=P(e);x(n,t),function(e,t){var n=N();n&&n.postMessage({key:e,fid:t});A()}(n,t)}function x(e,t){var n,r,o=K.get(e);if(o)try{for(var c=Object(f.__values)(o),l=c.next();!l.done;l=c.next()){(0,l.value)(t)}}catch(e){n={error:e}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}}var M=null;function N(){return!M&&"BroadcastChannel"in self&&((M=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){x(e.data.key,e.data.fid)}),M}function A(){0===K.size&&M&&(M.close(),M=null)}var B,R,L="firebase-installations-store",V=null;function W(){return V||(V=Object(h.openDb)("firebase-installations-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(L)}}))),V}function F(e,t){return Object(f.__awaiter)(this,void 0,void 0,(function(){var n,r,o,c,l;return Object(f.__generator)(this,(function(f){switch(f.label){case 0:return n=P(e),[4,W()];case 1:return r=f.sent(),o=r.transaction(L,"readwrite"),[4,(c=o.objectStore(L)).get(n)];case 2:return l=f.sent(),[4,c.put(t,n)];case 3:return f.sent(),[4,o.complete];case 4:return f.sent(),l&&l.fid===t.fid||E(e,t.fid),[2,t]}}))}))}function H(e){return Object(f.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(f.__generator)(this,(function(o){switch(o.label){case 0:return t=P(e),[4,W()];case 1:return n=o.sent(),[4,(r=n.transaction(L,"readwrite")).objectStore(L).delete(t)];case 2:return o.sent(),[4,r.complete];case 3:return o.sent(),[2]}}))}))}function U(e,t){return Object(f.__awaiter)(this,void 0,void 0,(function(){var n,r,o,c,l,d;return Object(f.__generator)(this,(function(f){switch(f.label){case 0:return n=P(e),[4,W()];case 1:return r=f.sent(),o=r.transaction(L,"readwrite"),[4,(c=o.objectStore(L)).get(n)];case 2:return l=f.sent(),void 0!==(d=t(l))?[3,4]:[4,c.delete(n)];case 3:return f.sent(),[3,6];case 4:return[4,c.put(d,n)];case 5:f.sent(),f.label=6;case 6:return[4,o.complete];case 7:return f.sent(),!d||l&&l.fid===d.fid||E(e,d.fid),[2,d]}}))}))}function $(e){return Object(f.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(f.__generator)(this,(function(o){switch(o.label){case 0:return[4,U(e,(function(n){var r=function(e){return z(e||{fid:D(),registrationStatus:0})}(n),o=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){var n=Promise.reject(_.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},o=function(e,t){return Object(f.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(f.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,7]),[4,I(e,t)];case 1:return n=o.sent(),[2,F(e,n)];case 2:return w(r=o.sent())&&409===r.serverCode?[4,H(e)]:[3,4];case 3:return o.sent(),[3,6];case 4:return[4,F(e,{fid:t.fid,registrationStatus:0})];case 5:o.sent(),o.label=6;case 6:throw r;case 7:return[2]}}))}))}(e,r);return{installationEntry:r,registrationPromise:o}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:G(e)}:{installationEntry:t}}(e,r);return t=o.registrationPromise,o.installationEntry}))];case 1:return""!==(n=o.sent()).fid?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=o.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function G(e){return Object(f.__awaiter)(this,void 0,void 0,(function(){var t,n,r,o;return Object(f.__generator)(this,(function(c){switch(c.label){case 0:return[4,J(e)];case 1:t=c.sent(),c.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,C(100)];case 3:return c.sent(),[4,J(e)];case 4:return t=c.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,$(e)];case 6:return n=c.sent(),r=n.installationEntry,(o=n.registrationPromise)?[2,o]:[2,r];case 7:return[2,t]}}))}))}function J(e){return U(e,(function(e){if(!e)throw _.create("installation-not-found");return z(e)}))}function z(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function Q(e,t){var n=e.appConfig,r=e.platformLoggerProvider;return Object(f.__awaiter)(this,void 0,void 0,(function(){var e,o,c,body,l,d,h;return Object(f.__generator)(this,(function(f){switch(f.label){case 0:return e=function(e,t){var n=t.fid;return y(e)+"/"+n+"/authTokens:generate"}(n,t),o=k(n,t),(c=r.getImmediate({optional:!0}))&&o.append("x-firebase-client",c.getPlatformInfoString()),body={installation:{sdkVersion:"w:0.4.4"}},l={method:"POST",headers:o,body:JSON.stringify(body)},[4,S((function(){return fetch(e,l)}))];case 1:return(d=f.sent()).ok?[4,d.json()]:[3,3];case 2:return h=f.sent(),[2,m(h)];case 3:return[4,j("Generate Auth Token",d)];case 4:throw f.sent()}}))}))}function X(e,t){return void 0===t&&(t=!1),Object(f.__awaiter)(this,void 0,void 0,(function(){var n,r,o;return Object(f.__generator)(this,(function(c){switch(c.label){case 0:return[4,U(e.appConfig,(function(r){if(!Z(r))throw _.create("not-registered");var o=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(o))return r;if(1===o.requestStatus)return n=function(e,t){return Object(f.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(f.__generator)(this,(function(o){switch(o.label){case 0:return[4,Y(e.appConfig)];case 1:n=o.sent(),o.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,C(100)];case 3:return o.sent(),[4,Y(e.appConfig)];case 4:return n=o.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,X(e,t)]:[2,r]}}))}))}(e,t),r;if(!navigator.onLine)throw _.create("app-offline");var c=function(e){var t={requestStatus:1,requestTime:Date.now()};return Object(f.__assign)(Object(f.__assign)({},e),{authToken:t})}(r);return n=function(e,t){return Object(f.__awaiter)(this,void 0,void 0,(function(){var n,r,o;return Object(f.__generator)(this,(function(c){switch(c.label){case 0:return c.trys.push([0,3,,8]),[4,Q(e,t)];case 1:return n=c.sent(),o=Object(f.__assign)(Object(f.__assign)({},t),{authToken:n}),[4,F(e.appConfig,o)];case 2:return c.sent(),[2,n];case 3:return!w(r=c.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,H(e.appConfig)];case 4:return c.sent(),[3,7];case 5:return o=Object(f.__assign)(Object(f.__assign)({},t),{authToken:{requestStatus:0}}),[4,F(e.appConfig,o)];case 6:c.sent(),c.label=7;case 7:throw r;case 8:return[2]}}))}))}(e,c),c}))];case 1:return r=c.sent(),n?[4,n]:[3,3];case 2:return o=c.sent(),[3,4];case 3:o=r.authToken,c.label=4;case 4:return[2,o]}}))}))}function Y(e){return U(e,(function(e){if(!Z(e))throw _.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+1e4<Date.now()?Object(f.__assign)(Object(f.__assign)({},e),{authToken:{requestStatus:0}}):e}))}function Z(e){return void 0!==e&&2===e.registrationStatus}function ee(e){return Object(f.__awaiter)(this,void 0,void 0,(function(){var t;return Object(f.__generator)(this,(function(n){switch(n.label){case 0:return[4,$(e)];case 1:return(t=n.sent().registrationPromise)?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}function te(e,t){return Object(f.__awaiter)(this,void 0,void 0,(function(){var n,r,o,c;return Object(f.__generator)(this,(function(l){switch(l.label){case 0:return n=function(e,t){var n=t.fid;return y(e)+"/"+n}(e,t),r=k(e,t),o={method:"DELETE",headers:r},[4,S((function(){return fetch(n,o)}))];case 1:return(c=l.sent()).ok?[3,3]:[4,j("Delete Installation",c)];case 2:throw l.sent();case 3:return[2]}}))}))}function ne(e,t){var n=e.appConfig;return function(e,t){N();var n=P(e),r=K.get(n);r||(r=new Set,K.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=P(e),r=K.get(n);r&&(r.delete(t),0===r.size&&K.delete(n),A())}(n,t)}}function re(e){return _.create("missing-app-config-values",{valueName:e})}(B=c.a).INTERNAL.registerComponent(new l.Component("installations",(function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw re("App Configuration");if(!e.name)throw re("App Name");try{for(var r=Object(f.__values)(["projectId","apiKey","appId"]),o=r.next();!o.done;o=r.next()){var c=o.value;if(!e.options[c])throw re(c)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){return function(e){return Object(f.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(f.__generator)(this,(function(o){switch(o.label){case 0:return[4,$(e.appConfig)];case 1:return t=o.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):X(e).catch(console.error),[2,n.fid]}}))}))}(n)},getToken:function(e){return function(e,t){return void 0===t&&(t=!1),Object(f.__awaiter)(this,void 0,void 0,(function(){return Object(f.__generator)(this,(function(n){switch(n.label){case 0:return[4,ee(e.appConfig)];case 1:return n.sent(),[4,X(e,t)];case 2:return[2,n.sent().token]}}))}))}(n,e)},delete:function(){return function(e){return Object(f.__awaiter)(this,void 0,void 0,(function(){var t,n;return Object(f.__generator)(this,(function(r){switch(r.label){case 0:return[4,U(t=e.appConfig,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw _.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw _.create("app-offline");case 3:return[4,te(t,n)];case 4:return r.sent(),[4,H(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(n)},onIdChange:function(e){return ne(n,e)}}}),"PUBLIC")),B.registerVersion("@firebase/installations","0.4.4");var ie=((R={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',R["only-available-in-window"]="This method is available in a Window context.",R["only-available-in-sw"]="This method is available in a service worker context.",R["permission-default"]="The notification permission was not granted and dismissed instead.",R["permission-blocked"]="The notification permission was not granted and blocked instead.",R["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",R["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",R["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",R["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",R["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",R["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",R["token-update-no-token"]="FCM returned no token when updating the user to push.",R["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",R["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",R["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",R["invalid-vapid-key"]="The public VAPID key must be a string.",R["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",R),oe=new d.ErrorFactory("messaging","Messaging",ie);function ae(e){return oe.create("missing-app-config-values",{valueName:e})}function se(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,Object(f.__spread)(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ce(e){return Object(f.__awaiter)(this,void 0,void 0,(function(){var t,n,r=this;return Object(f.__generator)(this,(function(o){switch(o.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=o.sent(),!t.map((function(e){return e.name})).includes("fcm_token_details_db"))return[2,null];o.label=2;case 2:return n=null,[4,Object(h.openDb)("fcm_token_details_db",5,(function(t){return Object(f.__awaiter)(r,void 0,void 0,(function(){var r,o,c,l;return Object(f.__generator)(this,(function(f){switch(f.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains("fcm_token_object_Store")?[4,(r=t.transaction.objectStore("fcm_token_object_Store")).index("fcmSenderId").get(e)]:[2];case 1:return o=f.sent(),[4,r.clear()];case 2:if(f.sent(),!o)return[2];if(2===t.oldVersion){if(!(c=o).auth||!c.p256dh||!c.endpoint)return[2];n={token:c.fcmToken,createTime:null!==(l=c.createTime)&&void 0!==l?l:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:"string"==typeof c.vapidKey?c.vapidKey:se(c.vapidKey)}}}else 3===t.oldVersion?n={token:(c=o).fcmToken,createTime:c.createTime,subscriptionOptions:{auth:se(c.auth),p256dh:se(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:se(c.vapidKey)}}:4===t.oldVersion&&(n={token:(c=o).fcmToken,createTime:c.createTime,subscriptionOptions:{auth:se(c.auth),p256dh:se(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:se(c.vapidKey)}});return[2]}}))}))}))];case 3:return o.sent().close(),[4,Object(h.deleteDb)("fcm_token_details_db")];case 4:return o.sent(),[4,Object(h.deleteDb)("fcm_vapid_details_db")];case 5:return o.sent(),[4,Object(h.deleteDb)("undefined")];case 6:return o.sent(),[2,ue(n)?n:null]}}))}))}function ue(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}var le=null;function fe(){return le||(le=Object(h.openDb)("firebase-messaging-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore("firebase-messaging-store")}}))),le}function de(e){return Object(f.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(f.__generator)(this,(function(o){switch(o.label){case 0:return t=be(e),[4,fe()];case 1:return[4,o.sent().transaction("firebase-messaging-store").objectStore("firebase-messaging-store").get(t)];case 2:return(n=o.sent())?[2,n]:[3,3];case 3:return[4,ce(e.appConfig.senderId)];case 4:return(r=o.sent())?[4,pe(e,r)]:[3,6];case 5:return o.sent(),[2,r];case 6:return[2]}}))}))}function pe(e,t){return Object(f.__awaiter)(this,void 0,void 0,(function(){var n,r,o;return Object(f.__generator)(this,(function(c){switch(c.label){case 0:return n=be(e),[4,fe()];case 1:return r=c.sent(),[4,(o=r.transaction("firebase-messaging-store","readwrite")).objectStore("firebase-messaging-store").put(t,n)];case 2:return c.sent(),[4,o.complete];case 3:return c.sent(),[2,t]}}))}))}function he(e){return Object(f.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(f.__generator)(this,(function(o){switch(o.label){case 0:return t=be(e),[4,fe()];case 1:return n=o.sent(),[4,(r=n.transaction("firebase-messaging-store","readwrite")).objectStore("firebase-messaging-store").delete(t)];case 2:return o.sent(),[4,r.complete];case 3:return o.sent(),[2]}}))}))}function be(e){return e.appConfig.appId}var ge="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4";function ve(e,t){return Object(f.__awaiter)(this,void 0,void 0,(function(){var n,body,r,o,c,l;return Object(f.__generator)(this,(function(f){switch(f.label){case 0:return[4,me(e)];case 1:n=f.sent(),body=je(t),r={method:"POST",headers:n,body:JSON.stringify(body)},f.label=2;case 2:return f.trys.push([2,5,,6]),[4,fetch(ye(e.appConfig),r)];case 3:return[4,f.sent().json()];case 4:return o=f.sent(),[3,6];case 5:throw c=f.sent(),oe.create("token-subscribe-failed",{errorInfo:c});case 6:if(o.error)throw l=o.error.message,oe.create("token-subscribe-failed",{errorInfo:l});if(!o.token)throw oe.create("token-subscribe-no-token");return[2,o.token]}}))}))}function _e(e,t){return Object(f.__awaiter)(this,void 0,void 0,(function(){var n,body,r,o,c,l;return Object(f.__generator)(this,(function(f){switch(f.label){case 0:return[4,me(e)];case 1:n=f.sent(),body=je(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(body)},f.label=2;case 2:return f.trys.push([2,5,,6]),[4,fetch(ye(e.appConfig)+"/"+t.token,r)];case 3:return[4,f.sent().json()];case 4:return o=f.sent(),[3,6];case 5:throw c=f.sent(),oe.create("token-update-failed",{errorInfo:c});case 6:if(o.error)throw l=o.error.message,oe.create("token-update-failed",{errorInfo:l});if(!o.token)throw oe.create("token-update-no-token");return[2,o.token]}}))}))}function we(e,t){return Object(f.__awaiter)(this,void 0,void 0,(function(){var n,r,o,c,l;return Object(f.__generator)(this,(function(f){switch(f.label){case 0:return[4,me(e)];case 1:n=f.sent(),r={method:"DELETE",headers:n},f.label=2;case 2:return f.trys.push([2,5,,6]),[4,fetch(ye(e.appConfig)+"/"+t,r)];case 3:return[4,f.sent().json()];case 4:if((o=f.sent()).error)throw c=o.error.message,oe.create("token-unsubscribe-failed",{errorInfo:c});return[3,6];case 5:throw l=f.sent(),oe.create("token-unsubscribe-failed",{errorInfo:l});case 6:return[2]}}))}))}function ye(e){return"https://fcmregistrations.googleapis.com/v1/projects/"+e.projectId+"/registrations"}function me(e){var t=e.appConfig,n=e.installations;return Object(f.__awaiter)(this,void 0,void 0,(function(){var e;return Object(f.__generator)(this,(function(r){switch(r.label){case 0:return[4,n.getToken()];case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function je(e){var t=e.p256dh,n=e.auth,r=e.endpoint,o=e.vapidKey,body={web:{endpoint:r,auth:n,p256dh:t}};return o!==ge&&(body.web.applicationPubKey=o),body}var Oe;function ke(e,t,n){return Object(f.__awaiter)(this,void 0,void 0,(function(){var r,o,c,l;return Object(f.__generator)(this,(function(f){switch(f.label){case 0:if("granted"!==Notification.permission)throw oe.create("permission-blocked");return[4,Te(t,n)];case 1:return r=f.sent(),[4,de(e)];case 2:return o=f.sent(),c={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:se(r.getKey("auth")),p256dh:se(r.getKey("p256dh"))},o?[3,3]:[2,Ce(e,c)];case 3:if(d=o.subscriptionOptions,v=(h=c).vapidKey===d.vapidKey,_=h.endpoint===d.endpoint,w=h.auth===d.auth,y=h.p256dh===d.p256dh,v&&_&&w&&y)return[3,8];f.label=4;case 4:return f.trys.push([4,6,,7]),[4,we(e,o.token)];case 5:return f.sent(),[3,7];case 6:return l=f.sent(),console.warn(l),[3,7];case 7:return[2,Ce(e,c)];case 8:return Date.now()>=o.createTime+6048e5?[2,Ie({token:o.token,createTime:Date.now(),subscriptionOptions:c},e,t)]:[2,o.token];case 9:return[2]}var d,h,v,_,w,y}))}))}function Se(e,t){return Object(f.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(f.__generator)(this,(function(o){switch(o.label){case 0:return[4,de(e)];case 1:return(n=o.sent())?[4,we(e,n.token)]:[3,4];case 2:return o.sent(),[4,he(e)];case 3:o.sent(),o.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return(r=o.sent())?[2,r.unsubscribe()]:[2,!0]}}))}))}function Ie(e,t,n){return Object(f.__awaiter)(this,void 0,void 0,(function(){var r,o,c;return Object(f.__generator)(this,(function(l){switch(l.label){case 0:return l.trys.push([0,3,,5]),[4,_e(t,e)];case 1:return r=l.sent(),o=Object(f.__assign)({token:r,createTime:Date.now()},e),[4,pe(t,o)];case 2:return l.sent(),[2,r];case 3:return c=l.sent(),[4,Se(t,n)];case 4:throw l.sent(),c;case 5:return[2]}}))}))}function Ce(e,t){return Object(f.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(f.__generator)(this,(function(o){switch(o.label){case 0:return[4,ve(e,t)];case 1:return n=o.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,pe(e,r)];case 2:return o.sent(),[2,r.token]}}))}))}function Te(e,t){return Object(f.__awaiter)(this,void 0,void 0,(function(){var n;return Object(f.__generator)(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return(n=r.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})]}}))}))}function De(data){return"object"==typeof data&&!!data&&"google.c.a.c_id"in data}!function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(Oe||(Oe={}));var Pe=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),e.prototype.getToken=function(){return Object(f.__awaiter)(this,void 0,void 0,(function(){var e;return Object(f.__generator)(this,(function(t){switch(t.label){case 0:return this.vapidKey||(this.vapidKey=ge),[4,this.getServiceWorkerRegistration()];case 1:return e=t.sent(),"default"!==Notification.permission?[3,3]:[4,Notification.requestPermission()];case 2:t.sent(),t.label=3;case 3:if("granted"!==Notification.permission)throw oe.create("permission-blocked");return[2,ke(this.firebaseDependencies,e,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return Object(f.__awaiter)(this,void 0,void 0,(function(){var e;return Object(f.__generator)(this,(function(t){switch(t.label){case 0:return[4,this.getServiceWorkerRegistration()];case 1:return e=t.sent(),[2,Se(this.firebaseDependencies,e)]}}))}))},e.prototype.requestPermission=function(){return Object(f.__awaiter)(this,void 0,void 0,(function(){var e;return Object(f.__generator)(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw"denied"===e?oe.create("permission-blocked"):oe.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw oe.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw oe.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw oe.create("invalid-sw-registration");if(this.swRegistration)throw oe.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback="function"==typeof e?e:e.next,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw oe.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.getServiceWorkerRegistration=function(){return Object(f.__awaiter)(this,void 0,void 0,(function(){var e,t;return Object(f.__generator)(this,(function(n){switch(n.label){case 0:if(this.swRegistration)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 2:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,4];case 3:throw t=n.sent(),oe.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 4:return[2,this.swRegistration]}}))}))},e.prototype.messageEventListener=function(e){var t;return Object(f.__awaiter)(this,void 0,void 0,(function(){var n,r,o,data;return Object(f.__generator)(this,(function(c){switch(c.label){case 0:return(null===(t=e.data)||void 0===t?void 0:t.firebaseMessaging)?(n=e.data.firebaseMessaging,r=n.type,o=n.payload,this.onMessageCallback&&r===Oe.PUSH_RECEIVED&&this.onMessageCallback(o),De(data=o.data)&&"1"===data["google.c.a.e"]?[4,this.logEvent(r,data)]:[3,2]):[2];case 1:c.sent(),c.label=2;case 2:return[2]}}))}))},e.prototype.logEvent=function(e,data){return Object(f.__awaiter)(this,void 0,void 0,(function(){var t;return Object(f.__generator)(this,(function(n){switch(n.label){case 0:return t=function(e){switch(e){case Oe.NOTIFICATION_CLICKED:return"notification_open";case Oe.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return n.sent().logEvent(t,{message_id:data["google.c.a.c_id"],message_name:data["google.c.a.c_l"],message_time:data["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();var Ke=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!0,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw oe.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.getToken=function(){var e,t;return Object(f.__awaiter)(this,void 0,void 0,(function(){var n;return Object(f.__generator)(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,de(this.firebaseDependencies)];case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null==n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:ge,r.label=2;case 2:return[2,ke(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return Se(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw oe.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw oe.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw oe.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw oe.create("only-available-in-window")},e.prototype.onMessage=function(){throw oe.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw oe.create("only-available-in-window")},e.prototype.onPush=function(e){return Object(f.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(f.__generator)(this,(function(o){switch(o.label){case 0:return(t=function(e){var data=e.data;if(!data)return null;try{return data.json()}catch(e){return null}}(e))?[4,Me()]:[2];case 1:return function(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}(n=o.sent())?[2,xe(n,t)]:(r=function(e){var t;if(!e||"object"!=typeof e.notification)return;var n=Object(f.__assign)({},e.notification);return n.data=Object(f.__assign)(Object(f.__assign)({},e.notification.data),((t={}).FCM_MSG=e,t)),n}(t))?[4,Ae(r)]:[3,3];case 2:return o.sent(),[3,5];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:o.sent(),o.label=5;case 5:return[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return Object(f.__awaiter)(this,void 0,void 0,(function(){var r;return Object(f.__generator)(this,(function(o){switch(o.label){case 0:return e.newSubscription?[3,2]:[4,Se(this.firebaseDependencies,self.registration)];case 1:return o.sent(),[2];case 2:return[4,de(this.firebaseDependencies)];case 3:return r=o.sent(),[4,Se(this.firebaseDependencies,self.registration)];case 4:return o.sent(),[4,ke(this.firebaseDependencies,self.registration,null!==(n=null===(t=null==r?void 0:r.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:ge)];case 5:return o.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return Object(f.__awaiter)(this,void 0,void 0,(function(){var r,link,o,c;return Object(f.__generator)(this,(function(l){switch(l.label){case 0:return(r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG)?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(link=function(e){var t,n,r,link=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;if(link)return link;return De(e.data)?self.location.origin:null}(r))?[4,Ee(link)]:[2]):[2];case 1:return(o=l.sent())?[3,4]:[4,self.clients.openWindow(link)];case 2:return o=l.sent(),[4,(f=3e3,new Promise((function(e){setTimeout(e,f)})))];case 3:return l.sent(),[3,6];case 4:return[4,o.focus()];case 5:o=l.sent(),l.label=6;case 6:return o?(c=Ne(Oe.NOTIFICATION_CLICKED,r),[2,o.postMessage(c)]):[2]}var f}))}))},e}();function Ee(e){return Object(f.__awaiter)(this,void 0,void 0,(function(){var t,n,r,o,c,l,d;return Object(f.__generator)(this,(function(h){switch(h.label){case 0:return t=new URL(e,self.location.href).href,[4,Me()];case 1:n=h.sent();try{for(r=Object(f.__values)(n),o=r.next();!o.done;o=r.next())if(c=o.value,new URL(c.url,self.location.href).href===t)return[2,c]}catch(e){l={error:e}}finally{try{o&&!o.done&&(d=r.return)&&d.call(r)}finally{if(l)throw l.error}}return[2,null]}}))}))}function xe(e,t){var n,r,o=Ne(Oe.PUSH_RECEIVED,t);try{for(var c=Object(f.__values)(e),l=c.next();!l.done;l=c.next()){l.value.postMessage(o)}}catch(e){n={error:e}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}}function Me(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Ne(e,t){return{firebaseMessaging:{type:e,payload:t}}}function Ae(details){var e,title=null!==(e=details.title)&&void 0!==e?e:"",t=details.actions,n=Notification.maxActions;return t&&n&&t.length>n&&console.warn("This browser only supports "+n+" actions. The remaining actions will not be displayed."),self.registration.showNotification(title,details)}var qe={isSupported:Be};function Be(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}c.a.INTERNAL.registerComponent(new l.Component("messaging",(function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:function(e){var t,n;if(!e||!e.options)throw ae("App Configuration Object");if(!e.name)throw ae("App Name");var r=e.options;try{for(var o=Object(f.__values)(["projectId","apiKey","appId","messagingSenderId"]),c=o.next();!c.done;c=o.next()){var l=c.value;if(!r[l])throw ae(l)}}catch(e){t={error:e}}finally{try{c&&!c.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!Be())throw oe.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new Ke(n):new Pe(n)}),"PUBLIC").setServiceProps(qe))}}]);