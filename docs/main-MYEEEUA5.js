var Ly=Object.defineProperty,jy=Object.defineProperties;var Vy=Object.getOwnPropertyDescriptors;var nf=Object.getOwnPropertySymbols;var Jy=Object.prototype.hasOwnProperty,Hy=Object.prototype.propertyIsEnumerable;var of=(e,t,n)=>t in e?Ly(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||={})Jy.call(t,n)&&of(e,n,t[n]);if(nf)for(var n of nf(t))Hy.call(t,n)&&of(e,n,t[n]);return e},F=(e,t)=>jy(e,Vy(t));var Wo=(e,t,n)=>new Promise((o,r)=>{var i=c=>{try{a(n.next(c))}catch(l){r(l)}},s=c=>{try{a(n.throw(c))}catch(l){r(l)}},a=c=>c.done?o(c.value):Promise.resolve(c.value).then(i,s);a((n=n.apply(e,t)).next())});var uc;function Ci(){return uc}function ft(e){let t=uc;return uc=e,t}var rf=Symbol("NotFound");function Gn(e){return e===rf||e?.name==="\u0275NotFound"}var ge=null,wi=!1,dc=1,By=null,ve=Symbol("SIGNAL");function N(e){let t=ge;return ge=e,t}function Mi(){return ge}var qn={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Yn(e){if(wi)throw new Error("");if(ge===null)return;ge.consumerOnSignalRead(e);let t=ge.producersTail;if(t!==void 0&&t.producer===e)return;let n,o=ge.recomputing;if(o&&(n=t!==void 0?t.nextProducer:ge.producers,n!==void 0&&n.producer===e)){ge.producersTail=n,n.lastReadVersion=e.version;return}let r=e.consumersTail;if(r!==void 0&&r.consumer===ge&&(!o||Wy(r,ge)))return;let i=Qn(ge),s={producer:e,consumer:ge,nextProducer:n,prevConsumer:r,lastReadVersion:e.version,nextConsumer:void 0};ge.producersTail=s,t!==void 0?t.nextProducer=s:ge.producers=s,i&&lf(e,s)}function sf(){dc++}function Ii(e){if(!(Qn(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===dc)){if(!e.producerMustRecompute(e)&&!Go(e)){Di(e);return}e.producerRecomputeValue(e),Di(e)}}function fc(e){if(e.consumers===void 0)return;let t=wi;wi=!0;try{for(let n=e.consumers;n!==void 0;n=n.nextConsumer){let o=n.consumer;o.dirty||Uy(o)}}finally{wi=t}}function pc(){return ge?.consumerAllowSignalWrites!==!1}function Uy(e){e.dirty=!0,fc(e),e.consumerMarkedDirty?.(e)}function Di(e){e.dirty=!1,e.lastCleanEpoch=dc}function Kn(e){return e&&af(e),N(e)}function af(e){e.producersTail=void 0,e.recomputing=!0}function zo(e,t){N(t),e&&cf(e)}function cf(e){e.recomputing=!1;let t=e.producersTail,n=t!==void 0?t.nextProducer:e.producers;if(n!==void 0){if(Qn(e))do n=hc(n);while(n!==void 0);t!==void 0?t.nextProducer=void 0:e.producers=void 0}}function Go(e){for(let t=e.producers;t!==void 0;t=t.nextProducer){let n=t.producer,o=t.lastReadVersion;if(o!==n.version||(Ii(n),o!==n.version))return!0}return!1}function qo(e){if(Qn(e)){let t=e.producers;for(;t!==void 0;)t=hc(t)}e.producers=void 0,e.producersTail=void 0,e.consumers=void 0,e.consumersTail=void 0}function lf(e,t){let n=e.consumersTail,o=Qn(e);if(n!==void 0?(t.nextConsumer=n.nextConsumer,n.nextConsumer=t):(t.nextConsumer=void 0,e.consumers=t),t.prevConsumer=n,e.consumersTail=t,!o)for(let r=e.producers;r!==void 0;r=r.nextProducer)lf(r.producer,r)}function hc(e){let t=e.producer,n=e.nextProducer,o=e.nextConsumer,r=e.prevConsumer;if(e.nextConsumer=void 0,e.prevConsumer=void 0,o!==void 0?o.prevConsumer=r:t.consumersTail=r,r!==void 0)r.nextConsumer=o;else if(t.consumers=o,!Qn(t)){let i=t.producers;for(;i!==void 0;)i=hc(i)}return n}function Qn(e){return e.consumerIsAlwaysLive||e.consumers!==void 0}function _i(e){By?.(e)}function Wy(e,t){let n=t.producersTail;if(n!==void 0){let o=t.producers;do{if(o===e)return!0;if(o===n)break;o=o.nextProducer}while(o!==void 0)}return!1}function xi(e,t){return Object.is(e,t)}function Ti(e,t){let n=Object.create($y);n.computation=e,t!==void 0&&(n.equal=t);let o=()=>{if(Ii(n),Yn(n),n.value===$o)throw n.error;return n.value};return o[ve]=n,_i(n),o}var Ei=Symbol("UNSET"),Si=Symbol("COMPUTING"),$o=Symbol("ERRORED"),$y=F(b({},qn),{value:Ei,dirty:!0,error:null,equal:xi,kind:"computed",producerMustRecompute(e){return e.value===Ei||e.value===Si},producerRecomputeValue(e){if(e.value===Si)throw new Error("");let t=e.value;e.value=Si;let n=Kn(e),o,r=!1;try{o=e.computation(),N(null),r=t!==Ei&&t!==$o&&o!==$o&&e.equal(t,o)}catch(i){o=$o,e.error=i}finally{zo(e,n)}if(r){e.value=t;return}e.value=o,e.version++}});function zy(){throw new Error}var uf=zy;function df(e){uf(e)}function mc(e){uf=e}var Gy=null;function gc(e,t){let n=Object.create(Ai);n.value=e,t!==void 0&&(n.equal=t);let o=()=>ff(n);return o[ve]=n,_i(n),[o,s=>Zn(n,s),s=>vc(n,s)]}function ff(e){return Yn(e),e.value}function Zn(e,t){pc()||df(e),e.equal(e.value,t)||(e.value=t,qy(e))}function vc(e,t){pc()||df(e),Zn(e,t(e.value))}var Ai=F(b({},qn),{equal:xi,value:void 0,kind:"signal"});function qy(e){e.version++,sf(),fc(e),Gy?.(e)}function O(e){return typeof e=="function"}function Xn(e){let n=e(o=>{Error.call(o),o.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Oi=Xn(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((o,r)=>`${r+1}) ${o.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function Yo(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var ee=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let i of n)i.remove(this);else n.remove(this);let{initialTeardown:o}=this;if(O(o))try{o()}catch(i){t=i instanceof Oi?i.errors:[i]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let i of r)try{pf(i)}catch(s){t=t??[],s instanceof Oi?t=[...t,...s.errors]:t.push(s)}}if(t)throw new Oi(t)}}add(t){var n;if(t&&t!==this)if(this.closed)pf(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Yo(n,t)}remove(t){let{_finalizers:n}=this;n&&Yo(n,t),t instanceof e&&t._removeParent(this)}};ee.EMPTY=(()=>{let e=new ee;return e.closed=!0,e})();var yc=ee.EMPTY;function Pi(e){return e instanceof ee||e&&"closed"in e&&O(e.remove)&&O(e.add)&&O(e.unsubscribe)}function pf(e){O(e)?e():e.unsubscribe()}var Xe={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var eo={setTimeout(e,t,...n){let{delegate:o}=eo;return o?.setTimeout?o.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=eo;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function Ri(e){eo.setTimeout(()=>{let{onUnhandledError:t}=Xe;if(t)t(e);else throw e})}function Ko(){}var hf=bc("C",void 0,void 0);function mf(e){return bc("E",void 0,e)}function gf(e){return bc("N",e,void 0)}function bc(e,t,n){return{kind:e,value:t,error:n}}var hn=null;function to(e){if(Xe.useDeprecatedSynchronousErrorHandling){let t=!hn;if(t&&(hn={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:o}=hn;if(hn=null,n)throw o}}else e()}function vf(e){Xe.useDeprecatedSynchronousErrorHandling&&hn&&(hn.errorThrown=!0,hn.error=e)}var mn=class extends ee{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Pi(t)&&t.add(this)):this.destination=Qy}static create(t,n,o){return new no(t,n,o)}next(t){this.isStopped?wc(gf(t),this):this._next(t)}error(t){this.isStopped?wc(mf(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?wc(hf,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Yy=Function.prototype.bind;function Cc(e,t){return Yy.call(e,t)}var Ec=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(o){ki(o)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(o){ki(o)}else ki(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){ki(n)}}},no=class extends mn{constructor(t,n,o){super();let r;if(O(t)||!t)r={next:t??void 0,error:n??void 0,complete:o??void 0};else{let i;this&&Xe.useDeprecatedNextContext?(i=Object.create(t),i.unsubscribe=()=>this.unsubscribe(),r={next:t.next&&Cc(t.next,i),error:t.error&&Cc(t.error,i),complete:t.complete&&Cc(t.complete,i)}):r=t}this.destination=new Ec(r)}};function ki(e){Xe.useDeprecatedSynchronousErrorHandling?vf(e):Ri(e)}function Ky(e){throw e}function wc(e,t){let{onStoppedNotification:n}=Xe;n&&eo.setTimeout(()=>n(e,t))}var Qy={closed:!0,next:Ko,error:Ky,complete:Ko};var oo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function je(e){return e}function Sc(...e){return Dc(e)}function Dc(e){return e.length===0?je:e.length===1?e[0]:function(n){return e.reduce((o,r)=>r(o),n)}}var B=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let o=new e;return o.source=this,o.operator=n,o}subscribe(n,o,r){let i=Xy(n)?n:new no(n,o,r);return to(()=>{let{operator:s,source:a}=this;i.add(s?s.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(o){n.error(o)}}forEach(n,o){return o=yf(o),new o((r,i)=>{let s=new no({next:a=>{try{n(a)}catch(c){i(c),s.unsubscribe()}},error:i,complete:r});this.subscribe(s)})}_subscribe(n){var o;return(o=this.source)===null||o===void 0?void 0:o.subscribe(n)}[oo](){return this}pipe(...n){return Dc(n)(this)}toPromise(n){return n=yf(n),new n((o,r)=>{let i;this.subscribe(s=>i=s,s=>r(s),()=>o(i))})}}return e.create=t=>new e(t),e})();function yf(e){var t;return(t=e??Xe.Promise)!==null&&t!==void 0?t:Promise}function Zy(e){return e&&O(e.next)&&O(e.error)&&O(e.complete)}function Xy(e){return e&&e instanceof mn||Zy(e)&&Pi(e)}function Mc(e){return O(e?.lift)}function U(e){return t=>{if(Mc(t))return t.lift(function(n){try{return e(n,this)}catch(o){this.error(o)}});throw new TypeError("Unable to lift unknown Observable type")}}function V(e,t,n,o,r){return new Ic(e,t,n,o,r)}var Ic=class extends mn{constructor(t,n,o,r,i,s){super(t),this.onFinalize=i,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(c){t.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){t.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=o?function(){try{o()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};function ro(){return U((e,t)=>{let n=null;e._refCount++;let o=V(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount){n=null;return}let r=e._connection,i=n;n=null,r&&(!i||r===i)&&r.unsubscribe(),t.unsubscribe()});e.subscribe(o),o.closed||(n=e.connect())})}var io=class extends B{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,Mc(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){let t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new ee;let n=this.getSubject();t.add(this.source.subscribe(V(n,void 0,()=>{this._teardown(),n.complete()},o=>{this._teardown(),n.error(o)},()=>this._teardown()))),t.closed&&(this._connection=null,t=ee.EMPTY)}return t}refCount(){return ro()(this)}};var bf=Xn(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var te=(()=>{class e extends B{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let o=new Ni(this,this);return o.operator=n,o}_throwIfClosed(){if(this.closed)throw new bf}next(n){to(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let o of this.currentObservers)o.next(n)}})}error(n){to(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:o}=this;for(;o.length;)o.shift().error(n)}})}complete(){to(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:o,isStopped:r,observers:i}=this;return o||r?yc:(this.currentObservers=null,i.push(n),new ee(()=>{this.currentObservers=null,Yo(i,n)}))}_checkFinalizedStatuses(n){let{hasError:o,thrownError:r,isStopped:i}=this;o?n.error(r):i&&n.complete()}asObservable(){let n=new B;return n.source=this,n}}return e.create=(t,n)=>new Ni(t,n),e})(),Ni=class extends te{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,o;(o=(n=this.destination)===null||n===void 0?void 0:n.next)===null||o===void 0||o.call(n,t)}error(t){var n,o;(o=(n=this.destination)===null||n===void 0?void 0:n.error)===null||o===void 0||o.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,o;return(o=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&o!==void 0?o:yc}};var de=class extends te{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:o}=this;if(t)throw n;return this._throwIfClosed(),o}next(t){super.next(this._value=t)}};var Re=new B(e=>e.complete());function Cf(e){return e&&O(e.schedule)}function wf(e){return e[e.length-1]}function Fi(e){return O(wf(e))?e.pop():void 0}function Ut(e){return Cf(wf(e))?e.pop():void 0}function Sf(e,t,n,o){function r(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(u){try{l(o.next(u))}catch(d){s(d)}}function c(u){try{l(o.throw(u))}catch(d){s(d)}}function l(u){u.done?i(u.value):r(u.value).then(a,c)}l((o=o.apply(e,t||[])).next())})}function Ef(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function gn(e){return this instanceof gn?(this.v=e,this):new gn(e)}function Df(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(e,t||[]),r,i=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(p){return function(C){return Promise.resolve(C).then(p,d)}}function a(p,C){o[p]&&(r[p]=function(x){return new Promise(function(W,H){i.push([p,x,W,H])>1||c(p,x)})},C&&(r[p]=C(r[p])))}function c(p,C){try{l(o[p](C))}catch(x){v(i[0][3],x)}}function l(p){p.value instanceof gn?Promise.resolve(p.value.v).then(u,d):v(i[0][2],p)}function u(p){c("next",p)}function d(p){c("throw",p)}function v(p,C){p(C),i.shift(),i.length&&c(i[0][0],i[0][1])}}function Mf(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof Ef=="function"?Ef(e):e[Symbol.iterator](),n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n);function o(i){n[i]=e[i]&&function(s){return new Promise(function(a,c){s=e[i](s),r(a,c,s.done,s.value)})}}function r(i,s,a,c){Promise.resolve(c).then(function(l){i({value:l,done:a})},s)}}var Li=e=>e&&typeof e.length=="number"&&typeof e!="function";function ji(e){return O(e?.then)}function Vi(e){return O(e[oo])}function Ji(e){return Symbol.asyncIterator&&O(e?.[Symbol.asyncIterator])}function Hi(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function eb(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Bi=eb();function Ui(e){return O(e?.[Bi])}function Wi(e){return Df(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:o,done:r}=yield gn(n.read());if(r)return yield gn(void 0);yield yield gn(o)}}finally{n.releaseLock()}})}function $i(e){return O(e?.getReader)}function ne(e){if(e instanceof B)return e;if(e!=null){if(Vi(e))return tb(e);if(Li(e))return nb(e);if(ji(e))return ob(e);if(Ji(e))return If(e);if(Ui(e))return rb(e);if($i(e))return ib(e)}throw Hi(e)}function tb(e){return new B(t=>{let n=e[oo]();if(O(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function nb(e){return new B(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function ob(e){return new B(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,Ri)})}function rb(e){return new B(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function If(e){return new B(t=>{sb(e,t).catch(n=>t.error(n))})}function ib(e){return If(Wi(e))}function sb(e,t){var n,o,r,i;return Sf(this,void 0,void 0,function*(){try{for(n=Mf(e);o=yield n.next(),!o.done;){let s=o.value;if(t.next(s),t.closed)return}}catch(s){r={error:s}}finally{try{o&&!o.done&&(i=n.return)&&(yield i.call(n))}finally{if(r)throw r.error}}t.complete()})}function ke(e,t,n,o=0,r=!1){let i=t.schedule(function(){n(),r?e.add(this.schedule(null,o)):this.unsubscribe()},o);if(e.add(i),!r)return i}function zi(e,t=0){return U((n,o)=>{n.subscribe(V(o,r=>ke(o,e,()=>o.next(r),t),()=>ke(o,e,()=>o.complete(),t),r=>ke(o,e,()=>o.error(r),t)))})}function Gi(e,t=0){return U((n,o)=>{o.add(e.schedule(()=>n.subscribe(o),t))})}function _f(e,t){return ne(e).pipe(Gi(t),zi(t))}function xf(e,t){return ne(e).pipe(Gi(t),zi(t))}function Tf(e,t){return new B(n=>{let o=0;return t.schedule(function(){o===e.length?n.complete():(n.next(e[o++]),n.closed||this.schedule())})})}function Af(e,t){return new B(n=>{let o;return ke(n,t,()=>{o=e[Bi](),ke(n,t,()=>{let r,i;try{({value:r,done:i}=o.next())}catch(s){n.error(s);return}i?n.complete():n.next(r)},0,!0)}),()=>O(o?.return)&&o.return()})}function qi(e,t){if(!e)throw new Error("Iterable cannot be null");return new B(n=>{ke(n,t,()=>{let o=e[Symbol.asyncIterator]();ke(n,t,()=>{o.next().then(r=>{r.done?n.complete():n.next(r.value)})},0,!0)})})}function Of(e,t){return qi(Wi(e),t)}function Pf(e,t){if(e!=null){if(Vi(e))return _f(e,t);if(Li(e))return Tf(e,t);if(ji(e))return xf(e,t);if(Ji(e))return qi(e,t);if(Ui(e))return Af(e,t);if($i(e))return Of(e,t)}throw Hi(e)}function Q(e,t){return t?Pf(e,t):ne(e)}function I(...e){let t=Ut(e);return Q(e,t)}function so(e,t){let n=O(e)?e:()=>e,o=r=>r.error(n());return new B(t?r=>t.schedule(o,0,r):o)}function _c(e){return!!e&&(e instanceof B||O(e.lift)&&O(e.subscribe))}var xt=Xn(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function J(e,t){return U((n,o)=>{let r=0;n.subscribe(V(o,i=>{o.next(e.call(t,i,r++))}))})}var{isArray:ab}=Array;function cb(e,t){return ab(t)?e(...t):e(t)}function Yi(e){return J(t=>cb(e,t))}var{isArray:lb}=Array,{getPrototypeOf:ub,prototype:db,keys:fb}=Object;function Ki(e){if(e.length===1){let t=e[0];if(lb(t))return{args:t,keys:null};if(pb(t)){let n=fb(t);return{args:n.map(o=>t[o]),keys:n}}}return{args:e,keys:null}}function pb(e){return e&&typeof e=="object"&&ub(e)===db}function Qi(e,t){return e.reduce((n,o,r)=>(n[o]=t[r],n),{})}function Qo(...e){let t=Ut(e),n=Fi(e),{args:o,keys:r}=Ki(e);if(o.length===0)return Q([],t);let i=new B(hb(o,t,r?s=>Qi(r,s):je));return n?i.pipe(Yi(n)):i}function hb(e,t,n=je){return o=>{Rf(t,()=>{let{length:r}=e,i=new Array(r),s=r,a=r;for(let c=0;c<r;c++)Rf(t,()=>{let l=Q(e[c],t),u=!1;l.subscribe(V(o,d=>{i[c]=d,u||(u=!0,a--),a||o.next(n(i.slice()))},()=>{--s||o.complete()}))},o)},o)}}function Rf(e,t,n){e?ke(n,e,t):t()}function kf(e,t,n,o,r,i,s,a){let c=[],l=0,u=0,d=!1,v=()=>{d&&!c.length&&!l&&t.complete()},p=x=>l<o?C(x):c.push(x),C=x=>{i&&t.next(x),l++;let W=!1;ne(n(x,u++)).subscribe(V(t,H=>{r?.(H),i?p(H):t.next(H)},()=>{W=!0},void 0,()=>{if(W)try{for(l--;c.length&&l<o;){let H=c.shift();s?ke(t,s,()=>C(H)):C(H)}v()}catch(H){t.error(H)}}))};return e.subscribe(V(t,p,()=>{d=!0,v()})),()=>{a?.()}}function X(e,t,n=1/0){return O(t)?X((o,r)=>J((i,s)=>t(o,i,r,s))(ne(e(o,r))),n):(typeof t=="number"&&(n=t),U((o,r)=>kf(o,r,e,n)))}function ao(e=1/0){return X(je,e)}function Nf(){return ao(1)}function co(...e){return Nf()(Q(e,Ut(e)))}function Zo(e){return new B(t=>{ne(e()).subscribe(t)})}function xc(...e){let t=Fi(e),{args:n,keys:o}=Ki(e),r=new B(i=>{let{length:s}=n;if(!s){i.complete();return}let a=new Array(s),c=s,l=s;for(let u=0;u<s;u++){let d=!1;ne(n[u]).subscribe(V(i,v=>{d||(d=!0,l--),a[u]=v},()=>c--,void 0,()=>{(!c||!d)&&(l||i.next(o?Qi(o,a):a),i.complete())}))}});return t?r.pipe(Yi(t)):r}function Ne(e,t){return U((n,o)=>{let r=0;n.subscribe(V(o,i=>e.call(t,i,r++)&&o.next(i)))})}function Tt(e){return U((t,n)=>{let o=null,r=!1,i;o=t.subscribe(V(n,void 0,void 0,s=>{i=ne(e(s,Tt(e)(t))),o?(o.unsubscribe(),o=null,i.subscribe(n)):r=!0})),r&&(o.unsubscribe(),o=null,i.subscribe(n))})}function Ff(e,t,n,o,r){return(i,s)=>{let a=n,c=t,l=0;i.subscribe(V(s,u=>{let d=l++;c=a?e(c,u,d):(a=!0,u),o&&s.next(c)},r&&(()=>{a&&s.next(c),s.complete()})))}}function Wt(e,t){return O(t)?X(e,t,1):X(e,1)}function $t(e){return U((t,n)=>{let o=!1;t.subscribe(V(n,r=>{o=!0,n.next(r)},()=>{o||n.next(e),n.complete()}))})}function At(e){return e<=0?()=>Re:U((t,n)=>{let o=0;t.subscribe(V(n,r=>{++o<=e&&(n.next(r),e<=o&&n.complete())}))})}function Zi(e=mb){return U((t,n)=>{let o=!1;t.subscribe(V(n,r=>{o=!0,n.next(r)},()=>o?n.complete():n.error(e())))})}function mb(){return new xt}function Xo(e){return U((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function Ot(e,t){let n=arguments.length>=2;return o=>o.pipe(e?Ne((r,i)=>e(r,i,o)):je,At(1),n?$t(t):Zi(()=>new xt))}function lo(e){return e<=0?()=>Re:U((t,n)=>{let o=[];t.subscribe(V(n,r=>{o.push(r),e<o.length&&o.shift()},()=>{for(let r of o)n.next(r);n.complete()},void 0,()=>{o=null}))})}function Tc(e,t){let n=arguments.length>=2;return o=>o.pipe(e?Ne((r,i)=>e(r,i,o)):je,lo(1),n?$t(t):Zi(()=>new xt))}function Ac(e,t){return U(Ff(e,t,arguments.length>=2,!0))}function Oc(...e){let t=Ut(e);return U((n,o)=>{(t?co(e,n,t):co(e,n)).subscribe(o)})}function De(e,t){return U((n,o)=>{let r=null,i=0,s=!1,a=()=>s&&!r&&o.complete();n.subscribe(V(o,c=>{r?.unsubscribe();let l=0,u=i++;ne(e(c,u)).subscribe(r=V(o,d=>o.next(t?t(c,d,u,l++):d),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function Xi(e){return U((t,n)=>{ne(e).subscribe(V(n,()=>n.complete(),Ko)),!n.closed&&t.subscribe(n)})}function ue(e,t,n){let o=O(e)||t||n?{next:e,error:t,complete:n}:e;return o?U((r,i)=>{var s;(s=o.subscribe)===null||s===void 0||s.call(o);let a=!0;r.subscribe(V(i,c=>{var l;(l=o.next)===null||l===void 0||l.call(o,c),i.next(c)},()=>{var c;a=!1,(c=o.complete)===null||c===void 0||c.call(o),i.complete()},c=>{var l;a=!1,(l=o.error)===null||l===void 0||l.call(o,c),i.error(c)},()=>{var c,l;a&&((c=o.unsubscribe)===null||c===void 0||c.call(o)),(l=o.finalize)===null||l===void 0||l.call(o)}))}):je}function Lf(e){let t=N(null);try{return e()}finally{N(t)}}var os="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",w=class extends Error{code;constructor(t,n){super(Yt(t,n)),this.code=t}};function gb(e){return`NG0${Math.abs(e)}`}function Yt(e,t){return`${gb(e)}${t?": "+t:""}`}var _e=globalThis;function G(e){for(let t in e)if(e[t]===G)return t;throw Error("")}function Jf(e,t){for(let n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function Rt(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map(Rt).join(", ")}]`;if(e==null)return""+e;let t=e.overriddenName||e.name;if(t)return`${t}`;let n=e.toString();if(n==null)return""+n;let o=n.indexOf(`
`);return o>=0?n.slice(0,o):n}function rs(e,t){return e?t?`${e} ${t}`:e:t||""}var vb=G({__forward_ref__:G});function wn(e){return e.__forward_ref__=wn,e.toString=function(){return Rt(this())},e}function fe(e){return Uc(e)?e():e}function Uc(e){return typeof e=="function"&&e.hasOwnProperty(vb)&&e.__forward_ref__===wn}function S(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function he(e){return{providers:e.providers||[],imports:e.imports||[]}}function or(e){return yb(e,is)}function Wc(e){return or(e)!==null}function yb(e,t){return e.hasOwnProperty(t)&&e[t]||null}function bb(e){let t=e?.[is]??null;return t||null}function Rc(e){return e&&e.hasOwnProperty(ts)?e[ts]:null}var is=G({\u0275prov:G}),ts=G({\u0275inj:G}),D=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(t,n){this._desc=t,this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=S({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function $c(e){return e&&!!e.\u0275providers}var zc=G({\u0275cmp:G}),Gc=G({\u0275dir:G}),qc=G({\u0275pipe:G}),Yc=G({\u0275mod:G}),tr=G({\u0275fac:G}),En=G({__NG_ELEMENT_ID__:G}),jf=G({__NG_ENV_ID__:G});function Kt(e){return typeof e=="string"?e:e==null?"":String(e)}function Hf(e){return typeof e=="function"?e.name||e.toString():typeof e=="object"&&e!=null&&typeof e.type=="function"?e.type.name||e.type.toString():Kt(e)}var Bf=G({ngErrorCode:G}),Cb=G({ngErrorMessage:G}),wb=G({ngTokenPath:G});function Kc(e,t){return Uf("",-200,t)}function ss(e,t){throw new w(-201,!1)}function Uf(e,t,n){let o=new w(t,e);return o[Bf]=t,o[Cb]=e,n&&(o[wb]=n),o}function Eb(e){return e[Bf]}var kc;function Wf(){return kc}function Me(e){let t=kc;return kc=e,t}function Qc(e,t,n){let o=or(e);if(o&&o.providedIn=="root")return o.value===void 0?o.value=o.factory():o.value;if(n&8)return null;if(t!==void 0)return t;ss(e,"Injector")}var Sb={},vn=Sb,Db="__NG_DI_FLAG__",Nc=class{injector;constructor(t){this.injector=t}retrieve(t,n){let o=yn(n)||0;try{return this.injector.get(t,o&8?null:vn,o)}catch(r){if(Gn(r))return r;throw r}}};function Mb(e,t=0){let n=Ci();if(n===void 0)throw new w(-203,!1);if(n===null)return Qc(e,void 0,t);{let o=Ib(t),r=n.retrieve(e,o);if(Gn(r)){if(o.optional)return null;throw r}return r}}function M(e,t=0){return(Wf()||Mb)(fe(e),t)}function y(e,t){return M(e,yn(t))}function yn(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Ib(e){return{optional:!!(e&8),host:!!(e&1),self:!!(e&2),skipSelf:!!(e&4)}}function Fc(e){let t=[];for(let n=0;n<e.length;n++){let o=fe(e[n]);if(Array.isArray(o)){if(o.length===0)throw new w(900,!1);let r,i=0;for(let s=0;s<o.length;s++){let a=o[s],c=_b(a);typeof c=="number"?c===-1?r=a.token:i|=c:r=a}t.push(M(r,i))}else t.push(M(o))}return t}function _b(e){return e[Db]}function zt(e,t){let n=e.hasOwnProperty(tr);return n?e[tr]:null}function as(e,t){e.forEach(n=>Array.isArray(n)?as(n,t):t(n))}function Zc(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function rr(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function $f(e,t,n,o){let r=e.length;if(r==t)e.push(n,o);else if(r===1)e.push(o,e[0]),e[0]=n;else{for(r--,e.push(e[r-1],e[r]);r>t;){let i=r-2;e[r]=e[i],r--}e[t]=n,e[t+1]=o}}function cs(e,t,n){let o=fo(e,t);return o>=0?e[o|1]=n:(o=~o,$f(e,o,t,n)),o}function ls(e,t){let n=fo(e,t);if(n>=0)return e[n|1]}function fo(e,t){return xb(e,t,1)}function xb(e,t,n){let o=0,r=e.length>>n;for(;r!==o;){let i=o+(r-o>>1),s=e[i<<n];if(t===s)return i<<n;s>t?r=i:o=i+1}return~(r<<n)}var Qt={},Ie=[],Zt=new D(""),Xc=new D("",-1),el=new D(""),nr=class{get(t,n=vn){if(n===vn){let r=Uf("",-201);throw r.name="\u0275NotFound",r}return n}};function tl(e){return e[Yc]||null}function kt(e){return e[zc]||null}function nl(e){return e[Gc]||null}function zf(e){return e[qc]||null}function us(e){return{\u0275providers:e}}function Gf(...e){return{\u0275providers:ol(!0,e),\u0275fromNgModule:!0}}function ol(e,...t){let n=[],o=new Set,r,i=s=>{n.push(s)};return as(t,s=>{let a=s;ns(a,i,[],o)&&(r||=[],r.push(a))}),r!==void 0&&qf(r,i),n}function qf(e,t){for(let n=0;n<e.length;n++){let{ngModule:o,providers:r}=e[n];rl(r,i=>{t(i,o)})}}function ns(e,t,n,o){if(e=fe(e),!e)return!1;let r=null,i=Rc(e),s=!i&&kt(e);if(!i&&!s){let c=e.ngModule;if(i=Rc(c),i)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=e}let a=o.has(r);if(s){if(a)return!1;if(o.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)ns(l,t,n,o)}}else if(i){if(i.imports!=null&&!a){o.add(r);let l;try{as(i.imports,u=>{ns(u,t,n,o)&&(l||=[],l.push(u))})}finally{}l!==void 0&&qf(l,t)}if(!a){let l=zt(r)||(()=>new r);t({provide:r,useFactory:l,deps:Ie},r),t({provide:el,useValue:r,multi:!0},r),t({provide:Zt,useValue:()=>M(r),multi:!0},r)}let c=i.providers;if(c!=null&&!a){let l=e;rl(c,u=>{t(u,l)})}}else return!1;return r!==e&&e.providers!==void 0}function rl(e,t){for(let n of e)$c(n)&&(n=n.\u0275providers),Array.isArray(n)?rl(n,t):t(n)}var Tb=G({provide:String,useValue:G});function Yf(e){return e!==null&&typeof e=="object"&&Tb in e}function Ab(e){return!!(e&&e.useExisting)}function Ob(e){return!!(e&&e.useFactory)}function bn(e){return typeof e=="function"}function Kf(e){return!!e.useClass}var ir=new D(""),es={},Vf={},Pc;function sr(){return Pc===void 0&&(Pc=new nr),Pc}var ie=class{},Cn=class extends ie{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,n,o,r){super(),this.parent=n,this.source=o,this.scopes=r,jc(t,s=>this.processProvider(s)),this.records.set(Xc,uo(void 0,this)),r.has("environment")&&this.records.set(ie,uo(void 0,this));let i=this.records.get(ir);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(el,Ie,{self:!0}))}retrieve(t,n){let o=yn(n)||0;try{return this.get(t,vn,o)}catch(r){if(Gn(r))return r;throw r}}destroy(){er(this),this._destroyed=!0;let t=N(null);try{for(let o of this._ngOnDestroyHooks)o.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let o of n)o()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),N(t)}}onDestroy(t){return er(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){er(this);let n=ft(this),o=Me(void 0),r;try{return t()}finally{ft(n),Me(o)}}get(t,n=vn,o){if(er(this),t.hasOwnProperty(jf))return t[jf](this);let r=yn(o),i,s=ft(this),a=Me(void 0);try{if(!(r&4)){let l=this.records.get(t);if(l===void 0){let u=Fb(t)&&or(t);u&&this.injectableDefInScope(u)?l=uo(Lc(t),es):l=null,this.records.set(t,l)}if(l!=null)return this.hydrate(t,l,r)}let c=r&2?sr():this.parent;return n=r&8&&n===vn?null:n,c.get(t,n)}catch(c){let l=Eb(c);throw l===-200||l===-201?new w(l,null):c}finally{Me(a),ft(s)}}resolveInjectorInitializers(){let t=N(null),n=ft(this),o=Me(void 0),r;try{let i=this.get(Zt,Ie,{self:!0});for(let s of i)s()}finally{ft(n),Me(o),N(t)}}toString(){let t=[],n=this.records;for(let o of n.keys())t.push(Rt(o));return`R3Injector[${t.join(", ")}]`}processProvider(t){t=fe(t);let n=bn(t)?t:fe(t&&t.provide),o=Rb(t);if(!bn(t)&&t.multi===!0){let r=this.records.get(n);r||(r=uo(void 0,es,!0),r.factory=()=>Fc(r.multi),this.records.set(n,r)),n=t,r.multi.push(t)}this.records.set(n,o)}hydrate(t,n,o){let r=N(null);try{if(n.value===Vf)throw Kc(Rt(t));return n.value===es&&(n.value=Vf,n.value=n.factory(void 0,o)),typeof n.value=="object"&&n.value&&Nb(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{N(r)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=fe(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function Lc(e){let t=or(e),n=t!==null?t.factory:zt(e);if(n!==null)return n;if(e instanceof D)throw new w(204,!1);if(e instanceof Function)return Pb(e);throw new w(204,!1)}function Pb(e){if(e.length>0)throw new w(204,!1);let n=bb(e);return n!==null?()=>n.factory(e):()=>new e}function Rb(e){if(Yf(e))return uo(void 0,e.useValue);{let t=il(e);return uo(t,es)}}function il(e,t,n){let o;if(bn(e)){let r=fe(e);return zt(r)||Lc(r)}else if(Yf(e))o=()=>fe(e.useValue);else if(Ob(e))o=()=>e.useFactory(...Fc(e.deps||[]));else if(Ab(e))o=(r,i)=>M(fe(e.useExisting),i!==void 0&&i&8?8:void 0);else{let r=fe(e&&(e.useClass||e.provide));if(kb(e))o=()=>new r(...Fc(e.deps));else return zt(r)||Lc(r)}return o}function er(e){if(e.destroyed)throw new w(205,!1)}function uo(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function kb(e){return!!e.deps}function Nb(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function Fb(e){return typeof e=="function"||typeof e=="object"&&e.ngMetadataName==="InjectionToken"}function jc(e,t){for(let n of e)Array.isArray(n)?jc(n,t):n&&$c(n)?jc(n.\u0275providers,t):t(n)}function be(e,t){let n;e instanceof Cn?(er(e),n=e):n=new Nc(e);let o,r=ft(n),i=Me(void 0);try{return t()}finally{ft(r),Me(i)}}function sl(){return Wf()!==void 0||Ci()!=null}var tt=0,k=1,T=2,pe=3,Ge=4,qe=5,ar=6,po=7,Ce=8,Xt=9,pt=10,Z=11,ho=12,al=13,Sn=14,Ye=15,Dn=16,Mn=17,In=18,cr=19,cl=20,Pt=21,ds=22,lr=23,Ve=24,_n=25,ur=26,xe=27,Qf=1;var en=7,dr=8,fr=9,Fe=10;function ht(e){return Array.isArray(e)&&typeof e[Qf]=="object"}function nt(e){return Array.isArray(e)&&e[Qf]===!0}function ll(e){return(e.flags&4)!==0}function tn(e){return e.componentOffset>-1}function pr(e){return(e.flags&1)===1}function mt(e){return!!e.template}function mo(e){return(e[T]&512)!==0}function xn(e){return(e[T]&256)===256}var Zf="svg",Xf="math";function Ke(e){for(;Array.isArray(e);)e=e[tt];return e}function ul(e,t){return Ke(t[e])}function ot(e,t){return Ke(t[e.index])}function fs(e,t){return e.data[t]}function ep(e,t){return e[t]}function dl(e,t,n,o){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=o}function Qe(e,t){let n=t[e];return ht(n)?n:n[tt]}function ps(e){return(e[T]&128)===128}function tp(e){return nt(e[pe])}function hr(e,t){return t==null?null:e[t]}function fl(e){e[Mn]=0}function pl(e){e[T]&1024||(e[T]|=1024,ps(e)&&go(e))}function np(e,t){for(;e>0;)t=t[Sn],e--;return t}function mr(e){return!!(e[T]&9216||e[Ve]?.dirty)}function hs(e){e[pt].changeDetectionScheduler?.notify(8),e[T]&64&&(e[T]|=1024),mr(e)&&go(e)}function go(e){e[pt].changeDetectionScheduler?.notify(0);let t=Gt(e);for(;t!==null&&!(t[T]&8192||(t[T]|=8192,!ps(t)));)t=Gt(t)}function hl(e,t){if(xn(e))throw new w(911,!1);e[Pt]===null&&(e[Pt]=[]),e[Pt].push(t)}function op(e,t){if(e[Pt]===null)return;let n=e[Pt].indexOf(t);n!==-1&&e[Pt].splice(n,1)}function Gt(e){let t=e[pe];return nt(t)?t[pe]:t}function rp(e){return e[po]??=[]}function ip(e){return e.cleanup??=[]}var L={lFrame:Ep(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Vc=!1;function sp(){return L.lFrame.elementDepthCount}function ap(){L.lFrame.elementDepthCount++}function cp(){L.lFrame.elementDepthCount--}function ml(){return L.bindingsEnabled}function lp(){return L.skipHydrationRootTNode!==null}function up(e){return L.skipHydrationRootTNode===e}function dp(){L.skipHydrationRootTNode=null}function $(){return L.lFrame.lView}function Te(){return L.lFrame.tView}function rt(e){return L.lFrame.contextLView=e,e[Ce]}function it(e){return L.lFrame.contextLView=null,e}function we(){let e=gl();for(;e!==null&&e.type===64;)e=e.parent;return e}function gl(){return L.lFrame.currentTNode}function fp(){let e=L.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function vo(e,t){let n=L.lFrame;n.currentTNode=e,n.isParent=t}function vl(){return L.lFrame.isParent}function pp(){L.lFrame.isParent=!1}function yl(){return Vc}function bl(e){let t=Vc;return Vc=e,t}function hp(){let e=L.lFrame,t=e.bindingRootIndex;return t===-1&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function mp(){return L.lFrame.bindingIndex}function gp(e){return L.lFrame.bindingIndex=e}function gr(){return L.lFrame.bindingIndex++}function ms(e){let t=L.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function vp(){return L.lFrame.inI18n}function yp(e,t){let n=L.lFrame;n.bindingIndex=n.bindingRootIndex=e,gs(t)}function bp(){return L.lFrame.currentDirectiveIndex}function gs(e){L.lFrame.currentDirectiveIndex=e}function Cp(e){let t=L.lFrame.currentDirectiveIndex;return t===-1?null:e[t]}function Cl(e){L.lFrame.currentQueryIndex=e}function Lb(e){let t=e[k];return t.type===2?t.declTNode:t.type===1?e[qe]:null}function wl(e,t,n){if(n&4){let r=t,i=e;for(;r=r.parent,r===null&&!(n&1);)if(r=Lb(i),r===null||(i=i[Sn],r.type&10))break;if(r===null)return!1;t=r,e=i}let o=L.lFrame=wp();return o.currentTNode=t,o.lView=e,!0}function vs(e){let t=wp(),n=e[k];L.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function wp(){let e=L.lFrame,t=e===null?null:e.child;return t===null?Ep(e):t}function Ep(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function Sp(){let e=L.lFrame;return L.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var El=Sp;function ys(){let e=Sp();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Dp(e){return(L.lFrame.contextLView=np(e,L.lFrame.contextLView))[Ce]}function Nt(){return L.lFrame.selectedIndex}function nn(e){L.lFrame.selectedIndex=e}function bs(){let e=L.lFrame;return fs(e.tView,e.selectedIndex)}function Mp(){return L.lFrame.currentNamespace}var Ip=!0;function Cs(){return Ip}function ws(e){Ip=e}function Jc(e,t=null,n=null,o){let r=Sl(e,t,n,o);return r.resolveInjectorInitializers(),r}function Sl(e,t=null,n=null,o,r=new Set){let i=[n||Ie,Gf(e)];return o=o||(typeof e=="object"?void 0:Rt(e)),new Cn(i,t||sr(),o||null,r)}var ye=class e{static THROW_IF_NOT_FOUND=vn;static NULL=new nr;static create(t,n){if(Array.isArray(t))return Jc({name:""},n,t,"");{let o=t.name??"";return Jc({name:o},t.parent,t.providers,o)}}static \u0275prov=S({token:e,providedIn:"any",factory:()=>M(Xc)});static __NG_ELEMENT_ID__=-1},oe=new D(""),gt=(()=>{class e{static __NG_ELEMENT_ID__=jb;static __NG_ENV_ID__=n=>n}return e})(),Hc=class extends gt{_lView;constructor(t){super(),this._lView=t}get destroyed(){return xn(this._lView)}onDestroy(t){let n=this._lView;return hl(n,t),()=>op(n,t)}};function jb(){return new Hc($())}var et=class{_console=console;handleError(t){this._console.error("ERROR",t)}},Je=new D("",{providedIn:"root",factory:()=>{let e=y(ie),t;return n=>{e.destroyed&&!t?setTimeout(()=>{throw n}):(t??=e.get(et),t.handleError(n))}}}),_p={provide:Zt,useValue:()=>void y(et),multi:!0};function Dl(e){return typeof e=="function"&&e[ve]!==void 0}function vt(e,t){let[n,o,r]=gc(e,t?.equal),i=n,s=i[ve];return i.set=o,i.update=r,i.asReadonly=xp.bind(i),i}function xp(){let e=this[ve];if(e.readonlyFn===void 0){let t=()=>this();t[ve]=e,e.readonlyFn=t}return e.readonlyFn}function Ml(e){return Dl(e)&&typeof e.set=="function"}var Es=(()=>{class e{view;node;constructor(n,o){this.view=n,this.node=o}static __NG_ELEMENT_ID__=Vb}return e})();function Vb(){return new Es($(),we())}var qt=class{},Ss=new D("",{providedIn:"root",factory:()=>!1});var Il=new D(""),_l=new D(""),Ft=(()=>{class e{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new de(!1);get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new B(n=>{n.next(!1),n.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=S({token:e,providedIn:"root",factory:()=>new e})}return e})();function vr(...e){}var xl=(()=>{class e{static \u0275prov=S({token:e,providedIn:"root",factory:()=>new Bc})}return e})(),Bc=class{dirtyEffectCount=0;queues=new Map;add(t){this.enqueue(t),this.schedule(t)}schedule(t){t.dirty&&this.dirtyEffectCount++}remove(t){let n=t.zone,o=this.queues.get(n);o.has(t)&&(o.delete(t),t.dirty&&this.dirtyEffectCount--)}enqueue(t){let n=t.zone;this.queues.has(n)||this.queues.set(n,new Set);let o=this.queues.get(n);o.has(t)||o.add(t)}flush(){for(;this.dirtyEffectCount>0;){let t=!1;for(let[n,o]of this.queues)n===null?t||=this.flushQueue(o):t||=n.run(()=>this.flushQueue(o));t||(this.dirtyEffectCount=0)}}flushQueue(t){let n=!1;for(let o of t)o.dirty&&(this.dirtyEffectCount--,n=!0,o.run());return n}};function Ir(e){return{toString:e}.toString()}function uh(e){let t=_e.ng;if(t&&t.\u0275compilerFacade)return t.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function qb(e){return typeof e=="function"}var Ps=class{previousValue;currentValue;firstChange;constructor(t,n,o){this.previousValue=t,this.currentValue=n,this.firstChange=o}isFirstChange(){return this.firstChange}};function dh(e,t,n,o){t!==null?t.applyValueToInputSignal(t,o):e[n]=o}var rn=(()=>{let e=()=>fh;return e.ngInherit=!0,e})();function fh(e){return e.type.prototype.ngOnChanges&&(e.setInput=Kb),Yb}function Yb(){let e=hh(this),t=e?.current;if(t){let n=e.previous;if(n===Qt)e.previous=t;else for(let o in t)n[o]=t[o];e.current=null,this.ngOnChanges(t)}}function Kb(e,t,n,o,r){let i=this.declaredInputs[o],s=hh(e)||Qb(e,{previous:Qt,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[i];a[i]=new Ps(l&&l.currentValue,n,c===Qt),dh(e,t,r,n)}var ph="__ngSimpleChanges__";function hh(e){return e[ph]||null}function Qb(e,t){return e[ph]=t}var Tp=[];var Y=function(e,t=null,n){for(let o=0;o<Tp.length;o++){let r=Tp[o];r(e,t,n)}};function Zb(e,t,n){let{ngOnChanges:o,ngOnInit:r,ngDoCheck:i}=t.type.prototype;if(o){let s=fh(t);(n.preOrderHooks??=[]).push(e,s),(n.preOrderCheckHooks??=[]).push(e,s)}r&&(n.preOrderHooks??=[]).push(0-e,r),i&&((n.preOrderHooks??=[]).push(e,i),(n.preOrderCheckHooks??=[]).push(e,i))}function mh(e,t){for(let n=t.directiveStart,o=t.directiveEnd;n<o;n++){let i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=i;s&&(e.contentHooks??=[]).push(-n,s),a&&((e.contentHooks??=[]).push(n,a),(e.contentCheckHooks??=[]).push(n,a)),c&&(e.viewHooks??=[]).push(-n,c),l&&((e.viewHooks??=[]).push(n,l),(e.viewCheckHooks??=[]).push(n,l)),u!=null&&(e.destroyHooks??=[]).push(n,u)}}function Ts(e,t,n){gh(e,t,3,n)}function As(e,t,n,o){(e[T]&3)===n&&gh(e,t,n,o)}function Tl(e,t){let n=e[T];(n&3)===t&&(n&=16383,n+=1,e[T]=n)}function gh(e,t,n,o){let r=o!==void 0?e[Mn]&65535:0,i=o??-1,s=t.length-1,a=0;for(let c=r;c<s;c++)if(typeof t[c+1]=="number"){if(a=t[c],o!=null&&a>=o)break}else t[c]<0&&(e[Mn]+=65536),(a<i||i==-1)&&(Xb(e,n,t,c),e[Mn]=(e[Mn]&4294901760)+c+2),c++}function Ap(e,t){Y(4,e,t);let n=N(null);try{t.call(e)}finally{N(n),Y(5,e,t)}}function Xb(e,t,n,o){let r=n[o]<0,i=n[o+1],s=r?-n[o]:n[o],a=e[s];r?e[T]>>14<e[Mn]>>16&&(e[T]&3)===t&&(e[T]+=16384,Ap(a,i)):Ap(a,i)}var bo=-1,An=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,n,o,r){this.factory=t,this.name=r,this.canSeeViewProviders=n,this.injectImpl=o}};function eC(e){return(e.flags&8)!==0}function tC(e){return(e.flags&16)!==0}function nC(e,t,n){let o=0;for(;o<n.length;){let r=n[o];if(typeof r=="number"){if(r!==0)break;o++;let i=n[o++],s=n[o++],a=n[o++];e.setAttribute(t,s,a,i)}else{let i=r,s=n[++o];oC(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),o++}}return o}function vh(e){return e===3||e===4||e===6}function oC(e){return e.charCodeAt(0)===64}function Cr(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let o=0;o<t.length;o++){let r=t[o];typeof r=="number"?n=r:n===0||(n===-1||n===2?Op(e,n,r,null,t[++o]):Op(e,n,r,null,null))}}return e}function Op(e,t,n,o,r){let i=0,s=e.length;if(t===-1)s=-1;else for(;i<e.length;){let a=e[i++];if(typeof a=="number"){if(a===t){s=-1;break}else if(a>t){s=i-1;break}}}for(;i<e.length;){let a=e[i];if(typeof a=="number")break;if(a===n){r!==null&&(e[i+1]=r);return}i++,r!==null&&i++}s!==-1&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),r!==null&&e.splice(i++,0,r)}function yh(e){return e!==bo}function Rs(e){return e&32767}function rC(e){return e>>16}function ks(e,t){let n=rC(e),o=t;for(;n>0;)o=o[Sn],n--;return o}var Vl=!0;function Ns(e){let t=Vl;return Vl=e,t}var iC=256,bh=iC-1,Ch=5,sC=0,yt={};function aC(e,t,n){let o;typeof n=="string"?o=n.charCodeAt(0)||0:n.hasOwnProperty(En)&&(o=n[En]),o==null&&(o=n[En]=sC++);let r=o&bh,i=1<<r;t.data[e+(r>>Ch)]|=i}function Fs(e,t){let n=wh(e,t);if(n!==-1)return n;let o=t[k];o.firstCreatePass&&(e.injectorIndex=t.length,Al(o.data,e),Al(t,null),Al(o.blueprint,null));let r=cu(e,t),i=e.injectorIndex;if(yh(r)){let s=Rs(r),a=ks(r,t),c=a[k].data;for(let l=0;l<8;l++)t[i+l]=a[s+l]|c[s+l]}return t[i+8]=r,i}function Al(e,t){e.push(0,0,0,0,0,0,0,0,t)}function wh(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function cu(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,o=null,r=t;for(;r!==null;){if(o=Ih(r),o===null)return bo;if(n++,r=r[Sn],o.injectorIndex!==-1)return o.injectorIndex|n<<16}return bo}function Jl(e,t,n){aC(e,t,n)}function cC(e,t){if(t==="class")return e.classes;if(t==="style")return e.styles;let n=e.attrs;if(n){let o=n.length,r=0;for(;r<o;){let i=n[r];if(vh(i))break;if(i===0)r=r+2;else if(typeof i=="number")for(r++;r<o&&typeof n[r]=="string";)r++;else{if(i===t)return n[r+1];r=r+2}}}return null}function Eh(e,t,n){if(n&8||e!==void 0)return e;ss(t,"NodeInjector")}function Sh(e,t,n,o){if(n&8&&o===void 0&&(o=null),(n&3)===0){let r=e[Xt],i=Me(void 0);try{return r?r.get(t,o,n&8):Qc(t,o,n&8)}finally{Me(i)}}return Eh(o,t,n)}function Dh(e,t,n,o=0,r){if(e!==null){if(t[T]&2048&&!(o&2)){let s=pC(e,t,n,o,yt);if(s!==yt)return s}let i=Mh(e,t,n,o,yt);if(i!==yt)return i}return Sh(t,n,o,r)}function Mh(e,t,n,o,r){let i=dC(n);if(typeof i=="function"){if(!wl(t,e,o))return o&1?Eh(r,n,o):Sh(t,n,o,r);try{let s;if(s=i(o),s==null&&!(o&8))ss(n);else return s}finally{El()}}else if(typeof i=="number"){let s=null,a=wh(e,t),c=bo,l=o&1?t[Ye][qe]:null;for((a===-1||o&4)&&(c=a===-1?cu(e,t):t[a+8],c===bo||!Rp(o,!1)?a=-1:(s=t[k],a=Rs(c),t=ks(c,t)));a!==-1;){let u=t[k];if(Pp(i,a,u.data)){let d=lC(a,t,n,s,o,l);if(d!==yt)return d}c=t[a+8],c!==bo&&Rp(o,t[k].data[a+8]===l)&&Pp(i,a,t)?(s=u,a=Rs(c),t=ks(c,t)):a=-1}}return r}function lC(e,t,n,o,r,i){let s=t[k],a=s.data[e+8],c=o==null?tn(a)&&Vl:o!=s&&(a.type&3)!==0,l=r&1&&i===a,u=uC(a,s,n,c,l);return u!==null?Ls(t,s,u,a,r):yt}function uC(e,t,n,o,r){let i=e.providerIndexes,s=t.data,a=i&1048575,c=e.directiveStart,l=e.directiveEnd,u=i>>20,d=o?a:a+u,v=r?a+u:l;for(let p=d;p<v;p++){let C=s[p];if(p<c&&n===C||p>=c&&C.type===n)return p}if(r){let p=s[c];if(p&&mt(p)&&p.type===n)return c}return null}function Ls(e,t,n,o,r){let i=e[n],s=t.data;if(i instanceof An){let a=i;if(a.resolving){let p=Hf(s[n]);throw Kc(p)}let c=Ns(a.canSeeViewProviders);a.resolving=!0;let l=s[n].type||s[n],u,d=a.injectImpl?Me(a.injectImpl):null,v=wl(e,o,0);try{i=e[n]=a.factory(void 0,r,s,e,o),t.firstCreatePass&&n>=o.directiveStart&&Zb(n,s[n],t)}finally{d!==null&&Me(d),Ns(c),a.resolving=!1,El()}}return i}function dC(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=e.hasOwnProperty(En)?e[En]:void 0;return typeof t=="number"?t>=0?t&bh:fC:t}function Pp(e,t,n){let o=1<<e;return!!(n[t+(e>>Ch)]&o)}function Rp(e,t){return!(e&2)&&!(e&1&&t)}var Tn=class{_tNode;_lView;constructor(t,n){this._tNode=t,this._lView=n}get(t,n,o){return Dh(this._tNode,this._lView,t,yn(o),n)}};function fC(){return new Tn(we(),$())}function So(e){return Ir(()=>{let t=e.prototype.constructor,n=t[tr]||Hl(t),o=Object.prototype,r=Object.getPrototypeOf(e.prototype).constructor;for(;r&&r!==o;){let i=r[tr]||Hl(r);if(i&&i!==n)return i;r=Object.getPrototypeOf(r)}return i=>new i})}function Hl(e){return Uc(e)?()=>{let t=Hl(fe(e));return t&&t()}:zt(e)}function pC(e,t,n,o,r){let i=e,s=t;for(;i!==null&&s!==null&&s[T]&2048&&!mo(s);){let a=Mh(i,s,n,o|2,yt);if(a!==yt)return a;let c=i.parent;if(!c){let l=s[cl];if(l){let u=l.get(n,yt,o);if(u!==yt)return u}c=Ih(s),s=s[Sn]}i=c}return r}function Ih(e){let t=e[k],n=t.type;return n===2?t.declTNode:n===1?e[qe]:null}function _r(e){return cC(we(),e)}function hC(){return qs(we(),$())}function qs(e,t){return new Ct(ot(e,t))}var Ct=(()=>{class e{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=hC}return e})();function _h(e){return(e.flags&128)===128}var lu=(function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e})(lu||{}),xh=new Map,mC=0;function gC(){return mC++}function vC(e){xh.set(e[cr],e)}function Bl(e){xh.delete(e[cr])}var kp="__ngContext__";function Co(e,t){ht(t)?(e[kp]=t[cr],vC(t)):e[kp]=t}function Th(e){return Oh(e[ho])}function Ah(e){return Oh(e[Ge])}function Oh(e){for(;e!==null&&!nt(e);)e=e[Ge];return e}var Ul;function uu(e){Ul=e}function du(){if(Ul!==void 0)return Ul;if(typeof document<"u")return document;throw new w(210,!1)}var Ys=new D("",{providedIn:"root",factory:()=>yC}),yC="ng",Ks=new D(""),xr=new D("",{providedIn:"platform",factory:()=>"unknown"});var Qs=new D("",{providedIn:"root",factory:()=>du().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var bC="h",CC="b";var Ph=!1,Rh=new D("",{providedIn:"root",factory:()=>Ph});var fu=new D("");var wC=(e,t,n,o)=>{};function EC(e,t,n,o){wC(e,t,n,o)}function pu(e){return(e.flags&32)===32}var SC=()=>null;function kh(e,t,n=!1){return SC(e,t,n)}function Nh(e,t){let n=e.contentQueries;if(n!==null){let o=N(null);try{for(let r=0;r<n.length;r+=2){let i=n[r],s=n[r+1];if(s!==-1){let a=e.data[s];Cl(i),a.contentQueries(2,t[s],s)}}}finally{N(o)}}}function Wl(e,t,n){Cl(0);let o=N(null);try{t(e,n)}finally{N(o)}}function Fh(e,t,n){if(ll(t)){let o=N(null);try{let r=t.directiveStart,i=t.directiveEnd;for(let s=r;s<i;s++){let a=e.data[s];if(a.contentQueries){let c=n[s];a.contentQueries(1,c,s)}}}finally{N(o)}}}var Lt=(function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e})(Lt||{});var Ds;function DC(){if(Ds===void 0&&(Ds=null,_e.trustedTypes))try{Ds=_e.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return Ds}function Zs(e){return DC()?.createHTML(e)||e}var Ms;function Lh(){if(Ms===void 0&&(Ms=null,_e.trustedTypes))try{Ms=_e.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return Ms}function Np(e){return Lh()?.createHTML(e)||e}function Fp(e){return Lh()?.createScriptURL(e)||e}var js=class{changingThisBreaksApplicationSecurity;constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${os})`}};function Nn(e){return e instanceof js?e.changingThisBreaksApplicationSecurity:e}function Xs(e,t){let n=jh(e);if(n!=null&&n!==t){if(n==="ResourceURL"&&t==="URL")return!0;throw new Error(`Required a safe ${t}, got a ${n} (see ${os})`)}return n===t}function jh(e){return e instanceof js&&e.getTypeName()||null}function MC(e){let t=new zl(e);return IC()?new $l(t):t}var $l=class{inertDocumentHelper;constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{let n=new window.DOMParser().parseFromString(Zs(t),"text/html").body;return n===null?this.inertDocumentHelper.getInertBodyElement(t):(n.firstChild?.remove(),n)}catch{return null}}},zl=class{defaultDoc;inertDocument;constructor(t){this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(t){let n=this.inertDocument.createElement("template");return n.innerHTML=Zs(t),n}};function IC(){try{return!!new window.DOMParser().parseFromString(Zs(""),"text/html")}catch{return!1}}var _C=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function hu(e){return e=String(e),e.match(_C)?e:"unsafe:"+e}function Vt(e){let t={};for(let n of e.split(","))t[n]=!0;return t}function Tr(...e){let t={};for(let n of e)for(let o in n)n.hasOwnProperty(o)&&(t[o]=!0);return t}var Vh=Vt("area,br,col,hr,img,wbr"),Jh=Vt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Hh=Vt("rp,rt"),xC=Tr(Hh,Jh),TC=Tr(Jh,Vt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),AC=Tr(Hh,Vt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Lp=Tr(Vh,TC,AC,xC),Bh=Vt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),OC=Vt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),PC=Vt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),RC=Tr(Bh,OC,PC),kC=Vt("script,style,template"),Gl=class{sanitizedSomething=!1;buf=[];sanitizeChildren(t){let n=t.firstChild,o=!0,r=[];for(;n;){if(n.nodeType===Node.ELEMENT_NODE?o=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,o&&n.firstChild){r.push(n),n=LC(n);continue}for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let i=FC(n);if(i){n=i;break}n=r.pop()}}return this.buf.join("")}startElement(t){let n=jp(t).toLowerCase();if(!Lp.hasOwnProperty(n))return this.sanitizedSomething=!0,!kC.hasOwnProperty(n);this.buf.push("<"),this.buf.push(n);let o=t.attributes;for(let r=0;r<o.length;r++){let i=o.item(r),s=i.name,a=s.toLowerCase();if(!RC.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let c=i.value;Bh[a]&&(c=hu(c)),this.buf.push(" ",s,'="',Vp(c),'"')}return this.buf.push(">"),!0}endElement(t){let n=jp(t).toLowerCase();Lp.hasOwnProperty(n)&&!Vh.hasOwnProperty(n)&&(this.buf.push("</"),this.buf.push(n),this.buf.push(">"))}chars(t){this.buf.push(Vp(t))}};function NC(e,t){return(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function FC(e){let t=e.nextSibling;if(t&&e!==t.previousSibling)throw Uh(t);return t}function LC(e){let t=e.firstChild;if(t&&NC(e,t))throw Uh(t);return t}function jp(e){let t=e.nodeName;return typeof t=="string"?t:"FORM"}function Uh(e){return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`)}var jC=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,VC=/([^\#-~ |!])/g;function Vp(e){return e.replace(/&/g,"&amp;").replace(jC,function(t){let n=t.charCodeAt(0),o=t.charCodeAt(1);return"&#"+((n-55296)*1024+(o-56320)+65536)+";"}).replace(VC,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Is;function Wh(e,t){let n=null;try{Is=Is||MC(e);let o=t?String(t):"";n=Is.getInertBodyElement(o);let r=5,i=o;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,o=i,i=n.innerHTML,n=Is.getInertBodyElement(o)}while(o!==i);let a=new Gl().sanitizeChildren(Jp(n)||n);return Zs(a)}finally{if(n){let o=Jp(n)||n;for(;o.firstChild;)o.firstChild.remove()}}}function Jp(e){return"content"in e&&JC(e)?e.content:null}function JC(e){return e.nodeType===Node.ELEMENT_NODE&&e.nodeName==="TEMPLATE"}function HC(e,t){return e.createText(t)}function BC(e,t,n){e.setValue(t,n)}function $h(e,t,n){return e.createElement(t,n)}function Vs(e,t,n,o,r){e.insertBefore(t,n,o,r)}function zh(e,t,n){e.appendChild(t,n)}function Hp(e,t,n,o,r){o!==null?Vs(e,t,n,o,r):zh(e,t,n)}function UC(e,t,n,o){e.removeChild(null,t,n,o)}function WC(e,t,n){e.setAttribute(t,"style",n)}function $C(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function Gh(e,t,n){let{mergedAttrs:o,classes:r,styles:i}=n;o!==null&&nC(e,t,o),r!==null&&$C(e,t,r),i!==null&&WC(e,t,i)}var Ar=(function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e})(Ar||{});function ea(e){let t=gu();return t?Np(t.sanitize(Ar.HTML,e)||""):Xs(e,"HTML")?Np(Nn(e)):Wh(du(),Kt(e))}function Or(e){let t=gu();return t?t.sanitize(Ar.URL,e)||"":Xs(e,"URL")?Nn(e):hu(Kt(e))}function qh(e){let t=gu();if(t)return Fp(t.sanitize(Ar.RESOURCE_URL,e)||"");if(Xs(e,"ResourceURL"))return Fp(Nn(e));throw new w(904,!1)}function zC(e,t){return t==="src"&&(e==="embed"||e==="frame"||e==="iframe"||e==="media"||e==="script")||t==="href"&&(e==="base"||e==="link")?qh:Or}function mu(e,t,n){return zC(t,n)(e)}function gu(){let e=$();return e&&e[pt].sanitizer}function vu(e){return e.ownerDocument.defaultView}function Yh(e){return e instanceof Function?e():e}function GC(e,t,n){let o=e.length;for(;;){let r=e.indexOf(t,n);if(r===-1)return r;if(r===0||e.charCodeAt(r-1)<=32){let i=t.length;if(r+i===o||e.charCodeAt(r+i)<=32)return r}n=r+1}}var Kh="ng-template";function qC(e,t,n,o){let r=0;if(o){for(;r<t.length&&typeof t[r]=="string";r+=2)if(t[r]==="class"&&GC(t[r+1].toLowerCase(),n,0)!==-1)return!0}else if(yu(e))return!1;if(r=t.indexOf(1,r),r>-1){let i;for(;++r<t.length&&typeof(i=t[r])=="string";)if(i.toLowerCase()===n)return!0}return!1}function yu(e){return e.type===4&&e.value!==Kh}function YC(e,t,n){let o=e.type===4&&!n?Kh:e.value;return t===o}function KC(e,t,n){let o=4,r=e.attrs,i=r!==null?XC(r):0,s=!1;for(let a=0;a<t.length;a++){let c=t[a];if(typeof c=="number"){if(!s&&!st(o)&&!st(c))return!1;if(s&&st(c))continue;s=!1,o=c|o&1;continue}if(!s)if(o&4){if(o=2|o&1,c!==""&&!YC(e,c,n)||c===""&&t.length===1){if(st(o))return!1;s=!0}}else if(o&8){if(r===null||!qC(e,r,c,n)){if(st(o))return!1;s=!0}}else{let l=t[++a],u=QC(c,r,yu(e),n);if(u===-1){if(st(o))return!1;s=!0;continue}if(l!==""){let d;if(u>i?d="":d=r[u+1].toLowerCase(),o&2&&l!==d){if(st(o))return!1;s=!0}}}}return st(o)||s}function st(e){return(e&1)===0}function QC(e,t,n,o){if(t===null)return-1;let r=0;if(o||!n){let i=!1;for(;r<t.length;){let s=t[r];if(s===e)return r;if(s===3||s===6)i=!0;else if(s===1||s===2){let a=t[++r];for(;typeof a=="string";)a=t[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=i?1:2}return-1}else return ew(t,e)}function ZC(e,t,n=!1){for(let o=0;o<t.length;o++)if(KC(e,t[o],n))return!0;return!1}function XC(e){for(let t=0;t<e.length;t++){let n=e[t];if(vh(n))return t}return e.length}function ew(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let o=e[n];if(typeof o=="number")return-1;if(o===t)return n;n++}return-1}function Bp(e,t){return e?":not("+t.trim()+")":t}function tw(e){let t=e[0],n=1,o=2,r="",i=!1;for(;n<e.length;){let s=e[n];if(typeof s=="string")if(o&2){let a=e[++n];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else o&8?r+="."+s:o&4&&(r+=" "+s);else r!==""&&!st(s)&&(t+=Bp(i,r),r=""),o=s,i=i||!st(o);n++}return r!==""&&(t+=Bp(i,r)),t}function nw(e){return e.map(tw).join(",")}function ow(e){let t=[],n=[],o=1,r=2;for(;o<e.length;){let i=e[o];if(typeof i=="string")r===2?i!==""&&t.push(i,e[++o]):r===8&&n.push(i);else{if(!st(r))break;r=i}o++}return n.length&&t.push(1,...n),t}var He={};function bu(e,t,n,o,r,i,s,a,c,l,u){let d=xe+o,v=d+r,p=rw(d,v),C=typeof l=="function"?l():l;return p[k]={type:e,blueprint:p,template:n,queries:null,viewQuery:a,declTNode:t,data:p.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:v,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:C,incompleteFirstPass:!1,ssrId:u}}function rw(e,t){let n=[];for(let o=0;o<t;o++)n.push(o<e?null:He);return n}function iw(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=bu(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function Cu(e,t,n,o,r,i,s,a,c,l,u){let d=t.blueprint.slice();return d[tt]=r,d[T]=o|4|128|8|64|1024,(l!==null||e&&e[T]&2048)&&(d[T]|=2048),fl(d),d[pe]=d[Sn]=e,d[Ce]=n,d[pt]=s||e&&e[pt],d[Z]=a||e&&e[Z],d[Xt]=c||e&&e[Xt]||null,d[qe]=i,d[cr]=gC(),d[ar]=u,d[cl]=l,d[Ye]=t.type==2?e[Ye]:d,d}function sw(e,t,n){let o=ot(t,e),r=iw(n),i=e[pt].rendererFactory,s=wu(e,Cu(e,r,null,Qh(n),o,t,null,i.createRenderer(o,n),null,null,null));return e[t.index]=s}function Qh(e){let t=16;return e.signals?t=4096:e.onPush&&(t=64),t}function Zh(e,t,n,o){if(n===0)return-1;let r=t.length;for(let i=0;i<n;i++)t.push(o),e.blueprint.push(o),e.data.push(null);return r}function wu(e,t){return e[ho]?e[al][Ge]=t:e[ho]=t,e[al]=t,t}function g(e=1){Xh(Te(),$(),Nt()+e,!1)}function Xh(e,t,n,o){if(!o)if((t[T]&3)===3){let i=e.preOrderCheckHooks;i!==null&&Ts(t,i,n)}else{let i=e.preOrderHooks;i!==null&&As(t,i,0,n)}nn(n)}var ta=(function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e})(ta||{});function ql(e,t,n,o){let r=N(null);try{let[i,s,a]=e.inputs[n],c=null;(s&ta.SignalBased)!==0&&(c=t[i][ve]),c!==null&&c.transformFn!==void 0?o=c.transformFn(o):a!==null&&(o=a.call(t,o)),e.setInput!==null?e.setInput(t,c,o,n,i):dh(t,c,i,o)}finally{N(r)}}var bt=(function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e})(bt||{}),aw;function Eu(e,t){return aw(e,t)}var wo=new Set,na=(function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e})(na||{}),Fn=new D(""),Up=new Set;function Do(e){Up.has(e)||(Up.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}var em=!1,Yl=class extends te{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,sl()&&(this.destroyRef=y(gt,{optional:!0})??void 0,this.pendingTasks=y(Ft,{optional:!0})??void 0)}emit(t){let n=N(null);try{super.next(t)}finally{N(n)}}subscribe(t,n,o){let r=t,i=n||(()=>null),s=o;if(t&&typeof t=="object"){let c=t;r=c.next?.bind(c),i=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(i=this.wrapInTimeout(i),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:i,complete:s});return t instanceof ee&&t.add(a),a}wrapInTimeout(t){return n=>{let o=this.pendingTasks?.add();setTimeout(()=>{try{t(n)}finally{o!==void 0&&this.pendingTasks?.remove(o)}})}}},se=Yl;function tm(e){let t,n;function o(){e=vr;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),t!==void 0&&clearTimeout(t)}catch{}}return t=setTimeout(()=>{e(),o()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{e(),o()})),()=>o()}function Wp(e){return queueMicrotask(()=>e()),()=>{e=vr}}var Su="isAngularZone",Js=Su+"_ID",cw=0,K=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new se(!1);onMicrotaskEmpty=new se(!1);onStable=new se(!1);onError=new se(!1);constructor(t){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:o=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:i=em}=t;if(typeof Zone>"u")throw new w(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&o,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=i,dw(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Su)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new w(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new w(909,!1)}run(t,n,o){return this._inner.run(t,n,o)}runTask(t,n,o,r){let i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+r,t,lw,vr,vr);try{return i.runTask(s,n,o)}finally{i.cancelTask(s)}}runGuarded(t,n,o){return this._inner.runGuarded(t,n,o)}runOutsideAngular(t){return this._outer.run(t)}},lw={};function Du(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function uw(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function t(){tm(()=>{e.callbackScheduled=!1,Kl(e),e.isCheckStableRunning=!0,Du(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{t()}):e._outer.run(()=>{t()}),Kl(e)}function dw(e){let t=()=>{uw(e)},n=cw++;e._inner=e._inner.fork({name:"angular",properties:{[Su]:!0,[Js]:n,[Js+n]:!0},onInvokeTask:(o,r,i,s,a,c)=>{if(fw(c))return o.invokeTask(i,s,a,c);try{return $p(e),o.invokeTask(i,s,a,c)}finally{(e.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),zp(e)}},onInvoke:(o,r,i,s,a,c,l)=>{try{return $p(e),o.invoke(i,s,a,c,l)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!pw(c)&&t(),zp(e)}},onHasTask:(o,r,i,s)=>{o.hasTask(i,s),r===i&&(s.change=="microTask"?(e._hasPendingMicrotasks=s.microTask,Kl(e),Du(e)):s.change=="macroTask"&&(e.hasPendingMacrotasks=s.macroTask))},onHandleError:(o,r,i,s)=>(o.handleError(i,s),e.runOutsideAngular(()=>e.onError.emit(s)),!1)})}function Kl(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function $p(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function zp(e){e._nesting--,Du(e)}var wr=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new se;onMicrotaskEmpty=new se;onStable=new se;onError=new se;run(t,n,o){return t.apply(n,o)}runGuarded(t,n,o){return t.apply(n,o)}runOutsideAngular(t){return t()}runTask(t,n,o,r){return t.apply(n,o)}};function fw(e){return nm(e,"__ignore_ng_zone__")}function pw(e){return nm(e,"__scheduler_tick__")}function nm(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}function om(e="zone.js",t){return e==="noop"?new wr:e==="zone.js"?new K(t):e}var Mu=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=S({token:e,providedIn:"root",factory:()=>new e})}return e})(),rm=[0,1,2,3],im=(()=>{class e{ngZone=y(K);scheduler=y(qt);errorHandler=y(et,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){y(Fn,{optional:!0})}execute(){let n=this.sequences.size>0;n&&Y(16),this.executing=!0;for(let o of rm)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[o]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let i=r.hooks[o];return i(r.pipelinedValue)},r.snapshot))}catch(i){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(i)}this.executing=!1;for(let o of this.sequences)o.afterRun(),o.once&&(this.sequences.delete(o),o.destroy());for(let o of this.deferredRegistrations)this.sequences.add(o);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),n&&Y(17)}register(n){let{view:o}=n;o!==void 0?((o[_n]??=[]).push(n),go(o),o[T]|=8192):this.executing?this.deferredRegistrations.add(n):this.addSequence(n)}addSequence(n){this.sequences.add(n),this.scheduler.notify(7)}unregister(n){this.executing&&this.sequences.has(n)?(n.erroredOrDestroyed=!0,n.pipelinedValue=void 0,n.once=!0):(this.sequences.delete(n),this.deferredRegistrations.delete(n))}maybeTrace(n,o){return o?o.run(na.AFTER_NEXT_RENDER,n):n()}static \u0275prov=S({token:e,providedIn:"root",factory:()=>new e})}return e})(),Hs=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(t,n,o,r,i,s=null){this.impl=t,this.hooks=n,this.view=o,this.once=r,this.snapshot=s,this.unregisterOnDestroy=i?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let t=this.view?.[_n];t&&(this.view[_n]=t.filter(n=>n!==this))}};function oa(e,t){let n=t?.injector??y(ye);return Do("NgAfterNextRender"),mw(e,n,t,!0)}function hw(e){return e instanceof Function?[void 0,void 0,e,void 0]:[e.earlyRead,e.write,e.mixedReadWrite,e.read]}function mw(e,t,n,o){let r=t.get(Mu);r.impl??=t.get(im);let i=t.get(Fn,null,{optional:!0}),s=n?.manualCleanup!==!0?t.get(gt):null,a=t.get(Es,null,{optional:!0}),c=new Hs(r.impl,hw(e),a?.view,o,s,i?.snapshot(null));return r.impl.register(c),c}var gw=new D("",{providedIn:"root",factory:()=>({queue:new Set,isScheduled:!1,scheduler:null})});function sm(e,t,n){let o=e.get(gw);if(Array.isArray(t))for(let r of t)o.queue.add(r),n?.detachedLeaveAnimationFns?.push(r);else o.queue.add(t),n?.detachedLeaveAnimationFns?.push(t);o.scheduler&&o.scheduler(e)}function vw(e,t){for(let[n,o]of t)sm(e,o.animateFns)}function Gp(e,t,n,o){let r=e?.[ur]?.enter;t!==null&&r&&r.has(n.index)&&vw(o,r)}function yo(e,t,n,o,r,i,s,a){if(r!=null){let c,l=!1;nt(r)?c=r:ht(r)&&(l=!0,r=r[tt]);let u=Ke(r);e===0&&o!==null?(Gp(a,o,i,n),s==null?zh(t,o,u):Vs(t,o,u,s||null,!0)):e===1&&o!==null?(Gp(a,o,i,n),Vs(t,o,u,s||null,!0)):e===2?qp(a,i,n,d=>{UC(t,u,l,d)}):e===3&&qp(a,i,n,()=>{t.destroyNode(u)}),c!=null&&Aw(t,e,n,c,i,o,s)}}function yw(e,t){am(e,t),t[tt]=null,t[qe]=null}function bw(e,t,n,o,r,i){o[tt]=r,o[qe]=t,ra(e,o,n,1,r,i)}function am(e,t){t[pt].changeDetectionScheduler?.notify(9),ra(e,t,t[Z],2,null,null)}function Cw(e){let t=e[ho];if(!t)return Ol(e[k],e);for(;t;){let n=null;if(ht(t))n=t[ho];else{let o=t[Fe];o&&(n=o)}if(!n){for(;t&&!t[Ge]&&t!==e;)ht(t)&&Ol(t[k],t),t=t[pe];t===null&&(t=e),ht(t)&&Ol(t[k],t),n=t&&t[Ge]}t=n}}function Iu(e,t){let n=e[fr],o=n.indexOf(t);n.splice(o,1)}function cm(e,t){if(xn(t))return;let n=t[Z];n.destroyNode&&ra(e,t,n,3,null,null),Cw(t)}function Ol(e,t){if(xn(t))return;let n=N(null);try{t[T]&=-129,t[T]|=256,t[Ve]&&qo(t[Ve]),Sw(e,t),Ew(e,t),t[k].type===1&&t[Z].destroy();let o=t[Dn];if(o!==null&&nt(t[pe])){o!==t[pe]&&Iu(o,t);let r=t[In];r!==null&&r.detachView(e)}Bl(t)}finally{N(n)}}function qp(e,t,n,o){let r=e?.[ur];if(r==null||r.leave==null||!r.leave.has(t.index))return o(!1);e&&wo.add(e),sm(n,()=>{if(r.leave&&r.leave.has(t.index)){let s=r.leave.get(t.index),a=[];if(s){for(let c=0;c<s.animateFns.length;c++){let l=s.animateFns[c],{promise:u}=l();a.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),ww(e,o)}else e&&wo.delete(e),o(!1)},r)}function ww(e,t){let n=e[ur]?.running;if(n){n.then(()=>{e[ur].running=void 0,wo.delete(e),t(!0)});return}t(!1)}function Ew(e,t){let n=e.cleanup,o=t[po];if(n!==null)for(let s=0;s<n.length-1;s+=2)if(typeof n[s]=="string"){let a=n[s+3];a>=0?o[a]():o[-a].unsubscribe(),s+=2}else{let a=o[n[s+1]];n[s].call(a)}o!==null&&(t[po]=null);let r=t[Pt];if(r!==null){t[Pt]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let i=t[lr];if(i!==null){t[lr]=null;for(let s of i)s.destroy()}}function Sw(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let o=0;o<n.length;o+=2){let r=t[n[o]];if(!(r instanceof An)){let i=n[o+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){let a=r[i[s]],c=i[s+1];Y(4,a,c);try{c.call(a)}finally{Y(5,a,c)}}else{Y(4,r,i);try{i.call(r)}finally{Y(5,r,i)}}}}}function Dw(e,t,n){return Mw(e,t.parent,n)}function Mw(e,t,n){let o=t;for(;o!==null&&o.type&168;)t=o,o=t.parent;if(o===null)return n[tt];if(tn(o)){let{encapsulation:r}=e.data[o.directiveStart+o.componentOffset];if(r===Lt.None||r===Lt.Emulated)return null}return ot(o,n)}function Iw(e,t,n){return xw(e,t,n)}function _w(e,t,n){return e.type&40?ot(e,n):null}var xw=_w,Yp;function _u(e,t,n,o){let r=Dw(e,o,t),i=t[Z],s=o.parent||t[qe],a=Iw(s,o,t);if(r!=null)if(Array.isArray(n))for(let c=0;c<n.length;c++)Hp(i,r,n[c],a,!1);else Hp(i,r,n,a,!1);Yp!==void 0&&Yp(i,o,t,n,r)}function yr(e,t){if(t!==null){let n=t.type;if(n&3)return ot(t,e);if(n&4)return Ql(-1,e[t.index]);if(n&8){let o=t.child;if(o!==null)return yr(e,o);{let r=e[t.index];return nt(r)?Ql(-1,r):Ke(r)}}else{if(n&128)return yr(e,t.next);if(n&32)return Eu(t,e)()||Ke(e[t.index]);{let o=lm(e,t);if(o!==null){if(Array.isArray(o))return o[0];let r=Gt(e[Ye]);return yr(r,o)}else return yr(e,t.next)}}}return null}function lm(e,t){if(t!==null){let o=e[Ye][qe],r=t.projection;return o.projection[r]}return null}function Ql(e,t){let n=Fe+e+1;if(n<t.length){let o=t[n],r=o[k].firstChild;if(r!==null)return yr(o,r)}return t[en]}function xu(e,t,n,o,r,i,s){for(;n!=null;){let a=o[Xt];if(n.type===128){n=n.next;continue}let c=o[n.index],l=n.type;if(s&&t===0&&(c&&Co(Ke(c),o),n.flags|=2),!pu(n))if(l&8)xu(e,t,n.child,o,r,i,!1),yo(t,e,a,r,c,n,i,o);else if(l&32){let u=Eu(n,o),d;for(;d=u();)yo(t,e,a,r,d,n,i,o);yo(t,e,a,r,c,n,i,o)}else l&16?Tw(e,t,o,n,r,i):yo(t,e,a,r,c,n,i,o);n=s?n.projectionNext:n.next}}function ra(e,t,n,o,r,i){xu(n,o,e.firstChild,t,r,i,!1)}function Tw(e,t,n,o,r,i){let s=n[Ye],c=s[qe].projection[o.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];yo(t,e,n[Xt],r,u,o,i,n)}else{let l=c,u=s[pe];_h(o)&&(l.flags|=128),xu(e,t,l,u,r,i,!0)}}function Aw(e,t,n,o,r,i,s){let a=o[en],c=Ke(o);a!==c&&yo(t,e,n,i,a,r,s);for(let l=Fe;l<o.length;l++){let u=o[l];ra(u[k],u,e,t,i,a)}}function Ow(e,t,n,o,r){if(t)r?e.addClass(n,o):e.removeClass(n,o);else{let i=o.indexOf("-")===-1?void 0:bt.DashCase;r==null?e.removeStyle(n,o,i):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),i|=bt.Important),e.setStyle(n,o,r,i))}}function um(e,t,n,o,r){let i=Nt(),s=o&2;try{nn(-1),s&&t.length>xe&&Xh(e,t,xe,!1),Y(s?2:0,r,n),n(o,r)}finally{nn(i),Y(s?3:1,r,n)}}function Tu(e,t,n){jw(e,t,n),(n.flags&64)===64&&Vw(e,t,n)}function dm(e,t,n=ot){let o=t.localNames;if(o!==null){let r=t.index+1;for(let i=0;i<o.length;i+=2){let s=o[i+1],a=s===-1?n(t,e):e[s];e[r++]=a}}}function Pw(e,t,n,o){let i=o.get(Rh,Ph)||n===Lt.ShadowDom,s=e.selectRootElement(t,i);return Rw(s),s}function Rw(e){kw(e)}var kw=()=>null;function Nw(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function fm(e,t,n,o,r,i){let s=t[k];if(Au(e,s,t,n,o)){tn(e)&&Lw(t,e.index);return}e.type&3&&(n=Nw(n)),Fw(e,t,n,o,r,i)}function Fw(e,t,n,o,r,i){if(e.type&3){let s=ot(e,t);o=i!=null?i(o,e.value||"",n):o,r.setProperty(s,n,o)}else e.type&12}function Lw(e,t){let n=Qe(t,e);n[T]&16||(n[T]|=64)}function jw(e,t,n){let o=n.directiveStart,r=n.directiveEnd;tn(n)&&sw(t,n,e.data[o+n.componentOffset]),e.firstCreatePass||Fs(n,t);let i=n.initialInputs;for(let s=o;s<r;s++){let a=e.data[s],c=Ls(t,e,s,n);if(Co(c,t),i!==null&&Uw(t,s-o,c,a,n,i),mt(a)){let l=Qe(n.index,t);l[Ce]=Ls(t,e,s,n)}}}function Vw(e,t,n){let o=n.directiveStart,r=n.directiveEnd,i=n.index,s=bp();try{nn(i);for(let a=o;a<r;a++){let c=e.data[a],l=t[a];gs(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&Jw(c,l)}}finally{nn(-1),gs(s)}}function Jw(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function pm(e,t){let n=e.directiveRegistry,o=null;if(n)for(let r=0;r<n.length;r++){let i=n[r];ZC(t,i.selectors,!1)&&(o??=[],mt(i)?o.unshift(i):o.push(i))}return o}function Hw(e,t,n,o,r,i){let s=ot(e,t);Bw(t[Z],s,i,e.value,n,o,r)}function Bw(e,t,n,o,r,i,s){if(i==null)e.removeAttribute(t,r,n);else{let a=s==null?Kt(i):s(i,o||"",r);e.setAttribute(t,r,a,n)}}function Uw(e,t,n,o,r,i){let s=i[t];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];ql(o,n,c,l)}}function Ww(e,t,n,o,r){let i=xe+n,s=t[k],a=r(s,t,e,o,n);t[i]=a,vo(e,!0);let c=e.type===2;return c?(Gh(t[Z],a,e),(sp()===0||pr(e))&&Co(a,t),ap()):Co(a,t),Cs()&&(!c||!pu(e))&&_u(s,t,a,e),e}function $w(e){let t=e;return vl()?pp():(t=t.parent,vo(t,!1)),t}function zw(e,t){let n=e[Xt];if(!n)return;let o;try{o=n.get(Je,null)}catch{o=null}o?.(t)}function Au(e,t,n,o,r){let i=e.inputs?.[o],s=e.hostDirectiveInputs?.[o],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1],d=t.data[l];ql(d,n[l],u,r),a=!0}if(i)for(let c of i){let l=n[c],u=t.data[c];ql(u,l,o,r),a=!0}return a}function Gw(e,t){let n=Qe(t,e),o=n[k];qw(o,n);let r=n[tt];r!==null&&n[ar]===null&&(n[ar]=kh(r,n[Xt])),Y(18),Ou(o,n,n[Ce]),Y(19,n[Ce])}function qw(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function Ou(e,t,n){vs(t);try{let o=e.viewQuery;o!==null&&Wl(1,o,n);let r=e.template;r!==null&&um(e,t,r,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[In]?.finishViewCreation(e),e.staticContentQueries&&Nh(e,t),e.staticViewQueries&&Wl(2,e.viewQuery,n);let i=e.components;i!==null&&Yw(t,i)}catch(o){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),o}finally{t[T]&=-5,ys()}}function Yw(e,t){for(let n=0;n<t.length;n++)Gw(e,t[n])}function Kw(e,t,n,o){let r=N(null);try{let i=t.tView,a=e[T]&4096?4096:16,c=Cu(e,i,n,a,null,t,null,null,o?.injector??null,o?.embeddedViewInjector??null,o?.dehydratedView??null),l=e[t.index];c[Dn]=l;let u=e[In];return u!==null&&(c[In]=u.createEmbeddedView(i)),Ou(i,c,n),c}finally{N(r)}}function Kp(e,t){return!t||t.firstChild===null||_h(e)}function Er(e,t,n,o,r=!1){for(;n!==null;){if(n.type===128){n=r?n.projectionNext:n.next;continue}let i=t[n.index];i!==null&&o.push(Ke(i)),nt(i)&&hm(i,o);let s=n.type;if(s&8)Er(e,t,n.child,o);else if(s&32){let a=Eu(n,t),c;for(;c=a();)o.push(c)}else if(s&16){let a=lm(t,n);if(Array.isArray(a))o.push(...a);else{let c=Gt(t[Ye]);Er(c[k],c,a,o,!0)}}n=r?n.projectionNext:n.next}return o}function hm(e,t){for(let n=Fe;n<e.length;n++){let o=e[n],r=o[k].firstChild;r!==null&&Er(o[k],o,r,t)}e[en]!==e[tt]&&t.push(e[en])}function mm(e){if(e[_n]!==null){for(let t of e[_n])t.impl.addSequence(t);e[_n].length=0}}var gm=[];function Qw(e){return e[Ve]??Zw(e)}function Zw(e){let t=gm.pop()??Object.create(eE);return t.lView=e,t}function Xw(e){e.lView[Ve]!==e&&(e.lView=null,gm.push(e))}var eE=F(b({},qn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{go(e.lView)},consumerOnSignalRead(){this.lView[Ve]=this}});function tE(e){let t=e[Ve]??Object.create(nE);return t.lView=e,t}var nE=F(b({},qn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let t=Gt(e.lView);for(;t&&!vm(t[k]);)t=Gt(t);t&&pl(t)},consumerOnSignalRead(){this.lView[Ve]=this}});function vm(e){return e.type!==2}function ym(e){if(e[lr]===null)return;let t=!0;for(;t;){let n=!1;for(let o of e[lr])o.dirty&&(n=!0,o.zone===null||Zone.current===o.zone?o.run():o.zone.run(()=>o.run()));t=n&&!!(e[T]&8192)}}var oE=100;function bm(e,t=0){let o=e[pt].rendererFactory,r=!1;r||o.begin?.();try{rE(e,t)}finally{r||o.end?.()}}function rE(e,t){let n=yl();try{bl(!0),Zl(e,t);let o=0;for(;mr(e);){if(o===oE)throw new w(103,!1);o++,Zl(e,1)}}finally{bl(n)}}function iE(e,t,n,o){if(xn(t))return;let r=t[T],i=!1,s=!1;vs(t);let a=!0,c=null,l=null;i||(vm(e)?(l=Qw(t),c=Kn(l)):Mi()===null?(a=!1,l=tE(t),c=Kn(l)):t[Ve]&&(qo(t[Ve]),t[Ve]=null));try{fl(t),gp(e.bindingStartIndex),n!==null&&um(e,t,n,2,o);let u=(r&3)===3;if(!i)if(u){let p=e.preOrderCheckHooks;p!==null&&Ts(t,p,null)}else{let p=e.preOrderHooks;p!==null&&As(t,p,0,null),Tl(t,0)}if(s||sE(t),ym(t),Cm(t,0),e.contentQueries!==null&&Nh(e,t),!i)if(u){let p=e.contentCheckHooks;p!==null&&Ts(t,p)}else{let p=e.contentHooks;p!==null&&As(t,p,1),Tl(t,1)}cE(e,t);let d=e.components;d!==null&&Em(t,d,0);let v=e.viewQuery;if(v!==null&&Wl(2,v,o),!i)if(u){let p=e.viewCheckHooks;p!==null&&Ts(t,p)}else{let p=e.viewHooks;p!==null&&As(t,p,2),Tl(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[ds]){for(let p of t[ds])p();t[ds]=null}i||(mm(t),t[T]&=-73)}catch(u){throw i||go(t),u}finally{l!==null&&(zo(l,c),a&&Xw(l)),ys()}}function Cm(e,t){for(let n=Th(e);n!==null;n=Ah(n))for(let o=Fe;o<n.length;o++){let r=n[o];wm(r,t)}}function sE(e){for(let t=Th(e);t!==null;t=Ah(t)){if(!(t[T]&2))continue;let n=t[fr];for(let o=0;o<n.length;o++){let r=n[o];pl(r)}}}function aE(e,t,n){Y(18);let o=Qe(t,e);wm(o,n),Y(19,o[Ce])}function wm(e,t){ps(e)&&Zl(e,t)}function Zl(e,t){let o=e[k],r=e[T],i=e[Ve],s=!!(t===0&&r&16);if(s||=!!(r&64&&t===0),s||=!!(r&1024),s||=!!(i?.dirty&&Go(i)),s||=!1,i&&(i.dirty=!1),e[T]&=-9217,s)iE(o,e,o.template,e[Ce]);else if(r&8192){let a=N(null);try{ym(e),Cm(e,1);let c=o.components;c!==null&&Em(e,c,1),mm(e)}finally{N(a)}}}function Em(e,t,n){for(let o=0;o<t.length;o++)aE(e,t[o],n)}function cE(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let o=0;o<n.length;o++){let r=n[o];if(r<0)nn(~r);else{let i=r,s=n[++o],a=n[++o];yp(s,i);let c=t[i];Y(24,c),a(2,c),Y(25,c)}}}finally{nn(-1)}}function Pu(e,t){let n=yl()?64:1088;for(e[pt].changeDetectionScheduler?.notify(t);e;){e[T]|=n;let o=Gt(e);if(mo(e)&&!o)return e;e=o}return null}function Sm(e,t,n,o){return[e,!0,0,t,null,o,null,n,null,null]}function lE(e,t,n,o=!0){let r=t[k];if(uE(r,t,e,n),o){let s=Ql(n,e),a=t[Z],c=a.parentNode(e[en]);c!==null&&bw(r,e[qe],a,t,c,s)}let i=t[ar];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function Xl(e,t){if(e.length<=Fe)return;let n=Fe+t,o=e[n];if(o){let r=o[Dn];r!==null&&r!==e&&Iu(r,o),t>0&&(e[n-1][Ge]=o[Ge]);let i=rr(e,Fe+t);yw(o[k],o);let s=i[In];s!==null&&s.detachView(i[k]),o[pe]=null,o[Ge]=null,o[T]&=-129}return o}function uE(e,t,n,o){let r=Fe+o,i=n.length;o>0&&(n[r-1][Ge]=t),o<i-Fe?(t[Ge]=n[r],Zc(n,Fe+o,t)):(n.push(t),t[Ge]=null),t[pe]=n;let s=t[Dn];s!==null&&n!==s&&Dm(s,t);let a=t[In];a!==null&&a.insertView(e),hs(t),t[T]|=128}function Dm(e,t){let n=e[fr],o=t[pe];if(ht(o))e[T]|=2;else{let r=o[pe][Ye];t[Ye]!==r&&(e[T]|=2)}n===null?e[fr]=[t]:n.push(t)}var on=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let t=this._lView,n=t[k];return Er(n,t,n.firstChild,[])}constructor(t,n){this._lView=t,this._cdRefInjectingView=n}get context(){return this._lView[Ce]}set context(t){this._lView[Ce]=t}get destroyed(){return xn(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[pe];if(nt(t)){let n=t[dr],o=n?n.indexOf(this):-1;o>-1&&(Xl(t,o),rr(n,o))}this._attachedToViewContainer=!1}cm(this._lView[k],this._lView)}onDestroy(t){hl(this._lView,t)}markForCheck(){Pu(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[T]&=-129}reattach(){hs(this._lView),this._lView[T]|=128}detectChanges(){this._lView[T]|=1024,bm(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new w(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=mo(this._lView),n=this._lView[Dn];n!==null&&!t&&Iu(n,this._lView),am(this._lView[k],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new w(902,!1);this._appRef=t;let n=mo(this._lView),o=this._lView[Dn];o!==null&&!n&&Dm(o,this._lView),hs(this._lView)}};var Pr=(()=>{class e{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=dE;constructor(n,o,r){this._declarationLView=n,this._declarationTContainer=o,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(n,o){return this.createEmbeddedViewImpl(n,o)}createEmbeddedViewImpl(n,o,r){let i=Kw(this._declarationLView,this._declarationTContainer,n,{embeddedViewInjector:o,dehydratedView:r});return new on(i)}}return e})();function dE(){return fE(we(),$())}function fE(e,t){return e.type&4?new Pr(t,e,qs(e,t)):null}function Ru(e,t,n,o,r){let i=e.data[t];if(i===null)i=pE(e,t,n,o,r),vp()&&(i.flags|=32);else if(i.type&64){i.type=n,i.value=o,i.attrs=r;let s=fp();i.injectorIndex=s===null?-1:s.injectorIndex}return vo(i,!0),i}function pE(e,t,n,o,r){let i=gl(),s=vl(),a=s?i:i&&i.parent,c=e.data[t]=mE(e,a,n,t,o,r);return hE(e,c,i,s),c}function hE(e,t,n,o){e.firstChild===null&&(e.firstChild=t),n!==null&&(o?n.child==null&&t.parent!==null&&(n.child=t):n.next===null&&(n.next=t,t.prev=n))}function mE(e,t,n,o,r,i){let s=t?t.injectorIndex:-1,a=0;return lp()&&(a|=128),{type:n,index:o,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:i,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var jk=new RegExp(`^(\\d+)*(${CC}|${bC})*(.*)`);var gE=()=>null;function Qp(e,t){return gE(e,t)}var Mm=class{},ia=class{},eu=class{resolveComponentFactory(t){throw new w(917,!1)}},Rr=class{static NULL=new eu},On=class{},Jt=(()=>{class e{destroyNode=null;static __NG_ELEMENT_ID__=()=>vE()}return e})();function vE(){let e=$(),t=we(),n=Qe(t.index,e);return(ht(n)?n:e)[Z]}var Im=(()=>{class e{static \u0275prov=S({token:e,providedIn:"root",factory:()=>null})}return e})();var Os={},tu=class{injector;parentInjector;constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,o){let r=this.injector.get(t,Os,o);return r!==Os||n===Os?r:this.parentInjector.get(t,n,o)}};function Zp(e,t,n){let o=n?e.styles:null,r=n?e.classes:null,i=0;if(t!==null)for(let s=0;s<t.length;s++){let a=t[s];if(typeof a=="number")i=a;else if(i==1)r=rs(r,a);else if(i==2){let c=a,l=t[++s];o=rs(o,c+": "+l+";")}}n?e.styles=o:e.stylesWithoutHost=o,n?e.classes=r:e.classesWithoutHost=r}function _(e,t=0){let n=$();if(n===null)return M(e,t);let o=we();return Dh(o,n,fe(e),t)}function ku(){let e="invalid";throw new Error(e)}function _m(e,t,n,o,r){let i=o===null?null:{"":-1},s=r(e,n);if(s!==null){let a=s,c=null,l=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(s);break}CE(e,t,n,a,i,c,l)}i!==null&&o!==null&&yE(n,o,i)}function yE(e,t,n){let o=e.localNames=[];for(let r=0;r<t.length;r+=2){let i=n[t[r+1]];if(i==null)throw new w(-301,!1);o.push(t[r],i)}}function bE(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function CE(e,t,n,o,r,i,s){let a=o.length,c=!1;for(let v=0;v<a;v++){let p=o[v];!c&&mt(p)&&(c=!0,bE(e,n,v)),Jl(Fs(n,t),e,p.type)}IE(n,e.data.length,a);for(let v=0;v<a;v++){let p=o[v];p.providersResolver&&p.providersResolver(p)}let l=!1,u=!1,d=Zh(e,t,a,null);a>0&&(n.directiveToIndex=new Map);for(let v=0;v<a;v++){let p=o[v];if(n.mergedAttrs=Cr(n.mergedAttrs,p.hostAttrs),EE(e,n,t,d,p),ME(d,p,r),s!==null&&s.has(p)){let[x,W]=s.get(p);n.directiveToIndex.set(p.type,[d,x+n.directiveStart,W+n.directiveStart])}else(i===null||!i.has(p))&&n.directiveToIndex.set(p.type,d);p.contentQueries!==null&&(n.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(n.flags|=64);let C=p.type.prototype;!l&&(C.ngOnChanges||C.ngOnInit||C.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),l=!0),!u&&(C.ngOnChanges||C.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),u=!0),d++}wE(e,n,i)}function wE(e,t,n){for(let o=t.directiveStart;o<t.directiveEnd;o++){let r=e.data[o];if(n===null||!n.has(r))Xp(0,t,r,o),Xp(1,t,r,o),th(t,o,!1);else{let i=n.get(r);eh(0,t,i,o),eh(1,t,i,o),th(t,o,!0)}}}function Xp(e,t,n,o){let r=e===0?n.inputs:n.outputs;for(let i in r)if(r.hasOwnProperty(i)){let s;e===0?s=t.inputs??={}:s=t.outputs??={},s[i]??=[],s[i].push(o),xm(t,i)}}function eh(e,t,n,o){let r=e===0?n.inputs:n.outputs;for(let i in r)if(r.hasOwnProperty(i)){let s=r[i],a;e===0?a=t.hostDirectiveInputs??={}:a=t.hostDirectiveOutputs??={},a[s]??=[],a[s].push(o,i),xm(t,s)}}function xm(e,t){t==="class"?e.flags|=8:t==="style"&&(e.flags|=16)}function th(e,t,n){let{attrs:o,inputs:r,hostDirectiveInputs:i}=e;if(o===null||!n&&r===null||n&&i===null||yu(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let s=null,a=0;for(;a<o.length;){let c=o[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!n&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===t){s??=[],s.push(c,o[a+1]);break}}else if(n&&i.hasOwnProperty(c)){let l=i[c];for(let u=0;u<l.length;u+=2)if(l[u]===t){s??=[],s.push(l[u+1],o[a+1]);break}}a+=2}e.initialInputs??=[],e.initialInputs.push(s)}function EE(e,t,n,o,r){e.data[o]=r;let i=r.factory||(r.factory=zt(r.type,!0)),s=new An(i,mt(r),_,null);e.blueprint[o]=s,n[o]=s,SE(e,t,o,Zh(e,n,r.hostVars,He),r)}function SE(e,t,n,o,r){let i=r.hostBindings;if(i){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let a=~t.index;DE(s)!=a&&s.push(a),s.push(n,o,i)}}function DE(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function ME(e,t,n){if(n){if(t.exportAs)for(let o=0;o<t.exportAs.length;o++)n[t.exportAs[o]]=e;mt(t)&&(n[""]=e)}}function IE(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Tm(e,t,n,o,r,i,s,a){let c=t[k],l=c.consts,u=hr(l,s),d=Ru(c,e,n,o,u);return i&&_m(c,t,d,hr(l,a),r),d.mergedAttrs=Cr(d.mergedAttrs,d.attrs),d.attrs!==null&&Zp(d,d.attrs,!1),d.mergedAttrs!==null&&Zp(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function Am(e,t){mh(e,t),ll(t)&&e.queries.elementEnd(t)}function Nu(e){return Pm(e)?Array.isArray(e)||!(e instanceof Map)&&Symbol.iterator in e:!1}function Om(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{let n=e[Symbol.iterator](),o;for(;!(o=n.next()).done;)t(o.value)}}function Pm(e){return e!==null&&(typeof e=="function"||typeof e=="object")}function _E(e,t,n){return e[t]=n}function jt(e,t,n){if(n===He)return!1;let o=e[t];return Object.is(o,n)?!1:(e[t]=n,!0)}function xE(e,t,n,o){let r=jt(e,t,n);return jt(e,t+1,o)||r}function Pl(e,t,n){return function o(r){let i=tn(e)?Qe(e.index,t):t;Pu(i,5);let s=t[Ce],a=nh(t,s,n,r),c=o.__ngNextListenerFn__;for(;c;)a=nh(t,s,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function nh(e,t,n,o){let r=N(null);try{return Y(6,t,n),n(o)!==!1}catch(i){return zw(e,i),!1}finally{Y(7,t,n),N(r)}}function TE(e,t,n,o,r,i,s,a){let c=pr(e),l=!1,u=null;if(!o&&c&&(u=OE(t,n,i,e.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=s,u.__ngLastListenerFn__=s,l=!0}else{let d=ot(e,n),v=o?o(d):d;EC(n,v,i,a);let p=r.listen(v,i,a);if(!AE(i)){let C=o?x=>o(Ke(x[e.index])):e.index;Rm(C,t,n,i,a,p,!1)}}return l}function AE(e){return e.startsWith("animation")||e.startsWith("transition")}function OE(e,t,n,o){let r=e.cleanup;if(r!=null)for(let i=0;i<r.length-1;i+=2){let s=r[i];if(s===n&&r[i+1]===o){let a=t[po],c=r[i+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(i+=2)}return null}function Rm(e,t,n,o,r,i,s){let a=t.firstCreatePass?ip(t):null,c=rp(n),l=c.length;c.push(r,i),a&&a.push(o,e,l,(l+1)*(s?-1:1))}function oh(e,t,n,o,r,i){let s=t[n],a=t[k],l=a.data[n].outputs[o],d=s[l].subscribe(i);Rm(e.index,a,t,r,i,d,!0)}var nu=Symbol("BINDING");var Bs=class extends Rr{ngModule;constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let n=kt(t);return new Pn(n,this.ngModule)}};function PE(e){return Object.keys(e).map(t=>{let[n,o,r]=e[t],i={propName:n,templateName:t,isSignal:(o&ta.SignalBased)!==0};return r&&(i.transform=r),i})}function RE(e){return Object.keys(e).map(t=>({propName:e[t],templateName:t}))}function kE(e,t,n){let o=t instanceof ie?t:t?.injector;return o&&e.getStandaloneInjector!==null&&(o=e.getStandaloneInjector(o)||o),o?new tu(n,o):n}function NE(e){let t=e.get(On,null);if(t===null)throw new w(407,!1);let n=e.get(Im,null),o=e.get(qt,null);return{rendererFactory:t,sanitizer:n,changeDetectionScheduler:o,ngReflect:!1}}function FE(e,t){let n=km(e);return $h(t,n,n==="svg"?Zf:n==="math"?Xf:null)}function km(e){return(e.selectors[0][0]||"div").toLowerCase()}var Pn=class extends ia{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=PE(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=RE(this.componentDef.outputs),this.cachedOutputs}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=nw(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!n}create(t,n,o,r,i,s){Y(22);let a=N(null);try{let c=this.componentDef,l=LE(o,c,s,i),u=kE(c,r||this.ngModule,t),d=NE(u),v=d.rendererFactory.createRenderer(null,c),p=o?Pw(v,o,c.encapsulation,u):FE(c,v),C=s?.some(rh)||i?.some(H=>typeof H!="function"&&H.bindings.some(rh)),x=Cu(null,l,null,512|Qh(c),null,null,d,v,u,null,kh(p,u,!0));x[xe]=p,vs(x);let W=null;try{let H=Tm(xe,x,2,"#host",()=>l.directiveRegistry,!0,0);Gh(v,p,H),Co(p,x),Tu(l,x,H),Fh(l,H,x),Am(l,H),n!==void 0&&VE(H,this.ngContentSelectors,n),W=Qe(H.index,x),x[Ce]=W[Ce],Ou(l,x,null)}catch(H){throw W!==null&&Bl(W),Bl(x),H}finally{Y(23),ys()}return new Us(this.componentType,x,!!C)}finally{N(a)}}};function LE(e,t,n,o){let r=e?["ng-version","20.3.15"]:ow(t.selectors[0]),i=null,s=null,a=0;if(n)for(let u of n)a+=u[nu].requiredVars,u.create&&(u.targetIdx=0,(i??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(o)for(let u=0;u<o.length;u++){let d=o[u];if(typeof d!="function")for(let v of d.bindings){a+=v[nu].requiredVars;let p=u+1;v.create&&(v.targetIdx=p,(i??=[]).push(v)),v.update&&(v.targetIdx=p,(s??=[]).push(v))}}let c=[t];if(o)for(let u of o){let d=typeof u=="function"?u:u.type,v=nl(d);c.push(v)}return bu(0,null,jE(i,s),1,a,c,null,null,null,[r],null)}function jE(e,t){return!e&&!t?null:n=>{if(n&1&&e)for(let o of e)o.create();if(n&2&&t)for(let o of t)o.update()}}function rh(e){let t=e[nu].kind;return t==="input"||t==="twoWay"}var Us=class extends Mm{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,n,o){super(),this._rootLView=n,this._hasInputBindings=o,this._tNode=fs(n[k],xe),this.location=qs(this._tNode,n),this.instance=Qe(this._tNode.index,n)[Ce],this.hostView=this.changeDetectorRef=new on(n,void 0),this.componentType=t}setInput(t,n){this._hasInputBindings;let o=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let r=this._rootLView,i=Au(o,r[k],r,t,n);this.previousInputValues.set(t,n);let s=Qe(o.index,r);Pu(s,1)}get injector(){return new Tn(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function VE(e,t,n){let o=e.projection=[];for(let r=0;r<t.length;r++){let i=n[r];o.push(i!=null&&i.length?Array.from(i):null)}}var Ln=(()=>{class e{static __NG_ELEMENT_ID__=JE}return e})();function JE(){let e=we();return BE(e,$())}var HE=Ln,Nm=class extends HE{_lContainer;_hostTNode;_hostLView;constructor(t,n,o){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=o}get element(){return qs(this._hostTNode,this._hostLView)}get injector(){return new Tn(this._hostTNode,this._hostLView)}get parentInjector(){let t=cu(this._hostTNode,this._hostLView);if(yh(t)){let n=ks(t,this._hostLView),o=Rs(t),r=n[k].data[o+8];return new Tn(r,n)}else return new Tn(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=ih(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-Fe}createEmbeddedView(t,n,o){let r,i;typeof o=="number"?r=o:o!=null&&(r=o.index,i=o.injector);let s=Qp(this._lContainer,t.ssrId),a=t.createEmbeddedViewImpl(n||{},i,s);return this.insertImpl(a,r,Kp(this._hostTNode,s)),a}createComponent(t,n,o,r,i,s,a){let c=t&&!qb(t),l;if(c)l=n;else{let W=n||{};l=W.index,o=W.injector,r=W.projectableNodes,i=W.environmentInjector||W.ngModuleRef,s=W.directives,a=W.bindings}let u=c?t:new Pn(kt(t)),d=o||this.parentInjector;if(!i&&u.ngModule==null){let H=(c?d:this.parentInjector).get(ie,null);H&&(i=H)}let v=kt(u.componentType??{}),p=Qp(this._lContainer,v?.id??null),C=p?.firstChild??null,x=u.create(d,r,C,i,s,a);return this.insertImpl(x.hostView,l,Kp(this._hostTNode,p)),x}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,o){let r=t._lView;if(tp(r)){let a=this.indexOf(t);if(a!==-1)this.detach(a);else{let c=r[pe],l=new Nm(c,c[qe],c[pe]);l.detach(l.indexOf(t))}}let i=this._adjustIndex(n),s=this._lContainer;return lE(s,r,i,o),t.attachToViewContainerRef(),Zc(Rl(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=ih(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),o=Xl(this._lContainer,n);o&&(rr(Rl(this._lContainer),n),cm(o[k],o))}detach(t){let n=this._adjustIndex(t,-1),o=Xl(this._lContainer,n);return o&&rr(Rl(this._lContainer),n)!=null?new on(o):null}_adjustIndex(t,n=0){return t??this.length+n}};function ih(e){return e[dr]}function Rl(e){return e[dr]||(e[dr]=[])}function BE(e,t){let n,o=t[e.index];return nt(o)?n=o:(n=Sm(o,t,null,e),t[e.index]=n,wu(t,n)),WE(n,t,e,o),new Nm(n,e,t)}function UE(e,t){let n=e[Z],o=n.createComment(""),r=ot(t,e),i=n.parentNode(r);return Vs(n,i,o,n.nextSibling(r),!1),o}var WE=GE,$E=()=>!1;function zE(e,t,n){return $E(e,t,n)}function GE(e,t,n,o){if(e[en])return;let r;n.type&8?r=Ke(o):r=UE(t,n),e[en]=r}function Fm(e){let t=[],n=new Map;function o(r){let i=n.get(r);if(!i){let s=e(r);n.set(r,i=s.then(a=>YE(r,a)))}return i}return Ws.forEach((r,i)=>{let s=[];r.templateUrl&&s.push(o(r.templateUrl).then(l=>{r.template=l}));let a=typeof r.styles=="string"?[r.styles]:r.styles||[];if(r.styles=a,r.styleUrl&&r.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");if(r.styleUrls?.length){let l=r.styles.length,u=r.styleUrls;r.styleUrls.forEach((d,v)=>{a.push(""),s.push(o(d).then(p=>{a[l+v]=p,u.splice(u.indexOf(d),1),u.length==0&&(r.styleUrls=void 0)}))})}else r.styleUrl&&s.push(o(r.styleUrl).then(l=>{a.push(l),r.styleUrl=void 0}));let c=Promise.all(s).then(()=>KE(i));t.push(c)}),Lm(),Promise.all(t).then(()=>{})}var Ws=new Map,qE=new Set;function Lm(){let e=Ws;return Ws=new Map,e}function jm(){return Ws.size===0}function YE(e,t){return typeof t=="string"?t:t.status!==void 0&&t.status!==200?Promise.reject(new w(918,!1)):t.text()}function KE(e){qE.delete(e)}var Rn=class{},sa=class{};var Sr=class extends Rn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Bs(this);constructor(t,n,o,r=!0){super(),this.ngModuleType=t,this._parent=n;let i=tl(t);this._bootstrapComponents=Yh(i.bootstrap),this._r3Injector=Sl(t,n,[{provide:Rn,useValue:this},{provide:Rr,useValue:this.componentFactoryResolver},...o],Rt(t),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},Dr=class extends sa{moduleType;constructor(t){super(),this.moduleType=t}create(t){return new Sr(this.moduleType,t,[])}};function Vm(e,t,n){return new Sr(e,t,n,!1)}var $s=class extends Rn{injector;componentFactoryResolver=new Bs(this);instance=null;constructor(t){super();let n=new Cn([...t.providers,{provide:Rn,useValue:this},{provide:Rr,useValue:this.componentFactoryResolver}],t.parent||sr(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function Mo(e,t,n=null){return new $s({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}var QE=(()=>{class e{_injector;cachedInjectors=new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let o=ol(!1,n.type),r=o.length>0?Mo([o],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n,r)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=S({token:e,providedIn:"environment",factory:()=>new e(M(ie))})}return e})();function ae(e){return Ir(()=>{let t=Jm(e),n=F(b({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===lu.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:t.standalone?r=>r.get(QE).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Lt.Emulated,styles:e.styles||Ie,_:null,schemas:e.schemas||null,tView:null,id:""});t.standalone&&Do("NgStandalone"),Hm(n);let o=e.dependencies;return n.directiveDefs=sh(o,ZE),n.pipeDefs=sh(o,zf),n.id=tS(n),n})}function ZE(e){return kt(e)||nl(e)}function Ee(e){return Ir(()=>({type:e.type,bootstrap:e.bootstrap||Ie,declarations:e.declarations||Ie,imports:e.imports||Ie,exports:e.exports||Ie,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function XE(e,t){if(e==null)return Qt;let n={};for(let o in e)if(e.hasOwnProperty(o)){let r=e[o],i,s,a,c;Array.isArray(r)?(a=r[0],i=r[1],s=r[2]??i,c=r[3]||null):(i=r,s=r,a=ta.None,c=null),n[i]=[o,a,c],t[i]=s}return n}function eS(e){if(e==null)return Qt;let t={};for(let n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function Ae(e){return Ir(()=>{let t=Jm(e);return Hm(t),t})}function Fu(e){return{type:e.type,name:e.name,factory:null,pure:e.pure!==!1,standalone:e.standalone??!0,onDestroy:e.type.prototype.ngOnDestroy||null}}function Jm(e){let t={};return{type:e.type,providersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputConfig:e.inputs||Qt,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||Ie,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:XE(e.inputs,t),outputs:eS(e.outputs),debugInfo:null}}function Hm(e){e.features?.forEach(t=>t(e))}function sh(e,t){return e?()=>{let n=typeof e=="function"?e():e,o=[];for(let r of n){let i=t(r);i!==null&&o.push(i)}return o}:null}function tS(e){let t=0,n=typeof e.consts=="function"?"":e.consts,o=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,n,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let i of o.join("|"))t=Math.imul(31,t)+i.charCodeAt(0)<<0;return t+=2147483648,"c"+t}function nS(e){return Object.getPrototypeOf(e.prototype).constructor}function jn(e){let t=nS(e.type),n=!0,o=[e];for(;t;){let r;if(mt(e))r=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new w(903,!1);r=t.\u0275dir}if(r){if(n){o.push(r);let s=e;s.inputs=kl(e.inputs),s.declaredInputs=kl(e.declaredInputs),s.outputs=kl(e.outputs);let a=r.hostBindings;a&&aS(e,a);let c=r.viewQuery,l=r.contentQueries;if(c&&iS(e,c),l&&sS(e,l),oS(e,r),Jf(e.outputs,r.outputs),mt(r)&&r.data.animation){let u=e.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let i=r.features;if(i)for(let s=0;s<i.length;s++){let a=i[s];a&&a.ngInherit&&a(e),a===jn&&(n=!1)}}t=Object.getPrototypeOf(t)}rS(o)}function oS(e,t){for(let n in t.inputs){if(!t.inputs.hasOwnProperty(n)||e.inputs.hasOwnProperty(n))continue;let o=t.inputs[n];o!==void 0&&(e.inputs[n]=o,e.declaredInputs[n]=t.declaredInputs[n])}}function rS(e){let t=0,n=null;for(let o=e.length-1;o>=0;o--){let r=e[o];r.hostVars=t+=r.hostVars,r.hostAttrs=Cr(r.hostAttrs,n=Cr(n,r.hostAttrs))}}function kl(e){return e===Qt?{}:e===Ie?[]:e}function iS(e,t){let n=e.viewQuery;n?e.viewQuery=(o,r)=>{t(o,r),n(o,r)}:e.viewQuery=t}function sS(e,t){let n=e.contentQueries;n?e.contentQueries=(o,r,i)=>{t(o,r,i),n(o,r,i)}:e.contentQueries=t}function aS(e,t){let n=e.hostBindings;n?e.hostBindings=(o,r)=>{t(o,r),n(o,r)}:e.hostBindings=t}function cS(e,t,n,o,r,i,s,a){if(n.firstCreatePass){e.mergedAttrs=Cr(e.mergedAttrs,e.attrs);let u=e.tView=bu(2,e,r,i,s,n.directiveRegistry,n.pipeRegistry,null,n.schemas,n.consts,null);n.queries!==null&&(n.queries.template(n,e),u.queries=n.queries.embeddedTView(e))}a&&(e.flags|=a),vo(e,!1);let c=uS(n,t,e,o);Cs()&&_u(n,t,c,e),Co(c,t);let l=Sm(c,t,c,e);t[o+xe]=l,wu(t,l),zE(l,e,t)}function lS(e,t,n,o,r,i,s,a,c,l,u){let d=n+xe,v;return t.firstCreatePass?(v=Ru(t,d,4,s||null,a||null),ml()&&_m(t,e,v,hr(t.consts,l),pm),mh(t,v)):v=t.data[d],cS(v,e,t,n,o,r,i,c),pr(v)&&Tu(t,e,v),l!=null&&dm(e,v,u),v}function P(e,t,n,o,r,i,s,a){let c=$(),l=Te(),u=hr(l.consts,i);return lS(c,l,e,t,n,o,r,u,void 0,s,a),P}var uS=dS;function dS(e,t,n,o){return ws(!0),t[Z].createComment("")}var Lu=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})();var aa=new D(""),Io=new D(""),kr=(()=>{class e{_ngZone;registry;_isZoneStable=!0;_callbacks=[];_taskTrackingZone=null;_destroyRef;constructor(n,o,r){this._ngZone=n,this.registry=o,sl()&&(this._destroyRef=y(gt,{optional:!0})??void 0),ju||(Bm(r),r.addToWindow(o)),this._watchAngularEvents(),n.run(()=>{this._taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){let n=this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),o=this._ngZone.runOutsideAngular(()=>this._ngZone.onStable.subscribe({next:()=>{K.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}}));this._destroyRef?.onDestroy(()=>{n.unsubscribe(),o.unsubscribe()})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb()}});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(o=>o.updateCb&&o.updateCb(n)?(clearTimeout(o.timeoutId),!1):!0)}}getPendingTasks(){return this._taskTrackingZone?this._taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,o,r){let i=-1;o&&o>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n()},o)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:r})}whenStable(n,o,r){if(r&&!this._taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,o,r),this._runCallbacksIfReady()}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,o,r){return[]}static \u0275fac=function(o){return new(o||e)(M(K),M(Nr),M(Io))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),Nr=(()=>{class e{_applications=new Map;registerApplication(n,o){this._applications.set(n,o)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,o=!0){return ju?.findTestabilityInTree(this,n,o)??null}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})();function Bm(e){ju=e}var ju;function sn(e){return!!e&&typeof e.then=="function"}function Vu(e){return!!e&&typeof e.subscribe=="function"}var Ju=new D("");function ca(e){return us([{provide:Ju,multi:!0,useValue:e}])}var Hu=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,o)=>{this.resolve=n,this.reject=o});appInits=y(Ju,{optional:!0})??[];injector=y(ye);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let r of this.appInits){let i=be(this.injector,r);if(sn(i))n.push(i);else if(Vu(i)){let s=new Promise((a,c)=>{i.subscribe({complete:a,error:c})});n.push(s)}}let o=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{o()}).catch(r=>{this.reject(r)}),n.length===0&&o(),this.initialized=!0}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),la=new D("");function Um(){mc(()=>{let e="";throw new w(600,e)})}function Wm(e){return e.isBoundToModule}var fS=10;function Bu(e,t){return Array.isArray(t)?t.reduce(Bu,e):b(b({},e),t)}var wt=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=y(Je);afterRenderManager=y(Mu);zonelessEnabled=y(Ss);rootEffectScheduler=y(xl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new te;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=y(Ft);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(J(n=>!n))}constructor(){y(Fn,{optional:!0})}whenStable(){let n;return new Promise(o=>{n=this.isStable.subscribe({next:r=>{r&&o()}})}).finally(()=>{n.unsubscribe()})}_injector=y(ie);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,o){return this.bootstrapImpl(n,o)}bootstrapImpl(n,o,r=ye.NULL){return this._injector.get(K).run(()=>{Y(10);let s=n instanceof ia;if(!this._injector.get(Hu).done){let C="";throw new w(405,C)}let c;s?c=n:c=this._injector.get(Rr).resolveComponentFactory(n),this.componentTypes.push(c.componentType);let l=Wm(c)?void 0:this._injector.get(Rn),u=o||c.selector,d=c.create(r,[],u,l),v=d.location.nativeElement,p=d.injector.get(aa,null);return p?.registerApplication(v),d.onDestroy(()=>{this.detachView(d.hostView),br(this.components,d),p?.unregisterApplication(v)}),this._loadComponent(d),Y(11,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Y(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(na.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new w(101,!1);let n=N(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,N(n),this.afterTick.next(),Y(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(On,null,{optional:!0}));let n=0;for(;this.dirtyFlags!==0&&n++<fS;)Y(14),this.synchronizeOnce(),Y(15)}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let n=!1;if(this.dirtyFlags&7){let o=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!o&&!mr(r))continue;let i=o&&!this.zonelessEnabled?0:1;bm(r,i),n=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}n||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>mr(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let o=n;this._views.push(o),o.attachToAppRef(this)}detachView(n){let o=n;br(this._views,o),o.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(n),this._injector.get(la,[]).forEach(r=>r(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>br(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new w(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function br(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function Fr(e,t,n,o){let r=$(),i=gr();if(jt(r,i,t)){let s=Te(),a=bs();Hw(a,r,e,t,n,o)}return Fr}var $k=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";function E(e,t,n){let o=$(),r=gr();if(jt(o,r,t)){let i=Te(),s=bs();fm(s,o,e,t,o[Z],n)}return E}function ou(e,t,n,o,r){Au(t,e,n,r?"class":"style",o)}function h(e,t,n,o){let r=$(),i=r[k],s=e+xe,a=i.firstCreatePass?Tm(s,r,2,t,pm,ml(),n,o):i.data[s];if(Ww(a,r,e,t,pS),pr(a)){let c=r[k];Tu(c,r,a),Fh(c,a,r)}return o!=null&&dm(r,a),h}function f(){let e=Te(),t=we(),n=$w(t);return e.firstCreatePass&&Am(e,n),up(n)&&dp(),cp(),n.classesWithoutHost!=null&&eC(n)&&ou(e,n,$(),n.classesWithoutHost,!0),n.stylesWithoutHost!=null&&tC(n)&&ou(e,n,$(),n.stylesWithoutHost,!1),f}function Se(e,t,n,o){return h(e,t,n,o),f(),Se}var pS=(e,t,n,o,r)=>(ws(!0),$h(t[Z],o,Mp()));function Et(){return $()}var Lr="en-US";var hS=Lr;function $m(e){typeof e=="string"&&(hS=e.toLowerCase().replace(/_/g,"-"))}function q(e,t,n){let o=$(),r=Te(),i=we();return zm(r,o,o[Z],i,e,t,n),q}function zm(e,t,n,o,r,i,s){let a=!0,c=null;if((o.type&3||s)&&(c??=Pl(o,t,i),TE(o,e,t,s,n,r,i,c)&&(a=!1)),a){let l=o.outputs?.[r],u=o.hostDirectiveOutputs?.[r];if(u&&u.length)for(let d=0;d<u.length;d+=2){let v=u[d],p=u[d+1];c??=Pl(o,t,i),oh(o,t,v,p,r,c)}if(l&&l.length)for(let d of l)c??=Pl(o,t,i),oh(o,t,d,r,r,c)}}function R(e=1){return Dp(e)}function _s(e,t){return e<<17|t<<2}function kn(e){return e>>17&32767}function mS(e){return(e&2)==2}function gS(e,t){return e&131071|t<<17}function ru(e){return e|2}function Eo(e){return(e&131068)>>2}function Nl(e,t){return e&-131069|t<<2}function vS(e){return(e&1)===1}function iu(e){return e|1}function yS(e,t,n,o,r,i){let s=i?t.classBindings:t.styleBindings,a=kn(s),c=Eo(s);e[o]=n;let l=!1,u;if(Array.isArray(n)){let d=n;u=d[1],(u===null||fo(d,u)>0)&&(l=!0)}else u=n;if(r)if(c!==0){let v=kn(e[a+1]);e[o+1]=_s(v,a),v!==0&&(e[v+1]=Nl(e[v+1],o)),e[a+1]=gS(e[a+1],o)}else e[o+1]=_s(a,0),a!==0&&(e[a+1]=Nl(e[a+1],o)),a=o;else e[o+1]=_s(c,0),a===0?a=o:e[c+1]=Nl(e[c+1],o),c=o;l&&(e[o+1]=ru(e[o+1])),ah(e,u,o,!0),ah(e,u,o,!1),bS(t,u,e,o,i),s=_s(a,c),i?t.classBindings=s:t.styleBindings=s}function bS(e,t,n,o,r){let i=r?e.residualClasses:e.residualStyles;i!=null&&typeof t=="string"&&fo(i,t)>=0&&(n[o+1]=iu(n[o+1]))}function ah(e,t,n,o){let r=e[n+1],i=t===null,s=o?kn(r):Eo(r),a=!1;for(;s!==0&&(a===!1||i);){let c=e[s],l=e[s+1];CS(c,t)&&(a=!0,e[s+1]=o?iu(l):ru(l)),s=o?kn(l):Eo(l)}a&&(e[n+1]=o?ru(r):iu(r))}function CS(e,t){return e===null||t==null||(Array.isArray(e)?e[1]:e)===t?!0:Array.isArray(e)&&typeof t=="string"?fo(e,t)>=0:!1}var at={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function wS(e){return e.substring(at.key,at.keyEnd)}function ES(e){return SS(e),Gm(e,qm(e,0,at.textEnd))}function Gm(e,t){let n=at.textEnd;return n===t?-1:(t=at.keyEnd=DS(e,at.key=t,n),qm(e,t,n))}function SS(e){at.key=0,at.keyEnd=0,at.value=0,at.valueEnd=0,at.textEnd=e.length}function qm(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}function DS(e,t,n){for(;t<n&&e.charCodeAt(t)>32;)t++;return t}function _o(e,t,n){return Ym(e,t,n,!1),_o}function ce(e,t){return Ym(e,t,null,!0),ce}function Uu(e){IS(PS,MS,e,!0)}function MS(e,t){for(let n=ES(t);n>=0;n=Gm(t,n))cs(e,wS(t),!0)}function Ym(e,t,n,o){let r=$(),i=Te(),s=ms(2);if(i.firstUpdatePass&&Qm(i,e,s,o),t!==He&&jt(r,s,t)){let a=i.data[Nt()];Zm(i,a,r,r[Z],e,r[s+1]=kS(t,n),o,s)}}function IS(e,t,n,o){let r=Te(),i=ms(2);r.firstUpdatePass&&Qm(r,null,i,o);let s=$();if(n!==He&&jt(s,i,n)){let a=r.data[Nt()];if(Xm(a,o)&&!Km(r,i)){let c=o?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(n=rs(c,n||"")),ou(r,a,s,n,o)}else RS(r,a,s,s[Z],s[i+1],s[i+1]=OS(e,t,n),o,i)}}function Km(e,t){return t>=e.expandoStartIndex}function Qm(e,t,n,o){let r=e.data;if(r[n+1]===null){let i=r[Nt()],s=Km(e,n);Xm(i,o)&&t===null&&!s&&(t=!1),t=_S(r,i,t,o),yS(r,i,t,n,s,o)}}function _S(e,t,n,o){let r=Cp(e),i=o?t.residualClasses:t.residualStyles;if(r===null)(o?t.classBindings:t.styleBindings)===0&&(n=Fl(null,e,t,n,o),n=Mr(n,t.attrs,o),i=null);else{let s=t.directiveStylingLast;if(s===-1||e[s]!==r)if(n=Fl(r,e,t,n,o),i===null){let c=xS(e,t,o);c!==void 0&&Array.isArray(c)&&(c=Fl(null,e,t,c[1],o),c=Mr(c,t.attrs,o),TS(e,t,o,c))}else i=AS(e,t,o)}return i!==void 0&&(o?t.residualClasses=i:t.residualStyles=i),n}function xS(e,t,n){let o=n?t.classBindings:t.styleBindings;if(Eo(o)!==0)return e[kn(o)]}function TS(e,t,n,o){let r=n?t.classBindings:t.styleBindings;e[kn(r)]=o}function AS(e,t,n){let o,r=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<r;i++){let s=e[i].hostAttrs;o=Mr(o,s,n)}return Mr(o,t.attrs,n)}function Fl(e,t,n,o,r){let i=null,s=n.directiveEnd,a=n.directiveStylingLast;for(a===-1?a=n.directiveStart:a++;a<s&&(i=t[a],o=Mr(o,i.hostAttrs,r),i!==e);)a++;return e!==null&&(n.directiveStylingLast=a),o}function Mr(e,t,n){let o=n?1:2,r=-1;if(t!==null)for(let i=0;i<t.length;i++){let s=t[i];typeof s=="number"?r=s:r===o&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),cs(e,s,n?!0:t[++i]))}return e===void 0?null:e}function OS(e,t,n){if(n==null||n==="")return Ie;let o=[],r=Nn(n);if(Array.isArray(r))for(let i=0;i<r.length;i++)e(o,r[i],!0);else if(typeof r=="object")for(let i in r)r.hasOwnProperty(i)&&e(o,i,r[i]);else typeof r=="string"&&t(o,r);return o}function PS(e,t,n){let o=String(t);o!==""&&!o.includes(" ")&&cs(e,o,n)}function RS(e,t,n,o,r,i,s,a){r===He&&(r=Ie);let c=0,l=0,u=0<r.length?r[0]:null,d=0<i.length?i[0]:null;for(;u!==null||d!==null;){let v=c<r.length?r[c+1]:void 0,p=l<i.length?i[l+1]:void 0,C=null,x;u===d?(c+=2,l+=2,v!==p&&(C=d,x=p)):d===null||u!==null&&u<d?(c+=2,C=u):(l+=2,C=d,x=p),C!==null&&Zm(e,t,n,o,C,x,s,a),u=c<r.length?r[c]:null,d=l<i.length?i[l]:null}}function Zm(e,t,n,o,r,i,s,a){if(!(t.type&3))return;let c=e.data,l=c[a+1],u=vS(l)?ch(c,t,n,r,Eo(l),s):void 0;if(!zs(u)){zs(i)||mS(l)&&(i=ch(c,null,n,r,a,s));let d=ul(Nt(),n);Ow(o,s,d,r,i)}}function ch(e,t,n,o,r,i){let s=t===null,a;for(;r>0;){let c=e[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,v=n[r+1];v===He&&(v=d?Ie:void 0);let p=d?ls(v,o):u===o?v:void 0;if(l&&!zs(p)&&(p=ls(c,o)),zs(p)&&(a=p,s))return a;let C=e[r+1];r=s?kn(C):Eo(C)}if(t!==null){let c=i?t.residualClasses:t.residualStyles;c!=null&&(a=ls(c,o))}return a}function zs(e){return e!==void 0}function kS(e,t){return e==null||e===""||(typeof t=="string"?e=e+t:typeof e=="object"&&(e=Rt(Nn(e)))),e}function Xm(e,t){return(e.flags&(t?8:16))!==0}function m(e,t=""){let n=$(),o=Te(),r=e+xe,i=o.firstCreatePass?Ru(o,r,1,t,null):o.data[r],s=NS(o,n,i,t,e);n[r]=s,Cs()&&_u(o,n,s,i),vo(i,!1)}var NS=(e,t,n,o,r)=>(ws(!0),HC(t[Z],o));function FS(e,t,n,o=""){return jt(e,gr(),n)?t+Kt(n)+o:He}function LS(e,t,n,o,r,i=""){let s=mp(),a=xE(e,s,n,r);return ms(2),a?t+Kt(n)+o+Kt(r)+i:He}function j(e){return Be("",e),j}function Be(e,t,n){let o=$(),r=FS(o,e,t,n);return r!==He&&eg(o,Nt(),r),Be}function Ht(e,t,n,o,r){let i=$(),s=LS(i,e,t,n,o,r);return s!==He&&eg(i,Nt(),s),Ht}function eg(e,t,n){let o=ul(t,e);BC(e[Z],o,n)}function ua(e,t,n){Ml(t)&&(t=t());let o=$(),r=gr();if(jt(o,r,t)){let i=Te(),s=bs();fm(s,o,e,t,o[Z],n)}return ua}function Wu(e,t){let n=Ml(e);return n&&e.set(t),n}function da(e,t){let n=$(),o=Te(),r=we();return zm(o,n,n[Z],r,e,t),da}function jS(e,t,n){let o=Te();if(o.firstCreatePass){let r=mt(e);su(n,o.data,o.blueprint,r,!0),su(t,o.data,o.blueprint,r,!1)}}function su(e,t,n,o,r){if(e=fe(e),Array.isArray(e))for(let i=0;i<e.length;i++)su(e[i],t,n,o,r);else{let i=Te(),s=$(),a=we(),c=bn(e)?e:fe(e.provide),l=il(e),u=a.providerIndexes&1048575,d=a.directiveStart,v=a.providerIndexes>>20;if(bn(e)||!e.multi){let p=new An(l,r,_,null),C=jl(c,t,r?u:u+v,d);C===-1?(Jl(Fs(a,s),i,c),Ll(i,e,t.length),t.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),n.push(p),s.push(p)):(n[C]=p,s[C]=p)}else{let p=jl(c,t,u+v,d),C=jl(c,t,u,u+v),x=p>=0&&n[p],W=C>=0&&n[C];if(r&&!W||!r&&!x){Jl(Fs(a,s),i,c);let H=HS(r?JS:VS,n.length,r,o,l,e);!r&&W&&(n[C].providerFactory=H),Ll(i,e,t.length,0),t.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),n.push(H),s.push(H)}else{let H=tg(n[r?C:p],l,!r&&o);Ll(i,e,p>-1?p:C,H)}!r&&o&&W&&n[C].componentProviders++}}}function Ll(e,t,n,o){let r=bn(t),i=Kf(t);if(r||i){let c=(i?fe(t.useClass):t).prototype.ngOnDestroy;if(c){let l=e.destroyHooks||(e.destroyHooks=[]);if(!r&&t.multi){let u=l.indexOf(n);u===-1?l.push(n,[o,c]):l[u+1].push(o,c)}else l.push(n,c)}}}function tg(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function jl(e,t,n,o){for(let r=n;r<o;r++)if(t[r]===e)return r;return-1}function VS(e,t,n,o,r){return au(this.multi,[])}function JS(e,t,n,o,r){let i=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=Ls(o,o[k],this.providerFactory.index,r);s=c.slice(0,a),au(i,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],au(i,s);return s}function au(e,t){for(let n=0;n<e.length;n++){let o=e[n];t.push(o())}return t}function HS(e,t,n,o,r,i){let s=new An(e,n,_,null);return s.multi=[],s.index=t,s.componentProviders=0,tg(s,r,o&&!n),s}function fa(e,t=[]){return n=>{n.providersResolver=(o,r)=>jS(o,r?r(e):e,t)}}function BS(e,t){let n=e[t];return n===He?void 0:n}function US(e,t,n,o,r,i){let s=t+n;return jt(e,s,r)?_E(e,s+1,i?o.call(i,r):o(r)):BS(e,s+1)}function $u(e,t){let n=Te(),o,r=e+xe;n.firstCreatePass?(o=WS(t,n.pipeRegistry),n.data[r]=o,o.onDestroy&&(n.destroyHooks??=[]).push(r,o.onDestroy)):o=n.data[r];let i=o.factory||(o.factory=zt(o.type,!0)),s,a=Me(_);try{let c=Ns(!1),l=i();return Ns(c),dl(n,$(),r,l),l}finally{Me(a)}}function WS(e,t){if(t)for(let n=t.length-1;n>=0;n--){let o=t[n];if(e===o.name)return o}}function zu(e,t,n){let o=e+xe,r=$(),i=ep(r,o);return $S(r,o)?US(r,hp(),t,i.transform,n,i):i.transform(n)}function $S(e,t){return e[k].data[t].pure}var xs=null;function ng(e){xs!==null&&(e.defaultEncapsulation!==xs.defaultEncapsulation||e.preserveWhitespaces!==xs.preserveWhitespaces)||(xs=e)}var Gs=class{ngModuleFactory;componentFactories;constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}},Gu=(()=>{class e{compileModuleSync(n){return new Dr(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){let o=this.compileModuleSync(n),r=tl(n),i=Yh(r.declarations).reduce((s,a)=>{let c=kt(a);return c&&s.push(new Pn(c)),s},[]);return new Gs(o,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),og=new D("");var zS=(()=>{class e{zone=y(K);changeDetectionScheduler=y(qt);applicationRef=y(wt);applicationErrorHandler=y(Je);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(n){this.applicationErrorHandler(n)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function rg({ngZoneFactory:e,ignoreChangesOutsideZone:t,scheduleInRootZone:n}){return e??=()=>new K(F(b({},qu()),{scheduleInRootZone:n})),[{provide:K,useFactory:e},{provide:Zt,multi:!0,useFactory:()=>{let o=y(zS,{optional:!0});return()=>o.initialize()}},{provide:Zt,multi:!0,useFactory:()=>{let o=y(GS);return()=>{o.initialize()}}},t===!0?{provide:Il,useValue:!0}:[],{provide:_l,useValue:n??em},{provide:Je,useFactory:()=>{let o=y(K),r=y(ie),i;return s=>{o.runOutsideAngular(()=>{r.destroyed&&!i?setTimeout(()=>{throw s}):(i??=r.get(et),i.handleError(s))})}}}]}function qu(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:e?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:e?.runCoalescing??!1}}var GS=(()=>{class e{subscription=new ee;initialized=!1;zone=y(K);pendingTasks=y(Ft);initialize(){if(this.initialized)return;this.initialized=!0;let n=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(n=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{K.assertNotInAngularZone(),queueMicrotask(()=>{n!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(n),n=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{K.assertInAngularZone(),n??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ig=(()=>{class e{applicationErrorHandler=y(Je);appRef=y(wt);taskService=y(Ft);ngZone=y(K);zonelessEnabled=y(Ss);tracing=y(Fn,{optional:!0});disableScheduling=y(Il,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ee;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Js):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(y(_l,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof wr||!this.zoneIsDefined)}notify(n){if(!this.zonelessEnabled&&n===5)return;let o=!1;switch(n){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,o=!0;break}case 12:{this.appRef.dirtyFlags|=16,o=!0;break}case 13:{this.appRef.dirtyFlags|=2,o=!0;break}case 11:{o=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(o))return;let r=this.useMicrotaskScheduler?Wp:tm;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(n){return!(this.disableScheduling&&!n||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Js+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(o){this.taskService.remove(n),this.applicationErrorHandler(o)}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Wp(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function qS(){return typeof $localize<"u"&&$localize.locale||Lr}var pa=new D("",{providedIn:"root",factory:()=>y(pa,{optional:!0,skipSelf:!0})||qS()});function me(e){return Lf(e)}function jr(e,t){return Ti(e,t?.equal)}var sg=class{[ve];constructor(t){this[ve]=t}destroy(){this[ve].destroy()}};var hg=Symbol("InputSignalNode#UNSET"),cD=F(b({},Ai),{transformFn:void 0,applyValueToInputSignal(e,t){Zn(e,t)}});function mg(e,t){let n=Object.create(cD);n.value=e,n.transformFn=t?.transform;function o(){if(Yn(n),n.value===hg){let r=null;throw new w(-950,r)}return n.value}return o[ve]=n,o}var ha=class{attributeName;constructor(t){this.attributeName=t}__NG_ELEMENT_ID__=()=>_r(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},lD=new D("");lD.__NG_ELEMENT_ID__=e=>{let t=we();if(t===null)throw new w(204,!1);if(t.type&2)return t.value;if(e&8)return null;throw new w(204,!1)};function ag(e,t){return mg(e,t)}function uD(e){return mg(hg,e)}var gg=(ag.required=uD,ag);function dD(e,t,n){let o=new Dr(n);return Promise.resolve(o)}function cg(e){for(let t=e.length-1;t>=0;t--)if(e[t]!==void 0)return e[t]}var ma=new D(""),fD=new D("");function Vr(e){return!e.moduleRef}function pD(e){let t=Vr(e)?e.r3Injector:e.moduleRef.injector,n=t.get(K);return n.run(()=>{Vr(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let o=t.get(Je),r;if(n.runOutsideAngular(()=>{r=n.onError.subscribe({next:o})}),Vr(e)){let i=()=>t.destroy(),s=e.platformInjector.get(ma);s.add(i),t.onDestroy(()=>{r.unsubscribe(),s.delete(i)})}else{let i=()=>e.moduleRef.destroy(),s=e.platformInjector.get(ma);s.add(i),e.moduleRef.onDestroy(()=>{br(e.allPlatformModules,e.moduleRef),r.unsubscribe(),s.delete(i)})}return mD(o,n,()=>{let i=t.get(Ft),s=i.add(),a=t.get(Hu);return a.runInitializers(),a.donePromise.then(()=>{let c=t.get(pa,Lr);if($m(c||Lr),!t.get(fD,!0))return Vr(e)?t.get(wt):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(Vr(e)){let u=t.get(wt);return e.rootComponent!==void 0&&u.bootstrap(e.rootComponent),u}else return vg?.(e.moduleRef,e.allPlatformModules),e.moduleRef}).finally(()=>void i.remove(s))})})}var vg;function lg(){vg=hD}function hD(e,t){let n=e.injector.get(wt);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(o=>n.bootstrap(o));else if(e.instance.ngDoBootstrap)e.instance.ngDoBootstrap(n);else throw new w(-403,!1);t.push(e)}function mD(e,t,n){try{let o=n();return sn(o)?o.catch(r=>{throw t.runOutsideAngular(()=>e(r)),r}):o}catch(o){throw t.runOutsideAngular(()=>e(o)),o}}var yg=(()=>{class e{_injector;_modules=[];_destroyListeners=[];_destroyed=!1;constructor(n){this._injector=n}bootstrapModuleFactory(n,o){let r=o?.scheduleInRootZone,i=()=>om(o?.ngZone,F(b({},qu({eventCoalescing:o?.ngZoneEventCoalescing,runCoalescing:o?.ngZoneRunCoalescing})),{scheduleInRootZone:r})),s=o?.ignoreChangesOutsideZone,a=[rg({ngZoneFactory:i,ignoreChangesOutsideZone:s}),{provide:qt,useExisting:ig},_p],c=Vm(n.moduleType,this.injector,a);return lg(),pD({moduleRef:c,allPlatformModules:this._modules,platformInjector:this.injector})}bootstrapModule(n,o=[]){let r=Bu({},o);return lg(),dD(this.injector,r,n).then(i=>this.bootstrapModuleFactory(i,r))}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new w(404,!1);this._modules.slice().forEach(o=>o.destroy()),this._destroyListeners.forEach(o=>o());let n=this._injector.get(ma,null);n&&(n.forEach(o=>o()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static \u0275fac=function(o){return new(o||e)(M(ye))};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})(),Xu=null;function gD(e){if(td())throw new w(400,!1);Um(),Xu=e;let t=e.get(yg);return bD(e),t}function ed(e,t,n=[]){let o=`Platform: ${t}`,r=new D(o);return(i=[])=>{let s=td();if(!s){let a=[...n,...i,{provide:r,useValue:!0}];s=e?.(a)??gD(vD(a,o))}return yD(r)}}function vD(e=[],t){return ye.create({name:t,providers:[{provide:ir,useValue:"platform"},{provide:ma,useValue:new Set([()=>Xu=null])},...e]})}function yD(e){let t=td();if(!t)throw new w(-401,!1);return t}function td(){return Xu?.get(yg)??null}function bD(e){let t=e.get(Ks,null);be(e,()=>{t?.forEach(n=>n())})}var Vn=(()=>{class e{static __NG_ELEMENT_ID__=CD}return e})();function CD(e){return wD(we(),$(),(e&16)===16)}function wD(e,t,n){if(tn(e)&&!n){let o=Qe(e.index,t);return new on(o,o)}else if(e.type&175){let o=t[Ye];return new on(o,t)}return null}var Yu=class{constructor(){}supports(t){return Nu(t)}create(t){return new Ku(t)}},ED=(e,t)=>t,Ku=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(t){this._trackByFn=t||ED}forEachItem(t){let n;for(n=this._itHead;n!==null;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,o=this._removalsHead,r=0,i=null;for(;n||o;){let s=!o||n&&n.currentIndex<ug(o,r,i)?n:o,a=ug(s,r,i),c=s.currentIndex;if(s===o)r--,o=o._nextRemoved;else if(n=n._next,s.previousIndex==null)r++;else{i||(i=[]);let l=a-r,u=c-r;if(l!=u){for(let v=0;v<l;v++){let p=v<i.length?i[v]:i[v]=0,C=p+v;u<=C&&C<l&&(i[v]=p+1)}let d=s.previousIndex;i[d]=u-l}}a!==c&&t(s,a,c)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;n!==null;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;n!==null;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;n!==null;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;n!==null;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;n!==null;n=n._nextIdentityChange)t(n)}diff(t){if(t==null&&(t=[]),!Nu(t))throw new w(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._itHead,o=!1,r,i,s;if(Array.isArray(t)){this.length=t.length;for(let a=0;a<this.length;a++)i=t[a],s=this._trackByFn(a,i),n===null||!Object.is(n.trackById,s)?(n=this._mismatch(n,i,s,a),o=!0):(o&&(n=this._verifyReinsertion(n,i,s,a)),Object.is(n.item,i)||this._addIdentityChange(n,i)),n=n._next}else r=0,Om(t,a=>{s=this._trackByFn(r,a),n===null||!Object.is(n.trackById,s)?(n=this._mismatch(n,a,s,r),o=!0):(o&&(n=this._verifyReinsertion(n,a,s,r)),Object.is(n.item,a)||this._addIdentityChange(n,a)),n=n._next,r++}),this.length=r;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;t!==null;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;t!==null;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;t!==null;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,o,r){let i;return t===null?i=this._itTail:(i=t._prev,this._remove(t)),t=this._unlinkedRecords===null?null:this._unlinkedRecords.get(o,null),t!==null?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,r)):(t=this._linkedRecords===null?null:this._linkedRecords.get(o,r),t!==null?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,r)):t=this._addAfter(new Qu(n,o),i,r)),t}_verifyReinsertion(t,n,o,r){let i=this._unlinkedRecords===null?null:this._unlinkedRecords.get(o,null);return i!==null?t=this._reinsertAfter(i,t._prev,r):t.currentIndex!=r&&(t.currentIndex=r,this._addToMoves(t,r)),t}_truncate(t){for(;t!==null;){let n=t._next;this._addToRemovals(this._unlink(t)),t=n}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,o){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(t);let r=t._prevRemoved,i=t._nextRemoved;return r===null?this._removalsHead=i:r._nextRemoved=i,i===null?this._removalsTail=r:i._prevRemoved=r,this._insertAfter(t,n,o),this._addToMoves(t,o),t}_moveAfter(t,n,o){return this._unlink(t),this._insertAfter(t,n,o),this._addToMoves(t,o),t}_addAfter(t,n,o){return this._insertAfter(t,n,o),this._additionsTail===null?this._additionsTail=this._additionsHead=t:this._additionsTail=this._additionsTail._nextAdded=t,t}_insertAfter(t,n,o){let r=n===null?this._itHead:n._next;return t._next=r,t._prev=n,r===null?this._itTail=t:r._prev=t,n===null?this._itHead=t:n._next=t,this._linkedRecords===null&&(this._linkedRecords=new ga),this._linkedRecords.put(t),t.currentIndex=o,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){this._linkedRecords!==null&&this._linkedRecords.remove(t);let n=t._prev,o=t._next;return n===null?this._itHead=o:n._next=o,o===null?this._itTail=n:o._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail===null?this._movesTail=this._movesHead=t:this._movesTail=this._movesTail._nextMoved=t),t}_addToRemovals(t){return this._unlinkedRecords===null&&(this._unlinkedRecords=new ga),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=t:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=t,t}},Qu=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(t,n){this.item=t,this.trackById=n}},Zu=class{_head=null;_tail=null;add(t){this._head===null?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let o;for(o=this._head;o!==null;o=o._nextDup)if((n===null||n<=o.currentIndex)&&Object.is(o.trackById,t))return o;return null}remove(t){let n=t._prevDup,o=t._nextDup;return n===null?this._head=o:n._nextDup=o,o===null?this._tail=n:o._prevDup=n,this._head===null}},ga=class{map=new Map;put(t){let n=t.trackById,o=this.map.get(n);o||(o=new Zu,this.map.set(n,o)),o.add(t)}get(t,n){let o=t,r=this.map.get(o);return r?r.get(t,n):null}remove(t){let n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function ug(e,t,n){let o=e.previousIndex;if(o===null)return o;let r=0;return n&&o<n.length&&(r=n[o]),o+t+r}function dg(){return new nd([new Yu])}var nd=(()=>{class e{factories;static \u0275prov=S({token:e,providedIn:"root",factory:dg});constructor(n){this.factories=n}static create(n,o){if(o!=null){let r=o.factories.slice();n=n.concat(r)}return new e(n)}static extend(n){return{provide:e,useFactory:()=>{let o=y(e,{optional:!0,skipSelf:!0});return e.create(n,o||dg())}}}find(n){let o=this.factories.find(r=>r.supports(n));if(o!=null)return o;throw new w(901,!1)}}return e})();var bg=ed(null,"core",[]),Cg=(()=>{class e{constructor(n){}static \u0275fac=function(o){return new(o||e)(M(wt))};static \u0275mod=Ee({type:e});static \u0275inj=he({})}return e})();function Jn(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}function wg(e){let t=kt(e);if(!t)return null;let n=new Pn(t);return{get selector(){return n.selector},get type(){return n.componentType},get inputs(){return n.inputs},get outputs(){return n.outputs},get ngContentSelectors(){return n.ngContentSelectors},get isStandalone(){return t.standalone},get isSignal(){return t.signals}}}var Dg=null;function Ue(){return Dg}function od(e){Dg??=e}var Jr=class{},Hr=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:()=>y(Mg),providedIn:"platform"})}return e})(),rd=new D(""),Mg=(()=>{class e extends Hr{_location;_history;_doc=y(oe);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ue().getBaseHref(this._doc)}onPopState(n){let o=Ue().getGlobalEventTarget(this._doc,"window");return o.addEventListener("popstate",n,!1),()=>o.removeEventListener("popstate",n)}onHashChange(n){let o=Ue().getGlobalEventTarget(this._doc,"window");return o.addEventListener("hashchange",n,!1),()=>o.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,o,r){this._history.pushState(n,o,r)}replaceState(n,o,r){this._history.replaceState(n,o,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function va(e,t){return e?t?e.endsWith("/")?t.startsWith("/")?e+t.slice(1):e+t:t.startsWith("/")?e+t:`${e}/${t}`:e:t}function Eg(e){let t=e.search(/#|\?|$/);return e[t-1]==="/"?e.slice(0,t-1)+e.slice(t):e}function ct(e){return e&&e[0]!=="?"?`?${e}`:e}var lt=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:()=>y(ba),providedIn:"root"})}return e})(),ya=new D(""),ba=(()=>{class e extends lt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(n,o){super(),this._platformLocation=n,this._baseHref=o??this._platformLocation.getBaseHrefFromDOM()??y(oe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return va(this._baseHref,n)}path(n=!1){let o=this._platformLocation.pathname+ct(this._platformLocation.search),r=this._platformLocation.hash;return r&&n?`${o}${r}`:o}pushState(n,o,r,i){let s=this.prepareExternalUrl(r+ct(i));this._platformLocation.pushState(n,o,s)}replaceState(n,o,r,i){let s=this.prepareExternalUrl(r+ct(i));this._platformLocation.replaceState(n,o,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static \u0275fac=function(o){return new(o||e)(M(Hr),M(ya,8))};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),St=(()=>{class e{_subject=new te;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(n){this._locationStrategy=n;let o=this._locationStrategy.getBaseHref();this._basePath=MD(Eg(Sg(o))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,o=""){return this.path()==this.normalize(n+ct(o))}normalize(n){return e.stripTrailingSlash(DD(this._basePath,Sg(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,o="",r=null){this._locationStrategy.pushState(r,"",n,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+ct(o)),r)}replaceState(n,o="",r=null){this._locationStrategy.replaceState(r,"",n,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+ct(o)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(o=>{this._notifyUrlChangeListeners(o.url,o.state)}),()=>{let o=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(o,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",o){this._urlChangeListeners.forEach(r=>r(n,o))}subscribe(n,o,r){return this._subject.subscribe({next:n,error:o??void 0,complete:r??void 0})}static normalizeQueryParams=ct;static joinWithSlash=va;static stripTrailingSlash=Eg;static \u0275fac=function(o){return new(o||e)(M(lt))};static \u0275prov=S({token:e,factory:()=>SD(),providedIn:"root"})}return e})();function SD(){return new St(M(lt))}function DD(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function Sg(e){return e.replace(/\/index.html$/,"")}function MD(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}var sd=(()=>{class e extends lt{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(n,o){super(),this._platformLocation=n,o!=null&&(this._baseHref=o)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let o=this._platformLocation.hash??"#";return o.length>0?o.substring(1):o}prepareExternalUrl(n){let o=va(this._baseHref,n);return o.length>0?"#"+o:o}pushState(n,o,r,i){let s=this.prepareExternalUrl(r+ct(i))||this._platformLocation.pathname;this._platformLocation.pushState(n,o,s)}replaceState(n,o,r,i){let s=this.prepareExternalUrl(r+ct(i))||this._platformLocation.pathname;this._platformLocation.replaceState(n,o,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static \u0275fac=function(o){return new(o||e)(M(Hr),M(ya,8))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var id=/\s+/,Ig=[],Br=(()=>{class e{_ngEl;_renderer;initialClasses=Ig;rawClass;stateMap=new Map;constructor(n,o){this._ngEl=n,this._renderer=o}set klass(n){this.initialClasses=n!=null?n.trim().split(id):Ig}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(id):n}ngDoCheck(){for(let o of this.initialClasses)this._updateState(o,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let o of n)this._updateState(o,!0);else if(n!=null)for(let o of Object.keys(n))this._updateState(o,!!n[o]);this._applyStateDiff()}_updateState(n,o){let r=this.stateMap.get(n);r!==void 0?(r.enabled!==o&&(r.changed=!0,r.enabled=o),r.touched=!0):this.stateMap.set(n,{enabled:o,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let o=n[0],r=n[1];r.changed?(this._toggleClass(o,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(o,!1),this.stateMap.delete(o)),r.touched=!1}}_toggleClass(n,o){n=n.trim(),n.length>0&&n.split(id).forEach(r=>{o?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(o){return new(o||e)(_(Ct),_(Jt))};static \u0275dir=Ae({type:e,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return e})();var Ca=class{$implicit;ngForOf;index;count;constructor(t,n,o,r){this.$implicit=t,this.ngForOf=n,this.index=o,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Le=(()=>{class e{_viewContainer;_template;_differs;set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(n,o,r){this._viewContainer=n,this._template=o,this._differs=r}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;!this._differ&&n&&(this._differ=this._differs.find(n).create(this.ngForTrackBy))}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let o=this._viewContainer;n.forEachOperation((r,i,s)=>{if(r.previousIndex==null)o.createEmbeddedView(this._template,new Ca(r.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)o.remove(i===null?void 0:i);else if(i!==null){let a=o.get(i);o.move(a,s),_g(a,r)}});for(let r=0,i=o.length;r<i;r++){let a=o.get(r).context;a.index=r,a.count=i,a.ngForOf=this._ngForOf}n.forEachIdentityChange(r=>{let i=o.get(r.currentIndex);_g(i,r)})}static ngTemplateContextGuard(n,o){return!0}static \u0275fac=function(o){return new(o||e)(_(Ln),_(Pr),_(nd))};static \u0275dir=Ae({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return e})();function _g(e,t){e.context.$implicit=t.item}var ut=(()=>{class e{_viewContainer;_context=new wa;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(n,o){this._viewContainer=n,this._thenTemplateRef=o}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){xg(n,!1),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){xg(n,!1),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(n,o){return!0}static \u0275fac=function(o){return new(o||e)(_(Ln),_(Pr))};static \u0275dir=Ae({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return e})(),wa=class{$implicit=null;ngIf=null};function xg(e,t){if(e&&!e.createEmbeddedView)throw new w(2020,!1)}function ID(e,t){return new w(2100,!1)}var _D=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g,ad=(()=>{class e{transform(n){if(n==null)return null;if(typeof n!="string")throw ID(e,n);return n.replace(_D,o=>o[0].toUpperCase()+o.slice(1).toLowerCase())}static \u0275fac=function(o){return new(o||e)};static \u0275pipe=Fu({name:"titlecase",type:e,pure:!0})}return e})();var Ur=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Ee({type:e});static \u0275inj=he({})}return e})();function cd(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let o=n.indexOf("="),[r,i]=o==-1?[n,""]:[n.slice(0,o),n.slice(o+1)];if(r.trim()===t)return decodeURIComponent(i)}return null}var Wr=class{};var Tg="browser";var Ag=(()=>{class e{static \u0275prov=S({token:e,providedIn:"root",factory:()=>new ld(y(oe),window)})}return e})(),ld=class{document;window;offset=()=>[0,0];constructor(t,n){this.document=t,this.window=n}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t,n){this.window.scrollTo(F(b({},n),{left:t[0],top:t[1]}))}scrollToAnchor(t,n){let o=xD(this.document,t);o&&(this.scrollToElement(o,n),o.focus())}setHistoryScrollRestoration(t){try{this.window.history.scrollRestoration=t}catch{console.warn(Yt(2400,!1))}}scrollToElement(t,n){let o=t.getBoundingClientRect(),r=o.left+this.window.pageXOffset,i=o.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(F(b({},n),{left:r-s[0],top:i-s[1]}))}};function xD(e,t){let n=e.getElementById(t)||e.getElementsByName(t)[0];if(n)return n;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let o=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),r=o.currentNode;for(;r;){let i=r.shadowRoot;if(i){let s=i.getElementById(t)||i.querySelector(`[name="${t}"]`);if(s)return s}r=o.nextNode()}}return null}var $r=class{_doc;constructor(t){this._doc=t}manager},Ea=(()=>{class e extends $r{constructor(n){super(n)}supports(n){return!0}addEventListener(n,o,r,i){return n.addEventListener(o,r,i),()=>this.removeEventListener(n,o,r,i)}removeEventListener(n,o,r,i){return n.removeEventListener(o,r,i)}static \u0275fac=function(o){return new(o||e)(M(oe))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),Da=new D(""),hd=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(n,o){this._zone=o,n.forEach(s=>{s.manager=this});let r=n.filter(s=>!(s instanceof Ea));this._plugins=r.slice().reverse();let i=n.find(s=>s instanceof Ea);i&&this._plugins.push(i)}addEventListener(n,o,r,i){return this._findPluginFor(o).addEventListener(n,o,r,i)}getZone(){return this._zone}_findPluginFor(n){let o=this._eventNameToPlugin.get(n);if(o)return o;if(o=this._plugins.find(i=>i.supports(n)),!o)throw new w(5101,!1);return this._eventNameToPlugin.set(n,o),o}static \u0275fac=function(o){return new(o||e)(M(Da),M(K))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),ud="ng-app-id";function Og(e){for(let t of e)t.remove()}function Pg(e,t){let n=t.createElement("style");return n.textContent=e,n}function TD(e,t,n,o){let r=e.head?.querySelectorAll(`style[${ud}="${t}"],link[${ud}="${t}"]`);if(r)for(let i of r)i.removeAttribute(ud),i instanceof HTMLLinkElement?o.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&n.set(i.textContent,{usage:0,elements:[i]})}function fd(e,t){let n=t.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n}var md=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(n,o,r,i={}){this.doc=n,this.appId=o,this.nonce=r,TD(n,o,this.inline,this.external),this.hosts.add(n.head)}addStyles(n,o){for(let r of n)this.addUsage(r,this.inline,Pg);o?.forEach(r=>this.addUsage(r,this.external,fd))}removeStyles(n,o){for(let r of n)this.removeUsage(r,this.inline);o?.forEach(r=>this.removeUsage(r,this.external))}addUsage(n,o,r){let i=o.get(n);i?i.usage++:o.set(n,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(n,this.doc)))})}removeUsage(n,o){let r=o.get(n);r&&(r.usage--,r.usage<=0&&(Og(r.elements),o.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])Og(n);this.hosts.clear()}addHost(n){this.hosts.add(n);for(let[o,{elements:r}]of this.inline)r.push(this.addElement(n,Pg(o,this.doc)));for(let[o,{elements:r}]of this.external)r.push(this.addElement(n,fd(o,this.doc)))}removeHost(n){this.hosts.delete(n)}addElement(n,o){return this.nonce&&o.setAttribute("nonce",this.nonce),n.appendChild(o)}static \u0275fac=function(o){return new(o||e)(M(oe),M(Ys),M(Qs,8),M(xr))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),dd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},gd=/%COMP%/g;var kg="%COMP%",AD=`_nghost-${kg}`,OD=`_ngcontent-${kg}`,PD=!0,RD=new D("",{providedIn:"root",factory:()=>PD});function kD(e){return OD.replace(gd,e)}function ND(e){return AD.replace(gd,e)}function Ng(e,t){return t.map(n=>n.replace(gd,e))}var vd=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(n,o,r,i,s,a,c=null,l=null){this.eventManager=n,this.sharedStylesHost=o,this.appId=r,this.removeStylesOnCompDestroy=i,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.platformIsServer=!1,this.defaultRenderer=new zr(n,s,a,this.platformIsServer,this.tracingService)}createRenderer(n,o){if(!n||!o)return this.defaultRenderer;let r=this.getOrCreateRenderer(n,o);return r instanceof Sa?r.applyToHost(n):r instanceof Gr&&r.applyStyles(),r}getOrCreateRenderer(n,o){let r=this.rendererByCompId,i=r.get(o.id);if(!i){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,v=this.tracingService;switch(o.encapsulation){case Lt.Emulated:i=new Sa(c,l,o,this.appId,u,s,a,d,v);break;case Lt.ShadowDom:return new pd(c,l,n,o,s,a,this.nonce,d,v);default:i=new Gr(c,l,o,u,s,a,d,v);break}r.set(o.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static \u0275fac=function(o){return new(o||e)(M(hd),M(md),M(Ys),M(RD),M(oe),M(K),M(Qs),M(Fn,8))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),zr=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,n,o,r,i){this.eventManager=t,this.doc=n,this.ngZone=o,this.platformIsServer=r,this.tracingService=i}destroy(){}destroyNode=null;createElement(t,n){return n?this.doc.createElementNS(dd[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(Rg(t)?t.content:t).appendChild(n)}insertBefore(t,n,o){t&&(Rg(t)?t.content:t).insertBefore(n,o)}removeChild(t,n){n.remove()}selectRootElement(t,n){let o=typeof t=="string"?this.doc.querySelector(t):t;if(!o)throw new w(-5104,!1);return n||(o.textContent=""),o}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,o,r){if(r){n=r+":"+n;let i=dd[r];i?t.setAttributeNS(i,n,o):t.setAttribute(n,o)}else t.setAttribute(n,o)}removeAttribute(t,n,o){if(o){let r=dd[o];r?t.removeAttributeNS(r,n):t.removeAttribute(`${o}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,o,r){r&(bt.DashCase|bt.Important)?t.style.setProperty(n,o,r&bt.Important?"important":""):t.style[n]=o}removeStyle(t,n,o){o&bt.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,o){t!=null&&(t[n]=o)}setValue(t,n){t.nodeValue=n}listen(t,n,o,r){if(typeof t=="string"&&(t=Ue().getGlobalEventTarget(this.doc,t),!t))throw new w(5102,!1);let i=this.decoratePreventDefault(o);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(t,n,i)),this.eventManager.addEventListener(t,n,i,r)}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;t(n)===!1&&n.preventDefault()}}};function Rg(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var pd=class extends zr{sharedStylesHost;hostEl;shadowRoot;constructor(t,n,o,r,i,s,a,c,l){super(t,i,s,c,l),this.sharedStylesHost=n,this.hostEl=o,this.shadowRoot=o.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=Ng(r.id,u);for(let v of u){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=v,this.shadowRoot.appendChild(p)}let d=r.getExternalStyles?.();if(d)for(let v of d){let p=fd(v,i);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,o){return super.insertBefore(this.nodeOrShadowRoot(t),n,o)}removeChild(t,n){return super.removeChild(null,n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Gr=class extends zr{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,n,o,r,i,s,a,c,l){super(t,i,s,a,c),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=r;let u=o.styles;this.styles=l?Ng(l,u):u,this.styleUrls=o.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&wo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Sa=class extends Gr{contentAttr;hostAttr;constructor(t,n,o,r,i,s,a,c,l){let u=r+"-"+o.id;super(t,n,o,i,s,a,c,l,u),this.contentAttr=kD(u),this.hostAttr=ND(u)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let o=super.createElement(t,n);return super.setAttribute(o,this.contentAttr,""),o}};var Ma=class e extends Jr{supportsDOMEvents=!0;static makeCurrent(){od(new e)}onAndCancel(t,n,o,r){return t.addEventListener(n,o,r),()=>{t.removeEventListener(n,o,r)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.remove()}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=FD();return n==null?null:LD(n)}resetBaseElement(){qr=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return cd(document.cookie,t)}},qr=null;function FD(){return qr=qr||document.head.querySelector("base"),qr?qr.getAttribute("href"):null}function LD(e){return new URL(e,document.baseURI).pathname}var Ia=class{addToWindow(t){_e.getAngularTestability=(o,r=!0)=>{let i=t.findTestabilityInTree(o,r);if(i==null)throw new w(5103,!1);return i},_e.getAllAngularTestabilities=()=>t.getAllTestabilities(),_e.getAllAngularRootElements=()=>t.getAllRootElements();let n=o=>{let r=_e.getAllAngularTestabilities(),i=r.length,s=function(){i--,i==0&&o()};r.forEach(a=>{a.whenStable(s)})};_e.frameworkStabilizers||(_e.frameworkStabilizers=[]),_e.frameworkStabilizers.push(n)}findTestabilityInTree(t,n,o){if(n==null)return null;let r=t.getTestability(n);return r??(o?Ue().isShadowRoot(n)?this.findTestabilityInTree(t,n.host,!0):this.findTestabilityInTree(t,n.parentElement,!0):null)}},jD=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),Fg=["alt","control","meta","shift"],VD={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},JD={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Lg=(()=>{class e extends $r{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,o,r,i){let s=e.parseEventName(o),a=e.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ue().onAndCancel(n,s.domEventName,a,i))}static parseEventName(n){let o=n.toLowerCase().split("."),r=o.shift();if(o.length===0||!(r==="keydown"||r==="keyup"))return null;let i=e._normalizeKey(o.pop()),s="",a=o.indexOf("code");if(a>-1&&(o.splice(a,1),s="code."),Fg.forEach(l=>{let u=o.indexOf(l);u>-1&&(o.splice(u,1),s+=l+".")}),s+=i,o.length!=0||i.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(n,o){let r=VD[n.key]||n.key,i="";return o.indexOf("code.")>-1&&(r=n.code,i="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Fg.forEach(s=>{if(s!==r){let a=JD[s];a(n)&&(i+=s+".")}}),i+=r,i===o)}static eventCallback(n,o,r){return i=>{e.matchEventFullKeyCode(i,n)&&r.runGuarded(()=>o(i))}}static _normalizeKey(n){return n==="esc"?"escape":n}static \u0275fac=function(o){return new(o||e)(M(oe))};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function HD(){Ma.makeCurrent()}function BD(){return new et}function UD(){return uu(document),document}var WD=[{provide:xr,useValue:Tg},{provide:Ks,useValue:HD,multi:!0},{provide:oe,useFactory:UD}],yd=ed(bg,"browser",WD);var $D=[{provide:Io,useClass:Ia},{provide:aa,useClass:kr,deps:[K,Nr,Io]},{provide:kr,useClass:kr,deps:[K,Nr,Io]}],zD=[{provide:ir,useValue:"root"},{provide:et,useFactory:BD},{provide:Da,useClass:Ea,multi:!0,deps:[oe]},{provide:Da,useClass:Lg,multi:!0,deps:[oe]},vd,md,hd,{provide:On,useExisting:vd},{provide:Wr,useClass:jD},[]],bd=(()=>{class e{constructor(){}static \u0275fac=function(o){return new(o||e)};static \u0275mod=Ee({type:e});static \u0275inj=he({providers:[...zD,...$D],imports:[Ur,Cg]})}return e})();var jg=(()=>{class e{_doc;constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}static \u0275fac=function(o){return new(o||e)(M(oe))};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Gg=(()=>{class e{_renderer;_elementRef;onChange=n=>{};onTouched=()=>{};constructor(n,o){this._renderer=n,this._elementRef=o}setProperty(n,o){this._renderer.setProperty(this._elementRef.nativeElement,n,o)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}static \u0275fac=function(o){return new(o||e)(_(Jt),_(Ct))};static \u0275dir=Ae({type:e})}return e})(),GD=(()=>{class e extends Gg{static \u0275fac=(()=>{let n;return function(r){return(n||(n=So(e)))(r||e)}})();static \u0275dir=Ae({type:e,features:[jn]})}return e})(),qg=new D("");var qD={provide:qg,useExisting:wn(()=>Oa),multi:!0};function YD(){let e=Ue()?Ue().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var KD=new D(""),Oa=(()=>{class e extends Gg{_compositionMode;_composing=!1;constructor(n,o,r){super(n,o),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!YD())}writeValue(n){let o=n??"";this.setProperty("value",o)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}static \u0275fac=function(o){return new(o||e)(_(Jt),_(Ct),_(KD,8))};static \u0275dir=Ae({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(o,r){o&1&&q("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[fa([qD]),jn]})}return e})();var QD=new D(""),ZD=new D("");function Yg(e){return e!=null}function Kg(e){return sn(e)?Q(e):e}function Qg(e){let t={};return e.forEach(n=>{t=n!=null?b(b({},t),n):t}),Object.keys(t).length===0?null:t}function Zg(e,t){return t.map(n=>n(e))}function XD(e){return!e.validate}function Xg(e){return e.map(t=>XD(t)?t:n=>t.validate(n))}function eM(e){if(!e)return null;let t=e.filter(Yg);return t.length==0?null:function(n){return Qg(Zg(n,t))}}function ev(e){return e!=null?eM(Xg(e)):null}function tM(e){if(!e)return null;let t=e.filter(Yg);return t.length==0?null:function(n){let o=Zg(n,t).map(Kg);return xc(o).pipe(J(Qg))}}function tv(e){return e!=null?tM(Xg(e)):null}function Jg(e,t){return e===null?[t]:Array.isArray(e)?[...e,t]:[e,t]}function nM(e){return e._rawValidators}function oM(e){return e._rawAsyncValidators}function Cd(e){return e?Array.isArray(e)?e:[e]:[]}function xa(e,t){return Array.isArray(e)?e.includes(t):e===t}function Hg(e,t){let n=Cd(t);return Cd(e).forEach(r=>{xa(n,r)||n.push(r)}),n}function Bg(e,t){return Cd(t).filter(n=>!xa(e,n))}var Ta=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=ev(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=tv(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,n){return this.control?this.control.hasError(t,n):!1}getError(t,n){return this.control?this.control.getError(t,n):null}},wd=class extends Ta{name;get formDirective(){return null}get path(){return null}},Xr=class extends Ta{_parent=null;name=null;valueAccessor=null},Ed=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},rM={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},OH=F(b({},rM),{"[class.ng-submitted]":"isSubmitted"}),nv=(()=>{class e extends Ed{constructor(n){super(n)}static \u0275fac=function(o){return new(o||e)(_(Xr,2))};static \u0275dir=Ae({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(o,r){o&2&&ce("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[jn]})}return e})();var Yr="VALID",_a="INVALID",xo="PENDING",Kr="DISABLED",Hn=class{},Aa=class extends Hn{value;source;constructor(t,n){super(),this.value=t,this.source=n}},Qr=class extends Hn{pristine;source;constructor(t,n){super(),this.pristine=t,this.source=n}},Zr=class extends Hn{touched;source;constructor(t,n){super(),this.touched=t,this.source=n}},To=class extends Hn{status;source;constructor(t,n){super(),this.status=t,this.source=n}};var Sd=class extends Hn{source;constructor(t){super(),this.source=t}};function iM(e){return(Pa(e)?e.validators:e)||null}function sM(e){return Array.isArray(e)?ev(e):e||null}function aM(e,t){return(Pa(t)?t.asyncValidators:e)||null}function cM(e){return Array.isArray(e)?tv(e):e||null}function Pa(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var Dd=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,n){this._assignValidators(t),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return me(this.statusReactive)}set status(t){me(()=>this.statusReactive.set(t))}_status=jr(()=>this.statusReactive());statusReactive=vt(void 0);get valid(){return this.status===Yr}get invalid(){return this.status===_a}get pending(){return this.status==xo}get disabled(){return this.status===Kr}get enabled(){return this.status!==Kr}errors;get pristine(){return me(this.pristineReactive)}set pristine(t){me(()=>this.pristineReactive.set(t))}_pristine=jr(()=>this.pristineReactive());pristineReactive=vt(!0);get dirty(){return!this.pristine}get touched(){return me(this.touchedReactive)}set touched(t){me(()=>this.touchedReactive.set(t))}_touched=jr(()=>this.touchedReactive());touchedReactive=vt(!1);get untouched(){return!this.touched}_events=new te;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Hg(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Hg(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Bg(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Bg(t,this._rawAsyncValidators))}hasValidator(t){return xa(this._rawValidators,t)}hasAsyncValidator(t){return xa(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let n=this.touched===!1;this.touched=!0;let o=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(F(b({},t),{sourceControl:o})),n&&t.emitEvent!==!1&&this._events.next(new Zr(!0,o))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(t))}markAsUntouched(t={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let o=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:o})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,o),n&&t.emitEvent!==!1&&this._events.next(new Zr(!1,o))}markAsDirty(t={}){let n=this.pristine===!0;this.pristine=!1;let o=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(F(b({},t),{sourceControl:o})),n&&t.emitEvent!==!1&&this._events.next(new Qr(!1,o))}markAsPristine(t={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let o=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,o),n&&t.emitEvent!==!1&&this._events.next(new Qr(!0,o))}markAsPending(t={}){this.status=xo;let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new To(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(F(b({},t),{sourceControl:n}))}disable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=Kr,this.errors=null,this._forEachChild(r=>{r.disable(F(b({},t),{onlySelf:!0}))}),this._updateValue();let o=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Aa(this.value,o)),this._events.next(new To(this.status,o)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(F(b({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=Yr,this._forEachChild(o=>{o.enable(F(b({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(F(b({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(t,n){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let o=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Yr||this.status===xo)&&this._runAsyncValidator(o,t.emitEvent)}let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Aa(this.value,n)),this._events.next(new To(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(F(b({},t),{sourceControl:n}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Kr:Yr}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,n){if(this.asyncValidator){this.status=xo,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1,shouldHaveEmitted:t!==!1};let o=Kg(this.asyncValidator(this));this._asyncValidationSubscription=o.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(t){let n=t;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((o,r)=>o&&o._find(r),this)}getError(t,n){let o=n?this.get(n):this;return o&&o.errors?o.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,n,o){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||o)&&this._events.next(new To(this.status,n)),this._parent&&this._parent._updateControlsErrors(t,n,o)}_initObservables(){this.valueChanges=new se,this.statusChanges=new se}_calculateStatus(){return this._allControlsDisabled()?Kr:this.errors?_a:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(xo)?xo:this._anyControlsHaveStatus(_a)?_a:Yr}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,n){let o=!this._anyControlsDirty(),r=this.pristine!==o;this.pristine=o,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,n),r&&this._events.next(new Qr(this.pristine,n))}_updateTouched(t={},n){this.touched=this._anyControlsTouched(),this._events.next(new Zr(this.touched,n)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,n)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Pa(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let n=this._parent&&this._parent.dirty;return!t&&!!n&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=sM(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=cM(this._rawAsyncValidators)}};var ov=new D("",{providedIn:"root",factory:()=>Md}),Md="always";function lM(e,t){return[...t.path,e]}function uM(e,t,n=Md){fM(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||n==="always")&&t.valueAccessor.setDisabledState?.(e.disabled),pM(e,t),mM(e,t),hM(e,t),dM(e,t)}function Ug(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function dM(e,t){if(t.valueAccessor.setDisabledState){let n=o=>{t.valueAccessor.setDisabledState(o)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}function fM(e,t){let n=nM(e);t.validator!==null?e.setValidators(Jg(n,t.validator)):typeof n=="function"&&e.setValidators([n]);let o=oM(e);t.asyncValidator!==null?e.setAsyncValidators(Jg(o,t.asyncValidator)):typeof o=="function"&&e.setAsyncValidators([o]);let r=()=>e.updateValueAndValidity();Ug(t._rawValidators,r),Ug(t._rawAsyncValidators,r)}function pM(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&rv(e,t)})}function hM(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&rv(e,t),e.updateOn!=="submit"&&e.markAsTouched()})}function rv(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function mM(e,t){let n=(o,r)=>{t.valueAccessor.writeValue(o),r&&t.viewToModelUpdate(o)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}function gM(e,t){if(!e.hasOwnProperty("model"))return!1;let n=e.model;return n.isFirstChange()?!0:!Object.is(t,n.currentValue)}function vM(e){return Object.getPrototypeOf(e.constructor)===GD}function yM(e,t){if(!t)return null;Array.isArray(t);let n,o,r;return t.forEach(i=>{i.constructor===Oa?n=i:vM(i)?o=i:r=i}),r||o||n||null}function Wg(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function $g(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var bM=class extends Dd{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,n,o){super(iM(n),aM(o,n)),this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Pa(n)&&(n.nonNullable||n.initialValueIsDefault)&&($g(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(o=>o(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1,n?.emitEvent!==!1&&this._events.next(new Sd(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Wg(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Wg(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){$g(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var CM={provide:Xr,useExisting:wn(()=>Id)},zg=Promise.resolve(),Id=(()=>{class e extends Xr{_changeDetectorRef;callSetDisabledState;control=new bM;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new se;constructor(n,o,r,i,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=n,this._setValidators(o),this._setAsyncValidators(r),this.valueAccessor=yM(this,i)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let o=n.name.previousValue;this.formDirective.removeControl({name:o,path:this._getPath(o)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),gM(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){uM(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){zg.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let o=n.isDisabled.currentValue,r=o!==0&&Jn(o);zg.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?lM(n,this._parent):[n]}static \u0275fac=function(o){return new(o||e)(_(wd,9),_(QD,10),_(ZD,10),_(qg,10),_(Vn,8),_(ov,8))};static \u0275dir=Ae({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[fa([CM]),jn,rn]})}return e})();var wM=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Ee({type:e});static \u0275inj=he({})}return e})();var iv=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:ov,useValue:n.callSetDisabledState??Md}]}}static \u0275fac=function(o){return new(o||e)};static \u0275mod=Ee({type:e});static \u0275inj=he({imports:[wM]})}return e})();var A="primary",fi=Symbol("RouteTitle"),Od=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function Wn(e){return new Od(e)}function pv(e,t,n){let o=n.path.split("/");if(o.length>e.length||n.pathMatch==="full"&&(t.hasChildren()||o.length<e.length))return null;let r={};for(let i=0;i<o.length;i++){let s=o[i],a=e[i];if(s[0]===":")r[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,o.length),posParams:r}}function SM(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!Dt(e[n],t[n]))return!1;return!0}function Dt(e,t){let n=e?Pd(e):void 0,o=t?Pd(t):void 0;if(!n||!o||n.length!=o.length)return!1;let r;for(let i=0;i<n.length;i++)if(r=n[i],!hv(e[r],t[r]))return!1;return!0}function Pd(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function hv(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let n=[...e].sort(),o=[...t].sort();return n.every((r,i)=>o[i]===r)}else return e===t}function mv(e){return e.length>0?e[e.length-1]:null}function Bt(e){return _c(e)?e:sn(e)?Q(Promise.resolve(e)):I(e)}var DM={exact:vv,subset:yv},gv={exact:MM,subset:IM,ignored:()=>!0};function sv(e,t,n){return DM[n.paths](e.root,t.root,n.matrixParams)&&gv[n.queryParams](e.queryParams,t.queryParams)&&!(n.fragment==="exact"&&e.fragment!==t.fragment)}function MM(e,t){return Dt(e,t)}function vv(e,t,n){if(!Bn(e.segments,t.segments)||!Na(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let o in t.children)if(!e.children[o]||!vv(e.children[o],t.children[o],n))return!1;return!0}function IM(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>hv(e[n],t[n]))}function yv(e,t,n){return bv(e,t,t.segments,n)}function bv(e,t,n,o){if(e.segments.length>n.length){let r=e.segments.slice(0,n.length);return!(!Bn(r,n)||t.hasChildren()||!Na(r,n,o))}else if(e.segments.length===n.length){if(!Bn(e.segments,n)||!Na(e.segments,n,o))return!1;for(let r in t.children)if(!e.children[r]||!yv(e.children[r],t.children[r],o))return!1;return!0}else{let r=n.slice(0,e.segments.length),i=n.slice(e.segments.length);return!Bn(e.segments,r)||!Na(e.segments,r,o)||!e.children[A]?!1:bv(e.children[A],t,i,o)}}function Na(e,t,n){return t.every((o,r)=>gv[n](e[r].parameters,o.parameters))}var It=class{root;queryParams;fragment;_queryParamMap;constructor(t=new z([],{}),n={},o=null){this.root=t,this.queryParams=n,this.fragment=o}get queryParamMap(){return this._queryParamMap??=Wn(this.queryParams),this._queryParamMap}toString(){return TM.serialize(this)}},z=class{segments;children;parent=null;constructor(t,n){this.segments=t,this.children=n,Object.values(n).forEach(o=>o.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Fa(this)}},cn=class{path;parameters;_parameterMap;constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap??=Wn(this.parameters),this._parameterMap}toString(){return wv(this)}};function _M(e,t){return Bn(e,t)&&e.every((n,o)=>Dt(n.parameters,t[o].parameters))}function Bn(e,t){return e.length!==t.length?!1:e.every((n,o)=>n.path===t[o].path)}function xM(e,t){let n=[];return Object.entries(e.children).forEach(([o,r])=>{o===A&&(n=n.concat(t(r,o)))}),Object.entries(e.children).forEach(([o,r])=>{o!==A&&(n=n.concat(t(r,o)))}),n}var $n=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:()=>new ln,providedIn:"root"})}return e})(),ln=class{parse(t){let n=new kd(t);return new It(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){let n=`/${ei(t.root,!0)}`,o=PM(t.queryParams),r=typeof t.fragment=="string"?`#${AM(t.fragment)}`:"";return`${n}${o}${r}`}},TM=new ln;function Fa(e){return e.segments.map(t=>wv(t)).join("/")}function ei(e,t){if(!e.hasChildren())return Fa(e);if(t){let n=e.children[A]?ei(e.children[A],!1):"",o=[];return Object.entries(e.children).forEach(([r,i])=>{r!==A&&o.push(`${r}:${ei(i,!1)}`)}),o.length>0?`${n}(${o.join("//")})`:n}else{let n=xM(e,(o,r)=>r===A?[ei(e.children[A],!1)]:[`${r}:${ei(o,!1)}`]);return Object.keys(e.children).length===1&&e.children[A]!=null?`${Fa(e)}/${n[0]}`:`${Fa(e)}/(${n.join("//")})`}}function Cv(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ra(e){return Cv(e).replace(/%3B/gi,";")}function AM(e){return encodeURI(e)}function Rd(e){return Cv(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function La(e){return decodeURIComponent(e)}function av(e){return La(e.replace(/\+/g,"%20"))}function wv(e){return`${Rd(e.path)}${OM(e.parameters)}`}function OM(e){return Object.entries(e).map(([t,n])=>`;${Rd(t)}=${Rd(n)}`).join("")}function PM(e){let t=Object.entries(e).map(([n,o])=>Array.isArray(o)?o.map(r=>`${Ra(n)}=${Ra(r)}`).join("&"):`${Ra(n)}=${Ra(o)}`).filter(n=>n);return t.length?`?${t.join("&")}`:""}var RM=/^[^\/()?;#]+/;function _d(e){let t=e.match(RM);return t?t[0]:""}var kM=/^[^\/()?;=#]+/;function NM(e){let t=e.match(kM);return t?t[0]:""}var FM=/^[^=?&#]+/;function LM(e){let t=e.match(FM);return t?t[0]:""}var jM=/^[^&#]+/;function VM(e){let t=e.match(jM);return t?t[0]:""}var kd=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new z([],{}):new z([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let o={};return this.peekStartsWith("(")&&(o=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(o[A]=new z(t,n)),o}parseSegment(){let t=_d(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new w(4009,!1);return this.capture(t),new cn(La(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let n=NM(this.remaining);if(!n)return;this.capture(n);let o="";if(this.consumeOptional("=")){let r=_d(this.remaining);r&&(o=r,this.capture(o))}t[La(n)]=La(o)}parseQueryParam(t){let n=LM(this.remaining);if(!n)return;this.capture(n);let o="";if(this.consumeOptional("=")){let s=VM(this.remaining);s&&(o=s,this.capture(o))}let r=av(n),i=av(o);if(t.hasOwnProperty(r)){let s=t[r];Array.isArray(s)||(s=[s],t[r]=s),s.push(i)}else t[r]=i}parseParens(t){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let o=_d(this.remaining),r=this.remaining[o.length];if(r!=="/"&&r!==")"&&r!==";")throw new w(4010,!1);let i;o.indexOf(":")>-1?(i=o.slice(0,o.indexOf(":")),this.capture(i),this.capture(":")):t&&(i=A);let s=this.parseChildren();n[i??A]=Object.keys(s).length===1&&s[A]?s[A]:new z([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new w(4011,!1)}};function Ev(e){return e.segments.length>0?new z([],{[A]:e}):e}function Sv(e){let t={};for(let[o,r]of Object.entries(e.children)){let i=Sv(r);if(o===A&&i.segments.length===0&&i.hasChildren())for(let[s,a]of Object.entries(i.children))t[s]=a;else(i.segments.length>0||i.hasChildren())&&(t[o]=i)}let n=new z(e.segments,t);return JM(n)}function JM(e){if(e.numberOfChildren===1&&e.children[A]){let t=e.children[A];return new z(e.segments.concat(t.segments),t.children)}return e}function un(e){return e instanceof It}function Dv(e,t,n=null,o=null){let r=Mv(e);return Iv(r,t,n,o)}function Mv(e){let t;function n(i){let s={};for(let c of i.children){let l=n(c);s[c.outlet]=l}let a=new z(i.url,s);return i===e&&(t=a),a}let o=n(e.root),r=Ev(o);return t??r}function Iv(e,t,n,o){let r=e;for(;r.parent;)r=r.parent;if(t.length===0)return xd(r,r,r,n,o);let i=HM(t);if(i.toRoot())return xd(r,r,new z([],{}),n,o);let s=BM(i,r,e),a=s.processChildren?ni(s.segmentGroup,s.index,i.commands):xv(s.segmentGroup,s.index,i.commands);return xd(r,s.segmentGroup,a,n,o)}function ja(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function ri(e){return typeof e=="object"&&e!=null&&e.outlets}function xd(e,t,n,o,r){let i={};o&&Object.entries(o).forEach(([c,l])=>{i[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let s;e===t?s=n:s=_v(e,t,n);let a=Ev(Sv(s));return new It(a,i,r)}function _v(e,t,n){let o={};return Object.entries(e.children).forEach(([r,i])=>{i===t?o[r]=n:o[r]=_v(i,t,n)}),new z(e.segments,o)}var Va=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,n,o){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=o,t&&o.length>0&&ja(o[0]))throw new w(4003,!1);let r=o.find(ri);if(r&&r!==mv(o))throw new w(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function HM(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Va(!0,0,e);let t=0,n=!1,o=e.reduce((r,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let a={};return Object.entries(i.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(i.segmentPath)return[...r,i.segmentPath]}return typeof i!="string"?[...r,i]:s===0?(i.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?n=!0:a===".."?t++:a!=""&&r.push(a))}),r):[...r,i]},[]);return new Va(n,t,o)}var Po=class{segmentGroup;processChildren;index;constructor(t,n,o){this.segmentGroup=t,this.processChildren=n,this.index=o}};function BM(e,t,n){if(e.isAbsolute)return new Po(t,!0,0);if(!n)return new Po(t,!1,NaN);if(n.parent===null)return new Po(n,!0,0);let o=ja(e.commands[0])?0:1,r=n.segments.length-1+o;return UM(n,r,e.numberOfDoubleDots)}function UM(e,t,n){let o=e,r=t,i=n;for(;i>r;){if(i-=r,o=o.parent,!o)throw new w(4005,!1);r=o.segments.length}return new Po(o,!1,r-i)}function WM(e){return ri(e[0])?e[0].outlets:{[A]:e}}function xv(e,t,n){if(e??=new z([],{}),e.segments.length===0&&e.hasChildren())return ni(e,t,n);let o=$M(e,t,n),r=n.slice(o.commandIndex);if(o.match&&o.pathIndex<e.segments.length){let i=new z(e.segments.slice(0,o.pathIndex),{});return i.children[A]=new z(e.segments.slice(o.pathIndex),e.children),ni(i,0,r)}else return o.match&&r.length===0?new z(e.segments,{}):o.match&&!e.hasChildren()?Nd(e,t,n):o.match?ni(e,0,r):Nd(e,t,n)}function ni(e,t,n){if(n.length===0)return new z(e.segments,{});{let o=WM(n),r={};if(Object.keys(o).some(i=>i!==A)&&e.children[A]&&e.numberOfChildren===1&&e.children[A].segments.length===0){let i=ni(e.children[A],t,n);return new z(e.segments,i.children)}return Object.entries(o).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[i]=xv(e.children[i],t,s))}),Object.entries(e.children).forEach(([i,s])=>{o[i]===void 0&&(r[i]=s)}),new z(e.segments,r)}}function $M(e,t,n){let o=0,r=t,i={match:!1,pathIndex:0,commandIndex:0};for(;r<e.segments.length;){if(o>=n.length)return i;let s=e.segments[r],a=n[o];if(ri(a))break;let c=`${a}`,l=o<n.length-1?n[o+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!lv(c,l,s))return i;o+=2}else{if(!lv(c,{},s))return i;o++}r++}return{match:!0,pathIndex:r,commandIndex:o}}function Nd(e,t,n){let o=e.segments.slice(0,t),r=0;for(;r<n.length;){let i=n[r];if(ri(i)){let c=zM(i.outlets);return new z(o,c)}if(r===0&&ja(n[0])){let c=e.segments[t];o.push(new cn(c.path,cv(n[0]))),r++;continue}let s=ri(i)?i.outlets[A]:`${i}`,a=r<n.length-1?n[r+1]:null;s&&a&&ja(a)?(o.push(new cn(s,cv(a))),r+=2):(o.push(new cn(s,{})),r++)}return new z(o,{})}function zM(e){let t={};return Object.entries(e).forEach(([n,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(t[n]=Nd(new z([],{}),0,o))}),t}function cv(e){let t={};return Object.entries(e).forEach(([n,o])=>t[n]=`${o}`),t}function lv(e,t,n){return e==n.path&&Dt(t,n.parameters)}var Ro="imperative",le=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(le||{}),$e=class{id;url;constructor(t,n){this.id=t,this.url=n}},dn=class extends $e{type=le.NavigationStart;navigationTrigger;restoredState;constructor(t,n,o="imperative",r=null){super(t,n),this.navigationTrigger=o,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ze=class extends $e{urlAfterRedirects;type=le.NavigationEnd;constructor(t,n,o){super(t,n),this.urlAfterRedirects=o}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Oe=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(Oe||{}),No=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(No||{}),Mt=class extends $e{reason;code;type=le.NavigationCancel;constructor(t,n,o,r){super(t,n),this.reason=o,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},_t=class extends $e{reason;code;type=le.NavigationSkipped;constructor(t,n,o,r){super(t,n),this.reason=o,this.code=r}},Fo=class extends $e{error;target;type=le.NavigationError;constructor(t,n,o,r){super(t,n),this.error=o,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ii=class extends $e{urlAfterRedirects;state;type=le.RoutesRecognized;constructor(t,n,o,r){super(t,n),this.urlAfterRedirects=o,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ja=class extends $e{urlAfterRedirects;state;type=le.GuardsCheckStart;constructor(t,n,o,r){super(t,n),this.urlAfterRedirects=o,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ha=class extends $e{urlAfterRedirects;state;shouldActivate;type=le.GuardsCheckEnd;constructor(t,n,o,r,i){super(t,n),this.urlAfterRedirects=o,this.state=r,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ba=class extends $e{urlAfterRedirects;state;type=le.ResolveStart;constructor(t,n,o,r){super(t,n),this.urlAfterRedirects=o,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ua=class extends $e{urlAfterRedirects;state;type=le.ResolveEnd;constructor(t,n,o,r){super(t,n),this.urlAfterRedirects=o,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wa=class{route;type=le.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},$a=class{route;type=le.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},za=class{snapshot;type=le.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ga=class{snapshot;type=le.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qa=class{snapshot;type=le.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ya=class{snapshot;type=le.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Lo=class{routerEvent;position;anchor;type=le.Scroll;constructor(t,n,o){this.routerEvent=t,this.position=n,this.anchor=o}toString(){let t=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${t}')`}},si=class{},jo=class{url;navigationBehaviorOptions;constructor(t,n){this.url=t,this.navigationBehaviorOptions=n}};function GM(e){return!(e instanceof si)&&!(e instanceof jo)}function qM(e,t){return e.providers&&!e._injector&&(e._injector=Mo(e.providers,t,`Route: ${e.path}`)),e._injector??t}function dt(e){return e.outlet||A}function YM(e,t){let n=e.filter(o=>dt(o)===t);return n.push(...e.filter(o=>dt(o)!==t)),n}function Ho(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let t=e.parent;t;t=t.parent){let n=t.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}var Ka=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Ho(this.route?.snapshot)??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new zn(this.rootInjector)}},zn=(()=>{class e{rootInjector;contexts=new Map;constructor(n){this.rootInjector=n}onChildOutletCreated(n,o){let r=this.getOrCreateContext(n);r.outlet=o,this.contexts.set(n,r)}onChildOutletDestroyed(n){let o=this.getContext(n);o&&(o.outlet=null,o.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let o=this.getContext(n);return o||(o=new Ka(this.rootInjector),this.contexts.set(n,o)),o}getContext(n){return this.contexts.get(n)||null}static \u0275fac=function(o){return new(o||e)(M(ie))};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Qa=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){let n=Fd(t,this._root);return n?n.children.map(o=>o.value):[]}firstChild(t){let n=Fd(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){let n=Ld(t,this._root);return n.length<2?[]:n[n.length-2].children.map(r=>r.value).filter(r=>r!==t)}pathFromRoot(t){return Ld(t,this._root).map(n=>n.value)}};function Fd(e,t){if(e===t.value)return t;for(let n of t.children){let o=Fd(e,n);if(o)return o}return null}function Ld(e,t){if(e===t.value)return[t];for(let n of t.children){let o=Ld(e,n);if(o.length)return o.unshift(t),o}return[]}var We=class{value;children;constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}};function Oo(e){let t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t}var ai=class extends Qa{snapshot;constructor(t,n){super(t),this.snapshot=n,$d(this,t)}toString(){return this.snapshot.toString()}};function Tv(e){let t=KM(e),n=new de([new cn("",{})]),o=new de({}),r=new de({}),i=new de({}),s=new de(""),a=new ze(n,o,i,s,r,A,e,t.root);return a.snapshot=t.root,new ai(new We(a,[]),t)}function KM(e){let t={},n={},o={},i=new Un([],t,o,"",n,A,e,null,{});return new ci("",new We(i,[]))}var ze=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,n,o,r,i,s,a,c){this.urlSubject=t,this.paramsSubject=n,this.queryParamsSubject=o,this.fragmentSubject=r,this.dataSubject=i,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(J(l=>l[fi]))??I(void 0),this.url=t,this.params=n,this.queryParams=o,this.fragment=r,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(J(t=>Wn(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(J(t=>Wn(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Za(e,t,n="emptyOnly"){let o,{routeConfig:r}=e;return t!==null&&(n==="always"||r?.path===""||!t.component&&!t.routeConfig?.loadComponent)?o={params:b(b({},t.params),e.params),data:b(b({},t.data),e.data),resolve:b(b(b(b({},e.data),t.data),r?.data),e._resolvedData)}:o={params:b({},e.params),data:b({},e.data),resolve:b(b({},e.data),e._resolvedData??{})},r&&Ov(r)&&(o.resolve[fi]=r.title),o}var Un=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[fi]}constructor(t,n,o,r,i,s,a,c,l){this.url=t,this.params=n,this.queryParams=o,this.fragment=r,this.data=i,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Wn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Wn(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(o=>o.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${n}')`}},ci=class extends Qa{url;constructor(t,n){super(n),this.url=t,$d(this,n)}toString(){return Av(this._root)}};function $d(e,t){t.value._routerState=e,t.children.forEach(n=>$d(e,n))}function Av(e){let t=e.children.length>0?` { ${e.children.map(Av).join(", ")} } `:"";return`${e.value}${t}`}function Td(e){if(e.snapshot){let t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,Dt(t.queryParams,n.queryParams)||e.queryParamsSubject.next(n.queryParams),t.fragment!==n.fragment&&e.fragmentSubject.next(n.fragment),Dt(t.params,n.params)||e.paramsSubject.next(n.params),SM(t.url,n.url)||e.urlSubject.next(n.url),Dt(t.data,n.data)||e.dataSubject.next(n.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function jd(e,t){let n=Dt(e.params,t.params)&&_M(e.url,t.url),o=!e.parent!=!t.parent;return n&&!o&&(!e.parent||jd(e.parent,t.parent))}function Ov(e){return typeof e.title=="string"||e.title===null}var Pv=new D(""),pi=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=A;activateEvents=new se;deactivateEvents=new se;attachEvents=new se;detachEvents=new se;routerOutletData=gg();parentContexts=y(zn);location=y(Ln);changeDetector=y(Vn);inputBinder=y(hi,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(n){if(n.name){let{firstChange:o,previousValue:r}=n.name;if(o)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new w(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new w(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new w(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,o){this.activated=n,this._activatedRoute=o,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,o){if(this.isActivated)throw new w(4013,!1);this._activatedRoute=n;let r=this.location,s=n.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Vd(n,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:c,environmentInjector:o}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(o){return new(o||e)};static \u0275dir=Ae({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[rn]})}return e})(),Vd=class{route;childContexts;parent;outletData;constructor(t,n,o,r){this.route=t,this.childContexts=n,this.parent=o,this.outletData=r}get(t,n){return t===ze?this.route:t===zn?this.childContexts:t===Pv?this.outletData:this.parent.get(t,n)}},hi=new D(""),zd=(()=>{class e{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(n){this.unsubscribeFromRouteData(n),this.subscribeToRouteData(n)}unsubscribeFromRouteData(n){this.outletDataSubscriptions.get(n)?.unsubscribe(),this.outletDataSubscriptions.delete(n)}subscribeToRouteData(n){let{activatedRoute:o}=n,r=Qo([o.queryParams,o.params,o.data]).pipe(De(([i,s,a],c)=>(a=b(b(b({},i),s),a),c===0?I(a):Promise.resolve(a)))).subscribe(i=>{if(!n.isActivated||!n.activatedComponentRef||n.activatedRoute!==o||o.component===null){this.unsubscribeFromRouteData(n);return}let s=wg(o.component);if(!s){this.unsubscribeFromRouteData(n);return}for(let{templateName:a}of s.inputs)n.activatedComponentRef.setInput(a,i[a])});this.outletDataSubscriptions.set(n,r)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),Gd=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=ae({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(o,r){o&1&&Se(0,"router-outlet")},dependencies:[pi],encapsulation:2})}return e})();function qd(e){let t=e.children&&e.children.map(qd),n=t?F(b({},e),{children:t}):b({},e);return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==A&&(n.component=Gd),n}function QM(e,t,n){let o=li(e,t._root,n?n._root:void 0);return new ai(o,t)}function li(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){let o=n.value;o._futureSnapshot=t.value;let r=ZM(e,t,n);return new We(o,r)}else{if(e.shouldAttach(t.value)){let i=e.retrieve(t.value);if(i!==null){let s=i.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>li(e,a)),s}}let o=XM(t.value),r=t.children.map(i=>li(e,i));return new We(o,r)}}function ZM(e,t,n){return t.children.map(o=>{for(let r of n.children)if(e.shouldReuseRoute(o.value,r.value.snapshot))return li(e,o,r);return li(e,o)})}function XM(e){return new ze(new de(e.url),new de(e.params),new de(e.queryParams),new de(e.fragment),new de(e.data),e.outlet,e.component,e)}var Vo=class{redirectTo;navigationBehaviorOptions;constructor(t,n){this.redirectTo=t,this.navigationBehaviorOptions=n}},Rv="ngNavigationCancelingError";function Xa(e,t){let{redirectTo:n,navigationBehaviorOptions:o}=un(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,r=kv(!1,Oe.Redirect);return r.url=n,r.navigationBehaviorOptions=o,r}function kv(e,t){let n=new Error(`NavigationCancelingError: ${e||""}`);return n[Rv]=!0,n.cancellationCode=t,n}function eI(e){return Nv(e)&&un(e.url)}function Nv(e){return!!e&&e[Rv]}var tI=(e,t,n,o)=>J(r=>(new Jd(t,r.targetRouterState,r.currentRouterState,n,o).activate(e),r)),Jd=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,n,o,r,i){this.routeReuseStrategy=t,this.futureState=n,this.currState=o,this.forwardEvent=r,this.inputBindingEnabled=i}activate(t){let n=this.futureState._root,o=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,o,t),Td(this.futureState.root),this.activateChildRoutes(n,o,t)}deactivateChildRoutes(t,n,o){let r=Oo(n);t.children.forEach(i=>{let s=i.value.outlet;this.deactivateRoutes(i,r[s],o),delete r[s]}),Object.values(r).forEach(i=>{this.deactivateRouteAndItsChildren(i,o)})}deactivateRoutes(t,n,o){let r=t.value,i=n?n.value:null;if(r===i)if(r.component){let s=o.getContext(r.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,o);else i&&this.deactivateRouteAndItsChildren(n,o)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){let o=n.getContext(t.value.outlet),r=o&&t.value.component?o.children:n,i=Oo(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,r);if(o&&o.outlet){let s=o.outlet.detach(),a=o.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){let o=n.getContext(t.value.outlet),r=o&&t.value.component?o.children:n,i=Oo(t);for(let s of Object.values(i))this.deactivateRouteAndItsChildren(s,r);o&&(o.outlet&&(o.outlet.deactivate(),o.children.onOutletDeactivated()),o.attachRef=null,o.route=null)}activateChildRoutes(t,n,o){let r=Oo(n);t.children.forEach(i=>{this.activateRoutes(i,r[i.value.outlet],o),this.forwardEvent(new Ya(i.value.snapshot))}),t.children.length&&this.forwardEvent(new Ga(t.value.snapshot))}activateRoutes(t,n,o){let r=t.value,i=n?n.value:null;if(Td(r),r===i)if(r.component){let s=o.getOrCreateContext(r.outlet);this.activateChildRoutes(t,n,s.children)}else this.activateChildRoutes(t,n,o);else if(r.component){let s=o.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Td(a.route.value),this.activateChildRoutes(t,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(t,null,s.children)}else this.activateChildRoutes(t,null,o)}},ec=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},ko=class{component;route;constructor(t,n){this.component=t,this.route=n}};function nI(e,t,n){let o=e._root,r=t?t._root:null;return ti(o,r,n,[o.value])}function oI(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function Bo(e,t){let n=Symbol(),o=t.get(e,n);return o===n?typeof e=="function"&&!Wc(e)?e:t.get(e):o}function ti(e,t,n,o,r={canDeactivateChecks:[],canActivateChecks:[]}){let i=Oo(t);return e.children.forEach(s=>{rI(s,i[s.value.outlet],n,o.concat([s.value]),r),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,a])=>oi(a,n.getContext(s),r)),r}function rI(e,t,n,o,r={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){let c=iI(s,i,i.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new ec(o)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?ti(e,t,a?a.children:null,o,r):ti(e,t,n,o,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new ko(a.outlet.component,s))}else s&&oi(t,a,r),r.canActivateChecks.push(new ec(o)),i.component?ti(e,null,a?a.children:null,o,r):ti(e,null,n,o,r);return r}function iI(e,t,n){if(typeof n=="function")return n(e,t);switch(n){case"pathParamsChange":return!Bn(e.url,t.url);case"pathParamsOrQueryParamsChange":return!Bn(e.url,t.url)||!Dt(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!jd(e,t)||!Dt(e.queryParams,t.queryParams);case"paramsChange":default:return!jd(e,t)}}function oi(e,t,n){let o=Oo(e),r=e.value;Object.entries(o).forEach(([i,s])=>{r.component?t?oi(s,t.children.getContext(i),n):oi(s,null,n):oi(s,t,n)}),r.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new ko(t.outlet.component,r)):n.canDeactivateChecks.push(new ko(null,r)):n.canDeactivateChecks.push(new ko(null,r))}function mi(e){return typeof e=="function"}function sI(e){return typeof e=="boolean"}function aI(e){return e&&mi(e.canLoad)}function cI(e){return e&&mi(e.canActivate)}function lI(e){return e&&mi(e.canActivateChild)}function uI(e){return e&&mi(e.canDeactivate)}function dI(e){return e&&mi(e.canMatch)}function Fv(e){return e instanceof xt||e?.name==="EmptyError"}var ka=Symbol("INITIAL_VALUE");function Jo(){return De(e=>Qo(e.map(t=>t.pipe(At(1),Oc(ka)))).pipe(J(t=>{for(let n of t)if(n!==!0){if(n===ka)return ka;if(n===!1||fI(n))return n}return!0}),Ne(t=>t!==ka),At(1)))}function fI(e){return un(e)||e instanceof Vo}function pI(e,t){return X(n=>{let{targetSnapshot:o,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return s.length===0&&i.length===0?I(F(b({},n),{guardsResult:!0})):hI(s,o,r,e).pipe(X(a=>a&&sI(a)?mI(o,i,e,t):I(a)),J(a=>F(b({},n),{guardsResult:a})))})}function hI(e,t,n,o){return Q(e).pipe(X(r=>CI(r.component,r.route,n,t,o)),Ot(r=>r!==!0,!0))}function mI(e,t,n,o){return Q(t).pipe(Wt(r=>co(vI(r.route.parent,o),gI(r.route,o),bI(e,r.path,n),yI(e,r.route,n))),Ot(r=>r!==!0,!0))}function gI(e,t){return e!==null&&t&&t(new qa(e)),I(!0)}function vI(e,t){return e!==null&&t&&t(new za(e)),I(!0)}function yI(e,t,n){let o=t.routeConfig?t.routeConfig.canActivate:null;if(!o||o.length===0)return I(!0);let r=o.map(i=>Zo(()=>{let s=Ho(t)??n,a=Bo(i,s),c=cI(a)?a.canActivate(t,e):be(s,()=>a(t,e));return Bt(c).pipe(Ot())}));return I(r).pipe(Jo())}function bI(e,t,n){let o=t[t.length-1],i=t.slice(0,t.length-1).reverse().map(s=>oI(s)).filter(s=>s!==null).map(s=>Zo(()=>{let a=s.guards.map(c=>{let l=Ho(s.node)??n,u=Bo(c,l),d=lI(u)?u.canActivateChild(o,e):be(l,()=>u(o,e));return Bt(d).pipe(Ot())});return I(a).pipe(Jo())}));return I(i).pipe(Jo())}function CI(e,t,n,o,r){let i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!i||i.length===0)return I(!0);let s=i.map(a=>{let c=Ho(t)??r,l=Bo(a,c),u=uI(l)?l.canDeactivate(e,t,n,o):be(c,()=>l(e,t,n,o));return Bt(u).pipe(Ot())});return I(s).pipe(Jo())}function wI(e,t,n,o){let r=t.canLoad;if(r===void 0||r.length===0)return I(!0);let i=r.map(s=>{let a=Bo(s,e),c=aI(a)?a.canLoad(t,n):be(e,()=>a(t,n));return Bt(c)});return I(i).pipe(Jo(),Lv(o))}function Lv(e){return Sc(ue(t=>{if(typeof t!="boolean")throw Xa(e,t)}),J(t=>t===!0))}function EI(e,t,n,o){let r=t.canMatch;if(!r||r.length===0)return I(!0);let i=r.map(s=>{let a=Bo(s,e),c=dI(a)?a.canMatch(t,n):be(e,()=>a(t,n));return Bt(c)});return I(i).pipe(Jo(),Lv(o))}var ui=class{segmentGroup;constructor(t){this.segmentGroup=t||null}},di=class extends Error{urlTree;constructor(t){super(),this.urlTree=t}};function Ao(e){return so(new ui(e))}function SI(e){return so(new w(4e3,!1))}function DI(e){return so(kv(!1,Oe.GuardRejected))}var Hd=class{urlSerializer;urlTree;constructor(t,n){this.urlSerializer=t,this.urlTree=n}lineralizeSegments(t,n){let o=[],r=n.root;for(;;){if(o=o.concat(r.segments),r.numberOfChildren===0)return I(o);if(r.numberOfChildren>1||!r.children[A])return SI(`${t.redirectTo}`);r=r.children[A]}}applyRedirectCommands(t,n,o,r,i){return MI(n,r,i).pipe(J(s=>{if(s instanceof It)throw new di(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),t,o);if(s[0]==="/")throw new di(a);return a}))}applyRedirectCreateUrlTree(t,n,o,r){let i=this.createSegmentGroup(t,n.root,o,r);return new It(i,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){let o={};return Object.entries(t).forEach(([r,i])=>{if(typeof i=="string"&&i[0]===":"){let a=i.substring(1);o[r]=n[a]}else o[r]=i}),o}createSegmentGroup(t,n,o,r){let i=this.createSegments(t,n.segments,o,r),s={};return Object.entries(n.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(t,c,o,r)}),new z(i,s)}createSegments(t,n,o,r){return n.map(i=>i.path[0]===":"?this.findPosParam(t,i,r):this.findOrReturn(i,o))}findPosParam(t,n,o){let r=o[n.path.substring(1)];if(!r)throw new w(4001,!1);return r}findOrReturn(t,n){let o=0;for(let r of n){if(r.path===t.path)return n.splice(o),r;o++}return t}};function MI(e,t,n){if(typeof e=="string")return I(e);let o=e,{queryParams:r,fragment:i,routeConfig:s,url:a,outlet:c,params:l,data:u,title:d}=t;return Bt(be(n,()=>o({params:l,data:u,queryParams:r,fragment:i,routeConfig:s,url:a,outlet:c,title:d})))}var Bd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function II(e,t,n,o,r){let i=jv(e,t,n);return i.matched?(o=qM(t,o),EI(o,t,n,r).pipe(J(s=>s===!0?i:b({},Bd)))):I(i)}function jv(e,t,n){if(t.path==="**")return _I(n);if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||n.length>0)?b({},Bd):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let r=(t.matcher||pv)(n,e,t);if(!r)return b({},Bd);let i={};Object.entries(r.posParams??{}).forEach(([a,c])=>{i[a]=c.path});let s=r.consumed.length>0?b(b({},i),r.consumed[r.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:r.consumed,remainingSegments:n.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function _I(e){return{matched:!0,parameters:e.length>0?mv(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function uv(e,t,n,o){return n.length>0&&AI(e,n,o)?{segmentGroup:new z(t,TI(o,new z(n,e.children))),slicedSegments:[]}:n.length===0&&OI(e,n,o)?{segmentGroup:new z(e.segments,xI(e,n,o,e.children)),slicedSegments:n}:{segmentGroup:new z(e.segments,e.children),slicedSegments:n}}function xI(e,t,n,o){let r={};for(let i of n)if(nc(e,t,i)&&!o[dt(i)]){let s=new z([],{});r[dt(i)]=s}return b(b({},o),r)}function TI(e,t){let n={};n[A]=t;for(let o of e)if(o.path===""&&dt(o)!==A){let r=new z([],{});n[dt(o)]=r}return n}function AI(e,t,n){return n.some(o=>nc(e,t,o)&&dt(o)!==A)}function OI(e,t,n){return n.some(o=>nc(e,t,o))}function nc(e,t,n){return(e.hasChildren()||t.length>0)&&n.pathMatch==="full"?!1:n.path===""}function PI(e,t,n){return t.length===0&&!e.children[n]}var Ud=class{};function RI(e,t,n,o,r,i,s="emptyOnly"){return new Wd(e,t,n,o,r,s,i).recognize()}var kI=31,Wd=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,n,o,r,i,s,a){this.injector=t,this.configLoader=n,this.rootComponentType=o,this.config=r,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new Hd(this.urlSerializer,this.urlTree)}noMatchError(t){return new w(4002,`'${t.segmentGroup}'`)}recognize(){let t=uv(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(J(({children:n,rootSnapshot:o})=>{let r=new We(o,n),i=new ci("",r),s=Dv(o,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}))}match(t){let n=new Un([],Object.freeze({}),Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),A,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,t,A,n).pipe(J(o=>({children:o,rootSnapshot:n})),Tt(o=>{if(o instanceof di)return this.urlTree=o.urlTree,this.match(o.urlTree.root);throw o instanceof ui?this.noMatchError(o):o}))}processSegmentGroup(t,n,o,r,i){return o.segments.length===0&&o.hasChildren()?this.processChildren(t,n,o,i):this.processSegment(t,n,o,o.segments,r,!0,i).pipe(J(s=>s instanceof We?[s]:[]))}processChildren(t,n,o,r){let i=[];for(let s of Object.keys(o.children))s==="primary"?i.unshift(s):i.push(s);return Q(i).pipe(Wt(s=>{let a=o.children[s],c=YM(n,s);return this.processSegmentGroup(t,c,a,s,r)}),Ac((s,a)=>(s.push(...a),s)),$t(null),Tc(),X(s=>{if(s===null)return Ao(o);let a=Vv(s);return NI(a),I(a)}))}processSegment(t,n,o,r,i,s,a){return Q(n).pipe(Wt(c=>this.processSegmentAgainstRoute(c._injector??t,n,c,o,r,i,s,a).pipe(Tt(l=>{if(l instanceof ui)return I(null);throw l}))),Ot(c=>!!c),Tt(c=>{if(Fv(c))return PI(o,r,i)?I(new Ud):Ao(o);throw c}))}processSegmentAgainstRoute(t,n,o,r,i,s,a,c){return dt(o)!==s&&(s===A||!nc(r,i,o))?Ao(r):o.redirectTo===void 0?this.matchSegmentAgainstRoute(t,r,o,i,s,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(t,r,n,o,i,s,c):Ao(r)}expandSegmentAgainstRouteUsingRedirect(t,n,o,r,i,s,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:v}=jv(n,r,i);if(!c)return Ao(n);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>kI&&(this.allowRedirects=!1));let p=new Un(i,l,Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,dv(r),dt(r),r.component??r._loadedComponent??null,r,fv(r)),C=Za(p,a,this.paramsInheritanceStrategy);return p.params=Object.freeze(C.params),p.data=Object.freeze(C.data),this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,p,t).pipe(De(W=>this.applyRedirects.lineralizeSegments(r,W)),X(W=>this.processSegment(t,o,n,W.concat(v),s,!1,a)))}matchSegmentAgainstRoute(t,n,o,r,i,s){let a=II(n,o,r,t,this.urlSerializer);return o.path==="**"&&(n.children={}),a.pipe(De(c=>c.matched?(t=o._injector??t,this.getChildConfig(t,o,r).pipe(De(({routes:l})=>{let u=o._loadedInjector??t,{parameters:d,consumedSegments:v,remainingSegments:p}=c,C=new Un(v,d,Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,dv(o),dt(o),o.component??o._loadedComponent??null,o,fv(o)),x=Za(C,s,this.paramsInheritanceStrategy);C.params=Object.freeze(x.params),C.data=Object.freeze(x.data);let{segmentGroup:W,slicedSegments:H}=uv(n,v,p,l);if(H.length===0&&W.hasChildren())return this.processChildren(u,l,W,C).pipe(J(bi=>new We(C,bi)));if(l.length===0&&H.length===0)return I(new We(C,[]));let Fy=dt(o)===i;return this.processSegment(u,l,W,H,Fy?A:i,!0,C).pipe(J(bi=>new We(C,bi instanceof We?[bi]:[])))}))):Ao(n)))}getChildConfig(t,n,o){return n.children?I({routes:n.children,injector:t}):n.loadChildren?n._loadedRoutes!==void 0?I({routes:n._loadedRoutes,injector:n._loadedInjector}):wI(t,n,o,this.urlSerializer).pipe(X(r=>r?this.configLoader.loadChildren(t,n).pipe(ue(i=>{n._loadedRoutes=i.routes,n._loadedInjector=i.injector})):DI(n))):I({routes:[],injector:t})}};function NI(e){e.sort((t,n)=>t.value.outlet===A?-1:n.value.outlet===A?1:t.value.outlet.localeCompare(n.value.outlet))}function FI(e){let t=e.value.routeConfig;return t&&t.path===""}function Vv(e){let t=[],n=new Set;for(let o of e){if(!FI(o)){t.push(o);continue}let r=t.find(i=>o.value.routeConfig===i.value.routeConfig);r!==void 0?(r.children.push(...o.children),n.add(r)):t.push(o)}for(let o of n){let r=Vv(o.children);t.push(new We(o.value,r))}return t.filter(o=>!n.has(o))}function dv(e){return e.data||{}}function fv(e){return e.resolve||{}}function LI(e,t,n,o,r,i){return X(s=>RI(e,t,n,o,s.extractedUrl,r,i).pipe(J(({state:a,tree:c})=>F(b({},s),{targetSnapshot:a,urlAfterRedirects:c}))))}function jI(e,t){return X(n=>{let{targetSnapshot:o,guards:{canActivateChecks:r}}=n;if(!r.length)return I(n);let i=new Set(r.map(c=>c.route)),s=new Set;for(let c of i)if(!s.has(c))for(let l of Jv(c))s.add(l);let a=0;return Q(s).pipe(Wt(c=>i.has(c)?VI(c,o,e,t):(c.data=Za(c,c.parent,e).resolve,I(void 0))),ue(()=>a++),lo(1),X(c=>a===s.size?I(n):Re))})}function Jv(e){let t=e.children.map(n=>Jv(n)).flat();return[e,...t]}function VI(e,t,n,o){let r=e.routeConfig,i=e._resolve;return r?.title!==void 0&&!Ov(r)&&(i[fi]=r.title),Zo(()=>(e.data=Za(e,e.parent,n).resolve,JI(i,e,t,o).pipe(J(s=>(e._resolvedData=s,e.data=b(b({},e.data),s),null)))))}function JI(e,t,n,o){let r=Pd(e);if(r.length===0)return I({});let i={};return Q(r).pipe(X(s=>HI(e[s],t,n,o).pipe(Ot(),ue(a=>{if(a instanceof Vo)throw Xa(new ln,a);i[s]=a}))),lo(1),J(()=>i),Tt(s=>Fv(s)?Re:so(s)))}function HI(e,t,n,o){let r=Ho(t)??o,i=Bo(e,r),s=i.resolve?i.resolve(t,n):be(r,()=>i(t,n));return Bt(s)}function Ad(e){return De(t=>{let n=e(t);return n?Q(n).pipe(J(()=>t)):I(t)})}var Yd=(()=>{class e{buildTitle(n){let o,r=n.root;for(;r!==void 0;)o=this.getResolvedTitleForRoute(r)??o,r=r.children.find(i=>i.outlet===A);return o}getResolvedTitleForRoute(n){return n.data[fi]}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:()=>y(Hv),providedIn:"root"})}return e})(),Hv=(()=>{class e extends Yd{title;constructor(n){super(),this.title=n}updateTitle(n){let o=this.buildTitle(n);o!==void 0&&this.title.setTitle(o)}static \u0275fac=function(o){return new(o||e)(M(jg))};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),fn=new D("",{providedIn:"root",factory:()=>({})}),Uo=new D(""),oc=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=y(Gu);loadComponent(n,o){if(this.componentLoaders.get(o))return this.componentLoaders.get(o);if(o._loadedComponent)return I(o._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(o);let r=Bt(be(n,()=>o.loadComponent())).pipe(J(Uv),De(Wv),ue(s=>{this.onLoadEndListener&&this.onLoadEndListener(o),o._loadedComponent=s}),Xo(()=>{this.componentLoaders.delete(o)})),i=new io(r,()=>new te).pipe(ro());return this.componentLoaders.set(o,i),i}loadChildren(n,o){if(this.childrenLoaders.get(o))return this.childrenLoaders.get(o);if(o._loadedRoutes)return I({routes:o._loadedRoutes,injector:o._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(o);let i=Bv(o,this.compiler,n,this.onLoadEndListener).pipe(Xo(()=>{this.childrenLoaders.delete(o)})),s=new io(i,()=>new te).pipe(ro());return this.childrenLoaders.set(o,s),s}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Bv(e,t,n,o){return Bt(be(n,()=>e.loadChildren())).pipe(J(Uv),De(Wv),X(r=>r instanceof sa||Array.isArray(r)?I(r):Q(t.compileModuleAsync(r))),J(r=>{o&&o(e);let i,s,a=!1;return Array.isArray(r)?(s=r,a=!0):(i=r.create(n).injector,s=i.get(Uo,[],{optional:!0,self:!0}).flat()),{routes:s.map(qd),injector:i}}))}function BI(e){return e&&typeof e=="object"&&"default"in e}function Uv(e){return BI(e)?e.default:e}function Wv(e){return I(e)}var rc=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:()=>y(UI),providedIn:"root"})}return e})(),UI=(()=>{class e{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,o){return n}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Kd=new D(""),Qd=new D("");function $v(e,t,n){let o=e.get(Qd),r=e.get(oe);if(!r.startViewTransition||o.skipNextTransition)return o.skipNextTransition=!1,new Promise(l=>setTimeout(l));let i,s=new Promise(l=>{i=l}),a=r.startViewTransition(()=>(i(),WI(e)));a.ready.catch(l=>{});let{onViewTransitionCreated:c}=o;return c&&be(e,()=>c({transition:a,from:t,to:n})),s}function WI(e){return new Promise(t=>{oa({read:()=>setTimeout(t)},{injector:e})})}var Zd=new D(""),ic=(()=>{class e{currentNavigation=vt(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=null;events=new te;transitionAbortWithErrorSubject=new te;configLoader=y(oc);environmentInjector=y(ie);destroyRef=y(gt);urlSerializer=y($n);rootContexts=y(zn);location=y(St);inputBindingEnabled=y(hi,{optional:!0})!==null;titleStrategy=y(Yd);options=y(fn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=y(rc);createViewTransition=y(Kd,{optional:!0});navigationErrorHandler=y(Zd,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>I(void 0);rootComponentType=null;destroyed=!1;constructor(){let n=r=>this.events.next(new Wa(r)),o=r=>this.events.next(new $a(r));this.configLoader.onLoadEndListener=o,this.configLoader.onLoadStartListener=n,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(n){let o=++this.navigationId;me(()=>{this.transitions?.next(F(b({},n),{extractedUrl:this.urlHandlingStrategy.extract(n.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:o}))})}setupNavigations(n){return this.transitions=new de(null),this.transitions.pipe(Ne(o=>o!==null),De(o=>{let r=!1;return I(o).pipe(De(i=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",Oe.SupersededByNewNavigation),Re;this.currentTransition=o,this.currentNavigation.set({id:i.id,initialUrl:i.rawUrl,extractedUrl:i.extractedUrl,targetBrowserUrl:typeof i.extras.browserUrl=="string"?this.urlSerializer.parse(i.extras.browserUrl):i.extras.browserUrl,trigger:i.source,extras:i.extras,previousNavigation:this.lastSuccessfulNavigation?F(b({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>i.abortController.abort()});let s=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),a=i.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!s&&a!=="reload")return this.events.next(new _t(i.id,this.urlSerializer.serialize(i.rawUrl),"",No.IgnoredSameUrlNavigation)),i.resolve(!1),Re;if(this.urlHandlingStrategy.shouldProcessUrl(i.rawUrl))return I(i).pipe(De(c=>(this.events.next(new dn(c.id,this.urlSerializer.serialize(c.extractedUrl),c.source,c.restoredState)),c.id!==this.navigationId?Re:Promise.resolve(c))),LI(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy),ue(c=>{o.targetSnapshot=c.targetSnapshot,o.urlAfterRedirects=c.urlAfterRedirects,this.currentNavigation.update(u=>(u.finalUrl=c.urlAfterRedirects,u));let l=new ii(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}));if(s&&this.urlHandlingStrategy.shouldProcessUrl(i.currentRawUrl)){let{id:c,extractedUrl:l,source:u,restoredState:d,extras:v}=i,p=new dn(c,this.urlSerializer.serialize(l),u,d);this.events.next(p);let C=Tv(this.rootComponentType).snapshot;return this.currentTransition=o=F(b({},i),{targetSnapshot:C,urlAfterRedirects:l,extras:F(b({},v),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(x=>(x.finalUrl=l,x)),I(o)}else return this.events.next(new _t(i.id,this.urlSerializer.serialize(i.extractedUrl),"",No.IgnoredByUrlHandlingStrategy)),i.resolve(!1),Re}),ue(i=>{let s=new Ja(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects),i.targetSnapshot);this.events.next(s)}),J(i=>(this.currentTransition=o=F(b({},i),{guards:nI(i.targetSnapshot,i.currentSnapshot,this.rootContexts)}),o)),pI(this.environmentInjector,i=>this.events.next(i)),ue(i=>{if(o.guardsResult=i.guardsResult,i.guardsResult&&typeof i.guardsResult!="boolean")throw Xa(this.urlSerializer,i.guardsResult);let s=new Ha(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects),i.targetSnapshot,!!i.guardsResult);this.events.next(s)}),Ne(i=>i.guardsResult?!0:(this.cancelNavigationTransition(i,"",Oe.GuardRejected),!1)),Ad(i=>{if(i.guards.canActivateChecks.length!==0)return I(i).pipe(ue(s=>{let a=new Ba(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}),De(s=>{let a=!1;return I(s).pipe(jI(this.paramsInheritanceStrategy,this.environmentInjector),ue({next:()=>a=!0,complete:()=>{a||this.cancelNavigationTransition(s,"",Oe.NoDataFromResolver)}}))}),ue(s=>{let a=new Ua(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}))}),Ad(i=>{let s=a=>{let c=[];if(a.routeConfig?.loadComponent){let l=Ho(a)??this.environmentInjector;c.push(this.configLoader.loadComponent(l,a.routeConfig).pipe(ue(u=>{a.component=u}),J(()=>{})))}for(let l of a.children)c.push(...s(l));return c};return Qo(s(i.targetSnapshot.root)).pipe($t(null),At(1))}),Ad(()=>this.afterPreactivation()),De(()=>{let{currentSnapshot:i,targetSnapshot:s}=o,a=this.createViewTransition?.(this.environmentInjector,i.root,s.root);return a?Q(a).pipe(J(()=>o)):I(o)}),J(i=>{let s=QM(n.routeReuseStrategy,i.targetSnapshot,i.currentRouterState);return this.currentTransition=o=F(b({},i),{targetRouterState:s}),this.currentNavigation.update(a=>(a.targetRouterState=s,a)),o}),ue(()=>{this.events.next(new si)}),tI(this.rootContexts,n.routeReuseStrategy,i=>this.events.next(i),this.inputBindingEnabled),At(1),Xi(new B(i=>{let s=o.abortController.signal,a=()=>i.next();return s.addEventListener("abort",a),()=>s.removeEventListener("abort",a)}).pipe(Ne(()=>!r&&!o.targetRouterState),ue(()=>{this.cancelNavigationTransition(o,o.abortController.signal.reason+"",Oe.Aborted)}))),ue({next:i=>{r=!0,this.lastSuccessfulNavigation=me(this.currentNavigation),this.events.next(new Ze(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects))),this.titleStrategy?.updateTitle(i.targetRouterState.snapshot),i.resolve(!0)},complete:()=>{r=!0}}),Xi(this.transitionAbortWithErrorSubject.pipe(ue(i=>{throw i}))),Xo(()=>{r||this.cancelNavigationTransition(o,"",Oe.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Tt(i=>{if(this.destroyed)return o.resolve(!1),Re;if(r=!0,Nv(i))this.events.next(new Mt(o.id,this.urlSerializer.serialize(o.extractedUrl),i.message,i.cancellationCode)),eI(i)?this.events.next(new jo(i.url,i.navigationBehaviorOptions)):o.resolve(!1);else{let s=new Fo(o.id,this.urlSerializer.serialize(o.extractedUrl),i,o.targetSnapshot??void 0);try{let a=be(this.environmentInjector,()=>this.navigationErrorHandler?.(s));if(a instanceof Vo){let{message:c,cancellationCode:l}=Xa(this.urlSerializer,a);this.events.next(new Mt(o.id,this.urlSerializer.serialize(o.extractedUrl),c,l)),this.events.next(new jo(a.redirectTo,a.navigationBehaviorOptions))}else throw this.events.next(s),i}catch(a){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(a)}}return Re}))}))}cancelNavigationTransition(n,o,r){let i=new Mt(n.id,this.urlSerializer.serialize(n.extractedUrl),o,r);this.events.next(i),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let n=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),o=me(this.currentNavigation),r=o?.targetBrowserUrl??o?.extractedUrl;return n.toString()!==r?.toString()&&!o?.extras.skipLocationChange}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function $I(e){return e!==Ro}var zv=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:()=>y(zI),providedIn:"root"})}return e})(),tc=class{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}},zI=(()=>{class e extends tc{static \u0275fac=(()=>{let n;return function(r){return(n||(n=So(e)))(r||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Gv=(()=>{class e{urlSerializer=y($n);options=y(fn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=y(St);urlHandlingStrategy=y(rc);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new It;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:n,initialUrl:o,targetBrowserUrl:r}){let i=n!==void 0?this.urlHandlingStrategy.merge(n,o):o,s=r??i;return s instanceof It?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:n,finalUrl:o,initialUrl:r}){o&&n?(this.currentUrlTree=o,this.rawUrlTree=this.urlHandlingStrategy.merge(o,r),this.routerState=n):this.rawUrlTree=r}routerState=Tv(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:n}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n??this.rawUrlTree)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:()=>y(GI),providedIn:"root"})}return e})(),GI=(()=>{class e extends Gv{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(o=>{o.type==="popstate"&&setTimeout(()=>{n(o.url,o.state,"popstate")})})}handleRouterEvent(n,o){n instanceof dn?this.updateStateMemento():n instanceof _t?this.commitTransition(o):n instanceof ii?this.urlUpdateStrategy==="eager"&&(o.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(o),o)):n instanceof si?(this.commitTransition(o),this.urlUpdateStrategy==="deferred"&&!o.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(o),o)):n instanceof Mt&&n.code!==Oe.SupersededByNewNavigation&&n.code!==Oe.Redirect?this.restoreHistory(o):n instanceof Fo?this.restoreHistory(o,!0):n instanceof Ze&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,{extras:o,id:r}){let{replaceUrl:i,state:s}=o;if(this.location.isCurrentPathEqualTo(n)||i){let a=this.browserPageId,c=b(b({},s),this.generateNgRouterState(r,a));this.location.replaceState(n,"",c)}else{let a=b(b({},s),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(n,"",a)}}restoreHistory(n,o=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,i=this.currentPageId-r;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===n.finalUrl&&i===0&&(this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(o&&this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,o){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:o}:{navigationId:n}}static \u0275fac=(()=>{let n;return function(r){return(n||(n=So(e)))(r||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function sc(e,t){e.events.pipe(Ne(n=>n instanceof Ze||n instanceof Mt||n instanceof Fo||n instanceof _t),J(n=>n instanceof Ze||n instanceof _t?0:(n instanceof Mt?n.code===Oe.Redirect||n.code===Oe.SupersededByNewNavigation:!1)?2:1),Ne(n=>n!==2),At(1)).subscribe(()=>{t()})}var qI={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},YI={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Pe=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=y(Lu);stateManager=y(Gv);options=y(fn,{optional:!0})||{};pendingTasks=y(Ft);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=y(ic);urlSerializer=y($n);location=y(St);urlHandlingStrategy=y(rc);injector=y(ie);_events=new te;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=y(zv);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=y(Uo,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!y(hi,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:n=>{this.console.warn(n)}}),this.subscribeToNavigationEvents()}eventsSubscription=new ee;subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(o=>{try{let r=this.navigationTransitions.currentTransition,i=me(this.navigationTransitions.currentNavigation);if(r!==null&&i!==null){if(this.stateManager.handleRouterEvent(o,i),o instanceof Mt&&o.code!==Oe.Redirect&&o.code!==Oe.SupersededByNewNavigation)this.navigated=!0;else if(o instanceof Ze)this.navigated=!0;else if(o instanceof jo){let s=o.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(o.url,r.currentRawUrl),c=b({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||$I(r.source)},s);this.scheduleNavigation(a,Ro,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}GM(o)&&this._events.next(o)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ro,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,o,r)=>{this.navigateToSyncWithBrowser(n,r,o)})}navigateToSyncWithBrowser(n,o,r){let i={replaceUrl:!0},s=r?.navigationId?r:null;if(r){let c=b({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(i.state=c)}let a=this.parseUrl(n);this.scheduleNavigation(a,o,s,i).catch(c=>{this.disposed||this.injector.get(Je)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return me(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(qd),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,o={}){let{relativeTo:r,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:c}=o,l=c?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=b(b({},this.currentUrlTree.queryParams),i);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=i||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let v=r?r.snapshot:this.routerState.snapshot.root;d=Mv(v)}catch{(typeof n[0]!="string"||n[0][0]!=="/")&&(n=[]),d=this.currentUrlTree.root}return Iv(d,n,u,l??null)}navigateByUrl(n,o={skipLocationChange:!1}){let r=un(n)?n:this.parseUrl(n),i=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(i,Ro,null,o)}navigate(n,o={skipLocationChange:!1}){return KI(n),this.navigateByUrl(this.createUrlTree(n,o),o)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch{return this.console.warn(Yt(4018,!1)),this.urlSerializer.parse("/")}}isActive(n,o){let r;if(o===!0?r=b({},qI):o===!1?r=b({},YI):r=o,un(n))return sv(this.currentUrlTree,n,r);let i=this.parseUrl(n);return sv(this.currentUrlTree,i,r)}removeEmptyProps(n){return Object.entries(n).reduce((o,[r,i])=>(i!=null&&(o[r]=i),o),{})}scheduleNavigation(n,o,r,i,s){if(this.disposed)return Promise.resolve(!1);let a,c,l;s?(a=s.resolve,c=s.reject,l=s.promise):l=new Promise((d,v)=>{a=d,c=v});let u=this.pendingTasks.add();return sc(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:o,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:i,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(o){return new(o||e)};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function KI(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new w(4008,!1)}var ac=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;reactiveHref=vt(null);get href(){return me(this.reactiveHref)}set href(n){this.reactiveHref.set(n)}target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new te;applicationErrorHandler=y(Je);options=y(fn,{optional:!0});constructor(n,o,r,i,s,a){this.router=n,this.route=o,this.tabIndexAttribute=r,this.renderer=i,this.el=s,this.locationStrategy=a,this.reactiveHref.set(y(new ha("href"),{optional:!0}));let c=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href")),this.isAnchorElement?this.setTabIndexIfNotOnNativeEl("0"):this.subscribeToNavigationEventsIfNecessary()}subscribeToNavigationEventsIfNecessary(){if(this.subscription!==void 0||!this.isAnchorElement)return;let n=this.preserveFragment,o=r=>r==="merge"||r==="preserve";n||=o(this.queryParamsHandling),n||=!this.queryParamsHandling&&!o(this.options?.defaultQueryParamsHandling),n&&(this.subscription=this.router.events.subscribe(r=>{r instanceof Ze&&this.updateHref()}))}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(n){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",n)}ngOnChanges(n){this.isAnchorElement&&(this.updateHref(),this.subscribeToNavigationEventsIfNecessary()),this.onChanges.next(this)}routerLinkInput=null;set routerLink(n){n==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(un(n)?this.routerLinkInput=n:this.routerLinkInput=Array.isArray(n)?n:[n],this.setTabIndexIfNotOnNativeEl("0"))}onClick(n,o,r,i,s){let a=this.urlTree;if(a===null||this.isAnchorElement&&(n!==0||o||r||i||s||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,c)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let n=this.urlTree;this.reactiveHref.set(n!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(n))??"":null)}applyAttributeValue(n,o){let r=this.renderer,i=this.el.nativeElement;o!==null?r.setAttribute(i,n,o):r.removeAttribute(i,n)}get urlTree(){return this.routerLinkInput===null?null:un(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(o){return new(o||e)(_(Pe),_(ze),_r("tabindex"),_(Jt),_(Ct),_(lt))};static \u0275dir=Ae({type:e,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(o,r){o&1&&q("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),o&2&&Fr("href",r.reactiveHref(),mu)("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Jn],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Jn],replaceUrl:[2,"replaceUrl","replaceUrl",Jn],routerLink:"routerLink"},features:[rn]})}return e})();var gi=class{};var qv=(()=>{class e{router;injector;preloadingStrategy;loader;subscription;constructor(n,o,r,i){this.router=n,this.injector=o,this.preloadingStrategy=r,this.loader=i}setUpPreloading(){this.subscription=this.router.events.pipe(Ne(n=>n instanceof Ze),Wt(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(n,o){let r=[];for(let i of o){i.providers&&!i._injector&&(i._injector=Mo(i.providers,n,`Route: ${i.path}`));let s=i._injector??n,a=i._loadedInjector??s;(i.loadChildren&&!i._loadedRoutes&&i.canLoad===void 0||i.loadComponent&&!i._loadedComponent)&&r.push(this.preloadConfig(s,i)),(i.children||i._loadedRoutes)&&r.push(this.processRoutes(a,i.children??i._loadedRoutes))}return Q(r).pipe(ao())}preloadConfig(n,o){return this.preloadingStrategy.preload(o,()=>{let r;o.loadChildren&&o.canLoad===void 0?r=this.loader.loadChildren(n,o):r=I(null);let i=r.pipe(X(s=>s===null?I(void 0):(o._loadedRoutes=s.routes,o._loadedInjector=s.injector,this.processRoutes(s.injector??n,s.routes))));if(o.loadComponent&&!o._loadedComponent){let s=this.loader.loadComponent(n,o);return Q([i,s]).pipe(ao())}else return i})}static \u0275fac=function(o){return new(o||e)(M(Pe),M(ie),M(gi),M(oc))};static \u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Yv=new D(""),QI=(()=>{class e{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Ro;restoredId=0;store={};constructor(n,o,r,i,s={}){this.urlSerializer=n,this.transitions=o,this.viewportScroller=r,this.zone=i,this.options=s,s.scrollPositionRestoration||="disabled",s.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(n=>{n instanceof dn?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=n.navigationTrigger,this.restoredId=n.restoredState?n.restoredState.navigationId:0):n instanceof Ze?(this.lastId=n.id,this.scheduleScrollEvent(n,this.urlSerializer.parse(n.urlAfterRedirects).fragment)):n instanceof _t&&n.code===No.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(n,this.urlSerializer.parse(n.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(n=>{if(!(n instanceof Lo))return;let o={behavior:"instant"};n.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],o):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(n.position,o):n.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(n.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(n,o){this.zone.runOutsideAngular(()=>Wo(this,null,function*(){yield new Promise(r=>{setTimeout(r),typeof requestAnimationFrame<"u"&&requestAnimationFrame(r)}),this.zone.run(()=>{this.transitions.events.next(new Lo(n,this.lastSource==="popstate"?this.store[this.restoredId]:null,o))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(o){ku()};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function ZI(e){return e.routerState.root}function vi(e,t){return{\u0275kind:e,\u0275providers:t}}function XI(){let e=y(ye);return t=>{let n=e.get(wt);if(t!==n.components[0])return;let o=e.get(Pe),r=e.get(Kv);e.get(ef)===1&&o.initialNavigation(),e.get(Xv,null,{optional:!0})?.setUpPreloading(),e.get(Yv,null,{optional:!0})?.init(),o.resetRootComponentType(n.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Kv=new D("",{factory:()=>new te}),ef=new D("",{providedIn:"root",factory:()=>1});function Qv(){let e=[{provide:fu,useValue:!0},{provide:ef,useValue:0},ca(()=>{let t=y(ye);return t.get(rd,Promise.resolve()).then(()=>new Promise(o=>{let r=t.get(Pe),i=t.get(Kv);sc(r,()=>{o(!0)}),t.get(ic).afterPreactivation=()=>(o(!0),i.closed?I(void 0):i),r.initialNavigation()}))})];return vi(2,e)}function Zv(){let e=[ca(()=>{y(Pe).setUpLocationChangeListener()}),{provide:ef,useValue:2}];return vi(3,e)}var Xv=new D("");function ey(e){return vi(0,[{provide:Xv,useExisting:qv},{provide:gi,useExisting:e}])}function ty(){return vi(8,[zd,{provide:hi,useExisting:zd}])}function ny(e){Do("NgRouterViewTransitions");let t=[{provide:Kd,useValue:$v},{provide:Qd,useValue:b({skipNextTransition:!!e?.skipInitialTransition},e)}];return vi(9,t)}var oy=[St,{provide:$n,useClass:ln},Pe,zn,{provide:ze,useFactory:ZI,deps:[Pe]},oc,[]],cc=(()=>{class e{constructor(){}static forRoot(n,o){return{ngModule:e,providers:[oy,[],{provide:Uo,multi:!0,useValue:n},[],o?.errorHandler?{provide:Zd,useValue:o.errorHandler}:[],{provide:fn,useValue:o||{}},o?.useHash?t_():n_(),e_(),o?.preloadingStrategy?ey(o.preloadingStrategy).\u0275providers:[],o?.initialNavigation?o_(o):[],o?.bindToComponentInputs?ty().\u0275providers:[],o?.enableViewTransitions?ny().\u0275providers:[],r_()]}}static forChild(n){return{ngModule:e,providers:[{provide:Uo,multi:!0,useValue:n}]}}static \u0275fac=function(o){return new(o||e)};static \u0275mod=Ee({type:e});static \u0275inj=he({})}return e})();function e_(){return{provide:Yv,useFactory:()=>{let e=y(Ag),t=y(K),n=y(fn),o=y(ic),r=y($n);return n.scrollOffset&&e.setOffset(n.scrollOffset),new QI(r,o,e,t,n)}}}function t_(){return{provide:lt,useClass:sd}}function n_(){return{provide:lt,useClass:ba}}function o_(e){return[e.initialNavigation==="disabled"?Zv().\u0275providers:[],e.initialNavigation==="enabledBlocking"?Qv().\u0275providers:[]]}var Xd=new D("");function r_(){return[{provide:Xd,useFactory:XI},{provide:la,multi:!0,useExisting:Xd}]}var ry=(()=>{let t=class t{constructor(){this.title="Java & Spring Interview Syllabus"}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=ae({type:t,selectors:[["app-root"]],standalone:!1,decls:1,vars:0,template:function(r,i){r&1&&Se(0,"router-outlet")},dependencies:[pi],encapsulation:2});let e=t;return e})();var iy=[{id:1,title:"Core Java Basics",difficulty:"basic",topics:[{name:"Introduction to Java",subTopics:[{name:"History of Java"},{name:"Features of Java (Platform Independent, OOP, etc.)"},{name:"JDK, JRE, JVM Architecture"},{name:"Compilation and Execution Process"},{name:"Bytecode and Platform Independence"},{name:"Java Editions (SE, EE, ME)"},{name:"Path and Classpath (Environment Variables)"},{name:"First Java Program structure and main method"},{name:"Java Keywords and Identifiers"},{name:"Comments in Java (Single-line, Multi-line, Documentation)"},{name:"Java vs C++ comparison"},{name:"Java is Pass-by-Value"}]},{name:"Data Types & Variables",subTopics:[{name:"Primitive data types"},{name:"Reference types"},{name:"Type casting and conversion"},{name:"Variables (local, instance, static)"}]},{name:"Operators & Control Statements",subTopics:[{name:"Arithmetic, Logical, Relational operators"},{name:"If-else, switch statements"},{name:"Loops (for, while, do-while, enhanced for)"},{name:"Break, continue, return statements"}]},{name:"Arrays & Basic I/O",subTopics:[{name:"Single and multidimensional arrays"},{name:"Array manipulation"},{name:"Jagged arrays"},{name:"Scanner class and Console I/O"}]}]},{id:2,title:"Object-Oriented Programming (OOP)",difficulty:"basic",topics:[{name:"Classes and Objects",subTopics:[{name:"Class definition and object creation"},{name:"Constructors (default, parameterized, copy)"},{name:"Constructor overloading"},{name:"this keyword"},{name:"Object Initialization Order"}]},{name:"Encapsulation",subTopics:[{name:"Access modifiers (private, public, protected, default)"},{name:"Getters and Setters"},{name:"Data hiding"}]},{name:"Inheritance & Composition",subTopics:[{name:"Types of inheritance"},{name:"super keyword"},{name:"Method overriding"},{name:"final keyword"},{name:"IS-A vs HAS-A relationship"}]},{name:"Polymorphism",subTopics:[{name:"Compile-time (Method Overloading)"},{name:"Runtime (Method Overriding)"},{name:"Dynamic method dispatch"}]},{name:"Abstraction",subTopics:[{name:"Abstract classes and methods"},{name:"Interfaces"},{name:"Multiple inheritance using interfaces"},{name:"Marker interfaces"}]}]},{id:3,title:"Advanced OOP & Java Language Features",difficulty:"intermediate",topics:[{name:"Static keyword",subTopics:[{name:"Static variables and methods"},{name:"Static blocks"},{name:"Static nested classes"}]},{name:"Inner Classes",subTopics:[{name:"Member inner class"},{name:"Static nested class"},{name:"Local inner class"},{name:"Anonymous inner class"}]},{name:"Packages",subTopics:[{name:"Creating and using packages"},{name:"Import statements"},{name:"Access protection"}]},{name:"Object Class Methods",subTopics:[{name:"equals() and hashCode() contract"},{name:"toString()"},{name:"clone()"},{name:"finalize()"}]}]},{id:4,title:"Exception Handling",difficulty:"intermediate",topics:[{name:"Core Exception Handling",subTopics:[{name:"Fundamentals"},{name:"Exception Hierarchy"},{name:"Checked vs Unchecked Exceptions"},{name:"try\u2013catch\u2013finally blocks"},{name:"Multi-Catch and try-with-resources"},{name:"throw vs throws keyword"},{name:"Custom Exceptions"},{name:"Exception Propagation"},{name:"Exception Chaining"},{name:"Best Practices for Core Java Exception Handling"}]}]},{id:5,title:"Collections Framework",difficulty:"intermediate",topics:[{name:"Collection Interfaces",subTopics:[{name:"Collection, List, Set, Queue, Map"},{name:"Iterator, ListIterator, and Spliterator"}]},{name:"Implementations",subTopics:[{name:"ArrayList, LinkedList, Vector, Stack"},{name:"HashSet, LinkedHashSet, TreeSet"},{name:"HashMap, LinkedHashMap, TreeMap"},{name:"Hashtable and ConcurrentHashMap"},{name:"PriorityQueue and ArrayDeque"}]},{name:"Sorting and Utility",subTopics:[{name:"Comparable vs Comparator"},{name:"Collections and Arrays utility classes"}]}]},{id:6,title:"Generics",difficulty:"intermediate",topics:[{name:"Generic Classes and Methods"},{name:"Bounded Type Parameters"},{name:"Wildcards (?, extends, super)"},{name:"PECS Principle"},{name:"Type Erasure"}]},{id:7,title:"Multithreading & Concurrency",difficulty:"advanced",topics:[{name:"Thread Basics",subTopics:[{name:"Thread class vs Runnable interface"},{name:"Thread lifecycle"},{name:"sleep, join, yield, interrupt"}]},{name:"Synchronization",subTopics:[{name:"synchronized keyword (blocks/methods)"},{name:"Locking: Object level vs Class level"},{name:"volatile keyword"},{name:"Deadlock, Livelock, and Starvation"}]},{name:"Inter-thread Communication",subTopics:[{name:"wait, notify, and notifyAll"},{name:"Producer-Consumer problem"}]},{name:"Concurrency Utilities",subTopics:[{name:"Executor Framework and Thread Pools"},{name:"Callable and Future"},{name:"CompletableFuture"},{name:"Locks (ReentrantLock, ReadWriteLock)"},{name:"Atomic variables"},{name:"CountDownLatch and CyclicBarrier"}]}]},{id:8,title:"Java Version-wise Features",difficulty:"intermediate",topics:[{name:"Java 8 Features",subTopics:[{name:"Lambda Expressions"},{name:"Functional Interfaces"},{name:"Stream API"},{name:"Optional Class"},{name:"Default and Static methods in Interfaces"},{name:"Date and Time API (java.time)"}]},{name:"Java 9 to 11 Features",subTopics:[{name:"Module System (JPMS)"},{name:"Private methods in Interfaces"},{name:"JShell"},{name:"var keyword (Local Variable Type Inference)"},{name:"HTTP Client API"}]},{name:"Java 12 to 17 Features (LTS)",subTopics:[{name:"Switch Expressions"},{name:"Text Blocks"},{name:"Records"},{name:"Sealed Classes"},{name:"Pattern Matching for instanceof"}]},{name:"Java 21 Features (LTS)",subTopics:[{name:"Virtual Threads (Project Loom)"},{name:"Sequenced Collections"},{name:"Record Patterns"},{name:"Pattern Matching for Switch"}]}]},{id:9,title:"String Handling",difficulty:"basic",topics:[{name:"String immutability and String Pool"},{name:"String vs StringBuilder vs StringBuffer"},{name:"Common String methods"},{name:"String formatting and manipulation"}]},{id:10,title:"Regular Expressions (Regex)",difficulty:"intermediate",topics:[{name:"Pattern and Matcher classes"},{name:"Regex metacharacters and quantifiers"},{name:"Groups and capturing"},{name:"Common regex patterns for validation"}]},{id:11,title:"File I/O & Serialization",difficulty:"intermediate",topics:[{name:"Byte Streams vs Character Streams"},{name:"BufferedReader and BufferedWriter"},{name:"Java NIO (Path, Files, Channels)"},{name:"Serialization and Deserialization (transient, serialVersionUID)"},{name:"Externalizable interface"}]},{id:12,title:"Networking in Java",difficulty:"intermediate",topics:[{name:"Socket Programming (TCP/UDP)"},{name:"URL and URLConnection"},{name:"HttpURLConnection"},{name:"InetAddress class"}]},{id:13,title:"JDBC (Database Connectivity)",difficulty:"intermediate",topics:[{name:"JDBC Architecture and Drivers"},{name:"Statement vs PreparedStatement vs CallableStatement"},{name:"ResultSet and Transaction Management"},{name:"Connection Pooling concepts"}]},{id:14,title:"JVM Internals & Memory Management",difficulty:"advanced",topics:[{name:"JVM Architecture: ClassLoader, Runtime Data Areas, Execution Engine"},{name:"Heap vs Stack Memory"},{name:"Garbage Collection Algorithms (G1, ZGC, etc.)"},{name:"JIT Compiler and Memory Leaks"},{name:"Memory Model and happens-before relationship"},{name:"Reference Types (Strong, Weak, Soft, Phantom)"}]},{id:15,title:"Advanced Java Concepts",difficulty:"advanced",topics:[{name:"Cloning (Shallow vs Deep)"},{name:"Immutable Objects creation"},{name:"Java Native Interface (JNI)"},{name:"Java Beans"},{name:"RMI (Remote Method Invocation)"},{name:"Java Security Manager"}]},{id:16,title:"Miscellaneous Core Topics",difficulty:"intermediate",topics:[{name:"Reflection API"},{name:"Annotations (Built-in and Custom)"},{name:"Enums"},{name:"Wrapper Classes and Autoboxing/Unboxing"},{name:"Internationalization (i18n) and Localization"},{name:"JavaDoc and Code Documentation"}]},{id:17,title:"Core Java Design Principles",difficulty:"advanced",topics:[{name:"SOLID Principles"},{name:"Creational Design Patterns (Singleton, Factory, Builder)"},{name:"Structural Design Patterns (Adapter, Proxy, Decorator)"},{name:"Behavioral Design Patterns (Observer, Strategy)"}]},{id:18,title:"Best Practices & Code Quality",difficulty:"intermediate",topics:[{name:"Clean Code principles"},{name:"Code smells and refactoring"},{name:"Exception handling best practices"},{name:"Naming conventions and coding standards"},{name:"Performance optimization techniques"},{name:"Unit Testing with JUnit and Mockito"}]}];var sy=[{id:1,title:"Core Spring Framework (Deep Dive)",difficulty:"basic",topics:[{name:"Inversion of Control (IoC) & Dependency Injection (DI)",subTopics:[{name:"ApplicationContext vs BeanFactory"},{name:"Bean Scopes (Singleton, Prototype, Request, Session)"},{name:"Bean Lifecycle (@PostConstruct, @PreDestroy)"},{name:"Configuration Styles: Java-based (@Configuration), Annotation-based (@Component), XML"},{name:"Dependency Injection types: Constructor (Best Practice) vs Setter vs Field"}]},{name:"Spring Expression Language (SpEL)"},{name:"Aspect-Oriented Programming (AOP)",subTopics:[{name:"Cross-cutting concerns (Logging, Transaction management)"},{name:"Aspect, Advice, Pointcut, JoinPoint"},{name:"Annotations: @Before, @After, @Around, @AfterThrowing"}]}]},{id:2,title:"Spring Security (Security 6.x)",difficulty:"advanced",topics:[{name:"Core Concepts",subTopics:[{name:"Authentication vs Authorization"},{name:"SecurityFilterChain & Filters"},{name:"UserDetailsService & PasswordEncoding (BCrypt)"}]},{name:"Authentication Mechanisms",subTopics:[{name:"Basic Auth & Form Login"},{name:"JWT (JSON Web Tokens): Implementation & Best Practices"}]},{name:"OAuth2 & OpenID Connect (OIDC)",subTopics:[{name:"Resource Server, Authorization Server, Client"},{name:"Social Login (Google, GitHub)"}]},{name:"Authorization",subTopics:[{name:"Role-based vs Authority-based access"},{name:"Method Level Security (@PreAuthorize, @PostAuthorize)"}]},{name:"Protection",subTopics:[{name:"CORS (Cross-Origin Resource Sharing)"},{name:"CSRF (Cross-Site Request Forgery)"}]}]}];var ay=[{id:1,title:"Spring Boot Fundamentals",difficulty:"intermediate",topics:[{name:"Introduction",subTopics:[{name:'Opinionated Defaults & "Convention over Configuration"'},{name:"Starters (spring-boot-starter-web, etc.)"},{name:"Auto-configuration magic (@EnableAutoConfiguration)"}]},{name:"Configuration Management",subTopics:[{name:"application.properties vs application.yml"},{name:"@Value, @ConfigurationProperties"},{name:"Profiles (Dev, QA, Prod)"}]},{name:"Developer Tools",subTopics:[{name:"Spring Boot DevTools (Live Reload)"},{name:"Lombok integration"}]}]},{id:2,title:"Data Access & Persistence",difficulty:"intermediate",topics:[{name:"Spring JDBC",subTopics:[{name:"JdbcTemplate & NamedParameterJdbcTemplate"}]},{name:"Spring Data JPA (Hibernate)",subTopics:[{name:"Entity Mapping (@Entity, @Table, @Id, @GeneratedValue)"},{name:"Repositories (CrudRepository, JpaRepository)"},{name:"Query Methods (Derived queries, @Query, Native Queries)"},{name:"Relationships (OneToOne, OneToMany, ManyToMany)"},{name:"Pagination & Sorting"}]},{name:"Transaction Management",subTopics:[{name:"@Transactional (Propagation, Isolation levels, Rollback rules)"}]},{name:"NoSQL Integration",subTopics:[{name:"Spring Data MongoDB"},{name:"Spring Data Redis (Caching & Pub/Sub)"}]},{name:"Database Migration",subTopics:[{name:"Flyway or Liquibase integration"}]}]},{id:3,title:"Web & REST API Development",difficulty:"intermediate",topics:[{name:"Spring MVC",subTopics:[{name:"DispatcherServlet architecture"},{name:"Controllers (@RestController, @RequestMapping)"},{name:"Request/Response Handling (@RequestBody, @ResponseBody, @RequestParam, @PathVariable)"},{name:"Status Codes & ResponseEntity"}]},{name:"Advanced REST",subTopics:[{name:"Global Exception Handling (@ControllerAdvice, @ExceptionHandler)"},{name:"Bean Validation (Hibernate Validator, @Valid, @NotNull, @Size)"},{name:"HATEOAS (Hypermedia as the Engine of Application State)"},{name:"Content Negotiation (JSON vs XML)"},{name:"File Upload/Download"}]},{name:"API Documentation",subTopics:[{name:"OpenAPI 3.0 / Swagger (SpringDoc)"}]}]},{id:4,title:"Microservices & Spring Cloud",difficulty:"advanced",topics:[{name:"Service Discovery",subTopics:[{name:"Netflix Eureka / HashiCorp Consul"}]},{name:"API Gateway",subTopics:[{name:"Spring Cloud Gateway (Routing, Filtering, Rate Limiting)"}]},{name:"Config Management",subTopics:[{name:"Spring Cloud Config Server (Centralized configuration)"}]},{name:"Resilience & Fault Tolerance",subTopics:[{name:"Resilience4j (Circuit Breaker, Retry, Rate Limiter, Bulkhead)"}]},{name:"Distributed Tracing",subTopics:[{name:"Micrometer Tracing (formerly Sleuth) + Zipkin/Brave"}]}]},{id:5,title:"Spring AI (Generative AI)",difficulty:"advanced",topics:[{name:"Introduction to Generative AI",subTopics:[{name:"Large Language Models (LLMs) concepts"}]},{name:"Spring AI Core",subTopics:[{name:"Chat Client API: Interacting with OpenAI, Azure OpenAI, Ollama, HuggingFace"},{name:"Prompts: Prompt Templates, Prompt Engineering within Java"},{name:"Output Parsers: Converting AI text responses into Java Objects (POJOs)"}]},{name:"Embeddings & Vector Databases",subTopics:[{name:"Text Embeddings models"},{name:"Vector Store integration (PGVector, Pinecone, Milvus, Redis)"}]},{name:"RAG (Retrieval Augmented Generation)",subTopics:[{name:"Document Readers (PDF, Text, JSON)"},{name:"Token Splitters"},{name:"Contextual search implementation"}]},{name:"Advanced AI",subTopics:[{name:"Function Calling (Letting AI call your Java methods)"},{name:"Image Generation (DALL-E, Stability AI)"}]}]},{id:6,title:"Messaging & Event-Driven Architecture",difficulty:"advanced",topics:[{name:"JMS (Java Message Service)",subTopics:[{name:"ActiveMQ integration"}]},{name:"Apache Kafka",subTopics:[{name:"Spring for Apache Kafka"},{name:"Producers, Consumers, Consumer Groups"}]},{name:"RabbitMQ",subTopics:[{name:"Exchanges, Queues, Routing Keys"}]},{name:"Spring Cloud Stream",subTopics:[{name:"Binder abstraction (Switch between Kafka/RabbitMQ easily)"}]}]},{id:7,title:"Spring Batch & Scheduling",difficulty:"advanced",topics:[{name:"Scheduling",subTopics:[{name:"@Scheduled (FixedRate, FixedDelay, Cron expressions)"},{name:"Quartz Scheduler integration"}]},{name:"Spring Batch",subTopics:[{name:"Job, Step, JobRepository"},{name:"ItemReader, ItemProcessor, ItemWriter"},{name:"Chunk-oriented processing"},{name:"Error handling (Skip, Retry policies)"},{name:"Parallel processing & Partitioning"}]}]},{id:8,title:"Reactive Programming (WebFlux)",difficulty:"advanced",topics:[{name:"Project Reactor",subTopics:[{name:"Mono vs Flux"},{name:"Backpressure"}]},{name:"Spring WebFlux",subTopics:[{name:"Non-blocking REST APIs"},{name:"Netty Server"},{name:"Reactive Database Access (R2DBC)"}]}]},{id:9,title:"Spring Boot Testing",difficulty:"intermediate",topics:[{name:"Unit Testing",subTopics:[{name:"JUnit 5 & Mockito (Mocking dependencies)"}]},{name:"Integration Testing",subTopics:[{name:"@SpringBootTest"},{name:"Test Slices (@WebMvcTest, @DataJpaTest)"}]},{name:"Advanced Testing",subTopics:[{name:"Testcontainers (Spinning up real DBs/Kafka in Docker for tests)"},{name:"WireMock (Mocking external APIs)"}]}]},{id:10,title:"Observability & Production Ready",difficulty:"advanced",topics:[{name:"Spring Boot Actuator",subTopics:[{name:"Health checks, Metrics, Info, Beans endpoints"}]},{name:"Monitoring",subTopics:[{name:"Micrometer (Metrics facade)"},{name:"Prometheus & Grafana integration"}]},{name:"Logging",subTopics:[{name:"SLF4J, Logback"},{name:"Log aggregation (ELK Stack: Elasticsearch, Logstash, Kibana)"}]},{name:"Deployment",subTopics:[{name:"Dockerizing Spring Boot"},{name:"GraalVM Native Images (AOT Compilation for instant startup)"}]}]},{id:11,title:"Miscellaneous / Advanced Spring",difficulty:"advanced",topics:[{name:"GraphQL",subTopics:[{name:"Spring for GraphQL (Controller, Schema, DataFetchers)"}]},{name:"WebSockets",subTopics:[{name:"STOMP protocol, SockJS, Real-time chat"}]},{name:"Caching",subTopics:[{name:"@Cacheable, @CacheEvict"},{name:"Providers: Caffeine, Redis"}]}]}];var pn=(()=>{let t=class t{constructor(){this.javaSections=iy,this.springSections=sy,this.springbootSections=ay}getSections(){return[...this.javaSections,...this.springSections,...this.springbootSections]}getSectionsByTechnology(o){switch(o.toLowerCase()){case"java":return this.javaSections;case"spring":return this.springSections;case"springboot":return this.springbootSections;default:return[]}}getTopicCount(o){return this.getSectionsByTechnology(o).reduce((i,s)=>i+s.topics.length,0)}getSubtopicCount(o){return this.getSectionsByTechnology(o).reduce((i,s)=>i+s.topics.reduce((a,c)=>a+(c.subTopics?.length||0),0),0)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function c_(e,t){e&1&&(h(0,"div",27),m(1,"Coming Soon"),f())}function l_(e,t){if(e&1&&(h(0,"div",28)(1,"div",29)(2,"span",30),m(3),f(),h(4,"span",31),m(5,"Topics"),f()(),h(6,"div",29)(7,"span",30),m(8),f(),h(9,"span",31),m(10,"Subtopics"),f()()()),e&2){let n=R().$implicit;g(3),j(n.topicCount),g(5),j(n.subtopicCount)}}function u_(e,t){e&1&&(h(0,"button",32),m(1," Explore Syllabus \u2192 "),f())}function d_(e,t){e&1&&(h(0,"span",33),m(1," \u{1F512} Coming Soon "),f())}function f_(e,t){if(e&1){let n=Et();h(0,"div",16),q("click",function(){let r=rt(n).$implicit,i=R();return it(i.navigateToTechnology(r))}),P(1,c_,2,0,"div",17),h(2,"div",18)(3,"div",19)(4,"span",20),m(5),f()(),h(6,"h3",21),m(7),f(),h(8,"p",22),m(9),f(),P(10,l_,11,2,"div",23),h(11,"div",24),P(12,u_,2,0,"button",25)(13,d_,2,0,"span",26),f()()()}if(e&2){let n=t.$implicit;ce("available",n.available)("coming-soon",!n.available),g(),E("ngIf",!n.available),g(2),_o("background",n.color+"20"),g(2),j(n.icon),g(2),j(n.name),g(2),j(n.description),g(),E("ngIf",n.available&&n.topicCount),g(2),E("ngIf",n.available),g(),E("ngIf",!n.available)}}var cy=(()=>{let t=class t{constructor(o,r){this.router=o,this.syllabusService=r,this.technologies=[{id:"java",name:"Java",icon:"\u2615",description:"Core Java, OOP, Collections, Exception Handling",color:"#f89820",route:"/java",available:!0},{id:"spring",name:"Spring Framework",icon:"\u{1F343}",description:"Spring Core, DI, AOP, Spring MVC",color:"#6db33f",route:"/spring",available:!0},{id:"springboot",name:"Spring Boot",icon:"\u{1F680}",description:"Auto-configuration, REST APIs, Microservices",color:"#6db33f",route:"/springboot",available:!0},{id:"angular",name:"Angular",icon:"\u{1F170}\uFE0F",description:"Components, Services, RxJS, Routing",color:"#dd0031",route:"/angular",available:!1},{id:"flutter",name:"Flutter",icon:"\u{1F4F1}",description:"Dart, Widgets, State Management, UI",color:"#02569b",route:"/flutter",available:!1},{id:"android",name:"Android",icon:"\u{1F916}",description:"Kotlin, Activities, Fragments, Jetpack",color:"#3ddc84",route:"/android",available:!1},{id:"react",name:"React",icon:"\u269B\uFE0F",description:"Hooks, Components, Redux, Next.js",color:"#61dafb",route:"/react",available:!1},{id:"nodejs",name:"Node.js",icon:"\u{1F4D7}",description:"Express, REST APIs, MongoDB, Authentication",color:"#68a063",route:"/nodejs",available:!1}]}ngOnInit(){this.technologies.forEach(o=>{o.available&&(o.topicCount=this.syllabusService.getTopicCount(o.id),o.subtopicCount=this.syllabusService.getSubtopicCount(o.id))})}navigateToTechnology(o){o.available&&this.router.navigate([o.route])}};t.\u0275fac=function(r){return new(r||t)(_(Pe),_(pn))},t.\u0275cmp=ae({type:t,selectors:[["app-home"]],standalone:!1,decls:59,vars:1,consts:[[1,"home-container"],[1,"hero-section"],[1,"main-title"],[1,"subtitle"],[1,"stats"],[1,"stat-item"],[1,"stat-number"],[1,"stat-label"],[1,"technologies-section"],[1,"section-title"],[1,"tech-grid"],["class","tech-card",3,"available","coming-soon","click",4,"ngFor","ngForOf"],[1,"features-section"],[1,"features-grid"],[1,"feature-card"],[1,"feature-icon"],[1,"tech-card",3,"click"],["class","card-ribbon",4,"ngIf"],[1,"card-content"],[1,"icon-wrapper"],[1,"tech-icon"],[1,"tech-name"],[1,"tech-description"],["class","stats-info",4,"ngIf"],[1,"card-footer"],["class","explore-btn",4,"ngIf"],["class","locked-badge",4,"ngIf"],[1,"card-ribbon"],[1,"stats-info"],[1,"stat-badge"],[1,"stat-value"],[1,"stat-text"],[1,"explore-btn"],[1,"locked-badge"]],template:function(r,i){r&1&&(h(0,"div",0)(1,"div",1)(2,"h1",2),m(3,"\u{1F4DA} Tech Learning Hub"),f(),h(4,"p",3),m(5,"Master Modern Technologies with Comprehensive Study Materials"),f(),h(6,"div",4)(7,"div",5)(8,"span",6),m(9,"8+"),f(),h(10,"span",7),m(11,"Technologies"),f()(),h(12,"div",5)(13,"span",6),m(14,"100+"),f(),h(15,"span",7),m(16,"Topics Covered"),f()(),h(17,"div",5)(18,"span",6),m(19,"500+"),f(),h(20,"span",7),m(21,"Code Examples"),f()()()(),h(22,"div",8)(23,"h2",9),m(24,"Choose Your Learning Path"),f(),h(25,"div",10),P(26,f_,14,13,"div",11),f()(),h(27,"div",12)(28,"h2",9),m(29,"Why Learn Here?"),f(),h(30,"div",13)(31,"div",14)(32,"div",15),m(33,"\u{1F4D6}"),f(),h(34,"h3"),m(35,"Structured Content"),f(),h(36,"p"),m(37,"Well-organized topics from basics to advanced concepts"),f()(),h(38,"div",14)(39,"div",15),m(40,"\u{1F4BB}"),f(),h(41,"h3"),m(42,"Code Examples"),f(),h(43,"p"),m(44,"Practical code snippets for every concept"),f()(),h(45,"div",14)(46,"div",15),m(47,"\u{1F3AF}"),f(),h(48,"h3"),m(49,"Interview Ready"),f(),h(50,"p"),m(51,"Common interview questions with detailed answers"),f()(),h(52,"div",14)(53,"div",15),m(54,"\u{1F4CA}"),f(),h(55,"h3"),m(56,"Visual Diagrams"),f(),h(57,"p"),m(58,"Complex concepts explained with illustrations"),f()()()()()),r&2&&(g(26),E("ngForOf",i.technologies))},dependencies:[Le,ut],styles:[".home-container[_ngcontent-%COMP%]{min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);padding:40px 20px}.hero-section[_ngcontent-%COMP%]{text-align:center;padding:60px 20px;color:#fff}.main-title[_ngcontent-%COMP%]{font-size:clamp(2rem,8vw,56px);font-weight:800;margin:0 0 20px;text-shadow:2px 2px 4px rgba(0,0,0,.2);animation:_ngcontent-%COMP%_fadeInDown .8s ease-out;line-height:1.2}.subtitle[_ngcontent-%COMP%]{font-size:clamp(1rem,4vw,24px);margin:0 0 50px;opacity:.95;font-weight:300;animation:_ngcontent-%COMP%_fadeInUp .8s ease-out;padding:0 10px}.stats[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:60px;flex-wrap:wrap;margin-top:40px}.stat-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.stat-number[_ngcontent-%COMP%]{font-size:48px;font-weight:700;color:#ffd43b}.stat-label[_ngcontent-%COMP%]{font-size:16px;opacity:.9;margin-top:8px}.technologies-section[_ngcontent-%COMP%]{max-width:1400px;margin:0 auto;padding:40px 20px}.section-title[_ngcontent-%COMP%]{text-align:center;font-size:36px;font-weight:700;color:#fff;margin:0 0 50px;text-shadow:1px 1px 2px rgba(0,0,0,.2)}.tech-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr));gap:30px;padding:20px 0}@media (max-width: 768px){.tech-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:20px;padding:10px 0}}@media (max-width: 480px){.tech-grid[_ngcontent-%COMP%]{gap:15px}}.tech-card[_ngcontent-%COMP%]{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px #0003;transition:all .3s ease;position:relative;cursor:pointer}.tech-card.available[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 20px 40px #0000004d}.tech-card.coming-soon[_ngcontent-%COMP%]{opacity:.7;cursor:not-allowed}.tech-card.coming-soon[_ngcontent-%COMP%]:hover{transform:translateY(-3px)}.card-ribbon[_ngcontent-%COMP%]{position:absolute;top:15px;right:-35px;background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;padding:5px 40px;font-size:12px;font-weight:600;transform:rotate(45deg);box-shadow:0 2px 5px #0003;z-index:10}.card-content[_ngcontent-%COMP%]{padding:30px}.icon-wrapper[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px}.tech-icon[_ngcontent-%COMP%]{font-size:48px}.tech-name[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#333;margin:0 0 12px;text-align:center}.tech-description[_ngcontent-%COMP%]{font-size:14px;color:#666;line-height:1.6;text-align:center;margin:0 0 20px;min-height:40px}.stats-info[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:15px;margin-bottom:20px}.stat-badge[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;background:linear-gradient(135deg,#667eea15,#764ba215);padding:8px 16px;border-radius:12px;border:1px solid #667eea30}.stat-value[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#667eea}.stat-text[_ngcontent-%COMP%]{font-size:11px;color:#666;text-transform:uppercase;margin-top:2px;font-weight:600}.card-footer[_ngcontent-%COMP%]{text-align:center}.explore-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;padding:12px 30px;border-radius:25px;font-size:14px;font-weight:600;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 15px #667eea66}.explore-btn[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 6px 20px #667eea99}.locked-badge[_ngcontent-%COMP%]{display:inline-block;padding:8px 20px;background:#f1f3f5;color:#868e96;border-radius:20px;font-size:13px;font-weight:600}.features-section[_ngcontent-%COMP%]{max-width:1200px;margin:80px auto 0;padding:40px 20px}.features-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:30px;margin-top:40px}.feature-card[_ngcontent-%COMP%]{background:#ffffff1a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:30px;text-align:center;color:#fff;transition:all .3s ease}.feature-card[_ngcontent-%COMP%]:hover{background:#ffffff26;transform:translateY(-5px)}.feature-icon[_ngcontent-%COMP%]{font-size:48px;margin-bottom:20px}.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:600;margin:0 0 12px}.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;opacity:.9;line-height:1.6;margin:0}@keyframes _ngcontent-%COMP%_fadeInDown{0%{opacity:0;transform:translateY(-30px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 1024px){.home-container[_ngcontent-%COMP%]{padding:30px 15px}.hero-section[_ngcontent-%COMP%]{padding:40px 15px}.stats[_ngcontent-%COMP%]{gap:40px}}@media (max-width: 768px){.home-container[_ngcontent-%COMP%]{padding:20px 10px}.hero-section[_ngcontent-%COMP%]{padding:30px 10px}.stats[_ngcontent-%COMP%]{gap:25px}.stat-number[_ngcontent-%COMP%]{font-size:36px}.stat-label[_ngcontent-%COMP%]{font-size:14px}.section-title[_ngcontent-%COMP%]{font-size:28px;margin-bottom:30px}.card-content[_ngcontent-%COMP%]{padding:20px}.icon-wrapper[_ngcontent-%COMP%]{width:60px;height:60px}.tech-icon[_ngcontent-%COMP%]{font-size:36px}.tech-name[_ngcontent-%COMP%]{font-size:20px}.stats-info[_ngcontent-%COMP%]{gap:10px;flex-wrap:wrap}.stat-badge[_ngcontent-%COMP%]{padding:6px 12px}.explore-btn[_ngcontent-%COMP%]{padding:10px 24px;font-size:13px;min-height:44px}.features-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:20px}.feature-card[_ngcontent-%COMP%]{padding:20px}}@media (max-width: 480px){.home-container[_ngcontent-%COMP%]{padding:15px 8px}.hero-section[_ngcontent-%COMP%]{padding:20px 10px}.stats[_ngcontent-%COMP%]{gap:20px}.stat-number[_ngcontent-%COMP%]{font-size:28px}.stat-label[_ngcontent-%COMP%]{font-size:12px}.section-title[_ngcontent-%COMP%]{font-size:22px;margin-bottom:20px}.card-content[_ngcontent-%COMP%]{padding:15px}.icon-wrapper[_ngcontent-%COMP%]{width:50px;height:50px;margin-bottom:15px}.tech-icon[_ngcontent-%COMP%]{font-size:28px}.tech-name[_ngcontent-%COMP%]{font-size:18px;margin-bottom:10px}.tech-description[_ngcontent-%COMP%]{font-size:13px;min-height:auto}.stats-info[_ngcontent-%COMP%]{gap:8px}.stat-badge[_ngcontent-%COMP%]{padding:5px 10px}.stat-value[_ngcontent-%COMP%]{font-size:16px}.stat-text[_ngcontent-%COMP%]{font-size:10px}.explore-btn[_ngcontent-%COMP%]{padding:10px 20px;font-size:12px;width:100%;max-width:200px}.locked-badge[_ngcontent-%COMP%]{padding:6px 16px;font-size:12px}.card-ribbon[_ngcontent-%COMP%]{font-size:10px;padding:4px 35px}.feature-card[_ngcontent-%COMP%]{padding:15px}.feature-icon[_ngcontent-%COMP%]{font-size:36px;margin-bottom:15px}.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px}}@media (max-width: 360px){.stat-number[_ngcontent-%COMP%]{font-size:24px}.tech-name[_ngcontent-%COMP%]{font-size:16px}.explore-btn[_ngcontent-%COMP%]{font-size:11px}}"]});let e=t;return e})();function p_(e,t){if(e&1){let n=Et();h(0,"strong",3),q("click",function(){rt(n);let r=R();return it(r.toggleCollapse())}),m(1),f()}if(e&2){let n=R();ce("collapsed",n.isCollapsed),g(),Be(" ",n.topic.name," ")}}function h_(e,t){if(e&1&&(h(0,"strong"),m(1),f()),e&2){let n=R();g(),Be(" ",n.topic.name," ")}}function m_(e,t){if(e&1){let n=Et();h(0,"li",7),q("click",function(){let r=rt(n).$implicit,i=R(2);return it(i.navigateToSubtopic(r.name))}),m(1),f()}if(e&2){let n=t.$implicit;g(),Be(" ",n.name," ")}}function g_(e,t){if(e&1&&(h(0,"div",4)(1,"ul",5),P(2,m_,2,1,"li",6),f()()),e&2){let n=R();ce("collapsed",n.isCollapsed),g(2),E("ngForOf",n.topic.subTopics)}}var ly=(()=>{let t=class t{constructor(o){this.router=o,this.sectionTitle="",this.isCollapsed=!0}toggleCollapse(){this.isCollapsed=!this.isCollapsed}navigateToSubtopic(o){this.router.navigate(["/subtopic-detail"],{queryParams:{subtopic:o,topic:this.topic.name,section:this.sectionTitle}})}};t.\u0275fac=function(r){return new(r||t)(_(Pe))},t.\u0275cmp=ae({type:t,selectors:[["app-topic"]],inputs:{topic:"topic",sectionTitle:"sectionTitle"},standalone:!1,decls:4,vars:3,consts:[["class","topic-header",3,"collapsed","click",4,"ngIf"],[4,"ngIf"],["class","sub-topics-wrapper",3,"collapsed",4,"ngIf"],[1,"topic-header",3,"click"],[1,"sub-topics-wrapper"],[1,"sub-topics"],["class","subtopic-item",3,"click",4,"ngFor","ngForOf"],[1,"subtopic-item",3,"click"]],template:function(r,i){r&1&&(h(0,"li"),P(1,p_,2,3,"strong",0)(2,h_,2,1,"strong",1)(3,g_,3,3,"div",2),f()),r&2&&(g(),E("ngIf",i.topic.subTopics&&i.topic.subTopics.length>0),g(),E("ngIf",!i.topic.subTopics||i.topic.subTopics.length===0),g(),E("ngIf",i.topic.subTopics&&i.topic.subTopics.length>0))},dependencies:[Le,ut],styles:['li[_ngcontent-%COMP%]{padding:10px 15px;margin:8px 0;background:#f8f9fa;border-radius:8px;border-left:3px solid #f5576c;transition:all .3s ease}li[_ngcontent-%COMP%]:hover{background:#e9ecef;transform:translate(10px);box-shadow:0 4px 8px #0000001a}.sub-topics[_ngcontent-%COMP%]{list-style:circle;margin-left:25px;margin-top:8px;color:#555}.sub-topics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px 0;background:none;border:none;transform:none}.sub-topics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:none;transform:none;box-shadow:none}.subtopic-item[_ngcontent-%COMP%]{cursor:pointer;color:#007bff;transition:color .2s ease;padding:8px 12px!important;border-radius:4px;margin:4px 0}.subtopic-item[_ngcontent-%COMP%]:hover{color:#0056b3;background:#e7f3ff!important;text-decoration:underline}.topic-header[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none;position:relative}.topic-header[_ngcontent-%COMP%]:before{content:"\\25bc";display:inline-block;margin-right:8px;transition:transform .3s ease;font-size:.8em}.topic-header.collapsed[_ngcontent-%COMP%]:before{transform:rotate(-90deg)}.sub-topics-wrapper[_ngcontent-%COMP%]{max-height:2000px;overflow:hidden;transition:max-height .3s ease,opacity .3s ease;opacity:1}.sub-topics-wrapper.collapsed[_ngcontent-%COMP%]{max-height:0;opacity:0}@media (max-width: 768px){li[_ngcontent-%COMP%]{padding:8px 12px;margin:6px 0;border-radius:6px}li[_ngcontent-%COMP%]:hover{transform:translate(5px)}.sub-topics[_ngcontent-%COMP%]{margin-left:15px;margin-top:6px}.subtopic-item[_ngcontent-%COMP%]{padding:6px 10px!important;margin:3px 0;font-size:.95em}.topic-header[_ngcontent-%COMP%]:before{margin-right:6px;font-size:.75em}}@media (max-width: 480px){li[_ngcontent-%COMP%]{padding:6px 10px;margin:5px 0;font-size:.9em}li[_ngcontent-%COMP%]:hover{transform:translate(3px)}.sub-topics[_ngcontent-%COMP%]{margin-left:10px}.subtopic-item[_ngcontent-%COMP%]{padding:5px 8px!important;font-size:.85em}}']});let e=t;return e})();function y_(e,t){if(e&1&&(h(0,"span",1),m(1),$u(2,"titlecase"),f()),e&2){let n=R();E("ngClass",n.difficulty),g(),Be(" ",zu(2,2,n.difficulty),`
`)}}var uy=(()=>{let t=class t{constructor(){this.difficulty=""}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=ae({type:t,selectors:[["app-difficulty-badge"]],inputs:{difficulty:"difficulty"},standalone:!1,decls:1,vars:1,consts:[["class","difficulty",3,"ngClass",4,"ngIf"],[1,"difficulty",3,"ngClass"]],template:function(r,i){r&1&&P(0,y_,3,4,"span",0),r&2&&E("ngIf",i.difficulty)},dependencies:[Br,ut,ad],styles:[".difficulty[_ngcontent-%COMP%]{display:inline-block;padding:3px 10px;border-radius:12px;font-size:.85em;margin-left:10px;font-weight:700}.difficulty.basic[_ngcontent-%COMP%]{background:#28a745;color:#fff}.difficulty.intermediate[_ngcontent-%COMP%]{background:#ffc107;color:#333}.difficulty.advanced[_ngcontent-%COMP%]{background:#dc3545;color:#fff}@media (max-width: 768px){.difficulty[_ngcontent-%COMP%]{padding:2px 8px;font-size:.75em;margin-left:8px}}@media (max-width: 480px){.difficulty[_ngcontent-%COMP%]{padding:2px 6px;font-size:.7em;display:block;margin-top:5px;margin-left:0;width:fit-content}}"]});let e=t;return e})();function C_(e,t){if(e&1&&Se(0,"app-topic",6),e&2){let n=t.$implicit,o=R();E("topic",n)("sectionTitle",o.section.title)}}var lc=(()=>{let t=class t{constructor(){this.allSections=[]}toggleSection(){this.allSections.forEach(o=>{o.id!==this.section.id&&(o.isCollapsed=!0)}),this.section.isCollapsed=!this.section.isCollapsed}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=ae({type:t,selectors:[["app-section"]],inputs:{section:"section",allSections:"allSections"},standalone:!1,decls:7,vars:8,consts:[[1,"section"],[1,"collapsible","section-title",3,"click"],[3,"difficulty"],[1,"section-content"],[1,"topics"],[3,"topic","sectionTitle",4,"ngFor","ngForOf"],[3,"topic","sectionTitle"]],template:function(r,i){r&1&&(h(0,"div",0)(1,"h2",1),q("click",function(){return i.toggleSection()}),m(2),Se(3,"app-difficulty-badge",2),f(),h(4,"div",3)(5,"ul",4),P(6,C_,1,2,"app-topic",5),f()()()),r&2&&(g(),ce("collapsed",i.section.isCollapsed),g(),Ht(" ",i.section.id,". ",i.section.title," "),g(),E("difficulty",i.section.difficulty),g(),ce("collapsed",i.section.isCollapsed),g(2),E("ngForOf",i.section.topics))},dependencies:[Le,ly,uy],styles:['.section[_ngcontent-%COMP%]{margin-bottom:35px;border-left:4px solid #667eea;padding-left:20px;transition:transform .3s ease}.section[_ngcontent-%COMP%]:hover{transform:translate(5px)}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#667eea;font-size:1.8em;margin-bottom:15px;display:flex;align-items:center}.section[_ngcontent-%COMP%]   h2.section-title[_ngcontent-%COMP%]:before{content:"\\2615";margin-right:10px;font-size:1.2em}.collapsible[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none;position:relative;padding-right:30px;min-height:44px;display:flex;align-items:center}.collapsible[_ngcontent-%COMP%]:after{content:"\\25bc";position:absolute;right:10px;transition:transform .3s ease;font-size:.8em}.collapsible.collapsed[_ngcontent-%COMP%]:after{transform:rotate(-90deg)}.collapsible[_ngcontent-%COMP%]:hover{opacity:.8}.section-content[_ngcontent-%COMP%]{max-height:5000px;overflow:hidden;transition:max-height .4s ease,opacity .3s ease;opacity:1}.section-content.collapsed[_ngcontent-%COMP%]{max-height:0;opacity:0}.topics[_ngcontent-%COMP%]{list-style:none;padding-left:0}@media (max-width: 768px){.section[_ngcontent-%COMP%]{margin-bottom:25px;padding-left:15px;border-left-width:3px}.section[_ngcontent-%COMP%]:hover{transform:translate(3px)}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.4em;margin-bottom:12px}.section[_ngcontent-%COMP%]   h2.section-title[_ngcontent-%COMP%]:before{margin-right:8px;font-size:1em}.collapsible[_ngcontent-%COMP%]{padding-right:25px}.collapsible[_ngcontent-%COMP%]:after{right:5px;font-size:.7em}}@media (max-width: 480px){.section[_ngcontent-%COMP%]{margin-bottom:20px;padding-left:10px}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2em;flex-wrap:wrap}.section[_ngcontent-%COMP%]   h2.section-title[_ngcontent-%COMP%]:before{margin-right:6px}}']});let e=t;return e})();function w_(e,t){if(e&1&&Se(0,"app-section",4),e&2){let n=t.$implicit,o=R();E("section",n)("allSections",o.sections)}}var fy=(()=>{let t=class t{constructor(o){this.syllabusService=o,this.sections=[]}ngOnInit(){this.sections=this.syllabusService.getSections(),this.sections.forEach(o=>o.isCollapsed=!0)}};t.\u0275fac=function(r){return new(r||t)(_(pn))},t.\u0275cmp=ae({type:t,selectors:[["app-homepage"]],standalone:!1,decls:19,vars:1,consts:[[1,"container"],[1,"content"],[1,"highlight"],[3,"section","allSections",4,"ngFor","ngForOf"],[3,"section","allSections"]],template:function(r,i){r&1&&(h(0,"div",0)(1,"header")(2,"h1"),m(3,"\u2615 Java & Spring Interview Syllabus"),f(),h(4,"p"),m(5,"Complete Guide for Java Developer Interviews (Core + Spring Ecosystem)"),f()(),h(6,"div",1)(7,"div",2)(8,"strong"),m(9,"Note:"),f(),m(10," This syllabus covers essential topics for Java interviews ranging from entry-level to senior positions. It now includes the complete Spring & Spring Boot ecosystem. "),f(),P(11,w_,1,2,"app-section",3),h(12,"div",2)(13,"strong"),m(14,"New!"),f(),m(15," The sections (25-37) contain the comprehensive Spring, Spring Boot 3.4+, and Spring AI syllabus. "),f()(),h(16,"footer")(17,"p"),m(18,"\xA9 2025 Java & Spring Interview Preparation Guide | Good luck with your interviews! \u2615"),f()()()),r&2&&(g(11),E("ngForOf",i.sections))},dependencies:[Le,lc],styles:[".container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;background:#fff;border-radius:15px;box-shadow:0 20px 60px #0000004d;overflow:hidden}header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;text-align:center;padding:40px 20px}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5em;margin-bottom:10px;text-shadow:2px 2px 4px rgba(0,0,0,.2)}header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1em;opacity:.95}.content[_ngcontent-%COMP%]{padding:40px}.highlight[_ngcontent-%COMP%]{background:#fff3cd;padding:15px;border-radius:8px;margin:15px 0;border-left:4px solid #ffc107}footer[_ngcontent-%COMP%]{background:#2c3e50;color:#fff;text-align:center;padding:20px;font-size:.9em}@media (max-width: 768px){.container[_ngcontent-%COMP%]{border-radius:0;box-shadow:none}header[_ngcontent-%COMP%]{padding:30px 15px}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.8em}header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1em}.content[_ngcontent-%COMP%]{padding:20px 15px}.highlight[_ngcontent-%COMP%]{padding:12px;margin:12px 0}footer[_ngcontent-%COMP%]{padding:15px;font-size:.85em}}@media (max-width: 480px){header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5em}header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em}.content[_ngcontent-%COMP%]{padding:15px 10px}}"]});let e=t;return e})();var py={name:"Core Java Exception Handling \u2014 Fundamentals",overview:"Understanding the fundamental concepts of exception handling in Java, including what exceptions are, why they exist, and how Java handles them internally.",sections:[{title:"What Is an Exception?",content:"An exception is an abnormal condition that occurs during program execution and disrupts the normal flow of instructions. In simple terms: An exception is a runtime problem that Java can detect and represent as an object.",subsections:[{title:"Common Examples",content:`1) Dividing by zero
 2) Accessing an array out of bounds
 3) Reading a missing file
 4) Calling a method on a null object`}],codeExamples:[{title:"Basic Exception Example",description:"ArithmeticException when dividing by zero",code:"int a = 10 / 0;  // ArithmeticException",language:"java"}]},{title:"Why Exception Handling Exists",content:"Exception handling is crucial for building robust and reliable applications.",subsections:[{title:"Without Exception Handling",content:`1. Program crashes abruptly
2. Resources are not released
3. No meaningful error message for users
4. Difficult debugging`},{title:"With Exception Handling",content:`1. Program fails gracefully
2. Errors are reported clearly
3. Resources are safely cleaned
4. System remains stable

\u{1F4A1} Goal: Separate error-handling logic from business logic`}]},{title:"Error vs Exception (VERY IMPORTANT)",content:"Understanding the difference between Error and Exception is fundamental to proper exception handling in Java.",subsections:[{title:"\u{1F534} Error",content:`1. Serious problems outside application control
2. Usually caused by JVM or system
3. Applications should NOT catch these
4. Examples: OutOfMemoryError, StackOverflowError`},{title:"\u{1F7E1} Exception",content:`1. Problems within application control
2. Can be handled and recovered
3. Part of normal program design`},{title:"Comparison Table",content:"Detailed comparison between Error and Exception in Java:",table:{headers:["Aspect","Error","Exception"],rows:[["Recoverable","\u274C No","\u2705 Yes"],["Caused by","JVM/System","Application logic"],["Should be handled","\u274C No","\u2705 Yes"],["Package","java.lang","java.lang"]]}}]},{title:"Compile-Time vs Runtime Errors",content:"Java distinguishes between errors that occur during compilation and those that occur during execution.",subsections:[{title:"\u274C Compile-Time Error",content:`1. Detected before execution
2. Caused by syntax mistakes
3. Must be fixed before program can run`},{title:"\u274C Runtime Error",content:`1. Happens during execution
2. Represented by exceptions
3. Can be handled using try-catch blocks`}],codeExamples:[{title:"Compile-Time Error Example",description:"Syntax error detected before execution",code:"int a = ; // compilation error",language:"java"},{title:"Runtime Error Example",description:"ArrayIndexOutOfBoundsException during execution",code:`int[] arr = new int[2];
arr[5] = 10; // runtime exception`,language:"java"}]},{title:"What Happens When an Exception Occurs? (JVM Flow)",content:"This is core conceptual knowledge about how the JVM handles exceptions.",subsections:[{title:"JVM Steps",content:`1. Exception occurs
2. JVM creates an Exception Object
3. Normal execution stops
4. JVM searches for a matching catch block
5. If found \u2192 handled
6. If not \u2192 program terminates`}]},{title:"Exception Is an Object (Key Concept)",content:"In Java, every exception is an object. All exceptions inherit from Throwable. This allows passing exceptions, catching by type, and accessing messages & stack traces.",codeExamples:[{title:"Exception as Object",description:"Creating and using exception objects",code:'ArithmeticException e = new ArithmeticException("Divide by zero");',language:"java"}]},{title:"The Call Stack & Exception Propagation",content:"When an exception occurs, it propagates up the call stack until it finds a handler or terminates the program.",subsections:[{title:"Propagation Process",content:`1. Exception occurs in methodB
2. JVM looks for handler in methodB
3. Not found \u2192 goes to methodA
4. Not found \u2192 goes to main
5. Still not found \u2192 JVM terminates program

This process is called stack unwinding.`}],codeExamples:[{title:"Call Stack Example",description:"How exceptions propagate through method calls",code:`void methodA() {
    methodB();
}

void methodB() {
    int x = 10 / 0;
}`,language:"java"}]},{title:"Default Exception Handling (Without try-catch)",content:"If no handling is provided, the JVM prints exception name, error message, and stack trace, then terminates the program.",codeExamples:[{title:"Default Exception Output",description:"What happens when exception is not caught",code:`Exception in thread "main" java.lang.ArithmeticException: / by zero
    at Test.methodB(Test.java:10)
    at Test.methodA(Test.java:5)`,language:"text"}]},{title:"Why Java Forces Exception Handling",content:"Java was designed for robust systems, enterprise applications, and long-running servers.",subsections:[{title:"Java Enforces",content:`1. Checked exception handling
2. Clear error contracts
3. Predictable failure behavior`},{title:"Why Java is Preferred For",content:`1. Banking
2. Telecom
3. Backend systems
4. Distributed applications`}]},{title:"Exception Handling vs Normal Control Flow",content:"\u{1F449} Exceptions are for exceptional cases, not normal logic. Use proper validation for expected conditions.",codeExamples:[{title:"\u{1F6AB} BAD PRACTICE",description:"Using exceptions for normal control flow",code:`try {
    int value = Integer.parseInt(str);
} catch (Exception e) {
    // Empty catch block - bad practice
}`,language:"java"},{title:"\u2705 GOOD PRACTICE",description:"Proper validation before parsing",code:`if (str != null && str.matches("\\\\d+")) {
    int value = Integer.parseInt(str);
}`,language:"java"}]}],images:[{url:"assets/images/exception-hierarchy.svg",alt:"Java Exception Hierarchy Diagram",caption:"Complete hierarchy of Java exception classes showing the relationship between Throwable, Error, and Exception"},{url:"assets/images/exception-flow.svg",alt:"Exception Handling Flow",caption:"How JVM handles exceptions - from occurrence to handling or termination"},{url:"assets/images/call-stack-propagation.svg",alt:"Call Stack and Exception Propagation",caption:"Visual representation of how exceptions propagate up the call stack through method calls (Stack Unwinding)"}],keyPoints:["An exception is a runtime problem that Java represents as an object","Exception handling separates error logic from business logic","Errors are serious JVM/system problems and should NOT be caught","Exceptions are application problems that CAN and SHOULD be handled","Compile-time errors are syntax issues; runtime errors are exceptions","When an exception occurs, JVM creates an object and searches for a handler","All exceptions are objects that inherit from Throwable","Exceptions propagate up the call stack until handled or program terminates","Without handling, JVM prints stack trace and terminates the program","Java forces exception handling for enterprise-grade robustness","Use exceptions for exceptional cases, not normal control flow"],references:["Oracle Java Documentation - Exception Handling","Effective Java by Joshua Bloch - Exception Handling Best Practices","Java Language Specification - Chapter 11: Exceptions"],interviewQA:[{question:"What is an exception in Java?",answer:"An exception is an abnormal condition or event that occurs during program execution and disrupts the normal flow of instructions. It is a runtime problem that Java detects and represents as an object. All exceptions inherit from the Throwable class.",difficulty:"easy",tags:["basics","definition"]},{question:"What is the difference between Error and Exception in Java?",answer:`Error:
1. Serious problems outside application control
2. Usually caused by JVM or system failures
3. Applications should NOT catch these
4. Examples: OutOfMemoryError, StackOverflowError
5. Not recoverable

Exception:
1. Problems within application control
2. Can be handled and recovered
3. Part of normal program design
4. Examples: NullPointerException, IOException
5. Recoverable through proper exception handling`,difficulty:"medium",tags:["error","exception","comparison"]},{question:"What happens when an exception occurs in Java?",answer:`When an exception occurs, the JVM follows these steps:
1. Exception object is created
2. Normal execution stops immediately
3. JVM searches for a matching catch block in the current method
4. If not found, it propagates to the calling method (stack unwinding)
5. This continues up the call stack
6. If a matching handler is found, it executes the catch block
7. If no handler is found anywhere, the program terminates and prints the stack trace`,difficulty:"medium",tags:["jvm","flow","propagation"]},{question:"What is the difference between compile-time and runtime errors?",answer:`Compile-Time Error:
1. Detected before program execution
2. Caused by syntax mistakes
3. Must be fixed before the program can run
4. Examples: missing semicolon, type mismatch
5. Caught by the compiler

Runtime Error:
1. Occurs during program execution
2. Represented by exceptions
3. Can be handled using try-catch blocks
4. Examples: division by zero, array index out of bounds
5. Detected by the JVM at runtime`,difficulty:"easy",tags:["compile-time","runtime","errors"]},{question:"Why does Java force exception handling?",answer:`Java enforces exception handling because it was designed for:
1. Robust enterprise systems
2. Long-running server applications
3. Banking and telecom systems
4. Distributed applications

Benefits:
1. Clear error contracts through method signatures
2. Predictable failure behavior
3. Forces developers to think about error scenarios
4. Ensures resources are properly cleaned up
5. Prevents silent failures
6. Makes code more maintainable and reliable`,difficulty:"medium",tags:["design","robustness","enterprise"]},{question:"What is exception propagation and stack unwinding?",answer:`Exception Propagation: When an exception occurs in a method and is not caught there, it propagates up the call stack to the calling method.

Stack Unwinding: The process of traversing back through the call stack looking for an exception handler.

Example:
main() \u2192 methodA() \u2192 methodB() \u2192 exception occurs

The exception propagates: methodB \u2192 methodA \u2192 main
If not handled anywhere, the JVM terminates the program.

This automatic propagation allows centralized exception handling at appropriate levels.`,difficulty:"hard",tags:["propagation","stack","call-stack"]},{question:"Is it a good practice to use exceptions for normal control flow?",answer:`No, it is NOT a good practice.

Bad Practice:
try {
    int value = Integer.parseInt(str);
} catch (Exception e) {
    // handle
}

Good Practice:
if (str != null && str.matches("\\\\d+")) {
    int value = Integer.parseInt(str);
}

Reasons:
1. Exceptions are expensive (creating stack traces)
2. Makes code harder to read and maintain
3. Hides actual exceptional conditions
4. Poor performance
5. Violates principle of least surprise

Rule: Use exceptions for exceptional cases, use validation for expected conditions.`,difficulty:"medium",tags:["best-practices","control-flow","performance"]},{question:"Why is an exception an object in Java?",answer:`Every exception in Java is an object because:

1. Enables passing exceptions between methods
2. Allows catching by specific type
3. Provides access to error information (message, stack trace)
4. Supports inheritance hierarchy for exception types
5. Can store additional context about the error

Example:
ArithmeticException e = new ArithmeticException("Divide by zero");

Benefits:
1. getMessage() - get error message
2. printStackTrace() - debug information
3. getCause() - exception chaining
4. Type-specific handling based on exception class`,difficulty:"medium",tags:["object","oop","design"]},{question:"What is the output when an exception is not caught?",answer:`When an exception is not caught, the JVM:

1. Prints the exception name
2. Prints the error message
3. Prints the complete stack trace
4. Terminates the program

Example Output:
Exception in thread "main" java.lang.ArithmeticException: / by zero
    at Test.methodB(Test.java:10)
    at Test.methodA(Test.java:5)
    at Test.main(Test.java:2)

The stack trace shows:
1. Exception type and message
2. Exact line where exception occurred
3. Complete method call chain
4. Line numbers for debugging`,difficulty:"easy",tags:["stack-trace","default-handling","output"]},{question:"Can you catch an Error in Java? Should you?",answer:`Can you? Technically YES - Errors extend Throwable, so they can be caught.

Should you? NO - You should NOT catch Errors.

Reasons:
1. Errors indicate serious JVM or system problems
2. Usually irrecoverable (OutOfMemoryError, StackOverflowError)
3. Application cannot meaningfully handle them
4. Catching may hide critical system issues
5. JVM might be in an unstable state

Exception: In very rare cases like custom class loaders or testing frameworks, you might catch specific Errors, but this is advanced and unusual.

Best Practice: Let Errors propagate and terminate the application, then fix the root cause.`,difficulty:"hard",tags:["error","best-practices","advanced"]}]};var hy={name:"Exception Hierarchy",overview:"In Java, all errors and exceptions inherit from java.lang.Throwable, which has two main branches: Error (serious problems the application usually should not handle) and Exception (conditions the application can catch and recover from). Checked exceptions are subclasses of Exception (excluding RuntimeException and its subclasses) and must be declared or handled, while unchecked exceptions are RuntimeException and its subclasses, indicating programming errors such as null dereferences or invalid arguments.",sections:[{title:"Introduction",content:"The Java exception hierarchy is rooted at java.lang.Throwable and splits into Error and Exception. Error represents JVM-level and system problems (for example, OutOfMemoryError) that applications typically do not catch, while Exception represents abnormal conditions in normal program flow. Within Exception, checked exceptions (like IOException) enforce explicit handling via try/catch or throws clauses, and unchecked exceptions (subclasses of RuntimeException) usually signal bugs such as illegal arguments or incorrect state."}],codeExamples:[],keyPoints:[],references:[]};var my={name:"\u2615 The History of Java \u2014 From a Coffee Break Idea to a Global Powerhouse",overview:"Java is one of those programming languages that feels like it has always been there. Banking apps \u{1F3E6}, Android phones \u{1F4F1}, enterprise servers \u{1F5A5}\uFE0F, ATMs \u{1F4B3}, smart TVs \u{1F4FA}\u2014Java is quietly running the world while sipping coffee \u2615. But Java didn't start as a global superstar. Its journey is full of pivots, smart decisions, accidental discoveries, and a little bit of luck. Let's rewind the clock and explore this fascinating story! \u{1F3AC}",sections:[{title:"\u{1F680} The Birth of Java (1991): The 'Green Project'",content:"Java was born in 1991 at Sun Microsystems. A small team called the Green Team, led by James Gosling (often called the 'Father of Java'), was working on a secret project. Their goal was NOT to create a programming language for developers\u2014instead, they wanted a language for consumer electronics. Plot twist: They ended up creating something way bigger! \u{1F3AF}",subsections:[{title:"The Original Goal \u{1F3AF}",content:`\u{1F449} They wanted a language that could run on anything:
\u2022 Set-top boxes (remember those?)
\u2022 TVs and remote controls
\u2022 Home appliances (smart fridges before they were cool)
\u2022 Consumer electronic devices
\u2022 Interactive television systems

\u{1F914} Challenge: Too many different processors and platforms. Writing code for each one was a nightmare!`},{title:"\u274C The Problem with Existing Languages",content:`C and C++ were powerful but:
\u2022 Too complex (pointer arithmetic, anyone? \u{1F605})
\u2022 Hardware-dependent (write once, compile everywhere)
\u2022 Prone to memory leaks and crashes
\u2022 Not suitable for portable devices
\u2022 Manual memory management = developer headaches

\u{1F4AD} Imagine: You write code for a TV, then have to rewrite it completely for a different TV brand. Not fun!`},{title:"\u2705 The Solution: A Revolutionary Idea",content:`Create a simple, safe, portable language that works everywhere!

They initially named it Oak \u{1F333}, after an oak tree outside James Gosling's office window.

\u{1F602} Fun fact: Oak had to be renamed because another company already owned the trademark. Even tech giants struggle with naming! (If you think naming variables is hard, try naming an entire programming language!)`},{title:"\u{1F3A8} The Green Team - The Dream Team",content:`Original members who changed programming forever:
\u2022 James Gosling - Lead architect & visionary
\u2022 Mike Sheridan - Project manager (the organizer)
\u2022 Patrick Naughton - Core engineer
\u2022 Plus a handful of brilliant engineers

They worked crazy hours, fueled by pizza and determination \u{1F355}. Their motto: 'We were building the future!'`}],images:[{url:"assets/images/green-team.svg",alt:"The Green Team Members at Sun Microsystems",caption:"The visionary team led by James Gosling who created Java - including Mike Sheridan, Patrick Naughton, and other core engineers"}]},{title:"\u2615 From Oak to Java (1995): The Coffee Shop Brainstorming Session",content:"When Oak needed a new name, the team went to a local coffee shop to brainstorm. After throwing around ideas (DNA? Silk? Ruby?), someone suggested 'Java' - inspired by Java coffee from Indonesia. The rest is history! \u2615",subsections:[{title:"Why 'Java'? The Name Game \u{1F3AE}",content:`The naming story is actually pretty fun:

\u2022 'Oak' was already trademarked by Oak Technologies \u274C
\u2022 Team went to a coffee shop for brainstorming \u2615
\u2022 Suggested names: DNA, Silk, Ruby, Java
\u2022 Why Java won:
  - Short and punchy \u2705
  - Easy to remember \u2705
  - Developers LOVE coffee (essential fuel!) \u2705
  - Java coffee from Indonesia sounded exotic \u2705

\u{1F604} The truth: Developers run on coffee, so naming a language after it was genius marketing!

\u2615 The coffee cup became Java's iconic logo - one of the most recognizable logos in tech!`},{title:"What Made Oak/Java Special? \u{1F31F}",content:`The language had revolutionary features for 1991:

\u2022 Object-oriented (like C++ but cleaner)
\u2022 Platform-independent bytecode (the magic sauce!)
\u2022 Automatic memory management - Garbage Collection (no more malloc/free nightmares!)
\u2022 Secure and robust (built-in safety)
\u2022 Simple syntax - Cleaner than C++ (no multiple inheritance mess)
\u2022 Multithreading support (ahead of its time)

\u{1F3AF} Think of it as: The best parts of C++ without the painful parts!`},{title:"1995: The Big Launch \u{1F680}",content:`\u2022 May 23, 1995: Java officially announced at SunWorld conference
\u2022 The tech world went: 'Wait, what? This is amazing!' \u{1F92F}
\u2022 Timing was PERFECT - the internet was just exploding
\u2022 Netscape (the browser king back then) immediately adopted Java

In 1995, Java was officially launched to the public, and the world of programming would never be the same!`}],images:[{url:"assets/images/oak-to-java.svg",alt:"Oak to Java Naming History",caption:"The story of how Java got its name - from Oak (1991) to Java (1995) during a coffee shop brainstorming session"}]},{title:"Java 1.0: The Public Release (1995)",content:"Java was officially announced at SunWorld conference on May 23, 1995.",subsections:[{title:"Key Milestones",content:`\u2022 January 1996: JDK 1.0 officially released
\u2022 Slogan: 'Write Once, Run Anywhere' (WORA)
\u2022 Revolutionary for web applications
\u2022 Netscape Navigator integrated Java support
\u2022 Applets became popular for interactive web content`},{title:"Initial Features",content:`\u2022 Basic language constructs
\u2022 AWT (Abstract Window Toolkit) for GUI
\u2022 Applet support
\u2022 Networking capabilities
\u2022 Security features for untrusted code`}],codeExamples:[{title:"First Java Program (1995 Style)",description:"The classic Hello World program that started it all",code:`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,language:"java"}]},{title:"The Evolution Timeline",content:"Java has evolved significantly over the years with major releases bringing revolutionary features.",images:[{url:"assets/images/java-timeline.svg",alt:"Java Evolution Timeline from 1991 to 2026",caption:"Complete timeline showing Java's journey from Oak (1991) to modern LTS versions, highlighting major milestones and revolutionary releases"}],subsections:[{title:"Java 1.1 (1997)",content:`\u2022 Inner classes
\u2022 JavaBeans
\u2022 JDBC (Database connectivity)
\u2022 RMI (Remote Method Invocation)
\u2022 Reflection API`},{title:"Java 1.2 (J2SE) - 'Playground' (1998)",content:`\u2022 Swing GUI components
\u2022 Collections Framework
\u2022 JIT (Just-In-Time) compiler
\u2022 Strictfp keyword
\u2022 Java Plug-in for browsers`},{title:"Java 1.3 - 'Kestrel' (2000)",content:`\u2022 HotSpot JVM
\u2022 JNDI (Java Naming and Directory Interface)
\u2022 Java Sound API
\u2022 Performance improvements`},{title:"Java 1.4 - 'Merlin' (2002)",content:`\u2022 assert keyword
\u2022 Regular expressions (regex)
\u2022 Exception chaining
\u2022 NIO (New I/O)
\u2022 Logging API
\u2022 Image I/O API`},{title:"Java 5 (J2SE 5.0) - 'Tiger' (2004) \u{1F525}",content:`MAJOR RELEASE - Revolutionary features:
\u2022 Generics
\u2022 Enhanced for-loop (for-each)
\u2022 Autoboxing/Unboxing
\u2022 Enumerations (enum)
\u2022 Varargs
\u2022 Static imports
\u2022 Annotations
\u2022 Concurrency utilities (java.util.concurrent)`},{title:"Java 6 - 'Mustang' (2006)",content:`\u2022 Scripting language support (Rhino for JavaScript)
\u2022 JDBC 4.0
\u2022 Java Compiler API
\u2022 Performance improvements
\u2022 Pluggable annotations`},{title:"Java 7 - 'Dolphin' (2011)",content:`\u2022 Diamond operator (<>)
\u2022 Try-with-resources
\u2022 String in switch
\u2022 Binary literals (0b prefix)
\u2022 Underscore in numeric literals
\u2022 Multi-catch exceptions
\u2022 NIO.2 (File System API)`},{title:"Java 8 (2014) \u{1F680}",content:`GAME CHANGER - Functional programming:
\u2022 Lambda expressions
\u2022 Stream API
\u2022 Functional interfaces
\u2022 Optional class
\u2022 Default methods in interfaces
\u2022 Method references
\u2022 New Date/Time API (java.time)
\u2022 Nashorn JavaScript engine`},{title:"Java 9 (2017)",content:`\u2022 Module System (JPMS - Project Jigsaw)
\u2022 JShell (REPL)
\u2022 Private methods in interfaces
\u2022 Improved Stream API
\u2022 Reactive Streams
\u2022 HTTP/2 Client`},{title:"Java 10 (2018)",content:`\u2022 Local variable type inference (var keyword)
\u2022 Application Class-Data Sharing
\u2022 Parallel Full GC for G1
\u2022 Time-based release versioning`},{title:"Java 11 (LTS - 2018) \u2B50",content:`Long-Term Support release:
\u2022 HTTP Client API (standardized)
\u2022 String new methods (isBlank(), lines(), strip())
\u2022 Local-variable syntax for lambda
\u2022 Running Java files without compilation
\u2022 Removed Java EE and CORBA modules`},{title:"Java 12-16 (2019-2021)",content:`\u2022 Switch expressions (Java 12-14)
\u2022 Text blocks (Java 13-15)
\u2022 Pattern matching for instanceof (Java 14-16)
\u2022 Records (Java 14-16)
\u2022 Sealed classes (Java 15-17)
\u2022 Hidden classes (Java 15)
\u2022 Foreign Memory Access API (Java 14-16)`},{title:"Java 17 (LTS - 2021) \u2B50",content:`Long-Term Support release:
\u2022 Sealed classes (finalized)
\u2022 Pattern matching for switch (preview)
\u2022 Strong encapsulation of JDK internals
\u2022 New macOS rendering pipeline
\u2022 Deprecate Security Manager
\u2022 Enhanced pseudo-random number generators`},{title:"Java 18-20 (2022-2023)",content:`\u2022 UTF-8 by default
\u2022 Simple web server
\u2022 Code snippets in JavaDoc
\u2022 Pattern matching for switch (continued)
\u2022 Record patterns (preview)
\u2022 Virtual threads (preview - Project Loom)`},{title:"Java 21 (LTS - 2023) \u2B50\u{1F525}",content:`Latest Long-Term Support:
\u2022 Virtual Threads (finalized - Project Loom)
\u2022 Sequenced Collections
\u2022 Record Patterns (finalized)
\u2022 Pattern Matching for switch (finalized)
\u2022 String Templates (preview)
\u2022 Unnamed Patterns and Variables (preview)
\u2022 Unnamed Classes and Instance Main Methods (preview)`}]},{title:"\u26A1 Modern Java Evolution: From 'Old' to 'Cool' (Java 8 \u2192 Today)",content:"Java stopped being 'old and boring' and started getting cool upgrades. Java went from 'verbose uncle' to 'fit gym-going uncle' \u{1F4AA}\u{1F604}. Despite new languages popping up every year, Java remains strong.",images:[{url:"assets/images/java-features-evolution.svg",alt:"Evolution of Java Features from Java 5 to Java 21",caption:"Key features introduced in major Java releases - from Generics in Java 5 to Virtual Threads in Java 21, showing how Java evolved to meet modern development needs"}],subsections:[{title:"\u{1F525} Java 8 (2014) - GAME CHANGER",content:`Functional programming arrives:
\u2022 Lambda expressions
\u2022 Stream API
\u2022 Functional interfaces
\u2022 Optional class
\u2022 Default methods in interfaces
\u2022 Method references
\u2022 New Date/Time API (java.time)
\u2022 Nashorn JavaScript engine`},{title:"Java 11 & 17 (LTS) \u2B50",content:`\u2022 Performance improvements
\u2022 Cleaner APIs
\u2022 Widely used in production
\u2022 Long-Term Support
\u2022 Production-ready features`},{title:"Recent Java Versions",content:`\u2022 Faster releases (every 6 months)
\u2022 Better garbage collectors
\u2022 Cleaner syntax
\u2022 Modern language features
\u2022 Cloud-optimized improvements`}]},{title:"\u{1F30D} Why Java Is Still Relevant Today",content:"Despite new languages popping up every year, Java remains strong. New languages come and go. Java stays\u2026 like that permanent teammate in every office project \u{1F606}.",subsections:[{title:"Java Is Used In",content:`\u2022 Enterprise applications
\u2022 Cloud & microservices \u2601\uFE0F
\u2022 Android apps \u{1F4F1}
\u2022 Big data (Hadoop, Spark, Kafka)
\u2022 Banking & finance \u{1F3E6}
\u2022 E-commerce platforms
\u2022 IoT and embedded systems`},{title:"Why Companies Still Trust Java",content:`\u2022 Backward compatibility
\u2022 Massive ecosystem
\u2022 Huge developer community
\u2022 Rock-solid stability
\u2022 Mature frameworks and libraries
\u2022 Proven at scale
\u2022 30+ years of evolution`}]},{title:"\u{1F9E0} Java in Interviews: Why History Matters",content:"Interviewers love Java's history because it shows understanding of design philosophy, why Java emphasizes portability & security, and how Java adapted over time.",subsections:[{title:"Interview Importance",content:`\u2022 Shows deep understanding beyond coding
\u2022 Demonstrates interest in technology evolution
\u2022 Helps explain design decisions
\u2022 Common question: 'Why was Java created?'
\u2022 Differentiates you from other candidates`},{title:"\u{1F4A1} Simple Interview-Friendly Line",content:"'Java was designed to be platform-independent, secure, and scalable, which is why it became popular in enterprise and continues to evolve even today.'"},{title:"Practical Benefits",content:`\u2022 Understand why features exist
\u2022 Appreciate backward compatibility decisions
\u2022 Know which features are legacy vs modern
\u2022 Choose appropriate JDK version for projects
\u2022 Understand WORA philosophy in cloud era`}]},{title:"Sun Microsystems and Oracle Era",content:"Understanding the corporate history behind Java is crucial for its evolution.",images:[{url:"assets/images/sun-oracle-acquisition.svg",alt:"Timeline of Java from Sun Microsystems to Oracle",caption:"The transition of Java from Sun Microsystems (1982-2010) to Oracle Corporation in 2010 for $7.4 billion, showing how Java evolved under different ownership"}],subsections:[{title:"Sun Microsystems (1991-2010)",content:`\u2022 Founded Java and developed it for 15+ years
\u2022 Made Java open-source in 2006 (OpenJDK)
\u2022 Created the 'Write Once, Run Anywhere' philosophy
\u2022 Developed J2EE (Enterprise Edition) and J2ME (Mobile Edition)
\u2022 Financial struggles led to acquisition talks`},{title:"Oracle Acquisition (2010)",content:`\u2022 Oracle acquired Sun Microsystems for $7.4 billion (January 2010)
\u2022 Java became Oracle's property
\u2022 Concerns about Java's future as open-source
\u2022 Oracle continued Java development but with commercial licensing changes`},{title:"Oracle's Changes",content:`\u2022 Introduced new release cadence (6-month cycle from Java 10)
\u2022 LTS (Long-Term Support) versions every 3 years
\u2022 Commercial license for Oracle JDK (use in production)
\u2022 OpenJDK as the free, open-source reference implementation
\u2022 Java 17 made free again for production use`}]},{title:"The 'Write Once, Run Anywhere' Philosophy",content:"Java's core principle that made it revolutionary and remains its biggest strength.",images:[{url:"assets/images/wora-concept.svg",alt:"Write Once Run Anywhere Concept Diagram",caption:"Visual explanation of Java's WORA philosophy - how bytecode enables platform independence across Windows, Linux, and macOS through JVM"},{url:"assets/images/java-jvm-architecture.svg",alt:"JVM Architecture and Platform Independence",caption:"Detailed JVM architecture showing how Java source code is compiled to bytecode and executed on different platforms through platform-specific JVMs, achieving true Write Once Run Anywhere capability"}],subsections:[{title:"What It Means",content:`\u2022 Write code once in Java
\u2022 Compile to bytecode (.class files)
\u2022 Run on any platform with JVM
\u2022 No need to recompile for different OS
\u2022 Platform independence through JVM abstraction`},{title:"How It Works",content:`1. Java source code (.java)
2. \u2193 Compiler (javac)
3. Bytecode (.class) - platform independent
4. \u2193 JVM (platform specific)
5. Native machine code
6. Execution on specific OS/hardware`},{title:"Why It Matters",content:`\u2022 Developers write code once
\u2022 Same application runs on:
  - Windows, Linux, macOS
  - Different CPU architectures
  - Embedded systems, mobile devices
\u2022 Reduces development and maintenance costs
\u2022 Enables true cross-platform applications`}],codeExamples:[{title:"Platform Independence Demo",description:"The same bytecode runs everywhere",code:`// Write once
public class Platform {
    public static void main(String[] args) {
        System.out.println("OS: " + System.getProperty("os.name"));
        System.out.println("Java Version: " + System.getProperty("java.version"));
        System.out.println("This same .class file runs on all platforms!");
    }
}

// Runs on Windows, Linux, macOS, Solaris, etc.
// Same bytecode, different JVMs`,language:"java"}]},{title:"Key Contributors and The Team",content:"Java was created by a talented team of engineers at Sun Microsystems.",subsections:[{title:"James Gosling - Father of Java",content:`\u2022 Lead architect and primary designer
\u2022 Wrote original compiler and JVM
\u2022 Canadian computer scientist
\u2022 Worked at Sun Microsystems (1984-2010)
\u2022 Left Oracle in 2010, worked at Google, Amazon, now independent`},{title:"The Green Team",content:`Original team members:
\u2022 James Gosling - Technical lead
\u2022 Mike Sheridan - Project manager
\u2022 Patrick Naughton - Engineer
\u2022 Chris Warth - Engineer
\u2022 Ed Frank - Engineer
\u2022 Jonni Kanerva - Engineer

'We were building the future' - Green Team motto`},{title:"Other Key Contributors",content:`\u2022 Bill Joy - Co-founder of Sun, influenced Java design
\u2022 Guy Steele - Co-author of Java Language Specification
\u2022 Joshua Bloch - Effective Java author, Collections Framework
\u2022 Doug Lea - Concurrency utilities architect`}]},{title:"Java's Impact on Software Industry",content:"Java transformed software development and continues to be influential today.",subsections:[{title:"Revolutionary Contributions",content:`\u2022 Made cross-platform development mainstream
\u2022 Popularized automatic memory management (GC)
\u2022 Brought object-oriented programming to masses
\u2022 Enabled web applications (Servlets, JSP)
\u2022 Android development (until Kotlin)
\u2022 Enterprise applications (Spring, Java EE)
\u2022 Big Data (Hadoop, Spark, Kafka)`},{title:"Current Usage (2024-2026)",content:`\u2022 Over 3 billion devices run Java
\u2022 #3-5 most popular programming language
\u2022 Dominant in:
  - Enterprise applications
  - Financial services
  - E-commerce platforms
  - Cloud services
  - Big Data processing
  - Android apps (billions of devices)
\u2022 Fortune 500 companies rely on Java`},{title:"Fun Facts \u2615",content:`\u2022 Java logo is a coffee cup \u2615
\u2022 'Java' refers to Java coffee from Indonesia
\u2022 Original team worked 18-hour days
\u2022 First demo: controlling a TV with PDA
\u2022 Duke is Java's mascot (friendly character)
\u2022 'Green' project named after office color
\u2022 Java Specification Requests (JSRs) govern evolution
\u2022 Over 9 million Java developers worldwide`}]},{title:"\u{1F3C1} Final Thoughts",content:"Java's journey is a classic tech success story that proves good design + adaptability = long-term success.",subsections:[{title:"The Journey",content:`\u2022 Started for TVs \u274C
\u2022 Conquered the Internet \u{1F310}
\u2022 Dominated enterprises \u{1F3E2}
\u2022 Powered mobile phones \u{1F4F1}
\u2022 Thriving in cloud & microservices \u2601\uFE0F

From Oak tree beginnings to global dominance, Java proves one thing: Good design + adaptability = long-term success.

And yes\u2026 Java still loves coffee \u2615\u{1F609}.`}]},{title:"Why Study Java History?",content:"Understanding Java's history provides context for modern development decisions.",subsections:[{title:"Interview Importance",content:`\u2022 Shows deep understanding beyond coding
\u2022 Demonstrates interest in technology evolution
\u2022 Helps explain design decisions
\u2022 Common question: 'Why was Java created?'
\u2022 Differentiates you from other candidates`},{title:"Practical Benefits",content:`\u2022 Understand why features exist
\u2022 Appreciate backward compatibility decisions
\u2022 Know which features are legacy vs modern
\u2022 Choose appropriate JDK version for projects
\u2022 Understand WORA philosophy in cloud era`}]}],keyPoints:["Java started as 'Oak' in 1991 for consumer electronics, renamed to Java in 1995","James Gosling and the Green Team at Sun Microsystems created Java","Write Once, Run Anywhere (WORA) is Java's core philosophy","Java 1.0 released in 1996; Java 5 (2004) and Java 8 (2014) were revolutionary","Oracle acquired Sun Microsystems in 2010, continuing Java development","LTS versions: Java 8, 11, 17, 21 (every 3 years from Java 17)","Java powers 3+ billion devices and remains dominant in enterprise applications","Platform independence through JVM abstraction layer made Java revolutionary","The Green Team worked on 'Project Green' for consumer electronics in 1991","Java was named after Java coffee from Indonesia during a coffee shop brainstorming session","All exceptions are objects that inherit from Throwable class"],references:["Oracle Java Documentation - The History of Java Technology","James Gosling's personal blog and interviews about Java's creation","Sun Microsystems archives and Java evolution timeline","Java Language Specification (JLS) - Historical context","The Java Tutorial by Oracle - Introduction to Java","Wikipedia - Java (programming language) history section","InfoWorld - Java turns 25: A look back at the language's evolution"],interviewQA:[{question:"Who created Java and when?",answer:"James Gosling and the Green Team at Sun Microsystems created Java. Started as 'Oak' in 1991, renamed to Java and publicly released in 1995, with JDK 1.0 in January 1996.",difficulty:"easy",tags:["history","creator","timeline"]},{question:"Why was Java originally created?",answer:"Java was created for programming consumer electronic devices like interactive television and set-top boxes. They needed a platform-independent language simpler than C++ with automatic memory management.",difficulty:"easy",tags:["history","purpose","design"]},{question:"What does WORA mean?",answer:"Write Once, Run Anywhere - Java's philosophy where you compile code once to bytecode, which runs on any platform with a JVM, achieving platform independence.",difficulty:"easy",tags:["WORA","philosophy","platform-independence"]},{question:"Why was Oak renamed to Java?",answer:"'Oak' was already trademarked by Oak Technologies. The team chose 'Java' after Java coffee from Indonesia during a brainstorming session at a coffee shop.",difficulty:"easy",tags:["history","naming","trivia"]},{question:"What are the LTS (Long-Term Support) versions of Java?",answer:"Java 8 (2014), Java 11 (2018), Java 17 (2021), and Java 21 (2023). LTS versions receive extended support and updates.",difficulty:"medium",tags:["versions","LTS","timeline"]},{question:"Who owns Java now?",answer:"Oracle Corporation owns Java after acquiring Sun Microsystems in January 2010 for $7.4 billion.",difficulty:"easy",tags:["history","Oracle","ownership"]},{question:"What were the most revolutionary Java versions?",answer:"Java 5 (2004) introduced Generics, enhanced for-loop, autoboxing, enums. Java 8 (2014) brought Lambda expressions, Stream API, and functional programming features. Java 21 (2023) introduced Virtual Threads.",difficulty:"medium",tags:["versions","features","evolution"]},{question:"What is the significance of Java bytecode?",answer:"Bytecode (.class files) is platform-independent intermediate code generated by the Java compiler. It enables WORA by running on any JVM regardless of the underlying operating system or hardware.",difficulty:"medium",tags:["bytecode","JVM","platform-independence"]}]};var gy={name:"\u{1F31F} Features of Java Programming Language \u2014 Explained Simply (with Fun!)",overview:"Java is popular not because it's trendy, but because it's practical, reliable, and everywhere \u{1F30D}. Its features were carefully designed to solve real-world problems\u2014while keeping developers (mostly) sane \u{1F604}. From platform independence to robust security, Java's features make it the go-to choice for enterprise applications, Android development, and systems that need to run reliably for years. Let's explore the core features of Java, one by one, with simple explanations, real-life analogies, and light humor\u2014perfect for beginners and interviews! \u{1F3AF}",images:[{url:"assets/images/java-features-overview.svg",alt:"Java Features Overview",caption:"The complete picture - All major features that make Java powerful and popular"}],sections:[{title:"Platform Independence (Write Once, Run Anywhere)",content:"Java's most famous feature! Java programs don't depend on the operating system. You write Java code once, compile it into bytecode, and run it on any system with JVM. That famous line: 'Write Once, Run Anywhere' (WORA) \u{1F680}",subsections:[{title:"\u{1F9E0} What it means",content:`\u2022 Java code is platform-neutral
\u2022 Write code once \u2192 Works everywhere
\u2022 No recompilation needed for different OS
\u2022 Same .class file runs on Windows, Linux, macOS
\u2022 JVM handles platform-specific differences`},{title:"\u{1F527} How it works",content:`1. Java source code (.java)
2. Compiled into bytecode (.class)
3. JVM converts bytecode \u2192 machine-specific instructions
4. Same bytecode runs on any platform with JVM

\u{1F3AC} Analogy:
Java is like English subtitles
JVM is the translator who converts it for different countries.

Different JVMs for different platforms, but same Java code!`},{title:"\u{1F604} Why It's Awesome",content:`Other languages ask:
'Are you Windows or Linux?'

Java says:
'Relax, I'll manage.' \u{1F60E}

No more:
\u274C 'It works on my machine'
\u274C Separate builds for each OS
\u274C Platform-specific code

\u2705 One codebase, multiple platforms
\u2705 Reduced development time
\u2705 Lower maintenance costs`}],images:[{url:"assets/images/java-jvm-architecture.svg",alt:"JVM Architecture and WORA Concept",caption:"How JVM enables 'Write Once, Run Anywhere' - Same bytecode runs on different platforms"}],codeExamples:[{title:"Platform Independence Demo",description:"Same code runs on all platforms",code:`public class PlatformDemo {
    public static void main(String[] args) {
        System.out.println("OS: " + System.getProperty("os.name"));
        System.out.println("Java Version: " + System.getProperty("java.version"));
        
        // This same code runs on:
        // Windows, Linux, macOS, Solaris, etc.
        System.out.println("Platform Independence in action!");
    }
}`,language:"java"}]},{title:"Object-Oriented Programming (OOP)",content:"Java follows OOP principles, which means code is structured around objects, not just logic. Everything in Java is an object (except primitives). This makes code organized, reusable, and maintainable.",subsections:[{title:"\u{1F9E9} Core OOP Concepts in Java",content:`\u2022 Class \u2013 Blueprint for objects
\u2022 Object \u2013 Real instance of a class
\u2022 Encapsulation \u2013 Data hiding (private fields, public methods)
\u2022 Inheritance \u2013 Reusability (extends keyword)
\u2022 Polymorphism \u2013 Many forms (overloading, overriding)
\u2022 Abstraction \u2013 Show what's needed, hide the rest (abstract classes, interfaces)`},{title:"\u{1F697} Real-life Analogy",content:`Think of a Car:

\u2022 Class \u2192 Car design/blueprint
\u2022 Object \u2192 Your actual car
\u2022 Encapsulation \u2192 Engine hidden under the hood
\u2022 Inheritance \u2192 ElectricCar extends Car
\u2022 Polymorphism \u2192 Same start() method works differently for different cars
\u2022 Abstraction \u2192 You use steering wheel, don't need to know engine internals`},{title:"\u{1F604} Why OOP Matters",content:`OOP is like real life\u2014
You use things, not worry about how they work internally (until they break) \u{1F605}.

Benefits:
\u2705 Code reusability
\u2705 Easy to maintain
\u2705 Modular design
\u2705 Better organization
\u2705 Real-world modeling`}],images:[{url:"assets/images/java-oop-concepts.svg",alt:"Four Pillars of OOP in Java",caption:"Encapsulation, Inheritance, Polymorphism, and Abstraction explained visually"}],codeExamples:[{title:"OOP Example - Encapsulation",description:"Data hiding with private fields and public methods",code:`public class BankAccount {
    // Encapsulation - private data
    private double balance;
    
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }
    
    // Public methods to access private data
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public double getBalance() {
        return balance;
    }
}`,language:"java"},{title:"OOP Example - Inheritance",description:"Code reusability through inheritance",code:`class Vehicle {
    void start() {
        System.out.println("Vehicle starting...");
    }
}

class Car extends Vehicle {
    // Inherits start() method
    void honk() {
        System.out.println("Beep beep!");
    }
}

// ElectricCar inherits from Car, which inherits from Vehicle
class ElectricCar extends Car {
    void charge() {
        System.out.println("Charging battery...");
    }
}`,language:"java"}]},{title:"Security \u{1F510}",content:"Java was designed with security as a priority from day one. It provides multiple layers of security to protect against malicious code and unauthorized access.",subsections:[{title:"\u{1F512} How Java Stays Secure",content:`\u2022 No direct pointer access (prevents memory manipulation)
\u2022 Bytecode verification before execution
\u2022 JVM Sandbox (controlled execution environment)
\u2022 Security Manager (controlled permissions)
\u2022 ClassLoader security checks
\u2022 Automatic memory management (prevents buffer overflows)
\u2022 Type safety (compile-time checks)`},{title:"\u{1F3AC} Analogy",content:`Java is like a security-checked airport \u2708\uFE0F
Every piece of code goes through scanning before execution.

Security Layers:
1. Compilation \u2192 Type checking
2. ClassLoader \u2192 Verify bytecode
3. Bytecode Verifier \u2192 Check for illegal operations
4. Security Manager \u2192 Control permissions
5. JVM \u2192 Sandboxed execution`},{title:"\u{1F604} Security Philosophy",content:`Java doesn't trust your code blindly\u2014
Even your own code must show ID \u{1F604}.

Why it matters:
\u2705 Safe web applets (historically)
\u2705 Secure enterprise applications
\u2705 Protected user data
\u2705 Prevents common vulnerabilities
\u2705 Industry-standard security

\u{1F3E6} Used in banking for a reason!`}],images:[{url:"assets/images/java-security-layers.svg",alt:"Java Security Architecture",caption:"Multiple layers of defense make Java one of the most secure programming languages"}]},{title:"Robustness (Strong & Reliable)",content:"Java is resistant to errors and crashes. It's built to handle mistakes gracefully and keep running, making it perfect for mission-critical applications.",subsections:[{title:"\u{1F6E1}\uFE0F Why Java is Robust",content:`\u2022 Strong memory management (no manual malloc/free)
\u2022 Automatic Garbage Collection (no memory leaks)
\u2022 Compile-time error checking (catch errors early)
\u2022 Runtime error checking (exceptions)
\u2022 Exception handling mechanism (try-catch)
\u2022 No pointers (eliminates pointer errors)
\u2022 Type checking (prevents type errors)
\u2022 Array bounds checking (prevents buffer overflows)`},{title:"\u{1F697} Analogy",content:`Java is like a car with airbags \u{1F697}
Even if something goes wrong, damage is minimized.

Comparison:
\u274C C/C++: Manual memory management \u2192 crashes
\u2705 Java: Automatic garbage collection \u2192 stable

\u274C C: Pointer errors \u2192 unpredictable
\u2705 Java: No pointers \u2192 safe`},{title:"\u{1F604} Funny Reality",content:`Java crashes are rare\u2014
When they happen, developers panic because it's unexpected \u{1F605}.

Benefits:
\u2705 Applications run for months/years without restart
\u2705 Fewer production bugs
\u2705 Enterprise-grade reliability
\u2705 Predictable behavior

\u{1F3E2} Why enterprises love Java!`}],codeExamples:[{title:"Robust Error Handling",description:"Exception handling prevents crashes",code:`public class RobustExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // Potential error
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero!");
            // Program continues instead of crashing
        }
        
        System.out.println("Program still running...");
    }
}`,language:"java"}]},{title:"Multithreading (Do Many Things at Once)",content:"Java can execute multiple tasks simultaneously using threads. This makes applications responsive and efficient, especially for modern multi-core processors.",subsections:[{title:"\u{1F9F5} What is Multithreading?",content:`Running multiple tasks concurrently:

\u2022 Music playing \u{1F3A7}
\u2022 File downloading \u2B07\uFE0F
\u2022 App responding to clicks \u{1F446}
\u2022 All at the same time!

Java provides built-in support:
\u2022 Thread class
\u2022 Runnable interface
\u2022 Executor framework
\u2022 Synchronized blocks
\u2022 Concurrent utilities (java.util.concurrent)`},{title:"\u{1F373} Analogy",content:`Multithreading is like cooking with multiple burners \u{1F373}

One burner = slow
Many burners = efficient

Single-threaded:
1. Boil water
2. Wait...
3. Cut vegetables
4. Wait...

Multi-threaded:
1. Boil water (Thread 1)
2. Cut vegetables (Thread 2)
3. Set table (Thread 3)
All happening together!`},{title:"\u{1F604} Why It's Cool",content:`Single-threaded apps are like people who can only:
'Eat OR talk OR walk' \u2014 never together \u{1F606}

Multithreaded apps:
\u2705 Better CPU utilization
\u2705 Improved responsiveness
\u2705 Parallel processing
\u2705 Efficient resource usage

\u{1F4F1} Modern apps NEED multithreading!`}],images:[{url:"assets/images/java-multithreading.svg",alt:"Single-threaded vs Multi-threaded Execution",caption:"How multithreading improves performance - Tasks run in parallel instead of sequentially"}],codeExamples:[{title:"Simple Multithreading Example",description:"Multiple tasks running concurrently",code:`class MyThread extends Thread {
    private String taskName;
    
    MyThread(String name) {
        this.taskName = name;
    }
    
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(taskName + " - Count: " + i);
        }
    }
}

public class MultithreadingDemo {
    public static void main(String[] args) {
        MyThread t1 = new MyThread("Task 1");
        MyThread t2 = new MyThread("Task 2");
        
        t1.start(); // Runs concurrently
        t2.start(); // Runs concurrently
        // Both tasks execute simultaneously!
    }
}`,language:"java"}]},{title:"High Performance \u26A1",content:"Java is fast, especially for long-running applications. While not as fast as C/C++ in raw speed, Java's performance is excellent for real-world applications.",subsections:[{title:"\u{1F680} Why Java Performs Well",content:`\u2022 Just-In-Time (JIT) Compiler (converts bytecode to native code)
\u2022 Optimized JVM (continuous improvements)
\u2022 Efficient memory handling
\u2022 HotSpot optimization (identifies frequently used code)
\u2022 Adaptive compilation
\u2022 Garbage Collection tuning
\u2022 Multi-threaded execution
\u2022 Modern JVM versions (huge performance gains)`},{title:"\u{1F3C3}\u200D\u2642\uFE0F Analogy",content:`Java starts slow like warming up,
but once running\u2014it sprints \u{1F3C3}\u200D\u2642\uFE0F.

Initial startup: Slower (JVM loading)
Long-running: Very fast (JIT optimization)

Compilation:
C/C++: Compile once, fast execution
Java: Compile to bytecode, JIT compiles to native during runtime

Result: Best of both worlds!`},{title:"\u{1F604} Performance Reality",content:`Java doesn't rush on day one,
but works consistently for years\u2014perfect for enterprises \u{1F604}.

Performance facts:
\u2705 Close to C/C++ for long-running apps
\u2705 JIT makes frequently-used code super fast
\u2705 Modern JVMs are highly optimized
\u2705 Better than interpreted languages (Python, JavaScript)

\u{1F3E2} Enterprise servers run Java for years without performance degradation!`}]},{title:"Portability",content:"Java programs can be moved from one system to another easily without any modifications. The same compiled code works everywhere.",subsections:[{title:"\u{1F4BE} What is Portability?",content:`\u2022 Same .class file works on all platforms
\u2022 No OS-specific changes needed
\u2022 No recompilation required
\u2022 True 'build once, deploy anywhere'
\u2022 Bytecode is platform-neutral

Difference from Platform Independence:
\u2022 Platform Independence: Code runs on any OS
\u2022 Portability: Compiled code moves between systems easily`},{title:"\u{1F4BE} Analogy",content:`Java is like a USB drive \u{1F4BE}
Plug it into any compatible system\u2014it just works.

Other languages:
'Need to compile for Windows...'
'Need different build for Linux...'

Java:
'Here's the .class file, run it anywhere!' \u{1F60E}`},{title:"\u{1F604} Developer Freedom",content:`Java hates 'It works only on my machine' excuses \u{1F60F}.

Real benefits:
\u2705 Develop on Windows
\u2705 Test on Linux
\u2705 Deploy on Solaris
\u2705 Same .class file everywhere

\u{1F680} DevOps teams love this!`}]},{title:"Distributed Computing \u{1F310}",content:"Java supports applications that run across multiple machines over a network. Built-in networking capabilities make distributed systems easy to build.",subsections:[{title:"\u{1F310} What is Distributed Computing?",content:`Applications running on multiple machines:

\u2022 Client-server applications
\u2022 Microservices architecture
\u2022 Remote Method Invocation (RMI)
\u2022 Enterprise JavaBeans (EJB)
\u2022 RESTful web services
\u2022 Socket programming
\u2022 Distributed databases

Java provides:
\u2022 java.net package (networking)
\u2022 RMI (Remote Method Invocation)
\u2022 CORBA support
\u2022 Web services (JAX-WS, JAX-RS)`},{title:"\u{1F465} Analogy",content:`Distributed systems are like group projects \u{1F465}
Everyone works separately but delivers together.

Monolithic app:
\u{1F3E2} Everything in one building

Distributed app:
\u{1F30D} Team members worldwide, collaborating seamlessly`},{title:"\u{1F604} Why It Works",content:`Unlike college group projects,
Java distributed systems actually work \u{1F604}.

Real-world usage:
\u2705 Microservices (Spring Boot)
\u2705 Cloud applications
\u2705 Scalable systems
\u2705 Load balancing
\u2705 Global services

\u2601\uFE0F Cloud-native Java apps!`}],codeExamples:[{title:"Simple Network Communication",description:"Basic socket programming example",code:`import java.net.*;
import java.io.*;

public class SimpleClient {
    public static void main(String[] args) {
        try {
            // Connect to server
            Socket socket = new Socket("localhost", 8080);
            
            // Send data
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            out.println("Hello Server!");
            
            // Receive response
            BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream())
            );
            System.out.println("Server says: " + in.readLine());
            
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`,language:"java"}]},{title:"Dynamic Nature",content:"Java can load classes and adapt behavior at runtime, making it flexible and extensible without restarting applications.",subsections:[{title:"\u{1F504} What is Dynamic?",content:`Java adapts at runtime:

\u2022 Dynamic class loading (load classes on demand)
\u2022 Reflection API (inspect classes at runtime)
\u2022 Runtime behavior changes
\u2022 Plugin architectures
\u2022 Hot deployment (update code without restart)
\u2022 Dynamic proxies
\u2022 Annotation processing`},{title:"\u{1F4F1} Analogy",content:`Java is like installing apps without restarting your phone \u{1F4F1}.

Static languages:
'Change code \u2192 Recompile \u2192 Restart \u2192 Deploy'

Dynamic Java:
'Load new class \u2192 Keep running' \u{1F680}

Example: Plugin systems, where new features load at runtime`},{title:"\u{1F604} Flexibility",content:`Java doesn't like surprises,
but it handles them gracefully \u{1F60E}.

Dynamic features:
\u2705 Frameworks use reflection (Spring, Hibernate)
\u2705 Testing frameworks (JUnit, Mockito)
\u2705 Dependency injection
\u2705 Plugin systems
\u2705 Hot reloading in development

\u{1F527} Powers modern Java frameworks!`}],codeExamples:[{title:"Dynamic Class Loading Example",description:"Loading classes at runtime using Reflection",code:`public class DynamicLoadingDemo {
    public static void main(String[] args) {
        try {
            // Load class dynamically at runtime
            Class<?> clazz = Class.forName("java.util.ArrayList");
            
            // Create instance
            Object obj = clazz.getDeclaredConstructor().newInstance();
            
            System.out.println("Loaded class: " + clazz.getName());
            System.out.println("Instance created: " + obj.getClass());
            
            // Inspect methods
            System.out.println("\\nMethods:");
            for (var method : clazz.getDeclaredMethods()) {
                System.out.println("- " + method.getName());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`,language:"java"}]},{title:"\u{1F3AF} Quick Comparison - Java Features at a Glance",content:"Summary of all Java features and their real-world impact.",subsections:[{title:"Feature Comparison Table",content:"How each feature helps in real-world development:",table:{headers:["Feature","Why It Matters","Real-World Usage"],rows:[["Platform Independent","Runs everywhere","Deploy same app on Windows/Linux/macOS"],["Object-Oriented","Clean, reusable code","Enterprise applications, frameworks"],["Secure","Safe execution","Banking, financial systems"],["Robust","Stable & reliable","Long-running servers, critical apps"],["Multithreaded","Better performance","Responsive UIs, parallel processing"],["High Performance","Optimized execution","Big data, high-traffic websites"],["Portable","Easy to move","Cloud deployments, DevOps"],["Distributed","Network-ready","Microservices, cloud applications"],["Dynamic","Flexible at runtime","Frameworks, plugin systems"]]}}]}],keyPoints:["Platform Independence (WORA) - Write once, run anywhere with JVM","Object-Oriented - Everything is an object, promoting code reusability","Secure - Multiple security layers prevent malicious code execution","Robust - Strong memory management and exception handling prevent crashes","Multithreaded - Built-in support for concurrent execution","High Performance - JIT compiler optimizes code for fast execution","Portable - Same bytecode runs on all platforms without modification","Distributed - Native support for network programming and distributed systems","Dynamic - Runtime class loading and reflection enable flexibility","Automatic Garbage Collection - No manual memory management needed","Rich API - Comprehensive standard library for common tasks"],references:["Oracle Java Documentation - Java Language Features","Effective Java by Joshua Bloch - Best Practices","Java: The Complete Reference by Herbert Schildt","Oracle Java Tutorials - Getting Started","Java Platform, Standard Edition Documentation","The Java Language Specification (JLS)","Core Java Volume I - Fundamentals by Cay S. Horstmann"],interviewQA:[{question:"What is platform independence in Java? How does it work?",answer:`Platform independence means Java code can run on any operating system without modification.

How it works:
1. Java source code (.java) is compiled to bytecode (.class)
2. Bytecode is platform-independent
3. JVM (platform-specific) converts bytecode to machine code
4. Same .class file runs on Windows, Linux, macOS, etc.

This is called 'Write Once, Run Anywhere' (WORA). The JVM acts as an abstraction layer between bytecode and the underlying OS.`,difficulty:"easy",tags:["platform-independence","WORA","JVM"]},{question:"What are the main features of Java?",answer:`Main features of Java:

1. Platform Independent (WORA)
2. Object-Oriented (classes, objects, inheritance, polymorphism)
3. Secure (bytecode verification, no pointers, Security Manager)
4. Robust (exception handling, garbage collection, type checking)
5. Multithreaded (concurrent execution support)
6. High Performance (JIT compiler, optimized JVM)
7. Portable (same bytecode on all platforms)
8. Distributed (networking, RMI, web services)
9. Dynamic (runtime class loading, reflection)
10. Simple and Easy to Learn
11. Architecture Neutral
12. Interpreted and Compiled`,difficulty:"easy",tags:["features","fundamentals","basics"]},{question:"How is Java secure?",answer:`Java provides multiple security layers:

1. No Pointers: Prevents direct memory access and manipulation
2. Bytecode Verification: JVM verifies bytecode before execution
3. Security Manager: Controls what operations code can perform
4. ClassLoader Security: Separates system and user classes
5. Sandbox Execution: Code runs in controlled environment
6. Type Safety: Compile-time type checking
7. Automatic Memory Management: Prevents buffer overflows
8. Exception Handling: Graceful error handling

These features make Java suitable for:
\u2022 Banking applications
\u2022 Financial systems
\u2022 Enterprise applications
\u2022 Web applications with untrusted code`,difficulty:"medium",tags:["security","features","safety"]},{question:"What is the difference between platform independence and portability?",answer:`Platform Independence:
\u2022 Ability of code to run on different operating systems
\u2022 Java source code works on any platform with JVM
\u2022 Focuses on code execution across platforms
\u2022 Example: Same Java code runs on Windows and Linux

Portability:
\u2022 Ability to transfer compiled code between systems
\u2022 Same .class file (bytecode) works on all platforms
\u2022 No recompilation needed
\u2022 Focuses on moving compiled artifacts
\u2022 Example: Copy .class file from Windows to Linux and run it

Relationship:
Platform independence enables portability. Because Java is platform-independent, the compiled bytecode is portable across all systems with a JVM.`,difficulty:"medium",tags:["platform-independence","portability","concepts"]},{question:"What makes Java robust?",answer:`Java's robustness comes from:

1. Strong Memory Management:
   \u2022 Automatic garbage collection
   \u2022 No manual memory allocation/deallocation
   \u2022 Prevents memory leaks

2. Exception Handling:
   \u2022 Try-catch-finally mechanism
   \u2022 Checked and unchecked exceptions
   \u2022 Forced error handling

3. Type Safety:
   \u2022 Strong type checking at compile-time
   \u2022 No implicit type conversions (mostly)
   \u2022 Array bounds checking

4. No Pointers:
   \u2022 Eliminates pointer arithmetic errors
   \u2022 Prevents memory corruption

5. Compile-time and Runtime Checking:
   \u2022 Early error detection
   \u2022 Runtime verification

Result: Java applications can run for months/years without crashing, making it ideal for enterprise systems.`,difficulty:"medium",tags:["robustness","reliability","features"]},{question:"Explain multithreading in Java and its benefits.",answer:`Multithreading: Ability to execute multiple threads concurrently within a single program.

Key Concepts:
\u2022 Thread: Smallest unit of execution
\u2022 Java provides Thread class and Runnable interface
\u2022 Built-in synchronization support
\u2022 java.util.concurrent package for advanced threading

Benefits:
1. Better CPU Utilization: Use all cores effectively
2. Improved Responsiveness: UI remains responsive during long operations
3. Parallel Processing: Multiple tasks execute simultaneously
4. Resource Sharing: Threads share memory space
5. Faster Execution: Reduce overall execution time

Example Use Cases:
\u2022 Web servers handling multiple requests
\u2022 GUI applications (UI thread + worker threads)
\u2022 Background tasks (file downloads, data processing)
\u2022 Real-time systems

Java's built-in multithreading support makes it powerful for modern applications.`,difficulty:"medium",tags:["multithreading","concurrency","performance"]},{question:"How does JIT compiler improve Java performance?",answer:`JIT (Just-In-Time) Compiler improves performance by:

1. What it does:
   \u2022 Converts frequently-used bytecode to native machine code
   \u2022 Happens during runtime (not compilation)
   \u2022 Compiled code executes faster than interpreted bytecode

2. How it works:
   \u2022 Identifies 'hot spots' (frequently executed code)
   \u2022 Compiles these sections to native code
   \u2022 Stores compiled code for reuse
   \u2022 Applies optimizations

3. Optimizations:
   \u2022 Method inlining
   \u2022 Dead code elimination
   \u2022 Loop optimization
   \u2022 Register allocation

4. Result:
   \u2022 Initial execution: Slower (interpretation + compilation)
   \u2022 Long-running apps: Very fast (native execution)
   \u2022 Performance close to C/C++ for hot code

This is why Java servers perform excellently over time - the longer they run, the more optimized they become!`,difficulty:"hard",tags:["JIT","performance","optimization"]},{question:"What is the difference between JDK, JRE, and JVM?",answer:`JVM (Java Virtual Machine):
\u2022 Executes Java bytecode
\u2022 Platform-specific (different for Windows/Linux/macOS)
\u2022 Provides runtime environment
\u2022 Handles memory management, garbage collection

JRE (Java Runtime Environment):
\u2022 JVM + Java class libraries + runtime files
\u2022 Needed to RUN Java applications
\u2022 Does NOT include development tools
\u2022 End users need JRE

JDK (Java Development Kit):
\u2022 JRE + Development tools (compiler, debugger, etc.)
\u2022 Needed to DEVELOP Java applications
\u2022 Includes javac (compiler), jar, javadoc, etc.
\u2022 Developers need JDK

Relationship:
JDK = JRE + Development Tools
JRE = JVM + Libraries
JVM = Execution Engine

To run Java: Need JRE
To develop Java: Need JDK`,difficulty:"easy",tags:["JDK","JRE","JVM","fundamentals"]},{question:"Why is Java called 'Write Once, Run Anywhere'?",answer:`'Write Once, Run Anywhere' (WORA) means:

Write:
\u2022 Developer writes Java code once
\u2022 Uses standard Java syntax
\u2022 No platform-specific code needed

Compile Once:
\u2022 javac compiles to bytecode (.class)
\u2022 Bytecode is platform-independent
\u2022 Not tied to any specific OS or hardware

Run Anywhere:
\u2022 Same .class file runs on any platform with JVM
\u2022 Windows JVM, Linux JVM, macOS JVM all understand bytecode
\u2022 No recompilation needed

How it's possible:
\u2022 JVM acts as abstraction layer
\u2022 Bytecode is standardized
\u2022 Each platform has its own JVM
\u2022 JVM translates bytecode to native machine code

Benefit:
Developers focus on business logic, not platform differences. One codebase serves all platforms.`,difficulty:"easy",tags:["WORA","platform-independence","fundamentals"]},{question:"What is dynamic class loading in Java?",answer:`Dynamic Class Loading: Ability to load classes into JVM at runtime (not compile-time).

How it works:
1. Classes loaded on-demand when first referenced
2. Uses ClassLoader hierarchy
3. Reflection API enables runtime class inspection

Types of ClassLoaders:
\u2022 Bootstrap ClassLoader: Loads core Java classes
\u2022 Extension ClassLoader: Loads extension classes
\u2022 Application ClassLoader: Loads application classes
\u2022 Custom ClassLoaders: User-defined

Benefits:
1. Memory Efficiency: Load only needed classes
2. Plugin Architecture: Load plugins at runtime
3. Hot Deployment: Update code without restart
4. Modular Applications: Load modules on demand

Example Uses:
\u2022 Spring Framework (loads beans dynamically)
\u2022 Web servers (hot deploy web applications)
\u2022 Plugin systems (load plugins at runtime)
\u2022 JDBC drivers (load database drivers dynamically)

Code Example:
Class.forName("com.mysql.jdbc.Driver"); // Loads driver at runtime`,difficulty:"hard",tags:["dynamic","classloader","reflection"]}]};var vy={name:"\u2615 JDK, JRE, and JVM Architecture \u2014 Java Explained Like a Story (with Fun!)",overview:"If Java were a movie production, then: JDK = Movie studio + shooting equipment \u{1F3AC}, JRE = Cinema hall where the movie runs \u{1F37F}, and JVM = Projector that actually plays the movie \u{1F3A5}. Many beginners (and even experienced devs \u{1F604}) get confused between JDK, JRE, and JVM. Let's break them down clearly, visually, and memorably, and then dive deep into JVM Architecture\u2014perfect for learning + interviews!",sections:[{title:"\u{1F3A5} The Movie Production Analogy",content:"Understanding JDK, JRE, and JVM is like understanding how movies are made and watched.",subsections:[{title:"The Complete Picture",content:`\u2022 JDK (Java Development Kit) \u{1F3AC}
  \u2192 The movie studio with all equipment
  \u2192 Cameras, editing tools, directors, writers
  \u2192 Everything needed to CREATE a movie

\u2022 JRE (Java Runtime Environment) \u{1F37F}
  \u2192 The cinema hall where movies are shown
  \u2192 Projector, screen, sound system
  \u2192 Everything needed to WATCH a movie

\u2022 JVM (Java Virtual Machine) \u{1F3A5}
  \u2192 The projector that actually plays the film
  \u2192 Takes the reel and displays it
  \u2192 The HEART of the operation`},{title:"\u{1F4A1} Real-World Comparison",content:`Just like:
\u2022 You need a studio to make a movie
\u2022 You need a cinema to show it
\u2022 You need a projector to display it

In Java:
\u2022 You need JDK to write code
\u2022 You need JRE to run programs
\u2022 JVM actually executes the bytecode`},{title:"\u{1F604} Funny Reality Check",content:`Developer mistake #1:
Installing JRE and wondering why you can't compile code \u{1F605}

'Why isn't javac working?'

Because JRE is for watching movies, not making them!

You need the full JDK studio! \u{1F3AC}`}]},{title:"\u{1F3A5} What is JVM (Java Virtual Machine)?",content:"JVM is the heart of Java. It is a virtual machine that reads Java bytecode, converts it into machine-specific instructions, and executes the program. JVM makes Java platform-independent.",subsections:[{title:"\u{1F9E0} Simple Definition",content:`JVM is a virtual computer inside your real computer.

What it does:
\u2022 Reads Java bytecode (.class files)
\u2022 Converts it into machine-specific instructions
\u2022 Executes the program
\u2022 Manages memory automatically
\u2022 Provides security and safety`},{title:"\u{1F9E9} Key Role - Platform Independence",content:`You don't write code for Windows or Linux.
You write code for JVM.
JVM handles the rest \u{1F60E}

\u2022 Same bytecode runs everywhere
\u2022 Different JVMs for different platforms
\u2022 Write Once, Run Anywhere (WORA)

This is Java's superpower! \u{1F9B8}`},{title:"\u{1F30D} Analogy: The Universal Translator",content:`JVM is like a translator at the UN \u{1F30D}

One language in (Java bytecode) \u2192
Many languages out (Windows code, Linux code, Mac code)

You speak Java.
JVM translates to whatever the OS understands.

Beauty: You never worry about the translation!`},{title:"\u2699\uFE0F Technical Details",content:`\u2022 Platform-specific (different JVM for each OS)
\u2022 Converts bytecode to native machine code
\u2022 Provides runtime environment
\u2022 Handles memory management via Garbage Collection
\u2022 Implements security features
\u2022 Optimizes code execution via JIT compiler

JVM Implementations:
\u2022 HotSpot JVM (Oracle/OpenJDK - most popular)
\u2022 GraalVM (high-performance)
\u2022 Eclipse OpenJ9
\u2022 Azul Zing`}]},{title:"\u{1F37F} What is JRE (Java Runtime Environment)?",content:"JRE is everything needed to RUN a Java program. It's the cinema hall with all facilities for watching movies, but no equipment to make them.",subsections:[{title:"\u{1F9E0} Simple Definition",content:`JRE = JVM + Core Libraries + Runtime Files

It's the complete environment for executing Java applications.

\u{1F4E6} JRE contains:
\u2022 JVM (execution engine)
\u2022 Core Java libraries (java.lang, java.util, java.io, etc.)
\u2022 Supporting runtime files
\u2022 Configuration files`},{title:"What JRE Can and Cannot Do",content:`\u2705 JRE CAN:
\u2022 Run compiled Java programs (.class, .jar files)
\u2022 Execute Java applications
\u2022 Provide all runtime libraries
\u2022 Handle program execution

\u274C JRE CANNOT:
\u2022 Compile Java source code
\u2022 Create new programs
\u2022 Debug applications
\u2022 Package applications`},{title:"\u{1F373} Analogy: The Furnished Kitchen",content:`JRE is like a fully furnished kitchen \u{1F373}

You can:
\u2705 Cook meals (run programs)
\u2705 Use all utensils (libraries)
\u2705 Serve food (execute applications)

You cannot:
\u274C Build new kitchen tools
\u274C Manufacture utensils
\u274C Design new equipment

You consume, not create!`},{title:"\u{1F3AF} When Do You Need JRE?",content:`You need JRE when:
\u2022 Running Java applications as an end user
\u2022 Your system just needs to execute Java programs
\u2022 You're not developing, just using

Examples:
\u2022 Running Minecraft \u{1F3AE}
\u2022 Using Java-based desktop apps
\u2022 Executing downloaded .jar files

Most end users only need JRE, not JDK!`}]},{title:"\u{1F6E0}\uFE0F What is JDK (Java Development Kit)?",content:"JDK is everything needed to DEVELOP Java applications. It's the complete movie studio with all tools, equipment, and facilities.",subsections:[{title:"\u{1F9E0} Simple Definition",content:`JDK = JRE + Development Tools

The complete toolkit for Java developers.

\u{1F4E6} JDK contains:
\u2022 JRE (for running)
\u2022 Compiler (javac)
\u2022 Debugger (jdb)
\u2022 Documentation tool (javadoc)
\u2022 Archive tool (jar)
\u2022 Disassembler (javap)
\u2022 Monitoring tools (jconsole, jvisualvm)
\u2022 And many more developer tools`},{title:"What JDK Provides",content:`\u2705 Write code
\u2705 Compile code (javac)
\u2705 Run code (java)
\u2705 Debug code (jdb)
\u2705 Package code (.jar files)
\u2705 Document code (javadoc)
\u2705 Monitor performance
\u2705 Profile applications`},{title:"\u{1F6E0}\uFE0F Analogy: The Full Workshop",content:`JDK is a complete workshop \u{1F6E0}\uFE0F

You can:
\u2705 Design (write code)
\u2705 Build (compile)
\u2705 Test (debug)
\u2705 Package (create .jar)
\u2705 Document (javadoc)
\u2705 Run (execute)

Everything from idea to finished product!`},{title:"\u{1F4CB} Important JDK Tools",content:`Essential tools you get:

\u2022 javac \u2192 Compiler (converts .java to .class)
\u2022 java \u2192 Launcher (runs Java programs)
\u2022 jar \u2192 Archive tool (create .jar files)
\u2022 javadoc \u2192 Documentation generator
\u2022 jdb \u2192 Debugger
\u2022 javap \u2192 Class file disassembler
\u2022 jconsole \u2192 Monitoring console
\u2022 jvisualvm \u2192 Visual monitoring tool
\u2022 keytool \u2192 Security key management
\u2022 jlink \u2192 Custom runtime creator (Java 9+)`},{title:"\u{1F3AF} When Do You Need JDK?",content:`You need JDK when:
\u2022 You're a Java developer
\u2022 Writing Java applications
\u2022 Learning Java programming
\u2022 Building Java projects
\u2022 Working on enterprise applications

Rule of thumb:
\u{1F468}\u200D\u{1F4BB} Developer? \u2192 Need JDK
\u{1F464} End user? \u2192 Need JRE only`}]},{title:"\u{1F504} Relationship Between JDK, JRE, and JVM",content:"Understanding the hierarchy is crucial for Java development.",images:[{url:"assets/images/jdk-jre-jvm-relationship.svg",alt:"JDK, JRE, JVM Relationship Diagram",caption:"Visual hierarchy showing JDK contains JRE, which contains JVM, along with the specific components in each layer"}],subsections:[{title:"\u{1F4CA} The Hierarchy",content:`JDK (Biggest)
 \u2514\u2500\u2500 JRE (Medium)
      \u2514\u2500\u2500 JVM (Core)

Think of Russian nesting dolls \u{1FA86}
\u2022 JDK contains JRE
\u2022 JRE contains JVM
\u2022 Each layer adds functionality`},{title:"\u2705 Easy Interview Line",content:`"JDK is for development, JRE is for execution, JVM is for running bytecode."

Memory trick:
\u2022 JDK \u2192 Development Kit \u2192 For Developers
\u2022 JRE \u2192 Runtime Environment \u2192 For Execution
\u2022 JVM \u2192 Virtual Machine \u2192 The Engine`},{title:"\u{1F604} Funny Note",content:`Installing JDK automatically installs JRE,
but installing JRE won't make you a Java developer \u{1F609}

(Just like owning a cinema doesn't make you a filmmaker!)

Common beginner mistake:
'I installed JRE, why can't I compile code?'

Because compilation needs javac, which is in JDK! \u{1F3AC}`},{title:"\u{1F4E6} What Each Contains",content:`JDK:
\u2022 All of JRE
\u2022 javac, jar, javadoc
\u2022 Development tools
\u2022 Debugging tools

JRE:
\u2022 JVM
\u2022 Core libraries (java.*, javax.*)
\u2022 Runtime support files

JVM:
\u2022 Class loader
\u2022 Bytecode verifier
\u2022 Execution engine
\u2022 Memory management
\u2022 Garbage collector`}]},{title:"\u{1F9E0} JVM Architecture (The Real Engine Room)",content:"Now let's open the JVM and see what happens when you run a Java program. This is where the magic happens!",images:[{url:"assets/images/jvm-architecture-detailed.svg",alt:"Detailed JVM Architecture Diagram",caption:"Complete JVM architecture showing Class Loader Subsystem, Runtime Data Areas (Method Area, Heap, Stack, PC Register, Native Stack), Execution Engine (Interpreter, JIT, GC), and Native Method Interface"}],subsections:[{title:"\u{1F3D7}\uFE0F JVM Components Overview",content:`JVM has 3 main subsystems:

1\uFE0F\u20E3 Class Loader Subsystem
   \u2192 Loads classes into memory

2\uFE0F\u20E3 Runtime Data Areas
   \u2192 Memory where data is stored

3\uFE0F\u20E3 Execution Engine
   \u2192 Actually runs the code

+ Native Method Interface (JNI)
+ Native Method Libraries`}]},{title:"1\uFE0F\u20E3 Class Loader Subsystem",content:"The Class Loader is the security checkpoint of JVM. No class enters without proper verification!",subsections:[{title:"\u{1F9E0} What It Does",content:`Loads .class files (bytecode) into JVM memory.

Three-step process:
1. Loading
2. Linking
3. Initialization`},{title:"\u{1F4E5} Step 1: Loading",content:`Reads .class files and loads them into memory.

Three types of ClassLoaders:

\u2022 Bootstrap ClassLoader
  \u2192 Loads core Java classes (rt.jar)
  \u2192 Written in native code (C/C++)
  \u2192 Parent of all class loaders

\u2022 Extension ClassLoader
  \u2192 Loads classes from ext directory
  \u2192 Standard extensions

\u2022 Application ClassLoader
  \u2192 Loads classes from classpath
  \u2192 Your application classes
  \u2192 Most commonly used`},{title:"\u{1F517} Step 2: Linking",content:`Three sub-phases:

a) Verification \u2705
   \u2192 Verifies bytecode is valid
   \u2192 Checks for illegal operations
   \u2192 Ensures security
   \u2192 Like TSA screening at airport \u2708\uFE0F

b) Preparation \u{1F4CB}
   \u2192 Allocates memory for static variables
   \u2192 Assigns default values
   \u2192 int \u2192 0, boolean \u2192 false, Object \u2192 null

c) Resolution \u{1F50D}
   \u2192 Converts symbolic references to direct references
   \u2192 Links method calls to actual methods`},{title:"\u{1F680} Step 3: Initialization",content:`\u2022 Executes static blocks
\u2022 Initializes static variables with actual values
\u2022 Calls static initializers

Now the class is ready to use!`},{title:"\u2708\uFE0F Analogy: Airport Security",content:`Class Loader is like airport security:

1. Check-in (Loading)
   \u2192 You arrive at airport

2. Security screening (Linking)
   \u2192 Verify passport \u2705
   \u2192 Prepare boarding pass \u{1F4CB}
   \u2192 Resolve gate number \u{1F50D}

3. Board plane (Initialization)
   \u2192 Ready to fly! \u{1F6EB}

No suspicious class enters JVM without checking!`}],codeExamples:[{title:"Class Loading in Action",description:"Understanding when classes are loaded",code:`public class ClassLoadingDemo {
    // Static block executes during Initialization phase
    static {
        System.out.println("Class is being initialized!");
    }
    
    // Static variable initialized
    static int count = 100;
    
    public static void main(String[] args) {
        System.out.println("Main method executing");
        System.out.println("Count: " + count);
        
        // This will trigger loading of MyClass
        MyClass obj = new MyClass();
    }
}

class MyClass {
    static {
        System.out.println("MyClass initialized!");
    }
}

// Output:
// Class is being initialized!
// Main method executing
// Count: 100
// MyClass initialized!`,language:"java"}]},{title:"2\uFE0F\u20E3 Runtime Data Areas (Memory Areas)",content:"JVM divides memory smartly for efficiency. Each area has a specific purpose.",subsections:[{title:"\u{1F4CA} Memory Layout Overview",content:`JVM memory is divided into 5 areas:

1. Method Area (MetaSpace) \u{1F4DA}
2. Heap Area \u{1F3C0}
3. Stack Area \u{1F37D}\uFE0F
4. Program Counter (PC) Register \u{1F516}
5. Native Method Stack \u{1F91D}

First two are shared, last three are thread-specific!`}]},{title:"\u{1F4DA} a) Method Area (MetaSpace)",content:"Stores class-level data shared by all threads.",subsections:[{title:"What It Stores",content:`\u2022 Class metadata (structure, methods)
\u2022 Static variables
\u2022 Method bytecode
\u2022 Runtime constant pool
\u2022 Field information

\u{1F504} Shared across all threads`},{title:"\u{1F4DA} Analogy: The Library",content:`Method Area is like a library \u{1F4DA}

\u2022 Everyone can read from it
\u2022 Contains reference materials (class definitions)
\u2022 Shared resource
\u2022 Permanent storage (until class is unloaded)

When you define a class, its blueprint goes here!`},{title:"\u{1F4DD} Important Note",content:`In Java 8+:
\u2022 Method Area is called MetaSpace
\u2022 Moved from Heap to native memory
\u2022 Auto-sized (no more PermGen errors!)
\u2022 Better memory management`}]},{title:"\u{1F3C0} b) Heap Area",content:"The playground where all objects live and play!",subsections:[{title:"What It Stores",content:`\u2022 All objects (instances)
\u2022 Instance variables
\u2022 Arrays

\u{1F504} Shared across all threads

This is where 'new' keyword creates objects!`},{title:"\u{1F3C0} Analogy: The Common Playground",content:`Heap is a common playground \u{1F3C0}

\u2022 All objects hang out here
\u2022 Shared space
\u2022 Garbage Collector cleans up
\u2022 Largest memory area`},{title:"\u{1F604} Funny Note - Memory Leaks",content:`Heap memory leaks are like trash piling up when garbage collection doesn't happen.

Forget to remove object references?
Garbage piles up! \u{1F5D1}\uFE0F

Good news: Java's GC is automatic!
Bad news: It's not magic\u2014help it by removing references! \u{1F604}`},{title:"\u{1F3AF} Key Facts",content:`\u2022 Created at JVM startup
\u2022 Destroyed when JVM shuts down
\u2022 Size can be configured (-Xmx, -Xms)
\u2022 Divided into Young Gen, Old Gen (for GC)
\u2022 OutOfMemoryError happens here`}],codeExamples:[{title:"Heap vs Stack Demo",description:"Where different data types are stored",code:`public class MemoryDemo {
    static int staticVar = 100;  // Method Area (static)
    
    public static void main(String[] args) {
        int localVar = 10;           // Stack (local variable)
        
        MemoryDemo obj = new MemoryDemo();  // obj reference in Stack
                                             // actual object in Heap
        obj.instanceMethod();
    }
    
    void instanceMethod() {
        int x = 20;  // Stack (local to this method)
        String str = new String("Hello");  // Reference in Stack
                                            // Object in Heap
    }
}

// Memory Allocation:
// Stack: localVar, obj reference, x, str reference
// Heap: MemoryDemo object, String object
// Method Area: staticVar, class metadata`,language:"java"}]},{title:"\u{1F37D}\uFE0F c) Stack Area",content:"Each thread gets its own stack\u2014like plates stacked one on top of another.",subsections:[{title:"What It Stores",content:`\u2022 Method calls (stack frames)
\u2022 Local variables
\u2022 Partial results
\u2022 Method parameters

\u26A1 Thread-specific (each thread has its own stack)
\u{1F95E} LIFO - Last In, First Out`},{title:"\u{1F37D}\uFE0F Analogy: Stack of Plates",content:`Stack is like a stack of plates \u{1F37D}\uFE0F

\u2022 Add plate on top (method call)
\u2022 Remove from top (method returns)
\u2022 Last In \u2192 First Out (LIFO)
\u2022 Can't remove middle plate without removing top ones

Method calls:
main() \u2192 method1() \u2192 method2()

Stack:
[method2]
[method1]
[main]

When method2 returns, pop it off!

[method1]
[main]`},{title:"\u{1F604} StackOverflowError",content:`Too many plates stacked = they fall! \u{1F37D}\uFE0F\u{1F4A5}

Happens when:
\u2022 Infinite recursion
\u2022 Very deep method calls
\u2022 No base case in recursion

Classic mistake:
public void recurse() {
    recurse(); // Oops! No base case!
}

Stack keeps growing until... BOOM! \u{1F4A5}
StackOverflowError!`},{title:"\u{1F50D} Stack Frame Structure",content:`Each method call creates a stack frame containing:

\u2022 Local variables
\u2022 Operand stack (for calculations)
\u2022 Frame data (method metadata)

When method completes:
\u2705 Frame is popped
\u2705 Control returns to caller
\u2705 Memory is freed`}]},{title:"\u{1F516} d) Program Counter (PC) Register",content:"The bookmark that remembers where JVM stopped reading.",subsections:[{title:"What It Does",content:`\u2022 Stores address of current instruction being executed
\u2022 Thread-specific (each thread has its own PC)
\u2022 Smallest memory area
\u2022 Helps resume execution after context switch`},{title:"\u{1F516} Analogy: The Bookmark",content:`PC Register is a bookmark \u{1F516}

\u2022 Reading a book (executing code)
\u2022 Phone rings (thread interrupted)
\u2022 Put bookmark (save PC value)
\u2022 Answer call (switch to another thread)
\u2022 Come back (restore PC value)
\u2022 Continue reading from bookmark!

JVM always knows where it stopped!`},{title:"\u2699\uFE0F Technical Detail",content:`\u2022 Contains address of JVM instruction
\u2022 For native methods, PC is undefined
\u2022 Updated after each instruction
\u2022 Critical for multithreading`}]},{title:"\u{1F91D} e) Native Method Stack",content:"The special stack for calling non-Java code.",subsections:[{title:"What It Does",content:`\u2022 Supports native methods (C/C++ code)
\u2022 Thread-specific
\u2022 Similar to regular stack but for native code
\u2022 Used by JNI (Java Native Interface)`},{title:"\u{1F91D} Analogy: Calling a Non-Java Friend",content:`Native stack is Java saying:
'I'll call my non-Java friend for help' \u{1F604}

Sometimes Java needs to:
\u2022 Access OS-specific features
\u2022 Call C/C++ libraries
\u2022 Perform low-level operations

Example:
System.currentTimeMillis() \u2192 calls native C code

Native Method Stack handles this!`},{title:"\u{1F4CB} When It's Used",content:`Native methods are declared with 'native' keyword:

public class NativeExample {
    // Native method declaration
    public native void nativeMethod();
    
    static {
        System.loadLibrary("nativeLib");
    }
}

Examples in Java API:
\u2022 Thread.currentThread()
\u2022 Object.hashCode()
\u2022 System.currentTimeMillis()
\u2022 File I/O operations`}]},{title:"3\uFE0F\u20E3 Execution Engine",content:"The actual executor that runs your code. This is where bytecode comes to life!",subsections:[{title:"\u2699\uFE0F Three Main Components",content:`1. Interpreter \u{1F4D6}
2. JIT Compiler \u26A1
3. Garbage Collector \u{1F5D1}\uFE0F

Together they make Java fast, efficient, and memory-safe!`}]},{title:"\u{1F4D6} Interpreter",content:"Reads and executes bytecode line by line.",subsections:[{title:"How It Works",content:`\u2022 Reads bytecode one instruction at a time
\u2022 Converts to native machine code
\u2022 Executes immediately
\u2022 Simple but slow approach`},{title:"\u{1F4D6} Analogy: Reading Instructions Every Time",content:`Interpreter is like reading a recipe every single time you cook \u{1F4D6}

Day 1: Read recipe \u2192 Cook
Day 2: Read same recipe again \u2192 Cook
Day 3: Read same recipe again \u2192 Cook

Accurate, but inefficient!

This is why pure interpretation is slow.`},{title:"\u26A0\uFE0F The Problem",content:`If a method is called 1000 times:
\u2192 Interpreter converts it 1000 times!

This is wasteful.

Solution: JIT Compiler! \u26A1`}]},{title:"\u26A1 JIT (Just-In-Time) Compiler",content:"The performance booster that makes Java fast!",subsections:[{title:"\u{1F9E0} What It Does",content:`\u2022 Identifies 'hot spots' (frequently executed code)
\u2022 Compiles bytecode to native machine code
\u2022 Stores compiled code for reuse
\u2022 Dramatically improves performance`},{title:"\u26A1 Analogy: Memorizing After Practice",content:`JIT is like memorizing steps after doing them once \u{1F9E0}\u26A1

First time: Read recipe (interpret)
Second time: Remember and cook faster (compiled)
Third time onwards: Super fast! (optimized)

No need to read again\u2014you've memorized it!`},{title:"\u{1F3AF} How JIT Optimizes",content:`1. Profiling
   \u2192 Monitors which code runs frequently
   
2. Compilation
   \u2192 Compiles hot methods to native code
   
3. Optimization
   \u2192 Method inlining
   \u2192 Dead code elimination
   \u2192 Loop optimization
   \u2192 Constant folding
   
4. Caching
   \u2192 Stores compiled code for reuse`},{title:"\u{1F680} Performance Impact",content:`Without JIT:
\u2022 Code runs slow
\u2022 Interpreted every time

With JIT:
\u2022 10-100x faster for hot code!
\u2022 Near-native performance
\u2022 Long-running apps benefit most

Why Java servers are so fast! \u{1F3C3}\u200D\u2642\uFE0F

The longer they run, the faster they get!`},{title:"\u{1F604} Funny Reality",content:`Java startup: 'I'm a bit slow...' \u{1F634}

Java after running 10 minutes: 'Watch me fly!' \u{1F680}

JIT is like coffee for JVM \u2615
Needs time to kick in, then ZOOM!`}]},{title:"\u{1F5D1}\uFE0F Garbage Collector (GC)",content:"The automatic cleaning service that prevents memory leaks!",subsections:[{title:"\u{1F9E0} What It Does",content:`\u2022 Automatically removes unused objects
\u2022 Frees heap memory
\u2022 Prevents memory leaks
\u2022 Runs in background
\u2022 Developer doesn't call it manually`},{title:"\u{1F5D1}\uFE0F Analogy: The Cleaning Staff",content:`GC is the cleaning staff \u{1F9F9}

You:
\u2022 Create objects (make a mess)
\u2022 Use objects (enjoy)
\u2022 Forget about them (leave)

GC:
\u2022 Finds unused objects
\u2022 Cleans them up
\u2022 Frees memory

You don't call them\u2014they come automatically!`},{title:"\u{1F3AF} How GC Works",content:`1. Mark Phase
   \u2192 Identifies live objects (still referenced)
   \u2192 Marks them as 'in use'

2. Sweep Phase
   \u2192 Finds unmarked objects (unreachable)
   \u2192 Removes them
   \u2192 Frees memory

3. Compact Phase (optional)
   \u2192 Defragments memory
   \u2192 Moves objects together`},{title:"\u{1F4CA} Heap Generations",content:`GC divides heap into generations:

Young Generation:
\u2022 New objects created here
\u2022 Frequent, fast GC
\u2022 Most objects die young

Old Generation (Tenured):
\u2022 Long-lived objects
\u2022 Infrequent, slower GC
\u2022 Promoted from Young Gen

MetaSpace:
\u2022 Class metadata
\u2022 Rarely collected`},{title:"\u{1F604} GC vs C/C++",content:`C/C++ developers:
'I must carefully track every malloc and free' \u{1F630}
'Memory leak? My responsibility!' \u{1F613}
'Segmentation fault? My nightmare!' \u{1F480}

Java developers:
'GC handles it' \u{1F60E}
'What's a memory leak?' \u{1F604}

Java: Living dangerously? Not our style! \u2615

(Though GC isn't perfect\u2014can still leak via references!)`},{title:"\u2699\uFE0F GC Algorithms",content:`Popular GC implementations:

\u2022 Serial GC
  \u2192 Single thread, simple
  
\u2022 Parallel GC
  \u2192 Multiple threads, faster
  
\u2022 G1 GC (Garbage First)
  \u2192 Default in Java 9+
  \u2192 Low pause times
  
\u2022 ZGC (Java 11+)
  \u2192 Ultra-low latency
  \u2192 Handles huge heaps
  
\u2022 Shenandoah GC
  \u2192 Concurrent compaction`}],codeExamples:[{title:"Garbage Collection Demo",description:"Understanding when objects become eligible for GC",code:`public class GCDemo {
    public static void main(String[] args) {
        // Object created - stored in heap
        MyObject obj1 = new MyObject("Object 1");
        MyObject obj2 = new MyObject("Object 2");
        
        // obj1 is eligible for GC (no reference)
        obj1 = null;
        
        // Suggest GC to run (doesn't guarantee it will run!)
        System.gc();
        
        // obj2 still alive
        System.out.println(obj2.name);
        
        // Now obj2 also eligible for GC
        obj2 = null;
    }
}

class MyObject {
    String name;
    
    MyObject(String name) {
        this.name = name;
        System.out.println(name + " created");
    }
    
    // Called by GC before object is destroyed
    @Override
    protected void finalize() {
        System.out.println(name + " is being garbage collected");
    }
}`,language:"java"}]},{title:"\u{1F309} Native Method Interface (JNI)",content:"The bridge between Java and native code (C/C++).",subsections:[{title:"What It Is",content:`\u2022 Framework for calling C/C++ code from Java
\u2022 Allows Java to interact with OS
\u2022 Enables use of existing native libraries
\u2022 Two-way communication`},{title:"\u{1F309} Analogy",content:`JNI is like a translator at an international conference \u{1F310}

Java speaks: 'I need system time'
JNI translates to C: 'gettimeofday()'
C responds with data
JNI translates back to Java

Bridge between two worlds!`},{title:"When It's Used",content:`\u2022 Platform-specific features (Windows API, Linux syscalls)
\u2022 Performance-critical code (C is faster)
\u2022 Legacy code integration
\u2022 Hardware access
\u2022 Existing C/C++ libraries`}]},{title:"\u{1F504} How Everything Works Together (Complete Flow)",content:"Let's trace a Java program from code to execution!",images:[{url:"assets/images/java-execution-flow.svg",alt:"Java Program Execution Flow",caption:"Complete flow from writing Java code to execution - showing compilation, class loading, memory allocation, and execution engine phases"}],subsections:[{title:"\u{1F4DD} Step-by-Step Execution",content:`1. Write .java file
   \u2192 Source code created

2. Compile with javac
   \u2192 Generates .class file (bytecode)
   \u2192 Platform-independent

3. Class Loader loads .class
   \u2192 Loading \u2192 Linking \u2192 Initialization

4. Bytecode stored in Method Area
   \u2192 Class metadata saved

5. Objects created in Heap
   \u2192 'new' keyword allocates memory

6. Stack handles method calls
   \u2192 Local variables, method frames

7. Execution Engine runs code
   \u2192 Interpreter + JIT work together

8. Garbage Collector cleans up
   \u2192 Removes unused objects
   \u2192 Frees memory

9. Program completes! \u{1F389}`},{title:"\u{1F3AC} Movie Analogy - Complete Picture",content:`Making and showing a movie:

1. Write script (.java)
2. Film it (compile \u2192 .class)
3. Movie ready (bytecode)
4. Load into cinema (Class Loader)
5. Set up hall (Method Area)
6. Audience arrives (Objects in Heap)
7. Track showing time (Stack)
8. Projector plays (Execution Engine)
9. Clean after show (Garbage Collector)

Every step matters! \u{1F3A5}`}],codeExamples:[{title:"Complete Execution Example",description:"Tracing memory allocation across different areas",code:`public class ExecutionDemo {
    // Static variable - Method Area
    static int staticCount = 0;
    
    // Instance variable - Heap (when object created)
    int instanceVar = 10;
    
    public static void main(String[] args) {
        // args reference - Stack
        // Actual array - Heap
        
        // Local variable - Stack
        int localVar = 20;
        
        // obj reference - Stack
        // Actual object - Heap
        ExecutionDemo obj = new ExecutionDemo();
        
        // Method call - Stack frame created
        int result = obj.calculate(5, 10);
        
        System.out.println(result);
        // After method returns, stack frame removed
    }
    
    int calculate(int a, int b) {
        // a, b, sum - Stack (local to this method)
        int sum = a + b;
        return sum;
        // Stack frame popped when returning
    }
}

// Memory breakdown:
// Method Area: staticCount, class metadata, bytecode
// Heap: ExecutionDemo object, args array
// Stack: localVar, obj reference, result, a, b, sum
// PC Register: tracks current instruction
// Execution Engine: runs the code`,language:"java"}]},{title:"\u{1F9E0} Interview-Ready Quick Summary",content:"Master table for quick revision and interviews!",subsections:[{title:"\u{1F4CA} Component Comparison Table",content:`Component | Purpose
----------|--------
JVM | Runs Java bytecode
JRE | JVM + libraries
JDK | JRE + dev tools
Heap | Stores objects
Stack | Stores method calls
Method Area | Class metadata
JIT | Improves performance
GC | Cleans memory
Class Loader | Loads classes
Interpreter | Executes bytecode
PC Register | Current instruction
Native Stack | Native method calls`},{title:"\u{1F4A1} Interview One-Liners",content:`Q: What is JVM?
A: Virtual machine that executes Java bytecode and provides platform independence.

Q: Difference between JDK and JRE?
A: JDK = JRE + development tools (for developers). JRE = JVM + libraries (for execution).

Q: What is JIT?
A: Just-In-Time compiler that compiles frequently-used bytecode to native code for performance.

Q: How does GC work?
A: Automatically identifies and removes unused objects to free memory.

Q: Heap vs Stack?
A: Heap stores objects (shared), Stack stores method calls (thread-specific).

Q: What is Class Loader?
A: Loads .class files into JVM through Loading, Linking, Initialization phases.`},{title:"\u{1F3AF} Key Takeaways",content:`\u2705 JDK \u2283 JRE \u2283 JVM (nested hierarchy)
\u2705 Write code \u2192 JDK, Run code \u2192 JRE, Execute bytecode \u2192 JVM
\u2705 Heap = objects (shared), Stack = methods (thread-local)
\u2705 JIT makes Java fast by compiling hot code
\u2705 GC automatically cleans memory (no manual free!)
\u2705 Class Loader = security checkpoint
\u2705 Method Area = class metadata storage
\u2705 PC Register = instruction pointer
\u2705 Native Stack = for C/C++ calls`}]},{title:"\u{1F3C1} Final Thoughts",content:"Understanding JDK, JRE, and JVM architecture is crucial for Java mastery.",subsections:[{title:"Why This Matters",content:`Understanding Java's architecture helps you:

\u2705 Write better code
\u2705 Debug performance issues
\u2705 Optimize memory usage
\u2705 Ace technical interviews
\u2705 Understand error messages
\u2705 Make informed decisions

Java's architecture is the secret behind its success:
\u2022 Platform-independent
\u2022 Secure
\u2022 Robust
\u2022 High-performing
\u2022 Memory-safe`},{title:"The Big Picture",content:`Once you understand:
\u2022 JDK \u2192 JRE \u2192 JVM hierarchy
\u2022 JVM internals (Class Loader, Memory, Execution Engine)
\u2022 How bytecode flows through the system
\u2022 How GC and JIT work together

Java suddenly feels less magical and more logical \u{1F604}

It's not magic\u2014it's brilliant engineering! \u{1F393}`},{title:"\u{1F604} Final Fun Fact",content:`Java: 'I run everywhere!'
C++: 'But I'm faster!'
Java: 'Sure, but I don't crash and leak memory' \u{1F60E}
C++: '...fair point' \u{1F605}

And yes\u2026 Java still loves coffee \u2615\u{1F609}`}]}],keyPoints:["JDK = JRE + Development Tools (javac, jar, javadoc, debugger)","JRE = JVM + Core Libraries + Runtime Files","JVM = Execution Engine that runs Java bytecode","JDK is for developers, JRE is for end users, JVM is the core","Class Loader loads classes through Loading \u2192 Linking \u2192 Initialization","Runtime Data Areas: Method Area, Heap, Stack, PC Register, Native Stack","Heap stores objects (shared), Stack stores method calls (thread-specific)","Method Area stores class metadata, static variables, and bytecode","Execution Engine has Interpreter, JIT Compiler, and Garbage Collector","JIT compiles hot code to native for performance boost","Garbage Collector automatically removes unused objects","PC Register tracks current instruction being executed","Native Method Stack handles C/C++ code calls via JNI","JVM provides platform independence through bytecode abstraction","Installing JDK automatically includes JRE and JVM"],references:["Oracle JVM Specification - Official JVM architecture documentation","Java Platform, Standard Edition Documentation","Understanding the JVM by Gil Tene","Inside the Java Virtual Machine by Bill Venners","Java Performance: The Definitive Guide by Scott Oaks","Oracle Java Tutorials - JVM and Memory Management","Baeldung - JVM Architecture Tutorial"],interviewQA:[{question:"What is the difference between JDK, JRE, and JVM?",answer:`JDK (Java Development Kit) = JRE + Development Tools (javac, jar, javadoc, debugger). Used by developers to write and compile Java programs.

JRE (Java Runtime Environment) = JVM + Core Libraries + Runtime Files. Used to execute Java applications.

JVM (Java Virtual Machine) = The virtual machine that executes Java bytecode. Platform-specific and provides platform independence.

Relationship: JDK \u2283 JRE \u2283 JVM`,difficulty:"easy",tags:["JDK","JRE","JVM","fundamentals"]},{question:"When do you need JDK vs JRE?",answer:`You need JDK when:
\u2022 You're a Java developer
\u2022 Writing/compiling Java code
\u2022 Need javac, jar, javadoc tools

You need only JRE when:
\u2022 You're an end user
\u2022 Just running Java applications
\u2022 Don't need to compile code

Rule: Developers need JDK, end users need only JRE.`,difficulty:"easy",tags:["JDK","JRE","usage"]},{question:"Explain JVM architecture components.",answer:`JVM has 3 main subsystems:

1. Class Loader Subsystem:
   - Loading (Bootstrap, Extension, Application loaders)
   - Linking (Verification, Preparation, Resolution)
   - Initialization

2. Runtime Data Areas:
   - Method Area (class metadata, static vars)
   - Heap (objects, instance vars)
   - Stack (method calls, local vars)
   - PC Register (current instruction)
   - Native Method Stack (native calls)

3. Execution Engine:
   - Interpreter (bytecode execution)
   - JIT Compiler (performance optimization)
   - Garbage Collector (memory management)`,difficulty:"medium",tags:["JVM","architecture","components"]},{question:"What is the difference between Heap and Stack memory?",answer:`Heap:
\u2022 Stores objects and instance variables
\u2022 Shared across all threads
\u2022 Larger memory area
\u2022 Slower access
\u2022 Managed by Garbage Collector
\u2022 OutOfMemoryError

Stack:
\u2022 Stores method calls and local variables
\u2022 Thread-specific (each thread has own stack)
\u2022 Smaller, faster access
\u2022 LIFO structure
\u2022 Automatically cleared when method returns
\u2022 StackOverflowError

Example:
MyObject obj = new MyObject();
// 'obj' reference \u2192 Stack
// Actual MyObject \u2192 Heap`,difficulty:"medium",tags:["heap","stack","memory"]},{question:"What is JIT compiler and how does it improve performance?",answer:`JIT (Just-In-Time) Compiler improves performance by:

1. Profiling: Monitors frequently executed code ('hot spots')
2. Compilation: Converts hot bytecode to native machine code
3. Optimization: Applies optimizations (inlining, dead code elimination, loop optimization)
4. Caching: Stores compiled code for reuse

Benefit:
\u2022 First execution: Interpreted (slower)
\u2022 Subsequent executions: Native code (10-100x faster)
\u2022 Long-running apps benefit most

This is why Java servers get faster over time!`,difficulty:"medium",tags:["JIT","performance","optimization"]},{question:"How does Garbage Collection work in Java?",answer:`Garbage Collection automatically manages memory:

1. Mark Phase:
   - Identifies live objects (still referenced)
   - Marks them as 'in use'

2. Sweep Phase:
   - Finds unmarked objects (unreachable)
   - Removes them and frees memory

3. Compact Phase (optional):
   - Defragments memory
   - Moves objects together

Heap Generations:
\u2022 Young Gen: New objects, frequent GC
\u2022 Old Gen: Long-lived objects, infrequent GC
\u2022 MetaSpace: Class metadata

Advantage: No manual memory management (unlike C/C++)`,difficulty:"medium",tags:["GC","memory","garbage-collection"]},{question:"Explain the Class Loading process.",answer:`Class Loading has 3 phases:

1. Loading:
   - Bootstrap ClassLoader (core Java classes)
   - Extension ClassLoader (extensions)
   - Application ClassLoader (application classes)
   - Reads .class file into memory

2. Linking:
   a) Verification: Validates bytecode
   b) Preparation: Allocates memory for static vars
   c) Resolution: Converts symbolic references to direct

3. Initialization:
   - Executes static blocks
   - Initializes static variables

Analogy: Like airport security - verify, prepare, clear for entry!`,difficulty:"hard",tags:["class-loader","loading","jvm"]},{question:"What is stored in Method Area?",answer:`Method Area (MetaSpace in Java 8+) stores:

\u2022 Class metadata (structure, methods, fields)
\u2022 Static variables
\u2022 Method bytecode
\u2022 Runtime constant pool
\u2022 Field information

Characteristics:
\u2022 Shared across all threads
\u2022 Created at JVM startup
\u2022 In Java 8+, moved from Heap to native memory
\u2022 No more PermGen errors (auto-sized)

Analogy: Like a library - everyone reads from same class definitions.`,difficulty:"medium",tags:["method-area","metaspace","memory"]},{question:"What causes StackOverflowError and OutOfMemoryError?",answer:`StackOverflowError:
\u2022 Caused by: Too many method calls
\u2022 Common reason: Infinite recursion, very deep recursion
\u2022 Location: Stack memory
\u2022 Example: Method calling itself without base case

OutOfMemoryError:
\u2022 Caused by: Heap memory exhausted
\u2022 Common reason: Too many objects, memory leak, large data
\u2022 Location: Heap memory
\u2022 Solutions: Increase heap size (-Xmx), fix memory leaks, optimize code

Stack = method calls (limited depth)
Heap = objects (can be very large)`,difficulty:"medium",tags:["errors","stack","heap","memory"]},{question:"Why is Java called platform-independent? How does JVM enable this?",answer:`Platform Independence (WORA - Write Once, Run Anywhere):

1. Write Java code once
2. Compile to bytecode (.class) - platform-independent
3. Bytecode runs on any JVM
4. JVM is platform-specific (different for Windows/Linux/Mac)
5. JVM translates bytecode to native machine code

Key:
\u2022 Same bytecode works everywhere
\u2022 Different JVMs for different platforms
\u2022 JVM acts as abstraction layer

Analogy: JVM is a universal translator - one language in (bytecode), platform-specific output.

This is Java's superpower!`,difficulty:"easy",tags:["platform-independence","WORA","JVM","bytecode"]}]};var yy={name:"\u2615 Java Compilation and Execution Process \u2014 From Code to Magic! \u2728",overview:"Ever wondered what happens when you click 'Run' on your Java program? \u{1F914} It's not magic\u2014it's a beautifully designed journey! Your code goes through an adventure: from human-readable text \u2192 to mysterious bytecode \u2192 to lightning-fast execution. Let's follow this journey step-by-step with fun analogies, clear visuals, and zero confusion. Perfect for beginners and interview prep! \u{1F3AF}",sections:[{title:"\u{1F3AC} The Big Picture: Code to Execution Journey",content:"Before diving into details, let's see the complete journey at a glance!",images:[{url:"assets/images/java-compilation-flow.svg",alt:"Complete Java Compilation and Execution Process",caption:"The 5-step journey: Write Code \u2192 Compile \u2192 Bytecode \u2192 JVM \u2192 Output. Every Java program follows this path!"}],subsections:[{title:"\u{1F4DD} The Complete Flow (Quick Version)",content:`1. You write: HelloWorld.java (human-readable)
2. Compiler translates: HelloWorld.class (bytecode)
3. JVM loads: Class Loader brings it into memory
4. JVM executes: Interpreter + JIT Compiler run it
5. You see: 'Hello, World!' on screen \u{1F389}

Time taken: Milliseconds!
Magic level: \u{1F4AF}`},{title:"\u{1F355} Pizza Delivery Analogy",content:`Think of it like ordering pizza:

1. You write order (Java source code)
2. Kitchen translates to recipe (bytecode)
3. Delivery system loads it (Class Loader)
4. Chef makes it (Execution Engine)
5. You eat pizza! (Program output)

Just like the kitchen doesn't care if you're on Windows, Mac, or Linux\u2014bytecode runs anywhere! \u{1F355}`}]},{title:"\u{1F4DD} Step 1: Writing Source Code (.java)",content:"Everything starts with you\u2014the developer\u2014writing human-readable Java code.",subsections:[{title:"What is Source Code?",content:`Source code is the Java program you write using:
\u2022 Keywords (public, class, static, void)
\u2022 Your logic (if, for, while)
\u2022 Method calls, variables, objects

File extension: .java
Example: HelloWorld.java

It's human-readable, but the computer can't understand it directly.

Think of it as writing in English\u2014clear to humans, gibberish to machines!`},{title:"\u{1F4DA} Simple Example",content:`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

This is source code:
\u2705 Humans can read it
\u274C Computers can't execute it directly

It needs translation!`},{title:"\u{1F3AF} Key Point",content:`Source code is:
\u2022 Written in .java files
\u2022 Text-based and readable
\u2022 Following Java syntax rules
\u2022 Platform-independent (just text!)

You can write it on Windows, Mac, Linux\u2014doesn't matter!
It's just a text file. \u{1F4C4}`}],codeExamples:[{title:"Your First Java Source Code",description:"A simple program that prints a message",code:`// File: HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("This is source code!");
    }
}

// Status: Written, but not yet executable
// Next step: Compile it!`,language:"java"}]},{title:"\u{1F527} Step 2: Compilation (javac)",content:"Now comes the translator: the Java Compiler (javac). It converts your human-readable code into machine-understandable bytecode.",subsections:[{title:"What is the Java Compiler?",content:`javac = Java Compiler

It's a tool that:
\u2022 Reads your .java file
\u2022 Checks for syntax errors
\u2022 Translates source code to bytecode
\u2022 Generates .class file

Command:
javac HelloWorld.java

Output:
HelloWorld.class (if no errors!)`},{title:"What Happens During Compilation?",content:`The compiler does 3 main things:

1\uFE0F\u20E3 Syntax Checking \u2705
   \u2192 Verifies Java rules are followed
   \u2192 Missing semicolon? Error!
   \u2192 Typo in keyword? Error!

2\uFE0F\u20E3 Semantic Analysis \u{1F9E0}
   \u2192 Checks if code makes logical sense
   \u2192 Type mismatches? Error!
   \u2192 Unreachable code? Warning!

3\uFE0F\u20E3 Bytecode Generation \u{1F3AF}
   \u2192 Converts source to bytecode
   \u2192 Saves as .class file
   \u2192 Ready for JVM!`},{title:"\u{1F30D} Translator Analogy",content:`javac is like a translator at the UN \u{1F30D}

You speak: English (Java source code)
Translator outputs: Universal language (bytecode)

Just like UN translators convert English to a neutral format that everyone understands, javac converts Java to bytecode that any JVM understands!

Beauty: You translate ONCE, run EVERYWHERE!`},{title:"\u{1F604} Compilation Errors (The Fun Part!)",content:`Compiler: "I found 47 errors in your code."
You: "But there's only 1 error!"
Compiler: "That 1 error caused 46 others." \u{1F605}

Most common errors:
\u2022 Missing semicolon ;
\u2022 Misspelled keywords (pubic instead of public)
\u2022 Unmatched braces { }
\u2022 Class name doesn't match file name

The compiler is picky, but it's helping you!
Better to catch errors at compile-time than runtime! \u{1F6E1}\uFE0F`}],codeExamples:[{title:"Compiling Your Java Program",description:"Command-line compilation process",code:`// Step 1: Write the code (already done)
// File: HelloWorld.java

// Step 2: Open terminal/command prompt
// Navigate to the directory containing HelloWorld.java

// Step 3: Compile
javac HelloWorld.java

// If successful (no errors):
// No output means success! \u2705
// A new file is created: HelloWorld.class

// If there are errors:
// HelloWorld.java:3: error: ';' expected
//     System.out.println("Hello")
//                                 ^
// 1 error

// Fix errors and compile again until successful!`,language:"bash"}]},{title:"\u{1F3AF} Step 3: Bytecode Generation (.class)",content:"After successful compilation, you get a .class file containing bytecode. This is where Java's magic begins!",images:[{url:"assets/images/bytecode-magic.svg",alt:"Bytecode vs Traditional Compilation",caption:"The magic of bytecode: Compile once, run anywhere! Unlike C/C++ which needs separate compilation for each platform."}],subsections:[{title:"What is Bytecode?",content:`Bytecode is:
\u2022 Intermediate code between source and machine code
\u2022 Platform-independent instructions
\u2022 Stored in .class files
\u2022 Understood by JVM (not directly by CPU)
\u2022 Compact and optimized

It's not:
\u274C Human-readable
\u274C Machine code (not directly executable by CPU)
\u274C Platform-specific

It's the secret sauce of Java's portability!`},{title:"\u{1F50D} What Does Bytecode Look Like?",content:`If you open HelloWorld.class in a text editor:

CA FE BA BE 00 00 00 34 00 1D 0A 00 06 00 0F 09...

Confusing, right? \u{1F635}

That's because it's not meant for humans!

Special tools can read it:
javap -c HelloWorld

Shows:
public static void main(java.lang.String[]);
  Code:
    0: getstatic     #2  // Field java/lang/System.out
    3: ldc           #3  // String Hello, World!
    5: invokevirtual #4  // Method java/io/PrintStream.println
    8: return

These are bytecode instructions!`},{title:"\u{1F5DD}\uFE0F The Magic Number: CAFEBABE",content:`Every .class file starts with:
CA FE BA BE

Yes, it literally spells "CAFE BABE" in hexadecimal! \u2615\u{1F476}

Why?
Java creators had a sense of humor! \u{1F604}

Purpose:
\u2022 Identifies file as valid Java bytecode
\u2022 JVM checks this magic number first
\u2022 If missing \u2192 Not a valid .class file!

Fun fact: This was chosen by Java's original team as an inside joke. Now it's a permanent part of Java history!`},{title:"\u{1F3AF} Why Bytecode is Brilliant",content:`Bytecode solves a BIG problem:

\u274C Old way (C/C++):
   \u2022 Compile for Windows \u2192 .exe
   \u2022 Compile for Linux \u2192 .out
   \u2022 Compile for Mac \u2192 different binary
   \u2192 Same source, 3+ different compilations!

\u2705 Java way:
   \u2022 Compile ONCE \u2192 .class (bytecode)
   \u2022 Run on Windows JVM
   \u2022 Run on Linux JVM
   \u2022 Run on Mac JVM
   \u2192 One compilation, runs everywhere!

This is WORA: Write Once, Run Anywhere! \u{1F30D}`},{title:"\u{1F4E6} Bytecode Properties",content:`\u2022 Compact: Smaller than source code
\u2022 Optimized: Some optimizations already done
\u2022 Portable: Works on any platform with JVM
\u2022 Secure: Verified before execution
\u2022 Fast to load: Quicker than parsing source
\u2022 Standardized: Same format everywhere

Size comparison:
HelloWorld.java \u2192 ~150 bytes
HelloWorld.class \u2192 ~400-500 bytes
(More data because it includes metadata!)`}]},{title:"\u{1F30D} Platform Independence Deep Dive",content:"Let's understand WHY Java is platform-independent and HOW bytecode makes it possible.",images:[{url:"assets/images/platform-independence.svg",alt:"Write Once Run Anywhere Visualization",caption:"Same bytecode runs on Windows, Linux, Mac, and more! The JVM handles platform-specific translation."}],subsections:[{title:"\u{1F9E9} The Two-Layer Translation",content:`Java uses TWO translation steps:

Step 1: Source \u2192 Bytecode (javac)
\u2022 Done by developer
\u2022 Platform-independent
\u2022 Happens once

Step 2: Bytecode \u2192 Native Code (JVM)
\u2022 Done by JVM automatically
\u2022 Platform-specific
\u2022 Happens at runtime

Why two steps?
\u2022 Step 1 ensures code works everywhere (same bytecode)
\u2022 Step 2 optimizes for specific platform (native code)

Best of both worlds!`},{title:"\u{1F504} How It Works",content:`You write:
MyApp.java (on Windows)

You compile:
javac MyApp.java
\u2192 MyApp.class (bytecode)

You distribute:
\u2022 Send MyApp.class to Windows user
\u2022 Send MyApp.class to Linux user
\u2022 Send MyApp.class to Mac user

Same file for everyone! \u{1F389}

Each platform:
\u2022 Windows JVM translates bytecode to Windows instructions
\u2022 Linux JVM translates bytecode to Linux instructions
\u2022 Mac JVM translates bytecode to Mac instructions

You don't do anything different!`},{title:"\u{1F4FA} TV Remote Analogy",content:`Bytecode is like a universal TV remote \u{1F4FA}

You press: 'Volume Up' button
\u2192 Universal signal sent

Different TVs:
\u2022 Samsung TV interprets signal its way
\u2022 LG TV interprets signal its way
\u2022 Sony TV interprets signal its way

Same button press, works on all TVs!

Java bytecode:
\u2022 Same bytecode
\u2022 Different JVMs interpret it
\u2022 Works on all platforms!

You don't need separate remotes (compiled files) for each TV (platform)!`},{title:"\u{1F4A1} Key Insight",content:`Platform independence happens because:

1. Source code \u2192 Bytecode (platform-agnostic)
2. JVM is platform-specific (custom for each OS)
3. JVM translates bytecode to native code

The burden is on JVM, not on you!

You write once.
JVM makers ensure it works everywhere.

That's the Java promise! \u{1F91D}`}]},{title:"\u{1F4DA} Step 4: Class Loading",content:"Before JVM can execute bytecode, it must load the .class file into memory. Enter: The Class Loader!",subsections:[{title:"What is Class Loading?",content:`Class Loading is the process of:
\u2022 Finding .class files
\u2022 Reading bytecode
\u2022 Verifying it's safe and valid
\u2022 Loading into JVM memory
\u2022 Preparing for execution

It happens automatically when you run:
java HelloWorld`},{title:"\u{1F6AA} The Three Steps of Class Loading",content:`1\uFE0F\u20E3 Loading:
   \u2022 Finds HelloWorld.class
   \u2022 Reads binary data
   \u2022 Creates Class object in memory

2\uFE0F\u20E3 Linking:
   a) Verification: Checks bytecode is valid
   b) Preparation: Allocates memory for static vars
   c) Resolution: Resolves symbolic references

3\uFE0F\u20E3 Initialization:
   \u2022 Executes static blocks
   \u2022 Initializes static variables
   \u2022 Class is ready to use!

Think of it as airport security: check, verify, clear to board!`},{title:"\u{1F510} Bytecode Verification",content:`JVM doesn't blindly trust .class files!

Verification checks:
\u2705 File starts with CAFEBABE magic number
\u2705 Bytecode follows JVM specification
\u2705 No illegal type casts
\u2705 No invalid memory access
\u2705 No stack overflow/underflow
\u2705 All references are valid

If verification fails:
\u2192 VerifyError thrown
\u2192 Class won't load
\u2192 Program doesn't run

This prevents malicious bytecode! \u{1F6E1}\uFE0F`},{title:"\u{1F604} Security First!",content:`JVM: "I don't trust you, mysterious .class file!"

Even if you wrote the code yourself, JVM verifies it.

Why?
\u2022 .class files can be modified
\u2022 Downloaded from internet
\u2022 Potentially malicious

Java takes security seriously!

It's like TSA at airports:
'I know you're probably fine, but I'm checking anyway!' \u{1F50D}\u2708\uFE0F`}]},{title:"\u26A1 Step 5: Execution (Interpreter + JIT)",content:"Now the bytecode is loaded and verified. Time to actually RUN it! This is where Interpreter and JIT Compiler work together.",subsections:[{title:"\u{1F3AD} Two Execution Methods",content:`JVM uses TWO approaches simultaneously:

1. Interpreter \u{1F4D6}
   \u2022 Reads bytecode line by line
   \u2022 Executes immediately
   \u2022 Simple and straightforward
   \u2022 Slower (translates every time)

2. JIT Compiler \u26A1
   \u2022 Identifies frequently-run code (hot spots)
   \u2022 Compiles to native machine code
   \u2022 Stores for reuse
   \u2022 Much faster (translate once, run many times)

Both work together for optimal performance!`},{title:"\u{1F4D6} How Interpreter Works",content:`Interpreter reads bytecode instructions one by one:

Bytecode:
0: getstatic     #2
3: ldc           #3
5: invokevirtual #4
8: return

Interpreter:
\u2022 Step 0: Get System.out
\u2022 Step 3: Load string "Hello, World!"
\u2022 Step 5: Call println method
\u2022 Step 8: Return from main

Each instruction is translated to native code and executed.

Simple, but repetitive!
If a loop runs 1000 times, same instructions translated 1000 times. \u{1F613}`},{title:"\u26A1 How JIT Compiler Works",content:`JIT = Just-In-Time Compiler

Smart approach:
1. Monitor execution
2. Identify 'hot spots' (frequently-run code)
3. Compile entire method to native code
4. Cache the native code
5. Next time, use cached version (super fast!)

Example:
Loop running 1000 times:
\u2022 First few iterations: Interpreted
\u2022 JIT detects: "This is hot!"
\u2022 Compiles to native code
\u2022 Rest 990+ iterations: Native speed! \u{1F680}

Performance:
Interpreted: ~10x slower than native
JIT compiled: Near-native speed!`},{title:"\u{1F3C3}\u200D\u2642\uFE0F Interpreter vs JIT: The Race",content:`Interpreter:
\u2022 Fast startup (no compilation delay)
\u2022 Slow execution (repeated translation)
\u2022 Good for short-running programs

JIT Compiler:
\u2022 Slow startup (compilation takes time)
\u2022 Fast execution (native code)
\u2022 Great for long-running programs

Java uses BOTH:
\u2022 Start with Interpreter (quick startup)
\u2022 Profile code while running
\u2022 JIT compiles hot paths
\u2022 Gradually gets faster! \u26A1

Servers running for days/weeks?
JIT makes them blazing fast!`},{title:"\u2615 The Coffee Analogy",content:`Interpreter is like instant coffee \u2615
\u2022 Quick to make
\u2022 Drinkable immediately
\u2022 Not the best quality

JIT is like brewing espresso \u2615\u2728
\u2022 Takes time to set up
\u2022 Needs to warm up
\u2022 But once ready: AMAZING!

Java programs:
\u2022 Start with instant coffee (interpreted)
\u2022 Gradually brew espresso (JIT compilation)
\u2022 After warm-up: Top-tier performance!

This is why Java apps get faster the longer they run! \u{1F3AF}`},{title:"\u{1F604} Warm-Up Time",content:`Java at startup:
'I'm a bit slow right now...' \u{1F634}

Java after 5 minutes:
'Now watch me GO!' \u{1F680}

Java after 1 hour:
'I'm UNSTOPPABLE!' \u26A1\u26A1\u26A1

This is why:
\u2022 Java servers are super fast
\u2022 Short scripts feel slower
\u2022 Long-running apps benefit most

JIT needs time to optimize!
Like an athlete warming up before a race! \u{1F3C3}\u200D\u2642\uFE0F`}],codeExamples:[{title:"Running Your Java Program",description:"From compilation to execution",code:`// Step 1: Write code
// File: HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

// Step 2: Compile
// Terminal/Command Prompt:
javac HelloWorld.java
// Result: HelloWorld.class created

// Step 3: Run
java HelloWorld
// Behind the scenes:
// 1. JVM starts
// 2. Class Loader loads HelloWorld.class
// 3. Verifies bytecode
// 4. Finds main method
// 5. Interpreter starts executing
// 6. JIT may compile if code is hot
// 7. Output: Hello, World!

// You see:
Hello, World!

// JVM handled all the complexity!`,language:"bash"},{title:"Observing JIT in Action",description:"See how performance improves over time",code:`public class JITDemo {
    public static void main(String[] args) {
        // Warm-up phase
        for (int i = 0; i < 10000; i++) {
            compute(i);
        }
        
        // Measure after JIT compilation
        long start = System.nanoTime();
        for (int i = 0; i < 10000; i++) {
            compute(i);
        }
        long end = System.nanoTime();
        
        System.out.println("Time after JIT: " + (end - start) + " ns");
        // This will be much faster than the first loop!
    }
    
    static int compute(int n) {
        return n * n + n;
    }
}

// First iterations: Interpreted (slower)
// After ~100-1000 iterations: JIT compiles compute()
// Remaining iterations: Native speed (much faster!)`,language:"java"}]},{title:"\u{1F504} The Complete Flow (Detailed)",content:"Let's put it all together in one comprehensive flow!",subsections:[{title:"\u{1F4CB} Step-by-Step Complete Process",content:`1. Developer writes: HelloWorld.java
   \u2192 Human-readable source code
   \u2192 Uses Java syntax

2. Developer compiles: javac HelloWorld.java
   \u2192 Compiler checks syntax
   \u2192 Generates bytecode
   \u2192 Creates HelloWorld.class

3. Developer runs: java HelloWorld
   \u2192 JVM launches

4. Class Loader activates:
   \u2192 Finds HelloWorld.class
   \u2192 Loads into memory
   \u2192 Verifies bytecode
   \u2192 Prepares and initializes

5. JVM finds main method:
   \u2192 public static void main(String[] args)
   \u2192 Entry point identified

6. Execution Engine starts:
   \u2192 Interpreter begins executing bytecode
   \u2192 JIT monitors hot spots

7. Runtime execution:
   \u2192 Stack allocated for method calls
   \u2192 Heap allocated for objects
   \u2192 PC Register tracks instruction pointer

8. JIT compilation (if needed):
   \u2192 Hot code compiled to native
   \u2192 Performance boost!

9. Garbage Collection (background):
   \u2192 Unused objects cleaned
   \u2192 Memory freed

10. Program completes:
    \u2192 Output displayed
    \u2192 JVM shuts down
    \u2192 Process ends`},{title:"\u23F1\uFE0F Timeline",content:`Typical execution timeline:

0ms: java HelloWorld command entered
10ms: JVM starts up
20ms: Class Loader finds and loads .class
25ms: Bytecode verification complete
30ms: main method found
35ms: Interpreter starts executing
40ms: System.out.println called
45ms: 'Hello, World!' printed to console
50ms: main method returns
55ms: JVM shuts down

Total time: ~50-60 milliseconds

Most time spent: JVM startup and shutdown
Actual execution: Lightning fast! \u26A1`},{title:"\u{1F3AC} Movie Production Analogy (Complete)",content:`Making and showing a movie:

1. Write Script (Source Code)
   \u2192 You write the story

2. Film It (Compilation)
   \u2192 Director converts script to film
   \u2192 Creates master copy (bytecode)

3. Quality Check (Class Loader Verification)
   \u2192 Censors verify it's appropriate

4. Load in Cinema (Class Loading)
   \u2192 Film loaded into projector

5. Play Movie (Execution)
   \u2192 Projector runs film (Interpreter)
   \u2192 Digital enhancement (JIT)
   \u2192 Audience watches (Output)

6. Clean Up (Garbage Collection)
   \u2192 Theater cleaned after show

Every Java program follows this flow! \u{1F3A5}`}]},{title:"\u{1F3AF} Why This Process is Brilliant",content:"Java's compilation and execution model solves many problems elegantly.",subsections:[{title:"\u2705 Benefits of This Approach",content:`1. Platform Independence \u{1F30D}
   \u2192 Write once, run anywhere
   \u2192 No need to recompile for different OS

2. Security \u{1F510}
   \u2192 Bytecode verification prevents malicious code
   \u2192 Sandboxed execution environment
   \u2192 Type safety enforced

3. Performance \u26A1
   \u2192 JIT compilation provides near-native speed
   \u2192 Optimizations at runtime
   \u2192 Adapts to actual usage patterns

4. Portability \u{1F4E6}
   \u2192 Distribute .class files, not source
   \u2192 Same bytecode everywhere
   \u2192 Protect intellectual property

5. Flexibility \u{1F504}
   \u2192 Dynamic class loading
   \u2192 Reflection capabilities
   \u2192 Runtime code generation

6. Reliability \u{1F6E1}\uFE0F
   \u2192 Compile-time error checking
   \u2192 Runtime verification
   \u2192 Automatic memory management`},{title:"\u{1F50D} Compared to Other Languages",content:`C/C++:
\u2022 Compiles directly to machine code
\u2022 Platform-specific executables
\u2022 Fast, but not portable
\u2022 No bytecode verification

Python/JavaScript:
\u2022 Interpreted source code directly
\u2022 Portable, but slower
\u2022 No compilation step
\u2022 Security checks at runtime

Java:
\u2022 Best of both worlds!
\u2022 Compile to bytecode (portable)
\u2022 JIT compiles to native (fast)
\u2022 Verified for security
\u2022 Runs anywhere with JVM

Balanced approach! \u2696\uFE0F`},{title:"\u{1F604} The Java Philosophy",content:`Java's designers thought:

'What if we could:
\u2022 Compile code for portability
\u2022 Execute fast like C++
\u2022 Verify for security
\u2022 Run on any platform'

'Can we have it all?'

Answer: YES! \u2705

Solution: Bytecode + JVM

It took extra engineering effort.
But the result? Worth it! \u{1F4AF}

That's why Java runs:
\u2022 On 3 billion devices (really!)
\u2022 In most enterprise systems
\u2022 On Android phones
\u2022 In web servers worldwide

The compilation model made it possible! \u{1F3AF}`}]},{title:"\u{1F9E0} Interview-Ready Quick Summary",content:"Master these points for technical interviews!",subsections:[{title:"\u{1F4CA} Process Flow Table",content:`Stage | Input | Process | Output
------|-------|---------|-------
1. Source | Text editor | Write code | .java file
2. Compilation | .java file | javac compiler | .class file (bytecode)
3. Loading | .class file | Class Loader | In-memory class
4. Verification | Bytecode | JVM verifier | Verified code
5. Execution | Bytecode | Interpreter/JIT | Native execution
6. Output | Execution | Runtime | Program results`},{title:"\u{1F4A1} Interview One-Liners",content:`Q: What is bytecode?
A: Platform-independent intermediate code between source and machine code, stored in .class files.

Q: Why does Java use bytecode?
A: To achieve platform independence\u2014compile once, run anywhere with appropriate JVM.

Q: What is javac?
A: Java compiler that translates .java source code to .class bytecode files.

Q: What does Class Loader do?
A: Loads .class files into JVM memory through Loading, Linking, and Initialization phases.

Q: Difference between Interpreter and JIT?
A: Interpreter executes bytecode line-by-line (slow). JIT compiles hot code to native (fast).

Q: How is platform independence achieved?
A: Source compiled to platform-independent bytecode, which runs on platform-specific JVMs.

Q: What is the magic number in .class files?
A: CAFEBABE (0xCAFEBABE) - identifies valid Java bytecode files.`},{title:"\u{1F3AF} Key Takeaways",content:`\u2705 Java uses two-step compilation: Source \u2192 Bytecode \u2192 Native
\u2705 .java files contain source, .class files contain bytecode
\u2705 javac compiles, JVM executes
\u2705 Bytecode is platform-independent, JVM is platform-specific
\u2705 Class Loader loads, links, and initializes classes
\u2705 Interpreter executes bytecode directly (slower)
\u2705 JIT compiles hot code to native (faster)
\u2705 Bytecode verification ensures security
\u2705 CAFEBABE identifies valid .class files
\u2705 Write Once, Run Anywhere (WORA) through bytecode`}]},{title:"\u{1F3C1} Final Thoughts",content:"The journey from code to execution is Java's superpower!",subsections:[{title:"Why This Matters",content:`Understanding compilation and execution helps you:

\u2705 Debug more effectively
\u2705 Optimize performance
\u2705 Understand error messages
\u2705 Make architectural decisions
\u2705 Ace technical interviews
\u2705 Appreciate Java's design

When you see:
java HelloWorld

You now know the magic happening behind the scenes! \u{1F3A9}\u2728`},{title:"The Big Picture",content:`Java's compilation model is:
\u2022 Carefully designed
\u2022 Well thought out
\u2022 Battle-tested over decades
\u2022 Still relevant today

It's not the fastest language.
It's not the simplest language.

But it's:
\u2705 Portable across platforms
\u2705 Secure by design
\u2705 Fast enough for most needs
\u2705 Reliable at scale

That's why it powers:
\u2022 Enterprise applications
\u2022 Android apps
\u2022 Web servers
\u2022 Financial systems
\u2022 Scientific computing

The compilation process makes it all possible! \u{1F31F}`},{title:"\u{1F604} Final Fun Fact",content:`Java's motto:
'Write Once, Run Anywhere' (WORA)

Developers joke:
'Write Once, Debug Everywhere' (WODE) \u{1F605}

But in reality:
Write Once, Run Anywhere is real!
(Just test on all platforms to be safe \u{1F609})

And remember:
Every time you run java FileName,
you're witnessing decades of computer science innovation! \u{1F393}

From source to bytecode to execution\u2014
It's not magic, it's engineering excellence! \u26A1

Now go write some Java! \u2615\u{1F4BB}`}]}],keyPoints:["Java compilation is a two-step process: Source \u2192 Bytecode \u2192 Native execution",".java files contain human-readable source code","javac compiler translates source code to bytecode (.class files)","Bytecode is platform-independent intermediate code",".class files start with magic number CAFEBABE (0xCAFEBABE)","Class Loader loads .class files through Loading, Linking, and Initialization","Bytecode verification ensures code safety before execution","Interpreter executes bytecode line-by-line (slower but simple)","JIT Compiler compiles frequently-used code to native machine code (faster)","Platform independence achieved through bytecode + platform-specific JVM","Same bytecode runs on Windows, Linux, Mac, Android with appropriate JVM","JVM handles translation from bytecode to platform-specific machine code","Write Once, Run Anywhere (WORA) is Java's key advantage","Compilation catches syntax errors, execution catches runtime errors","Java programs get faster over time as JIT compiles hot spots"],references:["Oracle Java Documentation - The java and javac Commands","Java Virtual Machine Specification - Bytecode Instructions","Inside the Java Virtual Machine by Bill Venners","Java Performance: The Definitive Guide by Scott Oaks","Oracle JVM Internals - Class Loading and Execution","Understanding JIT Compilation in HotSpot JVM","Java Bytecode Fundamentals - Oracle Tutorials"],interviewQA:[{question:"Explain the Java compilation and execution process step by step.",answer:`1. Source Code: Developer writes .java file with human-readable code
2. Compilation: javac compiler translates source to bytecode, creates .class file
3. Class Loading: JVM loads .class file into memory via Class Loader
4. Verification: Bytecode verified for safety (checks magic number CAFEBABE, validates instructions)
5. Execution: Interpreter executes bytecode line-by-line, JIT compiles hot spots to native code
6. Output: Program executes and produces results

Key: Source compiled to platform-independent bytecode, then executed by platform-specific JVM.`,difficulty:"medium",tags:["compilation","execution","process"]},{question:"What is bytecode and why does Java use it?",answer:`Bytecode is platform-independent intermediate code between source code and machine code.

Characteristics:
\u2022 Stored in .class files
\u2022 Not human-readable
\u2022 Not directly executable by CPU
\u2022 Interpreted/compiled by JVM
\u2022 Starts with magic number CAFEBABE

Why Java uses it:
1. Platform Independence: Same bytecode runs on any platform with JVM
2. Security: Can be verified before execution
3. Portability: Distribute .class files without source code
4. Optimization: JIT can optimize at runtime based on actual usage

Enables 'Write Once, Run Anywhere' (WORA).`,difficulty:"medium",tags:["bytecode","platform-independence","WORA"]},{question:"What is the difference between javac and java commands?",answer:`javac (Java Compiler):
\u2022 Translates source code to bytecode
\u2022 Input: .java files
\u2022 Output: .class files
\u2022 Checks syntax and semantic errors
\u2022 Run once during development
\u2022 Example: javac HelloWorld.java

java (Java Application Launcher):
\u2022 Executes compiled bytecode
\u2022 Input: .class files
\u2022 Output: Program execution/results
\u2022 Launches JVM
\u2022 Runs every time you execute program
\u2022 Example: java HelloWorld

Analogy: javac = translator (source to bytecode), java = executor (runs bytecode)`,difficulty:"easy",tags:["javac","java","commands"]},{question:"How does Java achieve platform independence?",answer:`Java achieves platform independence through bytecode and JVM:

1. Two-Layer Architecture:
   \u2022 Layer 1: Source \u2192 Bytecode (platform-independent)
   \u2022 Layer 2: Bytecode \u2192 Native code (platform-specific)

2. Bytecode:
   \u2022 Platform-independent intermediate code
   \u2022 Same .class file works everywhere
   \u2022 Not tied to any specific OS or hardware

3. JVM:
   \u2022 Platform-specific (different JVM for each OS)
   \u2022 Translates bytecode to native machine code
   \u2022 Handles platform differences

4. Process:
   \u2022 Compile once on any platform \u2192 .class
   \u2022 Distribute same .class file
   \u2022 Run on Windows JVM, Linux JVM, Mac JVM, etc.

Developer writes once, JVM vendors ensure it runs everywhere!`,difficulty:"medium",tags:["platform-independence","bytecode","JVM","WORA"]},{question:"What is the difference between Interpreter and JIT Compiler in JVM?",answer:`Interpreter:
\u2022 Executes bytecode line-by-line
\u2022 Translates each instruction to native code on-the-fly
\u2022 Simple and straightforward
\u2022 Slow (repeated translation)
\u2022 Fast startup (no compilation delay)
\u2022 Good for code executed once

JIT (Just-In-Time) Compiler:
\u2022 Compiles frequently-executed code (hot spots) to native code
\u2022 Stores compiled code for reuse
\u2022 Complex with profiling overhead
\u2022 Fast execution (near-native speed)
\u2022 Slow startup (compilation takes time)
\u2022 Great for code executed many times

JVM Strategy:
\u2022 Start with Interpreter (quick startup)
\u2022 Monitor code execution
\u2022 JIT compiles hot paths
\u2022 Best of both worlds: fast startup + fast execution

Long-running apps benefit most from JIT!`,difficulty:"hard",tags:["interpreter","JIT","execution","performance"]},{question:"What happens during the Class Loading process?",answer:`Class Loading has 3 phases:

1. Loading:
   \u2022 Finds .class file (from file system, network, etc.)
   \u2022 Reads binary bytecode data
   \u2022 Creates java.lang.Class object in memory
   \u2022 Done by ClassLoader (Bootstrap, Extension, Application)

2. Linking:
   a) Verification:
      \u2022 Checks CAFEBABE magic number
      \u2022 Validates bytecode structure
      \u2022 Ensures type safety
      \u2022 Prevents illegal operations
   b) Preparation:
      \u2022 Allocates memory for static variables
      \u2022 Assigns default values (0, null, false)
   c) Resolution:
      \u2022 Converts symbolic references to direct references
      \u2022 Links method calls to actual methods

3. Initialization:
   \u2022 Executes static initializer blocks
   \u2022 Initializes static variables with actual values
   \u2022 Class ready for use

If any phase fails \u2192 Error thrown, class not loaded.`,difficulty:"hard",tags:["class-loading","verification","initialization"]},{question:"What is the magic number CAFEBABE and why is it used?",answer:`CAFEBABE (0xCAFEBABE) is the magic number that identifies Java bytecode files.

Location: First 4 bytes of every .class file

Purpose:
\u2022 File type identification
\u2022 JVM checks this before processing
\u2022 Ensures file is valid Java bytecode
\u2022 Prevents loading of corrupt/invalid files

Why CAFEBABE?
\u2022 Chosen by Java's original team
\u2022 Inside joke/fun Easter egg
\u2022 Literally spells 'CAFE BABE' in hexadecimal
\u2022 Shows developers have a sense of humor!

Usage:
\u2022 JVM reads first 4 bytes
\u2022 If not CAFEBABE \u2192 ClassFormatError
\u2022 If matches \u2192 Continues loading

You can verify: Open .class in hex editor, first bytes = CA FE BA BE`,difficulty:"medium",tags:["CAFEBABE","magic-number","bytecode","class-file"]},{question:"Why do Java programs get faster over time during execution?",answer:`Java programs get faster due to JIT (Just-In-Time) compilation:

1. Initial Phase (Slow):
   \u2022 Interpreter executes bytecode line-by-line
   \u2022 Each instruction translated repeatedly
   \u2022 Baseline performance

2. Profiling Phase:
   \u2022 JVM monitors code execution
   \u2022 Identifies 'hot spots' (frequently-executed code)
   \u2022 Tracks method call counts, loop iterations

3. Compilation Phase:
   \u2022 JIT compiles hot methods to native machine code
   \u2022 Applies optimizations (inlining, dead code elimination, etc.)
   \u2022 Caches compiled code

4. Optimized Phase (Fast):
   \u2022 Subsequent executions use cached native code
   \u2022 Near-native performance (10-100x faster than interpretation)
   \u2022 Fewer translations needed

5. Continuous Improvement:
   \u2022 JIT keeps profiling
   \u2022 Applies more aggressive optimizations
   \u2022 Adapts to actual runtime patterns

Result: Long-running servers get progressively faster!

This is called 'adaptive optimization' or 'warm-up period'.`,difficulty:"hard",tags:["JIT","performance","optimization","warm-up"]},{question:"What errors can occur during compilation vs execution?",answer:`Compile-Time Errors (caught by javac):
\u2022 Syntax errors (missing semicolons, braces)
\u2022 Type mismatches (assigning String to int)
\u2022 Undefined variables/methods
\u2022 Access modifier violations
\u2022 Invalid method signatures
\u2022 Class not found
\u2022 Cannot be fixed at runtime
\u2022 Must fix code and recompile

Example:
int x = "hello"; // Compile error: incompatible types

Runtime Errors (occur during execution):
\u2022 NullPointerException (accessing null object)
\u2022 ArrayIndexOutOfBoundsException
\u2022 ClassCastException
\u2022 ArithmeticException (divide by zero)
\u2022 OutOfMemoryError
\u2022 StackOverflowError
\u2022 Can be handled with try-catch
\u2022 May crash program if unhandled

Example:
String s = null;
System.out.println(s.length()); // Runtime: NullPointerException

Key Difference:
\u2022 Compile-time: Code won't compile
\u2022 Runtime: Code compiles but fails during execution`,difficulty:"medium",tags:["errors","compilation","runtime","debugging"]},{question:"Compare Java's compilation model with C/C++ and Python.",answer:`C/C++ (Ahead-of-Time Compilation):
\u2022 Source \u2192 Machine code directly
\u2022 Platform-specific executables (.exe, .out)
\u2022 Must recompile for each platform
\u2022 Fastest execution (native code)
\u2022 No portability
\u2022 No runtime verification

Python (Pure Interpretation):
\u2022 Source code interpreted directly
\u2022 No separate compilation step
\u2022 .pyc bytecode cached internally
\u2022 Slower execution (interpreted)
\u2022 Highly portable (source level)
\u2022 Simple deployment

Java (Bytecode + JIT):
\u2022 Source \u2192 Bytecode \u2192 Native (two-step)
\u2022 Platform-independent bytecode
\u2022 Same .class runs everywhere with JVM
\u2022 Fast execution (JIT compilation)
\u2022 Portable and secure
\u2022 Verified before execution

Summary:
\u2022 C/C++: Fast but not portable
\u2022 Python: Portable but slower
\u2022 Java: Balanced - portable AND fast (via JIT)

Java combines best of both: portability of interpreted languages + speed approaching compiled languages!`,difficulty:"hard",tags:["compilation","comparison","languages","performance"]}]};var by={name:"\u2615 Java Bytecode and Platform Independence \u2014 The Magic Behind WORA",overview:"Ever wondered how Java code written on Windows runs perfectly on Mac or Linux? The secret is bytecode \u2014 Java's universal language! This guide explores what bytecode is, how the `javac` compiler creates it, and why it's the heart of Java's legendary 'Write Once, Run Anywhere' (WORA) philosophy. We'll see how the JVM acts as a universal translator, turning bytecode into machine-specific instructions on any platform. Get ready for real-life analogies, fun examples, and visual diagrams that make this concept crystal clear! \u{1F680}",sections:[{title:"\u{1F3AF} The Big Picture: The Magic of Java Bytecode",content:`Imagine you're a chef who invented the world's most delicious recipe. Now, you want this recipe to work in every kitchen around the world \u2014 whether they use gas stoves, electric stoves, induction cooktops, or even campfires. The challenge? Different kitchens have completely different equipment!

This is EXACTLY the problem Java solves with bytecode. When you write Java code, it gets converted into a special intermediate language called bytecode. This bytecode is like a universal recipe that can be 'cooked' on any platform (Windows, Mac, Linux, Android, etc.) as long as there's a JVM (Java Virtual Machine) to translate it into instructions that the specific platform understands.

This is the heart of Java's famous "Write Once, Run Anywhere" (WORA) philosophy. You write your code once, compile it once, and it runs everywhere \u2014 no rewriting, no recompiling for different platforms!

\u{1F3AC} Movie Subtitle Analogy:
Bytecode is like a movie with subtitle files:
\u2022 The movie (bytecode) is the same globally
\u2022 Different subtitle players (JVMs) display it in local languages
\u2022 Windows JVM shows "English", Linux JVM shows "Spanish", Mac JVM shows "French"
\u2022 Same content, different presentations!`},{title:"\u{1F52C} What is Bytecode? The Universal Language",content:`Bytecode is the intermediate representation of your Java code after compilation. It's not human-readable (like Java source code), and it's not machine code (like what the CPU executes). Instead, it's a special set of instructions designed to be understood by the JVM.

Think of bytecode as sheet music:

\u{1F3BC} Sheet Music Analogy:
\u2022 A composer writes a musical piece in sheet music (universal notation)
\u2022 Any musician who can read sheet music can play it on their instrument (piano, guitar, violin)
\u2022 The instrument is different, but the music notation is the same

Similarly:
\u2022 You write Java source code (\`.java\` file)
\u2022 The Java compiler (\`javac\`) converts it to bytecode (\`.class\` file)
\u2022 Any JVM on any platform can 'play' this bytecode on their specific CPU`,subsections:[{title:"\u{1F4C1} Bytecode File Extension",content:"When you compile `MyProgram.java`, you get `MyProgram.class` \u2014 this `.class` file contains the bytecode.\n\nFile naming:\n\u2022 Source: `HelloWorld.java` (human-readable)\n\u2022 Bytecode: `HelloWorld.class` (JVM-readable)\n\u2022 Same name, different extension!"},{title:"\u2615 Magic Number: CAFEBABE",content:'Every `.class` file starts with the hexadecimal number `0xCAFEBABE` \u2014 this is like a secret handshake that tells the JVM, "Hey, I\'m a valid Java bytecode file!"\n\nWhy CAFEBABE?\n\u2022 The Java creators wanted a fun, memorable identifier\n\u2022 It references "cafe" (coffee) \u2014 matching Java\'s coffee theme \u2615\n\u2022 "Babe" was just to make it memorable (and slightly cheeky!)\n\n\u{1F602} Fun fact: Other magic numbers in tech include `0xDEADBEEF`, `0xBADC0FFE`, and `0xFEEDFACE`. Developers love their hexadecimal humor!'}],images:[{url:"assets/images/bytecode-universal-language.svg",alt:"Bytecode as Universal Language",caption:"Bytecode acts as a universal instruction set that different JVMs translate into platform-specific machine code"}]},{title:"\u2699\uFE0F How is Bytecode Generated?",content:"The journey from Java source code to bytecode involves the `javac` compiler working through multiple stages:",subsections:[{title:"\u{1F4DD} Step 1: Write Java Source Code",content:'You write your program and save it as a `.java` file:\n\n```java\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n```\n\nSaved as: `HelloWorld.java`'},{title:"\u{1F528} Step 2: Compile with javac",content:`You run the command:
\`\`\`bash
javac HelloWorld.java
\`\`\`

What happens internally?
The \`javac\` compiler performs these stages:

1. Lexical Analysis: Breaks your code into tokens (keywords, identifiers, operators)
   \u2022 Recognizes: \`public\`, \`class\`, \`HelloWorld\`, \`{\`, \`}\`, etc.

2. Syntax Analysis: Checks if your code follows Java grammar rules
   \u2022 Ensures methods are inside classes
   \u2022 Validates parentheses, braces, semicolons

3. Semantic Analysis: Checks for logical errors
   \u2022 Type mismatches (trying to assign String to int)
   \u2022 Undefined variables
   \u2022 Inaccessible methods

4. Bytecode Generation: Converts validated code into bytecode instructions
   \u2022 Translates high-level Java to low-level JVM instructions
   \u2022 Creates the \`.class\` file`},{title:"\u2705 Step 3: Bytecode is Created",content:"You get `HelloWorld.class` \u2014 a file full of bytecode instructions that the JVM understands.\n\n\u{1F4E6} Package Analogy:\nCompiling is like packaging a product:\n\u2022 Raw materials (Java source) \u2192 Factory (javac) \u2192 Packaged product (bytecode)\n\u2022 The package (`.class` file) can be shipped anywhere (any platform)!\n\n\u{1F50D} Viewing Bytecode:\nIf you open a `.class` file in a text editor, you'll see gibberish (it's in binary format). But you can use tools to inspect it:\n```bash\njavap -c HelloWorld\n```\n\nThis shows human-readable bytecode instructions like `getstatic`, `ldc`, `invokevirtual`."}],codeExamples:[{title:"Viewing Bytecode with javap",description:"The javap tool disassembles .class files and shows bytecode instructions in human-readable format.",code:`# Viewing bytecode with javap
javap -c HelloWorld

# Output:
public class HelloWorld {
  public HelloWorld();
    Code:
       0: aload_0
       1: invokespecial #1  // Method java/lang/Object."<init>":()V
       4: return

  public static void main(java.lang.String[]);
    Code:
       0: getstatic     #2  // Field java/lang/System.out:Ljava/io/PrintStream;
       3: ldc           #3  // String Hello, World!
       5: invokevirtual #4  // Method java/io/PrintStream.println:(Ljava/lang/String;)V
       8: return
}`,language:"bash"}]},{title:"\u{1F4CB} Understanding Bytecode Instructions",content:`Bytecode consists of operation codes (opcodes) and operands. Each instruction tells the JVM to do something specific.

Let's decode common bytecode instructions:`,subsections:[{title:"Common Bytecode Opcodes",content:"Here are frequently used bytecode instructions:",table:{headers:["Bytecode","What It Does"],rows:[["`getstatic`","Gets a static field from a class (e.g., `System.out`)"],["`ldc`",'Loads a constant value (e.g., string "Hello, World!")'],["`invokevirtual`","Calls an instance method (e.g., `println()`)"],["`aload_0`","Loads a local variable from position 0 (usually `this`)"],["`return`","Returns from the method"],["`iadd`","Adds two integers"],["`istore`","Stores an integer in a local variable"],["`iload`","Loads an integer from a local variable"],["`if_icmpge`","Compares two integers (if greater than or equal)"]]}},{title:"\u{1F527} Real-Life Analogy: Car Mechanic Checklist",content:`Think of bytecode instructions as a mechanic's step-by-step checklist:

\u2022 "Open the hood" \u2192 \`aload_0\` (load the object)
\u2022 "Check the oil" \u2192 \`getstatic\` (get a field value)
\u2022 "Add new oil" \u2192 \`ldc\` (load a constant)
\u2022 "Close the hood" \u2192 \`return\` (finish the method)

Each instruction is simple and precise, and together they make the car (program) run smoothly! \u{1F697}

No instruction is too complex \u2014 they're atomic operations that the JVM can execute quickly.`}]},{title:"\u{1F30D} Why Bytecode is Central to WORA",content:"The genius of Java is that bytecode is platform-independent. Let's see why this is revolutionary:",subsections:[{title:"\u274C The Problem with Traditional Languages (C/C++)",content:`In languages like C or C++:

1. You write source code: \`program.c\`
2. You compile it with a platform-specific compiler:
   \u2022 Windows: \`gcc program.c -o program.exe\` \u2192 creates Windows executable
   \u2022 Linux: \`gcc program.c -o program\` \u2192 creates Linux executable
   \u2022 Mac: \`clang program.c -o program\` \u2192 creates Mac executable
3. You need different compiled files for each platform!

\u{1F4E6} Shipping Analogy:
It's like needing to package the same product in different boxes for different countries:
\u2022 One box for USA (measurements in inches)
\u2022 One for Europe (measurements in centimeters)
\u2022 One for Japan (different voltage standards)

Hassle for the manufacturer (developer)!`},{title:"\u2705 The Java Solution: One Bytecode for All",content:`With Java:

1. Write source code: \`MyApp.java\`
2. Compile it once: \`javac MyApp.java\` \u2192 creates \`MyApp.class\`
3. This same \`MyApp.class\` file runs on:
   \u2022 Windows (with Windows JVM)
   \u2022 Linux (with Linux JVM)
   \u2022 Mac (with Mac JVM)
   \u2022 Android (with Android Runtime)
   \u2022 Embedded devices (with embedded JVM)

\u{1F4E6} Universal Adapter Analogy:
Bytecode is like a universal travel adapter:
\u2022 You plug your device (bytecode) into the adapter (JVM)
\u2022 The adapter converts it to the right voltage/plug type (machine code) for that country (platform)
\u2022 Same device, works everywhere!`},{title:"\u{1F511} Why Does This Work?",content:`Because the JVM is platform-specific, but the bytecode is not:

\u2022 Windows JVM translates bytecode \u2192 Windows x86/x64 machine instructions
\u2022 Linux JVM translates bytecode \u2192 Linux ELF executable format
\u2022 Mac JVM translates bytecode \u2192 macOS Mach-O executable format
\u2022 Android Runtime translates bytecode \u2192 ARM processor instructions

The bytecode doesn't care about the underlying platform \u2014 it's the JVM's job to handle platform differences!

\u{1F309} Bridge Analogy:
The JVM is like a universal language translator at the UN:
\u2022 Speaker gives speech in English (bytecode)
\u2022 Translators convert to French, Spanish, Chinese, Arabic (platform-specific machine code)
\u2022 Everyone understands in their own language!`}],images:[{url:"assets/images/bytecode-to-platforms.svg",alt:"Bytecode to Multiple Platforms",caption:"The same bytecode is distributed to multiple platforms, where platform-specific JVMs translate it into native machine code"}]},{title:"\u{1F5A5}\uFE0F How JVM Enables Platform Independence",content:"The JVM (Java Virtual Machine) is the secret ingredient that makes platform independence possible. Let's break down exactly how it works:",subsections:[{title:"\u{1F5E3}\uFE0F The JVM's Role: Universal Translator",content:`The JVM acts as a universal translator:

Your bytecode \u2192 JVM \u2192 Platform-specific machine code

Different platforms have different JVMs, but they all understand the same bytecode specification:`,table:{headers:["Platform","JVM Type","Translation Target"],rows:[["Windows","HotSpot JVM for Windows","x86/x64 Windows instructions"],["Linux","HotSpot JVM for Linux","Linux ELF executable format"],["Mac OS","HotSpot JVM for macOS","Mach-O executable format"],["Android","Dalvik/ART","ARM processor instructions"],["Embedded","Java ME","Optimized for IoT/embedded systems"]]}},{title:"\u26A1 The Translation Process",content:`When you run \`java MyApp\` on any platform, here's what happens:

Step 1: Class Loading
\u2022 JVM loads \`MyApp.class\`
\u2022 Checks the \`CAFEBABE\` magic number
\u2022 Reads the constant pool and class structure

Step 2: Bytecode Verification
\u2022 JVM ensures bytecode is safe (no illegal operations)
\u2022 Validates type safety (no type mismatches)
\u2022 Checks access control (no unauthorized field/method access)
\u2022 Prevents stack overflow/underflow

Step 3: Interpretation or JIT Compilation
\u2022 Interpreter Mode: Reads bytecode line-by-line and executes immediately
\u2022 JIT (Just-In-Time) Compilation: For "hot code" (frequently executed), compiles bytecode to native machine code for speed

Step 4: Native Execution
\u2022 Translated machine code runs directly on the CPU
\u2022 JVM handles memory, garbage collection, threading
\u2022 Your program executes!`},{title:"\u{1F3ED} Factory Analogy",content:`The JVM is like a factory:

\u2022 Input: Raw materials (bytecode)
\u2022 Processing: Assembly line (interpretation/JIT compilation)
\u2022 Output: Finished product (native machine instructions)

Different factories (JVMs) in different countries (platforms) use the same blueprint (bytecode) but produce products suited to local requirements (native code).

The factory adapts to local conditions (Windows vs Linux), but the blueprint remains universal!`}]},{title:"\u26A1 JVM Interpreter vs JIT Compiler",content:"The JVM uses two strategies to execute bytecode \u2014 each with its own advantages:",subsections:[{title:"\u{1F422} Interpreter (Slow but Flexible)",content:`The interpreter reads bytecode line by line and translates/executes immediately:

Advantages:
\u2022 Quick startup (no compilation needed)
\u2022 Works for any code instantly
\u2022 Flexible and adaptive

Disadvantages:
\u2022 Slower execution (translates every time code runs)
\u2022 No optimization

\u{1F6B6} Walking Analogy:
Like reading a recipe step-by-step while cooking \u2014 flexible but slow. You're constantly looking back at the recipe!`},{title:"\u{1F680} JIT Compiler (Fast but Requires Warmup)",content:`The JIT compiler identifies "hot code" (frequently executed code) and compiles it to native machine code:

Advantages:
\u2022 Near-native performance for hot code
\u2022 Can apply runtime optimizations based on actual usage patterns
\u2022 Cached compiled code is reused

Disadvantages:
\u2022 Slower startup (needs time to identify hot code)
\u2022 Uses more memory (stores compiled code)

\u{1F697} Highway Analogy:
Like memorizing your commute to work:
\u2022 First few times: Slow (using GPS/maps)
\u2022 After learning: Fast (autopilot mode)

Java apps get faster the longer they run!`},{title:"\u{1F3AF} Best of Both Worlds",content:`Modern JVMs (like HotSpot) use both strategies:

1. Start with interpretation for quick startup
2. Profile code as it runs to identify hot methods/loops
3. JIT-compile hot code to native machine code
4. Cache compiled code for reuse
5. Continue interpreting cold code (rarely executed)

Result? Fast startup + optimized long-running performance!

\u23F1\uFE0F This is why benchmarking Java apps requires warmup time \u2014 you need to let the JIT compiler do its magic!`}],codeExamples:[{title:"Example: Hot Code That JIT Will Optimize",description:"The calculate() method runs 1 million times, making it 'hot code' that the JIT compiler will detect and compile to native machine code for maximum speed.",code:`public class PerformanceExample {
    public static void main(String[] args) {
        // This loop is "hot code" - runs many times
        for (int i = 0; i < 1_000_000; i++) {
            calculate(i);
        }
    }

    // JIT will compile this method to native code
    private static int calculate(int n) {
        return n * n + 2 * n + 1;
    }
}`,language:"java"}]},{title:"\u{1F310} WORA: Write Once, Run Anywhere",content:"WORA is Java's flagship promise: write your code once, and it runs on any device that has a JVM.",subsections:[{title:"\u{1F3AE} Real-World WORA Examples",content:`1. Minecraft \u{1F3AE}
\u2022 Written in Java
\u2022 Runs on Windows, Mac, Linux, consoles, mobile devices
\u2022 Same Java code, billions of devices!

2. Enterprise Applications \u{1F3E2}
\u2022 Companies write Java backend once
\u2022 Deploy on Windows servers, Linux servers, cloud containers (AWS, Azure, Google Cloud)
\u2022 No rewriting for different server types

3. Android Apps \u{1F4F1}
\u2022 Java/Kotlin code compiles to bytecode
\u2022 Runs on billions of Android devices with different chipsets (ARM, x86, Snapdragon, MediaTek, Exynos)
\u2022 One codebase, all devices!

4. Banking Systems \u{1F3E6}
\u2022 Same Java application runs on:
  \u2192 IBM mainframes (legacy systems)
  \u2192 Linux trading servers (high performance)
  \u2192 Windows desktops (trader workstations)

5. Cross-Platform Desktop Tools \u{1F6E0}\uFE0F
\u2022 IntelliJ IDEA, Eclipse, NetBeans
\u2022 Same JAR file on Windows, Mac, Linux
\u2022 Identical functionality everywhere`},{title:"\u{1F4AA} The Developer's Dream",content:`Before Java (C/C++ era):

\u274C Write platform-specific code
\u274C Maintain separate codebases for Windows, Mac, Linux
\u274C Test on every platform separately
\u274C Fix bugs multiple times for each platform
\u274C Deal with platform-specific APIs

With Java (WORA era):

\u2705 Write code once
\u2705 Compile to bytecode once
\u2705 Distribute the same \`.class\` files
\u2705 JVM handles platform differences
\u2705 Test once, run everywhere
\u2705 Use platform-independent Java APIs

\u{1F30D} Global Restaurant Chain Analogy:
Imagine McDonald's creating one recipe (bytecode) that works in every country (platform):
\u2022 The local chefs (JVMs) adapt it to local equipment
\u2022 The core recipe stays the same
\u2022 Customers get consistent experience worldwide

That's WORA!`}],images:[{url:"assets/images/wora-visualization.svg",alt:"Write Once Run Anywhere",caption:"WORA in action: Developer writes and compiles once, then the same bytecode runs on multiple platforms with platform-specific JVMs"}]},{title:"\u{1F6E1}\uFE0F Bytecode Verification: Safety First",content:"One crucial aspect of bytecode is verification \u2014 the JVM checks that bytecode is safe before running it.",subsections:[{title:"\u{1F512} Why Verification Matters",content:`Imagine downloading a Java app from the internet. How do you know it won't:
\u2022 Crash your computer?
\u2022 Access memory it shouldn't?
\u2022 Execute malicious code?
\u2022 Bypass security restrictions?

Answer: The JVM verifies the bytecode!

Before executing any bytecode, the JVM's verifier acts as a security checkpoint.`},{title:"\u2705 What the Verifier Checks",content:`The bytecode verifier ensures:

1. Valid Class File Structure
\u2022 Starts with \`CAFEBABE\` magic number
\u2022 Has correct version numbers (Java 8, 11, 17, etc.)
\u2022 Contains valid constant pool
\u2022 Proper method and field descriptors

2. Type Safety
\u2022 No type mismatches (e.g., treating \`int\` as object reference)
\u2022 All method calls use correct parameter types
\u2022 Array access is within bounds
\u2022 Cast operations are valid

3. No Illegal Operations
\u2022 No jumping to invalid bytecode positions
\u2022 No stack overflow/underflow
\u2022 No access to private fields from outside the class
\u2022 No uninitialized object usage

4. Proper Exception Handling
\u2022 Every exception has a handler or is declared in \`throws\`
\u2022 Try-catch blocks are properly structured

If verification fails, you get a \`VerifyError\` and the program won't run!`},{title:"\u{1F510} Airport Security Analogy",content:`Bytecode verification is like airport security:

\u2022 Your luggage (bytecode) goes through scanners (verifier)
\u2022 Dangerous items (unsafe operations) are caught
\u2022 Only safe luggage (verified bytecode) gets on the plane (JVM execution)
\u2022 Passengers (users) are protected from threats

This makes Java one of the safest languages \u2014 malicious or buggy bytecode is caught before it can cause harm!

\u{1F6E1}\uFE0F This is especially important for:
\u2022 Applets (deprecated now, but were downloadable Java programs)
\u2022 Downloaded JARs from the internet
\u2022 Untrusted code execution
\u2022 Sandboxed environments`}]},{title:"\u{1F3CE}\uFE0F Performance: Bytecode vs Native Code",content:`A common question: "If bytecode needs translation, isn't Java slower than native languages like C?"`,subsections:[{title:"\u{1F4CA} The Honest Answer: It Depends!",content:`Cold Start (First Run):
\u274C Java is slower: JVM startup, bytecode verification, interpretation
\u2705 C/C++ is faster: Direct native execution from the start

Warm Run (After JIT Optimization):
\u2705 Java can be as fast or even faster: JIT compiler optimizes based on actual runtime behavior
\u2705 C/C++ performance stays constant: No runtime optimization

The JIT has an unfair advantage \u2014 it sees how your code actually runs in production!`},{title:"\u{1F680} Why Java Can Beat C/C++",content:`The JIT compiler has runtime information that C/C++ compilers don't have:

Example:
\`\`\`java
if (userType.equals("premium")) {
    // Premium logic
} else {
    // Regular logic
}
\`\`\`

If 99% of users are premium, the JIT compiler will:
\u2022 Optimize the premium branch aggressively
\u2022 Make it super fast
\u2022 Keep the regular branch less optimized (rarely used)

A C++ compiler compiling ahead-of-time can't do this \u2014 it doesn't know which branch is more common!

\u{1F3AF} Other JIT Advantages:
\u2022 Inline frequently called methods
\u2022 Eliminate dead code paths
\u2022 Optimize based on CPU architecture
\u2022 Apply profile-guided optimizations`},{title:"\u{1F4C8} Benchmarks",content:`Modern Java (JDK 17+) with HotSpot or GraalVM often matches C++ performance:

\u2022 Computation-heavy tasks: Within 5-10% of C++
\u2022 Server applications: Often faster due to JIT optimizations
\u2022 Startup time: Still slower (but GraalVM native images solve this)

\u{1F3CE}\uFE0F Race Car Analogy:
\u2022 C/C++: Pre-tuned race car \u2014 fast from the start, but can't adapt to track conditions
\u2022 Java: Smart race car \u2014 slower initially, but learns the track and optimizes itself to be blazing fast!

For long-running applications (servers, data processing), Java often wins!`}]},{title:"\u{1F504} The Complete Flow: Source to Execution",content:"Let's put it all together and see the complete journey of Java code from source to execution:",subsections:[{title:"\u{1F4DD} Example: Calculator Class",content:"Step 1: Write Code\n```java\npublic class Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n}\n```\nSaved as `Calculator.java`\n\nStep 2: Compile\n```bash\njavac Calculator.java\n```\nProduces: `Calculator.class` (bytecode)\n\nStep 3: Distribute\nSend `Calculator.class` to any platform (Windows, Linux, Mac, etc.)"},{title:"\u{1F5A5}\uFE0F Run on Windows",content:"```bash\njava Calculator\n```\n\nWhat happens:\n1. Windows JVM loads `Calculator.class`\n2. Verifies bytecode (checks `CAFEBABE`, validates structure)\n3. Interprets bytecode OR JIT-compiles to x86/x64 Windows machine code\n4. Executes the `add()` method\n5. Returns result"},{title:"\u{1F427} Run on Linux (Same .class File!)",content:"```bash\njava Calculator\n```\n\nWhat happens:\n1. Linux JVM loads the same `Calculator.class`\n2. Verifies bytecode\n3. JIT-compiles to Linux ELF machine code\n4. Executes the `add()` method\n5. Returns result\n\n\u{1F511} Key Takeaway:\nThe bytecode (`Calculator.class`) is identical on both platforms. Only the JVM differs, translating the same bytecode into platform-specific machine instructions!"},{title:"\u{1F4DA} Library Book Analogy",content:`Bytecode is like a book in a universal language (like Esperanto):

\u2022 The book (bytecode) is the same everywhere
\u2022 The reader (JVM) translates it into their native language (machine code)
\u2022 Different readers (Windows JVM, Linux JVM) understand the same book but speak different languages to their brains (CPUs)

Everyone enjoys the same story, just in their own language!`}],codeExamples:[{title:"Platform-Independent File Handling",description:"Java's standard library provides platform-independent APIs. The JVM handles path separators (/ vs \\\\) and line endings (\\n vs \\r\\n) automatically.",code:`import java.nio.file.*;
import java.io.*;

public class PlatformIndependentExample {
    public static void main(String[] args) throws IOException {
        // Works on Windows, Linux, Mac
        Path path = Paths.get("data.txt");
        
        // JVM handles path separators (/ vs \\\\)
        File file = new File("folder/subfolder/file.txt");
        
        // JVM handles line endings (\\n vs \\r\\n)
        Files.write(path, "Hello, World!".getBytes());
        
        System.out.println("File created successfully on: " + System.getProperty("os.name"));
    }
}`,language:"java"}]},{title:"\u{1F31F} Real-World Applications of Platform Independence",content:"Platform independence isn't just theory \u2014 it has massive real-world benefits:",subsections:[{title:"\u2601\uFE0F Cloud Computing",content:`Problem: Cloud providers use different infrastructure
\u2022 AWS uses different hardware than Azure or Google Cloud
\u2022 On-premises data centers have custom setups

Java Solution: Write your microservice once, deploy on:
\u2022 AWS EC2 (Linux)
\u2022 Azure App Service (Windows)
\u2022 Google Kubernetes Engine (containerized Linux)
\u2022 On-premises data center

No code changes needed!

Just package your JAR and deploy anywhere!`},{title:"\u{1F4F1} Android Development",content:`Problem: Android devices have wildly different processors
\u2022 Qualcomm Snapdragon
\u2022 MediaTek Dimensity
\u2022 Samsung Exynos
\u2022 Google Tensor

Java Solution: Write one app, Android's runtime (based on JVM principles) runs it on all devices.

Bytecode (or DEX in Android) is the universal format!`},{title:"\u{1F4B0} Financial Systems",content:`Problem: Banks need systems running on diverse platforms
\u2022 Mainframes for legacy core banking
\u2022 Linux servers for high-frequency trading
\u2022 Windows desktops for traders

Java Solution: Same trading application runs on:
\u2022 IBM mainframes (for legacy integration)
\u2022 Linux servers (for performance)
\u2022 Windows workstations (for UI)

One codebase, all platforms!`},{title:"\u{1F310} IoT and Embedded Systems",content:`Problem: IoT devices range from powerful to resource-constrained
\u2022 Raspberry Pi (ARM)
\u2022 Industrial controllers (MIPS)
\u2022 Smart appliances (various architectures)

Java Solution: Java ME (Micro Edition) allows the same code to run on:
\u2022 ARM processors
\u2022 MIPS processors
\u2022 x86 embedded systems

Universal IoT development!`}]},{title:"\u{1F393} Interview Preparation: Common Questions",content:"Here are the most frequently asked interview questions about bytecode and platform independence, with detailed answers:",subsections:[{title:"Q1: What is bytecode in Java?",content:"Answer:\nBytecode is the intermediate, platform-independent representation of Java code produced by the `javac` compiler. It consists of instructions that the JVM interprets or compiles to native machine code. Bytecode files have a `.class` extension and start with the magic number `0xCAFEBABE`. It's not human-readable (binary format) but can be viewed using tools like `javap`."},{title:"Q2: Why is bytecode important for platform independence?",content:'Answer:\nBytecode acts as a bridge between Java source code and machine code. Since bytecode is platform-independent, the same `.class` file can run on any platform that has a JVM. The JVM is platform-specific and translates bytecode into platform-specific machine instructions, enabling "Write Once, Run Anywhere." This eliminates the need to recompile code for different platforms.'},{title:"Q3: What is WORA?",content:`Answer:
WORA stands for "Write Once, Run Anywhere." It means you can write Java code once, compile it to bytecode once, and run it on any device or platform that has a compatible JVM \u2014 without recompilation or code changes. This is Java's core advantage over languages like C/C++ which require platform-specific compilation.`},{title:"Q4: How does the JVM enable platform independence?",content:`Answer:
The JVM is platform-specific software that understands bytecode. Different platforms (Windows, Linux, Mac) have their own JVM implementations that translate the same bytecode into platform-specific machine instructions. The JVM acts as an abstraction layer, handling platform differences like file paths, memory management, threading, and system calls while presenting a uniform interface to Java programs.`},{title:"Q5: Difference between bytecode and machine code?",content:`Answer:
Bytecode:
\u2022 Platform-independent intermediate code
\u2022 Understood by the JVM
\u2022 Not directly executable by CPU
\u2022 Stored in \`.class\` files

Machine Code:
\u2022 Platform-specific binary instructions
\u2022 Directly executed by CPU
\u2022 Varies by CPU architecture (x86, ARM, etc.)
\u2022 Final executable format

The JVM translates bytecode into machine code at runtime (interpretation or JIT compilation).`},{title:"Q6: How does JIT compilation improve performance?",content:`Answer:
JIT (Just-In-Time) compilation identifies frequently executed "hot code" and compiles it from bytecode to native machine code. This compiled code is cached and reused, providing near-native performance. Unlike interpretation (which translates bytecode every time), JIT-compiled code runs directly on the CPU. The JIT can also apply runtime optimizations based on actual usage patterns, sometimes outperforming C/C++.`},{title:"Q7: What is bytecode verification?",content:`Answer:
Bytecode verification is a security feature where the JVM checks the validity and safety of bytecode before execution. It ensures:
\u2022 Type safety (no type mismatches)
\u2022 Valid class file structure (CAFEBABE, version numbers)
\u2022 No illegal operations (invalid jumps, stack issues)
\u2022 Proper access control (no unauthorized access)

If verification fails, a \`VerifyError\` is thrown, preventing potentially dangerous code from running.`},{title:"Q8: Can you modify bytecode after compilation?",content:`Answer:
Yes! Bytecode can be manipulated using libraries like ASM, Javassist, or Byte Buddy. This is commonly used for:
\u2022 Aspect-Oriented Programming (AOP)
\u2022 Code instrumentation (logging, profiling, debugging)
\u2022 Dynamic proxy generation
\u2022 Mocking frameworks (Mockito, PowerMock)
\u2022 Bytecode enhancement (Hibernate uses this)

However, modified bytecode must still pass JVM verification.`},{title:"Q9: Why CAFEBABE magic number?",content:`Answer:
\`0xCAFEBABE\` is a magic number that identifies a file as a valid Java class file. The JVM checks for this signature when loading classes. The name was chosen by Java's creators as a fun, memorable identifier:
\u2022 "CAFE" references Java's coffee theme \u2615
\u2022 "BABE" makes it memorable (and slightly cheeky!)

If this magic number is missing or incorrect, the JVM throws a \`ClassFormatError\`.`},{title:"Q10: What happens if bytecode is corrupted?",content:`Answer:
If bytecode is corrupted or invalid:
1. The bytecode verifier detects the issue during class loading
2. The JVM throws a \`VerifyError\` or \`ClassFormatError\`
3. The program fails to run (cannot start execution)

This prevents potentially dangerous or malformed code from executing, protecting the system from crashes or security vulnerabilities.`}]}],keyPoints:["Bytecode is the platform-independent intermediate representation of Java code created by the javac compiler","Bytecode files have a .class extension and start with the magic number 0xCAFEBABE","The JVM (Java Virtual Machine) is platform-specific and translates bytecode into native machine code","WORA (Write Once, Run Anywhere) means compile Java code once, and it runs on any platform with a JVM","Different platforms (Windows, Linux, Mac) have different JVMs, but they all understand the same bytecode","The JVM uses two execution strategies: interpretation (slow but flexible) and JIT compilation (fast but requires warmup)","JIT (Just-In-Time) compilation identifies hot code and compiles it to native machine code for better performance","Bytecode verification ensures code is safe and valid before execution, preventing security vulnerabilities","Java's standard library provides platform-independent APIs, and the JVM handles platform-specific implementations","Platform independence enables Java to run on diverse systems: servers, desktops, mobile devices, embedded systems, cloud","Modern Java performance (with JIT) can match or exceed C/C++ in many scenarios, especially for long-running applications","Bytecode abstraction separates code from hardware details like CPU registers and OS-specific system calls","The same .class file works on x86, ARM, MIPS, and other CPU architectures without recompilation","Java's platform independence has made it the language of choice for enterprise applications, Android, and cloud services","Bytecode can be inspected using javap, and manipulated using libraries like ASM or Javassist for advanced use cases"],images:[{url:"assets/images/bytecode-to-platforms.svg",alt:"Java Bytecode to Multiple Platforms",caption:"Same bytecode distributed to Windows, Linux, and Mac platforms where JVMs translate it to native machine code"},{url:"assets/images/bytecode-universal-language.svg",alt:"Bytecode as Universal Language",caption:"Bytecode instructions are interpreted differently by platform-specific JVMs but produce the same results"},{url:"assets/images/wora-visualization.svg",alt:"Write Once Run Anywhere",caption:"WORA philosophy: Developer writes and compiles once, users run the same bytecode on any platform"}],references:["Java Virtual Machine Specification (Oracle)","Inside the Java Virtual Machine by Bill Venners","The Java Language Specification","JEP 295: Ahead-of-Time Compilation","Understanding Java Bytecode by Rafael Winterhalter","Java Performance: The Definitive Guide by Scott Oaks","Javap - The Java Class File Disassembler"],codeExamples:[{title:"Compiling and Viewing Bytecode",description:"Commands to compile Java code to bytecode and inspect the generated bytecode instructions using javap.",code:`# Compile Java source to bytecode
javac HelloWorld.java

# View bytecode instructions
javap -c HelloWorld

# View detailed class information
javap -v HelloWorld`,language:"bash"},{title:"Simple Bytecode Example",description:"Simple Java program demonstrating basic operations that translate to bytecode instructions like iload, iadd, and getstatic.",code:`public class BytecodeExample {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        int sum = a + b;
        System.out.println("Sum: " + sum);
    }
}`,language:"java"}],interviewQA:[{question:"What is bytecode and how is it different from source code and machine code?",answer:"Bytecode is an intermediate representation between source code and machine code. Source code (.java) is human-readable, bytecode (.class) is JVM-readable, and machine code is CPU-readable. The flow is: Source code \u2192 [javac] \u2192 Bytecode \u2192 [JVM] \u2192 Machine code. Bytecode is platform-independent, while machine code is platform-specific."},{question:"Explain the WORA principle and how Java achieves it.",answer:"WORA (Write Once, Run Anywhere) means you write Java code once and run it on any platform with a JVM. Java achieves this through bytecode: source code compiles to platform-independent bytecode, and platform-specific JVMs translate this bytecode to native machine code. The same .class file runs on Windows, Linux, Mac, etc., without modification."},{question:"How does the JVM ensure platform independence?",answer:"The JVM acts as an abstraction layer between bytecode and the OS/hardware. It provides: (1) Standardized bytecode instruction set, (2) Platform-independent APIs, (3) Bytecode-to-native translation, (4) Memory management, (5) Threading abstraction. Different platforms have different JVMs, but all understand the same bytecode specification."},{question:"What is the magic number CAFEBABE and why is it significant?",answer:"0xCAFEBABE is the magic number at the start of every Java .class file. It identifies the file as valid Java bytecode. The JVM checks for this signature when loading classes. If missing or incorrect, a ClassFormatError is thrown. The name was chosen by Java's creators as a fun, memorable identifier referencing Java's coffee theme."},{question:"Describe the role of the JIT compiler in bytecode execution.",answer:"The JIT (Just-In-Time) compiler optimizes bytecode execution by compiling frequently executed 'hot code' to native machine code at runtime. Initially, the JVM interprets bytecode (slow). As code runs, JIT identifies hot methods/loops, compiles them to native code, and caches the result. Subsequent calls use the fast native version, providing near-native performance."},{question:"What is bytecode verification and why is it important?",answer:"Bytecode verification is a security process where the JVM validates bytecode before execution. The verifier checks: (1) Valid class file structure (CAFEBABE, version), (2) Type safety (no type mismatches), (3) No illegal operations (invalid jumps, stack issues), (4) Access control (no unauthorized field/method access). This prevents malicious or corrupted code from running."},{question:"Can Java be as fast as C/C++? Explain.",answer:"Yes, in many cases. While cold-start is slower (JVM startup, verification), warm-run performance can match or exceed C/C++. The JIT compiler optimizes based on actual runtime behavior (profiling-guided optimization), which static C/C++ compilers can't do. Benchmarks show modern Java (JDK 17+ with HotSpot/GraalVM) within 5-10% of C++ for computation-heavy tasks, and sometimes faster for server applications."},{question:"How can you view the bytecode of a compiled Java class?",answer:"Use the javap tool: 'javap -c ClassName' shows bytecode instructions, 'javap -v ClassName' shows detailed class information including constant pool and attributes. Example: 'javap -c HelloWorld' displays the bytecode for HelloWorld.class. You can also use IDE plugins or tools like JD-GUI, ByteCode Viewer, or ASM Bytecode Viewer."},{question:"What are some real-world applications of Java's platform independence?",answer:"1) Cloud computing: Deploy same JAR on AWS (Linux), Azure (Windows), Google Cloud. 2) Android: One app runs on billions of devices with different processors. 3) Enterprise: Same code runs on mainframes, servers, desktops. 4) IoT: Java ME on Raspberry Pi, industrial controllers with different architectures. 5) Desktop apps: IntelliJ IDEA, Eclipse run identically on Windows/Mac/Linux."},{question:"How does Java handle platform-specific differences like file paths and line endings?",answer:"Java's standard library provides platform-independent APIs that abstract OS differences. File.separator uses '/' on Unix and '\\\\' on Windows automatically. Files.write() handles line endings (\\n vs \\r\\n). System.getProperty('os.name') detects the platform if needed. The JVM translates Java API calls to OS-specific system calls behind the scenes, maintaining the abstraction."}]};var Cy={name:"Java Editions: Java SE, Java EE, and Java ME",overview:"Java isn't just one thing \u2014 it's like a Swiss Army knife with different tools for different jobs! Meet the three main Java editions: Java SE (the foundation), Java EE (the enterprise powerhouse), and Java ME (the lightweight traveler). This guide explores what makes each edition special, where they shine, and how they work together. We'll use fun analogies (think toolbox vs. construction crane vs. pocket knife!), real-world examples, and visual diagrams to make everything crystal clear. Whether you're building desktop apps, massive web systems, or tiny embedded devices, there's a Java edition perfectly suited for your needs! \u{1F680}",sections:[{title:"The Big Picture: Why Multiple Editions?",content:"Java isn't just one thing \u2014 it's a family of platforms designed for different needs. Understanding why multiple editions exist is key to choosing the right tools for your projects.",subsections:[{title:"The Problem Java Solves",content:`Imagine you're a carpenter. Would you use the same toolbox for:
\u2022 Building a birdhouse (small, simple project)
\u2022 Constructing a skyscraper (massive, complex structure)
\u2022 Repairing a watch (tiny, precision work)

Of course not! Each job needs different tools, even though they all involve woodworking.

Similarly, Java applications range from:
\u2022 Simple desktop calculators (small programs)
\u2022 Enterprise banking systems handling millions of transactions (massive, mission-critical)
\u2022 Programs running on smart cards or IoT sensors (tiny devices with limited memory)

Instead of forcing developers to use a bloated, one-size-fits-all platform, Java offers three optimized editions:

\u{1F3D7}\uFE0F Java SE (Standard Edition): The foundation \u2014 core language and libraries for general-purpose programming

\u{1F3E2} Java EE (Enterprise Edition): The enterprise toolkit \u2014 adds web servers, databases, messaging, and distributed computing for large-scale applications

\u{1F4F1} Java ME (Micro Edition): The lightweight traveler \u2014 a compact subset for resource-constrained devices like phones, embedded systems, and IoT

Think of it like clothing sizes: instead of making everyone wear XXL shirts, Java offers Small, Medium, Large, and XL \u2014 each perfectly tailored to fit!`},{title:"How They Relate to Each Other",content:`Here's the relationship:

\u2022 Java SE is the BASE \u2014 everything starts here
\u2022 Java EE EXTENDS Java SE \u2014 it includes everything from SE plus additional enterprise features
\u2022 Java ME is a SUBSET of Java SE \u2014 it takes the most essential parts and leaves out the heavy stuff

\u{1F4E6} Box Analogy:
\u2022 Java SE = A standard toolbox with hammer, screwdriver, wrench (everything you need for basic projects)
\u2022 Java EE = The same toolbox PLUS a power drill, table saw, and jackhammer (professional-grade additions for big projects)
\u2022 Java ME = A pocket multi-tool with just the essentials (compact and portable)

All three editions share the same Java language syntax. The difference is in the LIBRARIES and APIs (Application Programming Interfaces) they provide.`}]},{title:"Java SE (Standard Edition): The Foundation",content:"Java SE is the core Java platform \u2014 the foundation upon which everything else is built. When you learn Java, you're learning Java SE!",subsections:[{title:"What is Java SE?",content:`Java SE is the core Java platform. It's what you learn when you start programming in Java. Think of it as the foundational ingredients in cooking \u2014 flour, eggs, sugar, milk. You can make lots of things with these basics!

Java SE includes:
\u2022 The Java language itself (syntax, keywords, operators)
\u2022 Core libraries (collections, I/O, networking, concurrency)
\u2022 The JVM (Java Virtual Machine) and runtime environment
\u2022 Development tools (javac compiler, java runtime, jar archiver)
\u2022 GUI frameworks (Swing, JavaFX for desktop applications)
\u2022 Database connectivity (JDBC)
\u2022 Security, XML processing, internationalization, and more

\u{1F393} Learning Analogy:
Java SE is like learning basic math (addition, subtraction, multiplication). Once you know the fundamentals, you can build on them to tackle advanced topics like calculus (Java EE) or use them for quick mental calculations (Java ME).`},{title:"Key Components of Java SE",content:`1. Java Language Fundamentals:
   \u2022 Data types, variables, operators
   \u2022 Control flow (if, switch, loops)
   \u2022 Object-oriented features (classes, inheritance, polymorphism)
   \u2022 Exception handling
   \u2022 Generics, annotations, lambda expressions

2. Collections Framework:
   \u2022 Lists (ArrayList, LinkedList)
   \u2022 Sets (HashSet, TreeSet)
   \u2022 Maps (HashMap, TreeMap)
   \u2022 Queues, Deques, and more

3. I/O (Input/Output):
   \u2022 File reading and writing
   \u2022 Streams (byte streams, character streams)
   \u2022 Serialization (saving objects to disk)

4. Concurrency & Multithreading:
   \u2022 Creating and managing threads
   \u2022 Synchronization and locks
   \u2022 Concurrent collections
   \u2022 Executor framework

5. Networking:
   \u2022 Sockets (TCP/UDP communication)
   \u2022 URL connections
   \u2022 HTTP clients

6. GUI Development:
   \u2022 Swing (older, mature GUI toolkit)
   \u2022 JavaFX (modern, rich UI framework)

7. Database Access:
   \u2022 JDBC (Java Database Connectivity) for SQL databases

8. Utilities:
   \u2022 Date/Time API (java.time package)
   \u2022 Regular expressions
   \u2022 Logging
   \u2022 Preferences API`},{title:"Real-World Java SE Applications",content:`Java SE powers:

\u{1F5A5}\uFE0F Desktop Applications:
\u2022 IntelliJ IDEA, Eclipse, NetBeans (all popular Java IDEs are built with Java SE!)
\u2022 Apache OpenOffice
\u2022 File managers, text editors, media players

\u{1F3AE} Games:
\u2022 Minecraft (the world's best-selling game, built with Java SE!)
\u2022 RuneScape
\u2022 Countless indie games

\u{1F6E0}\uFE0F Development Tools:
\u2022 Gradle (build automation)
\u2022 Maven (project management)
\u2022 Jenkins (continuous integration)

\u{1F9D1}\u200D\u{1F393} Learning & Experimentation:
\u2022 Your first Hello World program
\u2022 College programming assignments
\u2022 Command-line utilities and scripts

\u{1F354} Fast Food Analogy:
Java SE is like a burger joint that serves classic burgers. You can customize with toppings (libraries), but the core burger (Java language) is the same. Simple, reliable, gets the job done!`},{title:"When to Use Java SE",content:`Choose Java SE when you need:
\u2022 Desktop applications with a graphical interface
\u2022 Command-line tools and utilities
\u2022 Standalone applications that don't require web servers or distributed systems
\u2022 Educational projects and learning Java fundamentals
\u2022 Games that run on a single machine
\u2022 Automation scripts

Java SE is perfect for projects where you control the entire application and it runs on ONE machine (not distributed across servers).`}],images:[{url:"assets/images/java-editions-overview.svg",alt:"Java Editions Overview",caption:"Comparison of Java SE, Java EE, and Java ME editions showing their features, use cases, and relationships"}]},{title:"Java EE (Enterprise Edition): The Enterprise Toolkit",content:"Java EE extends Java SE with powerful enterprise features for building large-scale, distributed applications that power the world's biggest companies.",subsections:[{title:"What is Java EE?",content:`Java EE (now known as Jakarta EE after Oracle handed it to the Eclipse Foundation) is Java's powerhouse for building large-scale, distributed, multi-tier enterprise applications.

Think of Java SE as a bicycle and Java EE as a construction crane. The crane is built on wheels and steering (SE fundamentals), but it adds massive capabilities for heavy lifting (enterprise features).

Java EE = Java SE + Enterprise Features

Enterprise features include:
\u2022 Web applications (Servlets, JSP, JSF)
\u2022 RESTful web services (JAX-RS)
\u2022 SOAP web services (JAX-WS)
\u2022 Enterprise JavaBeans (EJB) for business logic
\u2022 Java Persistence API (JPA) for database operations
\u2022 Messaging (JMS - Java Message Service)
\u2022 Transactions (JTA - Java Transaction API)
\u2022 Dependency Injection (CDI - Contexts and Dependency Injection)
\u2022 Security, WebSockets, JSON processing, and more

\u{1F3E2} Office Building Analogy:
\u2022 Java SE = A single office room with a desk, chair, and computer (everything you need to work)
\u2022 Java EE = An entire skyscraper with hundreds of offices, conference rooms, cafeterias, security systems, elevators, HVAC, networking infrastructure (coordinated systems for large organizations)`},{title:"Key Components of Java EE",content:`1. Web Technologies:
   \u2022 Servlets: Java programs that handle HTTP requests/responses
   \u2022 JSP (JavaServer Pages): HTML with embedded Java code
   \u2022 JSF (JavaServer Faces): Component-based web framework
   \u2022 WebSocket: Real-time, two-way communication

2. RESTful Web Services:
   \u2022 JAX-RS (Java API for RESTful Web Services)
   \u2022 JSON-B (JSON Binding) for JSON serialization
   \u2022 Build REST APIs for mobile apps, SPAs, microservices

3. Enterprise JavaBeans (EJB):
   \u2022 Reusable business logic components
   \u2022 Transaction management
   \u2022 Security, concurrency, lifecycle management

4. Persistence:
   \u2022 JPA (Java Persistence API) for object-relational mapping (ORM)
   \u2022 Map Java objects to database tables
   \u2022 Works with Hibernate, EclipseLink, etc.

5. Messaging:
   \u2022 JMS (Java Message Service) for asynchronous communication
   \u2022 Queues and topics for message-driven applications

6. Dependency Injection & Contexts:
   \u2022 CDI (Contexts and Dependency Injection)
   \u2022 Manage object lifecycles and dependencies automatically

7. Transactions:
   \u2022 JTA (Java Transaction API)
   \u2022 Ensure data consistency across multiple operations

8. Security:
   \u2022 Authentication and authorization
   \u2022 Role-based access control
   \u2022 Encryption and secure communication`},{title:"Real-World Java EE Applications",content:`Java EE powers some of the world's most critical systems:

\u{1F3E6} Banking & Finance:
\u2022 Online banking platforms
\u2022 Stock trading systems (think NYSE, NASDAQ backends)
\u2022 Payment gateways (PayPal, Stripe use Java extensively)
\u2022 Credit card processing

\u{1F6D2} E-commerce Giants:
\u2022 Amazon's backend systems
\u2022 eBay's platform
\u2022 Walmart's online store
\u2022 Alibaba

\u{1F3E2} Enterprise Applications:
\u2022 Customer Relationship Management (CRM) systems like Salesforce
\u2022 Enterprise Resource Planning (ERP) solutions like SAP
\u2022 Human Resources Management Systems
\u2022 Supply chain management

\u{1F310} Web Services & APIs:
\u2022 LinkedIn's backend
\u2022 Twitter's original infrastructure
\u2022 Google's AdWords platform (parts of it)
\u2022 Netflix's streaming infrastructure (migrated to microservices, but originally Java EE)

\u2708\uFE0F Travel & Logistics:
\u2022 Airline reservation systems
\u2022 Hotel booking platforms
\u2022 Shipping and logistics tracking

\u{1F680} Space Shuttle Analogy:
Java EE is like NASA's mission control \u2014 it coordinates hundreds of systems, handles real-time data from multiple sources, ensures everything stays in sync, and can handle failures gracefully. You need this level of sophistication for critical, large-scale operations!`},{title:"When to Use Java EE",content:`Choose Java EE when you need:
\u2022 Multi-tier web applications (presentation, business logic, data layers)
\u2022 RESTful APIs for mobile apps or single-page applications
\u2022 Applications that handle thousands of concurrent users
\u2022 Systems requiring transactions across multiple databases
\u2022 Enterprise integration (connecting different business systems)
\u2022 Mission-critical applications with high availability and scalability requirements
\u2022 Microservices architectures

Java EE is overkill for simple projects but essential for complex, distributed enterprise systems.`}],images:[{url:"assets/images/java-editions-use-cases.svg",alt:"Java Editions Real World Use Cases",caption:"Real-world applications and examples for Java SE, Java EE, and Java ME in various industries"}]},{title:"Java ME (Micro Edition): The Lightweight Traveler",content:"Java ME is optimized for resource-constrained devices \u2014 where every byte of memory and every millisecond of battery life counts.",subsections:[{title:"What is Java ME?",content:`Java ME is designed for small devices with limited processing power, memory, and battery life. Think feature phones, smart cards, Blu-ray players, TV set-top boxes, IoT sensors, and embedded systems.

Java ME = Subset of Java SE (optimized for resource-constrained devices)

It removes the heavy features (like Swing GUI, advanced I/O) and keeps only what's essential:
\u2022 Core language features
\u2022 Basic collections
\u2022 Lightweight networking
\u2022 Mobile-specific APIs
\u2022 Optimized for low memory and power consumption

\u{1F392} Backpacking Analogy:
\u2022 Java SE = Your entire wardrobe at home (everything you own)
\u2022 Java EE = Your wardrobe PLUS professional suits, tools, equipment (expanded for work)
\u2022 Java ME = A small backpack with only essentials \u2014 one pair of jeans, two t-shirts, toothbrush (traveling light!)

You wouldn't pack your entire closet for a weekend camping trip, right? Similarly, you don't need all of Java SE's features on a device with 2MB of memory!`},{title:"Key Components of Java ME",content:`Java ME has two main configurations:

1. CLDC (Connected Limited Device Configuration):
   \u2022 For very small devices (old mobile phones, pagers, smart cards)
   \u2022 Minimal memory footprint
   \u2022 Basic language features and libraries

2. CDC (Connected Device Configuration):
   \u2022 For slightly larger devices (set-top boxes, car navigation, printers)
   \u2022 More features than CLDC but still lightweight compared to SE

Key APIs:
\u2022 MIDP (Mobile Information Device Profile): UI, networking, storage for mobile devices
\u2022 LWUIT (Lightweight UI Toolkit): GUI components for small screens
\u2022 Wireless Messaging API: SMS, MMS support
\u2022 Location API: GPS and positioning
\u2022 Multimedia API: Audio, video playback
\u2022 Bluetooth API: Device communication

\u{1F9F3} Airplane Luggage Analogy:
\u2022 Java ME is like carry-on luggage \u2014 you pack smart, prioritize essentials, and leave behind the bulky stuff. It still gets the job done, but in a compact form!`},{title:"Real-World Java ME Applications",content:`Java ME used to be HUGE (billions of devices) but has declined with smartphones. However, it still powers:

\u{1F4F1} Mobile Devices:
\u2022 Old Nokia phones (remember Snake? Built with Java ME!)
\u2022 Feature phones in developing countries
\u2022 Basic mobile games

\u{1F4B3} Smart Cards:
\u2022 SIM cards in phones
\u2022 Banking cards with embedded chips
\u2022 Access control cards

\u{1F4FA} Consumer Electronics:
\u2022 Blu-ray players
\u2022 TV set-top boxes
\u2022 Digital video recorders (DVRs)
\u2022 Printers with touchscreen interfaces

\u{1F697} Automotive:
\u2022 Car navigation systems
\u2022 In-vehicle infotainment

\u{1F321}\uFE0F IoT & Embedded Systems:
\u2022 Industrial sensors
\u2022 Smart home devices
\u2022 Medical monitoring equipment
\u2022 Vending machines

\u{1F41C} Ant Analogy:
Java ME applications are like ants \u2014 individually small and simple, but collectively they're everywhere! Billions of devices run Java ME code behind the scenes, quietly doing their jobs without hogging resources.`},{title:"When to Use Java ME",content:`Choose Java ME when you need:
\u2022 Applications for devices with limited memory (less than 128MB RAM)
\u2022 Battery-powered devices where efficiency matters
\u2022 Embedded systems (industrial controls, medical devices)
\u2022 IoT sensors and actuators
\u2022 Feature phones (not smartphones)
\u2022 Smart cards and secure elements
\u2022 Consumer electronics with simple interfaces

Note: For modern smartphones (Android/iOS), you don't use Java ME. Android uses a different approach (Android SDK with Java/Kotlin), and iOS uses Swift/Objective-C. Java ME's sweet spot is resource-constrained devices.`}],images:[{url:"assets/images/java-editions-architecture.svg",alt:"Java Editions Architecture Stack",caption:"Architectural diagram showing how Java EE extends Java SE and Java ME is a subset of Java SE"}]},{title:"Comparison: Java SE vs Java EE vs Java ME",content:"Let's compare the three editions side-by-side to understand their key differences and help you choose the right one for your project.",subsections:[{title:"Feature Comparison Table",table:{headers:["Feature","Java SE","Java EE","Java ME"],rows:[["Target Audience","General developers, desktop apps","Enterprise developers, web apps","Embedded/mobile developers"],["Platform Size","Medium (~200MB runtime)","Large (500MB+ with app server)","Small (2-20MB runtime)"],["Complexity","Moderate","High","Low to Moderate"],["Use Cases","Desktop, tools, games","Web apps, enterprise systems, APIs","Feature phones, IoT, embedded"],["Web Support","Basic (HttpURLConnection)","Full (Servlets, JSP, JSF, REST)","Limited (basic HTTP)"],["Database","JDBC (manual)","JPA (ORM, automated)","Limited or custom"],["Deployment","Standalone JAR/EXE","Application servers (Tomcat, WildFly)","Device-specific"],["Learning Curve","Beginner-friendly","Advanced, steep","Moderate"],["Scalability","Single machine","Distributed, highly scalable","Limited"],["GUI Support","Rich (Swing, JavaFX)","Web-based (HTML/CSS/JS)","Basic mobile UI"]]}},{title:"When to Choose Which Edition",content:`\u{1F3D7}\uFE0F Choose Java SE if:
\u2022 You're building desktop applications (calculators, editors, IDEs)
\u2022 You're learning Java for the first time
\u2022 You need a standalone tool or utility
\u2022 You're developing games for PC
\u2022 You don't need web servers or distributed systems

\u{1F3E2} Choose Java EE if:
\u2022 You're building web applications that serve hundreds/thousands of users
\u2022 You need RESTful APIs for mobile apps or SPAs
\u2022 You're working on banking, e-commerce, or enterprise systems
\u2022 You need transactions, messaging, and complex business logic
\u2022 You require scalability and high availability
\u2022 You're developing microservices

\u{1F4F1} Choose Java ME if:
\u2022 You're targeting resource-constrained devices (less than 128MB RAM)
\u2022 You're building IoT sensors or embedded systems
\u2022 You need code to run on smart cards or SIM cards
\u2022 You're developing for feature phones (not Android/iOS)
\u2022 Battery life and memory efficiency are critical
\u2022 You're working on consumer electronics (Blu-ray, TVs)

\u{1F3AF} Decision Tree Analogy:
Ask yourself:
1. Does it run on a tiny device with limited memory? \u2192 Java ME
2. Is it a massive, distributed enterprise system? \u2192 Java EE
3. Everything else (desktop, learning, games, tools)? \u2192 Java SE`}]},{title:"Evolution: From Java EE to Jakarta EE",content:"The Java ecosystem has evolved significantly over the years. Understanding this evolution helps contextualize the current state of enterprise Java development.",subsections:[{title:"The Transition Story",content:`In 2017, Oracle decided to hand over Java EE to the Eclipse Foundation (the open-source organization behind the Eclipse IDE). This was a BIG deal!

Why the change?
\u2022 Oracle wanted to focus on Java SE and the core platform
\u2022 The community wanted faster innovation and more open governance
\u2022 Enterprise Java needed to evolve faster to compete with modern frameworks (Spring, Node.js, .NET)

The Eclipse Foundation couldn't legally use the name Java EE (Oracle owns the Java trademark), so they renamed it:

Java EE \u2192 Jakarta EE

Jakarta EE is the modern, actively developed successor to Java EE. It's the same technology, just with a new name and faster development cycle.

Key changes:
\u2022 Namespace change: javax.* packages \u2192 jakarta.* packages (e.g., javax.servlet \u2192 jakarta.servlet)
\u2022 More frequent releases
\u2022 Community-driven development
\u2022 Better cloud-native support

\u{1F3E0} Moving House Analogy:
Jakarta EE is like moving to a new house. You take all your furniture (same features), but the address changes. The house is newer, better maintained, and you have more freedom to renovate!`},{title:"Java ME's Decline and Modern Alternatives",content:`Java ME was HUGE in the 2000s when feature phones dominated. But with the rise of smartphones:
\u2022 Android (uses Android SDK, not Java ME)
\u2022 iOS (uses Swift/Objective-C)

Java ME's market shrank dramatically. However, it still has a niche:
\u2022 IoT devices and sensors
\u2022 Embedded systems
\u2022 Smart cards
\u2022 Industrial equipment

For modern mobile development:
\u2022 Android: Use Android SDK (Java/Kotlin)
\u2022 iOS: Use Swift or Objective-C
\u2022 Cross-platform: Flutter, React Native, Xamarin

Java ME is like vinyl records \u2014 once the dominant format, now niche but still loved by enthusiasts and essential in certain contexts!`}]},{title:"Visualizing the Editions",content:"Visual representations help solidify our understanding of how the three Java editions relate to each other and build upon one another.",subsections:[{title:"Edition Relationship Diagram",content:`Here's how the three editions relate to each other:

Java SE (Foundation):
\u2022 Core language
\u2022 JVM
\u2022 Standard libraries

Java EE (Extends SE):
\u2022 Everything from SE
\u2022 PLUS enterprise libraries (Servlets, EJB, JPA, etc.)
\u2022 Requires an application server (Tomcat, WildFly, GlassFish)

Java ME (Subset of SE):
\u2022 Essential language features
\u2022 Lightweight libraries
\u2022 Optimized for small devices

Think of it as:
\u2022 SE = The core recipe
\u2022 EE = The core recipe + gourmet ingredients and professional kitchen tools
\u2022 ME = The core recipe simplified for a camping stove

All three use the same cooking techniques (Java language), but the tools and ingredients (libraries) differ!`}]},{title:"Interview Preparation: Key Talking Points",content:"Mastering Java editions is crucial for technical interviews. Here are the most common questions you'll encounter with comprehensive answers.",subsections:[{title:"Common Interview Questions",content:`Q1. What is the difference between Java SE, Java EE, and Java ME?

A: Java SE is the foundational Java platform with core libraries for general-purpose programming. Java EE extends SE with enterprise features like Servlets, EJB, JPA for large-scale web applications. Java ME is a subset of SE optimized for resource-constrained devices like IoT sensors and embedded systems.

---

Q2. Can you run Java EE code on Java SE?

A: No. Java EE code requires an application server (like Tomcat, WildFly) that implements EE specifications. Java SE doesn't include Servlets, EJB, or other EE APIs. However, you can use frameworks like Spring Boot to build web apps on Java SE without a full EE server.

---

Q3. Why was Java EE renamed to Jakarta EE?

A: When Oracle transferred Java EE to the Eclipse Foundation in 2017, Oracle retained the Java trademark. Eclipse couldn't use Java EE, so they renamed it Jakarta EE. It's the same technology with a new name and faster, community-driven development.

---

Q4. What is the main use case for Java ME today?

A: Java ME is primarily used for IoT devices, embedded systems, smart cards, and feature phones. With the rise of Android and iOS, Java ME lost its dominance in mobile, but it remains relevant for resource-constrained devices where efficiency is critical.

---

Q5. What are the core components of Java SE?

A: Java SE includes the Java language, JVM, core libraries (Collections, I/O, Networking, Concurrency), GUI frameworks (Swing, JavaFX), database connectivity (JDBC), and development tools (javac, java, jar).

---

Q6. Give examples of real-world Java EE applications.

A: Banking systems (online banking, stock trading), e-commerce platforms (Amazon, eBay), enterprise apps (CRM, ERP), and large-scale web services (LinkedIn, Netflix backend components).

---

Q7. What is the difference between javax and jakarta packages?

A: javax.* packages are from the old Java EE (under Oracle). jakarta.* packages are from Jakarta EE (under Eclipse Foundation). They're the same APIs, just repackaged due to trademark restrictions.

---

Q8. Is Java ME used for Android development?

A: No. Android uses the Android SDK, which is built on Java (and Kotlin) but is NOT Java ME. Android has its own runtime (ART) and libraries optimized for smartphones, whereas Java ME targets feature phones and embedded devices.

---

Q9. What are the advantages of Java EE over Java SE for web applications?

A: Java EE provides built-in support for Servlets, JSP, RESTful services, database ORM (JPA), messaging (JMS), transactions (JTA), and dependency injection (CDI). These features would need to be manually implemented or added via third-party frameworks in Java SE.

---

Q10. Why would you choose Java ME over Java SE for a project?

A: If you're targeting devices with very limited memory (less than 128MB), battery-powered systems, or embedded environments, Java ME's small footprint and optimized runtime make it the better choice. Java SE would be too heavy for such devices.`}]},{title:"Key Takeaways",content:"Let's consolidate everything we've learned about Java editions into memorable, actionable insights that you can use in your development work and interviews.",subsections:[{title:"Summary of Java Editions",content:`1. Java has three main editions: SE (Standard), EE (Enterprise), and ME (Micro)

2. Java SE is the foundation \u2014 core language, JVM, standard libraries. Perfect for desktop apps, tools, and learning Java

3. Java EE extends SE with enterprise features \u2014 web servers, databases, messaging, transactions. Ideal for large-scale web applications and enterprise systems

4. Java ME is a subset of SE optimized for small devices \u2014 IoT, embedded systems, smart cards. Lightweight and resource-efficient

5. All three editions use the same Java language syntax; the difference is in available libraries and APIs

6. Java EE has been renamed to Jakarta EE and is now maintained by the Eclipse Foundation

7. Choose the edition based on your deployment environment:
   \u2022 Desktop/standalone \u2192 Java SE
   \u2022 Web/enterprise \u2192 Java EE (Jakarta EE)
   \u2022 Embedded/IoT \u2192 Java ME

8. Real-world examples:
   \u2022 SE: Minecraft, IntelliJ IDEA, command-line tools
   \u2022 EE: Banking systems, Amazon backend, enterprise CRMs
   \u2022 ME: Smart cards, IoT sensors, Blu-ray players

9. The relationship: SE is the base, EE extends it, ME simplifies it

10. Understanding these editions helps you choose the right Java platform for your project and is a common interview topic!`}]}],references:["Oracle Java SE Documentation","Jakarta EE Specification","Java ME Developer Resources","Oracle Java Tutorials","Eclipse Foundation - Jakarta EE","Java Community Process (JCP)","Professional Java EE Design Patterns"],keyPoints:["Java has three main editions: SE (Standard Edition), EE (Enterprise Edition), and ME (Micro Edition), each optimized for different use cases","Java SE is the foundation platform containing core language features, JVM, standard libraries, and tools for general-purpose programming","Java EE extends Java SE by adding enterprise features like Servlets, EJB, JPA, JMS for building large-scale web and distributed applications","Java ME is a subset of Java SE optimized for resource-constrained devices like IoT sensors, embedded systems, and smart cards","All three editions use the same Java language syntax; the difference lies in available libraries and APIs","Java EE has been renamed to Jakarta EE after Oracle transferred it to the Eclipse Foundation in 2017","The namespace changed from javax.* to jakarta.* due to trademark restrictions, but the technology remains the same","Java SE is perfect for desktop applications, games, tools, and learning Java fundamentals","Java EE powers enterprise systems like banking platforms, e-commerce sites, and RESTful APIs serving thousands of concurrent users","Java ME is still relevant for IoT devices, industrial sensors, smart cards, and consumer electronics despite the rise of Android/iOS","The relationship: Java SE is the BASE, Java EE EXTENDS it with enterprise features, Java ME is a SUBSET with only essentials","Choosing the right edition depends on deployment target: Desktop/standalone \u2192 SE, Web/enterprise \u2192 EE, Embedded/IoT \u2192 ME"],interviewQA:[{question:"What is the difference between Java SE, Java EE, and Java ME?",answer:"Java SE (Standard Edition) is the foundational Java platform with core libraries for general-purpose programming, including the JVM, Collections, I/O, concurrency, and GUI frameworks. Java EE (Enterprise Edition) extends SE with enterprise features like Servlets, JSP, EJB, JPA, and JMS for building large-scale web applications and distributed systems. Java ME (Micro Edition) is a subset of SE optimized for resource-constrained devices like IoT sensors, embedded systems, and smart cards, with a much smaller footprint."},{question:"Can you run Java EE code on Java SE?",answer:"No, you cannot directly run Java EE code on Java SE. Java EE code requires an application server (like Tomcat, WildFly, or GlassFish) that implements the EE specifications. Java SE doesn't include Servlets, EJB, JPA, or other enterprise APIs. However, you can use frameworks like Spring Boot to build web applications on Java SE without requiring a full Java EE application server, by embedding servlet containers."},{question:"Why was Java EE renamed to Jakarta EE?",answer:"When Oracle transferred Java EE to the Eclipse Foundation in 2017, Oracle retained the trademark rights to the 'Java' name. The Eclipse Foundation couldn't legally use 'Java EE' for the project, so they renamed it Jakarta EE. It's the same technology with a new name and faster, community-driven development. The namespace also changed from javax.* to jakarta.* (e.g., javax.servlet became jakarta.servlet)."},{question:"What is the main use case for Java ME today?",answer:"Java ME is primarily used for resource-constrained devices where memory, processing power, and battery life are limited. Key use cases include: IoT devices and sensors, embedded systems (industrial controls, medical devices), smart cards and SIM cards, consumer electronics (Blu-ray players, TV set-top boxes, printers), automotive systems (navigation, infotainment), and feature phones in developing countries. While it lost dominance with the rise of Android/iOS, it remains essential for lightweight, battery-efficient applications."},{question:"What are the core components of Java SE?",answer:"Java SE includes: (1) The Java language with OOP features, generics, lambdas; (2) JVM and runtime environment; (3) Core libraries: Collections Framework, I/O streams, Networking (sockets, HTTP), Concurrency utilities; (4) GUI frameworks: Swing and JavaFX; (5) JDBC for database connectivity; (6) Utilities: Date/Time API, Regular Expressions, Logging; (7) Development tools: javac compiler, java runtime, jar archiver; (8) Security, XML processing, and internationalization APIs."},{question:"Give examples of real-world Java EE applications.",answer:"Java EE powers many mission-critical systems: Banking and finance (online banking platforms, stock trading systems like NYSE/NASDAQ backends, payment gateways like PayPal); E-commerce (Amazon, eBay, Walmart online stores, Alibaba); Enterprise applications (Salesforce CRM, SAP ERP, HR management systems); Web services and APIs (LinkedIn backend, Twitter's original infrastructure, parts of Google AdWords); Travel and logistics (airline reservation systems, hotel booking platforms, shipping tracking). These systems require high availability, scalability, and transaction management."},{question:"What is the difference between javax and jakarta packages?",answer:"javax.* packages are from the old Java EE when it was maintained by Oracle. jakarta.* packages are from Jakarta EE after the Eclipse Foundation took over. They represent the same APIs and functionality, just repackaged due to trademark restrictions (Oracle owns the 'javax' namespace). For example, javax.servlet.http.HttpServlet became jakarta.servlet.http.HttpServlet. When migrating from Java EE to Jakarta EE 9+, you need to update package imports from javax to jakarta."},{question:"Is Java ME used for Android development?",answer:"No. Android uses the Android SDK, which is built on Java (and Kotlin) but is NOT Java ME. Android has its own runtime environment (originally Dalvik, now ART - Android Runtime) and Android-specific libraries optimized for smartphones. Java ME targets feature phones, embedded devices, and IoT sensors with very limited resources. Android is for full-featured smartphones with touchscreens, cameras, GPS, and significantly more memory and processing power."},{question:"What are the advantages of Java EE over Java SE for web applications?",answer:"Java EE provides built-in enterprise features that would require manual implementation or third-party frameworks in Java SE: (1) Web layer: Servlets, JSP, JSF for handling HTTP requests; (2) REST/SOAP APIs: JAX-RS and JAX-WS for web services; (3) Persistence: JPA for object-relational mapping instead of manual JDBC; (4) Business logic: EJB for reusable, transactional components; (5) Messaging: JMS for asynchronous communication; (6) Transactions: JTA for distributed transactions; (7) Dependency Injection: CDI for managing object lifecycles; (8) Security: Built-in authentication and authorization. This reduces boilerplate code and provides standardized, proven solutions."},{question:"Why would you choose Java ME over Java SE for a project?",answer:"Choose Java ME when targeting devices with severe resource constraints: (1) Limited memory (typically less than 128MB RAM); (2) Battery-powered devices where efficiency is critical; (3) Embedded systems with minimal processing power; (4) Storage limitations requiring small application footprints; (5) Real-time or near-real-time requirements on constrained hardware. Java ME's optimized runtime and compact libraries (2-20MB vs. SE's 200MB+) make it suitable for IoT sensors, smart cards, industrial controllers, and consumer electronics where Java SE would be too heavy."},{question:"How do Java SE, EE, and ME relate to each other architecturally?",answer:"Java SE is the foundation containing the core Java language, JVM, and standard libraries. Java EE builds upon SE by adding (extending) enterprise-specific libraries on top \u2014 it includes everything from SE plus Servlets, EJB, JPA, etc. Java ME is a subset of SE, taking only essential language features and lightweight libraries while removing heavy components like Swing GUI and advanced I/O. Architecturally: SE = Base; EE = SE + Enterprise Extensions; ME = SE - Heavy Features. All three use the same Java language syntax."},{question:"What deployment models are used for each Java edition?",answer:"Java SE applications are deployed as standalone JAR files or executables that run directly using the 'java' command or platform-specific launchers. Java EE applications are packaged as WAR (Web Archive) or EAR (Enterprise Archive) files and deployed to application servers like Tomcat, WildFly, or WebLogic, which manage the enterprise runtime environment. Java ME applications are deployed directly to target devices using platform-specific mechanisms (OTA updates for phones, firmware for embedded systems) and run on the device's Java ME runtime environment."}]};var wy={name:"\u{1F331} PATH and CLASSPATH in Java \u2014 Finally Explained Without Headache \u{1F604}",overview:"PATH and CLASSPATH are two topics that confuse beginners \u{1F92F}, appear often in interviews \u{1F608}, and magically 'work' on some machines but not others. They're the unsung heroes of Java execution \u2014 without them, Java tools are lost and the JVM can't find classes! This guide demystifies these environment variables with fun analogies (PATH as Google Maps for executables, CLASSPATH as a library index for classes), real-world examples, and visual diagrams. We'll explore how PATH helps your operating system locate Java tools like java and javac, while CLASSPATH helps the JVM find classes, packages, and JAR files at runtime. Get ready to finally understand these essential concepts with humor, clarity, and interview-ready explanations! \u{1F680}",sections:[{title:"\u{1F6E3}\uFE0F PATH \u2014 'Where Are My Tools?'",content:"PATH is an operating system environment variable that tells your OS where to find executable programs. In Java terms, it helps the OS locate Java tools like java, javac, jar, and javadoc. Without PATH, your OS has no idea where Java lives, and you'd have to type full file paths every single time!",subsections:[{title:"\u{1F539} What is PATH?",content:`PATH is an operating system environment variable \u2014 it exists at the OS level (Windows, Linux, macOS), not just for Java.

It tells your OS:
'These are the folders where executable programs live. If someone types a command, look here first.'

In Java terms, PATH helps the OS find Java tools like:
\u2022 java (runs compiled Java programs)
\u2022 javac (compiles .java files to bytecode)
\u2022 jar (creates and extracts JAR archives)
\u2022 javadoc (generates API documentation)
\u2022 jshell (Java REPL for quick experiments)

Without PATH, your OS has no idea where Java lives. You'd have to type the full path every time:

Windows:
C:\\Program Files\\Java\\jdk-17\\bin\\javac HelloWorld.java

Linux/macOS:
/usr/lib/jvm/jdk-17/bin/javac HelloWorld.java

Every. Single. Time. \u{1F629}

That's why we set PATH \u2014 so we can just type:
javac HelloWorld.java

And the OS knows where to find it!`},{title:"\u{1F9E0} Simple Analogy: PATH = Google Maps for Executables \u{1F5FA}\uFE0F",content:`Imagine you type:
javac HelloWorld.java

The OS asks:
'Where is javac? \u{1F914}'

PATH replies:
'Check C:\\Program Files\\Java\\jdk\\bin \u2192 Found it! \u2705'

Without PATH?
The OS says:
'javac? Never heard of it. \u274C'

You get the dreaded error:
'javac' is not recognized as an internal or external command

\u{1F604} Funny Truth:
PATH is like your phone's contact list \u{1F4DE}. Without it, you'd have to remember everyone's full address and phone number. Imagine calling pizza delivery by typing the complete street address every time instead of just 'Pizza Place' from your contacts!

PATH lets you use shortcuts (command names) instead of full addresses (complete file paths).`},{title:"\u{1F4CC} What PATH Typically Contains (Java)",content:`Your PATH variable contains one or more directory paths where executables are stored. For Java, you need to add the bin folder of your JDK installation.

Windows Example:
C:\\Program Files\\Java\\jdk-17\\bin

Linux/macOS Example:
/usr/lib/jvm/jdk-17/bin

OR
/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home/bin

\u{1F449} This bin folder contains executable files like:
\u2022 java.exe / java (runs Java applications)
\u2022 javac.exe / javac (compiles Java source code)
\u2022 jar.exe / jar (package tool)
\u2022 javadoc.exe / javadoc (documentation generator)
\u2022 jshell.exe / jshell (interactive Java shell)

\u{1F4A1} Pro Tip: You can have multiple entries in PATH (for different tools), separated by:
\u2022 ; (semicolon) on Windows
\u2022 : (colon) on Linux/macOS

Example Windows PATH:
C:\\Program Files\\Java\\jdk-17\\bin;C:\\Python39;C:\\Git\\cmd

The OS searches these directories in order from left to right until it finds the executable!`},{title:"How to Set PATH (Step by Step)",content:`Windows (Permanent):
1. Right-click 'This PC' or 'Computer' \u2192 Properties
2. Click 'Advanced system settings'
3. Click 'Environment Variables'
4. Under 'System variables', find PATH
5. Click 'Edit' \u2192 'New'
6. Add: C:\\Program Files\\Java\\jdk-17\\bin
7. Click OK, OK, OK
8. Restart Command Prompt
9. Test: javac -version

Windows (Temporary - Current Session):
set PATH=%PATH%;C:\\Program Files\\Java\\jdk-17\\bin

Linux/macOS (Permanent - add to ~/.bashrc or ~/.zshrc):
export PATH=$PATH:/usr/lib/jvm/jdk-17/bin

Then reload:
source ~/.bashrc

Linux/macOS (Temporary - Current Session):
export PATH=$PATH:/usr/lib/jvm/jdk-17/bin

Verify it worked:
javac -version
java -version

If you see version information \u2192 PATH is set correctly! \u2705
If you see 'command not found' \u2192 PATH is not set or incorrect \u274C`}],images:[{url:"assets/images/path-google-maps-analogy.svg",alt:"PATH as Google Maps for Executables",caption:"Visual analogy showing how PATH works like Google Maps \u2014 helping the OS navigate to executable programs like javac and java without needing full addresses"}]},{title:"\u{1F4DA} CLASSPATH \u2014 'Where Are My Classes?'",content:"CLASSPATH is a Java-specific environment variable that tells the JVM where to find .class files, packages, and JAR files. While PATH is for the operating system, CLASSPATH is exclusively for the Java Virtual Machine. Think of it as a library catalog that helps the JVM locate the books (classes) it needs!",subsections:[{title:"\u{1F539} What is CLASSPATH?",content:`CLASSPATH is a Java-specific environment variable (unlike PATH which is OS-wide).

It tells the JVM:
'These are the places where my .class files and .jar files live.'

CLASSPATH is used:
\u2022 At compile time (javac needs to find referenced classes)
\u2022 At runtime (JVM needs to find classes to load and execute)

What can be in CLASSPATH:
\u2022 Current directory (.)
\u2022 Specific folder paths (C:\\myapp\\classes)
\u2022 Individual JAR files (C:\\libs\\mysql-connector.jar)
\u2022 Wildcard JAR references (C:\\libs\\*)

Example CLASSPATH:
Windows:
.;C:\\myapp\\classes;C:\\libs\\mysql.jar;C:\\libs\\commons-lang.jar

Linux/macOS:
.:/home/user/myapp/classes:/home/user/libs/mysql.jar

\u{1F449} Multiple entries are separated by:
\u2022 ; (semicolon) on Windows
\u2022 : (colon) on Linux/macOS

\u{1F3AF} Important: The . (dot) represents the current directory. Always include it unless you have a specific reason not to!`},{title:"\u{1F9E0} Simple Analogy: CLASSPATH = Library Index \u{1F4D6}",content:`Imagine the JVM as a student looking for books (classes) in a library.

Your class = A book
JAR file = A bundle of books (like an encyclopedia set)
CLASSPATH = The library catalog/index

Scenario:
Student (JVM): 'I need the book called com.mysql.Driver'

If it's in CLASSPATH:
Librarian (CLASSPATH): 'Found it! Shelf: C:\\libs\\mysql.jar' \u2705

If it's NOT in CLASSPATH:
Librarian (CLASSPATH): 'Sorry, that book isn't in our catalog.' \u274C
JVM throws: ClassNotFoundException

\u{1F604} Funny Truth:
CLASSPATH is like a messy bookshelf at home.

JVM keeps shouting:
'I KNOW the book exists\u2026 BUT WHERE?? \u{1F624}'

You frantically add paths:
'Try this folder\u2026 no? Try this JAR\u2026 no? ARGHHH!'

Meanwhile, the class file is sitting right there, just not in CLASSPATH. Classic developer moment! \u{1F605}`},{title:"\u{1F4CC} What CLASSPATH Can Contain",content:`CLASSPATH can reference several types of locations:

1. Current Directory (.)
   \u2022 Dot represents where you run the command from
   \u2022 Always include it: .;other\\paths
   \u2022 Example: If HelloWorld.class is in current folder, . finds it

2. Folder Paths (Directories)
   \u2022 Points to folders containing .class files
   \u2022 Example: C:\\myproject\\bin
   \u2022 Example: /home/user/myapp/classes
   \u2022 Must match package structure inside!

3. Individual JAR Files
   \u2022 Full path to specific .jar files
   \u2022 Example: C:\\libs\\mysql-connector-java-8.0.28.jar
   \u2022 Example: /usr/local/libs/commons-lang3-3.12.jar

4. Wildcard for JARs (*)
   \u2022 Include all JARs in a folder
   \u2022 Example: C:\\libs\\*
   \u2022 Example: /home/user/libs/*
   \u2022 Only works for JARs, not .class files!
   \u2022 Only works one level deep (doesn't search subfolders)

5. Multiple Entries (Combined)
   Windows:
   .;C:\\myapp\\classes;C:\\libs\\mysql.jar;C:\\libs\\*

   Linux/macOS:
   .:/home/user/myapp/classes:/home/user/libs/mysql.jar:/home/user/libs/*

\u{1F4A1} Pro Tip: Order matters! JVM searches CLASSPATH from left to right and uses the FIRST match it finds.`},{title:"How to Set CLASSPATH",content:`There are three ways to set CLASSPATH (in order of preference):

1. \u2705 BEST: Use -cp or -classpath command-line option
   javac -cp .;C:\\libs\\* MyClass.java
   java -cp .;C:\\libs\\* com.myapp.Main

   Why best?
   \u2022 Explicit and visible
   \u2022 No global side effects
   \u2022 Different for each project
   \u2022 Easy to debug
   \u2022 Recommended by Java best practices

2. \u26A0\uFE0F OKAY: Set CLASSPATH environment variable (Temporary)
   Windows:
   set CLASSPATH=.;C:\\myapp\\classes;C:\\libs\\mysql.jar

   Linux/macOS:
   export CLASSPATH=.:/home/user/myapp/classes:/home/user/libs/mysql.jar

   Lasts only for current terminal session.

3. \u274C AVOID: Set CLASSPATH permanently (System Environment Variable)
   Windows: System Properties \u2192 Environment Variables \u2192 New \u2192 CLASSPATH
   Linux/macOS: Add to ~/.bashrc or ~/.zshrc

   Why avoid?
   \u2022 Affects ALL Java applications globally
   \u2022 Hard to debug conflicts
   \u2022 Breaks when you move projects
   \u2022 Modern tools (Maven, Gradle, IDEs) ignore it

\u{1F4A1} Modern Reality: You rarely set CLASSPATH manually anymore! Build tools and IDEs handle it for you:
\u2022 Maven \u2192 manages dependencies + classpath automatically
\u2022 Gradle \u2192 same deal
\u2022 IntelliJ IDEA / Eclipse \u2192 auto-configured
\u2022 Spring Boot / Frameworks \u2192 embedded classpaths

Only set CLASSPATH when:
\u2022 Running simple standalone Java programs
\u2022 Learning Java basics
\u2022 Troubleshooting classpath issues
\u2022 Working without build tools (rare!)`}],images:[{url:"assets/images/classpath-library-analogy.svg",alt:"CLASSPATH as Library Index",caption:"Visual analogy showing how CLASSPATH works like a library catalog \u2014 helping the JVM find classes and JAR files like a librarian finding books on shelves"}]},{title:"\u{1F504} How PATH and CLASSPATH Work Together",content:"PATH and CLASSPATH are partners in crime! PATH finds the Java tools, and CLASSPATH finds the Java classes. Let's walk through a real compilation and execution scenario to see how they collaborate.",subsections:[{title:"Real-World Scenario: Compile and Run",content:`Let's compile and run a simple Java program to see PATH and CLASSPATH in action.

Step 1: Writing the Code
You create HelloWorld.java:

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

Step 2: Compilation
You type:
javac HelloWorld.java

What happens?
1. OS uses PATH to find javac executable
   \u2022 Searches PATH directories: C:\\Program Files\\Java\\jdk-17\\bin
   \u2022 Finds javac.exe \u2192 Launches it \u2705

2. javac uses CLASSPATH to find referenced classes
   \u2022 HelloWorld only uses System (from java.lang)
   \u2022 java.lang is ALWAYS available (bootstrap classpath)
   \u2022 No external dependencies \u2192 Compilation succeeds \u2705

3. Output: HelloWorld.class (bytecode)

Step 3: Execution
You type:
java HelloWorld

What happens?
1. OS uses PATH to find java executable
   \u2022 Searches PATH directories
   \u2022 Finds java.exe \u2192 Launches JVM \u2705

2. JVM uses CLASSPATH to find HelloWorld.class
   \u2022 Looks in current directory (.)
   \u2022 Finds HelloWorld.class \u2192 Loads it \u2705

3. JVM executes main() method
   \u2022 Output: Hello, World!

Success! \u{1F389}`},{title:"Scenario with External Libraries (JAR Files)",content:`Now let's use an external library to see CLASSPATH in full action.

Code using MySQL driver:
import java.sql.Connection;
import java.sql.DriverManager;

public class DBTest {
    public static void main(String[] args) throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        System.out.println("Driver loaded!");
    }
}

Compilation (with CLASSPATH):
javac -cp .;C:\\libs\\mysql-connector-java.jar DBTest.java

What happens?
1. OS uses PATH \u2192 Finds javac \u2705
2. javac uses CLASSPATH \u2192 Finds mysql-connector-java.jar \u2705
3. Compilation succeeds \u2192 DBTest.class created \u2705

Compilation WITHOUT CLASSPATH:
javac DBTest.java

Result:
DBTest.java:1: error: package java.sql does not exist
\u274C Compilation fails!

Runtime (with CLASSPATH):
java -cp .;C:\\libs\\mysql-connector-java.jar DBTest

What happens?
1. OS uses PATH \u2192 Finds java \u2705
2. JVM uses CLASSPATH \u2192 Finds DBTest.class \u2705
3. JVM uses CLASSPATH \u2192 Finds com.mysql.cj.jdbc.Driver (from JAR) \u2705
4. Output: Driver loaded! \u2705

Runtime WITHOUT CLASSPATH:
java DBTest

Result:
Exception in thread "main" java.lang.ClassNotFoundException: com.mysql.cj.jdbc.Driver
\u274C Runtime fails!

Lesson: External JARs MUST be in CLASSPATH at both compile time and runtime!`},{title:"\u{1F697} Think of It As: Car Analogy",content:`PATH = Finding the car \u{1F697}
'Where is my Java toolbox (javac, java)?'

CLASSPATH = Finding the destination \u{1F3E0}
'Where are my classes and libraries?'

You need BOTH:
\u2022 A car (Java tools via PATH)
\u2022 A destination address (Classes via CLASSPATH)

Without PATH \u2192 No car, can't drive anywhere \u274C
Without CLASSPATH \u2192 Have a car but don't know where to go \u274C

With BOTH \u2192 Smooth ride from code to execution! \u2705`}],images:[{url:"assets/images/path-classpath-workflow.svg",alt:"PATH and CLASSPATH Workflow Diagram",caption:"Complete workflow showing how PATH helps the OS find Java tools (javac, java) and how CLASSPATH helps the JVM find classes and JAR files during compilation and execution"}],codeExamples:[{title:"Complete Example: Compilation and Execution",description:"Full example showing PATH and CLASSPATH in action",code:`// Step 1: Write HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello from Java!");
    }
}

// Step 2: Compile (OS uses PATH to find javac)
// Command: javac HelloWorld.java
// OS searches PATH \u2192 Finds javac \u2192 Compiles code
// Output: HelloWorld.class

// Step 3: Run (OS uses PATH to find java, JVM uses CLASSPATH to find HelloWorld.class)
// Command: java HelloWorld
// OS searches PATH \u2192 Finds java \u2192 Launches JVM
// JVM searches CLASSPATH \u2192 Finds HelloWorld.class \u2192 Executes
// Output: Hello from Java!`,language:"java"},{title:"Using External JAR with CLASSPATH",description:"Demonstrating CLASSPATH with external dependencies",code:`// Code: DBTest.java (uses MySQL driver)
import java.sql.DriverManager;

public class DBTest {
    public static void main(String[] args) throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
        System.out.println("MySQL Driver loaded successfully!");
    }
}

// Compile with CLASSPATH:
// Windows:
// javac -cp .;C:\\libs\\mysql-connector.jar DBTest.java

// Linux/macOS:
// javac -cp .:/home/user/libs/mysql-connector.jar DBTest.java

// Run with CLASSPATH:
// Windows:
// java -cp .;C:\\libs\\mysql-connector.jar DBTest

// Linux/macOS:
// java -cp .:/home/user/libs/mysql-connector.jar DBTest

// Output: MySQL Driver loaded successfully!`,language:"java"},{title:"Checking PATH and CLASSPATH",description:"Commands to verify your environment setup",code:`// Check if PATH is set correctly:
// Windows Command Prompt:
echo %PATH%
javac -version
java -version

// Linux/macOS Terminal:
echo $PATH
javac -version
java -version

// Check CLASSPATH (if set as environment variable):
// Windows:
echo %CLASSPATH%

// Linux/macOS:
echo $CLASSPATH

// Note: If empty, that's often GOOD!
// Modern Java doesn't need global CLASSPATH
// Use -cp option instead

// Example output when PATH is correct:
// javac 17.0.1
// java version "17.0.1" 2021-10-19 LTS`,language:"bash"}]},{title:"\u{1F9E0} PATH vs CLASSPATH \u2014 Quick Comparison",content:"Let's put PATH and CLASSPATH side-by-side to see their differences clearly. This comparison table is perfect for quick reference and interview preparation!",subsections:[{title:"Detailed Comparison Table",table:{headers:["Feature","PATH","CLASSPATH"],rows:[["Used by","Operating System (Windows, Linux, macOS)","Java Virtual Machine (JVM)"],["Purpose","Find executable programs (javac, java, jar)","Find classes, packages, and JAR files"],["Scope","All programs on the system","Java applications only"],["Needed for","Running java, javac commands","Class loading at compile time and runtime"],["Contains","Directory paths to executables","Paths to .class files, folders, and .jar files"],["Common error","'javac' is not recognized as a command","ClassNotFoundException or NoClassDefFoundError"],["Set at","OS level (System/User environment variables)","JVM level (command-line or environment variable)"],["Separator","; (Windows) or : (Linux/macOS)","; (Windows) or : (Linux/macOS)"],["Example entry","C:\\Program Files\\Java\\jdk-17\\bin",".;C:\\myapp\\classes;C:\\libs\\mysql.jar"],["Analogy","Google Maps for executables \u{1F5FA}\uFE0F","Library catalog for classes \u{1F4D6}"],["Modern usage","Always needed for Java commands","Rarely set manually (build tools handle it)"],["Best practice","Set permanently in system","Use -cp option, avoid global setting"]]}},{title:"Key Takeaways from Comparison",content:`\u{1F3AF} Remember the core difference:

PATH:
\u2022 OS-level (works for ALL programs)
\u2022 Helps OS find executables (like javac, java)
\u2022 Error: 'command not found' or 'not recognized'
\u2022 Analogy: Google Maps \u{1F5FA}\uFE0F

CLASSPATH:
\u2022 JVM-level (Java-specific)
\u2022 Helps JVM find classes and JARs
\u2022 Error: ClassNotFoundException
\u2022 Analogy: Library Index \u{1F4D6}

\u{1F4A1} Interview Tip:
Mentioning the analogies makes your answer memorable!

'PATH is like Google Maps for finding executables, while CLASSPATH is like a library catalog for finding classes.'

Interviewers love clear, relatable explanations! \u2705`}]},{title:"\u26A0\uFE0F Common Errors & Their Meanings",content:"Let's decode the most frustrating errors you'll encounter with PATH and CLASSPATH, understand what they mean, and learn how to fix them quickly!",subsections:[{title:"\u274C 'javac' is not recognized (Windows)",content:`Full error:
'javac' is not recognized as an internal or external command, operable program or batch file.

What it means:
\u27A1 PATH is not set correctly
\u27A1 OS can't find javac.exe

How to fix:
1. Find your JDK installation:
   \u2022 Typical location: C:\\Program Files\\Java\\jdk-17
2. Add bin folder to PATH:
   \u2022 C:\\Program Files\\Java\\jdk-17\\bin
3. Restart Command Prompt
4. Test: javac -version

\u{1F50D} Debug tip:
Run: where javac
If it shows nothing \u2192 PATH not set
If it shows path \u2192 PATH is set, maybe wrong version`},{title:"\u274C javac: command not found (Linux/macOS)",content:`What it means:
\u27A1 PATH is not set correctly
\u27A1 OS can't find javac executable

How to fix:
1. Find Java installation:
   which java
   /usr/bin/java \u2192 Usually a symlink

   Find real location:
   ls -l /usr/bin/java
   Might point to: /usr/lib/jvm/java-17-openjdk

2. Add to PATH in ~/.bashrc or ~/.zshrc:
   export PATH=$PATH:/usr/lib/jvm/java-17-openjdk/bin

3. Reload shell:
   source ~/.bashrc

4. Test: javac -version

\u{1F4A1} Alternative: Use package manager
sudo apt install default-jdk    # Ubuntu/Debian
brew install openjdk            # macOS Homebrew`},{title:"\u274C ClassNotFoundException",content:`Error:
java.lang.ClassNotFoundException: com.example.MyClass

What it means:
\u27A1 CLASSPATH is missing the class or JAR
\u27A1 JVM searched everywhere in CLASSPATH but couldn't find it

Common causes:
1. Forgot to include JAR in CLASSPATH
2. Typo in class name or package
3. Missing . (current directory) in CLASSPATH
4. JAR file doesn't exist at specified path

How to fix:
1. Verify class/JAR exists:
   \u2022 Check file: mysql-connector.jar exists?
   \u2022 Check class: com/example/MyClass.class inside JAR?

2. Add to CLASSPATH:
   java -cp .;C:\\libs\\mysql-connector.jar MyApp

3. Include current directory (.):
   java -cp .;path\\to\\jar MyClass

4. Check package structure:
   If class is in package com.example:
   \u2022 File must be at: com/example/MyClass.class
   \u2022 Run from parent folder
   \u2022 Use full name: java -cp . com.example.MyClass

\u{1F50D} Debug tip:
List JAR contents:
jar tf mysql-connector.jar | grep Driver
Check if class exists inside`},{title:"\u274C NoClassDefFoundError",content:`Error:
java.lang.NoClassDefFoundError: com/example/MyClass

What it means:
\u27A1 Class was found during compilation
\u27A1 But NOT found at runtime
\u27A1 Usually means:
   \u2022 Class was present earlier but missing now
   \u2022 CLASSPATH changed between compile and run
   \u2022 Class in different JAR than expected

Difference from ClassNotFoundException:
\u2022 ClassNotFoundException: JVM never found the class (CLASSPATH issue)
\u2022 NoClassDefFoundError: Class WAS there during compile, but missing at runtime

How to fix:
1. Ensure CLASSPATH is same for compilation and runtime
2. Check that all JARs are present
3. Verify .class files weren't deleted
4. Rebuild project:
   javac -cp libs/* MyClass.java
   java -cp .;libs/* MyClass

\u{1F4A1} Pro tip: Both errors mean 'class not found', but:
\u2022 ClassNotFoundException \u2192 CLASSPATH never had it
\u2022 NoClassDefFoundError \u2192 CLASSPATH HAD it, lost it`},{title:"Interview Tip \u{1F4A1}",content:`Mentioning error names + exact causes impresses interviewers instantly!

Example answer:
'If you see javac not recognized, that's a PATH issue \u2014 the OS can't find Java tools.

If you see ClassNotFoundException, that's a CLASSPATH issue \u2014 the JVM can't find classes or JARs.

NoClassDefFoundError is trickier \u2014 it means the class existed at compile time but is missing at runtime, often due to missing JARs or incorrect CLASSPATH.'

This shows:
\u2705 Deep understanding
\u2705 Real-world debugging experience
\u2705 Ability to troubleshoot systematically`}]},{title:"\u{1F9E0} Modern Java: Do You Really Need CLASSPATH?",content:"Good news \u{1F389} \u2014 You rarely need to set CLASSPATH manually anymore! Modern development tools and frameworks have made CLASSPATH management automatic and painless. Let's see why and when you still need it.",subsections:[{title:"Why You Rarely Need CLASSPATH Anymore",content:`Modern Java development uses tools that automatically manage CLASSPATH:

1. \u2705 Build Tools:
   \u2022 Maven: Manages dependencies in pom.xml, auto-generates CLASSPATH
   \u2022 Gradle: Same deal with build.gradle
   \u2022 No manual CLASSPATH needed!

2. \u2705 IDEs (Integrated Development Environments):
   \u2022 IntelliJ IDEA: Auto-configures CLASSPATH from project structure
   \u2022 Eclipse: Manages build path automatically
   \u2022 VS Code with Java extensions: Same!
   \u2022 Just add libraries \u2192 IDE handles CLASSPATH

3. \u2705 Frameworks:
   \u2022 Spring Boot: Embedded classpath, fat JARs
   \u2022 Java EE / Jakarta EE: Application servers handle it
   \u2022 Everything bundled \u2192 No manual CLASSPATH!

4. \u2705 Command-line -cp option:
   \u2022 Explicit and clear
   \u2022 No global side effects
   \u2022 Recommended over environment variable

Modern Java says:
'Relax, I'll handle CLASSPATH for you' \u{1F60E}`},{title:"When You STILL Need CLASSPATH",content:`You'll work with CLASSPATH manually in these scenarios:

1. Learning Java basics:
   \u2022 No IDE, just terminal + text editor
   \u2022 Simple programs with external JARs
   \u2022 Understanding fundamentals

2. Running standalone Java programs:
   \u2022 Quick scripts or utilities
   \u2022 No build tool setup
   \u2022 Command: java -cp .;libs/* MyApp

3. Troubleshooting issues:
   \u2022 Debugging ClassNotFoundException
   \u2022 Investigating classpath conflicts
   \u2022 Understanding which JAR is loaded

4. Legacy projects:
   \u2022 Old code without Maven/Gradle
   \u2022 Ant build scripts
   \u2022 Manual dependency management

5. Interview preparation:
   \u2022 Demonstrating core Java knowledge
   \u2022 Explaining JVM internals
   \u2022 Showing debugging skills

\u{1F4A1} Real talk:
In production, you'll use Maven/Gradle 99% of the time.
But understanding CLASSPATH is crucial for:
\u2022 Debugging weird issues
\u2022 Interview questions
\u2022 Appreciating what build tools do for you!`},{title:"Best Practices (Modern Java)",content:`Follow these best practices for managing CLASSPATH in 2024-2026:

\u2705 DO:
1. Use -cp or -classpath command-line option:
   java -cp .;libs/* com.myapp.Main

2. Use build tools (Maven, Gradle):
   \u2022 Auto-dependency management
   \u2022 Reproducible builds
   \u2022 Industry standard

3. Use IDEs for development:
   \u2022 IntelliJ IDEA, Eclipse, VS Code
   \u2022 Auto-classpath configuration
   \u2022 Visual dependency management

4. Include current directory (.) when needed:
   java -cp .;libs/* MyApp

5. Use wildcard for multiple JARs:
   java -cp 'libs/*' MyApp
   Note: Quote on Linux/macOS to prevent shell expansion

\u274C DON'T:
1. Set CLASSPATH globally (environment variable):
   \u2022 Affects all Java apps
   \u2022 Hard to debug
   \u2022 Breaks when moving projects

2. Hardcode absolute paths:
   \u2022 Not portable across machines
   \u2022 Use relative paths or build tools

3. Forget the separator:
   \u2022 Windows: ; (semicolon)
   \u2022 Linux/macOS: : (colon)

4. Mix path separators:
   \u2022 Stick to forward slashes (/) or backslashes (\\)
   \u2022 Java handles both on Windows

\u{1F4A1} Golden rule:
Let tools manage CLASSPATH automatically. Only set it manually when learning, debugging, or running quick standalone programs!`}]},{title:"\u{1F4DD} Interview-Friendly One-Liners",content:"Master these concise, technically accurate one-liners for interview success! These are perfect for quick questions or as part of longer explanations.",subsections:[{title:"Core Definitions",content:`PATH:
\u2022 'PATH is an OS-level environment variable that helps the operating system locate executable programs like java and javac.'

CLASSPATH:
\u2022 'CLASSPATH is a JVM-level environment variable that tells the Java Virtual Machine where to find .class files, packages, and JAR files at compile time and runtime.'

Difference:
\u2022 'PATH is for commands (OS-level), CLASSPATH is for code (JVM-level).'
\u2022 'PATH finds the tools, CLASSPATH finds the classes.'
\u2022 'PATH helps the OS find javac and java, CLASSPATH helps the JVM find your classes and libraries.'`},{title:"Error Explanations",content:`When asked about common errors:

'javac not recognized':
\u2022 'This is a PATH issue \u2014 the operating system cannot find the Java compiler executable.'

ClassNotFoundException:
\u2022 'This is a CLASSPATH issue \u2014 the JVM cannot find the specified class or JAR file at runtime.'

NoClassDefFoundError:
\u2022 'This occurs when a class was available at compile time but is missing at runtime, usually due to CLASSPATH inconsistencies or missing dependencies.'`},{title:"Best Practices",content:`When asked about CLASSPATH best practices:

\u2022 'In modern Java, we rarely set CLASSPATH as a global environment variable. Instead, we use the -cp option, build tools like Maven or Gradle, or let IDEs manage it automatically.'

\u2022 'Always include the current directory (.) in CLASSPATH when running standalone programs to ensure local classes are found.'

\u2022 'Use semicolons on Windows and colons on Linux/macOS to separate CLASSPATH entries.'

\u{1F4A1} Pro tip: Add analogies for extra impact!
\u2022 'Think of PATH as Google Maps for executables and CLASSPATH as a library index for classes.'

Interviewers remember memorable explanations!`}]},{title:"\u{1F3AF} Real-World Debugging Scenarios",content:"Let's walk through actual debugging scenarios you'll encounter in the real world. These examples show how to systematically troubleshoot PATH and CLASSPATH issues like a pro!",subsections:[{title:"Scenario 1: New Developer Setup",content:`Problem:
A new developer joins the team. They install Java but get:
'javac' is not recognized as an internal or external command

Diagnosis:
PATH is not configured.

Solution Steps:
1. Verify Java installation:
   \u2022 Check: C:\\Program Files\\Java (Windows)
   \u2022 Check: /usr/lib/jvm (Linux)
   \u2022 Confirm JDK installed (not just JRE)

2. Find bin directory:
   \u2022 Look for: jdk-17\\bin
   \u2022 Contains: javac.exe, java.exe

3. Add to PATH:
   \u2022 Windows: System Properties \u2192 Environment Variables
   \u2022 Add: C:\\Program Files\\Java\\jdk-17\\bin
   \u2022 Linux/macOS: Edit ~/.bashrc
   \u2022 Add: export PATH=$PATH:/usr/lib/jvm/jdk-17/bin

4. Verify:
   \u2022 Restart terminal
   \u2022 Run: javac -version
   \u2022 Should show: javac 17.0.1

\u2705 Developer can now compile Java code!`},{title:"Scenario 2: MySQL Driver Not Found",content:`Problem:
You write database code:

import java.sql.*;
public class DBApp {
    public static void main(String[] args) throws Exception {
        Class.forName("com.mysql.cj.jdbc.Driver");
    }
}

Compile: javac DBApp.java \u2192 \u274C Error: package java.sql not found
Run: java DBApp \u2192 \u274C ClassNotFoundException: com.mysql.cj.jdbc.Driver

Diagnosis:
CLASSPATH is missing mysql-connector JAR.

Solution Steps:
1. Download MySQL Connector JAR:
   \u2022 mysql-connector-java-8.0.28.jar
   \u2022 Place in: C:\\libs\\ or ~/libs/

2. Compile with CLASSPATH:
   Windows:
   javac -cp .;C:\\libs\\mysql-connector-java-8.0.28.jar DBApp.java

   Linux/macOS:
   javac -cp .:/home/user/libs/mysql-connector-java-8.0.28.jar DBApp.java

3. Run with CLASSPATH:
   Windows:
   java -cp .;C:\\libs\\mysql-connector-java-8.0.28.jar DBApp

   Linux/macOS:
   java -cp .:/home/user/libs/mysql-connector-java-8.0.28.jar DBApp

\u2705 Driver loads successfully!`},{title:"Scenario 3: Package Structure Mismatch",content:`Problem:
You create:
com/myapp/Main.java

package com.myapp;
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello!");
    }
}

Compile: javac com/myapp/Main.java \u2192 \u2705 Success
Run: java Main \u2192 \u274C Error: Could not find or load main class Main

Diagnosis:
Package structure not respected. JVM expects com.myapp.Main, but you ran just Main.

Solution Steps:
1. Understand package structure:
   \u2022 Package: com.myapp
   \u2022 File location: com/myapp/Main.java
   \u2022 Compiled class: com/myapp/Main.class

2. Run from parent directory with full class name:
   java com.myapp.Main
   (Don't use .java extension!)

3. Or specify CLASSPATH explicitly:
   java -cp . com.myapp.Main

\u2705 Output: Hello!

\u{1F4A1} Key lesson:
\u2022 Package name MUST match directory structure
\u2022 Run from parent folder of package root
\u2022 Use fully qualified class name (package.ClassName)`},{title:"Scenario 4: Multiple JAR Conflict",content:`Problem:
You have:
\u2022 lib/old-version.jar (contains com.example.Utils v1.0)
\u2022 lib/new-version.jar (contains com.example.Utils v2.0)

CLASSPATH:
java -cp .;lib/old-version.jar;lib/new-version.jar MyApp

App uses Utils from v2.0 features \u2192 \u274C NoSuchMethodError

Diagnosis:
CLASSPATH loads old-version.jar FIRST (left-to-right order).
JVM uses FIRST match \u2192 loads v1.0 instead of v2.0.

Solution Steps:
1. Understand CLASSPATH order matters:
   \u2022 JVM searches left to right
   \u2022 Uses FIRST matching class found
   \u2022 Ignores duplicates

2. Fix order (put new version first):
   java -cp .;lib/new-version.jar;lib/old-version.jar MyApp

3. Or better: Remove old version entirely:
   \u2022 Delete lib/old-version.jar
   \u2022 Use wildcard: java -cp '.;lib/*' MyApp
   \u2022 Only one version remains

\u2705 App now uses correct version!

\u{1F4A1} Key lesson:
\u2022 Avoid having multiple versions of same JAR
\u2022 CLASSPATH order determines which class loads
\u2022 Use dependency management (Maven/Gradle) to prevent conflicts`}],codeExamples:[{title:"Debug: Check What's in CLASSPATH",description:"Programmatically inspect the current classpath",code:`public class ClasspathDebug {
    public static void main(String[] args) {
        // Get classpath used by JVM
        String classpath = System.getProperty("java.class.path");
        
        System.out.println("Current CLASSPATH:");
        
        // Split by platform separator
        String separator = System.getProperty("path.separator");
        String[] paths = classpath.split(separator);
        
        for (int i = 0; i < paths.length; i++) {
            System.out.println((i+1) + ". " + paths[i]);
        }
        
        // Check if specific JAR is loaded
        boolean hasMysql = classpath.contains("mysql");
        System.out.println("\\nMySQL JAR loaded: " + hasMysql);
    }
}

// Run: java ClasspathDebug
// Output shows all entries in current CLASSPATH
// Useful for debugging ClassNotFoundException`,language:"java"}]},{title:"\u{1F3C1} Final Thoughts \u2014 You've Mastered PATH and CLASSPATH!",content:"PATH and CLASSPATH may have seemed boring or confusing at first, but they are the unsung heroes of Java execution. Without them, Java tools are lost and the JVM can't find classes. Now that you understand them with the Google Maps and Library analogies, you'll never forget them again!",subsections:[{title:"What You've Learned",content:`\u2705 PATH:
\u2022 Operating system environment variable
\u2022 Helps OS locate Java executables (java, javac, jar)
\u2022 Error when missing: 'javac' not recognized
\u2022 Analogy: Google Maps for executables \u{1F5FA}\uFE0F

\u2705 CLASSPATH:
\u2022 JVM environment variable
\u2022 Helps JVM locate .class files and JAR files
\u2022 Error when missing: ClassNotFoundException
\u2022 Analogy: Library catalog for classes \u{1F4D6}

\u2705 How They Work Together:
\u2022 PATH finds the tools (javac, java)
\u2022 CLASSPATH finds the code (classes, JARs)
\u2022 Both needed for smooth Java execution

\u2705 Modern Reality:
\u2022 Build tools (Maven, Gradle) handle CLASSPATH automatically
\u2022 IDEs (IntelliJ, Eclipse) auto-configure everything
\u2022 Manual CLASSPATH mainly for learning and debugging

\u2705 Best Practices:
\u2022 Use -cp option instead of global CLASSPATH
\u2022 Include current directory (.)
\u2022 Let tools manage dependencies when possible`},{title:"Interview Success Tips",content:`When asked about PATH and CLASSPATH in interviews:

1. Start with analogies:
   'PATH is like Google Maps for executables, CLASSPATH is like a library catalog for classes.'

2. Explain the scope:
   'PATH is OS-level for all programs, CLASSPATH is JVM-level for Java only.'

3. Mention common errors:
   'javac not recognized means PATH issue, ClassNotFoundException means CLASSPATH issue.'

4. Show modern understanding:
   'We rarely set CLASSPATH manually anymore \u2014 Maven, Gradle, and IDEs handle it automatically.'

5. Demonstrate troubleshooting:
   'To debug, I check java.class.path property programmatically or use java -verbose:class to see class loading.'

This shows:
\u2705 Conceptual understanding (analogies)
\u2705 Technical accuracy (OS vs JVM level)
\u2705 Practical experience (error recognition)
\u2705 Modern awareness (build tools)
\u2705 Problem-solving skills (debugging)

Interviewers love candidates who explain clearly with real-world context!`},{title:"Your Journey from Confusion to Clarity",content:`Before this guide:
'PATH and CLASSPATH? Ugh, so confusing. They just... somehow work? \u{1F937}'

After this guide:
'PATH helps the OS find Java tools, CLASSPATH helps the JVM find classes. PATH is Google Maps \u{1F5FA}\uFE0F, CLASSPATH is a library catalog \u{1F4D6}. Got it!' \u2705

You went from:
\u274C Blindly copying commands
\u2705 Understanding what each part does

\u274C Panicking at 'javac not recognized'
\u2705 Instantly knowing: 'PATH issue!'

\u274C Random trial-and-error with CLASSPATH
\u2705 Systematically debugging with -cp option

Congratulations! You've transformed a confusing topic into clear, actionable knowledge! \u{1F389}`},{title:"Remember the Key Truth",content:`PATH and CLASSPATH are NOT magic \u{1FA84}
They're NOT mysterious \u{1F575}\uFE0F
They're just DIRECTORIES that tell programs where to look! \u{1F4C2}

Without them:
\u2022 Java tools are lost \u{1F6AB}
\u2022 JVM can't find classes \u{1F6AB}
\u2022 Developers panic \u{1F630}

With them:
\u2022 OS finds executables \u2705
\u2022 JVM finds classes \u2705
\u2022 Code compiles and runs smoothly \u2705

And remember:
PATH = Google Maps for executables \u{1F5FA}\uFE0F
CLASSPATH = Library catalog for classes \u{1F4D6}

Once you understand them with these analogies, you'll never forget them again!

Now go forth and conquer Java development with confidence! \u{1F4AA}\u{1F604}`}]}],keyPoints:["PATH is an OS-level environment variable that helps the operating system locate Java executables like java, javac, jar, and javadoc","CLASSPATH is a JVM-level environment variable that tells the Java Virtual Machine where to find .class files, packages, and JAR files","PATH is used for finding commands (OS scope), CLASSPATH is used for finding code (JVM scope)","Common PATH error: 'javac' is not recognized \u2014 means OS cannot find Java tools in PATH directories","Common CLASSPATH errors: ClassNotFoundException (class never found) and NoClassDefFoundError (class was found at compile time but missing at runtime)","PATH is analogous to Google Maps for executables \u2014 helping the OS navigate to programs without full addresses","CLASSPATH is analogous to a library catalog \u2014 helping the JVM find classes like a librarian finding books","Modern Java development rarely requires manual CLASSPATH setup \u2014 Maven, Gradle, and IDEs handle it automatically","Best practice: Use -cp or -classpath command-line option instead of global CLASSPATH environment variable","PATH and CLASSPATH work together: PATH finds the tools (javac, java), CLASSPATH finds the classes and libraries","CLASSPATH entries are separated by semicolons (;) on Windows and colons (:) on Linux/macOS","Always include current directory (.) in CLASSPATH to ensure local classes are found","CLASSPATH can contain directories, individual JAR files, or wildcard references (libs/*) for multiple JARs","Setting CLASSPATH permanently as a system variable is discouraged \u2014 it affects all Java applications globally and is hard to debug"],references:["Oracle Java Documentation - Setting the PATH and CLASSPATH","Java SE Tutorial - Environment Variables","Java Language Specification - Class Loading and CLASSPATH","Effective Java by Joshua Bloch - Dependency Management","Oracle Java Troubleshooting Guide - Common Classpath Issues","Java Command Line Options Reference","Maven and Gradle Documentation - Dependency Management"],interviewQA:[{question:"What is the difference between PATH and CLASSPATH in Java?",answer:"PATH is an OS-level environment variable that helps the operating system locate executable programs like java, javac, and jar. CLASSPATH is a JVM-level environment variable that tells the Java Virtual Machine where to find .class files, packages, and JAR files at compile time and runtime. PATH is for finding tools (OS scope), while CLASSPATH is for finding classes and libraries (JVM scope).",difficulty:"easy",tags:["PATH","CLASSPATH","environment-variables","fundamentals"]},{question:"What does the error 'javac' is not recognized mean and how do you fix it?",answer:"This error means PATH is not configured correctly \u2014 the operating system cannot find the javac executable. To fix: (1) Locate your JDK installation (e.g., C:\\Program Files\\Java\\jdk-17), (2) Add the bin folder to PATH (C:\\Program Files\\Java\\jdk-17\\bin), (3) Restart your terminal, (4) Verify with 'javac -version'. On Linux/macOS, add 'export PATH=$PATH:/path/to/jdk/bin' to ~/.bashrc or ~/.zshrc.",difficulty:"easy",tags:["PATH","troubleshooting","errors"]},{question:"What is ClassNotFoundException and how is it different from NoClassDefFoundError?",answer:"ClassNotFoundException occurs when the JVM cannot find a class in CLASSPATH at runtime \u2014 the class was never available. NoClassDefFoundError occurs when a class was present during compilation but is missing at runtime, typically due to CLASSPATH changes, missing JARs, or deleted .class files. ClassNotFoundException means 'never found it', NoClassDefFoundError means 'had it before, lost it now'.",difficulty:"medium",tags:["CLASSPATH","exceptions","errors","troubleshooting"]},{question:"How do you set CLASSPATH for a Java program?",answer:"There are three ways: (1) RECOMMENDED: Use -cp or -classpath option: 'java -cp .;libs/* MyApp' (explicit, no side effects), (2) Temporary environment variable: 'set CLASSPATH=.;libs/*' on Windows or 'export CLASSPATH=.:libs/*' on Linux (current session only), (3) AVOID: Permanent system variable (affects all Java apps globally, hard to debug). Modern best practice is using build tools (Maven, Gradle) or the -cp option.",difficulty:"medium",tags:["CLASSPATH","configuration","best-practices"]},{question:"What can be included in CLASSPATH?",answer:"CLASSPATH can contain: (1) Current directory (.), (2) Directory paths to .class files (C:\\myapp\\classes), (3) Individual JAR files (C:\\libs\\mysql.jar), (4) Wildcard for multiple JARs (C:\\libs/*). Entries are separated by semicolons (;) on Windows or colons (:) on Linux/macOS. The JVM searches entries from left to right and uses the first match found.",difficulty:"medium",tags:["CLASSPATH","configuration","JAR-files"]},{question:"Do you need to set CLASSPATH in modern Java development?",answer:"Rarely. Modern Java development uses build tools (Maven, Gradle) that auto-manage dependencies and CLASSPATH, or IDEs (IntelliJ, Eclipse) that auto-configure build paths. You only set CLASSPATH manually when: (1) Learning Java basics without tools, (2) Running standalone programs with external JARs, (3) Troubleshooting classpath issues, (4) Working with legacy projects. Best practice: Use -cp option when needed, avoid global CLASSPATH environment variable.",difficulty:"medium",tags:["CLASSPATH","modern-development","best-practices","build-tools"]},{question:"Why does CLASSPATH order matter?",answer:"The JVM searches CLASSPATH entries from left to right and uses the FIRST matching class it finds, ignoring duplicates. If you have multiple JARs with the same class (e.g., old-version.jar and new-version.jar), the order determines which version loads. Example: '.;old.jar;new.jar' loads the old version first. To fix: put the desired version first or remove duplicates. This is why dependency management tools (Maven/Gradle) are crucial for preventing version conflicts.",difficulty:"hard",tags:["CLASSPATH","class-loading","dependency-management","troubleshooting"]},{question:"How does PATH help during Java compilation and execution?",answer:"During compilation: When you type 'javac HelloWorld.java', the OS searches PATH directories to find the javac executable. Without PATH, you'd need to type the full path like 'C:\\Program Files\\Java\\jdk-17\\bin\\javac HelloWorld.java'. During execution: Same for 'java HelloWorld' \u2014 OS uses PATH to find the java executable. PATH makes commands work from any directory without specifying full paths to Java tools.",difficulty:"easy",tags:["PATH","compilation","execution","fundamentals"]},{question:"Explain how PATH and CLASSPATH work together with an example.",answer:"Example: 'javac -cp libs/mysql.jar DBApp.java' then 'java -cp .;libs/mysql.jar DBApp'. Step 1: OS uses PATH to find javac executable. Step 2: javac uses CLASSPATH (libs/mysql.jar) to find MySQL driver classes during compilation. Step 3: OS uses PATH to find java executable. Step 4: JVM uses CLASSPATH (. and libs/mysql.jar) to load DBApp.class and MySQL driver at runtime. PATH finds the tools, CLASSPATH finds the code.",difficulty:"hard",tags:["PATH","CLASSPATH","compilation","execution","workflow"]},{question:"What are the best practices for managing CLASSPATH in production?",answer:"Best practices: (1) Use build tools (Maven, Gradle) for automatic dependency management, (2) Never set CLASSPATH as a global environment variable (causes conflicts), (3) Use -cp option for standalone programs, (4) Include current directory (.) when needed, (5) Use relative paths for portability, (6) Leverage fat JARs (Spring Boot) that bundle all dependencies, (7) Use wildcard (libs/*) for multiple JARs, (8) Document dependencies clearly, (9) Avoid mixing library versions. Modern production rarely touches CLASSPATH manually.",difficulty:"hard",tags:["CLASSPATH","best-practices","production","build-tools","dependency-management"]},{question:"How can you programmatically check the current CLASSPATH?",answer:`Use System.getProperty("java.class.path") to get the current CLASSPATH at runtime. Example: String cp = System.getProperty("java.class.path"); String[] paths = cp.split(System.getProperty("path.separator")); for(String p : paths) { System.out.println(p); }. This prints all CLASSPATH entries. You can also use 'java -verbose:class MyApp' to see every class loading with its source JAR/directory. Useful for debugging ClassNotFoundException.`,difficulty:"medium",tags:["CLASSPATH","debugging","runtime","troubleshooting"]},{question:"What is the difference between setting PATH permanently vs temporarily?",answer:"Permanent (System Environment Variable): Survives terminal restarts, affects all sessions, set via System Properties (Windows) or .bashrc/.zshrc (Linux/macOS). Recommended for PATH since Java tools are always needed. Temporary (Session Variable): Lasts only for current terminal session, set with 'set PATH=...' (Windows) or 'export PATH=...' (Linux/macOS). Lost when terminal closes. Useful for testing without affecting global settings. PATH should generally be permanent, CLASSPATH should be temporary (or use -cp).",difficulty:"medium",tags:["PATH","CLASSPATH","environment-variables","configuration"]}]};var Ey=py,Sy=hy,Dy=my,My=gy,Iy=vy,_y=yy,xy=by,Ty=Cy,Ay=wy;var Oy=(()=>{let t=class t{constructor(){this.subtopicContents={Fundamentals:Ey,"Exception Hierarchy":Sy,"History of Java":Dy,"Features of Java (Platform Independent, OOP, etc.)":My,"JDK, JRE, JVM Architecture":Iy,"Compilation and Execution Process":_y,"Bytecode and Platform Independence":xy,"Java Editions (SE, EE, ME)":Ty,"Path and Classpath (Environment Variables)":Ay}}getSubtopicContent(o){return this.subtopicContents[o]||null}getAllSubtopicNames(){return Object.keys(this.subtopicContents)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function P_(e,t){if(e&1&&(h(0,"div",19)(1,"h2"),m(2,"Overview"),f(),h(3,"p",20),m(4),f()()),e&2){let n=R(2);g(4),j(n.content.overview)}}function R_(e,t){if(e&1&&(h(0,"th"),m(1),f()),e&2){let n=t.$implicit;g(),j(n)}}function k_(e,t){if(e&1&&(h(0,"td"),m(1),f()),e&2){let n=t.$implicit;g(),j(n)}}function N_(e,t){if(e&1&&(h(0,"tr"),P(1,k_,2,1,"td",34),f()),e&2){let n=t.$implicit;g(),E("ngForOf",n)}}function F_(e,t){if(e&1&&(h(0,"div",33)(1,"table")(2,"thead")(3,"tr"),P(4,R_,2,1,"th",34),f()(),h(5,"tbody"),P(6,N_,2,1,"tr",34),f()()()),e&2){let n=R().$implicit;g(4),E("ngForOf",n.table.headers),g(2),E("ngForOf",n.table.rows)}}function L_(e,t){if(e&1&&(h(0,"div",30)(1,"h3"),m(2),f(),Se(3,"div",31),P(4,F_,7,2,"div",32),f()),e&2){let n=t.$implicit,o=R(5);g(2),j(n.title),g(),E("innerHTML",o.formatContent(n.content),ea),g(),E("ngIf",n.table)}}function j_(e,t){if(e&1&&(h(0,"div",28),P(1,L_,5,3,"div",29),f()),e&2){let n=R().$implicit;g(),E("ngForOf",n.subsections)}}function V_(e,t){if(e&1&&(h(0,"p",40),m(1),f()),e&2){let n=R().$implicit;g(),j(n.caption)}}function J_(e,t){if(e&1&&(h(0,"div",37),Se(1,"img",38),P(2,V_,2,1,"p",39),f()),e&2){let n=t.$implicit;g(),E("src",n.url,Or)("alt",n.alt),g(),E("ngIf",n.caption)}}function H_(e,t){if(e&1&&(h(0,"div",35),P(1,J_,3,3,"div",36),f()),e&2){let n=R().$implicit;g(),E("ngForOf",n.images)}}function B_(e,t){if(e&1&&(h(0,"p",48),m(1),f()),e&2){let n=R().$implicit;g(),j(n.description)}}function U_(e,t){if(e&1&&(h(0,"div",43)(1,"h3"),m(2),f(),P(3,B_,2,1,"p",44),h(4,"div",45)(5,"div",46)(6,"span",47),m(7),f()(),h(8,"pre")(9,"code"),m(10),f()()()()),e&2){let n=t.$implicit;g(2),j(n.title),g(),E("ngIf",n.description),g(4),j(n.language),g(3),j(n.code)}}function W_(e,t){if(e&1&&(h(0,"div",41),P(1,U_,11,4,"div",42),f()),e&2){let n=R().$implicit;g(),E("ngForOf",n.codeExamples)}}function $_(e,t){if(e&1&&(h(0,"div",23)(1,"h2"),m(2),f(),Se(3,"div",24),P(4,j_,2,1,"div",25)(5,H_,2,1,"div",26)(6,W_,2,1,"div",27),f()),e&2){let n=t.$implicit,o=t.index,r=R(3);g(2),Ht("",o+1,". ",n.title),g(),E("innerHTML",r.formatContent(n.content),ea),g(),E("ngIf",n.subsections&&n.subsections.length>0),g(),E("ngIf",n.images&&n.images.length>0),g(),E("ngIf",n.codeExamples&&n.codeExamples.length>0)}}function z_(e,t){if(e&1&&(h(0,"div",21),P(1,$_,7,6,"div",22),f()),e&2){let n=R(2);g(),E("ngForOf",n.content.sections)}}function G_(e,t){if(e&1&&(h(0,"p",48),m(1),f()),e&2){let n=R().$implicit;g(),j(n.description)}}function q_(e,t){if(e&1&&(h(0,"div",43)(1,"h3"),m(2),f(),P(3,G_,2,1,"p",44),h(4,"div",45)(5,"div",46)(6,"span",47),m(7),f()(),h(8,"pre")(9,"code"),m(10),f()()()()),e&2){let n=t.$implicit;g(2),j(n.title),g(),E("ngIf",n.description),g(4),j(n.language),g(3),j(n.code)}}function Y_(e,t){if(e&1&&(h(0,"div",49)(1,"h2"),m(2,"Code Examples"),f(),P(3,q_,11,4,"div",42),f()),e&2){let n=R(2);g(3),E("ngForOf",n.content.codeExamples)}}function K_(e,t){if(e&1&&(h(0,"p",40),m(1),f()),e&2){let n=R().$implicit;g(),j(n.caption)}}function Q_(e,t){if(e&1&&(h(0,"div",37),Se(1,"img",38),P(2,K_,2,1,"p",39),f()),e&2){let n=t.$implicit;g(),E("src",n.url,Or)("alt",n.alt),g(),E("ngIf",n.caption)}}function Z_(e,t){if(e&1&&(h(0,"div",50)(1,"h2"),m(2,"Diagrams & Illustrations"),f(),P(3,Q_,3,3,"div",36),f()),e&2){let n=R(2);g(3),E("ngForOf",n.content.images)}}function X_(e,t){if(e&1&&(h(0,"li"),m(1),f()),e&2){let n=t.$implicit;g(),j(n)}}function ex(e,t){if(e&1&&(h(0,"div",51)(1,"h2"),m(2,"Key Points"),f(),h(3,"ul",52),P(4,X_,2,1,"li",34),f()()),e&2){let n=R(2);g(4),E("ngForOf",n.content.keyPoints)}}function tx(e,t){if(e&1&&(h(0,"li"),m(1),f()),e&2){let n=t.$implicit;g(),j(n)}}function nx(e,t){if(e&1&&(h(0,"div",53)(1,"h2"),m(2,"References"),f(),h(3,"ul",54),P(4,tx,2,1,"li",34),f()()),e&2){let n=R(2);g(4),E("ngForOf",n.content.references)}}function ox(e,t){if(e&1&&(h(0,"span",66),m(1),f()),e&2){let n=R().$implicit;Uu("difficulty-"+n.difficulty),g(),Be(" ",n.difficulty," ")}}function rx(e,t){if(e&1&&(h(0,"span",69),m(1),f()),e&2){let n=t.$implicit;g(),j(n)}}function ix(e,t){if(e&1&&(h(0,"div",67),P(1,rx,2,1,"span",68),f()),e&2){let n=R().$implicit;g(),E("ngForOf",n.tags)}}function sx(e,t){if(e&1&&(h(0,"div",58)(1,"div",59)(2,"span",60),m(3),f(),P(4,ox,2,3,"span",61)(5,ix,2,1,"div",62),f(),h(6,"div",63)(7,"strong"),m(8,"Q:"),f(),m(9),f(),h(10,"div",64)(11,"strong"),m(12,"A:"),f(),h(13,"pre",65),m(14),f()()()),e&2){let n=t.$implicit,o=t.index;g(3),Be("Q",o+1),g(),E("ngIf",n.difficulty),g(),E("ngIf",n.tags&&n.tags.length>0),g(4),Be(" ",n.question," "),g(5),j(n.answer)}}function ax(e,t){if(e&1&&(h(0,"div",55)(1,"h2"),m(2,"\u{1F4BC} Interview Questions & Answers"),f(),h(3,"div",56)(4,"p"),m(5,"Common interview questions related to this topic with detailed answers."),f()(),P(6,sx,15,5,"div",57),f()),e&2){let n=R(2);g(6),E("ngForOf",n.content.interviewQA)}}function cx(e,t){if(e&1&&(h(0,"div",11)(1,"h1"),m(2),f(),P(3,P_,5,1,"div",12)(4,z_,2,1,"div",13)(5,Y_,4,1,"div",14)(6,Z_,4,1,"div",15)(7,ex,5,1,"div",16)(8,nx,5,1,"div",17)(9,ax,7,1,"div",18),f()),e&2){let n=R();g(2),j(n.content.name),g(),E("ngIf",n.content.overview),g(),E("ngIf",n.content.sections&&n.content.sections.length>0),g(),E("ngIf",n.content.codeExamples&&n.content.codeExamples.length>0),g(),E("ngIf",n.content.images&&n.content.images.length>0),g(),E("ngIf",n.content.keyPoints&&n.content.keyPoints.length>0),g(),E("ngIf",n.content.references&&n.content.references.length>0),g(),E("ngIf",n.content.interviewQA&&n.content.interviewQA.length>0)}}function lx(e,t){if(e&1&&(h(0,"div",70)(1,"h1"),m(2),f(),h(3,"div",71)(4,"p"),m(5,"\u{1F4DD} Content for this subtopic is not yet available."),f(),h(6,"p"),m(7,"Please check back later or contact the administrator."),f()()()),e&2){let n=R();g(2),j(n.subtopicName)}}var Py=(()=>{let t=class t{constructor(o,r,i,s){this.route=o,this.router=r,this.location=i,this.contentService=s,this.subtopicName="",this.topicName="",this.sectionTitle="",this.content=null,this.showBackToTop=!1}ngOnInit(){this.route.queryParams.subscribe(o=>{this.subtopicName=o.subtopic||"",this.topicName=o.topic||"",this.sectionTitle=o.section||"",this.content=this.contentService.getSubtopicContent(this.subtopicName)})}goBack(){this.location.back()}onWindowScroll(){this.showBackToTop=window.pageYOffset>300}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}formatContent(o){if(!o)return"";if(o.includes("\u2022")){let i=o.split(`
`).map(s=>s.trim()).filter(s=>s).map(s=>s.startsWith("\u2022")?`<li>${s.substring(1).trim()}</li>`:s);if(i.every(s=>s.startsWith("<li>")))return`<ul>${i.join("")}</ul>`}return o.replace(/\n/g,"<br>")}};t.\u0275fac=function(r){return new(r||t)(_(ze),_(Pe),_(St),_(Oy))},t.\u0275cmp=ae({type:t,selectors:[["app-subtopic-detail"]],hostBindings:function(r,i){r&1&&q("scroll",function(){return i.onWindowScroll()},vu)},standalone:!1,decls:19,vars:7,consts:[[1,"subtopic-detail-container"],[1,"header"],[1,"back-button",3,"click"],[1,"breadcrumb"],[1,"section-name"],[1,"separator"],[1,"topic-name"],[1,"subtopic-name"],["class","content",4,"ngIf"],["class","content no-content",4,"ngIf"],["title","Back to Top",1,"back-to-top",3,"click"],[1,"content"],["class","overview-section",4,"ngIf"],["class","content-sections",4,"ngIf"],["class","code-examples-section",4,"ngIf"],["class","images-section",4,"ngIf"],["class","key-points-section",4,"ngIf"],["class","references-section",4,"ngIf"],["class","interview-section",4,"ngIf"],[1,"overview-section"],[1,"overview-text"],[1,"content-sections"],["class","content-section",4,"ngFor","ngForOf"],[1,"content-section"],[1,"section-content",3,"innerHTML"],["class","subsections",4,"ngIf"],["class","section-images",4,"ngIf"],["class","section-code-examples",4,"ngIf"],[1,"subsections"],["class","subsection",4,"ngFor","ngForOf"],[1,"subsection"],[3,"innerHTML"],["class","comparison-table",4,"ngIf"],[1,"comparison-table"],[4,"ngFor","ngForOf"],[1,"section-images"],["class","image-container",4,"ngFor","ngForOf"],[1,"image-container"],[1,"content-image",3,"src","alt"],["class","image-caption",4,"ngIf"],[1,"image-caption"],[1,"section-code-examples"],["class","code-example",4,"ngFor","ngForOf"],[1,"code-example"],["class","code-description",4,"ngIf"],[1,"code-block"],[1,"code-header"],[1,"language-badge"],[1,"code-description"],[1,"code-examples-section"],[1,"images-section"],[1,"key-points-section"],[1,"key-points-list"],[1,"references-section"],[1,"references-list"],[1,"interview-section"],[1,"interview-intro"],["class","interview-qa",4,"ngFor","ngForOf"],[1,"interview-qa"],[1,"question-header"],[1,"question-number"],["class","difficulty-badge",3,"class",4,"ngIf"],["class","tags",4,"ngIf"],[1,"question"],[1,"answer"],[1,"answer-content"],[1,"difficulty-badge"],[1,"tags"],["class","tag",4,"ngFor","ngForOf"],[1,"tag"],[1,"content","no-content"],[1,"no-content-message"]],template:function(r,i){r&1&&(h(0,"div",0)(1,"div",1)(2,"button",2),q("click",function(){return i.goBack()}),m(3," \u2190 Back "),f(),h(4,"div",3)(5,"span",4),m(6),f(),h(7,"span",5),m(8,"\u203A"),f(),h(9,"span",6),m(10),f(),h(11,"span",5),m(12,"\u203A"),f(),h(13,"span",7),m(14),f()()(),P(15,cx,10,8,"div",8)(16,lx,8,1,"div",9),h(17,"button",10),q("click",function(){return i.scrollToTop()}),m(18," \u2191 "),f()()),r&2&&(g(6),j(i.sectionTitle),g(4),j(i.topicName),g(4),j(i.subtopicName),g(),E("ngIf",i.content),g(),E("ngIf",!i.content),g(),ce("visible",i.showBackToTop))},dependencies:[Le,ut],styles:['.subtopic-detail-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:20px;min-height:100vh;background:#f5f5f5}.header[_ngcontent-%COMP%]{margin-bottom:30px}.back-button[_ngcontent-%COMP%]{background:#007bff;color:#fff;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;font-size:16px;margin-bottom:15px;transition:background .3s}.back-button[_ngcontent-%COMP%]:hover{background:#0056b3}.breadcrumb[_ngcontent-%COMP%]{font-size:14px;color:#666;margin-top:10px}.section-name[_ngcontent-%COMP%]{color:#007bff;font-weight:500}.topic-name[_ngcontent-%COMP%]{color:#28a745;font-weight:500}.subtopic-name[_ngcontent-%COMP%]{color:#333;font-weight:600}.separator[_ngcontent-%COMP%]{margin:0 8px;color:#999}.content[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:40px;box-shadow:0 2px 8px #0000001a}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#333;margin-bottom:30px;padding-bottom:20px;border-bottom:3px solid #007bff;font-size:36px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#007bff;margin-top:40px;margin-bottom:20px;font-size:28px;border-left:4px solid #007bff;padding-left:15px}.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#555;margin-top:25px;margin-bottom:15px;font-size:22px}.overview-section[_ngcontent-%COMP%]{background:#e7f3ff;padding:20px;border-radius:8px;border-left:4px solid #007bff;margin-bottom:30px}.overview-text[_ngcontent-%COMP%]{font-size:18px;line-height:1.8;color:#333;margin:0}.back-to-top[_ngcontent-%COMP%]{position:fixed;bottom:30px;right:30px;background:#007bff;color:#fff;border:none;width:50px;height:50px;border-radius:50%;font-size:24px;font-weight:700;cursor:pointer;box-shadow:0 4px 12px #007bff66;transition:all .3s ease;z-index:1000;display:flex;align-items:center;justify-content:center;line-height:1;opacity:0;visibility:hidden;transform:translateY(20px)}.back-to-top.visible[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:translateY(0)}.back-to-top[_ngcontent-%COMP%]:hover{background:#0056b3;transform:translateY(-5px);box-shadow:0 6px 16px #007bff99}.back-to-top[_ngcontent-%COMP%]:active{transform:translateY(-2px)}.content-section[_ngcontent-%COMP%]{margin-bottom:40px}.section-content[_ngcontent-%COMP%]{font-size:16px;line-height:1.8;color:#444;margin-bottom:20px}.subsections[_ngcontent-%COMP%]{margin-left:20px;margin-top:20px}.subsection[_ngcontent-%COMP%]{background:#f8f9fa;padding:20px;border-radius:6px;margin-bottom:15px;border-left:3px solid #28a745}.subsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#28a745}.subsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.8;color:#555;margin:0}.section-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .subsection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:0;margin:15px 0}.section-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .subsection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px 0 8px 25px;position:relative;line-height:1.6;color:#444;margin-left:10px}.section-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before, .subsection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";color:#667eea;font-weight:700;font-size:18px;position:absolute;left:0}.comparison-table[_ngcontent-%COMP%]{margin-top:15px;overflow-x:auto}.comparison-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background:#fff;box-shadow:0 2px 4px #0000001a;border-radius:8px;overflow:hidden}.comparison-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:15px;text-align:left;font-weight:600;font-size:14px;text-transform:uppercase;letter-spacing:.5px}.comparison-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #e9ecef;transition:background-color .2s}.comparison-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#f8f9fa}.comparison-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child{border-bottom:none}.comparison-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:15px;color:#495057;font-size:14px}.comparison-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{font-weight:600;color:#212529;background-color:#f8f9fa}.code-examples-section[_ngcontent-%COMP%]{margin-top:40px}.code-example[_ngcontent-%COMP%]{margin-bottom:30px}.code-description[_ngcontent-%COMP%]{color:#666;font-style:italic;margin-bottom:15px}.code-block[_ngcontent-%COMP%]{background:#282c34;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px #00000026}.code-header[_ngcontent-%COMP%]{background:#1e2127;padding:10px 20px;border-bottom:1px solid #3a3f4b}.language-badge[_ngcontent-%COMP%]{background:#007bff;color:#fff;padding:4px 12px;border-radius:4px;font-size:12px;font-weight:600;text-transform:uppercase}.code-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;padding:20px;overflow-x:auto}.code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Consolas,Monaco,Courier New,monospace;font-size:14px;line-height:1.6}.images-section[_ngcontent-%COMP%]{margin-top:40px}.image-container[_ngcontent-%COMP%]{margin-bottom:30px;text-align:center}.content-image[_ngcontent-%COMP%]{max-width:100%;height:auto;border-radius:8px;box-shadow:0 4px 12px #0000001a;margin-bottom:10px}.image-caption[_ngcontent-%COMP%]{color:#666;font-style:italic;font-size:14px;margin-top:10px}.key-points-section[_ngcontent-%COMP%]{background:#fff3cd;padding:25px;border-radius:8px;border-left:4px solid #ffc107;margin-top:40px}.key-points-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0;color:#856404}.key-points-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.key-points-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 0 10px 30px;position:relative;color:#856404;font-weight:500}.key-points-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#28a745;font-weight:700;font-size:18px}.references-section[_ngcontent-%COMP%]{background:#f8f9fa;padding:25px;border-radius:8px;margin-top:40px}.references-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0;color:#6c757d}.references-list[_ngcontent-%COMP%]{list-style:decimal;padding-left:20px;margin:0}.references-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px 0;color:#495057;line-height:1.6}.interview-section[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);padding:40px;border-radius:12px;margin-top:50px;box-shadow:0 10px 30px #667eea4d}.interview-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;margin-top:0;border:none;padding:0;font-size:32px}.interview-intro[_ngcontent-%COMP%]{background:#ffffff1a;padding:15px 20px;border-radius:8px;margin-bottom:30px;border-left:4px solid white}.interview-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;margin:0;font-size:16px}.interview-qa[_ngcontent-%COMP%]{background:#fff;border-radius:10px;padding:25px;margin-bottom:20px;box-shadow:0 4px 15px #0000001a;transition:transform .2s,box-shadow .2s}.interview-qa[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 6px 20px #00000026}.question-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:15px;flex-wrap:wrap}.question-number[_ngcontent-%COMP%]{background:#667eea;color:#fff;padding:6px 14px;border-radius:20px;font-weight:700;font-size:14px}.difficulty-badge[_ngcontent-%COMP%]{padding:4px 12px;border-radius:4px;font-size:12px;font-weight:600;text-transform:uppercase}.difficulty-easy[_ngcontent-%COMP%]{background:#d4edda;color:#155724}.difficulty-medium[_ngcontent-%COMP%]{background:#fff3cd;color:#856404}.difficulty-hard[_ngcontent-%COMP%]{background:#f8d7da;color:#721c24}.tags[_ngcontent-%COMP%]{display:flex;gap:6px;flex-wrap:wrap}.tag[_ngcontent-%COMP%]{background:#e9ecef;color:#495057;padding:3px 10px;border-radius:12px;font-size:11px;font-weight:500}.question[_ngcontent-%COMP%]{font-size:18px;color:#333;margin-bottom:15px;line-height:1.6}.question[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#667eea;font-size:20px;margin-right:8px}.answer[_ngcontent-%COMP%]{background:#f8f9fa;padding:20px;border-radius:8px;border-left:4px solid #28a745}.answer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#28a745;font-size:18px;margin-right:8px}.answer-content[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:#495057;line-height:1.8;margin:10px 0 0;white-space:pre-wrap;word-wrap:break-word;background:transparent;padding:0;font-size:15px}.no-content[_ngcontent-%COMP%]{text-align:center;padding:60px 40px}.no-content-message[_ngcontent-%COMP%]{background:#f8f9fa;padding:40px;border-radius:8px;border:2px dashed #dee2e6}.no-content-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;color:#6c757d;margin:10px 0}.no-content-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-size:24px;font-weight:500}@media (max-width: 768px){.subtopic-detail-container[_ngcontent-%COMP%]{padding:15px 10px}.header[_ngcontent-%COMP%]{margin-bottom:20px}.back-button[_ngcontent-%COMP%]{padding:8px 16px;font-size:14px;width:100%;margin-bottom:12px}.breadcrumb[_ngcontent-%COMP%]{font-size:12px;line-height:1.6}.separator[_ngcontent-%COMP%]{margin:0 4px}.content[_ngcontent-%COMP%]{padding:25px 20px;border-radius:6px}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:28px;margin-bottom:20px;padding-bottom:15px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px;margin-top:30px;margin-bottom:15px;padding-left:12px}.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin-top:20px}.overview-section[_ngcontent-%COMP%]{padding:15px;margin-bottom:20px}.overview-text[_ngcontent-%COMP%]{font-size:16px;line-height:1.6}.content-section[_ngcontent-%COMP%]{margin-bottom:30px}.section-content[_ngcontent-%COMP%]{font-size:15px;line-height:1.7}.subsections[_ngcontent-%COMP%]{margin-left:10px;margin-top:15px}.subsection[_ngcontent-%COMP%]{padding:15px;margin-bottom:12px}.code-example[_ngcontent-%COMP%]{margin-bottom:20px}.code-description[_ngcontent-%COMP%]{font-size:14px;margin-bottom:10px}.code-block[_ngcontent-%COMP%]{border-radius:6px}.code-header[_ngcontent-%COMP%]{padding:8px 15px}.language-badge[_ngcontent-%COMP%]{font-size:10px;padding:3px 10px}.code-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{padding:15px;font-size:12px}.code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-size:12px;line-height:1.5}.key-points-section[_ngcontent-%COMP%], .references-section[_ngcontent-%COMP%]{padding:20px;margin-top:30px}.key-points-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px 0 8px 25px;font-size:14px}.key-points-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{font-size:16px}.references-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;line-height:1.5}.interview-section[_ngcontent-%COMP%]{padding:25px 20px;margin-top:30px}.interview-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px}.interview-intro[_ngcontent-%COMP%]{padding:12px 15px;margin-bottom:20px}.interview-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.interview-qa[_ngcontent-%COMP%]{padding:20px 15px;margin-bottom:15px}.question-header[_ngcontent-%COMP%]{gap:8px;margin-bottom:12px}.question-number[_ngcontent-%COMP%]{padding:5px 12px;font-size:12px}.difficulty-badge[_ngcontent-%COMP%]{padding:3px 10px;font-size:11px}.tag[_ngcontent-%COMP%]{padding:2px 8px;font-size:10px}.question[_ngcontent-%COMP%]{font-size:16px;margin-bottom:12px}.question[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:18px}.answer[_ngcontent-%COMP%]{padding:15px}.answer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:16px}.answer-content[_ngcontent-%COMP%]{font-size:14px;line-height:1.7}.no-content[_ngcontent-%COMP%]{padding:40px 20px}.no-content-message[_ngcontent-%COMP%]{padding:30px 20px}.no-content-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.no-content-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-size:20px}}@media (max-width: 480px){.subtopic-detail-container[_ngcontent-%COMP%]{padding:10px 5px}.back-button[_ngcontent-%COMP%]{padding:6px 12px;font-size:13px}.breadcrumb[_ngcontent-%COMP%]{font-size:11px}.content[_ngcontent-%COMP%]{padding:20px 15px}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;margin-bottom:15px;padding-bottom:12px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;margin-top:25px;margin-bottom:12px;padding-left:10px}.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.overview-section[_ngcontent-%COMP%]{padding:12px}.overview-text[_ngcontent-%COMP%]{font-size:15px}.section-content[_ngcontent-%COMP%]{font-size:14px}.subsection[_ngcontent-%COMP%]{padding:12px}.code-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{padding:12px;overflow-x:auto;-webkit-overflow-scrolling:touch}.code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-size:11px;word-wrap:break-word;white-space:pre-wrap}.interview-section[_ngcontent-%COMP%]{padding:20px 15px}.interview-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.interview-qa[_ngcontent-%COMP%]{padding:15px 12px}.question[_ngcontent-%COMP%]{font-size:15px}.question[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:16px}.answer-content[_ngcontent-%COMP%]{font-size:13px}}']});let e=t;return e})();function ux(e,t){if(e&1){let n=Et();h(0,"button",27),q("click",function(){rt(n);let r=R();return it(r.clearFilters())}),m(1,"\u{1F504} Clear Filters"),f()}}function dx(e,t){if(e&1&&(h(0,"div",28)(1,"p"),m(2),f()()),e&2){let n=R();g(2),Ht("Showing ",n.filteredSections.length," of ",n.sections.length," sections")}}function fx(e,t){if(e&1){let n=Et();h(0,"div",29)(1,"div",30),m(2,"\u{1F50D}"),f(),h(3,"h3"),m(4,"No results found"),f(),h(5,"p"),m(6,"Try adjusting your search or filters"),f(),h(7,"button",20),q("click",function(){rt(n);let r=R();return it(r.clearFilters())}),m(8,"Clear Filters"),f()()}}function px(e,t){if(e&1){let n=Et();h(0,"app-section",31),q("toggleCollapse",function(){let r=rt(n).$implicit,i=R();return it(i.toggleSection(r))}),f()}if(e&2){let n=t.$implicit,o=t.index;_o("animation-delay",o*.05+"s"),E("section",n)}}var Ry=(()=>{let t=class t{constructor(o,r){this.route=o,this.syllabusService=r,this.sections=[],this.filteredSections=[],this.technology="",this.techIcon="",this.techSubtitle="",this.themeClass="",this.searchTerm="",this.selectedDifficulty="all",this.totalSections=0,this.totalTopics=0,this.totalSubtopics=0}ngOnInit(){this.route.params.subscribe(o=>{let r=o.technology;this.loadTechnology(r)})}loadTechnology(o){switch(o){case"java":this.technology="Java",this.techIcon="\u2615",this.techSubtitle="Master Core Java from Basics to Advanced Concepts",this.themeClass="theme-java";break;case"spring":this.technology="Spring Framework",this.techIcon="\u{1F343}",this.techSubtitle="Master Spring Framework from Basics to Advanced",this.themeClass="theme-spring";break;case"springboot":this.technology="Spring Boot",this.techIcon="\u{1F680}",this.techSubtitle="Master Spring Boot from Basics to Production",this.themeClass="theme-springboot";break;default:this.technology="Technology",this.techIcon="\u{1F4DA}",this.techSubtitle="Complete Syllabus",this.themeClass="theme-default"}this.sections=this.syllabusService.getSectionsByTechnology(o),this.sections.forEach(r=>r.isCollapsed=!0),this.filteredSections=[...this.sections],this.calculateStats()}calculateStats(){this.totalSections=this.sections.length,this.totalTopics=this.sections.reduce((o,r)=>o+r.topics.length,0),this.totalSubtopics=this.sections.reduce((o,r)=>o+r.topics.reduce((i,s)=>i+(s.subTopics?.length||0),0),0)}toggleSection(o){o.isCollapsed=!o.isCollapsed}expandAll(){this.filteredSections.forEach(o=>o.isCollapsed=!1)}collapseAll(){this.filteredSections.forEach(o=>o.isCollapsed=!0)}filterByDifficulty(o){this.selectedDifficulty=o,this.applyFilters()}onSearch(){this.applyFilters()}applyFilters(){let o=[...this.sections];if(this.selectedDifficulty!=="all"&&(o=o.filter(r=>r.difficulty===this.selectedDifficulty)),this.searchTerm.trim()){let r=this.searchTerm.toLowerCase();o=o.filter(i=>i.title.toLowerCase().includes(r)||i.topics.some(s=>s.name.toLowerCase().includes(r)||s.subTopics?.some(a=>a.name.toLowerCase().includes(r))))}this.filteredSections=o}clearFilters(){this.searchTerm="",this.selectedDifficulty="all",this.filteredSections=[...this.sections]}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}};t.\u0275fac=function(r){return new(r||t)(_(ze),_(pn))},t.\u0275cmp=ae({type:t,selectors:[["app-syllabus"]],standalone:!1,decls:55,vars:20,consts:[[1,"syllabus-container",3,"ngClass"],[1,"header"],["routerLink","/",1,"back-button"],[1,"page-title"],[1,"page-subtitle"],[1,"stats-dashboard"],[1,"stat-card"],[1,"stat-icon"],[1,"stat-value"],[1,"stat-label"],[1,"controls-section"],[1,"search-box"],["type","text","placeholder","\u{1F50D} Search topics, subtopics...",1,"search-input",3,"ngModelChange","input","ngModel"],[1,"filter-controls"],[1,"difficulty-filters"],[1,"filter-btn",3,"click"],[1,"filter-btn","basic",3,"click"],[1,"filter-btn","intermediate",3,"click"],[1,"filter-btn","advanced",3,"click"],[1,"action-buttons"],[1,"action-btn",3,"click"],["class","action-btn clear",3,"click",4,"ngIf"],["class","results-info",4,"ngIf"],[1,"sections-container"],["class","no-results",4,"ngIf"],[3,"section","animation-delay","toggleCollapse",4,"ngFor","ngForOf"],["title","Back to top",1,"scroll-top",3,"click"],[1,"action-btn","clear",3,"click"],[1,"results-info"],[1,"no-results"],[1,"no-results-icon"],[3,"toggleCollapse","section"]],template:function(r,i){r&1&&(h(0,"div",0)(1,"div",1)(2,"a",2),m(3,"\u2190 Back to Home"),f(),h(4,"h1",3),m(5),f(),h(6,"p",4),m(7),f(),h(8,"div",5)(9,"div",6)(10,"div",7),m(11,"\u{1F4DA}"),f(),h(12,"div",8),m(13),f(),h(14,"div",9),m(15,"Sections"),f()(),h(16,"div",6)(17,"div",7),m(18,"\u{1F4D6}"),f(),h(19,"div",8),m(20),f(),h(21,"div",9),m(22,"Topics"),f()(),h(23,"div",6)(24,"div",7),m(25,"\u{1F4DD}"),f(),h(26,"div",8),m(27),f(),h(28,"div",9),m(29,"Subtopics"),f()()()(),h(30,"div",10)(31,"div",11)(32,"input",12),da("ngModelChange",function(a){return Wu(i.searchTerm,a)||(i.searchTerm=a),a}),q("input",function(){return i.onSearch()}),f()(),h(33,"div",13)(34,"div",14)(35,"button",15),q("click",function(){return i.filterByDifficulty("all")}),m(36," All "),f(),h(37,"button",16),q("click",function(){return i.filterByDifficulty("basic")}),m(38," Basic "),f(),h(39,"button",17),q("click",function(){return i.filterByDifficulty("intermediate")}),m(40," Intermediate "),f(),h(41,"button",18),q("click",function(){return i.filterByDifficulty("advanced")}),m(42," Advanced "),f()(),h(43,"div",19)(44,"button",20),q("click",function(){return i.expandAll()}),m(45,"\u{1F4C2} Expand All"),f(),h(46,"button",20),q("click",function(){return i.collapseAll()}),m(47,"\u{1F4C1} Collapse All"),f(),P(48,ux,2,0,"button",21),f()()(),P(49,dx,3,2,"div",22),h(50,"div",23),P(51,fx,9,0,"div",24)(52,px,1,3,"app-section",25),f(),h(53,"button",26),q("click",function(){return i.scrollToTop()}),m(54,"\u2191"),f()()),r&2&&(E("ngClass",i.themeClass),g(5),Ht("",i.techIcon," ",i.technology," Complete Syllabus"),g(2),j(i.techSubtitle),g(6),j(i.totalSections),g(7),j(i.totalTopics),g(7),j(i.totalSubtopics),g(5),ua("ngModel",i.searchTerm),g(3),ce("active",i.selectedDifficulty==="all"),g(2),ce("active",i.selectedDifficulty==="basic"),g(2),ce("active",i.selectedDifficulty==="intermediate"),g(2),ce("active",i.selectedDifficulty==="advanced"),g(7),E("ngIf",i.searchTerm||i.selectedDifficulty!=="all"),g(),E("ngIf",i.filteredSections.length!==i.sections.length),g(2),E("ngIf",i.filteredSections.length===0),g(),E("ngForOf",i.filteredSections))},dependencies:[Br,Le,ut,Oa,nv,Id,ac,lc],styles:[".syllabus-container[_ngcontent-%COMP%]{min-height:100vh;padding:20px;transition:all .3s ease}.header[_ngcontent-%COMP%]{text-align:center;margin-bottom:40px;animation:_ngcontent-%COMP%_fadeInDown .6s ease}.back-button[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;margin-bottom:20px;border-radius:8px;text-decoration:none;font-weight:500;transition:all .3s ease}.page-title[_ngcontent-%COMP%]{font-size:3rem;margin:20px 0 10px;font-weight:700;animation:_ngcontent-%COMP%_bounceIn .8s ease}.page-subtitle[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:30px;opacity:.8}.stats-dashboard[_ngcontent-%COMP%]{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin-top:30px}.stat-card[_ngcontent-%COMP%]{padding:25px 40px;border-radius:15px;text-align:center;box-shadow:0 4px 15px #0000001a;transition:transform .3s ease,box-shadow .3s ease;animation:_ngcontent-%COMP%_fadeInUp .6s ease}.stat-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 8px 25px #00000026}.stat-icon[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:10px}.stat-value[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;margin:10px 0}.stat-label[_ngcontent-%COMP%]{font-size:1rem;opacity:.7;text-transform:uppercase;letter-spacing:1px}.controls-section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 30px;animation:_ngcontent-%COMP%_slideInUp .6s ease}.search-box[_ngcontent-%COMP%]{margin-bottom:20px}.search-input[_ngcontent-%COMP%]{width:100%;padding:15px 20px;font-size:1rem;border:2px solid;border-radius:12px;outline:none;transition:all .3s ease}.search-input[_ngcontent-%COMP%]:focus{transform:translateY(-2px);box-shadow:0 5px 20px #0000001a}.filter-controls[_ngcontent-%COMP%]{display:flex;gap:15px;flex-wrap:wrap;justify-content:space-between;align-items:center}.difficulty-filters[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}.filter-btn[_ngcontent-%COMP%]{padding:10px 20px;border:2px solid;border-radius:25px;background:transparent;cursor:pointer;font-weight:600;transition:all .3s ease}.filter-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 10px #0000001a}.filter-btn.active[_ngcontent-%COMP%]{transform:scale(1.05)}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}.action-btn[_ngcontent-%COMP%]{padding:10px 20px;border:none;border-radius:8px;cursor:pointer;font-weight:600;transition:all .3s ease}.action-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 10px #00000026}.results-info[_ngcontent-%COMP%]{text-align:center;margin:20px 0;font-size:1.1rem;font-weight:500}.sections-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;animation:_ngcontent-%COMP%_fadeIn .8s ease}.no-results[_ngcontent-%COMP%]{text-align:center;padding:60px 20px;animation:_ngcontent-%COMP%_fadeIn .5s ease}.no-results-icon[_ngcontent-%COMP%]{font-size:5rem;margin-bottom:20px;opacity:.5}.no-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:10px}.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:20px;opacity:.7}.scroll-top[_ngcontent-%COMP%]{position:fixed;bottom:30px;right:30px;width:50px;height:50px;border-radius:50%;border:none;font-size:1.5rem;cursor:pointer;box-shadow:0 4px 15px #0003;transition:all .3s ease;z-index:1000}.scroll-top[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 8px 25px #0000004d}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fadeInDown{0%{opacity:0;transform:translateY(-30px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_slideInUp{0%{opacity:0;transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}to{transform:scale(1)}}@media (max-width: 1024px){.syllabus-container[_ngcontent-%COMP%]{padding:15px}.page-title[_ngcontent-%COMP%]{font-size:2.5rem}.stats-dashboard[_ngcontent-%COMP%]{gap:15px}}@media (max-width: 768px){.syllabus-container[_ngcontent-%COMP%]{padding:10px}.page-title[_ngcontent-%COMP%]{font-size:2rem;line-height:1.2}.page-subtitle[_ngcontent-%COMP%]{font-size:1rem}.stats-dashboard[_ngcontent-%COMP%]{gap:10px}.stat-card[_ngcontent-%COMP%]{padding:15px 25px;min-width:120px}.stat-value[_ngcontent-%COMP%]{font-size:2rem}.search-input[_ngcontent-%COMP%]{padding:12px 15px;font-size:16px}.filter-controls[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;gap:15px}.difficulty-filters[_ngcontent-%COMP%], .action-buttons[_ngcontent-%COMP%]{justify-content:center;width:100%}.filter-btn[_ngcontent-%COMP%], .action-btn[_ngcontent-%COMP%]{flex:1;min-width:80px}.scroll-top[_ngcontent-%COMP%]{bottom:20px;right:20px;width:45px;height:45px}}@media (max-width: 480px){.syllabus-container[_ngcontent-%COMP%]{padding:8px}.back-button[_ngcontent-%COMP%]{padding:8px 15px;font-size:.9rem}.page-title[_ngcontent-%COMP%]{font-size:1.5rem;margin:10px 0 8px}.page-subtitle[_ngcontent-%COMP%]{font-size:.9rem;margin-bottom:20px}.stats-dashboard[_ngcontent-%COMP%]{gap:8px}.stat-card[_ngcontent-%COMP%]{padding:10px 15px;min-width:100px}.stat-icon[_ngcontent-%COMP%]{font-size:1.8rem;margin-bottom:5px}.stat-value[_ngcontent-%COMP%]{font-size:1.5rem;margin:5px 0}.stat-label[_ngcontent-%COMP%]{font-size:.8rem}.search-input[_ngcontent-%COMP%]{padding:10px 12px;font-size:16px}.filter-btn[_ngcontent-%COMP%], .action-btn[_ngcontent-%COMP%]{padding:8px 12px;font-size:.85rem;min-height:44px}.results-info[_ngcontent-%COMP%]{font-size:.9rem;padding:8px}.scroll-top[_ngcontent-%COMP%]{bottom:15px;right:15px;width:40px;height:40px;font-size:1.2rem}.no-results-icon[_ngcontent-%COMP%]{font-size:3rem}.no-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem}.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (max-width: 360px){.page-title[_ngcontent-%COMP%]{font-size:1.3rem}.stat-card[_ngcontent-%COMP%]{padding:8px 12px;min-width:90px}.stat-value[_ngcontent-%COMP%]{font-size:1.3rem}.stat-label[_ngcontent-%COMP%]{font-size:.7rem}}"]});let e=t;return e})();var hx=[{path:"",component:cy},{path:"syllabus",component:fy},{path:"syllabus/:technology",component:Ry},{path:"java",redirectTo:"syllabus/java",pathMatch:"full"},{path:"spring",redirectTo:"syllabus/spring",pathMatch:"full"},{path:"springboot",redirectTo:"syllabus/springboot",pathMatch:"full"},{path:"subtopic-detail",component:Py},{path:"**",redirectTo:""}],ky=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Ee({type:t}),t.\u0275inj=he({imports:[cc.forRoot(hx),cc]});let e=t;return e})();var Ny=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Ee({type:t,bootstrap:[ry]}),t.\u0275inj=he({providers:[pn],imports:[bd,Ur,iv,ky]});let e=t;return e})();yd().bootstrapModule(Ny).catch(e=>console.error(e));
