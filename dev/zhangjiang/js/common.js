var MSCOMMON = (function(){
    var init = function(){
        ms.getPara();
        ms.getUA();
    }
    var ms = {
        getPara:function(){
            var QueryString = function (){
                var query_string ={};
                var query = window.location.search.substring(1);
                var vars = query.split("&");
                for (var i = 0; i < vars.length; i++){
                    var pair = vars[i].split("=");
                    if (typeof query_string[pair[0]] === "undefined"){
                        query_string[pair[0]] = decodeURIComponent(pair[1]);
                    } else if (typeof query_string[pair[0]] === "string"){
                        var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                        query_string[pair[0]] = arr;
                    } else{
                        query_string[pair[0]].push(decodeURIComponent(pair[1]));
                    }
                }
                return query_string;
            }();

            if(window.location.search) {
                console.log(window.location.search.substr(1));
            }
        },
        getUA:function(){
            var html = $('html');
            var ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),
                browser, device;

            if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
                browser = "msie";
            }else {
                browser = ua[1].toLowerCase();
            }

            var isMobile = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                iPhone: function() {
                    return navigator.userAgent.match(/iPhone/i);
                },
                iPad: function() {
                    return navigator.userAgent.match(/iPad/i);
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i);
                },
                any: function() {
                    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
                }
            };

            if (isMobile.any()) {
                device = 'mobile';
            }else {
                device = 'desktop';
            }

            if (isMobile.iPhone()) {
                device = 'ios';
            }

            if (isMobile.Android()) {
                device = 'android';
            }

            html.addClass(browser +' '+device);
        }
    }
    return{
        setup:init
    }
})().setup();


!function(root){var setTimeoutFunc=setTimeout;function noop(){}function bind(fn,thisArg){return function(){fn.apply(thisArg,arguments)}}function Promise(fn){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof fn)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],doResolve(fn,this)}function handle(self,deferred){for(;3===self._state;)self=self._value;0!==self._state?(self._handled=!0,Promise._immediateFn((function(){var cb=1===self._state?deferred.onFulfilled:deferred.onRejected;if(null!==cb){var ret;try{ret=cb(self._value)}catch(e){return void reject(deferred.promise,e)}resolve(deferred.promise,ret)}else(1===self._state?resolve:reject)(deferred.promise,self._value)}))):self._deferreds.push(deferred)}function resolve(self,newValue){try{if(newValue===self)throw new TypeError("A promise cannot be resolved with itself.");if(newValue&&("object"==typeof newValue||"function"==typeof newValue)){var then=newValue.then;if(newValue instanceof Promise)return self._state=3,self._value=newValue,void finale(self);if("function"==typeof then)return void doResolve(bind(then,newValue),self)}self._state=1,self._value=newValue,finale(self)}catch(e){reject(self,e)}}function reject(self,newValue){self._state=2,self._value=newValue,finale(self)}function finale(self){2===self._state&&0===self._deferreds.length&&Promise._immediateFn((function(){self._handled||Promise._unhandledRejectionFn(self._value)}));for(var i=0,len=self._deferreds.length;i<len;i++)handle(self,self._deferreds[i]);self._deferreds=null}function Handler(onFulfilled,onRejected,promise){this.onFulfilled="function"==typeof onFulfilled?onFulfilled:null,this.onRejected="function"==typeof onRejected?onRejected:null,this.promise=promise}function doResolve(fn,self){var done=!1;try{fn((function(value){done||(done=!0,resolve(self,value))}),(function(reason){done||(done=!0,reject(self,reason))}))}catch(ex){if(done)return;done=!0,reject(self,ex)}}Promise.prototype.catch=function(onRejected){return this.then(null,onRejected)},Promise.prototype.then=function(onFulfilled,onRejected){var prom=new this.constructor(noop);return handle(this,new Handler(onFulfilled,onRejected,prom)),prom},Promise.all=function(arr){var args=Array.prototype.slice.call(arr);return new Promise((function(resolve,reject){if(0===args.length)return resolve([]);var remaining=args.length;function res(i,val){try{if(val&&("object"==typeof val||"function"==typeof val)){var then=val.then;if("function"==typeof then)return void then.call(val,(function(val){res(i,val)}),reject)}args[i]=val,0==--remaining&&resolve(args)}catch(ex){reject(ex)}}for(var i=0;i<args.length;i++)res(i,args[i])}))},Promise.resolve=function(value){return value&&"object"==typeof value&&value.constructor===Promise?value:new Promise((function(resolve){resolve(value)}))},Promise.reject=function(value){return new Promise((function(resolve,reject){reject(value)}))},Promise.race=function(values){return new Promise((function(resolve,reject){for(var i=0,len=values.length;i<len;i++)values[i].then(resolve,reject)}))},Promise._immediateFn="function"==typeof setImmediate&&function(fn){setImmediate(fn)}||function(fn){setTimeoutFunc(fn,0)},Promise._unhandledRejectionFn=function _unhandledRejectionFn(err){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",err)},Promise._setImmediateFn=function _setImmediateFn(fn){Promise._immediateFn=fn},Promise._setUnhandledRejectionFn=function _setUnhandledRejectionFn(fn){Promise._unhandledRejectionFn=fn},"undefined"!=typeof module&&module.exports?module.exports=Promise:root.Promise||(root.Promise=Promise)}(this);