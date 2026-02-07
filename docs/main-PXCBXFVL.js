var zy=Object.defineProperty,$y=Object.defineProperties;var Gy=Object.getOwnPropertyDescriptors;var np=Object.getOwnPropertySymbols;var qy=Object.prototype.hasOwnProperty,Yy=Object.prototype.propertyIsEnumerable;var op=(e,t,n)=>t in e?zy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||={})qy.call(t,n)&&op(e,n,t[n]);if(np)for(var n of np(t))Yy.call(t,n)&&op(e,n,t[n]);return e},F=(e,t)=>$y(e,Gy(t));var Uo=(e,t,n)=>new Promise((o,i)=>{var r=c=>{try{a(n.next(c))}catch(l){i(l)}},s=c=>{try{a(n.throw(c))}catch(l){i(l)}},a=c=>c.done?o(c.value):Promise.resolve(c.value).then(r,s);a((n=n.apply(e,t)).next())});var uc;function Cr(){return uc}function pt(e){let t=uc;return uc=e,t}var ip=Symbol("NotFound");function Gn(e){return e===ip||e?.name==="\u0275NotFound"}var ge=null,wr=!1,dc=1,Ky=null,ve=Symbol("SIGNAL");function N(e){let t=ge;return ge=e,t}function Ir(){return ge}var qn={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Yn(e){if(wr)throw new Error("");if(ge===null)return;ge.consumerOnSignalRead(e);let t=ge.producersTail;if(t!==void 0&&t.producer===e)return;let n,o=ge.recomputing;if(o&&(n=t!==void 0?t.nextProducer:ge.producers,n!==void 0&&n.producer===e)){ge.producersTail=n,n.lastReadVersion=e.version;return}let i=e.consumersTail;if(i!==void 0&&i.consumer===ge&&(!o||Zy(i,ge)))return;let r=Qn(ge),s={producer:e,consumer:ge,nextProducer:n,prevConsumer:i,lastReadVersion:e.version,nextConsumer:void 0};ge.producersTail=s,t!==void 0?t.nextProducer=s:ge.producers=s,r&&cp(e,s)}function rp(){dc++}function Mr(e){if(!(Qn(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===dc)){if(!e.producerMustRecompute(e)&&!Go(e)){Dr(e);return}e.producerRecomputeValue(e),Dr(e)}}function pc(e){if(e.consumers===void 0)return;let t=wr;wr=!0;try{for(let n=e.consumers;n!==void 0;n=n.nextConsumer){let o=n.consumer;o.dirty||Qy(o)}}finally{wr=t}}function fc(){return ge?.consumerAllowSignalWrites!==!1}function Qy(e){e.dirty=!0,pc(e),e.consumerMarkedDirty?.(e)}function Dr(e){e.dirty=!1,e.lastCleanEpoch=dc}function Kn(e){return e&&sp(e),N(e)}function sp(e){e.producersTail=void 0,e.recomputing=!0}function $o(e,t){N(t),e&&ap(e)}function ap(e){e.recomputing=!1;let t=e.producersTail,n=t!==void 0?t.nextProducer:e.producers;if(n!==void 0){if(Qn(e))do n=hc(n);while(n!==void 0);t!==void 0?t.nextProducer=void 0:e.producers=void 0}}function Go(e){for(let t=e.producers;t!==void 0;t=t.nextProducer){let n=t.producer,o=t.lastReadVersion;if(o!==n.version||(Mr(n),o!==n.version))return!0}return!1}function qo(e){if(Qn(e)){let t=e.producers;for(;t!==void 0;)t=hc(t)}e.producers=void 0,e.producersTail=void 0,e.consumers=void 0,e.consumersTail=void 0}function cp(e,t){let n=e.consumersTail,o=Qn(e);if(n!==void 0?(t.nextConsumer=n.nextConsumer,n.nextConsumer=t):(t.nextConsumer=void 0,e.consumers=t),t.prevConsumer=n,e.consumersTail=t,!o)for(let i=e.producers;i!==void 0;i=i.nextProducer)cp(i.producer,i)}function hc(e){let t=e.producer,n=e.nextProducer,o=e.nextConsumer,i=e.prevConsumer;if(e.nextConsumer=void 0,e.prevConsumer=void 0,o!==void 0?o.prevConsumer=i:t.consumersTail=i,i!==void 0)i.nextConsumer=o;else if(t.consumers=o,!Qn(t)){let r=t.producers;for(;r!==void 0;)r=hc(r)}return n}function Qn(e){return e.consumerIsAlwaysLive||e.consumers!==void 0}function Tr(e){Ky?.(e)}function Zy(e,t){let n=t.producersTail;if(n!==void 0){let o=t.producers;do{if(o===e)return!0;if(o===n)break;o=o.nextProducer}while(o!==void 0)}return!1}function xr(e,t){return Object.is(e,t)}function Ar(e,t){let n=Object.create(Xy);n.computation=e,t!==void 0&&(n.equal=t);let o=()=>{if(Mr(n),Yn(n),n.value===zo)throw n.error;return n.value};return o[ve]=n,Tr(n),o}var Sr=Symbol("UNSET"),Er=Symbol("COMPUTING"),zo=Symbol("ERRORED"),Xy=F(b({},qn),{value:Sr,dirty:!0,error:null,equal:xr,kind:"computed",producerMustRecompute(e){return e.value===Sr||e.value===Er},producerRecomputeValue(e){if(e.value===Er)throw new Error("");let t=e.value;e.value=Er;let n=Kn(e),o,i=!1;try{o=e.computation(),N(null),i=t!==Sr&&t!==zo&&o!==zo&&e.equal(t,o)}catch(r){o=zo,e.error=r}finally{$o(e,n)}if(i){e.value=t;return}e.value=o,e.version++}});function eb(){throw new Error}var lp=eb;function up(e){lp(e)}function mc(e){lp=e}var tb=null;function gc(e,t){let n=Object.create(_r);n.value=e,t!==void 0&&(n.equal=t);let o=()=>dp(n);return o[ve]=n,Tr(n),[o,s=>Zn(n,s),s=>vc(n,s)]}function dp(e){return Yn(e),e.value}function Zn(e,t){fc()||up(e),e.equal(e.value,t)||(e.value=t,nb(e))}function vc(e,t){fc()||up(e),Zn(e,t(e.value))}var _r=F(b({},qn),{equal:xr,value:void 0,kind:"signal"});function nb(e){e.version++,rp(),pc(e),tb?.(e)}function k(e){return typeof e=="function"}function Xn(e){let n=e(o=>{Error.call(o),o.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var kr=Xn(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((o,i)=>`${i+1}) ${o.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function Yo(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var ee=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let r of n)r.remove(this);else n.remove(this);let{initialTeardown:o}=this;if(k(o))try{o()}catch(r){t=r instanceof kr?r.errors:[r]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let r of i)try{pp(r)}catch(s){t=t??[],s instanceof kr?t=[...t,...s.errors]:t.push(s)}}if(t)throw new kr(t)}}add(t){var n;if(t&&t!==this)if(this.closed)pp(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&Yo(n,t)}remove(t){let{_finalizers:n}=this;n&&Yo(n,t),t instanceof e&&t._removeParent(this)}};ee.EMPTY=(()=>{let e=new ee;return e.closed=!0,e})();var yc=ee.EMPTY;function Pr(e){return e instanceof ee||e&&"closed"in e&&k(e.remove)&&k(e.add)&&k(e.unsubscribe)}function pp(e){k(e)?e():e.unsubscribe()}var Xe={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var eo={setTimeout(e,t,...n){let{delegate:o}=eo;return o?.setTimeout?o.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=eo;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function Or(e){eo.setTimeout(()=>{let{onUnhandledError:t}=Xe;if(t)t(e);else throw e})}function Ko(){}var fp=bc("C",void 0,void 0);function hp(e){return bc("E",void 0,e)}function mp(e){return bc("N",e,void 0)}function bc(e,t,n){return{kind:e,value:t,error:n}}var hn=null;function to(e){if(Xe.useDeprecatedSynchronousErrorHandling){let t=!hn;if(t&&(hn={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:o}=hn;if(hn=null,n)throw o}}else e()}function gp(e){Xe.useDeprecatedSynchronousErrorHandling&&hn&&(hn.errorThrown=!0,hn.error=e)}var mn=class extends ee{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Pr(t)&&t.add(this)):this.destination=rb}static create(t,n,o){return new no(t,n,o)}next(t){this.isStopped?wc(mp(t),this):this._next(t)}error(t){this.isStopped?wc(hp(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?wc(fp,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},ob=Function.prototype.bind;function Cc(e,t){return ob.call(e,t)}var Sc=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(o){Rr(o)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(o){Rr(o)}else Rr(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){Rr(n)}}},no=class extends mn{constructor(t,n,o){super();let i;if(k(t)||!t)i={next:t??void 0,error:n??void 0,complete:o??void 0};else{let r;this&&Xe.useDeprecatedNextContext?(r=Object.create(t),r.unsubscribe=()=>this.unsubscribe(),i={next:t.next&&Cc(t.next,r),error:t.error&&Cc(t.error,r),complete:t.complete&&Cc(t.complete,r)}):i=t}this.destination=new Sc(i)}};function Rr(e){Xe.useDeprecatedSynchronousErrorHandling?gp(e):Or(e)}function ib(e){throw e}function wc(e,t){let{onStoppedNotification:n}=Xe;n&&eo.setTimeout(()=>n(e,t))}var rb={closed:!0,next:Ko,error:ib,complete:Ko};var oo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function je(e){return e}function Ec(...e){return Dc(e)}function Dc(e){return e.length===0?je:e.length===1?e[0]:function(n){return e.reduce((o,i)=>i(o),n)}}var B=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let o=new e;return o.source=this,o.operator=n,o}subscribe(n,o,i){let r=ab(n)?n:new no(n,o,i);return to(()=>{let{operator:s,source:a}=this;r.add(s?s.call(r,a):a?this._subscribe(r):this._trySubscribe(r))}),r}_trySubscribe(n){try{return this._subscribe(n)}catch(o){n.error(o)}}forEach(n,o){return o=vp(o),new o((i,r)=>{let s=new no({next:a=>{try{n(a)}catch(c){r(c),s.unsubscribe()}},error:r,complete:i});this.subscribe(s)})}_subscribe(n){var o;return(o=this.source)===null||o===void 0?void 0:o.subscribe(n)}[oo](){return this}pipe(...n){return Dc(n)(this)}toPromise(n){return n=vp(n),new n((o,i)=>{let r;this.subscribe(s=>r=s,s=>i(s),()=>o(r))})}}return e.create=t=>new e(t),e})();function vp(e){var t;return(t=e??Xe.Promise)!==null&&t!==void 0?t:Promise}function sb(e){return e&&k(e.next)&&k(e.error)&&k(e.complete)}function ab(e){return e&&e instanceof mn||sb(e)&&Pr(e)}function Ic(e){return k(e?.lift)}function W(e){return t=>{if(Ic(t))return t.lift(function(n){try{return e(n,this)}catch(o){this.error(o)}});throw new TypeError("Unable to lift unknown Observable type")}}function J(e,t,n,o,i){return new Mc(e,t,n,o,i)}var Mc=class extends mn{constructor(t,n,o,i,r,s){super(t),this.onFinalize=r,this.shouldUnsubscribe=s,this._next=n?function(a){try{n(a)}catch(c){t.error(c)}}:super._next,this._error=i?function(a){try{i(a)}catch(c){t.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=o?function(){try{o()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};function io(){return W((e,t)=>{let n=null;e._refCount++;let o=J(t,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount){n=null;return}let i=e._connection,r=n;n=null,i&&(!r||i===r)&&i.unsubscribe(),t.unsubscribe()});e.subscribe(o),o.closed||(n=e.connect())})}var ro=class extends B{constructor(t,n){super(),this.source=t,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,Ic(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){let t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new ee;let n=this.getSubject();t.add(this.source.subscribe(J(n,void 0,()=>{this._teardown(),n.complete()},o=>{this._teardown(),n.error(o)},()=>this._teardown()))),t.closed&&(this._connection=null,t=ee.EMPTY)}return t}refCount(){return io()(this)}};var yp=Xn(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var te=(()=>{class e extends B{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let o=new Nr(this,this);return o.operator=n,o}_throwIfClosed(){if(this.closed)throw new yp}next(n){to(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let o of this.currentObservers)o.next(n)}})}error(n){to(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:o}=this;for(;o.length;)o.shift().error(n)}})}complete(){to(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:o,isStopped:i,observers:r}=this;return o||i?yc:(this.currentObservers=null,r.push(n),new ee(()=>{this.currentObservers=null,Yo(r,n)}))}_checkFinalizedStatuses(n){let{hasError:o,thrownError:i,isStopped:r}=this;o?n.error(i):r&&n.complete()}asObservable(){let n=new B;return n.source=this,n}}return e.create=(t,n)=>new Nr(t,n),e})(),Nr=class extends te{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,o;(o=(n=this.destination)===null||n===void 0?void 0:n.next)===null||o===void 0||o.call(n,t)}error(t){var n,o;(o=(n=this.destination)===null||n===void 0?void 0:n.error)===null||o===void 0||o.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,o;return(o=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&o!==void 0?o:yc}};var de=class extends te{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:o}=this;if(t)throw n;return this._throwIfClosed(),o}next(t){super.next(this._value=t)}};var Oe=new B(e=>e.complete());function bp(e){return e&&k(e.schedule)}function Cp(e){return e[e.length-1]}function Fr(e){return k(Cp(e))?e.pop():void 0}function Wt(e){return bp(Cp(e))?e.pop():void 0}function Sp(e,t,n,o){function i(r){return r instanceof n?r:new n(function(s){s(r)})}return new(n||(n=Promise))(function(r,s){function a(u){try{l(o.next(u))}catch(d){s(d)}}function c(u){try{l(o.throw(u))}catch(d){s(d)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((o=o.apply(e,t||[])).next())})}function wp(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function gn(e){return this instanceof gn?(this.v=e,this):new gn(e)}function Ep(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(e,t||[]),i,r=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(f){return function(C){return Promise.resolve(C).then(f,d)}}function a(f,C){o[f]&&(i[f]=function(x){return new Promise(function(U,H){r.push([f,x,U,H])>1||c(f,x)})},C&&(i[f]=C(i[f])))}function c(f,C){try{l(o[f](C))}catch(x){v(r[0][3],x)}}function l(f){f.value instanceof gn?Promise.resolve(f.value.v).then(u,d):v(r[0][2],f)}function u(f){c("next",f)}function d(f){c("throw",f)}function v(f,C){f(C),r.shift(),r.length&&c(r[0][0],r[0][1])}}function Dp(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof wp=="function"?wp(e):e[Symbol.iterator](),n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n);function o(r){n[r]=e[r]&&function(s){return new Promise(function(a,c){s=e[r](s),i(a,c,s.done,s.value)})}}function i(r,s,a,c){Promise.resolve(c).then(function(l){r({value:l,done:a})},s)}}var Lr=e=>e&&typeof e.length=="number"&&typeof e!="function";function jr(e){return k(e?.then)}function Jr(e){return k(e[oo])}function Vr(e){return Symbol.asyncIterator&&k(e?.[Symbol.asyncIterator])}function Hr(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function cb(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Br=cb();function Wr(e){return k(e?.[Br])}function Ur(e){return Ep(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:o,done:i}=yield gn(n.read());if(i)return yield gn(void 0);yield yield gn(o)}}finally{n.releaseLock()}})}function zr(e){return k(e?.getReader)}function ne(e){if(e instanceof B)return e;if(e!=null){if(Jr(e))return lb(e);if(Lr(e))return ub(e);if(jr(e))return db(e);if(Vr(e))return Ip(e);if(Wr(e))return pb(e);if(zr(e))return fb(e)}throw Hr(e)}function lb(e){return new B(t=>{let n=e[oo]();if(k(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ub(e){return new B(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function db(e){return new B(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,Or)})}function pb(e){return new B(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function Ip(e){return new B(t=>{hb(e,t).catch(n=>t.error(n))})}function fb(e){return Ip(Ur(e))}function hb(e,t){var n,o,i,r;return Sp(this,void 0,void 0,function*(){try{for(n=Dp(e);o=yield n.next(),!o.done;){let s=o.value;if(t.next(s),t.closed)return}}catch(s){i={error:s}}finally{try{o&&!o.done&&(r=n.return)&&(yield r.call(n))}finally{if(i)throw i.error}}t.complete()})}function Re(e,t,n,o=0,i=!1){let r=t.schedule(function(){n(),i?e.add(this.schedule(null,o)):this.unsubscribe()},o);if(e.add(r),!i)return r}function $r(e,t=0){return W((n,o)=>{n.subscribe(J(o,i=>Re(o,e,()=>o.next(i),t),()=>Re(o,e,()=>o.complete(),t),i=>Re(o,e,()=>o.error(i),t)))})}function Gr(e,t=0){return W((n,o)=>{o.add(e.schedule(()=>n.subscribe(o),t))})}function Mp(e,t){return ne(e).pipe(Gr(t),$r(t))}function Tp(e,t){return ne(e).pipe(Gr(t),$r(t))}function xp(e,t){return new B(n=>{let o=0;return t.schedule(function(){o===e.length?n.complete():(n.next(e[o++]),n.closed||this.schedule())})})}function Ap(e,t){return new B(n=>{let o;return Re(n,t,()=>{o=e[Br](),Re(n,t,()=>{let i,r;try{({value:i,done:r}=o.next())}catch(s){n.error(s);return}r?n.complete():n.next(i)},0,!0)}),()=>k(o?.return)&&o.return()})}function qr(e,t){if(!e)throw new Error("Iterable cannot be null");return new B(n=>{Re(n,t,()=>{let o=e[Symbol.asyncIterator]();Re(n,t,()=>{o.next().then(i=>{i.done?n.complete():n.next(i.value)})},0,!0)})})}function _p(e,t){return qr(Ur(e),t)}function kp(e,t){if(e!=null){if(Jr(e))return Mp(e,t);if(Lr(e))return xp(e,t);if(jr(e))return Tp(e,t);if(Vr(e))return qr(e,t);if(Wr(e))return Ap(e,t);if(zr(e))return _p(e,t)}throw Hr(e)}function Q(e,t){return t?kp(e,t):ne(e)}function M(...e){let t=Wt(e);return Q(e,t)}function so(e,t){let n=k(e)?e:()=>e,o=i=>i.error(n());return new B(t?i=>t.schedule(o,0,i):o)}function Tc(e){return!!e&&(e instanceof B||k(e.lift)&&k(e.subscribe))}var xt=Xn(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function V(e,t){return W((n,o)=>{let i=0;n.subscribe(J(o,r=>{o.next(e.call(t,r,i++))}))})}var{isArray:mb}=Array;function gb(e,t){return mb(t)?e(...t):e(t)}function Yr(e){return V(t=>gb(e,t))}var{isArray:vb}=Array,{getPrototypeOf:yb,prototype:bb,keys:Cb}=Object;function Kr(e){if(e.length===1){let t=e[0];if(vb(t))return{args:t,keys:null};if(wb(t)){let n=Cb(t);return{args:n.map(o=>t[o]),keys:n}}}return{args:e,keys:null}}function wb(e){return e&&typeof e=="object"&&yb(e)===bb}function Qr(e,t){return e.reduce((n,o,i)=>(n[o]=t[i],n),{})}function Qo(...e){let t=Wt(e),n=Fr(e),{args:o,keys:i}=Kr(e);if(o.length===0)return Q([],t);let r=new B(Sb(o,t,i?s=>Qr(i,s):je));return n?r.pipe(Yr(n)):r}function Sb(e,t,n=je){return o=>{Pp(t,()=>{let{length:i}=e,r=new Array(i),s=i,a=i;for(let c=0;c<i;c++)Pp(t,()=>{let l=Q(e[c],t),u=!1;l.subscribe(J(o,d=>{r[c]=d,u||(u=!0,a--),a||o.next(n(r.slice()))},()=>{--s||o.complete()}))},o)},o)}}function Pp(e,t,n){e?Re(n,e,t):t()}function Op(e,t,n,o,i,r,s,a){let c=[],l=0,u=0,d=!1,v=()=>{d&&!c.length&&!l&&t.complete()},f=x=>l<o?C(x):c.push(x),C=x=>{r&&t.next(x),l++;let U=!1;ne(n(x,u++)).subscribe(J(t,H=>{i?.(H),r?f(H):t.next(H)},()=>{U=!0},void 0,()=>{if(U)try{for(l--;c.length&&l<o;){let H=c.shift();s?Re(t,s,()=>C(H)):C(H)}v()}catch(H){t.error(H)}}))};return e.subscribe(J(t,f,()=>{d=!0,v()})),()=>{a?.()}}function X(e,t,n=1/0){return k(t)?X((o,i)=>V((r,s)=>t(o,r,i,s))(ne(e(o,i))),n):(typeof t=="number"&&(n=t),W((o,i)=>Op(o,i,e,n)))}function ao(e=1/0){return X(je,e)}function Rp(){return ao(1)}function co(...e){return Rp()(Q(e,Wt(e)))}function Zo(e){return new B(t=>{ne(e()).subscribe(t)})}function xc(...e){let t=Fr(e),{args:n,keys:o}=Kr(e),i=new B(r=>{let{length:s}=n;if(!s){r.complete();return}let a=new Array(s),c=s,l=s;for(let u=0;u<s;u++){let d=!1;ne(n[u]).subscribe(J(r,v=>{d||(d=!0,l--),a[u]=v},()=>c--,void 0,()=>{(!c||!d)&&(l||r.next(o?Qr(o,a):a),r.complete())}))}});return t?i.pipe(Yr(t)):i}function Ne(e,t){return W((n,o)=>{let i=0;n.subscribe(J(o,r=>e.call(t,r,i++)&&o.next(r)))})}function At(e){return W((t,n)=>{let o=null,i=!1,r;o=t.subscribe(J(n,void 0,void 0,s=>{r=ne(e(s,At(e)(t))),o?(o.unsubscribe(),o=null,r.subscribe(n)):i=!0})),i&&(o.unsubscribe(),o=null,r.subscribe(n))})}function Np(e,t,n,o,i){return(r,s)=>{let a=n,c=t,l=0;r.subscribe(J(s,u=>{let d=l++;c=a?e(c,u,d):(a=!0,u),o&&s.next(c)},i&&(()=>{a&&s.next(c),s.complete()})))}}function Ut(e,t){return k(t)?X(e,t,1):X(e,1)}function zt(e){return W((t,n)=>{let o=!1;t.subscribe(J(n,i=>{o=!0,n.next(i)},()=>{o||n.next(e),n.complete()}))})}function _t(e){return e<=0?()=>Oe:W((t,n)=>{let o=0;t.subscribe(J(n,i=>{++o<=e&&(n.next(i),e<=o&&n.complete())}))})}function Zr(e=Eb){return W((t,n)=>{let o=!1;t.subscribe(J(n,i=>{o=!0,n.next(i)},()=>o?n.complete():n.error(e())))})}function Eb(){return new xt}function Xo(e){return W((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function kt(e,t){let n=arguments.length>=2;return o=>o.pipe(e?Ne((i,r)=>e(i,r,o)):je,_t(1),n?zt(t):Zr(()=>new xt))}function lo(e){return e<=0?()=>Oe:W((t,n)=>{let o=[];t.subscribe(J(n,i=>{o.push(i),e<o.length&&o.shift()},()=>{for(let i of o)n.next(i);n.complete()},void 0,()=>{o=null}))})}function Ac(e,t){let n=arguments.length>=2;return o=>o.pipe(e?Ne((i,r)=>e(i,r,o)):je,lo(1),n?zt(t):Zr(()=>new xt))}function _c(e,t){return W(Np(e,t,arguments.length>=2,!0))}function kc(...e){let t=Wt(e);return W((n,o)=>{(t?co(e,n,t):co(e,n)).subscribe(o)})}function De(e,t){return W((n,o)=>{let i=null,r=0,s=!1,a=()=>s&&!i&&o.complete();n.subscribe(J(o,c=>{i?.unsubscribe();let l=0,u=r++;ne(e(c,u)).subscribe(i=J(o,d=>o.next(t?t(c,d,u,l++):d),()=>{i=null,a()}))},()=>{s=!0,a()}))})}function Xr(e){return W((t,n)=>{ne(e).subscribe(J(n,()=>n.complete(),Ko)),!n.closed&&t.subscribe(n)})}function ue(e,t,n){let o=k(e)||t||n?{next:e,error:t,complete:n}:e;return o?W((i,r)=>{var s;(s=o.subscribe)===null||s===void 0||s.call(o);let a=!0;i.subscribe(J(r,c=>{var l;(l=o.next)===null||l===void 0||l.call(o,c),r.next(c)},()=>{var c;a=!1,(c=o.complete)===null||c===void 0||c.call(o),r.complete()},c=>{var l;a=!1,(l=o.error)===null||l===void 0||l.call(o,c),r.error(c)},()=>{var c,l;a&&((c=o.unsubscribe)===null||c===void 0||c.call(o)),(l=o.finalize)===null||l===void 0||l.call(o)}))}):je}function Fp(e){let t=N(null);try{return e()}finally{N(t)}}var os="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",w=class extends Error{code;constructor(t,n){super(Yt(t,n)),this.code=t}};function Db(e){return`NG0${Math.abs(e)}`}function Yt(e,t){return`${Db(e)}${t?": "+t:""}`}var Te=globalThis;function G(e){for(let t in e)if(e[t]===G)return t;throw Error("")}function Jp(e,t){for(let n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function Ot(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map(Ot).join(", ")}]`;if(e==null)return""+e;let t=e.overriddenName||e.name;if(t)return`${t}`;let n=e.toString();if(n==null)return""+n;let o=n.indexOf(`
`);return o>=0?n.slice(0,o):n}function is(e,t){return e?t?`${e} ${t}`:e:t||""}var Ib=G({__forward_ref__:G});function wn(e){return e.__forward_ref__=wn,e.toString=function(){return Ot(this())},e}function pe(e){return Wc(e)?e():e}function Wc(e){return typeof e=="function"&&e.hasOwnProperty(Ib)&&e.__forward_ref__===wn}function E(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function he(e){return{providers:e.providers||[],imports:e.imports||[]}}function oi(e){return Mb(e,rs)}function Uc(e){return oi(e)!==null}function Mb(e,t){return e.hasOwnProperty(t)&&e[t]||null}function Tb(e){let t=e?.[rs]??null;return t||null}function Oc(e){return e&&e.hasOwnProperty(ts)?e[ts]:null}var rs=G({\u0275prov:G}),ts=G({\u0275inj:G}),D=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(t,n){this._desc=t,this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=E({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function zc(e){return e&&!!e.\u0275providers}var $c=G({\u0275cmp:G}),Gc=G({\u0275dir:G}),qc=G({\u0275pipe:G}),Yc=G({\u0275mod:G}),ti=G({\u0275fac:G}),Sn=G({__NG_ELEMENT_ID__:G}),Lp=G({__NG_ENV_ID__:G});function Kt(e){return typeof e=="string"?e:e==null?"":String(e)}function Vp(e){return typeof e=="function"?e.name||e.toString():typeof e=="object"&&e!=null&&typeof e.type=="function"?e.type.name||e.type.toString():Kt(e)}var Hp=G({ngErrorCode:G}),xb=G({ngErrorMessage:G}),Ab=G({ngTokenPath:G});function Kc(e,t){return Bp("",-200,t)}function ss(e,t){throw new w(-201,!1)}function Bp(e,t,n){let o=new w(t,e);return o[Hp]=t,o[xb]=e,n&&(o[Ab]=n),o}function _b(e){return e[Hp]}var Rc;function Wp(){return Rc}function Ie(e){let t=Rc;return Rc=e,t}function Qc(e,t,n){let o=oi(e);if(o&&o.providedIn=="root")return o.value===void 0?o.value=o.factory():o.value;if(n&8)return null;if(t!==void 0)return t;ss(e,"Injector")}var kb={},vn=kb,Pb="__NG_DI_FLAG__",Nc=class{injector;constructor(t){this.injector=t}retrieve(t,n){let o=yn(n)||0;try{return this.injector.get(t,o&8?null:vn,o)}catch(i){if(Gn(i))return i;throw i}}};function Ob(e,t=0){let n=Cr();if(n===void 0)throw new w(-203,!1);if(n===null)return Qc(e,void 0,t);{let o=Rb(t),i=n.retrieve(e,o);if(Gn(i)){if(o.optional)return null;throw i}return i}}function I(e,t=0){return(Wp()||Ob)(pe(e),t)}function y(e,t){return I(e,yn(t))}function yn(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Rb(e){return{optional:!!(e&8),host:!!(e&1),self:!!(e&2),skipSelf:!!(e&4)}}function Fc(e){let t=[];for(let n=0;n<e.length;n++){let o=pe(e[n]);if(Array.isArray(o)){if(o.length===0)throw new w(900,!1);let i,r=0;for(let s=0;s<o.length;s++){let a=o[s],c=Nb(a);typeof c=="number"?c===-1?i=a.token:r|=c:i=a}t.push(I(i,r))}else t.push(I(o))}return t}function Nb(e){return e[Pb]}function $t(e,t){let n=e.hasOwnProperty(ti);return n?e[ti]:null}function as(e,t){e.forEach(n=>Array.isArray(n)?as(n,t):t(n))}function Zc(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function ii(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function Up(e,t,n,o){let i=e.length;if(i==t)e.push(n,o);else if(i===1)e.push(o,e[0]),e[0]=n;else{for(i--,e.push(e[i-1],e[i]);i>t;){let r=i-2;e[i]=e[r],i--}e[t]=n,e[t+1]=o}}function cs(e,t,n){let o=po(e,t);return o>=0?e[o|1]=n:(o=~o,Up(e,o,t,n)),o}function ls(e,t){let n=po(e,t);if(n>=0)return e[n|1]}function po(e,t){return Fb(e,t,1)}function Fb(e,t,n){let o=0,i=e.length>>n;for(;i!==o;){let r=o+(i-o>>1),s=e[r<<n];if(t===s)return r<<n;s>t?i=r:o=r+1}return~(i<<n)}var Qt={},Me=[],Zt=new D(""),Xc=new D("",-1),el=new D(""),ni=class{get(t,n=vn){if(n===vn){let i=Bp("",-201);throw i.name="\u0275NotFound",i}return n}};function tl(e){return e[Yc]||null}function Rt(e){return e[$c]||null}function nl(e){return e[Gc]||null}function zp(e){return e[qc]||null}function us(e){return{\u0275providers:e}}function $p(...e){return{\u0275providers:ol(!0,e),\u0275fromNgModule:!0}}function ol(e,...t){let n=[],o=new Set,i,r=s=>{n.push(s)};return as(t,s=>{let a=s;ns(a,r,[],o)&&(i||=[],i.push(a))}),i!==void 0&&Gp(i,r),n}function Gp(e,t){for(let n=0;n<e.length;n++){let{ngModule:o,providers:i}=e[n];il(i,r=>{t(r,o)})}}function ns(e,t,n,o){if(e=pe(e),!e)return!1;let i=null,r=Oc(e),s=!r&&Rt(e);if(!r&&!s){let c=e.ngModule;if(r=Oc(c),r)i=c;else return!1}else{if(s&&!s.standalone)return!1;i=e}let a=o.has(i);if(s){if(a)return!1;if(o.add(i),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)ns(l,t,n,o)}}else if(r){if(r.imports!=null&&!a){o.add(i);let l;try{as(r.imports,u=>{ns(u,t,n,o)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Gp(l,t)}if(!a){let l=$t(i)||(()=>new i);t({provide:i,useFactory:l,deps:Me},i),t({provide:el,useValue:i,multi:!0},i),t({provide:Zt,useValue:()=>I(i),multi:!0},i)}let c=r.providers;if(c!=null&&!a){let l=e;il(c,u=>{t(u,l)})}}else return!1;return i!==e&&e.providers!==void 0}function il(e,t){for(let n of e)zc(n)&&(n=n.\u0275providers),Array.isArray(n)?il(n,t):t(n)}var Lb=G({provide:String,useValue:G});function qp(e){return e!==null&&typeof e=="object"&&Lb in e}function jb(e){return!!(e&&e.useExisting)}function Jb(e){return!!(e&&e.useFactory)}function bn(e){return typeof e=="function"}function Yp(e){return!!e.useClass}var ri=new D(""),es={},jp={},Pc;function si(){return Pc===void 0&&(Pc=new ni),Pc}var re=class{},Cn=class extends re{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,n,o,i){super(),this.parent=n,this.source=o,this.scopes=i,jc(t,s=>this.processProvider(s)),this.records.set(Xc,uo(void 0,this)),i.has("environment")&&this.records.set(re,uo(void 0,this));let r=this.records.get(ri);r!=null&&typeof r.value=="string"&&this.scopes.add(r.value),this.injectorDefTypes=new Set(this.get(el,Me,{self:!0}))}retrieve(t,n){let o=yn(n)||0;try{return this.get(t,vn,o)}catch(i){if(Gn(i))return i;throw i}}destroy(){ei(this),this._destroyed=!0;let t=N(null);try{for(let o of this._ngOnDestroyHooks)o.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let o of n)o()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),N(t)}}onDestroy(t){return ei(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){ei(this);let n=pt(this),o=Ie(void 0),i;try{return t()}finally{pt(n),Ie(o)}}get(t,n=vn,o){if(ei(this),t.hasOwnProperty(Lp))return t[Lp](this);let i=yn(o),r,s=pt(this),a=Ie(void 0);try{if(!(i&4)){let l=this.records.get(t);if(l===void 0){let u=Ub(t)&&oi(t);u&&this.injectableDefInScope(u)?l=uo(Lc(t),es):l=null,this.records.set(t,l)}if(l!=null)return this.hydrate(t,l,i)}let c=i&2?si():this.parent;return n=i&8&&n===vn?null:n,c.get(t,n)}catch(c){let l=_b(c);throw l===-200||l===-201?new w(l,null):c}finally{Ie(a),pt(s)}}resolveInjectorInitializers(){let t=N(null),n=pt(this),o=Ie(void 0),i;try{let r=this.get(Zt,Me,{self:!0});for(let s of r)s()}finally{pt(n),Ie(o),N(t)}}toString(){let t=[],n=this.records;for(let o of n.keys())t.push(Ot(o));return`R3Injector[${t.join(", ")}]`}processProvider(t){t=pe(t);let n=bn(t)?t:pe(t&&t.provide),o=Hb(t);if(!bn(t)&&t.multi===!0){let i=this.records.get(n);i||(i=uo(void 0,es,!0),i.factory=()=>Fc(i.multi),this.records.set(n,i)),n=t,i.multi.push(t)}this.records.set(n,o)}hydrate(t,n,o){let i=N(null);try{if(n.value===jp)throw Kc(Ot(t));return n.value===es&&(n.value=jp,n.value=n.factory(void 0,o)),typeof n.value=="object"&&n.value&&Wb(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{N(i)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=pe(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function Lc(e){let t=oi(e),n=t!==null?t.factory:$t(e);if(n!==null)return n;if(e instanceof D)throw new w(204,!1);if(e instanceof Function)return Vb(e);throw new w(204,!1)}function Vb(e){if(e.length>0)throw new w(204,!1);let n=Tb(e);return n!==null?()=>n.factory(e):()=>new e}function Hb(e){if(qp(e))return uo(void 0,e.useValue);{let t=rl(e);return uo(t,es)}}function rl(e,t,n){let o;if(bn(e)){let i=pe(e);return $t(i)||Lc(i)}else if(qp(e))o=()=>pe(e.useValue);else if(Jb(e))o=()=>e.useFactory(...Fc(e.deps||[]));else if(jb(e))o=(i,r)=>I(pe(e.useExisting),r!==void 0&&r&8?8:void 0);else{let i=pe(e&&(e.useClass||e.provide));if(Bb(e))o=()=>new i(...Fc(e.deps));else return $t(i)||Lc(i)}return o}function ei(e){if(e.destroyed)throw new w(205,!1)}function uo(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Bb(e){return!!e.deps}function Wb(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function Ub(e){return typeof e=="function"||typeof e=="object"&&e.ngMetadataName==="InjectionToken"}function jc(e,t){for(let n of e)Array.isArray(n)?jc(n,t):n&&zc(n)?jc(n.\u0275providers,t):t(n)}function be(e,t){let n;e instanceof Cn?(ei(e),n=e):n=new Nc(e);let o,i=pt(n),r=Ie(void 0);try{return t()}finally{pt(i),Ie(r)}}function sl(){return Wp()!==void 0||Cr()!=null}var tt=0,R=1,A=2,fe=3,Ge=4,qe=5,ai=6,fo=7,Ce=8,Xt=9,ft=10,Z=11,ho=12,al=13,En=14,Ye=15,Dn=16,In=17,Mn=18,ci=19,cl=20,Pt=21,ds=22,li=23,Je=24,Tn=25,ui=26,xe=27,Kp=1;var en=7,di=8,pi=9,Fe=10;function ht(e){return Array.isArray(e)&&typeof e[Kp]=="object"}function nt(e){return Array.isArray(e)&&e[Kp]===!0}function ll(e){return(e.flags&4)!==0}function tn(e){return e.componentOffset>-1}function fi(e){return(e.flags&1)===1}function mt(e){return!!e.template}function mo(e){return(e[A]&512)!==0}function xn(e){return(e[A]&256)===256}var Qp="svg",Zp="math";function Ke(e){for(;Array.isArray(e);)e=e[tt];return e}function ul(e,t){return Ke(t[e])}function ot(e,t){return Ke(t[e.index])}function ps(e,t){return e.data[t]}function Xp(e,t){return e[t]}function dl(e,t,n,o){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=o}function Qe(e,t){let n=t[e];return ht(n)?n:n[tt]}function fs(e){return(e[A]&128)===128}function ef(e){return nt(e[fe])}function hi(e,t){return t==null?null:e[t]}function pl(e){e[In]=0}function fl(e){e[A]&1024||(e[A]|=1024,fs(e)&&go(e))}function tf(e,t){for(;e>0;)t=t[En],e--;return t}function mi(e){return!!(e[A]&9216||e[Je]?.dirty)}function hs(e){e[ft].changeDetectionScheduler?.notify(8),e[A]&64&&(e[A]|=1024),mi(e)&&go(e)}function go(e){e[ft].changeDetectionScheduler?.notify(0);let t=Gt(e);for(;t!==null&&!(t[A]&8192||(t[A]|=8192,!fs(t)));)t=Gt(t)}function hl(e,t){if(xn(e))throw new w(911,!1);e[Pt]===null&&(e[Pt]=[]),e[Pt].push(t)}function nf(e,t){if(e[Pt]===null)return;let n=e[Pt].indexOf(t);n!==-1&&e[Pt].splice(n,1)}function Gt(e){let t=e[fe];return nt(t)?t[fe]:t}function of(e){return e[fo]??=[]}function rf(e){return e.cleanup??=[]}var L={lFrame:Sf(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Jc=!1;function sf(){return L.lFrame.elementDepthCount}function af(){L.lFrame.elementDepthCount++}function cf(){L.lFrame.elementDepthCount--}function ml(){return L.bindingsEnabled}function lf(){return L.skipHydrationRootTNode!==null}function uf(e){return L.skipHydrationRootTNode===e}function df(){L.skipHydrationRootTNode=null}function z(){return L.lFrame.lView}function Ae(){return L.lFrame.tView}function it(e){return L.lFrame.contextLView=e,e[Ce]}function rt(e){return L.lFrame.contextLView=null,e}function we(){let e=gl();for(;e!==null&&e.type===64;)e=e.parent;return e}function gl(){return L.lFrame.currentTNode}function pf(){let e=L.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function vo(e,t){let n=L.lFrame;n.currentTNode=e,n.isParent=t}function vl(){return L.lFrame.isParent}function ff(){L.lFrame.isParent=!1}function yl(){return Jc}function bl(e){let t=Jc;return Jc=e,t}function hf(){let e=L.lFrame,t=e.bindingRootIndex;return t===-1&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function mf(){return L.lFrame.bindingIndex}function gf(e){return L.lFrame.bindingIndex=e}function gi(){return L.lFrame.bindingIndex++}function ms(e){let t=L.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function vf(){return L.lFrame.inI18n}function yf(e,t){let n=L.lFrame;n.bindingIndex=n.bindingRootIndex=e,gs(t)}function bf(){return L.lFrame.currentDirectiveIndex}function gs(e){L.lFrame.currentDirectiveIndex=e}function Cf(e){let t=L.lFrame.currentDirectiveIndex;return t===-1?null:e[t]}function Cl(e){L.lFrame.currentQueryIndex=e}function zb(e){let t=e[R];return t.type===2?t.declTNode:t.type===1?e[qe]:null}function wl(e,t,n){if(n&4){let i=t,r=e;for(;i=i.parent,i===null&&!(n&1);)if(i=zb(r),i===null||(r=r[En],i.type&10))break;if(i===null)return!1;t=i,e=r}let o=L.lFrame=wf();return o.currentTNode=t,o.lView=e,!0}function vs(e){let t=wf(),n=e[R];L.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function wf(){let e=L.lFrame,t=e===null?null:e.child;return t===null?Sf(e):t}function Sf(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function Ef(){let e=L.lFrame;return L.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var Sl=Ef;function ys(){let e=Ef();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Df(e){return(L.lFrame.contextLView=tf(e,L.lFrame.contextLView))[Ce]}function Nt(){return L.lFrame.selectedIndex}function nn(e){L.lFrame.selectedIndex=e}function bs(){let e=L.lFrame;return ps(e.tView,e.selectedIndex)}function If(){return L.lFrame.currentNamespace}var Mf=!0;function Cs(){return Mf}function ws(e){Mf=e}function Vc(e,t=null,n=null,o){let i=El(e,t,n,o);return i.resolveInjectorInitializers(),i}function El(e,t=null,n=null,o,i=new Set){let r=[n||Me,$p(e)];return o=o||(typeof e=="object"?void 0:Ot(e)),new Cn(r,t||si(),o||null,i)}var ye=class e{static THROW_IF_NOT_FOUND=vn;static NULL=new ni;static create(t,n){if(Array.isArray(t))return Vc({name:""},n,t,"");{let o=t.name??"";return Vc({name:o},t.parent,t.providers,o)}}static \u0275prov=E({token:e,providedIn:"any",factory:()=>I(Xc)});static __NG_ELEMENT_ID__=-1},oe=new D(""),gt=(()=>{class e{static __NG_ELEMENT_ID__=$b;static __NG_ENV_ID__=n=>n}return e})(),Hc=class extends gt{_lView;constructor(t){super(),this._lView=t}get destroyed(){return xn(this._lView)}onDestroy(t){let n=this._lView;return hl(n,t),()=>nf(n,t)}};function $b(){return new Hc(z())}var et=class{_console=console;handleError(t){this._console.error("ERROR",t)}},Ve=new D("",{providedIn:"root",factory:()=>{let e=y(re),t;return n=>{e.destroyed&&!t?setTimeout(()=>{throw n}):(t??=e.get(et),t.handleError(n))}}}),Tf={provide:Zt,useValue:()=>void y(et),multi:!0};function Dl(e){return typeof e=="function"&&e[ve]!==void 0}function vt(e,t){let[n,o,i]=gc(e,t?.equal),r=n,s=r[ve];return r.set=o,r.update=i,r.asReadonly=xf.bind(r),r}function xf(){let e=this[ve];if(e.readonlyFn===void 0){let t=()=>this();t[ve]=e,e.readonlyFn=t}return e.readonlyFn}function Il(e){return Dl(e)&&typeof e.set=="function"}var Ss=(()=>{class e{view;node;constructor(n,o){this.view=n,this.node=o}static __NG_ELEMENT_ID__=Gb}return e})();function Gb(){return new Ss(z(),we())}var qt=class{},Es=new D("",{providedIn:"root",factory:()=>!1});var Ml=new D(""),Tl=new D(""),Ft=(()=>{class e{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new de(!1);get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new B(n=>{n.next(!1),n.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=E({token:e,providedIn:"root",factory:()=>new e})}return e})();function vi(...e){}var xl=(()=>{class e{static \u0275prov=E({token:e,providedIn:"root",factory:()=>new Bc})}return e})(),Bc=class{dirtyEffectCount=0;queues=new Map;add(t){this.enqueue(t),this.schedule(t)}schedule(t){t.dirty&&this.dirtyEffectCount++}remove(t){let n=t.zone,o=this.queues.get(n);o.has(t)&&(o.delete(t),t.dirty&&this.dirtyEffectCount--)}enqueue(t){let n=t.zone;this.queues.has(n)||this.queues.set(n,new Set);let o=this.queues.get(n);o.has(t)||o.add(t)}flush(){for(;this.dirtyEffectCount>0;){let t=!1;for(let[n,o]of this.queues)n===null?t||=this.flushQueue(o):t||=n.run(()=>this.flushQueue(o));t||(this.dirtyEffectCount=0)}}flushQueue(t){let n=!1;for(let o of t)o.dirty&&(this.dirtyEffectCount--,n=!0,o.run());return n}};function Mi(e){return{toString:e}.toString()}function uh(e){let t=Te.ng;if(t&&t.\u0275compilerFacade)return t.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function nC(e){return typeof e=="function"}var Ps=class{previousValue;currentValue;firstChange;constructor(t,n,o){this.previousValue=t,this.currentValue=n,this.firstChange=o}isFirstChange(){return this.firstChange}};function dh(e,t,n,o){t!==null?t.applyValueToInputSignal(t,o):e[n]=o}var rn=(()=>{let e=()=>ph;return e.ngInherit=!0,e})();function ph(e){return e.type.prototype.ngOnChanges&&(e.setInput=iC),oC}function oC(){let e=hh(this),t=e?.current;if(t){let n=e.previous;if(n===Qt)e.previous=t;else for(let o in t)n[o]=t[o];e.current=null,this.ngOnChanges(t)}}function iC(e,t,n,o,i){let r=this.declaredInputs[o],s=hh(e)||rC(e,{previous:Qt,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[r];a[r]=new Ps(l&&l.currentValue,n,c===Qt),dh(e,t,i,n)}var fh="__ngSimpleChanges__";function hh(e){return e[fh]||null}function rC(e,t){return e[fh]=t}var Af=[];var Y=function(e,t=null,n){for(let o=0;o<Af.length;o++){let i=Af[o];i(e,t,n)}};function sC(e,t,n){let{ngOnChanges:o,ngOnInit:i,ngDoCheck:r}=t.type.prototype;if(o){let s=ph(t);(n.preOrderHooks??=[]).push(e,s),(n.preOrderCheckHooks??=[]).push(e,s)}i&&(n.preOrderHooks??=[]).push(0-e,i),r&&((n.preOrderHooks??=[]).push(e,r),(n.preOrderCheckHooks??=[]).push(e,r))}function mh(e,t){for(let n=t.directiveStart,o=t.directiveEnd;n<o;n++){let r=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=r;s&&(e.contentHooks??=[]).push(-n,s),a&&((e.contentHooks??=[]).push(n,a),(e.contentCheckHooks??=[]).push(n,a)),c&&(e.viewHooks??=[]).push(-n,c),l&&((e.viewHooks??=[]).push(n,l),(e.viewCheckHooks??=[]).push(n,l)),u!=null&&(e.destroyHooks??=[]).push(n,u)}}function As(e,t,n){gh(e,t,3,n)}function _s(e,t,n,o){(e[A]&3)===n&&gh(e,t,n,o)}function Al(e,t){let n=e[A];(n&3)===t&&(n&=16383,n+=1,e[A]=n)}function gh(e,t,n,o){let i=o!==void 0?e[In]&65535:0,r=o??-1,s=t.length-1,a=0;for(let c=i;c<s;c++)if(typeof t[c+1]=="number"){if(a=t[c],o!=null&&a>=o)break}else t[c]<0&&(e[In]+=65536),(a<r||r==-1)&&(aC(e,n,t,c),e[In]=(e[In]&4294901760)+c+2),c++}function _f(e,t){Y(4,e,t);let n=N(null);try{t.call(e)}finally{N(n),Y(5,e,t)}}function aC(e,t,n,o){let i=n[o]<0,r=n[o+1],s=i?-n[o]:n[o],a=e[s];i?e[A]>>14<e[In]>>16&&(e[A]&3)===t&&(e[A]+=16384,_f(a,r)):_f(a,r)}var bo=-1,_n=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,n,o,i){this.factory=t,this.name=i,this.canSeeViewProviders=n,this.injectImpl=o}};function cC(e){return(e.flags&8)!==0}function lC(e){return(e.flags&16)!==0}function uC(e,t,n){let o=0;for(;o<n.length;){let i=n[o];if(typeof i=="number"){if(i!==0)break;o++;let r=n[o++],s=n[o++],a=n[o++];e.setAttribute(t,s,a,r)}else{let r=i,s=n[++o];dC(r)?e.setProperty(t,r,s):e.setAttribute(t,r,s),o++}}return o}function vh(e){return e===3||e===4||e===6}function dC(e){return e.charCodeAt(0)===64}function Ci(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let o=0;o<t.length;o++){let i=t[o];typeof i=="number"?n=i:n===0||(n===-1||n===2?kf(e,n,i,null,t[++o]):kf(e,n,i,null,null))}}return e}function kf(e,t,n,o,i){let r=0,s=e.length;if(t===-1)s=-1;else for(;r<e.length;){let a=e[r++];if(typeof a=="number"){if(a===t){s=-1;break}else if(a>t){s=r-1;break}}}for(;r<e.length;){let a=e[r];if(typeof a=="number")break;if(a===n){i!==null&&(e[r+1]=i);return}r++,i!==null&&r++}s!==-1&&(e.splice(s,0,t),r=s+1),e.splice(r++,0,n),i!==null&&e.splice(r++,0,i)}function yh(e){return e!==bo}function Os(e){return e&32767}function pC(e){return e>>16}function Rs(e,t){let n=pC(e),o=t;for(;n>0;)o=o[En],n--;return o}var Jl=!0;function Ns(e){let t=Jl;return Jl=e,t}var fC=256,bh=fC-1,Ch=5,hC=0,yt={};function mC(e,t,n){let o;typeof n=="string"?o=n.charCodeAt(0)||0:n.hasOwnProperty(Sn)&&(o=n[Sn]),o==null&&(o=n[Sn]=hC++);let i=o&bh,r=1<<i;t.data[e+(i>>Ch)]|=r}function Fs(e,t){let n=wh(e,t);if(n!==-1)return n;let o=t[R];o.firstCreatePass&&(e.injectorIndex=t.length,_l(o.data,e),_l(t,null),_l(o.blueprint,null));let i=cu(e,t),r=e.injectorIndex;if(yh(i)){let s=Os(i),a=Rs(i,t),c=a[R].data;for(let l=0;l<8;l++)t[r+l]=a[s+l]|c[s+l]}return t[r+8]=i,r}function _l(e,t){e.push(0,0,0,0,0,0,0,0,t)}function wh(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function cu(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,o=null,i=t;for(;i!==null;){if(o=Mh(i),o===null)return bo;if(n++,i=i[En],o.injectorIndex!==-1)return o.injectorIndex|n<<16}return bo}function Vl(e,t,n){mC(e,t,n)}function gC(e,t){if(t==="class")return e.classes;if(t==="style")return e.styles;let n=e.attrs;if(n){let o=n.length,i=0;for(;i<o;){let r=n[i];if(vh(r))break;if(r===0)i=i+2;else if(typeof r=="number")for(i++;i<o&&typeof n[i]=="string";)i++;else{if(r===t)return n[i+1];i=i+2}}}return null}function Sh(e,t,n){if(n&8||e!==void 0)return e;ss(t,"NodeInjector")}function Eh(e,t,n,o){if(n&8&&o===void 0&&(o=null),(n&3)===0){let i=e[Xt],r=Ie(void 0);try{return i?i.get(t,o,n&8):Qc(t,o,n&8)}finally{Ie(r)}}return Sh(o,t,n)}function Dh(e,t,n,o=0,i){if(e!==null){if(t[A]&2048&&!(o&2)){let s=wC(e,t,n,o,yt);if(s!==yt)return s}let r=Ih(e,t,n,o,yt);if(r!==yt)return r}return Eh(t,n,o,i)}function Ih(e,t,n,o,i){let r=bC(n);if(typeof r=="function"){if(!wl(t,e,o))return o&1?Sh(i,n,o):Eh(t,n,o,i);try{let s;if(s=r(o),s==null&&!(o&8))ss(n);else return s}finally{Sl()}}else if(typeof r=="number"){let s=null,a=wh(e,t),c=bo,l=o&1?t[Ye][qe]:null;for((a===-1||o&4)&&(c=a===-1?cu(e,t):t[a+8],c===bo||!Of(o,!1)?a=-1:(s=t[R],a=Os(c),t=Rs(c,t)));a!==-1;){let u=t[R];if(Pf(r,a,u.data)){let d=vC(a,t,n,s,o,l);if(d!==yt)return d}c=t[a+8],c!==bo&&Of(o,t[R].data[a+8]===l)&&Pf(r,a,t)?(s=u,a=Os(c),t=Rs(c,t)):a=-1}}return i}function vC(e,t,n,o,i,r){let s=t[R],a=s.data[e+8],c=o==null?tn(a)&&Jl:o!=s&&(a.type&3)!==0,l=i&1&&r===a,u=yC(a,s,n,c,l);return u!==null?Ls(t,s,u,a,i):yt}function yC(e,t,n,o,i){let r=e.providerIndexes,s=t.data,a=r&1048575,c=e.directiveStart,l=e.directiveEnd,u=r>>20,d=o?a:a+u,v=i?a+u:l;for(let f=d;f<v;f++){let C=s[f];if(f<c&&n===C||f>=c&&C.type===n)return f}if(i){let f=s[c];if(f&&mt(f)&&f.type===n)return c}return null}function Ls(e,t,n,o,i){let r=e[n],s=t.data;if(r instanceof _n){let a=r;if(a.resolving){let f=Vp(s[n]);throw Kc(f)}let c=Ns(a.canSeeViewProviders);a.resolving=!0;let l=s[n].type||s[n],u,d=a.injectImpl?Ie(a.injectImpl):null,v=wl(e,o,0);try{r=e[n]=a.factory(void 0,i,s,e,o),t.firstCreatePass&&n>=o.directiveStart&&sC(n,s[n],t)}finally{d!==null&&Ie(d),Ns(c),a.resolving=!1,Sl()}}return r}function bC(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=e.hasOwnProperty(Sn)?e[Sn]:void 0;return typeof t=="number"?t>=0?t&bh:CC:t}function Pf(e,t,n){let o=1<<e;return!!(n[t+(e>>Ch)]&o)}function Of(e,t){return!(e&2)&&!(e&1&&t)}var An=class{_tNode;_lView;constructor(t,n){this._tNode=t,this._lView=n}get(t,n,o){return Dh(this._tNode,this._lView,t,yn(o),n)}};function CC(){return new An(we(),z())}function Eo(e){return Mi(()=>{let t=e.prototype.constructor,n=t[ti]||Hl(t),o=Object.prototype,i=Object.getPrototypeOf(e.prototype).constructor;for(;i&&i!==o;){let r=i[ti]||Hl(i);if(r&&r!==n)return r;i=Object.getPrototypeOf(i)}return r=>new r})}function Hl(e){return Wc(e)?()=>{let t=Hl(pe(e));return t&&t()}:$t(e)}function wC(e,t,n,o,i){let r=e,s=t;for(;r!==null&&s!==null&&s[A]&2048&&!mo(s);){let a=Ih(r,s,n,o|2,yt);if(a!==yt)return a;let c=r.parent;if(!c){let l=s[cl];if(l){let u=l.get(n,yt,o);if(u!==yt)return u}c=Mh(s),s=s[En]}r=c}return i}function Mh(e){let t=e[R],n=t.type;return n===2?t.declTNode:n===1?e[qe]:null}function Ti(e){return gC(we(),e)}function SC(){return qs(we(),z())}function qs(e,t){return new Ct(ot(e,t))}var Ct=(()=>{class e{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=SC}return e})();function Th(e){return(e.flags&128)===128}var lu=(function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e})(lu||{}),xh=new Map,EC=0;function DC(){return EC++}function IC(e){xh.set(e[ci],e)}function Bl(e){xh.delete(e[ci])}var Rf="__ngContext__";function Co(e,t){ht(t)?(e[Rf]=t[ci],IC(t)):e[Rf]=t}function Ah(e){return kh(e[ho])}function _h(e){return kh(e[Ge])}function kh(e){for(;e!==null&&!nt(e);)e=e[Ge];return e}var Wl;function uu(e){Wl=e}function du(){if(Wl!==void 0)return Wl;if(typeof document<"u")return document;throw new w(210,!1)}var Ys=new D("",{providedIn:"root",factory:()=>MC}),MC="ng",Ks=new D(""),xi=new D("",{providedIn:"platform",factory:()=>"unknown"});var Qs=new D("",{providedIn:"root",factory:()=>du().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var TC="h",xC="b";var Ph=!1,Oh=new D("",{providedIn:"root",factory:()=>Ph});var pu=new D("");var AC=(e,t,n,o)=>{};function _C(e,t,n,o){AC(e,t,n,o)}function fu(e){return(e.flags&32)===32}var kC=()=>null;function Rh(e,t,n=!1){return kC(e,t,n)}function Nh(e,t){let n=e.contentQueries;if(n!==null){let o=N(null);try{for(let i=0;i<n.length;i+=2){let r=n[i],s=n[i+1];if(s!==-1){let a=e.data[s];Cl(r),a.contentQueries(2,t[s],s)}}}finally{N(o)}}}function Ul(e,t,n){Cl(0);let o=N(null);try{t(e,n)}finally{N(o)}}function Fh(e,t,n){if(ll(t)){let o=N(null);try{let i=t.directiveStart,r=t.directiveEnd;for(let s=i;s<r;s++){let a=e.data[s];if(a.contentQueries){let c=n[s];a.contentQueries(1,c,s)}}}finally{N(o)}}}var Lt=(function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e})(Lt||{});var Ds;function PC(){if(Ds===void 0&&(Ds=null,Te.trustedTypes))try{Ds=Te.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return Ds}function Zs(e){return PC()?.createHTML(e)||e}var Is;function Lh(){if(Is===void 0&&(Is=null,Te.trustedTypes))try{Is=Te.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return Is}function Nf(e){return Lh()?.createHTML(e)||e}function Ff(e){return Lh()?.createScriptURL(e)||e}var js=class{changingThisBreaksApplicationSecurity;constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${os})`}};function Nn(e){return e instanceof js?e.changingThisBreaksApplicationSecurity:e}function Xs(e,t){let n=jh(e);if(n!=null&&n!==t){if(n==="ResourceURL"&&t==="URL")return!0;throw new Error(`Required a safe ${t}, got a ${n} (see ${os})`)}return n===t}function jh(e){return e instanceof js&&e.getTypeName()||null}function OC(e){let t=new $l(e);return RC()?new zl(t):t}var zl=class{inertDocumentHelper;constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{let n=new window.DOMParser().parseFromString(Zs(t),"text/html").body;return n===null?this.inertDocumentHelper.getInertBodyElement(t):(n.firstChild?.remove(),n)}catch{return null}}},$l=class{defaultDoc;inertDocument;constructor(t){this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(t){let n=this.inertDocument.createElement("template");return n.innerHTML=Zs(t),n}};function RC(){try{return!!new window.DOMParser().parseFromString(Zs(""),"text/html")}catch{return!1}}var NC=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function hu(e){return e=String(e),e.match(NC)?e:"unsafe:"+e}function Jt(e){let t={};for(let n of e.split(","))t[n]=!0;return t}function Ai(...e){let t={};for(let n of e)for(let o in n)n.hasOwnProperty(o)&&(t[o]=!0);return t}var Jh=Jt("area,br,col,hr,img,wbr"),Vh=Jt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Hh=Jt("rp,rt"),FC=Ai(Hh,Vh),LC=Ai(Vh,Jt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),jC=Ai(Hh,Jt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Lf=Ai(Jh,LC,jC,FC),Bh=Jt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),JC=Jt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),VC=Jt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),HC=Ai(Bh,JC,VC),BC=Jt("script,style,template"),Gl=class{sanitizedSomething=!1;buf=[];sanitizeChildren(t){let n=t.firstChild,o=!0,i=[];for(;n;){if(n.nodeType===Node.ELEMENT_NODE?o=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,o&&n.firstChild){i.push(n),n=zC(n);continue}for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let r=UC(n);if(r){n=r;break}n=i.pop()}}return this.buf.join("")}startElement(t){let n=jf(t).toLowerCase();if(!Lf.hasOwnProperty(n))return this.sanitizedSomething=!0,!BC.hasOwnProperty(n);this.buf.push("<"),this.buf.push(n);let o=t.attributes;for(let i=0;i<o.length;i++){let r=o.item(i),s=r.name,a=s.toLowerCase();if(!HC.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let c=r.value;Bh[a]&&(c=hu(c)),this.buf.push(" ",s,'="',Jf(c),'"')}return this.buf.push(">"),!0}endElement(t){let n=jf(t).toLowerCase();Lf.hasOwnProperty(n)&&!Jh.hasOwnProperty(n)&&(this.buf.push("</"),this.buf.push(n),this.buf.push(">"))}chars(t){this.buf.push(Jf(t))}};function WC(e,t){return(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function UC(e){let t=e.nextSibling;if(t&&e!==t.previousSibling)throw Wh(t);return t}function zC(e){let t=e.firstChild;if(t&&WC(e,t))throw Wh(t);return t}function jf(e){let t=e.nodeName;return typeof t=="string"?t:"FORM"}function Wh(e){return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`)}var $C=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,GC=/([^\#-~ |!])/g;function Jf(e){return e.replace(/&/g,"&amp;").replace($C,function(t){let n=t.charCodeAt(0),o=t.charCodeAt(1);return"&#"+((n-55296)*1024+(o-56320)+65536)+";"}).replace(GC,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Ms;function Uh(e,t){let n=null;try{Ms=Ms||OC(e);let o=t?String(t):"";n=Ms.getInertBodyElement(o);let i=5,r=o;do{if(i===0)throw new Error("Failed to sanitize html because the input is unstable");i--,o=r,r=n.innerHTML,n=Ms.getInertBodyElement(o)}while(o!==r);let a=new Gl().sanitizeChildren(Vf(n)||n);return Zs(a)}finally{if(n){let o=Vf(n)||n;for(;o.firstChild;)o.firstChild.remove()}}}function Vf(e){return"content"in e&&qC(e)?e.content:null}function qC(e){return e.nodeType===Node.ELEMENT_NODE&&e.nodeName==="TEMPLATE"}function YC(e,t){return e.createText(t)}function KC(e,t,n){e.setValue(t,n)}function zh(e,t,n){return e.createElement(t,n)}function Js(e,t,n,o,i){e.insertBefore(t,n,o,i)}function $h(e,t,n){e.appendChild(t,n)}function Hf(e,t,n,o,i){o!==null?Js(e,t,n,o,i):$h(e,t,n)}function QC(e,t,n,o){e.removeChild(null,t,n,o)}function ZC(e,t,n){e.setAttribute(t,"style",n)}function XC(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function Gh(e,t,n){let{mergedAttrs:o,classes:i,styles:r}=n;o!==null&&uC(e,t,o),i!==null&&XC(e,t,i),r!==null&&ZC(e,t,r)}var _i=(function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e})(_i||{});function ea(e){let t=gu();return t?Nf(t.sanitize(_i.HTML,e)||""):Xs(e,"HTML")?Nf(Nn(e)):Uh(du(),Kt(e))}function ki(e){let t=gu();return t?t.sanitize(_i.URL,e)||"":Xs(e,"URL")?Nn(e):hu(Kt(e))}function qh(e){let t=gu();if(t)return Ff(t.sanitize(_i.RESOURCE_URL,e)||"");if(Xs(e,"ResourceURL"))return Ff(Nn(e));throw new w(904,!1)}function ew(e,t){return t==="src"&&(e==="embed"||e==="frame"||e==="iframe"||e==="media"||e==="script")||t==="href"&&(e==="base"||e==="link")?qh:ki}function mu(e,t,n){return ew(t,n)(e)}function gu(){let e=z();return e&&e[ft].sanitizer}function vu(e){return e.ownerDocument.defaultView}function Yh(e){return e instanceof Function?e():e}function tw(e,t,n){let o=e.length;for(;;){let i=e.indexOf(t,n);if(i===-1)return i;if(i===0||e.charCodeAt(i-1)<=32){let r=t.length;if(i+r===o||e.charCodeAt(i+r)<=32)return i}n=i+1}}var Kh="ng-template";function nw(e,t,n,o){let i=0;if(o){for(;i<t.length&&typeof t[i]=="string";i+=2)if(t[i]==="class"&&tw(t[i+1].toLowerCase(),n,0)!==-1)return!0}else if(yu(e))return!1;if(i=t.indexOf(1,i),i>-1){let r;for(;++i<t.length&&typeof(r=t[i])=="string";)if(r.toLowerCase()===n)return!0}return!1}function yu(e){return e.type===4&&e.value!==Kh}function ow(e,t,n){let o=e.type===4&&!n?Kh:e.value;return t===o}function iw(e,t,n){let o=4,i=e.attrs,r=i!==null?aw(i):0,s=!1;for(let a=0;a<t.length;a++){let c=t[a];if(typeof c=="number"){if(!s&&!st(o)&&!st(c))return!1;if(s&&st(c))continue;s=!1,o=c|o&1;continue}if(!s)if(o&4){if(o=2|o&1,c!==""&&!ow(e,c,n)||c===""&&t.length===1){if(st(o))return!1;s=!0}}else if(o&8){if(i===null||!nw(e,i,c,n)){if(st(o))return!1;s=!0}}else{let l=t[++a],u=rw(c,i,yu(e),n);if(u===-1){if(st(o))return!1;s=!0;continue}if(l!==""){let d;if(u>r?d="":d=i[u+1].toLowerCase(),o&2&&l!==d){if(st(o))return!1;s=!0}}}}return st(o)||s}function st(e){return(e&1)===0}function rw(e,t,n,o){if(t===null)return-1;let i=0;if(o||!n){let r=!1;for(;i<t.length;){let s=t[i];if(s===e)return i;if(s===3||s===6)r=!0;else if(s===1||s===2){let a=t[++i];for(;typeof a=="string";)a=t[++i];continue}else{if(s===4)break;if(s===0){i+=4;continue}}i+=r?1:2}return-1}else return cw(t,e)}function sw(e,t,n=!1){for(let o=0;o<t.length;o++)if(iw(e,t[o],n))return!0;return!1}function aw(e){for(let t=0;t<e.length;t++){let n=e[t];if(vh(n))return t}return e.length}function cw(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let o=e[n];if(typeof o=="number")return-1;if(o===t)return n;n++}return-1}function Bf(e,t){return e?":not("+t.trim()+")":t}function lw(e){let t=e[0],n=1,o=2,i="",r=!1;for(;n<e.length;){let s=e[n];if(typeof s=="string")if(o&2){let a=e[++n];i+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else o&8?i+="."+s:o&4&&(i+=" "+s);else i!==""&&!st(s)&&(t+=Bf(r,i),i=""),o=s,r=r||!st(o);n++}return i!==""&&(t+=Bf(r,i)),t}function uw(e){return e.map(lw).join(",")}function dw(e){let t=[],n=[],o=1,i=2;for(;o<e.length;){let r=e[o];if(typeof r=="string")i===2?r!==""&&t.push(r,e[++o]):i===8&&n.push(r);else{if(!st(i))break;i=r}o++}return n.length&&t.push(1,...n),t}var He={};function bu(e,t,n,o,i,r,s,a,c,l,u){let d=xe+o,v=d+i,f=pw(d,v),C=typeof l=="function"?l():l;return f[R]={type:e,blueprint:f,template:n,queries:null,viewQuery:a,declTNode:t,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:v,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof r=="function"?r():r,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:C,incompleteFirstPass:!1,ssrId:u}}function pw(e,t){let n=[];for(let o=0;o<t;o++)n.push(o<e?null:He);return n}function fw(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=bu(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function Cu(e,t,n,o,i,r,s,a,c,l,u){let d=t.blueprint.slice();return d[tt]=i,d[A]=o|4|128|8|64|1024,(l!==null||e&&e[A]&2048)&&(d[A]|=2048),pl(d),d[fe]=d[En]=e,d[Ce]=n,d[ft]=s||e&&e[ft],d[Z]=a||e&&e[Z],d[Xt]=c||e&&e[Xt]||null,d[qe]=r,d[ci]=DC(),d[ai]=u,d[cl]=l,d[Ye]=t.type==2?e[Ye]:d,d}function hw(e,t,n){let o=ot(t,e),i=fw(n),r=e[ft].rendererFactory,s=wu(e,Cu(e,i,null,Qh(n),o,t,null,r.createRenderer(o,n),null,null,null));return e[t.index]=s}function Qh(e){let t=16;return e.signals?t=4096:e.onPush&&(t=64),t}function Zh(e,t,n,o){if(n===0)return-1;let i=t.length;for(let r=0;r<n;r++)t.push(o),e.blueprint.push(o),e.data.push(null);return i}function wu(e,t){return e[ho]?e[al][Ge]=t:e[ho]=t,e[al]=t,t}function g(e=1){Xh(Ae(),z(),Nt()+e,!1)}function Xh(e,t,n,o){if(!o)if((t[A]&3)===3){let r=e.preOrderCheckHooks;r!==null&&As(t,r,n)}else{let r=e.preOrderHooks;r!==null&&_s(t,r,0,n)}nn(n)}var ta=(function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e})(ta||{});function ql(e,t,n,o){let i=N(null);try{let[r,s,a]=e.inputs[n],c=null;(s&ta.SignalBased)!==0&&(c=t[r][ve]),c!==null&&c.transformFn!==void 0?o=c.transformFn(o):a!==null&&(o=a.call(t,o)),e.setInput!==null?e.setInput(t,c,o,n,r):dh(t,c,r,o)}finally{N(i)}}var bt=(function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e})(bt||{}),mw;function Su(e,t){return mw(e,t)}var wo=new Set,na=(function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e})(na||{}),Fn=new D(""),Wf=new Set;function Do(e){Wf.has(e)||(Wf.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}var em=!1,Yl=class extends te{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,sl()&&(this.destroyRef=y(gt,{optional:!0})??void 0,this.pendingTasks=y(Ft,{optional:!0})??void 0)}emit(t){let n=N(null);try{super.next(t)}finally{N(n)}}subscribe(t,n,o){let i=t,r=n||(()=>null),s=o;if(t&&typeof t=="object"){let c=t;i=c.next?.bind(c),r=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(r=this.wrapInTimeout(r),i&&(i=this.wrapInTimeout(i)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:i,error:r,complete:s});return t instanceof ee&&t.add(a),a}wrapInTimeout(t){return n=>{let o=this.pendingTasks?.add();setTimeout(()=>{try{t(n)}finally{o!==void 0&&this.pendingTasks?.remove(o)}})}}},se=Yl;function tm(e){let t,n;function o(){e=vi;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),t!==void 0&&clearTimeout(t)}catch{}}return t=setTimeout(()=>{e(),o()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{e(),o()})),()=>o()}function Uf(e){return queueMicrotask(()=>e()),()=>{e=vi}}var Eu="isAngularZone",Vs=Eu+"_ID",gw=0,K=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new se(!1);onMicrotaskEmpty=new se(!1);onStable=new se(!1);onError=new se(!1);constructor(t){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:o=!1,shouldCoalesceRunChangeDetection:i=!1,scheduleInRootZone:r=em}=t;if(typeof Zone>"u")throw new w(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!i&&o,s.shouldCoalesceRunChangeDetection=i,s.callbackScheduled=!1,s.scheduleInRootZone=r,bw(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Eu)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new w(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new w(909,!1)}run(t,n,o){return this._inner.run(t,n,o)}runTask(t,n,o,i){let r=this._inner,s=r.scheduleEventTask("NgZoneEvent: "+i,t,vw,vi,vi);try{return r.runTask(s,n,o)}finally{r.cancelTask(s)}}runGuarded(t,n,o){return this._inner.runGuarded(t,n,o)}runOutsideAngular(t){return this._outer.run(t)}},vw={};function Du(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function yw(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function t(){tm(()=>{e.callbackScheduled=!1,Kl(e),e.isCheckStableRunning=!0,Du(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{t()}):e._outer.run(()=>{t()}),Kl(e)}function bw(e){let t=()=>{yw(e)},n=gw++;e._inner=e._inner.fork({name:"angular",properties:{[Eu]:!0,[Vs]:n,[Vs+n]:!0},onInvokeTask:(o,i,r,s,a,c)=>{if(Cw(c))return o.invokeTask(r,s,a,c);try{return zf(e),o.invokeTask(r,s,a,c)}finally{(e.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),$f(e)}},onInvoke:(o,i,r,s,a,c,l)=>{try{return zf(e),o.invoke(r,s,a,c,l)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!ww(c)&&t(),$f(e)}},onHasTask:(o,i,r,s)=>{o.hasTask(r,s),i===r&&(s.change=="microTask"?(e._hasPendingMicrotasks=s.microTask,Kl(e),Du(e)):s.change=="macroTask"&&(e.hasPendingMacrotasks=s.macroTask))},onHandleError:(o,i,r,s)=>(o.handleError(r,s),e.runOutsideAngular(()=>e.onError.emit(s)),!1)})}function Kl(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function zf(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function $f(e){e._nesting--,Du(e)}var wi=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new se;onMicrotaskEmpty=new se;onStable=new se;onError=new se;run(t,n,o){return t.apply(n,o)}runGuarded(t,n,o){return t.apply(n,o)}runOutsideAngular(t){return t()}runTask(t,n,o,i){return t.apply(n,o)}};function Cw(e){return nm(e,"__ignore_ng_zone__")}function ww(e){return nm(e,"__scheduler_tick__")}function nm(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}function om(e="zone.js",t){return e==="noop"?new wi:e==="zone.js"?new K(t):e}var Iu=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=E({token:e,providedIn:"root",factory:()=>new e})}return e})(),im=[0,1,2,3],rm=(()=>{class e{ngZone=y(K);scheduler=y(qt);errorHandler=y(et,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){y(Fn,{optional:!0})}execute(){let n=this.sequences.size>0;n&&Y(16),this.executing=!0;for(let o of im)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[o]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let r=i.hooks[o];return r(i.pipelinedValue)},i.snapshot))}catch(r){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(r)}this.executing=!1;for(let o of this.sequences)o.afterRun(),o.once&&(this.sequences.delete(o),o.destroy());for(let o of this.deferredRegistrations)this.sequences.add(o);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),n&&Y(17)}register(n){let{view:o}=n;o!==void 0?((o[Tn]??=[]).push(n),go(o),o[A]|=8192):this.executing?this.deferredRegistrations.add(n):this.addSequence(n)}addSequence(n){this.sequences.add(n),this.scheduler.notify(7)}unregister(n){this.executing&&this.sequences.has(n)?(n.erroredOrDestroyed=!0,n.pipelinedValue=void 0,n.once=!0):(this.sequences.delete(n),this.deferredRegistrations.delete(n))}maybeTrace(n,o){return o?o.run(na.AFTER_NEXT_RENDER,n):n()}static \u0275prov=E({token:e,providedIn:"root",factory:()=>new e})}return e})(),Hs=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(t,n,o,i,r,s=null){this.impl=t,this.hooks=n,this.view=o,this.once=i,this.snapshot=s,this.unregisterOnDestroy=r?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let t=this.view?.[Tn];t&&(this.view[Tn]=t.filter(n=>n!==this))}};function oa(e,t){let n=t?.injector??y(ye);return Do("NgAfterNextRender"),Ew(e,n,t,!0)}function Sw(e){return e instanceof Function?[void 0,void 0,e,void 0]:[e.earlyRead,e.write,e.mixedReadWrite,e.read]}function Ew(e,t,n,o){let i=t.get(Iu);i.impl??=t.get(rm);let r=t.get(Fn,null,{optional:!0}),s=n?.manualCleanup!==!0?t.get(gt):null,a=t.get(Ss,null,{optional:!0}),c=new Hs(i.impl,Sw(e),a?.view,o,s,r?.snapshot(null));return i.impl.register(c),c}var Dw=new D("",{providedIn:"root",factory:()=>({queue:new Set,isScheduled:!1,scheduler:null})});function sm(e,t,n){let o=e.get(Dw);if(Array.isArray(t))for(let i of t)o.queue.add(i),n?.detachedLeaveAnimationFns?.push(i);else o.queue.add(t),n?.detachedLeaveAnimationFns?.push(t);o.scheduler&&o.scheduler(e)}function Iw(e,t){for(let[n,o]of t)sm(e,o.animateFns)}function Gf(e,t,n,o){let i=e?.[ui]?.enter;t!==null&&i&&i.has(n.index)&&Iw(o,i)}function yo(e,t,n,o,i,r,s,a){if(i!=null){let c,l=!1;nt(i)?c=i:ht(i)&&(l=!0,i=i[tt]);let u=Ke(i);e===0&&o!==null?(Gf(a,o,r,n),s==null?$h(t,o,u):Js(t,o,u,s||null,!0)):e===1&&o!==null?(Gf(a,o,r,n),Js(t,o,u,s||null,!0)):e===2?qf(a,r,n,d=>{QC(t,u,l,d)}):e===3&&qf(a,r,n,()=>{t.destroyNode(u)}),c!=null&&jw(t,e,n,c,r,o,s)}}function Mw(e,t){am(e,t),t[tt]=null,t[qe]=null}function Tw(e,t,n,o,i,r){o[tt]=i,o[qe]=t,ia(e,o,n,1,i,r)}function am(e,t){t[ft].changeDetectionScheduler?.notify(9),ia(e,t,t[Z],2,null,null)}function xw(e){let t=e[ho];if(!t)return kl(e[R],e);for(;t;){let n=null;if(ht(t))n=t[ho];else{let o=t[Fe];o&&(n=o)}if(!n){for(;t&&!t[Ge]&&t!==e;)ht(t)&&kl(t[R],t),t=t[fe];t===null&&(t=e),ht(t)&&kl(t[R],t),n=t&&t[Ge]}t=n}}function Mu(e,t){let n=e[pi],o=n.indexOf(t);n.splice(o,1)}function cm(e,t){if(xn(t))return;let n=t[Z];n.destroyNode&&ia(e,t,n,3,null,null),xw(t)}function kl(e,t){if(xn(t))return;let n=N(null);try{t[A]&=-129,t[A]|=256,t[Je]&&qo(t[Je]),kw(e,t),_w(e,t),t[R].type===1&&t[Z].destroy();let o=t[Dn];if(o!==null&&nt(t[fe])){o!==t[fe]&&Mu(o,t);let i=t[Mn];i!==null&&i.detachView(e)}Bl(t)}finally{N(n)}}function qf(e,t,n,o){let i=e?.[ui];if(i==null||i.leave==null||!i.leave.has(t.index))return o(!1);e&&wo.add(e),sm(n,()=>{if(i.leave&&i.leave.has(t.index)){let s=i.leave.get(t.index),a=[];if(s){for(let c=0;c<s.animateFns.length;c++){let l=s.animateFns[c],{promise:u}=l();a.push(u)}i.detachedLeaveAnimationFns=void 0}i.running=Promise.allSettled(a),Aw(e,o)}else e&&wo.delete(e),o(!1)},i)}function Aw(e,t){let n=e[ui]?.running;if(n){n.then(()=>{e[ui].running=void 0,wo.delete(e),t(!0)});return}t(!1)}function _w(e,t){let n=e.cleanup,o=t[fo];if(n!==null)for(let s=0;s<n.length-1;s+=2)if(typeof n[s]=="string"){let a=n[s+3];a>=0?o[a]():o[-a].unsubscribe(),s+=2}else{let a=o[n[s+1]];n[s].call(a)}o!==null&&(t[fo]=null);let i=t[Pt];if(i!==null){t[Pt]=null;for(let s=0;s<i.length;s++){let a=i[s];a()}}let r=t[li];if(r!==null){t[li]=null;for(let s of r)s.destroy()}}function kw(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let o=0;o<n.length;o+=2){let i=t[n[o]];if(!(i instanceof _n)){let r=n[o+1];if(Array.isArray(r))for(let s=0;s<r.length;s+=2){let a=i[r[s]],c=r[s+1];Y(4,a,c);try{c.call(a)}finally{Y(5,a,c)}}else{Y(4,i,r);try{r.call(i)}finally{Y(5,i,r)}}}}}function Pw(e,t,n){return Ow(e,t.parent,n)}function Ow(e,t,n){let o=t;for(;o!==null&&o.type&168;)t=o,o=t.parent;if(o===null)return n[tt];if(tn(o)){let{encapsulation:i}=e.data[o.directiveStart+o.componentOffset];if(i===Lt.None||i===Lt.Emulated)return null}return ot(o,n)}function Rw(e,t,n){return Fw(e,t,n)}function Nw(e,t,n){return e.type&40?ot(e,n):null}var Fw=Nw,Yf;function Tu(e,t,n,o){let i=Pw(e,o,t),r=t[Z],s=o.parent||t[qe],a=Rw(s,o,t);if(i!=null)if(Array.isArray(n))for(let c=0;c<n.length;c++)Hf(r,i,n[c],a,!1);else Hf(r,i,n,a,!1);Yf!==void 0&&Yf(r,o,t,n,i)}function yi(e,t){if(t!==null){let n=t.type;if(n&3)return ot(t,e);if(n&4)return Ql(-1,e[t.index]);if(n&8){let o=t.child;if(o!==null)return yi(e,o);{let i=e[t.index];return nt(i)?Ql(-1,i):Ke(i)}}else{if(n&128)return yi(e,t.next);if(n&32)return Su(t,e)()||Ke(e[t.index]);{let o=lm(e,t);if(o!==null){if(Array.isArray(o))return o[0];let i=Gt(e[Ye]);return yi(i,o)}else return yi(e,t.next)}}}return null}function lm(e,t){if(t!==null){let o=e[Ye][qe],i=t.projection;return o.projection[i]}return null}function Ql(e,t){let n=Fe+e+1;if(n<t.length){let o=t[n],i=o[R].firstChild;if(i!==null)return yi(o,i)}return t[en]}function xu(e,t,n,o,i,r,s){for(;n!=null;){let a=o[Xt];if(n.type===128){n=n.next;continue}let c=o[n.index],l=n.type;if(s&&t===0&&(c&&Co(Ke(c),o),n.flags|=2),!fu(n))if(l&8)xu(e,t,n.child,o,i,r,!1),yo(t,e,a,i,c,n,r,o);else if(l&32){let u=Su(n,o),d;for(;d=u();)yo(t,e,a,i,d,n,r,o);yo(t,e,a,i,c,n,r,o)}else l&16?Lw(e,t,o,n,i,r):yo(t,e,a,i,c,n,r,o);n=s?n.projectionNext:n.next}}function ia(e,t,n,o,i,r){xu(n,o,e.firstChild,t,i,r,!1)}function Lw(e,t,n,o,i,r){let s=n[Ye],c=s[qe].projection[o.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];yo(t,e,n[Xt],i,u,o,r,n)}else{let l=c,u=s[fe];Th(o)&&(l.flags|=128),xu(e,t,l,u,i,r,!0)}}function jw(e,t,n,o,i,r,s){let a=o[en],c=Ke(o);a!==c&&yo(t,e,n,r,a,i,s);for(let l=Fe;l<o.length;l++){let u=o[l];ia(u[R],u,e,t,r,a)}}function Jw(e,t,n,o,i){if(t)i?e.addClass(n,o):e.removeClass(n,o);else{let r=o.indexOf("-")===-1?void 0:bt.DashCase;i==null?e.removeStyle(n,o,r):(typeof i=="string"&&i.endsWith("!important")&&(i=i.slice(0,-10),r|=bt.Important),e.setStyle(n,o,i,r))}}function um(e,t,n,o,i){let r=Nt(),s=o&2;try{nn(-1),s&&t.length>xe&&Xh(e,t,xe,!1),Y(s?2:0,i,n),n(o,i)}finally{nn(r),Y(s?3:1,i,n)}}function Au(e,t,n){$w(e,t,n),(n.flags&64)===64&&Gw(e,t,n)}function dm(e,t,n=ot){let o=t.localNames;if(o!==null){let i=t.index+1;for(let r=0;r<o.length;r+=2){let s=o[r+1],a=s===-1?n(t,e):e[s];e[i++]=a}}}function Vw(e,t,n,o){let r=o.get(Oh,Ph)||n===Lt.ShadowDom,s=e.selectRootElement(t,r);return Hw(s),s}function Hw(e){Bw(e)}var Bw=()=>null;function Ww(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function pm(e,t,n,o,i,r){let s=t[R];if(_u(e,s,t,n,o)){tn(e)&&zw(t,e.index);return}e.type&3&&(n=Ww(n)),Uw(e,t,n,o,i,r)}function Uw(e,t,n,o,i,r){if(e.type&3){let s=ot(e,t);o=r!=null?r(o,e.value||"",n):o,i.setProperty(s,n,o)}else e.type&12}function zw(e,t){let n=Qe(t,e);n[A]&16||(n[A]|=64)}function $w(e,t,n){let o=n.directiveStart,i=n.directiveEnd;tn(n)&&hw(t,n,e.data[o+n.componentOffset]),e.firstCreatePass||Fs(n,t);let r=n.initialInputs;for(let s=o;s<i;s++){let a=e.data[s],c=Ls(t,e,s,n);if(Co(c,t),r!==null&&Qw(t,s-o,c,a,n,r),mt(a)){let l=Qe(n.index,t);l[Ce]=Ls(t,e,s,n)}}}function Gw(e,t,n){let o=n.directiveStart,i=n.directiveEnd,r=n.index,s=bf();try{nn(r);for(let a=o;a<i;a++){let c=e.data[a],l=t[a];gs(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&qw(c,l)}}finally{nn(-1),gs(s)}}function qw(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function fm(e,t){let n=e.directiveRegistry,o=null;if(n)for(let i=0;i<n.length;i++){let r=n[i];sw(t,r.selectors,!1)&&(o??=[],mt(r)?o.unshift(r):o.push(r))}return o}function Yw(e,t,n,o,i,r){let s=ot(e,t);Kw(t[Z],s,r,e.value,n,o,i)}function Kw(e,t,n,o,i,r,s){if(r==null)e.removeAttribute(t,i,n);else{let a=s==null?Kt(r):s(r,o||"",i);e.setAttribute(t,i,a,n)}}function Qw(e,t,n,o,i,r){let s=r[t];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];ql(o,n,c,l)}}function Zw(e,t,n,o,i){let r=xe+n,s=t[R],a=i(s,t,e,o,n);t[r]=a,vo(e,!0);let c=e.type===2;return c?(Gh(t[Z],a,e),(sf()===0||fi(e))&&Co(a,t),af()):Co(a,t),Cs()&&(!c||!fu(e))&&Tu(s,t,a,e),e}function Xw(e){let t=e;return vl()?ff():(t=t.parent,vo(t,!1)),t}function eS(e,t){let n=e[Xt];if(!n)return;let o;try{o=n.get(Ve,null)}catch{o=null}o?.(t)}function _u(e,t,n,o,i){let r=e.inputs?.[o],s=e.hostDirectiveInputs?.[o],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],u=s[c+1],d=t.data[l];ql(d,n[l],u,i),a=!0}if(r)for(let c of r){let l=n[c],u=t.data[c];ql(u,l,o,i),a=!0}return a}function tS(e,t){let n=Qe(t,e),o=n[R];nS(o,n);let i=n[tt];i!==null&&n[ai]===null&&(n[ai]=Rh(i,n[Xt])),Y(18),ku(o,n,n[Ce]),Y(19,n[Ce])}function nS(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function ku(e,t,n){vs(t);try{let o=e.viewQuery;o!==null&&Ul(1,o,n);let i=e.template;i!==null&&um(e,t,i,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[Mn]?.finishViewCreation(e),e.staticContentQueries&&Nh(e,t),e.staticViewQueries&&Ul(2,e.viewQuery,n);let r=e.components;r!==null&&oS(t,r)}catch(o){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),o}finally{t[A]&=-5,ys()}}function oS(e,t){for(let n=0;n<t.length;n++)tS(e,t[n])}function iS(e,t,n,o){let i=N(null);try{let r=t.tView,a=e[A]&4096?4096:16,c=Cu(e,r,n,a,null,t,null,null,o?.injector??null,o?.embeddedViewInjector??null,o?.dehydratedView??null),l=e[t.index];c[Dn]=l;let u=e[Mn];return u!==null&&(c[Mn]=u.createEmbeddedView(r)),ku(r,c,n),c}finally{N(i)}}function Kf(e,t){return!t||t.firstChild===null||Th(e)}function Si(e,t,n,o,i=!1){for(;n!==null;){if(n.type===128){n=i?n.projectionNext:n.next;continue}let r=t[n.index];r!==null&&o.push(Ke(r)),nt(r)&&hm(r,o);let s=n.type;if(s&8)Si(e,t,n.child,o);else if(s&32){let a=Su(n,t),c;for(;c=a();)o.push(c)}else if(s&16){let a=lm(t,n);if(Array.isArray(a))o.push(...a);else{let c=Gt(t[Ye]);Si(c[R],c,a,o,!0)}}n=i?n.projectionNext:n.next}return o}function hm(e,t){for(let n=Fe;n<e.length;n++){let o=e[n],i=o[R].firstChild;i!==null&&Si(o[R],o,i,t)}e[en]!==e[tt]&&t.push(e[en])}function mm(e){if(e[Tn]!==null){for(let t of e[Tn])t.impl.addSequence(t);e[Tn].length=0}}var gm=[];function rS(e){return e[Je]??sS(e)}function sS(e){let t=gm.pop()??Object.create(cS);return t.lView=e,t}function aS(e){e.lView[Je]!==e&&(e.lView=null,gm.push(e))}var cS=F(b({},qn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{go(e.lView)},consumerOnSignalRead(){this.lView[Je]=this}});function lS(e){let t=e[Je]??Object.create(uS);return t.lView=e,t}var uS=F(b({},qn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let t=Gt(e.lView);for(;t&&!vm(t[R]);)t=Gt(t);t&&fl(t)},consumerOnSignalRead(){this.lView[Je]=this}});function vm(e){return e.type!==2}function ym(e){if(e[li]===null)return;let t=!0;for(;t;){let n=!1;for(let o of e[li])o.dirty&&(n=!0,o.zone===null||Zone.current===o.zone?o.run():o.zone.run(()=>o.run()));t=n&&!!(e[A]&8192)}}var dS=100;function bm(e,t=0){let o=e[ft].rendererFactory,i=!1;i||o.begin?.();try{pS(e,t)}finally{i||o.end?.()}}function pS(e,t){let n=yl();try{bl(!0),Zl(e,t);let o=0;for(;mi(e);){if(o===dS)throw new w(103,!1);o++,Zl(e,1)}}finally{bl(n)}}function fS(e,t,n,o){if(xn(t))return;let i=t[A],r=!1,s=!1;vs(t);let a=!0,c=null,l=null;r||(vm(e)?(l=rS(t),c=Kn(l)):Ir()===null?(a=!1,l=lS(t),c=Kn(l)):t[Je]&&(qo(t[Je]),t[Je]=null));try{pl(t),gf(e.bindingStartIndex),n!==null&&um(e,t,n,2,o);let u=(i&3)===3;if(!r)if(u){let f=e.preOrderCheckHooks;f!==null&&As(t,f,null)}else{let f=e.preOrderHooks;f!==null&&_s(t,f,0,null),Al(t,0)}if(s||hS(t),ym(t),Cm(t,0),e.contentQueries!==null&&Nh(e,t),!r)if(u){let f=e.contentCheckHooks;f!==null&&As(t,f)}else{let f=e.contentHooks;f!==null&&_s(t,f,1),Al(t,1)}gS(e,t);let d=e.components;d!==null&&Sm(t,d,0);let v=e.viewQuery;if(v!==null&&Ul(2,v,o),!r)if(u){let f=e.viewCheckHooks;f!==null&&As(t,f)}else{let f=e.viewHooks;f!==null&&_s(t,f,2),Al(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[ds]){for(let f of t[ds])f();t[ds]=null}r||(mm(t),t[A]&=-73)}catch(u){throw r||go(t),u}finally{l!==null&&($o(l,c),a&&aS(l)),ys()}}function Cm(e,t){for(let n=Ah(e);n!==null;n=_h(n))for(let o=Fe;o<n.length;o++){let i=n[o];wm(i,t)}}function hS(e){for(let t=Ah(e);t!==null;t=_h(t)){if(!(t[A]&2))continue;let n=t[pi];for(let o=0;o<n.length;o++){let i=n[o];fl(i)}}}function mS(e,t,n){Y(18);let o=Qe(t,e);wm(o,n),Y(19,o[Ce])}function wm(e,t){fs(e)&&Zl(e,t)}function Zl(e,t){let o=e[R],i=e[A],r=e[Je],s=!!(t===0&&i&16);if(s||=!!(i&64&&t===0),s||=!!(i&1024),s||=!!(r?.dirty&&Go(r)),s||=!1,r&&(r.dirty=!1),e[A]&=-9217,s)fS(o,e,o.template,e[Ce]);else if(i&8192){let a=N(null);try{ym(e),Cm(e,1);let c=o.components;c!==null&&Sm(e,c,1),mm(e)}finally{N(a)}}}function Sm(e,t,n){for(let o=0;o<t.length;o++)mS(e,t[o],n)}function gS(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let o=0;o<n.length;o++){let i=n[o];if(i<0)nn(~i);else{let r=i,s=n[++o],a=n[++o];yf(s,r);let c=t[r];Y(24,c),a(2,c),Y(25,c)}}}finally{nn(-1)}}function Pu(e,t){let n=yl()?64:1088;for(e[ft].changeDetectionScheduler?.notify(t);e;){e[A]|=n;let o=Gt(e);if(mo(e)&&!o)return e;e=o}return null}function Em(e,t,n,o){return[e,!0,0,t,null,o,null,n,null,null]}function vS(e,t,n,o=!0){let i=t[R];if(yS(i,t,e,n),o){let s=Ql(n,e),a=t[Z],c=a.parentNode(e[en]);c!==null&&Tw(i,e[qe],a,t,c,s)}let r=t[ai];r!==null&&r.firstChild!==null&&(r.firstChild=null)}function Xl(e,t){if(e.length<=Fe)return;let n=Fe+t,o=e[n];if(o){let i=o[Dn];i!==null&&i!==e&&Mu(i,o),t>0&&(e[n-1][Ge]=o[Ge]);let r=ii(e,Fe+t);Mw(o[R],o);let s=r[Mn];s!==null&&s.detachView(r[R]),o[fe]=null,o[Ge]=null,o[A]&=-129}return o}function yS(e,t,n,o){let i=Fe+o,r=n.length;o>0&&(n[i-1][Ge]=t),o<r-Fe?(t[Ge]=n[i],Zc(n,Fe+o,t)):(n.push(t),t[Ge]=null),t[fe]=n;let s=t[Dn];s!==null&&n!==s&&Dm(s,t);let a=t[Mn];a!==null&&a.insertView(e),hs(t),t[A]|=128}function Dm(e,t){let n=e[pi],o=t[fe];if(ht(o))e[A]|=2;else{let i=o[fe][Ye];t[Ye]!==i&&(e[A]|=2)}n===null?e[pi]=[t]:n.push(t)}var on=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let t=this._lView,n=t[R];return Si(n,t,n.firstChild,[])}constructor(t,n){this._lView=t,this._cdRefInjectingView=n}get context(){return this._lView[Ce]}set context(t){this._lView[Ce]=t}get destroyed(){return xn(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[fe];if(nt(t)){let n=t[di],o=n?n.indexOf(this):-1;o>-1&&(Xl(t,o),ii(n,o))}this._attachedToViewContainer=!1}cm(this._lView[R],this._lView)}onDestroy(t){hl(this._lView,t)}markForCheck(){Pu(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[A]&=-129}reattach(){hs(this._lView),this._lView[A]|=128}detectChanges(){this._lView[A]|=1024,bm(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new w(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=mo(this._lView),n=this._lView[Dn];n!==null&&!t&&Mu(n,this._lView),am(this._lView[R],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new w(902,!1);this._appRef=t;let n=mo(this._lView),o=this._lView[Dn];o!==null&&!n&&Dm(o,this._lView),hs(this._lView)}};var Pi=(()=>{class e{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=bS;constructor(n,o,i){this._declarationLView=n,this._declarationTContainer=o,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(n,o){return this.createEmbeddedViewImpl(n,o)}createEmbeddedViewImpl(n,o,i){let r=iS(this._declarationLView,this._declarationTContainer,n,{embeddedViewInjector:o,dehydratedView:i});return new on(r)}}return e})();function bS(){return CS(we(),z())}function CS(e,t){return e.type&4?new Pi(t,e,qs(e,t)):null}function Ou(e,t,n,o,i){let r=e.data[t];if(r===null)r=wS(e,t,n,o,i),vf()&&(r.flags|=32);else if(r.type&64){r.type=n,r.value=o,r.attrs=i;let s=pf();r.injectorIndex=s===null?-1:s.injectorIndex}return vo(r,!0),r}function wS(e,t,n,o,i){let r=gl(),s=vl(),a=s?r:r&&r.parent,c=e.data[t]=ES(e,a,n,t,o,i);return SS(e,c,r,s),c}function SS(e,t,n,o){e.firstChild===null&&(e.firstChild=t),n!==null&&(o?n.child==null&&t.parent!==null&&(n.child=t):n.next===null&&(n.next=t,t.prev=n))}function ES(e,t,n,o,i,r){let s=t?t.injectorIndex:-1,a=0;return lf()&&(a|=128),{type:n,index:o,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:i,attrs:r,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var KR=new RegExp(`^(\\d+)*(${xC}|${TC})*(.*)`);var DS=()=>null;function Qf(e,t){return DS(e,t)}var Im=class{},ra=class{},eu=class{resolveComponentFactory(t){throw new w(917,!1)}},Oi=class{static NULL=new eu},kn=class{},Vt=(()=>{class e{destroyNode=null;static __NG_ELEMENT_ID__=()=>IS()}return e})();function IS(){let e=z(),t=we(),n=Qe(t.index,e);return(ht(n)?n:e)[Z]}var Mm=(()=>{class e{static \u0275prov=E({token:e,providedIn:"root",factory:()=>null})}return e})();var ks={},tu=class{injector;parentInjector;constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,o){let i=this.injector.get(t,ks,o);return i!==ks||n===ks?i:this.parentInjector.get(t,n,o)}};function Zf(e,t,n){let o=n?e.styles:null,i=n?e.classes:null,r=0;if(t!==null)for(let s=0;s<t.length;s++){let a=t[s];if(typeof a=="number")r=a;else if(r==1)i=is(i,a);else if(r==2){let c=a,l=t[++s];o=is(o,c+": "+l+";")}}n?e.styles=o:e.stylesWithoutHost=o,n?e.classes=i:e.classesWithoutHost=i}function T(e,t=0){let n=z();if(n===null)return I(e,t);let o=we();return Dh(o,n,pe(e),t)}function Ru(){let e="invalid";throw new Error(e)}function Tm(e,t,n,o,i){let r=o===null?null:{"":-1},s=i(e,n);if(s!==null){let a=s,c=null,l=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(s);break}xS(e,t,n,a,r,c,l)}r!==null&&o!==null&&MS(n,o,r)}function MS(e,t,n){let o=e.localNames=[];for(let i=0;i<t.length;i+=2){let r=n[t[i+1]];if(r==null)throw new w(-301,!1);o.push(t[i],r)}}function TS(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function xS(e,t,n,o,i,r,s){let a=o.length,c=!1;for(let v=0;v<a;v++){let f=o[v];!c&&mt(f)&&(c=!0,TS(e,n,v)),Vl(Fs(n,t),e,f.type)}RS(n,e.data.length,a);for(let v=0;v<a;v++){let f=o[v];f.providersResolver&&f.providersResolver(f)}let l=!1,u=!1,d=Zh(e,t,a,null);a>0&&(n.directiveToIndex=new Map);for(let v=0;v<a;v++){let f=o[v];if(n.mergedAttrs=Ci(n.mergedAttrs,f.hostAttrs),_S(e,n,t,d,f),OS(d,f,i),s!==null&&s.has(f)){let[x,U]=s.get(f);n.directiveToIndex.set(f.type,[d,x+n.directiveStart,U+n.directiveStart])}else(r===null||!r.has(f))&&n.directiveToIndex.set(f.type,d);f.contentQueries!==null&&(n.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(n.flags|=64);let C=f.type.prototype;!l&&(C.ngOnChanges||C.ngOnInit||C.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),l=!0),!u&&(C.ngOnChanges||C.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),u=!0),d++}AS(e,n,r)}function AS(e,t,n){for(let o=t.directiveStart;o<t.directiveEnd;o++){let i=e.data[o];if(n===null||!n.has(i))Xf(0,t,i,o),Xf(1,t,i,o),th(t,o,!1);else{let r=n.get(i);eh(0,t,r,o),eh(1,t,r,o),th(t,o,!0)}}}function Xf(e,t,n,o){let i=e===0?n.inputs:n.outputs;for(let r in i)if(i.hasOwnProperty(r)){let s;e===0?s=t.inputs??={}:s=t.outputs??={},s[r]??=[],s[r].push(o),xm(t,r)}}function eh(e,t,n,o){let i=e===0?n.inputs:n.outputs;for(let r in i)if(i.hasOwnProperty(r)){let s=i[r],a;e===0?a=t.hostDirectiveInputs??={}:a=t.hostDirectiveOutputs??={},a[s]??=[],a[s].push(o,r),xm(t,s)}}function xm(e,t){t==="class"?e.flags|=8:t==="style"&&(e.flags|=16)}function th(e,t,n){let{attrs:o,inputs:i,hostDirectiveInputs:r}=e;if(o===null||!n&&i===null||n&&r===null||yu(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let s=null,a=0;for(;a<o.length;){let c=o[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!n&&i.hasOwnProperty(c)){let l=i[c];for(let u of l)if(u===t){s??=[],s.push(c,o[a+1]);break}}else if(n&&r.hasOwnProperty(c)){let l=r[c];for(let u=0;u<l.length;u+=2)if(l[u]===t){s??=[],s.push(l[u+1],o[a+1]);break}}a+=2}e.initialInputs??=[],e.initialInputs.push(s)}function _S(e,t,n,o,i){e.data[o]=i;let r=i.factory||(i.factory=$t(i.type,!0)),s=new _n(r,mt(i),T,null);e.blueprint[o]=s,n[o]=s,kS(e,t,o,Zh(e,n,i.hostVars,He),i)}function kS(e,t,n,o,i){let r=i.hostBindings;if(r){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let a=~t.index;PS(s)!=a&&s.push(a),s.push(n,o,r)}}function PS(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function OS(e,t,n){if(n){if(t.exportAs)for(let o=0;o<t.exportAs.length;o++)n[t.exportAs[o]]=e;mt(t)&&(n[""]=e)}}function RS(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Am(e,t,n,o,i,r,s,a){let c=t[R],l=c.consts,u=hi(l,s),d=Ou(c,e,n,o,u);return r&&Tm(c,t,d,hi(l,a),i),d.mergedAttrs=Ci(d.mergedAttrs,d.attrs),d.attrs!==null&&Zf(d,d.attrs,!1),d.mergedAttrs!==null&&Zf(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function _m(e,t){mh(e,t),ll(t)&&e.queries.elementEnd(t)}function Nu(e){return Pm(e)?Array.isArray(e)||!(e instanceof Map)&&Symbol.iterator in e:!1}function km(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{let n=e[Symbol.iterator](),o;for(;!(o=n.next()).done;)t(o.value)}}function Pm(e){return e!==null&&(typeof e=="function"||typeof e=="object")}function NS(e,t,n){return e[t]=n}function jt(e,t,n){if(n===He)return!1;let o=e[t];return Object.is(o,n)?!1:(e[t]=n,!0)}function FS(e,t,n,o){let i=jt(e,t,n);return jt(e,t+1,o)||i}function Pl(e,t,n){return function o(i){let r=tn(e)?Qe(e.index,t):t;Pu(r,5);let s=t[Ce],a=nh(t,s,n,i),c=o.__ngNextListenerFn__;for(;c;)a=nh(t,s,c,i)&&a,c=c.__ngNextListenerFn__;return a}}function nh(e,t,n,o){let i=N(null);try{return Y(6,t,n),n(o)!==!1}catch(r){return eS(e,r),!1}finally{Y(7,t,n),N(i)}}function LS(e,t,n,o,i,r,s,a){let c=fi(e),l=!1,u=null;if(!o&&c&&(u=JS(t,n,r,e.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=s,u.__ngLastListenerFn__=s,l=!0}else{let d=ot(e,n),v=o?o(d):d;_C(n,v,r,a);let f=i.listen(v,r,a);if(!jS(r)){let C=o?x=>o(Ke(x[e.index])):e.index;Om(C,t,n,r,a,f,!1)}}return l}function jS(e){return e.startsWith("animation")||e.startsWith("transition")}function JS(e,t,n,o){let i=e.cleanup;if(i!=null)for(let r=0;r<i.length-1;r+=2){let s=i[r];if(s===n&&i[r+1]===o){let a=t[fo],c=i[r+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(r+=2)}return null}function Om(e,t,n,o,i,r,s){let a=t.firstCreatePass?rf(t):null,c=of(n),l=c.length;c.push(i,r),a&&a.push(o,e,l,(l+1)*(s?-1:1))}function oh(e,t,n,o,i,r){let s=t[n],a=t[R],l=a.data[n].outputs[o],d=s[l].subscribe(r);Om(e.index,a,t,i,r,d,!0)}var nu=Symbol("BINDING");var Bs=class extends Oi{ngModule;constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let n=Rt(t);return new Pn(n,this.ngModule)}};function VS(e){return Object.keys(e).map(t=>{let[n,o,i]=e[t],r={propName:n,templateName:t,isSignal:(o&ta.SignalBased)!==0};return i&&(r.transform=i),r})}function HS(e){return Object.keys(e).map(t=>({propName:e[t],templateName:t}))}function BS(e,t,n){let o=t instanceof re?t:t?.injector;return o&&e.getStandaloneInjector!==null&&(o=e.getStandaloneInjector(o)||o),o?new tu(n,o):n}function WS(e){let t=e.get(kn,null);if(t===null)throw new w(407,!1);let n=e.get(Mm,null),o=e.get(qt,null);return{rendererFactory:t,sanitizer:n,changeDetectionScheduler:o,ngReflect:!1}}function US(e,t){let n=Rm(e);return zh(t,n,n==="svg"?Qp:n==="math"?Zp:null)}function Rm(e){return(e.selectors[0][0]||"div").toLowerCase()}var Pn=class extends ra{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=VS(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=HS(this.componentDef.outputs),this.cachedOutputs}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=uw(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!n}create(t,n,o,i,r,s){Y(22);let a=N(null);try{let c=this.componentDef,l=zS(o,c,s,r),u=BS(c,i||this.ngModule,t),d=WS(u),v=d.rendererFactory.createRenderer(null,c),f=o?Vw(v,o,c.encapsulation,u):US(c,v),C=s?.some(ih)||r?.some(H=>typeof H!="function"&&H.bindings.some(ih)),x=Cu(null,l,null,512|Qh(c),null,null,d,v,u,null,Rh(f,u,!0));x[xe]=f,vs(x);let U=null;try{let H=Am(xe,x,2,"#host",()=>l.directiveRegistry,!0,0);Gh(v,f,H),Co(f,x),Au(l,x,H),Fh(l,H,x),_m(l,H),n!==void 0&&GS(H,this.ngContentSelectors,n),U=Qe(H.index,x),x[Ce]=U[Ce],ku(l,x,null)}catch(H){throw U!==null&&Bl(U),Bl(x),H}finally{Y(23),ys()}return new Ws(this.componentType,x,!!C)}finally{N(a)}}};function zS(e,t,n,o){let i=e?["ng-version","20.3.15"]:dw(t.selectors[0]),r=null,s=null,a=0;if(n)for(let u of n)a+=u[nu].requiredVars,u.create&&(u.targetIdx=0,(r??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(o)for(let u=0;u<o.length;u++){let d=o[u];if(typeof d!="function")for(let v of d.bindings){a+=v[nu].requiredVars;let f=u+1;v.create&&(v.targetIdx=f,(r??=[]).push(v)),v.update&&(v.targetIdx=f,(s??=[]).push(v))}}let c=[t];if(o)for(let u of o){let d=typeof u=="function"?u:u.type,v=nl(d);c.push(v)}return bu(0,null,$S(r,s),1,a,c,null,null,null,[i],null)}function $S(e,t){return!e&&!t?null:n=>{if(n&1&&e)for(let o of e)o.create();if(n&2&&t)for(let o of t)o.update()}}function ih(e){let t=e[nu].kind;return t==="input"||t==="twoWay"}var Ws=class extends Im{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,n,o){super(),this._rootLView=n,this._hasInputBindings=o,this._tNode=ps(n[R],xe),this.location=qs(this._tNode,n),this.instance=Qe(this._tNode.index,n)[Ce],this.hostView=this.changeDetectorRef=new on(n,void 0),this.componentType=t}setInput(t,n){this._hasInputBindings;let o=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let i=this._rootLView,r=_u(o,i[R],i,t,n);this.previousInputValues.set(t,n);let s=Qe(o.index,i);Pu(s,1)}get injector(){return new An(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function GS(e,t,n){let o=e.projection=[];for(let i=0;i<t.length;i++){let r=n[i];o.push(r!=null&&r.length?Array.from(r):null)}}var Ln=(()=>{class e{static __NG_ELEMENT_ID__=qS}return e})();function qS(){let e=we();return KS(e,z())}var YS=Ln,Nm=class extends YS{_lContainer;_hostTNode;_hostLView;constructor(t,n,o){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=o}get element(){return qs(this._hostTNode,this._hostLView)}get injector(){return new An(this._hostTNode,this._hostLView)}get parentInjector(){let t=cu(this._hostTNode,this._hostLView);if(yh(t)){let n=Rs(t,this._hostLView),o=Os(t),i=n[R].data[o+8];return new An(i,n)}else return new An(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=rh(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-Fe}createEmbeddedView(t,n,o){let i,r;typeof o=="number"?i=o:o!=null&&(i=o.index,r=o.injector);let s=Qf(this._lContainer,t.ssrId),a=t.createEmbeddedViewImpl(n||{},r,s);return this.insertImpl(a,i,Kf(this._hostTNode,s)),a}createComponent(t,n,o,i,r,s,a){let c=t&&!nC(t),l;if(c)l=n;else{let U=n||{};l=U.index,o=U.injector,i=U.projectableNodes,r=U.environmentInjector||U.ngModuleRef,s=U.directives,a=U.bindings}let u=c?t:new Pn(Rt(t)),d=o||this.parentInjector;if(!r&&u.ngModule==null){let H=(c?d:this.parentInjector).get(re,null);H&&(r=H)}let v=Rt(u.componentType??{}),f=Qf(this._lContainer,v?.id??null),C=f?.firstChild??null,x=u.create(d,i,C,r,s,a);return this.insertImpl(x.hostView,l,Kf(this._hostTNode,f)),x}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,o){let i=t._lView;if(ef(i)){let a=this.indexOf(t);if(a!==-1)this.detach(a);else{let c=i[fe],l=new Nm(c,c[qe],c[fe]);l.detach(l.indexOf(t))}}let r=this._adjustIndex(n),s=this._lContainer;return vS(s,i,r,o),t.attachToViewContainerRef(),Zc(Ol(s),r,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=rh(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),o=Xl(this._lContainer,n);o&&(ii(Ol(this._lContainer),n),cm(o[R],o))}detach(t){let n=this._adjustIndex(t,-1),o=Xl(this._lContainer,n);return o&&ii(Ol(this._lContainer),n)!=null?new on(o):null}_adjustIndex(t,n=0){return t??this.length+n}};function rh(e){return e[di]}function Ol(e){return e[di]||(e[di]=[])}function KS(e,t){let n,o=t[e.index];return nt(o)?n=o:(n=Em(o,t,null,e),t[e.index]=n,wu(t,n)),ZS(n,t,e,o),new Nm(n,e,t)}function QS(e,t){let n=e[Z],o=n.createComment(""),i=ot(t,e),r=n.parentNode(i);return Js(n,r,o,n.nextSibling(i),!1),o}var ZS=tE,XS=()=>!1;function eE(e,t,n){return XS(e,t,n)}function tE(e,t,n,o){if(e[en])return;let i;n.type&8?i=Ke(o):i=QS(t,n),e[en]=i}function Fm(e){let t=[],n=new Map;function o(i){let r=n.get(i);if(!r){let s=e(i);n.set(i,r=s.then(a=>oE(i,a)))}return r}return Us.forEach((i,r)=>{let s=[];i.templateUrl&&s.push(o(i.templateUrl).then(l=>{i.template=l}));let a=typeof i.styles=="string"?[i.styles]:i.styles||[];if(i.styles=a,i.styleUrl&&i.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");if(i.styleUrls?.length){let l=i.styles.length,u=i.styleUrls;i.styleUrls.forEach((d,v)=>{a.push(""),s.push(o(d).then(f=>{a[l+v]=f,u.splice(u.indexOf(d),1),u.length==0&&(i.styleUrls=void 0)}))})}else i.styleUrl&&s.push(o(i.styleUrl).then(l=>{a.push(l),i.styleUrl=void 0}));let c=Promise.all(s).then(()=>iE(r));t.push(c)}),Lm(),Promise.all(t).then(()=>{})}var Us=new Map,nE=new Set;function Lm(){let e=Us;return Us=new Map,e}function jm(){return Us.size===0}function oE(e,t){return typeof t=="string"?t:t.status!==void 0&&t.status!==200?Promise.reject(new w(918,!1)):t.text()}function iE(e){nE.delete(e)}var On=class{},sa=class{};var Ei=class extends On{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Bs(this);constructor(t,n,o,i=!0){super(),this.ngModuleType=t,this._parent=n;let r=tl(t);this._bootstrapComponents=Yh(r.bootstrap),this._r3Injector=El(t,n,[{provide:On,useValue:this},{provide:Oi,useValue:this.componentFactoryResolver},...o],Ot(t),new Set(["environment"])),i&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},Di=class extends sa{moduleType;constructor(t){super(),this.moduleType=t}create(t){return new Ei(this.moduleType,t,[])}};function Jm(e,t,n){return new Ei(e,t,n,!1)}var zs=class extends On{injector;componentFactoryResolver=new Bs(this);instance=null;constructor(t){super();let n=new Cn([...t.providers,{provide:On,useValue:this},{provide:Oi,useValue:this.componentFactoryResolver}],t.parent||si(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function Io(e,t,n=null){return new zs({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}var rE=(()=>{class e{_injector;cachedInjectors=new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let o=ol(!1,n.type),i=o.length>0?Io([o],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n,i)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=E({token:e,providedIn:"environment",factory:()=>new e(I(re))})}return e})();function ae(e){return Mi(()=>{let t=Vm(e),n=F(b({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===lu.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:t.standalone?i=>i.get(rE).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Lt.Emulated,styles:e.styles||Me,_:null,schemas:e.schemas||null,tView:null,id:""});t.standalone&&Do("NgStandalone"),Hm(n);let o=e.dependencies;return n.directiveDefs=sh(o,sE),n.pipeDefs=sh(o,zp),n.id=lE(n),n})}function sE(e){return Rt(e)||nl(e)}function Se(e){return Mi(()=>({type:e.type,bootstrap:e.bootstrap||Me,declarations:e.declarations||Me,imports:e.imports||Me,exports:e.exports||Me,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function aE(e,t){if(e==null)return Qt;let n={};for(let o in e)if(e.hasOwnProperty(o)){let i=e[o],r,s,a,c;Array.isArray(i)?(a=i[0],r=i[1],s=i[2]??r,c=i[3]||null):(r=i,s=i,a=ta.None,c=null),n[r]=[o,a,c],t[r]=s}return n}function cE(e){if(e==null)return Qt;let t={};for(let n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function _e(e){return Mi(()=>{let t=Vm(e);return Hm(t),t})}function Fu(e){return{type:e.type,name:e.name,factory:null,pure:e.pure!==!1,standalone:e.standalone??!0,onDestroy:e.type.prototype.ngOnDestroy||null}}function Vm(e){let t={};return{type:e.type,providersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputConfig:e.inputs||Qt,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||Me,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:aE(e.inputs,t),outputs:cE(e.outputs),debugInfo:null}}function Hm(e){e.features?.forEach(t=>t(e))}function sh(e,t){return e?()=>{let n=typeof e=="function"?e():e,o=[];for(let i of n){let r=t(i);r!==null&&o.push(r)}return o}:null}function lE(e){let t=0,n=typeof e.consts=="function"?"":e.consts,o=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,n,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let r of o.join("|"))t=Math.imul(31,t)+r.charCodeAt(0)<<0;return t+=2147483648,"c"+t}function uE(e){return Object.getPrototypeOf(e.prototype).constructor}function jn(e){let t=uE(e.type),n=!0,o=[e];for(;t;){let i;if(mt(e))i=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new w(903,!1);i=t.\u0275dir}if(i){if(n){o.push(i);let s=e;s.inputs=Rl(e.inputs),s.declaredInputs=Rl(e.declaredInputs),s.outputs=Rl(e.outputs);let a=i.hostBindings;a&&mE(e,a);let c=i.viewQuery,l=i.contentQueries;if(c&&fE(e,c),l&&hE(e,l),dE(e,i),Jp(e.outputs,i.outputs),mt(i)&&i.data.animation){let u=e.data;u.animation=(u.animation||[]).concat(i.data.animation)}}let r=i.features;if(r)for(let s=0;s<r.length;s++){let a=r[s];a&&a.ngInherit&&a(e),a===jn&&(n=!1)}}t=Object.getPrototypeOf(t)}pE(o)}function dE(e,t){for(let n in t.inputs){if(!t.inputs.hasOwnProperty(n)||e.inputs.hasOwnProperty(n))continue;let o=t.inputs[n];o!==void 0&&(e.inputs[n]=o,e.declaredInputs[n]=t.declaredInputs[n])}}function pE(e){let t=0,n=null;for(let o=e.length-1;o>=0;o--){let i=e[o];i.hostVars=t+=i.hostVars,i.hostAttrs=Ci(i.hostAttrs,n=Ci(n,i.hostAttrs))}}function Rl(e){return e===Qt?{}:e===Me?[]:e}function fE(e,t){let n=e.viewQuery;n?e.viewQuery=(o,i)=>{t(o,i),n(o,i)}:e.viewQuery=t}function hE(e,t){let n=e.contentQueries;n?e.contentQueries=(o,i,r)=>{t(o,i,r),n(o,i,r)}:e.contentQueries=t}function mE(e,t){let n=e.hostBindings;n?e.hostBindings=(o,i)=>{t(o,i),n(o,i)}:e.hostBindings=t}function gE(e,t,n,o,i,r,s,a){if(n.firstCreatePass){e.mergedAttrs=Ci(e.mergedAttrs,e.attrs);let u=e.tView=bu(2,e,i,r,s,n.directiveRegistry,n.pipeRegistry,null,n.schemas,n.consts,null);n.queries!==null&&(n.queries.template(n,e),u.queries=n.queries.embeddedTView(e))}a&&(e.flags|=a),vo(e,!1);let c=yE(n,t,e,o);Cs()&&Tu(n,t,c,e),Co(c,t);let l=Em(c,t,c,e);t[o+xe]=l,wu(t,l),eE(l,e,t)}function vE(e,t,n,o,i,r,s,a,c,l,u){let d=n+xe,v;return t.firstCreatePass?(v=Ou(t,d,4,s||null,a||null),ml()&&Tm(t,e,v,hi(t.consts,l),fm),mh(t,v)):v=t.data[d],gE(v,e,t,n,o,i,r,c),fi(v)&&Au(t,e,v),l!=null&&dm(e,v,u),v}function P(e,t,n,o,i,r,s,a){let c=z(),l=Ae(),u=hi(l.consts,r);return vE(c,l,e,t,n,o,i,u,void 0,s,a),P}var yE=bE;function bE(e,t,n,o){return ws(!0),t[Z].createComment("")}var Lu=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})();var aa=new D(""),Mo=new D(""),Ri=(()=>{class e{_ngZone;registry;_isZoneStable=!0;_callbacks=[];_taskTrackingZone=null;_destroyRef;constructor(n,o,i){this._ngZone=n,this.registry=o,sl()&&(this._destroyRef=y(gt,{optional:!0})??void 0),ju||(Bm(i),i.addToWindow(o)),this._watchAngularEvents(),n.run(()=>{this._taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){let n=this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),o=this._ngZone.runOutsideAngular(()=>this._ngZone.onStable.subscribe({next:()=>{K.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}}));this._destroyRef?.onDestroy(()=>{n.unsubscribe(),o.unsubscribe()})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb()}});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(o=>o.updateCb&&o.updateCb(n)?(clearTimeout(o.timeoutId),!1):!0)}}getPendingTasks(){return this._taskTrackingZone?this._taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,o,i){let r=-1;o&&o>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==r),n()},o)),this._callbacks.push({doneCb:n,timeoutId:r,updateCb:i})}whenStable(n,o,i){if(i&&!this._taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,o,i),this._runCallbacksIfReady()}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,o,i){return[]}static \u0275fac=function(o){return new(o||e)(I(K),I(Ni),I(Mo))};static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})(),Ni=(()=>{class e{_applications=new Map;registerApplication(n,o){this._applications.set(n,o)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,o=!0){return ju?.findTestabilityInTree(this,n,o)??null}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})();function Bm(e){ju=e}var ju;function sn(e){return!!e&&typeof e.then=="function"}function Ju(e){return!!e&&typeof e.subscribe=="function"}var Vu=new D("");function ca(e){return us([{provide:Vu,multi:!0,useValue:e}])}var Hu=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,o)=>{this.resolve=n,this.reject=o});appInits=y(Vu,{optional:!0})??[];injector=y(ye);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let i of this.appInits){let r=be(this.injector,i);if(sn(r))n.push(r);else if(Ju(r)){let s=new Promise((a,c)=>{r.subscribe({complete:a,error:c})});n.push(s)}}let o=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{o()}).catch(i=>{this.reject(i)}),n.length===0&&o(),this.initialized=!0}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),la=new D("");function Wm(){mc(()=>{let e="";throw new w(600,e)})}function Um(e){return e.isBoundToModule}var CE=10;function Bu(e,t){return Array.isArray(t)?t.reduce(Bu,e):b(b({},e),t)}var wt=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=y(Ve);afterRenderManager=y(Iu);zonelessEnabled=y(Es);rootEffectScheduler=y(xl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new te;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=y(Ft);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(V(n=>!n))}constructor(){y(Fn,{optional:!0})}whenStable(){let n;return new Promise(o=>{n=this.isStable.subscribe({next:i=>{i&&o()}})}).finally(()=>{n.unsubscribe()})}_injector=y(re);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,o){return this.bootstrapImpl(n,o)}bootstrapImpl(n,o,i=ye.NULL){return this._injector.get(K).run(()=>{Y(10);let s=n instanceof ra;if(!this._injector.get(Hu).done){let C="";throw new w(405,C)}let c;s?c=n:c=this._injector.get(Oi).resolveComponentFactory(n),this.componentTypes.push(c.componentType);let l=Um(c)?void 0:this._injector.get(On),u=o||c.selector,d=c.create(i,[],u,l),v=d.location.nativeElement,f=d.injector.get(aa,null);return f?.registerApplication(v),d.onDestroy(()=>{this.detachView(d.hostView),bi(this.components,d),f?.unregisterApplication(v)}),this._loadComponent(d),Y(11,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Y(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(na.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new w(101,!1);let n=N(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,N(n),this.afterTick.next(),Y(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(kn,null,{optional:!0}));let n=0;for(;this.dirtyFlags!==0&&n++<CE;)Y(14),this.synchronizeOnce(),Y(15)}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let n=!1;if(this.dirtyFlags&7){let o=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i}of this.allViews){if(!o&&!mi(i))continue;let r=o&&!this.zonelessEnabled?0:1;bm(i,r),n=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}n||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>mi(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let o=n;this._views.push(o),o.attachToAppRef(this)}detachView(n){let o=n;bi(this._views,o),o.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView);try{this.tick()}catch(i){this.internalErrorHandler(i)}this.components.push(n),this._injector.get(la,[]).forEach(i=>i(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>bi(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new w(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function bi(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function Fi(e,t,n,o){let i=z(),r=gi();if(jt(i,r,t)){let s=Ae(),a=bs();Yw(a,i,e,t,n,o)}return Fi}var oN=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";function S(e,t,n){let o=z(),i=gi();if(jt(o,i,t)){let r=Ae(),s=bs();pm(s,o,e,t,o[Z],n)}return S}function ou(e,t,n,o,i){_u(t,e,n,i?"class":"style",o)}function h(e,t,n,o){let i=z(),r=i[R],s=e+xe,a=r.firstCreatePass?Am(s,i,2,t,fm,ml(),n,o):r.data[s];if(Zw(a,i,e,t,wE),fi(a)){let c=i[R];Au(c,i,a),Fh(c,a,i)}return o!=null&&dm(i,a),h}function p(){let e=Ae(),t=we(),n=Xw(t);return e.firstCreatePass&&_m(e,n),uf(n)&&df(),cf(),n.classesWithoutHost!=null&&cC(n)&&ou(e,n,z(),n.classesWithoutHost,!0),n.stylesWithoutHost!=null&&lC(n)&&ou(e,n,z(),n.stylesWithoutHost,!1),p}function Ee(e,t,n,o){return h(e,t,n,o),p(),Ee}var wE=(e,t,n,o,i)=>(ws(!0),zh(t[Z],o,If()));function St(){return z()}var Li="en-US";var SE=Li;function zm(e){typeof e=="string"&&(SE=e.toLowerCase().replace(/_/g,"-"))}function q(e,t,n){let o=z(),i=Ae(),r=we();return $m(i,o,o[Z],r,e,t,n),q}function $m(e,t,n,o,i,r,s){let a=!0,c=null;if((o.type&3||s)&&(c??=Pl(o,t,r),LS(o,e,t,s,n,i,r,c)&&(a=!1)),a){let l=o.outputs?.[i],u=o.hostDirectiveOutputs?.[i];if(u&&u.length)for(let d=0;d<u.length;d+=2){let v=u[d],f=u[d+1];c??=Pl(o,t,r),oh(o,t,v,f,i,c)}if(l&&l.length)for(let d of l)c??=Pl(o,t,r),oh(o,t,d,i,i,c)}}function O(e=1){return Df(e)}function Ts(e,t){return e<<17|t<<2}function Rn(e){return e>>17&32767}function EE(e){return(e&2)==2}function DE(e,t){return e&131071|t<<17}function iu(e){return e|2}function So(e){return(e&131068)>>2}function Nl(e,t){return e&-131069|t<<2}function IE(e){return(e&1)===1}function ru(e){return e|1}function ME(e,t,n,o,i,r){let s=r?t.classBindings:t.styleBindings,a=Rn(s),c=So(s);e[o]=n;let l=!1,u;if(Array.isArray(n)){let d=n;u=d[1],(u===null||po(d,u)>0)&&(l=!0)}else u=n;if(i)if(c!==0){let v=Rn(e[a+1]);e[o+1]=Ts(v,a),v!==0&&(e[v+1]=Nl(e[v+1],o)),e[a+1]=DE(e[a+1],o)}else e[o+1]=Ts(a,0),a!==0&&(e[a+1]=Nl(e[a+1],o)),a=o;else e[o+1]=Ts(c,0),a===0?a=o:e[c+1]=Nl(e[c+1],o),c=o;l&&(e[o+1]=iu(e[o+1])),ah(e,u,o,!0),ah(e,u,o,!1),TE(t,u,e,o,r),s=Ts(a,c),r?t.classBindings=s:t.styleBindings=s}function TE(e,t,n,o,i){let r=i?e.residualClasses:e.residualStyles;r!=null&&typeof t=="string"&&po(r,t)>=0&&(n[o+1]=ru(n[o+1]))}function ah(e,t,n,o){let i=e[n+1],r=t===null,s=o?Rn(i):So(i),a=!1;for(;s!==0&&(a===!1||r);){let c=e[s],l=e[s+1];xE(c,t)&&(a=!0,e[s+1]=o?ru(l):iu(l)),s=o?Rn(l):So(l)}a&&(e[n+1]=o?iu(i):ru(i))}function xE(e,t){return e===null||t==null||(Array.isArray(e)?e[1]:e)===t?!0:Array.isArray(e)&&typeof t=="string"?po(e,t)>=0:!1}var at={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function AE(e){return e.substring(at.key,at.keyEnd)}function _E(e){return kE(e),Gm(e,qm(e,0,at.textEnd))}function Gm(e,t){let n=at.textEnd;return n===t?-1:(t=at.keyEnd=PE(e,at.key=t,n),qm(e,t,n))}function kE(e){at.key=0,at.keyEnd=0,at.value=0,at.valueEnd=0,at.textEnd=e.length}function qm(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}function PE(e,t,n){for(;t<n&&e.charCodeAt(t)>32;)t++;return t}function To(e,t,n){return Ym(e,t,n,!1),To}function ce(e,t){return Ym(e,t,null,!0),ce}function Wu(e){RE(VE,OE,e,!0)}function OE(e,t){for(let n=_E(t);n>=0;n=Gm(t,n))cs(e,AE(t),!0)}function Ym(e,t,n,o){let i=z(),r=Ae(),s=ms(2);if(r.firstUpdatePass&&Qm(r,e,s,o),t!==He&&jt(i,s,t)){let a=r.data[Nt()];Zm(r,a,i,i[Z],e,i[s+1]=BE(t,n),o,s)}}function RE(e,t,n,o){let i=Ae(),r=ms(2);i.firstUpdatePass&&Qm(i,null,r,o);let s=z();if(n!==He&&jt(s,r,n)){let a=i.data[Nt()];if(Xm(a,o)&&!Km(i,r)){let c=o?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(n=is(c,n||"")),ou(i,a,s,n,o)}else HE(i,a,s,s[Z],s[r+1],s[r+1]=JE(e,t,n),o,r)}}function Km(e,t){return t>=e.expandoStartIndex}function Qm(e,t,n,o){let i=e.data;if(i[n+1]===null){let r=i[Nt()],s=Km(e,n);Xm(r,o)&&t===null&&!s&&(t=!1),t=NE(i,r,t,o),ME(i,r,t,n,s,o)}}function NE(e,t,n,o){let i=Cf(e),r=o?t.residualClasses:t.residualStyles;if(i===null)(o?t.classBindings:t.styleBindings)===0&&(n=Fl(null,e,t,n,o),n=Ii(n,t.attrs,o),r=null);else{let s=t.directiveStylingLast;if(s===-1||e[s]!==i)if(n=Fl(i,e,t,n,o),r===null){let c=FE(e,t,o);c!==void 0&&Array.isArray(c)&&(c=Fl(null,e,t,c[1],o),c=Ii(c,t.attrs,o),LE(e,t,o,c))}else r=jE(e,t,o)}return r!==void 0&&(o?t.residualClasses=r:t.residualStyles=r),n}function FE(e,t,n){let o=n?t.classBindings:t.styleBindings;if(So(o)!==0)return e[Rn(o)]}function LE(e,t,n,o){let i=n?t.classBindings:t.styleBindings;e[Rn(i)]=o}function jE(e,t,n){let o,i=t.directiveEnd;for(let r=1+t.directiveStylingLast;r<i;r++){let s=e[r].hostAttrs;o=Ii(o,s,n)}return Ii(o,t.attrs,n)}function Fl(e,t,n,o,i){let r=null,s=n.directiveEnd,a=n.directiveStylingLast;for(a===-1?a=n.directiveStart:a++;a<s&&(r=t[a],o=Ii(o,r.hostAttrs,i),r!==e);)a++;return e!==null&&(n.directiveStylingLast=a),o}function Ii(e,t,n){let o=n?1:2,i=-1;if(t!==null)for(let r=0;r<t.length;r++){let s=t[r];typeof s=="number"?i=s:i===o&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),cs(e,s,n?!0:t[++r]))}return e===void 0?null:e}function JE(e,t,n){if(n==null||n==="")return Me;let o=[],i=Nn(n);if(Array.isArray(i))for(let r=0;r<i.length;r++)e(o,i[r],!0);else if(typeof i=="object")for(let r in i)i.hasOwnProperty(r)&&e(o,r,i[r]);else typeof i=="string"&&t(o,i);return o}function VE(e,t,n){let o=String(t);o!==""&&!o.includes(" ")&&cs(e,o,n)}function HE(e,t,n,o,i,r,s,a){i===He&&(i=Me);let c=0,l=0,u=0<i.length?i[0]:null,d=0<r.length?r[0]:null;for(;u!==null||d!==null;){let v=c<i.length?i[c+1]:void 0,f=l<r.length?r[l+1]:void 0,C=null,x;u===d?(c+=2,l+=2,v!==f&&(C=d,x=f)):d===null||u!==null&&u<d?(c+=2,C=u):(l+=2,C=d,x=f),C!==null&&Zm(e,t,n,o,C,x,s,a),u=c<i.length?i[c]:null,d=l<r.length?r[l]:null}}function Zm(e,t,n,o,i,r,s,a){if(!(t.type&3))return;let c=e.data,l=c[a+1],u=IE(l)?ch(c,t,n,i,So(l),s):void 0;if(!$s(u)){$s(r)||EE(l)&&(r=ch(c,null,n,i,a,s));let d=ul(Nt(),n);Jw(o,s,d,i,r)}}function ch(e,t,n,o,i,r){let s=t===null,a;for(;i>0;){let c=e[i],l=Array.isArray(c),u=l?c[1]:c,d=u===null,v=n[i+1];v===He&&(v=d?Me:void 0);let f=d?ls(v,o):u===o?v:void 0;if(l&&!$s(f)&&(f=ls(c,o)),$s(f)&&(a=f,s))return a;let C=e[i+1];i=s?Rn(C):So(C)}if(t!==null){let c=r?t.residualClasses:t.residualStyles;c!=null&&(a=ls(c,o))}return a}function $s(e){return e!==void 0}function BE(e,t){return e==null||e===""||(typeof t=="string"?e=e+t:typeof e=="object"&&(e=Ot(Nn(e)))),e}function Xm(e,t){return(e.flags&(t?8:16))!==0}function m(e,t=""){let n=z(),o=Ae(),i=e+xe,r=o.firstCreatePass?Ou(o,i,1,t,null):o.data[i],s=WE(o,n,r,t,e);n[i]=s,Cs()&&Tu(o,n,s,r),vo(r,!1)}var WE=(e,t,n,o,i)=>(ws(!0),YC(t[Z],o));function UE(e,t,n,o=""){return jt(e,gi(),n)?t+Kt(n)+o:He}function zE(e,t,n,o,i,r=""){let s=mf(),a=FS(e,s,n,i);return ms(2),a?t+Kt(n)+o+Kt(i)+r:He}function j(e){return Be("",e),j}function Be(e,t,n){let o=z(),i=UE(o,e,t,n);return i!==He&&eg(o,Nt(),i),Be}function Ht(e,t,n,o,i){let r=z(),s=zE(r,e,t,n,o,i);return s!==He&&eg(r,Nt(),s),Ht}function eg(e,t,n){let o=ul(t,e);KC(e[Z],o,n)}function ua(e,t,n){Il(t)&&(t=t());let o=z(),i=gi();if(jt(o,i,t)){let r=Ae(),s=bs();pm(s,o,e,t,o[Z],n)}return ua}function Uu(e,t){let n=Il(e);return n&&e.set(t),n}function da(e,t){let n=z(),o=Ae(),i=we();return $m(o,n,n[Z],i,e,t),da}function $E(e,t,n){let o=Ae();if(o.firstCreatePass){let i=mt(e);su(n,o.data,o.blueprint,i,!0),su(t,o.data,o.blueprint,i,!1)}}function su(e,t,n,o,i){if(e=pe(e),Array.isArray(e))for(let r=0;r<e.length;r++)su(e[r],t,n,o,i);else{let r=Ae(),s=z(),a=we(),c=bn(e)?e:pe(e.provide),l=rl(e),u=a.providerIndexes&1048575,d=a.directiveStart,v=a.providerIndexes>>20;if(bn(e)||!e.multi){let f=new _n(l,i,T,null),C=jl(c,t,i?u:u+v,d);C===-1?(Vl(Fs(a,s),r,c),Ll(r,e,t.length),t.push(c),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),n.push(f),s.push(f)):(n[C]=f,s[C]=f)}else{let f=jl(c,t,u+v,d),C=jl(c,t,u,u+v),x=f>=0&&n[f],U=C>=0&&n[C];if(i&&!U||!i&&!x){Vl(Fs(a,s),r,c);let H=YE(i?qE:GE,n.length,i,o,l,e);!i&&U&&(n[C].providerFactory=H),Ll(r,e,t.length,0),t.push(c),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),n.push(H),s.push(H)}else{let H=tg(n[i?C:f],l,!i&&o);Ll(r,e,f>-1?f:C,H)}!i&&o&&U&&n[C].componentProviders++}}}function Ll(e,t,n,o){let i=bn(t),r=Yp(t);if(i||r){let c=(r?pe(t.useClass):t).prototype.ngOnDestroy;if(c){let l=e.destroyHooks||(e.destroyHooks=[]);if(!i&&t.multi){let u=l.indexOf(n);u===-1?l.push(n,[o,c]):l[u+1].push(o,c)}else l.push(n,c)}}}function tg(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function jl(e,t,n,o){for(let i=n;i<o;i++)if(t[i]===e)return i;return-1}function GE(e,t,n,o,i){return au(this.multi,[])}function qE(e,t,n,o,i){let r=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=Ls(o,o[R],this.providerFactory.index,i);s=c.slice(0,a),au(r,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],au(r,s);return s}function au(e,t){for(let n=0;n<e.length;n++){let o=e[n];t.push(o())}return t}function YE(e,t,n,o,i,r){let s=new _n(e,n,T,null);return s.multi=[],s.index=t,s.componentProviders=0,tg(s,i,o&&!n),s}function pa(e,t=[]){return n=>{n.providersResolver=(o,i)=>$E(o,i?i(e):e,t)}}function KE(e,t){let n=e[t];return n===He?void 0:n}function QE(e,t,n,o,i,r){let s=t+n;return jt(e,s,i)?NS(e,s+1,r?o.call(r,i):o(i)):KE(e,s+1)}function zu(e,t){let n=Ae(),o,i=e+xe;n.firstCreatePass?(o=ZE(t,n.pipeRegistry),n.data[i]=o,o.onDestroy&&(n.destroyHooks??=[]).push(i,o.onDestroy)):o=n.data[i];let r=o.factory||(o.factory=$t(o.type,!0)),s,a=Ie(T);try{let c=Ns(!1),l=r();return Ns(c),dl(n,z(),i,l),l}finally{Ie(a)}}function ZE(e,t){if(t)for(let n=t.length-1;n>=0;n--){let o=t[n];if(e===o.name)return o}}function $u(e,t,n){let o=e+xe,i=z(),r=Xp(i,o);return XE(i,o)?QE(i,hf(),t,r.transform,n,r):r.transform(n)}function XE(e,t){return e[R].data[t].pure}var xs=null;function ng(e){xs!==null&&(e.defaultEncapsulation!==xs.defaultEncapsulation||e.preserveWhitespaces!==xs.preserveWhitespaces)||(xs=e)}var Gs=class{ngModuleFactory;componentFactories;constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}},Gu=(()=>{class e{compileModuleSync(n){return new Di(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){let o=this.compileModuleSync(n),i=tl(n),r=Yh(i.declarations).reduce((s,a)=>{let c=Rt(a);return c&&s.push(new Pn(c)),s},[]);return new Gs(o,r)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),og=new D("");var eD=(()=>{class e{zone=y(K);changeDetectionScheduler=y(qt);applicationRef=y(wt);applicationErrorHandler=y(Ve);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(n){this.applicationErrorHandler(n)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function ig({ngZoneFactory:e,ignoreChangesOutsideZone:t,scheduleInRootZone:n}){return e??=()=>new K(F(b({},qu()),{scheduleInRootZone:n})),[{provide:K,useFactory:e},{provide:Zt,multi:!0,useFactory:()=>{let o=y(eD,{optional:!0});return()=>o.initialize()}},{provide:Zt,multi:!0,useFactory:()=>{let o=y(tD);return()=>{o.initialize()}}},t===!0?{provide:Ml,useValue:!0}:[],{provide:Tl,useValue:n??em},{provide:Ve,useFactory:()=>{let o=y(K),i=y(re),r;return s=>{o.runOutsideAngular(()=>{i.destroyed&&!r?setTimeout(()=>{throw s}):(r??=i.get(et),r.handleError(s))})}}}]}function qu(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:e?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:e?.runCoalescing??!1}}var tD=(()=>{class e{subscription=new ee;initialized=!1;zone=y(K);pendingTasks=y(Ft);initialize(){if(this.initialized)return;this.initialized=!0;let n=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(n=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{K.assertNotInAngularZone(),queueMicrotask(()=>{n!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(n),n=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{K.assertInAngularZone(),n??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var rg=(()=>{class e{applicationErrorHandler=y(Ve);appRef=y(wt);taskService=y(Ft);ngZone=y(K);zonelessEnabled=y(Es);tracing=y(Fn,{optional:!0});disableScheduling=y(Ml,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ee;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Vs):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(y(Tl,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof wi||!this.zoneIsDefined)}notify(n){if(!this.zonelessEnabled&&n===5)return;let o=!1;switch(n){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,o=!0;break}case 12:{this.appRef.dirtyFlags|=16,o=!0;break}case 13:{this.appRef.dirtyFlags|=2,o=!0;break}case 11:{o=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(o))return;let i=this.useMicrotaskScheduler?Uf:tm;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(n){return!(this.disableScheduling&&!n||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Vs+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(o){this.taskService.remove(n),this.applicationErrorHandler(o)}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Uf(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function nD(){return typeof $localize<"u"&&$localize.locale||Li}var fa=new D("",{providedIn:"root",factory:()=>y(fa,{optional:!0,skipSelf:!0})||nD()});function me(e){return Fp(e)}function ji(e,t){return Ar(e,t?.equal)}var sg=class{[ve];constructor(t){this[ve]=t}destroy(){this[ve].destroy()}};var hg=Symbol("InputSignalNode#UNSET"),gD=F(b({},_r),{transformFn:void 0,applyValueToInputSignal(e,t){Zn(e,t)}});function mg(e,t){let n=Object.create(gD);n.value=e,n.transformFn=t?.transform;function o(){if(Yn(n),n.value===hg){let i=null;throw new w(-950,i)}return n.value}return o[ve]=n,o}var ha=class{attributeName;constructor(t){this.attributeName=t}__NG_ELEMENT_ID__=()=>Ti(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},vD=new D("");vD.__NG_ELEMENT_ID__=e=>{let t=we();if(t===null)throw new w(204,!1);if(t.type&2)return t.value;if(e&8)return null;throw new w(204,!1)};function ag(e,t){return mg(e,t)}function yD(e){return mg(hg,e)}var gg=(ag.required=yD,ag);function bD(e,t,n){let o=new Di(n);return Promise.resolve(o)}function cg(e){for(let t=e.length-1;t>=0;t--)if(e[t]!==void 0)return e[t]}var ma=new D(""),CD=new D("");function Ji(e){return!e.moduleRef}function wD(e){let t=Ji(e)?e.r3Injector:e.moduleRef.injector,n=t.get(K);return n.run(()=>{Ji(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let o=t.get(Ve),i;if(n.runOutsideAngular(()=>{i=n.onError.subscribe({next:o})}),Ji(e)){let r=()=>t.destroy(),s=e.platformInjector.get(ma);s.add(r),t.onDestroy(()=>{i.unsubscribe(),s.delete(r)})}else{let r=()=>e.moduleRef.destroy(),s=e.platformInjector.get(ma);s.add(r),e.moduleRef.onDestroy(()=>{bi(e.allPlatformModules,e.moduleRef),i.unsubscribe(),s.delete(r)})}return ED(o,n,()=>{let r=t.get(Ft),s=r.add(),a=t.get(Hu);return a.runInitializers(),a.donePromise.then(()=>{let c=t.get(fa,Li);if(zm(c||Li),!t.get(CD,!0))return Ji(e)?t.get(wt):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(Ji(e)){let u=t.get(wt);return e.rootComponent!==void 0&&u.bootstrap(e.rootComponent),u}else return vg?.(e.moduleRef,e.allPlatformModules),e.moduleRef}).finally(()=>void r.remove(s))})})}var vg;function lg(){vg=SD}function SD(e,t){let n=e.injector.get(wt);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(o=>n.bootstrap(o));else if(e.instance.ngDoBootstrap)e.instance.ngDoBootstrap(n);else throw new w(-403,!1);t.push(e)}function ED(e,t,n){try{let o=n();return sn(o)?o.catch(i=>{throw t.runOutsideAngular(()=>e(i)),i}):o}catch(o){throw t.runOutsideAngular(()=>e(o)),o}}var yg=(()=>{class e{_injector;_modules=[];_destroyListeners=[];_destroyed=!1;constructor(n){this._injector=n}bootstrapModuleFactory(n,o){let i=o?.scheduleInRootZone,r=()=>om(o?.ngZone,F(b({},qu({eventCoalescing:o?.ngZoneEventCoalescing,runCoalescing:o?.ngZoneRunCoalescing})),{scheduleInRootZone:i})),s=o?.ignoreChangesOutsideZone,a=[ig({ngZoneFactory:r,ignoreChangesOutsideZone:s}),{provide:qt,useExisting:rg},Tf],c=Jm(n.moduleType,this.injector,a);return lg(),wD({moduleRef:c,allPlatformModules:this._modules,platformInjector:this.injector})}bootstrapModule(n,o=[]){let i=Bu({},o);return lg(),bD(this.injector,i,n).then(r=>this.bootstrapModuleFactory(r,i))}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new w(404,!1);this._modules.slice().forEach(o=>o.destroy()),this._destroyListeners.forEach(o=>o());let n=this._injector.get(ma,null);n&&(n.forEach(o=>o()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static \u0275fac=function(o){return new(o||e)(I(ye))};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})(),Xu=null;function DD(e){if(td())throw new w(400,!1);Wm(),Xu=e;let t=e.get(yg);return TD(e),t}function ed(e,t,n=[]){let o=`Platform: ${t}`,i=new D(o);return(r=[])=>{let s=td();if(!s){let a=[...n,...r,{provide:i,useValue:!0}];s=e?.(a)??DD(ID(a,o))}return MD(i)}}function ID(e=[],t){return ye.create({name:t,providers:[{provide:ri,useValue:"platform"},{provide:ma,useValue:new Set([()=>Xu=null])},...e]})}function MD(e){let t=td();if(!t)throw new w(-401,!1);return t}function td(){return Xu?.get(yg)??null}function TD(e){let t=e.get(Ks,null);be(e,()=>{t?.forEach(n=>n())})}var Jn=(()=>{class e{static __NG_ELEMENT_ID__=xD}return e})();function xD(e){return AD(we(),z(),(e&16)===16)}function AD(e,t,n){if(tn(e)&&!n){let o=Qe(e.index,t);return new on(o,o)}else if(e.type&175){let o=t[Ye];return new on(o,t)}return null}var Yu=class{constructor(){}supports(t){return Nu(t)}create(t){return new Ku(t)}},_D=(e,t)=>t,Ku=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(t){this._trackByFn=t||_D}forEachItem(t){let n;for(n=this._itHead;n!==null;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,o=this._removalsHead,i=0,r=null;for(;n||o;){let s=!o||n&&n.currentIndex<ug(o,i,r)?n:o,a=ug(s,i,r),c=s.currentIndex;if(s===o)i--,o=o._nextRemoved;else if(n=n._next,s.previousIndex==null)i++;else{r||(r=[]);let l=a-i,u=c-i;if(l!=u){for(let v=0;v<l;v++){let f=v<r.length?r[v]:r[v]=0,C=f+v;u<=C&&C<l&&(r[v]=f+1)}let d=s.previousIndex;r[d]=u-l}}a!==c&&t(s,a,c)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;n!==null;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;n!==null;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;n!==null;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;n!==null;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;n!==null;n=n._nextIdentityChange)t(n)}diff(t){if(t==null&&(t=[]),!Nu(t))throw new w(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._itHead,o=!1,i,r,s;if(Array.isArray(t)){this.length=t.length;for(let a=0;a<this.length;a++)r=t[a],s=this._trackByFn(a,r),n===null||!Object.is(n.trackById,s)?(n=this._mismatch(n,r,s,a),o=!0):(o&&(n=this._verifyReinsertion(n,r,s,a)),Object.is(n.item,r)||this._addIdentityChange(n,r)),n=n._next}else i=0,km(t,a=>{s=this._trackByFn(i,a),n===null||!Object.is(n.trackById,s)?(n=this._mismatch(n,a,s,i),o=!0):(o&&(n=this._verifyReinsertion(n,a,s,i)),Object.is(n.item,a)||this._addIdentityChange(n,a)),n=n._next,i++}),this.length=i;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;t!==null;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;t!==null;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;t!==null;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,o,i){let r;return t===null?r=this._itTail:(r=t._prev,this._remove(t)),t=this._unlinkedRecords===null?null:this._unlinkedRecords.get(o,null),t!==null?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,r,i)):(t=this._linkedRecords===null?null:this._linkedRecords.get(o,i),t!==null?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,r,i)):t=this._addAfter(new Qu(n,o),r,i)),t}_verifyReinsertion(t,n,o,i){let r=this._unlinkedRecords===null?null:this._unlinkedRecords.get(o,null);return r!==null?t=this._reinsertAfter(r,t._prev,i):t.currentIndex!=i&&(t.currentIndex=i,this._addToMoves(t,i)),t}_truncate(t){for(;t!==null;){let n=t._next;this._addToRemovals(this._unlink(t)),t=n}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,o){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(t);let i=t._prevRemoved,r=t._nextRemoved;return i===null?this._removalsHead=r:i._nextRemoved=r,r===null?this._removalsTail=i:r._prevRemoved=i,this._insertAfter(t,n,o),this._addToMoves(t,o),t}_moveAfter(t,n,o){return this._unlink(t),this._insertAfter(t,n,o),this._addToMoves(t,o),t}_addAfter(t,n,o){return this._insertAfter(t,n,o),this._additionsTail===null?this._additionsTail=this._additionsHead=t:this._additionsTail=this._additionsTail._nextAdded=t,t}_insertAfter(t,n,o){let i=n===null?this._itHead:n._next;return t._next=i,t._prev=n,i===null?this._itTail=t:i._prev=t,n===null?this._itHead=t:n._next=t,this._linkedRecords===null&&(this._linkedRecords=new ga),this._linkedRecords.put(t),t.currentIndex=o,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){this._linkedRecords!==null&&this._linkedRecords.remove(t);let n=t._prev,o=t._next;return n===null?this._itHead=o:n._next=o,o===null?this._itTail=n:o._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail===null?this._movesTail=this._movesHead=t:this._movesTail=this._movesTail._nextMoved=t),t}_addToRemovals(t){return this._unlinkedRecords===null&&(this._unlinkedRecords=new ga),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=t:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=t,t}},Qu=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(t,n){this.item=t,this.trackById=n}},Zu=class{_head=null;_tail=null;add(t){this._head===null?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let o;for(o=this._head;o!==null;o=o._nextDup)if((n===null||n<=o.currentIndex)&&Object.is(o.trackById,t))return o;return null}remove(t){let n=t._prevDup,o=t._nextDup;return n===null?this._head=o:n._nextDup=o,o===null?this._tail=n:o._prevDup=n,this._head===null}},ga=class{map=new Map;put(t){let n=t.trackById,o=this.map.get(n);o||(o=new Zu,this.map.set(n,o)),o.add(t)}get(t,n){let o=t,i=this.map.get(o);return i?i.get(t,n):null}remove(t){let n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function ug(e,t,n){let o=e.previousIndex;if(o===null)return o;let i=0;return n&&o<n.length&&(i=n[o]),o+t+i}function dg(){return new nd([new Yu])}var nd=(()=>{class e{factories;static \u0275prov=E({token:e,providedIn:"root",factory:dg});constructor(n){this.factories=n}static create(n,o){if(o!=null){let i=o.factories.slice();n=n.concat(i)}return new e(n)}static extend(n){return{provide:e,useFactory:()=>{let o=y(e,{optional:!0,skipSelf:!0});return e.create(n,o||dg())}}}find(n){let o=this.factories.find(i=>i.supports(n));if(o!=null)return o;throw new w(901,!1)}}return e})();var bg=ed(null,"core",[]),Cg=(()=>{class e{constructor(n){}static \u0275fac=function(o){return new(o||e)(I(wt))};static \u0275mod=Se({type:e});static \u0275inj=he({})}return e})();function Vn(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}function wg(e){let t=Rt(e);if(!t)return null;let n=new Pn(t);return{get selector(){return n.selector},get type(){return n.componentType},get inputs(){return n.inputs},get outputs(){return n.outputs},get ngContentSelectors(){return n.ngContentSelectors},get isStandalone(){return t.standalone},get isSignal(){return t.signals}}}var Dg=null;function We(){return Dg}function od(e){Dg??=e}var Vi=class{},Hi=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:()=>y(Ig),providedIn:"platform"})}return e})(),id=new D(""),Ig=(()=>{class e extends Hi{_location;_history;_doc=y(oe);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return We().getBaseHref(this._doc)}onPopState(n){let o=We().getGlobalEventTarget(this._doc,"window");return o.addEventListener("popstate",n,!1),()=>o.removeEventListener("popstate",n)}onHashChange(n){let o=We().getGlobalEventTarget(this._doc,"window");return o.addEventListener("hashchange",n,!1),()=>o.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,o,i){this._history.pushState(n,o,i)}replaceState(n,o,i){this._history.replaceState(n,o,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function va(e,t){return e?t?e.endsWith("/")?t.startsWith("/")?e+t.slice(1):e+t:t.startsWith("/")?e+t:`${e}/${t}`:e:t}function Sg(e){let t=e.search(/#|\?|$/);return e[t-1]==="/"?e.slice(0,t-1)+e.slice(t):e}function ct(e){return e&&e[0]!=="?"?`?${e}`:e}var lt=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:()=>y(ba),providedIn:"root"})}return e})(),ya=new D(""),ba=(()=>{class e extends lt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(n,o){super(),this._platformLocation=n,this._baseHref=o??this._platformLocation.getBaseHrefFromDOM()??y(oe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return va(this._baseHref,n)}path(n=!1){let o=this._platformLocation.pathname+ct(this._platformLocation.search),i=this._platformLocation.hash;return i&&n?`${o}${i}`:o}pushState(n,o,i,r){let s=this.prepareExternalUrl(i+ct(r));this._platformLocation.pushState(n,o,s)}replaceState(n,o,i,r){let s=this.prepareExternalUrl(i+ct(r));this._platformLocation.replaceState(n,o,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static \u0275fac=function(o){return new(o||e)(I(Hi),I(ya,8))};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Et=(()=>{class e{_subject=new te;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(n){this._locationStrategy=n;let o=this._locationStrategy.getBaseHref();this._basePath=OD(Sg(Eg(o))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,o=""){return this.path()==this.normalize(n+ct(o))}normalize(n){return e.stripTrailingSlash(PD(this._basePath,Eg(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,o="",i=null){this._locationStrategy.pushState(i,"",n,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+ct(o)),i)}replaceState(n,o="",i=null){this._locationStrategy.replaceState(i,"",n,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+ct(o)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(o=>{this._notifyUrlChangeListeners(o.url,o.state)}),()=>{let o=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(o,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",o){this._urlChangeListeners.forEach(i=>i(n,o))}subscribe(n,o,i){return this._subject.subscribe({next:n,error:o??void 0,complete:i??void 0})}static normalizeQueryParams=ct;static joinWithSlash=va;static stripTrailingSlash=Sg;static \u0275fac=function(o){return new(o||e)(I(lt))};static \u0275prov=E({token:e,factory:()=>kD(),providedIn:"root"})}return e})();function kD(){return new Et(I(lt))}function PD(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function Eg(e){return e.replace(/\/index.html$/,"")}function OD(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}var sd=(()=>{class e extends lt{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(n,o){super(),this._platformLocation=n,o!=null&&(this._baseHref=o)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let o=this._platformLocation.hash??"#";return o.length>0?o.substring(1):o}prepareExternalUrl(n){let o=va(this._baseHref,n);return o.length>0?"#"+o:o}pushState(n,o,i,r){let s=this.prepareExternalUrl(i+ct(r))||this._platformLocation.pathname;this._platformLocation.pushState(n,o,s)}replaceState(n,o,i,r){let s=this.prepareExternalUrl(i+ct(r))||this._platformLocation.pathname;this._platformLocation.replaceState(n,o,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static \u0275fac=function(o){return new(o||e)(I(Hi),I(ya,8))};static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();var rd=/\s+/,Mg=[],Bi=(()=>{class e{_ngEl;_renderer;initialClasses=Mg;rawClass;stateMap=new Map;constructor(n,o){this._ngEl=n,this._renderer=o}set klass(n){this.initialClasses=n!=null?n.trim().split(rd):Mg}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(rd):n}ngDoCheck(){for(let o of this.initialClasses)this._updateState(o,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let o of n)this._updateState(o,!0);else if(n!=null)for(let o of Object.keys(n))this._updateState(o,!!n[o]);this._applyStateDiff()}_updateState(n,o){let i=this.stateMap.get(n);i!==void 0?(i.enabled!==o&&(i.changed=!0,i.enabled=o),i.touched=!0):this.stateMap.set(n,{enabled:o,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let o=n[0],i=n[1];i.changed?(this._toggleClass(o,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(o,!1),this.stateMap.delete(o)),i.touched=!1}}_toggleClass(n,o){n=n.trim(),n.length>0&&n.split(rd).forEach(i=>{o?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(o){return new(o||e)(T(Ct),T(Vt))};static \u0275dir=_e({type:e,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return e})();var Ca=class{$implicit;ngForOf;index;count;constructor(t,n,o,i){this.$implicit=t,this.ngForOf=n,this.index=o,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Le=(()=>{class e{_viewContainer;_template;_differs;set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(n,o,i){this._viewContainer=n,this._template=o,this._differs=i}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;!this._differ&&n&&(this._differ=this._differs.find(n).create(this.ngForTrackBy))}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let o=this._viewContainer;n.forEachOperation((i,r,s)=>{if(i.previousIndex==null)o.createEmbeddedView(this._template,new Ca(i.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)o.remove(r===null?void 0:r);else if(r!==null){let a=o.get(r);o.move(a,s),Tg(a,i)}});for(let i=0,r=o.length;i<r;i++){let a=o.get(i).context;a.index=i,a.count=r,a.ngForOf=this._ngForOf}n.forEachIdentityChange(i=>{let r=o.get(i.currentIndex);Tg(r,i)})}static ngTemplateContextGuard(n,o){return!0}static \u0275fac=function(o){return new(o||e)(T(Ln),T(Pi),T(nd))};static \u0275dir=_e({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return e})();function Tg(e,t){e.context.$implicit=t.item}var ut=(()=>{class e{_viewContainer;_context=new wa;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(n,o){this._viewContainer=n,this._thenTemplateRef=o}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){xg(n,!1),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){xg(n,!1),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(n,o){return!0}static \u0275fac=function(o){return new(o||e)(T(Ln),T(Pi))};static \u0275dir=_e({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return e})(),wa=class{$implicit=null;ngIf=null};function xg(e,t){if(e&&!e.createEmbeddedView)throw new w(2020,!1)}function RD(e,t){return new w(2100,!1)}var ND=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g,ad=(()=>{class e{transform(n){if(n==null)return null;if(typeof n!="string")throw RD(e,n);return n.replace(ND,o=>o[0].toUpperCase()+o.slice(1).toLowerCase())}static \u0275fac=function(o){return new(o||e)};static \u0275pipe=Fu({name:"titlecase",type:e,pure:!0})}return e})();var Wi=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Se({type:e});static \u0275inj=he({})}return e})();function cd(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let o=n.indexOf("="),[i,r]=o==-1?[n,""]:[n.slice(0,o),n.slice(o+1)];if(i.trim()===t)return decodeURIComponent(r)}return null}var Ui=class{};var Ag="browser";var _g=(()=>{class e{static \u0275prov=E({token:e,providedIn:"root",factory:()=>new ld(y(oe),window)})}return e})(),ld=class{document;window;offset=()=>[0,0];constructor(t,n){this.document=t,this.window=n}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t,n){this.window.scrollTo(F(b({},n),{left:t[0],top:t[1]}))}scrollToAnchor(t,n){let o=FD(this.document,t);o&&(this.scrollToElement(o,n),o.focus())}setHistoryScrollRestoration(t){try{this.window.history.scrollRestoration=t}catch{console.warn(Yt(2400,!1))}}scrollToElement(t,n){let o=t.getBoundingClientRect(),i=o.left+this.window.pageXOffset,r=o.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(F(b({},n),{left:i-s[0],top:r-s[1]}))}};function FD(e,t){let n=e.getElementById(t)||e.getElementsByName(t)[0];if(n)return n;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let o=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),i=o.currentNode;for(;i;){let r=i.shadowRoot;if(r){let s=r.getElementById(t)||r.querySelector(`[name="${t}"]`);if(s)return s}i=o.nextNode()}}return null}var zi=class{_doc;constructor(t){this._doc=t}manager},Sa=(()=>{class e extends zi{constructor(n){super(n)}supports(n){return!0}addEventListener(n,o,i,r){return n.addEventListener(o,i,r),()=>this.removeEventListener(n,o,i,r)}removeEventListener(n,o,i,r){return n.removeEventListener(o,i,r)}static \u0275fac=function(o){return new(o||e)(I(oe))};static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})(),Da=new D(""),hd=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(n,o){this._zone=o,n.forEach(s=>{s.manager=this});let i=n.filter(s=>!(s instanceof Sa));this._plugins=i.slice().reverse();let r=n.find(s=>s instanceof Sa);r&&this._plugins.push(r)}addEventListener(n,o,i,r){return this._findPluginFor(o).addEventListener(n,o,i,r)}getZone(){return this._zone}_findPluginFor(n){let o=this._eventNameToPlugin.get(n);if(o)return o;if(o=this._plugins.find(r=>r.supports(n)),!o)throw new w(5101,!1);return this._eventNameToPlugin.set(n,o),o}static \u0275fac=function(o){return new(o||e)(I(Da),I(K))};static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})(),ud="ng-app-id";function kg(e){for(let t of e)t.remove()}function Pg(e,t){let n=t.createElement("style");return n.textContent=e,n}function LD(e,t,n,o){let i=e.head?.querySelectorAll(`style[${ud}="${t}"],link[${ud}="${t}"]`);if(i)for(let r of i)r.removeAttribute(ud),r instanceof HTMLLinkElement?o.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&n.set(r.textContent,{usage:0,elements:[r]})}function pd(e,t){let n=t.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n}var md=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(n,o,i,r={}){this.doc=n,this.appId=o,this.nonce=i,LD(n,o,this.inline,this.external),this.hosts.add(n.head)}addStyles(n,o){for(let i of n)this.addUsage(i,this.inline,Pg);o?.forEach(i=>this.addUsage(i,this.external,pd))}removeStyles(n,o){for(let i of n)this.removeUsage(i,this.inline);o?.forEach(i=>this.removeUsage(i,this.external))}addUsage(n,o,i){let r=o.get(n);r?r.usage++:o.set(n,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,i(n,this.doc)))})}removeUsage(n,o){let i=o.get(n);i&&(i.usage--,i.usage<=0&&(kg(i.elements),o.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])kg(n);this.hosts.clear()}addHost(n){this.hosts.add(n);for(let[o,{elements:i}]of this.inline)i.push(this.addElement(n,Pg(o,this.doc)));for(let[o,{elements:i}]of this.external)i.push(this.addElement(n,pd(o,this.doc)))}removeHost(n){this.hosts.delete(n)}addElement(n,o){return this.nonce&&o.setAttribute("nonce",this.nonce),n.appendChild(o)}static \u0275fac=function(o){return new(o||e)(I(oe),I(Ys),I(Qs,8),I(xi))};static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})(),dd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},gd=/%COMP%/g;var Rg="%COMP%",jD=`_nghost-${Rg}`,JD=`_ngcontent-${Rg}`,VD=!0,HD=new D("",{providedIn:"root",factory:()=>VD});function BD(e){return JD.replace(gd,e)}function WD(e){return jD.replace(gd,e)}function Ng(e,t){return t.map(n=>n.replace(gd,e))}var vd=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(n,o,i,r,s,a,c=null,l=null){this.eventManager=n,this.sharedStylesHost=o,this.appId=i,this.removeStylesOnCompDestroy=r,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.platformIsServer=!1,this.defaultRenderer=new $i(n,s,a,this.platformIsServer,this.tracingService)}createRenderer(n,o){if(!n||!o)return this.defaultRenderer;let i=this.getOrCreateRenderer(n,o);return i instanceof Ea?i.applyToHost(n):i instanceof Gi&&i.applyStyles(),i}getOrCreateRenderer(n,o){let i=this.rendererByCompId,r=i.get(o.id);if(!r){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,v=this.tracingService;switch(o.encapsulation){case Lt.Emulated:r=new Ea(c,l,o,this.appId,u,s,a,d,v);break;case Lt.ShadowDom:return new fd(c,l,n,o,s,a,this.nonce,d,v);default:r=new Gi(c,l,o,u,s,a,d,v);break}i.set(o.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static \u0275fac=function(o){return new(o||e)(I(hd),I(md),I(Ys),I(HD),I(oe),I(K),I(Qs),I(Fn,8))};static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})(),$i=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,n,o,i,r){this.eventManager=t,this.doc=n,this.ngZone=o,this.platformIsServer=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(t,n){return n?this.doc.createElementNS(dd[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(Og(t)?t.content:t).appendChild(n)}insertBefore(t,n,o){t&&(Og(t)?t.content:t).insertBefore(n,o)}removeChild(t,n){n.remove()}selectRootElement(t,n){let o=typeof t=="string"?this.doc.querySelector(t):t;if(!o)throw new w(-5104,!1);return n||(o.textContent=""),o}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,o,i){if(i){n=i+":"+n;let r=dd[i];r?t.setAttributeNS(r,n,o):t.setAttribute(n,o)}else t.setAttribute(n,o)}removeAttribute(t,n,o){if(o){let i=dd[o];i?t.removeAttributeNS(i,n):t.removeAttribute(`${o}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,o,i){i&(bt.DashCase|bt.Important)?t.style.setProperty(n,o,i&bt.Important?"important":""):t.style[n]=o}removeStyle(t,n,o){o&bt.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,o){t!=null&&(t[n]=o)}setValue(t,n){t.nodeValue=n}listen(t,n,o,i){if(typeof t=="string"&&(t=We().getGlobalEventTarget(this.doc,t),!t))throw new w(5102,!1);let r=this.decoratePreventDefault(o);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(t,n,r)),this.eventManager.addEventListener(t,n,r,i)}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;t(n)===!1&&n.preventDefault()}}};function Og(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var fd=class extends $i{sharedStylesHost;hostEl;shadowRoot;constructor(t,n,o,i,r,s,a,c,l){super(t,r,s,c,l),this.sharedStylesHost=n,this.hostEl=o,this.shadowRoot=o.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=i.styles;u=Ng(i.id,u);for(let v of u){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=v,this.shadowRoot.appendChild(f)}let d=i.getExternalStyles?.();if(d)for(let v of d){let f=pd(v,r);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,o){return super.insertBefore(this.nodeOrShadowRoot(t),n,o)}removeChild(t,n){return super.removeChild(null,n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Gi=class extends $i{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,n,o,i,r,s,a,c,l){super(t,r,s,a,c),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=i;let u=o.styles;this.styles=l?Ng(l,u):u,this.styleUrls=o.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&wo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ea=class extends Gi{contentAttr;hostAttr;constructor(t,n,o,i,r,s,a,c,l){let u=i+"-"+o.id;super(t,n,o,r,s,a,c,l,u),this.contentAttr=BD(u),this.hostAttr=WD(u)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let o=super.createElement(t,n);return super.setAttribute(o,this.contentAttr,""),o}};var Ia=class e extends Vi{supportsDOMEvents=!0;static makeCurrent(){od(new e)}onAndCancel(t,n,o,i){return t.addEventListener(n,o,i),()=>{t.removeEventListener(n,o,i)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.remove()}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=UD();return n==null?null:zD(n)}resetBaseElement(){qi=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return cd(document.cookie,t)}},qi=null;function UD(){return qi=qi||document.head.querySelector("base"),qi?qi.getAttribute("href"):null}function zD(e){return new URL(e,document.baseURI).pathname}var Ma=class{addToWindow(t){Te.getAngularTestability=(o,i=!0)=>{let r=t.findTestabilityInTree(o,i);if(r==null)throw new w(5103,!1);return r},Te.getAllAngularTestabilities=()=>t.getAllTestabilities(),Te.getAllAngularRootElements=()=>t.getAllRootElements();let n=o=>{let i=Te.getAllAngularTestabilities(),r=i.length,s=function(){r--,r==0&&o()};i.forEach(a=>{a.whenStable(s)})};Te.frameworkStabilizers||(Te.frameworkStabilizers=[]),Te.frameworkStabilizers.push(n)}findTestabilityInTree(t,n,o){if(n==null)return null;let i=t.getTestability(n);return i??(o?We().isShadowRoot(n)?this.findTestabilityInTree(t,n.host,!0):this.findTestabilityInTree(t,n.parentElement,!0):null)}},$D=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})(),Fg=["alt","control","meta","shift"],GD={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},qD={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Lg=(()=>{class e extends zi{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,o,i,r){let s=e.parseEventName(o),a=e.eventCallback(s.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>We().onAndCancel(n,s.domEventName,a,r))}static parseEventName(n){let o=n.toLowerCase().split("."),i=o.shift();if(o.length===0||!(i==="keydown"||i==="keyup"))return null;let r=e._normalizeKey(o.pop()),s="",a=o.indexOf("code");if(a>-1&&(o.splice(a,1),s="code."),Fg.forEach(l=>{let u=o.indexOf(l);u>-1&&(o.splice(u,1),s+=l+".")}),s+=r,o.length!=0||r.length===0)return null;let c={};return c.domEventName=i,c.fullKey=s,c}static matchEventFullKeyCode(n,o){let i=GD[n.key]||n.key,r="";return o.indexOf("code.")>-1&&(i=n.code,r="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Fg.forEach(s=>{if(s!==i){let a=qD[s];a(n)&&(r+=s+".")}}),r+=i,r===o)}static eventCallback(n,o,i){return r=>{e.matchEventFullKeyCode(r,n)&&i.runGuarded(()=>o(r))}}static _normalizeKey(n){return n==="esc"?"escape":n}static \u0275fac=function(o){return new(o||e)(I(oe))};static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();function YD(){Ia.makeCurrent()}function KD(){return new et}function QD(){return uu(document),document}var ZD=[{provide:xi,useValue:Ag},{provide:Ks,useValue:YD,multi:!0},{provide:oe,useFactory:QD}],yd=ed(bg,"browser",ZD);var XD=[{provide:Mo,useClass:Ma},{provide:aa,useClass:Ri,deps:[K,Ni,Mo]},{provide:Ri,useClass:Ri,deps:[K,Ni,Mo]}],eI=[{provide:ri,useValue:"root"},{provide:et,useFactory:KD},{provide:Da,useClass:Sa,multi:!0,deps:[oe]},{provide:Da,useClass:Lg,multi:!0,deps:[oe]},vd,md,hd,{provide:kn,useExisting:vd},{provide:Ui,useClass:$D},[]],bd=(()=>{class e{constructor(){}static \u0275fac=function(o){return new(o||e)};static \u0275mod=Se({type:e});static \u0275inj=he({providers:[...eI,...XD],imports:[Wi,Cg]})}return e})();var jg=(()=>{class e{_doc;constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}static \u0275fac=function(o){return new(o||e)(I(oe))};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Gg=(()=>{class e{_renderer;_elementRef;onChange=n=>{};onTouched=()=>{};constructor(n,o){this._renderer=n,this._elementRef=o}setProperty(n,o){this._renderer.setProperty(this._elementRef.nativeElement,n,o)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}static \u0275fac=function(o){return new(o||e)(T(Vt),T(Ct))};static \u0275dir=_e({type:e})}return e})(),tI=(()=>{class e extends Gg{static \u0275fac=(()=>{let n;return function(i){return(n||(n=Eo(e)))(i||e)}})();static \u0275dir=_e({type:e,features:[jn]})}return e})(),qg=new D("");var nI={provide:qg,useExisting:wn(()=>ka),multi:!0};function oI(){let e=We()?We().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var iI=new D(""),ka=(()=>{class e extends Gg{_compositionMode;_composing=!1;constructor(n,o,i){super(n,o),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!oI())}writeValue(n){let o=n??"";this.setProperty("value",o)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}static \u0275fac=function(o){return new(o||e)(T(Vt),T(Ct),T(iI,8))};static \u0275dir=_e({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(o,i){o&1&&q("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[pa([nI]),jn]})}return e})();var rI=new D(""),sI=new D("");function Yg(e){return e!=null}function Kg(e){return sn(e)?Q(e):e}function Qg(e){let t={};return e.forEach(n=>{t=n!=null?b(b({},t),n):t}),Object.keys(t).length===0?null:t}function Zg(e,t){return t.map(n=>n(e))}function aI(e){return!e.validate}function Xg(e){return e.map(t=>aI(t)?t:n=>t.validate(n))}function cI(e){if(!e)return null;let t=e.filter(Yg);return t.length==0?null:function(n){return Qg(Zg(n,t))}}function ev(e){return e!=null?cI(Xg(e)):null}function lI(e){if(!e)return null;let t=e.filter(Yg);return t.length==0?null:function(n){let o=Zg(n,t).map(Kg);return xc(o).pipe(V(Qg))}}function tv(e){return e!=null?lI(Xg(e)):null}function Vg(e,t){return e===null?[t]:Array.isArray(e)?[...e,t]:[e,t]}function uI(e){return e._rawValidators}function dI(e){return e._rawAsyncValidators}function Cd(e){return e?Array.isArray(e)?e:[e]:[]}function xa(e,t){return Array.isArray(e)?e.includes(t):e===t}function Hg(e,t){let n=Cd(t);return Cd(e).forEach(i=>{xa(n,i)||n.push(i)}),n}function Bg(e,t){return Cd(t).filter(n=>!xa(e,n))}var Aa=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=ev(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=tv(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,n){return this.control?this.control.hasError(t,n):!1}getError(t,n){return this.control?this.control.getError(t,n):null}},wd=class extends Aa{name;get formDirective(){return null}get path(){return null}},Xi=class extends Aa{_parent=null;name=null;valueAccessor=null},Sd=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},pI={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},W2=F(b({},pI),{"[class.ng-submitted]":"isSubmitted"}),nv=(()=>{class e extends Sd{constructor(n){super(n)}static \u0275fac=function(o){return new(o||e)(T(Xi,2))};static \u0275dir=_e({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(o,i){o&2&&ce("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[jn]})}return e})();var Yi="VALID",Ta="INVALID",xo="PENDING",Ki="DISABLED",Hn=class{},_a=class extends Hn{value;source;constructor(t,n){super(),this.value=t,this.source=n}},Qi=class extends Hn{pristine;source;constructor(t,n){super(),this.pristine=t,this.source=n}},Zi=class extends Hn{touched;source;constructor(t,n){super(),this.touched=t,this.source=n}},Ao=class extends Hn{status;source;constructor(t,n){super(),this.status=t,this.source=n}};var Ed=class extends Hn{source;constructor(t){super(),this.source=t}};function fI(e){return(Pa(e)?e.validators:e)||null}function hI(e){return Array.isArray(e)?ev(e):e||null}function mI(e,t){return(Pa(t)?t.asyncValidators:e)||null}function gI(e){return Array.isArray(e)?tv(e):e||null}function Pa(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var Dd=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,n){this._assignValidators(t),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return me(this.statusReactive)}set status(t){me(()=>this.statusReactive.set(t))}_status=ji(()=>this.statusReactive());statusReactive=vt(void 0);get valid(){return this.status===Yi}get invalid(){return this.status===Ta}get pending(){return this.status==xo}get disabled(){return this.status===Ki}get enabled(){return this.status!==Ki}errors;get pristine(){return me(this.pristineReactive)}set pristine(t){me(()=>this.pristineReactive.set(t))}_pristine=ji(()=>this.pristineReactive());pristineReactive=vt(!0);get dirty(){return!this.pristine}get touched(){return me(this.touchedReactive)}set touched(t){me(()=>this.touchedReactive.set(t))}_touched=ji(()=>this.touchedReactive());touchedReactive=vt(!1);get untouched(){return!this.touched}_events=new te;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Hg(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Hg(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Bg(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Bg(t,this._rawAsyncValidators))}hasValidator(t){return xa(this._rawValidators,t)}hasAsyncValidator(t){return xa(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let n=this.touched===!1;this.touched=!0;let o=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(F(b({},t),{sourceControl:o})),n&&t.emitEvent!==!1&&this._events.next(new Zi(!0,o))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(t))}markAsUntouched(t={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let o=t.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:o})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,o),n&&t.emitEvent!==!1&&this._events.next(new Zi(!1,o))}markAsDirty(t={}){let n=this.pristine===!0;this.pristine=!1;let o=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(F(b({},t),{sourceControl:o})),n&&t.emitEvent!==!1&&this._events.next(new Qi(!1,o))}markAsPristine(t={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let o=t.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,o),n&&t.emitEvent!==!1&&this._events.next(new Qi(!0,o))}markAsPending(t={}){this.status=xo;let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ao(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(F(b({},t),{sourceControl:n}))}disable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=Ki,this.errors=null,this._forEachChild(i=>{i.disable(F(b({},t),{onlySelf:!0}))}),this._updateValue();let o=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new _a(this.value,o)),this._events.next(new Ao(this.status,o)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(F(b({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(t={}){let n=this._parentMarkedDirty(t.onlySelf);this.status=Yi,this._forEachChild(o=>{o.enable(F(b({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(F(b({},t),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(t,n){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let o=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Yi||this.status===xo)&&this._runAsyncValidator(o,t.emitEvent)}let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new _a(this.value,n)),this._events.next(new Ao(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(F(b({},t),{sourceControl:n}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ki:Yi}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,n){if(this.asyncValidator){this.status=xo,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1,shouldHaveEmitted:t!==!1};let o=Kg(this.asyncValidator(this));this._asyncValidationSubscription=o.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:n,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,n={}){this.errors=t,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(t){let n=t;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((o,i)=>o&&o._find(i),this)}getError(t,n){let o=n?this.get(n):this;return o&&o.errors?o.errors[t]:null}hasError(t,n){return!!this.getError(t,n)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,n,o){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||o)&&this._events.next(new Ao(this.status,n)),this._parent&&this._parent._updateControlsErrors(t,n,o)}_initObservables(){this.valueChanges=new se,this.statusChanges=new se}_calculateStatus(){return this._allControlsDisabled()?Ki:this.errors?Ta:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(xo)?xo:this._anyControlsHaveStatus(Ta)?Ta:Yi}_anyControlsHaveStatus(t){return this._anyControls(n=>n.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,n){let o=!this._anyControlsDirty(),i=this.pristine!==o;this.pristine=o,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,n),i&&this._events.next(new Qi(this.pristine,n))}_updateTouched(t={},n){this.touched=this._anyControlsTouched(),this._events.next(new Zi(this.touched,n)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,n)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Pa(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let n=this._parent&&this._parent.dirty;return!t&&!!n&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=hI(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=gI(this._rawAsyncValidators)}};var ov=new D("",{providedIn:"root",factory:()=>Id}),Id="always";function vI(e,t){return[...t.path,e]}function yI(e,t,n=Id){CI(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||n==="always")&&t.valueAccessor.setDisabledState?.(e.disabled),wI(e,t),EI(e,t),SI(e,t),bI(e,t)}function Wg(e,t){e.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(t)})}function bI(e,t){if(t.valueAccessor.setDisabledState){let n=o=>{t.valueAccessor.setDisabledState(o)};e.registerOnDisabledChange(n),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(n)})}}function CI(e,t){let n=uI(e);t.validator!==null?e.setValidators(Vg(n,t.validator)):typeof n=="function"&&e.setValidators([n]);let o=dI(e);t.asyncValidator!==null?e.setAsyncValidators(Vg(o,t.asyncValidator)):typeof o=="function"&&e.setAsyncValidators([o]);let i=()=>e.updateValueAndValidity();Wg(t._rawValidators,i),Wg(t._rawAsyncValidators,i)}function wI(e,t){t.valueAccessor.registerOnChange(n=>{e._pendingValue=n,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&iv(e,t)})}function SI(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&iv(e,t),e.updateOn!=="submit"&&e.markAsTouched()})}function iv(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function EI(e,t){let n=(o,i)=>{t.valueAccessor.writeValue(o),i&&t.viewToModelUpdate(o)};e.registerOnChange(n),t._registerOnDestroy(()=>{e._unregisterOnChange(n)})}function DI(e,t){if(!e.hasOwnProperty("model"))return!1;let n=e.model;return n.isFirstChange()?!0:!Object.is(t,n.currentValue)}function II(e){return Object.getPrototypeOf(e.constructor)===tI}function MI(e,t){if(!t)return null;Array.isArray(t);let n,o,i;return t.forEach(r=>{r.constructor===ka?n=r:II(r)?o=r:i=r}),i||o||n||null}function Ug(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function zg(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var TI=class extends Dd{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,n,o){super(fI(n),mI(o,n)),this._applyFormState(t),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Pa(n)&&(n.nonNullable||n.initialValueIsDefault)&&(zg(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,n={}){this.value=this._pendingValue=t,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(o=>o(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(t,n={}){this.setValue(t,n)}reset(t=this.defaultValue,n={}){this._applyFormState(t),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1,n?.emitEvent!==!1&&this._events.next(new Ed(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Ug(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Ug(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){zg(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var xI={provide:Xi,useExisting:wn(()=>Md)},$g=Promise.resolve(),Md=(()=>{class e extends Xi{_changeDetectorRef;callSetDisabledState;control=new TI;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new se;constructor(n,o,i,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=n,this._setValidators(o),this._setAsyncValidators(i),this.valueAccessor=MI(this,r)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let o=n.name.previousValue;this.formDirective.removeControl({name:o,path:this._getPath(o)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),DI(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){yI(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){$g.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let o=n.isDisabled.currentValue,i=o!==0&&Vn(o);$g.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?vI(n,this._parent):[n]}static \u0275fac=function(o){return new(o||e)(T(wd,9),T(rI,10),T(sI,10),T(qg,10),T(Jn,8),T(ov,8))};static \u0275dir=_e({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[pa([xI]),jn,rn]})}return e})();var AI=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Se({type:e});static \u0275inj=he({})}return e})();var rv=(()=>{class e{static withConfig(n){return{ngModule:e,providers:[{provide:ov,useValue:n.callSetDisabledState??Id}]}}static \u0275fac=function(o){return new(o||e)};static \u0275mod=Se({type:e});static \u0275inj=he({imports:[AI]})}return e})();var _="primary",pr=Symbol("RouteTitle"),kd=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function Un(e){return new kd(e)}function fv(e,t,n){let o=n.path.split("/");if(o.length>e.length||n.pathMatch==="full"&&(t.hasChildren()||o.length<e.length))return null;let i={};for(let r=0;r<o.length;r++){let s=o[r],a=e[r];if(s[0]===":")i[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:e.slice(0,o.length),posParams:i}}function kI(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!Dt(e[n],t[n]))return!1;return!0}function Dt(e,t){let n=e?Pd(e):void 0,o=t?Pd(t):void 0;if(!n||!o||n.length!=o.length)return!1;let i;for(let r=0;r<n.length;r++)if(i=n[r],!hv(e[i],t[i]))return!1;return!0}function Pd(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function hv(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let n=[...e].sort(),o=[...t].sort();return n.every((i,r)=>o[r]===i)}else return e===t}function mv(e){return e.length>0?e[e.length-1]:null}function Bt(e){return Tc(e)?e:sn(e)?Q(Promise.resolve(e)):M(e)}var PI={exact:vv,subset:yv},gv={exact:OI,subset:RI,ignored:()=>!0};function sv(e,t,n){return PI[n.paths](e.root,t.root,n.matrixParams)&&gv[n.queryParams](e.queryParams,t.queryParams)&&!(n.fragment==="exact"&&e.fragment!==t.fragment)}function OI(e,t){return Dt(e,t)}function vv(e,t,n){if(!Bn(e.segments,t.segments)||!Na(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let o in t.children)if(!e.children[o]||!vv(e.children[o],t.children[o],n))return!1;return!0}function RI(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>hv(e[n],t[n]))}function yv(e,t,n){return bv(e,t,t.segments,n)}function bv(e,t,n,o){if(e.segments.length>n.length){let i=e.segments.slice(0,n.length);return!(!Bn(i,n)||t.hasChildren()||!Na(i,n,o))}else if(e.segments.length===n.length){if(!Bn(e.segments,n)||!Na(e.segments,n,o))return!1;for(let i in t.children)if(!e.children[i]||!yv(e.children[i],t.children[i],o))return!1;return!0}else{let i=n.slice(0,e.segments.length),r=n.slice(e.segments.length);return!Bn(e.segments,i)||!Na(e.segments,i,o)||!e.children[_]?!1:bv(e.children[_],t,r,o)}}function Na(e,t,n){return t.every((o,i)=>gv[n](e[i].parameters,o.parameters))}var Mt=class{root;queryParams;fragment;_queryParamMap;constructor(t=new $([],{}),n={},o=null){this.root=t,this.queryParams=n,this.fragment=o}get queryParamMap(){return this._queryParamMap??=Un(this.queryParams),this._queryParamMap}toString(){return LI.serialize(this)}},$=class{segments;children;parent=null;constructor(t,n){this.segments=t,this.children=n,Object.values(n).forEach(o=>o.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Fa(this)}},cn=class{path;parameters;_parameterMap;constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap??=Un(this.parameters),this._parameterMap}toString(){return wv(this)}};function NI(e,t){return Bn(e,t)&&e.every((n,o)=>Dt(n.parameters,t[o].parameters))}function Bn(e,t){return e.length!==t.length?!1:e.every((n,o)=>n.path===t[o].path)}function FI(e,t){let n=[];return Object.entries(e.children).forEach(([o,i])=>{o===_&&(n=n.concat(t(i,o)))}),Object.entries(e.children).forEach(([o,i])=>{o!==_&&(n=n.concat(t(i,o)))}),n}var zn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:()=>new ln,providedIn:"root"})}return e})(),ln=class{parse(t){let n=new Rd(t);return new Mt(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){let n=`/${er(t.root,!0)}`,o=VI(t.queryParams),i=typeof t.fragment=="string"?`#${jI(t.fragment)}`:"";return`${n}${o}${i}`}},LI=new ln;function Fa(e){return e.segments.map(t=>wv(t)).join("/")}function er(e,t){if(!e.hasChildren())return Fa(e);if(t){let n=e.children[_]?er(e.children[_],!1):"",o=[];return Object.entries(e.children).forEach(([i,r])=>{i!==_&&o.push(`${i}:${er(r,!1)}`)}),o.length>0?`${n}(${o.join("//")})`:n}else{let n=FI(e,(o,i)=>i===_?[er(e.children[_],!1)]:[`${i}:${er(o,!1)}`]);return Object.keys(e.children).length===1&&e.children[_]!=null?`${Fa(e)}/${n[0]}`:`${Fa(e)}/(${n.join("//")})`}}function Cv(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Oa(e){return Cv(e).replace(/%3B/gi,";")}function jI(e){return encodeURI(e)}function Od(e){return Cv(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function La(e){return decodeURIComponent(e)}function av(e){return La(e.replace(/\+/g,"%20"))}function wv(e){return`${Od(e.path)}${JI(e.parameters)}`}function JI(e){return Object.entries(e).map(([t,n])=>`;${Od(t)}=${Od(n)}`).join("")}function VI(e){let t=Object.entries(e).map(([n,o])=>Array.isArray(o)?o.map(i=>`${Oa(n)}=${Oa(i)}`).join("&"):`${Oa(n)}=${Oa(o)}`).filter(n=>n);return t.length?`?${t.join("&")}`:""}var HI=/^[^\/()?;#]+/;function Td(e){let t=e.match(HI);return t?t[0]:""}var BI=/^[^\/()?;=#]+/;function WI(e){let t=e.match(BI);return t?t[0]:""}var UI=/^[^=?&#]+/;function zI(e){let t=e.match(UI);return t?t[0]:""}var $I=/^[^&#]+/;function GI(e){let t=e.match($I);return t?t[0]:""}var Rd=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new $([],{}):new $([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0));let o={};return this.peekStartsWith("(")&&(o=this.parseParens(!1)),(t.length>0||Object.keys(n).length>0)&&(o[_]=new $(t,n)),o}parseSegment(){let t=Td(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new w(4009,!1);return this.capture(t),new cn(La(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let n=WI(this.remaining);if(!n)return;this.capture(n);let o="";if(this.consumeOptional("=")){let i=Td(this.remaining);i&&(o=i,this.capture(o))}t[La(n)]=La(o)}parseQueryParam(t){let n=zI(this.remaining);if(!n)return;this.capture(n);let o="";if(this.consumeOptional("=")){let s=GI(this.remaining);s&&(o=s,this.capture(o))}let i=av(n),r=av(o);if(t.hasOwnProperty(i)){let s=t[i];Array.isArray(s)||(s=[s],t[i]=s),s.push(r)}else t[i]=r}parseParens(t){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let o=Td(this.remaining),i=this.remaining[o.length];if(i!=="/"&&i!==")"&&i!==";")throw new w(4010,!1);let r;o.indexOf(":")>-1?(r=o.slice(0,o.indexOf(":")),this.capture(r),this.capture(":")):t&&(r=_);let s=this.parseChildren();n[r??_]=Object.keys(s).length===1&&s[_]?s[_]:new $([],s),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new w(4011,!1)}};function Sv(e){return e.segments.length>0?new $([],{[_]:e}):e}function Ev(e){let t={};for(let[o,i]of Object.entries(e.children)){let r=Ev(i);if(o===_&&r.segments.length===0&&r.hasChildren())for(let[s,a]of Object.entries(r.children))t[s]=a;else(r.segments.length>0||r.hasChildren())&&(t[o]=r)}let n=new $(e.segments,t);return qI(n)}function qI(e){if(e.numberOfChildren===1&&e.children[_]){let t=e.children[_];return new $(e.segments.concat(t.segments),t.children)}return e}function un(e){return e instanceof Mt}function Dv(e,t,n=null,o=null){let i=Iv(e);return Mv(i,t,n,o)}function Iv(e){let t;function n(r){let s={};for(let c of r.children){let l=n(c);s[c.outlet]=l}let a=new $(r.url,s);return r===e&&(t=a),a}let o=n(e.root),i=Sv(o);return t??i}function Mv(e,t,n,o){let i=e;for(;i.parent;)i=i.parent;if(t.length===0)return xd(i,i,i,n,o);let r=YI(t);if(r.toRoot())return xd(i,i,new $([],{}),n,o);let s=KI(r,i,e),a=s.processChildren?nr(s.segmentGroup,s.index,r.commands):xv(s.segmentGroup,s.index,r.commands);return xd(i,s.segmentGroup,a,n,o)}function ja(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function ir(e){return typeof e=="object"&&e!=null&&e.outlets}function xd(e,t,n,o,i){let r={};o&&Object.entries(o).forEach(([c,l])=>{r[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let s;e===t?s=n:s=Tv(e,t,n);let a=Sv(Ev(s));return new Mt(a,r,i)}function Tv(e,t,n){let o={};return Object.entries(e.children).forEach(([i,r])=>{r===t?o[i]=n:o[i]=Tv(r,t,n)}),new $(e.segments,o)}var Ja=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,n,o){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=o,t&&o.length>0&&ja(o[0]))throw new w(4003,!1);let i=o.find(ir);if(i&&i!==mv(o))throw new w(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function YI(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Ja(!0,0,e);let t=0,n=!1,o=e.reduce((i,r,s)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let a={};return Object.entries(r.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...i,{outlets:a}]}if(r.segmentPath)return[...i,r.segmentPath]}return typeof r!="string"?[...i,r]:s===0?(r.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?n=!0:a===".."?t++:a!=""&&i.push(a))}),i):[...i,r]},[]);return new Ja(n,t,o)}var Po=class{segmentGroup;processChildren;index;constructor(t,n,o){this.segmentGroup=t,this.processChildren=n,this.index=o}};function KI(e,t,n){if(e.isAbsolute)return new Po(t,!0,0);if(!n)return new Po(t,!1,NaN);if(n.parent===null)return new Po(n,!0,0);let o=ja(e.commands[0])?0:1,i=n.segments.length-1+o;return QI(n,i,e.numberOfDoubleDots)}function QI(e,t,n){let o=e,i=t,r=n;for(;r>i;){if(r-=i,o=o.parent,!o)throw new w(4005,!1);i=o.segments.length}return new Po(o,!1,i-r)}function ZI(e){return ir(e[0])?e[0].outlets:{[_]:e}}function xv(e,t,n){if(e??=new $([],{}),e.segments.length===0&&e.hasChildren())return nr(e,t,n);let o=XI(e,t,n),i=n.slice(o.commandIndex);if(o.match&&o.pathIndex<e.segments.length){let r=new $(e.segments.slice(0,o.pathIndex),{});return r.children[_]=new $(e.segments.slice(o.pathIndex),e.children),nr(r,0,i)}else return o.match&&i.length===0?new $(e.segments,{}):o.match&&!e.hasChildren()?Nd(e,t,n):o.match?nr(e,0,i):Nd(e,t,n)}function nr(e,t,n){if(n.length===0)return new $(e.segments,{});{let o=ZI(n),i={};if(Object.keys(o).some(r=>r!==_)&&e.children[_]&&e.numberOfChildren===1&&e.children[_].segments.length===0){let r=nr(e.children[_],t,n);return new $(e.segments,r.children)}return Object.entries(o).forEach(([r,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(i[r]=xv(e.children[r],t,s))}),Object.entries(e.children).forEach(([r,s])=>{o[r]===void 0&&(i[r]=s)}),new $(e.segments,i)}}function XI(e,t,n){let o=0,i=t,r={match:!1,pathIndex:0,commandIndex:0};for(;i<e.segments.length;){if(o>=n.length)return r;let s=e.segments[i],a=n[o];if(ir(a))break;let c=`${a}`,l=o<n.length-1?n[o+1]:null;if(i>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!lv(c,l,s))return r;o+=2}else{if(!lv(c,{},s))return r;o++}i++}return{match:!0,pathIndex:i,commandIndex:o}}function Nd(e,t,n){let o=e.segments.slice(0,t),i=0;for(;i<n.length;){let r=n[i];if(ir(r)){let c=eM(r.outlets);return new $(o,c)}if(i===0&&ja(n[0])){let c=e.segments[t];o.push(new cn(c.path,cv(n[0]))),i++;continue}let s=ir(r)?r.outlets[_]:`${r}`,a=i<n.length-1?n[i+1]:null;s&&a&&ja(a)?(o.push(new cn(s,cv(a))),i+=2):(o.push(new cn(s,{})),i++)}return new $(o,{})}function eM(e){let t={};return Object.entries(e).forEach(([n,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(t[n]=Nd(new $([],{}),0,o))}),t}function cv(e){let t={};return Object.entries(e).forEach(([n,o])=>t[n]=`${o}`),t}function lv(e,t,n){return e==n.path&&Dt(t,n.parameters)}var Oo="imperative",le=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(le||{}),ze=class{id;url;constructor(t,n){this.id=t,this.url=n}},dn=class extends ze{type=le.NavigationStart;navigationTrigger;restoredState;constructor(t,n,o="imperative",i=null){super(t,n),this.navigationTrigger=o,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ze=class extends ze{urlAfterRedirects;type=le.NavigationEnd;constructor(t,n,o){super(t,n),this.urlAfterRedirects=o}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ke=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(ke||{}),No=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(No||{}),It=class extends ze{reason;code;type=le.NavigationCancel;constructor(t,n,o,i){super(t,n),this.reason=o,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Tt=class extends ze{reason;code;type=le.NavigationSkipped;constructor(t,n,o,i){super(t,n),this.reason=o,this.code=i}},Fo=class extends ze{error;target;type=le.NavigationError;constructor(t,n,o,i){super(t,n),this.error=o,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},rr=class extends ze{urlAfterRedirects;state;type=le.RoutesRecognized;constructor(t,n,o,i){super(t,n),this.urlAfterRedirects=o,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Va=class extends ze{urlAfterRedirects;state;type=le.GuardsCheckStart;constructor(t,n,o,i){super(t,n),this.urlAfterRedirects=o,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ha=class extends ze{urlAfterRedirects;state;shouldActivate;type=le.GuardsCheckEnd;constructor(t,n,o,i,r){super(t,n),this.urlAfterRedirects=o,this.state=i,this.shouldActivate=r}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ba=class extends ze{urlAfterRedirects;state;type=le.ResolveStart;constructor(t,n,o,i){super(t,n),this.urlAfterRedirects=o,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wa=class extends ze{urlAfterRedirects;state;type=le.ResolveEnd;constructor(t,n,o,i){super(t,n),this.urlAfterRedirects=o,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ua=class{route;type=le.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},za=class{route;type=le.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},$a=class{snapshot;type=le.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ga=class{snapshot;type=le.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qa=class{snapshot;type=le.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ya=class{snapshot;type=le.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Lo=class{routerEvent;position;anchor;type=le.Scroll;constructor(t,n,o){this.routerEvent=t,this.position=n,this.anchor=o}toString(){let t=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${t}')`}},sr=class{},jo=class{url;navigationBehaviorOptions;constructor(t,n){this.url=t,this.navigationBehaviorOptions=n}};function tM(e){return!(e instanceof sr)&&!(e instanceof jo)}function nM(e,t){return e.providers&&!e._injector&&(e._injector=Io(e.providers,t,`Route: ${e.path}`)),e._injector??t}function dt(e){return e.outlet||_}function oM(e,t){let n=e.filter(o=>dt(o)===t);return n.push(...e.filter(o=>dt(o)!==t)),n}function Ho(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let t=e.parent;t;t=t.parent){let n=t.routeConfig;if(n?._loadedInjector)return n._loadedInjector;if(n?._injector)return n._injector}return null}var Ka=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Ho(this.route?.snapshot)??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new $n(this.rootInjector)}},$n=(()=>{class e{rootInjector;contexts=new Map;constructor(n){this.rootInjector=n}onChildOutletCreated(n,o){let i=this.getOrCreateContext(n);i.outlet=o,this.contexts.set(n,i)}onChildOutletDestroyed(n){let o=this.getContext(n);o&&(o.outlet=null,o.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let o=this.getContext(n);return o||(o=new Ka(this.rootInjector),this.contexts.set(n,o)),o}getContext(n){return this.contexts.get(n)||null}static \u0275fac=function(o){return new(o||e)(I(re))};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Qa=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){let n=Fd(t,this._root);return n?n.children.map(o=>o.value):[]}firstChild(t){let n=Fd(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){let n=Ld(t,this._root);return n.length<2?[]:n[n.length-2].children.map(i=>i.value).filter(i=>i!==t)}pathFromRoot(t){return Ld(t,this._root).map(n=>n.value)}};function Fd(e,t){if(e===t.value)return t;for(let n of t.children){let o=Fd(e,n);if(o)return o}return null}function Ld(e,t){if(e===t.value)return[t];for(let n of t.children){let o=Ld(e,n);if(o.length)return o.unshift(t),o}return[]}var Ue=class{value;children;constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}};function ko(e){let t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t}var ar=class extends Qa{snapshot;constructor(t,n){super(t),this.snapshot=n,zd(this,t)}toString(){return this.snapshot.toString()}};function Av(e){let t=iM(e),n=new de([new cn("",{})]),o=new de({}),i=new de({}),r=new de({}),s=new de(""),a=new $e(n,o,r,s,i,_,e,t.root);return a.snapshot=t.root,new ar(new Ue(a,[]),t)}function iM(e){let t={},n={},o={},r=new Wn([],t,o,"",n,_,e,null,{});return new cr("",new Ue(r,[]))}var $e=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,n,o,i,r,s,a,c){this.urlSubject=t,this.paramsSubject=n,this.queryParamsSubject=o,this.fragmentSubject=i,this.dataSubject=r,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(V(l=>l[pr]))??M(void 0),this.url=t,this.params=n,this.queryParams=o,this.fragment=i,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(V(t=>Un(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(V(t=>Un(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Za(e,t,n="emptyOnly"){let o,{routeConfig:i}=e;return t!==null&&(n==="always"||i?.path===""||!t.component&&!t.routeConfig?.loadComponent)?o={params:b(b({},t.params),e.params),data:b(b({},t.data),e.data),resolve:b(b(b(b({},e.data),t.data),i?.data),e._resolvedData)}:o={params:b({},e.params),data:b({},e.data),resolve:b(b({},e.data),e._resolvedData??{})},i&&kv(i)&&(o.resolve[pr]=i.title),o}var Wn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[pr]}constructor(t,n,o,i,r,s,a,c,l){this.url=t,this.params=n,this.queryParams=o,this.fragment=i,this.data=r,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Un(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Un(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(o=>o.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${n}')`}},cr=class extends Qa{url;constructor(t,n){super(n),this.url=t,zd(this,n)}toString(){return _v(this._root)}};function zd(e,t){t.value._routerState=e,t.children.forEach(n=>zd(e,n))}function _v(e){let t=e.children.length>0?` { ${e.children.map(_v).join(", ")} } `:"";return`${e.value}${t}`}function Ad(e){if(e.snapshot){let t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,Dt(t.queryParams,n.queryParams)||e.queryParamsSubject.next(n.queryParams),t.fragment!==n.fragment&&e.fragmentSubject.next(n.fragment),Dt(t.params,n.params)||e.paramsSubject.next(n.params),kI(t.url,n.url)||e.urlSubject.next(n.url),Dt(t.data,n.data)||e.dataSubject.next(n.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function jd(e,t){let n=Dt(e.params,t.params)&&NI(e.url,t.url),o=!e.parent!=!t.parent;return n&&!o&&(!e.parent||jd(e.parent,t.parent))}function kv(e){return typeof e.title=="string"||e.title===null}var Pv=new D(""),fr=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=_;activateEvents=new se;deactivateEvents=new se;attachEvents=new se;detachEvents=new se;routerOutletData=gg();parentContexts=y($n);location=y(Ln);changeDetector=y(Jn);inputBinder=y(hr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(n){if(n.name){let{firstChange:o,previousValue:i}=n.name;if(o)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new w(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new w(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new w(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,o){this.activated=n,this._activatedRoute=o,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,o){if(this.isActivated)throw new w(4013,!1);this._activatedRoute=n;let i=this.location,s=n.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Jd(n,a,i.injector,this.routerOutletData);this.activated=i.createComponent(s,{index:i.length,injector:c,environmentInjector:o}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(o){return new(o||e)};static \u0275dir=_e({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[rn]})}return e})(),Jd=class{route;childContexts;parent;outletData;constructor(t,n,o,i){this.route=t,this.childContexts=n,this.parent=o,this.outletData=i}get(t,n){return t===$e?this.route:t===$n?this.childContexts:t===Pv?this.outletData:this.parent.get(t,n)}},hr=new D(""),$d=(()=>{class e{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(n){this.unsubscribeFromRouteData(n),this.subscribeToRouteData(n)}unsubscribeFromRouteData(n){this.outletDataSubscriptions.get(n)?.unsubscribe(),this.outletDataSubscriptions.delete(n)}subscribeToRouteData(n){let{activatedRoute:o}=n,i=Qo([o.queryParams,o.params,o.data]).pipe(De(([r,s,a],c)=>(a=b(b(b({},r),s),a),c===0?M(a):Promise.resolve(a)))).subscribe(r=>{if(!n.isActivated||!n.activatedComponentRef||n.activatedRoute!==o||o.component===null){this.unsubscribeFromRouteData(n);return}let s=wg(o.component);if(!s){this.unsubscribeFromRouteData(n);return}for(let{templateName:a}of s.inputs)n.activatedComponentRef.setInput(a,r[a])});this.outletDataSubscriptions.set(n,i)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})(),Gd=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=ae({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(o,i){o&1&&Ee(0,"router-outlet")},dependencies:[fr],encapsulation:2})}return e})();function qd(e){let t=e.children&&e.children.map(qd),n=t?F(b({},e),{children:t}):b({},e);return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==_&&(n.component=Gd),n}function rM(e,t,n){let o=lr(e,t._root,n?n._root:void 0);return new ar(o,t)}function lr(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){let o=n.value;o._futureSnapshot=t.value;let i=sM(e,t,n);return new Ue(o,i)}else{if(e.shouldAttach(t.value)){let r=e.retrieve(t.value);if(r!==null){let s=r.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>lr(e,a)),s}}let o=aM(t.value),i=t.children.map(r=>lr(e,r));return new Ue(o,i)}}function sM(e,t,n){return t.children.map(o=>{for(let i of n.children)if(e.shouldReuseRoute(o.value,i.value.snapshot))return lr(e,o,i);return lr(e,o)})}function aM(e){return new $e(new de(e.url),new de(e.params),new de(e.queryParams),new de(e.fragment),new de(e.data),e.outlet,e.component,e)}var Jo=class{redirectTo;navigationBehaviorOptions;constructor(t,n){this.redirectTo=t,this.navigationBehaviorOptions=n}},Ov="ngNavigationCancelingError";function Xa(e,t){let{redirectTo:n,navigationBehaviorOptions:o}=un(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,i=Rv(!1,ke.Redirect);return i.url=n,i.navigationBehaviorOptions=o,i}function Rv(e,t){let n=new Error(`NavigationCancelingError: ${e||""}`);return n[Ov]=!0,n.cancellationCode=t,n}function cM(e){return Nv(e)&&un(e.url)}function Nv(e){return!!e&&e[Ov]}var lM=(e,t,n,o)=>V(i=>(new Vd(t,i.targetRouterState,i.currentRouterState,n,o).activate(e),i)),Vd=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,n,o,i,r){this.routeReuseStrategy=t,this.futureState=n,this.currState=o,this.forwardEvent=i,this.inputBindingEnabled=r}activate(t){let n=this.futureState._root,o=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,o,t),Ad(this.futureState.root),this.activateChildRoutes(n,o,t)}deactivateChildRoutes(t,n,o){let i=ko(n);t.children.forEach(r=>{let s=r.value.outlet;this.deactivateRoutes(r,i[s],o),delete i[s]}),Object.values(i).forEach(r=>{this.deactivateRouteAndItsChildren(r,o)})}deactivateRoutes(t,n,o){let i=t.value,r=n?n.value:null;if(i===r)if(i.component){let s=o.getContext(i.outlet);s&&this.deactivateChildRoutes(t,n,s.children)}else this.deactivateChildRoutes(t,n,o);else r&&this.deactivateRouteAndItsChildren(n,o)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){let o=n.getContext(t.value.outlet),i=o&&t.value.component?o.children:n,r=ko(t);for(let s of Object.values(r))this.deactivateRouteAndItsChildren(s,i);if(o&&o.outlet){let s=o.outlet.detach(),a=o.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,n){let o=n.getContext(t.value.outlet),i=o&&t.value.component?o.children:n,r=ko(t);for(let s of Object.values(r))this.deactivateRouteAndItsChildren(s,i);o&&(o.outlet&&(o.outlet.deactivate(),o.children.onOutletDeactivated()),o.attachRef=null,o.route=null)}activateChildRoutes(t,n,o){let i=ko(n);t.children.forEach(r=>{this.activateRoutes(r,i[r.value.outlet],o),this.forwardEvent(new Ya(r.value.snapshot))}),t.children.length&&this.forwardEvent(new Ga(t.value.snapshot))}activateRoutes(t,n,o){let i=t.value,r=n?n.value:null;if(Ad(i),i===r)if(i.component){let s=o.getOrCreateContext(i.outlet);this.activateChildRoutes(t,n,s.children)}else this.activateChildRoutes(t,n,o);else if(i.component){let s=o.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Ad(a.route.value),this.activateChildRoutes(t,null,s.children)}else s.attachRef=null,s.route=i,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(t,null,s.children)}else this.activateChildRoutes(t,null,o)}},ec=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Ro=class{component;route;constructor(t,n){this.component=t,this.route=n}};function uM(e,t,n){let o=e._root,i=t?t._root:null;return tr(o,i,n,[o.value])}function dM(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function Bo(e,t){let n=Symbol(),o=t.get(e,n);return o===n?typeof e=="function"&&!Uc(e)?e:t.get(e):o}function tr(e,t,n,o,i={canDeactivateChecks:[],canActivateChecks:[]}){let r=ko(t);return e.children.forEach(s=>{pM(s,r[s.value.outlet],n,o.concat([s.value]),i),delete r[s.value.outlet]}),Object.entries(r).forEach(([s,a])=>or(a,n.getContext(s),i)),i}function pM(e,t,n,o,i={canDeactivateChecks:[],canActivateChecks:[]}){let r=e.value,s=t?t.value:null,a=n?n.getContext(e.value.outlet):null;if(s&&r.routeConfig===s.routeConfig){let c=fM(s,r,r.routeConfig.runGuardsAndResolvers);c?i.canActivateChecks.push(new ec(o)):(r.data=s.data,r._resolvedData=s._resolvedData),r.component?tr(e,t,a?a.children:null,o,i):tr(e,t,n,o,i),c&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new Ro(a.outlet.component,s))}else s&&or(t,a,i),i.canActivateChecks.push(new ec(o)),r.component?tr(e,null,a?a.children:null,o,i):tr(e,null,n,o,i);return i}function fM(e,t,n){if(typeof n=="function")return n(e,t);switch(n){case"pathParamsChange":return!Bn(e.url,t.url);case"pathParamsOrQueryParamsChange":return!Bn(e.url,t.url)||!Dt(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!jd(e,t)||!Dt(e.queryParams,t.queryParams);case"paramsChange":default:return!jd(e,t)}}function or(e,t,n){let o=ko(e),i=e.value;Object.entries(o).forEach(([r,s])=>{i.component?t?or(s,t.children.getContext(r),n):or(s,null,n):or(s,t,n)}),i.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new Ro(t.outlet.component,i)):n.canDeactivateChecks.push(new Ro(null,i)):n.canDeactivateChecks.push(new Ro(null,i))}function mr(e){return typeof e=="function"}function hM(e){return typeof e=="boolean"}function mM(e){return e&&mr(e.canLoad)}function gM(e){return e&&mr(e.canActivate)}function vM(e){return e&&mr(e.canActivateChild)}function yM(e){return e&&mr(e.canDeactivate)}function bM(e){return e&&mr(e.canMatch)}function Fv(e){return e instanceof xt||e?.name==="EmptyError"}var Ra=Symbol("INITIAL_VALUE");function Vo(){return De(e=>Qo(e.map(t=>t.pipe(_t(1),kc(Ra)))).pipe(V(t=>{for(let n of t)if(n!==!0){if(n===Ra)return Ra;if(n===!1||CM(n))return n}return!0}),Ne(t=>t!==Ra),_t(1)))}function CM(e){return un(e)||e instanceof Jo}function wM(e,t){return X(n=>{let{targetSnapshot:o,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:s}}=n;return s.length===0&&r.length===0?M(F(b({},n),{guardsResult:!0})):SM(s,o,i,e).pipe(X(a=>a&&hM(a)?EM(o,r,e,t):M(a)),V(a=>F(b({},n),{guardsResult:a})))})}function SM(e,t,n,o){return Q(e).pipe(X(i=>xM(i.component,i.route,n,t,o)),kt(i=>i!==!0,!0))}function EM(e,t,n,o){return Q(t).pipe(Ut(i=>co(IM(i.route.parent,o),DM(i.route,o),TM(e,i.path,n),MM(e,i.route,n))),kt(i=>i!==!0,!0))}function DM(e,t){return e!==null&&t&&t(new qa(e)),M(!0)}function IM(e,t){return e!==null&&t&&t(new $a(e)),M(!0)}function MM(e,t,n){let o=t.routeConfig?t.routeConfig.canActivate:null;if(!o||o.length===0)return M(!0);let i=o.map(r=>Zo(()=>{let s=Ho(t)??n,a=Bo(r,s),c=gM(a)?a.canActivate(t,e):be(s,()=>a(t,e));return Bt(c).pipe(kt())}));return M(i).pipe(Vo())}function TM(e,t,n){let o=t[t.length-1],r=t.slice(0,t.length-1).reverse().map(s=>dM(s)).filter(s=>s!==null).map(s=>Zo(()=>{let a=s.guards.map(c=>{let l=Ho(s.node)??n,u=Bo(c,l),d=vM(u)?u.canActivateChild(o,e):be(l,()=>u(o,e));return Bt(d).pipe(kt())});return M(a).pipe(Vo())}));return M(r).pipe(Vo())}function xM(e,t,n,o,i){let r=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!r||r.length===0)return M(!0);let s=r.map(a=>{let c=Ho(t)??i,l=Bo(a,c),u=yM(l)?l.canDeactivate(e,t,n,o):be(c,()=>l(e,t,n,o));return Bt(u).pipe(kt())});return M(s).pipe(Vo())}function AM(e,t,n,o){let i=t.canLoad;if(i===void 0||i.length===0)return M(!0);let r=i.map(s=>{let a=Bo(s,e),c=mM(a)?a.canLoad(t,n):be(e,()=>a(t,n));return Bt(c)});return M(r).pipe(Vo(),Lv(o))}function Lv(e){return Ec(ue(t=>{if(typeof t!="boolean")throw Xa(e,t)}),V(t=>t===!0))}function _M(e,t,n,o){let i=t.canMatch;if(!i||i.length===0)return M(!0);let r=i.map(s=>{let a=Bo(s,e),c=bM(a)?a.canMatch(t,n):be(e,()=>a(t,n));return Bt(c)});return M(r).pipe(Vo(),Lv(o))}var ur=class{segmentGroup;constructor(t){this.segmentGroup=t||null}},dr=class extends Error{urlTree;constructor(t){super(),this.urlTree=t}};function _o(e){return so(new ur(e))}function kM(e){return so(new w(4e3,!1))}function PM(e){return so(Rv(!1,ke.GuardRejected))}var Hd=class{urlSerializer;urlTree;constructor(t,n){this.urlSerializer=t,this.urlTree=n}lineralizeSegments(t,n){let o=[],i=n.root;for(;;){if(o=o.concat(i.segments),i.numberOfChildren===0)return M(o);if(i.numberOfChildren>1||!i.children[_])return kM(`${t.redirectTo}`);i=i.children[_]}}applyRedirectCommands(t,n,o,i,r){return OM(n,i,r).pipe(V(s=>{if(s instanceof Mt)throw new dr(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),t,o);if(s[0]==="/")throw new dr(a);return a}))}applyRedirectCreateUrlTree(t,n,o,i){let r=this.createSegmentGroup(t,n.root,o,i);return new Mt(r,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){let o={};return Object.entries(t).forEach(([i,r])=>{if(typeof r=="string"&&r[0]===":"){let a=r.substring(1);o[i]=n[a]}else o[i]=r}),o}createSegmentGroup(t,n,o,i){let r=this.createSegments(t,n.segments,o,i),s={};return Object.entries(n.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(t,c,o,i)}),new $(r,s)}createSegments(t,n,o,i){return n.map(r=>r.path[0]===":"?this.findPosParam(t,r,i):this.findOrReturn(r,o))}findPosParam(t,n,o){let i=o[n.path.substring(1)];if(!i)throw new w(4001,!1);return i}findOrReturn(t,n){let o=0;for(let i of n){if(i.path===t.path)return n.splice(o),i;o++}return t}};function OM(e,t,n){if(typeof e=="string")return M(e);let o=e,{queryParams:i,fragment:r,routeConfig:s,url:a,outlet:c,params:l,data:u,title:d}=t;return Bt(be(n,()=>o({params:l,data:u,queryParams:i,fragment:r,routeConfig:s,url:a,outlet:c,title:d})))}var Bd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function RM(e,t,n,o,i){let r=jv(e,t,n);return r.matched?(o=nM(t,o),_M(o,t,n,i).pipe(V(s=>s===!0?r:b({},Bd)))):M(r)}function jv(e,t,n){if(t.path==="**")return NM(n);if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||n.length>0)?b({},Bd):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let i=(t.matcher||fv)(n,e,t);if(!i)return b({},Bd);let r={};Object.entries(i.posParams??{}).forEach(([a,c])=>{r[a]=c.path});let s=i.consumed.length>0?b(b({},r),i.consumed[i.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:i.consumed,remainingSegments:n.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function NM(e){return{matched:!0,parameters:e.length>0?mv(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function uv(e,t,n,o){return n.length>0&&jM(e,n,o)?{segmentGroup:new $(t,LM(o,new $(n,e.children))),slicedSegments:[]}:n.length===0&&JM(e,n,o)?{segmentGroup:new $(e.segments,FM(e,n,o,e.children)),slicedSegments:n}:{segmentGroup:new $(e.segments,e.children),slicedSegments:n}}function FM(e,t,n,o){let i={};for(let r of n)if(nc(e,t,r)&&!o[dt(r)]){let s=new $([],{});i[dt(r)]=s}return b(b({},o),i)}function LM(e,t){let n={};n[_]=t;for(let o of e)if(o.path===""&&dt(o)!==_){let i=new $([],{});n[dt(o)]=i}return n}function jM(e,t,n){return n.some(o=>nc(e,t,o)&&dt(o)!==_)}function JM(e,t,n){return n.some(o=>nc(e,t,o))}function nc(e,t,n){return(e.hasChildren()||t.length>0)&&n.pathMatch==="full"?!1:n.path===""}function VM(e,t,n){return t.length===0&&!e.children[n]}var Wd=class{};function HM(e,t,n,o,i,r,s="emptyOnly"){return new Ud(e,t,n,o,i,s,r).recognize()}var BM=31,Ud=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,n,o,i,r,s,a){this.injector=t,this.configLoader=n,this.rootComponentType=o,this.config=i,this.urlTree=r,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new Hd(this.urlSerializer,this.urlTree)}noMatchError(t){return new w(4002,`'${t.segmentGroup}'`)}recognize(){let t=uv(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(V(({children:n,rootSnapshot:o})=>{let i=new Ue(o,n),r=new cr("",i),s=Dv(o,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(s),{state:r,tree:s}}))}match(t){let n=new Wn([],Object.freeze({}),Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),_,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,t,_,n).pipe(V(o=>({children:o,rootSnapshot:n})),At(o=>{if(o instanceof dr)return this.urlTree=o.urlTree,this.match(o.urlTree.root);throw o instanceof ur?this.noMatchError(o):o}))}processSegmentGroup(t,n,o,i,r){return o.segments.length===0&&o.hasChildren()?this.processChildren(t,n,o,r):this.processSegment(t,n,o,o.segments,i,!0,r).pipe(V(s=>s instanceof Ue?[s]:[]))}processChildren(t,n,o,i){let r=[];for(let s of Object.keys(o.children))s==="primary"?r.unshift(s):r.push(s);return Q(r).pipe(Ut(s=>{let a=o.children[s],c=oM(n,s);return this.processSegmentGroup(t,c,a,s,i)}),_c((s,a)=>(s.push(...a),s)),zt(null),Ac(),X(s=>{if(s===null)return _o(o);let a=Jv(s);return WM(a),M(a)}))}processSegment(t,n,o,i,r,s,a){return Q(n).pipe(Ut(c=>this.processSegmentAgainstRoute(c._injector??t,n,c,o,i,r,s,a).pipe(At(l=>{if(l instanceof ur)return M(null);throw l}))),kt(c=>!!c),At(c=>{if(Fv(c))return VM(o,i,r)?M(new Wd):_o(o);throw c}))}processSegmentAgainstRoute(t,n,o,i,r,s,a,c){return dt(o)!==s&&(s===_||!nc(i,r,o))?_o(i):o.redirectTo===void 0?this.matchSegmentAgainstRoute(t,i,o,r,s,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(t,i,n,o,r,s,c):_o(i)}expandSegmentAgainstRouteUsingRedirect(t,n,o,i,r,s,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:v}=jv(n,i,r);if(!c)return _o(n);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>BM&&(this.allowRedirects=!1));let f=new Wn(r,l,Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,dv(i),dt(i),i.component??i._loadedComponent??null,i,pv(i)),C=Za(f,a,this.paramsInheritanceStrategy);return f.params=Object.freeze(C.params),f.data=Object.freeze(C.data),this.applyRedirects.applyRedirectCommands(u,i.redirectTo,d,f,t).pipe(De(U=>this.applyRedirects.lineralizeSegments(i,U)),X(U=>this.processSegment(t,o,n,U.concat(v),s,!1,a)))}matchSegmentAgainstRoute(t,n,o,i,r,s){let a=RM(n,o,i,t,this.urlSerializer);return o.path==="**"&&(n.children={}),a.pipe(De(c=>c.matched?(t=o._injector??t,this.getChildConfig(t,o,i).pipe(De(({routes:l})=>{let u=o._loadedInjector??t,{parameters:d,consumedSegments:v,remainingSegments:f}=c,C=new Wn(v,d,Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,dv(o),dt(o),o.component??o._loadedComponent??null,o,pv(o)),x=Za(C,s,this.paramsInheritanceStrategy);C.params=Object.freeze(x.params),C.data=Object.freeze(x.data);let{segmentGroup:U,slicedSegments:H}=uv(n,v,f,l);if(H.length===0&&U.hasChildren())return this.processChildren(u,l,U,C).pipe(V(br=>new Ue(C,br)));if(l.length===0&&H.length===0)return M(new Ue(C,[]));let Uy=dt(o)===r;return this.processSegment(u,l,U,H,Uy?_:r,!0,C).pipe(V(br=>new Ue(C,br instanceof Ue?[br]:[])))}))):_o(n)))}getChildConfig(t,n,o){return n.children?M({routes:n.children,injector:t}):n.loadChildren?n._loadedRoutes!==void 0?M({routes:n._loadedRoutes,injector:n._loadedInjector}):AM(t,n,o,this.urlSerializer).pipe(X(i=>i?this.configLoader.loadChildren(t,n).pipe(ue(r=>{n._loadedRoutes=r.routes,n._loadedInjector=r.injector})):PM(n))):M({routes:[],injector:t})}};function WM(e){e.sort((t,n)=>t.value.outlet===_?-1:n.value.outlet===_?1:t.value.outlet.localeCompare(n.value.outlet))}function UM(e){let t=e.value.routeConfig;return t&&t.path===""}function Jv(e){let t=[],n=new Set;for(let o of e){if(!UM(o)){t.push(o);continue}let i=t.find(r=>o.value.routeConfig===r.value.routeConfig);i!==void 0?(i.children.push(...o.children),n.add(i)):t.push(o)}for(let o of n){let i=Jv(o.children);t.push(new Ue(o.value,i))}return t.filter(o=>!n.has(o))}function dv(e){return e.data||{}}function pv(e){return e.resolve||{}}function zM(e,t,n,o,i,r){return X(s=>HM(e,t,n,o,s.extractedUrl,i,r).pipe(V(({state:a,tree:c})=>F(b({},s),{targetSnapshot:a,urlAfterRedirects:c}))))}function $M(e,t){return X(n=>{let{targetSnapshot:o,guards:{canActivateChecks:i}}=n;if(!i.length)return M(n);let r=new Set(i.map(c=>c.route)),s=new Set;for(let c of r)if(!s.has(c))for(let l of Vv(c))s.add(l);let a=0;return Q(s).pipe(Ut(c=>r.has(c)?GM(c,o,e,t):(c.data=Za(c,c.parent,e).resolve,M(void 0))),ue(()=>a++),lo(1),X(c=>a===s.size?M(n):Oe))})}function Vv(e){let t=e.children.map(n=>Vv(n)).flat();return[e,...t]}function GM(e,t,n,o){let i=e.routeConfig,r=e._resolve;return i?.title!==void 0&&!kv(i)&&(r[pr]=i.title),Zo(()=>(e.data=Za(e,e.parent,n).resolve,qM(r,e,t,o).pipe(V(s=>(e._resolvedData=s,e.data=b(b({},e.data),s),null)))))}function qM(e,t,n,o){let i=Pd(e);if(i.length===0)return M({});let r={};return Q(i).pipe(X(s=>YM(e[s],t,n,o).pipe(kt(),ue(a=>{if(a instanceof Jo)throw Xa(new ln,a);r[s]=a}))),lo(1),V(()=>r),At(s=>Fv(s)?Oe:so(s)))}function YM(e,t,n,o){let i=Ho(t)??o,r=Bo(e,i),s=r.resolve?r.resolve(t,n):be(i,()=>r(t,n));return Bt(s)}function _d(e){return De(t=>{let n=e(t);return n?Q(n).pipe(V(()=>t)):M(t)})}var Yd=(()=>{class e{buildTitle(n){let o,i=n.root;for(;i!==void 0;)o=this.getResolvedTitleForRoute(i)??o,i=i.children.find(r=>r.outlet===_);return o}getResolvedTitleForRoute(n){return n.data[pr]}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:()=>y(Hv),providedIn:"root"})}return e})(),Hv=(()=>{class e extends Yd{title;constructor(n){super(),this.title=n}updateTitle(n){let o=this.buildTitle(n);o!==void 0&&this.title.setTitle(o)}static \u0275fac=function(o){return new(o||e)(I(jg))};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),pn=new D("",{providedIn:"root",factory:()=>({})}),Wo=new D(""),oc=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=y(Gu);loadComponent(n,o){if(this.componentLoaders.get(o))return this.componentLoaders.get(o);if(o._loadedComponent)return M(o._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(o);let i=Bt(be(n,()=>o.loadComponent())).pipe(V(Wv),De(Uv),ue(s=>{this.onLoadEndListener&&this.onLoadEndListener(o),o._loadedComponent=s}),Xo(()=>{this.componentLoaders.delete(o)})),r=new ro(i,()=>new te).pipe(io());return this.componentLoaders.set(o,r),r}loadChildren(n,o){if(this.childrenLoaders.get(o))return this.childrenLoaders.get(o);if(o._loadedRoutes)return M({routes:o._loadedRoutes,injector:o._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(o);let r=Bv(o,this.compiler,n,this.onLoadEndListener).pipe(Xo(()=>{this.childrenLoaders.delete(o)})),s=new ro(r,()=>new te).pipe(io());return this.childrenLoaders.set(o,s),s}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Bv(e,t,n,o){return Bt(be(n,()=>e.loadChildren())).pipe(V(Wv),De(Uv),X(i=>i instanceof sa||Array.isArray(i)?M(i):Q(t.compileModuleAsync(i))),V(i=>{o&&o(e);let r,s,a=!1;return Array.isArray(i)?(s=i,a=!0):(r=i.create(n).injector,s=r.get(Wo,[],{optional:!0,self:!0}).flat()),{routes:s.map(qd),injector:r}}))}function KM(e){return e&&typeof e=="object"&&"default"in e}function Wv(e){return KM(e)?e.default:e}function Uv(e){return M(e)}var ic=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:()=>y(QM),providedIn:"root"})}return e})(),QM=(()=>{class e{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,o){return n}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Kd=new D(""),Qd=new D("");function zv(e,t,n){let o=e.get(Qd),i=e.get(oe);if(!i.startViewTransition||o.skipNextTransition)return o.skipNextTransition=!1,new Promise(l=>setTimeout(l));let r,s=new Promise(l=>{r=l}),a=i.startViewTransition(()=>(r(),ZM(e)));a.ready.catch(l=>{});let{onViewTransitionCreated:c}=o;return c&&be(e,()=>c({transition:a,from:t,to:n})),s}function ZM(e){return new Promise(t=>{oa({read:()=>setTimeout(t)},{injector:e})})}var Zd=new D(""),rc=(()=>{class e{currentNavigation=vt(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=null;events=new te;transitionAbortWithErrorSubject=new te;configLoader=y(oc);environmentInjector=y(re);destroyRef=y(gt);urlSerializer=y(zn);rootContexts=y($n);location=y(Et);inputBindingEnabled=y(hr,{optional:!0})!==null;titleStrategy=y(Yd);options=y(pn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=y(ic);createViewTransition=y(Kd,{optional:!0});navigationErrorHandler=y(Zd,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>M(void 0);rootComponentType=null;destroyed=!1;constructor(){let n=i=>this.events.next(new Ua(i)),o=i=>this.events.next(new za(i));this.configLoader.onLoadEndListener=o,this.configLoader.onLoadStartListener=n,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(n){let o=++this.navigationId;me(()=>{this.transitions?.next(F(b({},n),{extractedUrl:this.urlHandlingStrategy.extract(n.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:o}))})}setupNavigations(n){return this.transitions=new de(null),this.transitions.pipe(Ne(o=>o!==null),De(o=>{let i=!1;return M(o).pipe(De(r=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",ke.SupersededByNewNavigation),Oe;this.currentTransition=o,this.currentNavigation.set({id:r.id,initialUrl:r.rawUrl,extractedUrl:r.extractedUrl,targetBrowserUrl:typeof r.extras.browserUrl=="string"?this.urlSerializer.parse(r.extras.browserUrl):r.extras.browserUrl,trigger:r.source,extras:r.extras,previousNavigation:this.lastSuccessfulNavigation?F(b({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>r.abortController.abort()});let s=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),a=r.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!s&&a!=="reload")return this.events.next(new Tt(r.id,this.urlSerializer.serialize(r.rawUrl),"",No.IgnoredSameUrlNavigation)),r.resolve(!1),Oe;if(this.urlHandlingStrategy.shouldProcessUrl(r.rawUrl))return M(r).pipe(De(c=>(this.events.next(new dn(c.id,this.urlSerializer.serialize(c.extractedUrl),c.source,c.restoredState)),c.id!==this.navigationId?Oe:Promise.resolve(c))),zM(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy),ue(c=>{o.targetSnapshot=c.targetSnapshot,o.urlAfterRedirects=c.urlAfterRedirects,this.currentNavigation.update(u=>(u.finalUrl=c.urlAfterRedirects,u));let l=new rr(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}));if(s&&this.urlHandlingStrategy.shouldProcessUrl(r.currentRawUrl)){let{id:c,extractedUrl:l,source:u,restoredState:d,extras:v}=r,f=new dn(c,this.urlSerializer.serialize(l),u,d);this.events.next(f);let C=Av(this.rootComponentType).snapshot;return this.currentTransition=o=F(b({},r),{targetSnapshot:C,urlAfterRedirects:l,extras:F(b({},v),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(x=>(x.finalUrl=l,x)),M(o)}else return this.events.next(new Tt(r.id,this.urlSerializer.serialize(r.extractedUrl),"",No.IgnoredByUrlHandlingStrategy)),r.resolve(!1),Oe}),ue(r=>{let s=new Va(r.id,this.urlSerializer.serialize(r.extractedUrl),this.urlSerializer.serialize(r.urlAfterRedirects),r.targetSnapshot);this.events.next(s)}),V(r=>(this.currentTransition=o=F(b({},r),{guards:uM(r.targetSnapshot,r.currentSnapshot,this.rootContexts)}),o)),wM(this.environmentInjector,r=>this.events.next(r)),ue(r=>{if(o.guardsResult=r.guardsResult,r.guardsResult&&typeof r.guardsResult!="boolean")throw Xa(this.urlSerializer,r.guardsResult);let s=new Ha(r.id,this.urlSerializer.serialize(r.extractedUrl),this.urlSerializer.serialize(r.urlAfterRedirects),r.targetSnapshot,!!r.guardsResult);this.events.next(s)}),Ne(r=>r.guardsResult?!0:(this.cancelNavigationTransition(r,"",ke.GuardRejected),!1)),_d(r=>{if(r.guards.canActivateChecks.length!==0)return M(r).pipe(ue(s=>{let a=new Ba(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}),De(s=>{let a=!1;return M(s).pipe($M(this.paramsInheritanceStrategy,this.environmentInjector),ue({next:()=>a=!0,complete:()=>{a||this.cancelNavigationTransition(s,"",ke.NoDataFromResolver)}}))}),ue(s=>{let a=new Wa(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(a)}))}),_d(r=>{let s=a=>{let c=[];if(a.routeConfig?.loadComponent){let l=Ho(a)??this.environmentInjector;c.push(this.configLoader.loadComponent(l,a.routeConfig).pipe(ue(u=>{a.component=u}),V(()=>{})))}for(let l of a.children)c.push(...s(l));return c};return Qo(s(r.targetSnapshot.root)).pipe(zt(null),_t(1))}),_d(()=>this.afterPreactivation()),De(()=>{let{currentSnapshot:r,targetSnapshot:s}=o,a=this.createViewTransition?.(this.environmentInjector,r.root,s.root);return a?Q(a).pipe(V(()=>o)):M(o)}),V(r=>{let s=rM(n.routeReuseStrategy,r.targetSnapshot,r.currentRouterState);return this.currentTransition=o=F(b({},r),{targetRouterState:s}),this.currentNavigation.update(a=>(a.targetRouterState=s,a)),o}),ue(()=>{this.events.next(new sr)}),lM(this.rootContexts,n.routeReuseStrategy,r=>this.events.next(r),this.inputBindingEnabled),_t(1),Xr(new B(r=>{let s=o.abortController.signal,a=()=>r.next();return s.addEventListener("abort",a),()=>s.removeEventListener("abort",a)}).pipe(Ne(()=>!i&&!o.targetRouterState),ue(()=>{this.cancelNavigationTransition(o,o.abortController.signal.reason+"",ke.Aborted)}))),ue({next:r=>{i=!0,this.lastSuccessfulNavigation=me(this.currentNavigation),this.events.next(new Ze(r.id,this.urlSerializer.serialize(r.extractedUrl),this.urlSerializer.serialize(r.urlAfterRedirects))),this.titleStrategy?.updateTitle(r.targetRouterState.snapshot),r.resolve(!0)},complete:()=>{i=!0}}),Xr(this.transitionAbortWithErrorSubject.pipe(ue(r=>{throw r}))),Xo(()=>{i||this.cancelNavigationTransition(o,"",ke.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),At(r=>{if(this.destroyed)return o.resolve(!1),Oe;if(i=!0,Nv(r))this.events.next(new It(o.id,this.urlSerializer.serialize(o.extractedUrl),r.message,r.cancellationCode)),cM(r)?this.events.next(new jo(r.url,r.navigationBehaviorOptions)):o.resolve(!1);else{let s=new Fo(o.id,this.urlSerializer.serialize(o.extractedUrl),r,o.targetSnapshot??void 0);try{let a=be(this.environmentInjector,()=>this.navigationErrorHandler?.(s));if(a instanceof Jo){let{message:c,cancellationCode:l}=Xa(this.urlSerializer,a);this.events.next(new It(o.id,this.urlSerializer.serialize(o.extractedUrl),c,l)),this.events.next(new jo(a.redirectTo,a.navigationBehaviorOptions))}else throw this.events.next(s),r}catch(a){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(a)}}return Oe}))}))}cancelNavigationTransition(n,o,i){let r=new It(n.id,this.urlSerializer.serialize(n.extractedUrl),o,i);this.events.next(r),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let n=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),o=me(this.currentNavigation),i=o?.targetBrowserUrl??o?.extractedUrl;return n.toString()!==i?.toString()&&!o?.extras.skipLocationChange}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function XM(e){return e!==Oo}var $v=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:()=>y(eT),providedIn:"root"})}return e})(),tc=class{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}},eT=(()=>{class e extends tc{static \u0275fac=(()=>{let n;return function(i){return(n||(n=Eo(e)))(i||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Gv=(()=>{class e{urlSerializer=y(zn);options=y(pn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=y(Et);urlHandlingStrategy=y(ic);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Mt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:n,initialUrl:o,targetBrowserUrl:i}){let r=n!==void 0?this.urlHandlingStrategy.merge(n,o):o,s=i??r;return s instanceof Mt?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:n,finalUrl:o,initialUrl:i}){o&&n?(this.currentUrlTree=o,this.rawUrlTree=this.urlHandlingStrategy.merge(o,i),this.routerState=n):this.rawUrlTree=i}routerState=Av(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:n}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n??this.rawUrlTree)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:()=>y(tT),providedIn:"root"})}return e})(),tT=(()=>{class e extends Gv{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(o=>{o.type==="popstate"&&setTimeout(()=>{n(o.url,o.state,"popstate")})})}handleRouterEvent(n,o){n instanceof dn?this.updateStateMemento():n instanceof Tt?this.commitTransition(o):n instanceof rr?this.urlUpdateStrategy==="eager"&&(o.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(o),o)):n instanceof sr?(this.commitTransition(o),this.urlUpdateStrategy==="deferred"&&!o.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(o),o)):n instanceof It&&n.code!==ke.SupersededByNewNavigation&&n.code!==ke.Redirect?this.restoreHistory(o):n instanceof Fo?this.restoreHistory(o,!0):n instanceof Ze&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,{extras:o,id:i}){let{replaceUrl:r,state:s}=o;if(this.location.isCurrentPathEqualTo(n)||r){let a=this.browserPageId,c=b(b({},s),this.generateNgRouterState(i,a));this.location.replaceState(n,"",c)}else{let a=b(b({},s),this.generateNgRouterState(i,this.browserPageId+1));this.location.go(n,"",a)}}restoreHistory(n,o=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,r=this.currentPageId-i;r!==0?this.location.historyGo(r):this.getCurrentUrlTree()===n.finalUrl&&r===0&&(this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(o&&this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,o){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:o}:{navigationId:n}}static \u0275fac=(()=>{let n;return function(i){return(n||(n=Eo(e)))(i||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function sc(e,t){e.events.pipe(Ne(n=>n instanceof Ze||n instanceof It||n instanceof Fo||n instanceof Tt),V(n=>n instanceof Ze||n instanceof Tt?0:(n instanceof It?n.code===ke.Redirect||n.code===ke.SupersededByNewNavigation:!1)?2:1),Ne(n=>n!==2),_t(1)).subscribe(()=>{t()})}var nT={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},oT={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Pe=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=y(Lu);stateManager=y(Gv);options=y(pn,{optional:!0})||{};pendingTasks=y(Ft);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=y(rc);urlSerializer=y(zn);location=y(Et);urlHandlingStrategy=y(ic);injector=y(re);_events=new te;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=y($v);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=y(Wo,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!y(hr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:n=>{this.console.warn(n)}}),this.subscribeToNavigationEvents()}eventsSubscription=new ee;subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(o=>{try{let i=this.navigationTransitions.currentTransition,r=me(this.navigationTransitions.currentNavigation);if(i!==null&&r!==null){if(this.stateManager.handleRouterEvent(o,r),o instanceof It&&o.code!==ke.Redirect&&o.code!==ke.SupersededByNewNavigation)this.navigated=!0;else if(o instanceof Ze)this.navigated=!0;else if(o instanceof jo){let s=o.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(o.url,i.currentRawUrl),c=b({browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||XM(i.source)},s);this.scheduleNavigation(a,Oo,null,c,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}tM(o)&&this._events.next(o)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Oo,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,o,i)=>{this.navigateToSyncWithBrowser(n,i,o)})}navigateToSyncWithBrowser(n,o,i){let r={replaceUrl:!0},s=i?.navigationId?i:null;if(i){let c=b({},i);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(r.state=c)}let a=this.parseUrl(n);this.scheduleNavigation(a,o,s,r).catch(c=>{this.disposed||this.injector.get(Ve)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return me(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(qd),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,o={}){let{relativeTo:i,queryParams:r,fragment:s,queryParamsHandling:a,preserveFragment:c}=o,l=c?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=b(b({},this.currentUrlTree.queryParams),r);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=r||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let v=i?i.snapshot:this.routerState.snapshot.root;d=Iv(v)}catch{(typeof n[0]!="string"||n[0][0]!=="/")&&(n=[]),d=this.currentUrlTree.root}return Mv(d,n,u,l??null)}navigateByUrl(n,o={skipLocationChange:!1}){let i=un(n)?n:this.parseUrl(n),r=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(r,Oo,null,o)}navigate(n,o={skipLocationChange:!1}){return iT(n),this.navigateByUrl(this.createUrlTree(n,o),o)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch{return this.console.warn(Yt(4018,!1)),this.urlSerializer.parse("/")}}isActive(n,o){let i;if(o===!0?i=b({},nT):o===!1?i=b({},oT):i=o,un(n))return sv(this.currentUrlTree,n,i);let r=this.parseUrl(n);return sv(this.currentUrlTree,r,i)}removeEmptyProps(n){return Object.entries(n).reduce((o,[i,r])=>(r!=null&&(o[i]=r),o),{})}scheduleNavigation(n,o,i,r,s){if(this.disposed)return Promise.resolve(!1);let a,c,l;s?(a=s.resolve,c=s.reject,l=s.promise):l=new Promise((d,v)=>{a=d,c=v});let u=this.pendingTasks.add();return sc(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:o,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:r,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(o){return new(o||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function iT(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new w(4008,!1)}var ac=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;reactiveHref=vt(null);get href(){return me(this.reactiveHref)}set href(n){this.reactiveHref.set(n)}target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new te;applicationErrorHandler=y(Ve);options=y(pn,{optional:!0});constructor(n,o,i,r,s,a){this.router=n,this.route=o,this.tabIndexAttribute=i,this.renderer=r,this.el=s,this.locationStrategy=a,this.reactiveHref.set(y(new ha("href"),{optional:!0}));let c=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href")),this.isAnchorElement?this.setTabIndexIfNotOnNativeEl("0"):this.subscribeToNavigationEventsIfNecessary()}subscribeToNavigationEventsIfNecessary(){if(this.subscription!==void 0||!this.isAnchorElement)return;let n=this.preserveFragment,o=i=>i==="merge"||i==="preserve";n||=o(this.queryParamsHandling),n||=!this.queryParamsHandling&&!o(this.options?.defaultQueryParamsHandling),n&&(this.subscription=this.router.events.subscribe(i=>{i instanceof Ze&&this.updateHref()}))}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(n){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",n)}ngOnChanges(n){this.isAnchorElement&&(this.updateHref(),this.subscribeToNavigationEventsIfNecessary()),this.onChanges.next(this)}routerLinkInput=null;set routerLink(n){n==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(un(n)?this.routerLinkInput=n:this.routerLinkInput=Array.isArray(n)?n:[n],this.setTabIndexIfNotOnNativeEl("0"))}onClick(n,o,i,r,s){let a=this.urlTree;if(a===null||this.isAnchorElement&&(n!==0||o||i||r||s||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,c)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let n=this.urlTree;this.reactiveHref.set(n!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(n))??"":null)}applyAttributeValue(n,o){let i=this.renderer,r=this.el.nativeElement;o!==null?i.setAttribute(r,n,o):i.removeAttribute(r,n)}get urlTree(){return this.routerLinkInput===null?null:un(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(o){return new(o||e)(T(Pe),T($e),Ti("tabindex"),T(Vt),T(Ct),T(lt))};static \u0275dir=_e({type:e,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(o,i){o&1&&q("click",function(s){return i.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),o&2&&Fi("href",i.reactiveHref(),mu)("target",i.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Vn],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Vn],replaceUrl:[2,"replaceUrl","replaceUrl",Vn],routerLink:"routerLink"},features:[rn]})}return e})();var gr=class{};var qv=(()=>{class e{router;injector;preloadingStrategy;loader;subscription;constructor(n,o,i,r){this.router=n,this.injector=o,this.preloadingStrategy=i,this.loader=r}setUpPreloading(){this.subscription=this.router.events.pipe(Ne(n=>n instanceof Ze),Ut(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(n,o){let i=[];for(let r of o){r.providers&&!r._injector&&(r._injector=Io(r.providers,n,`Route: ${r.path}`));let s=r._injector??n,a=r._loadedInjector??s;(r.loadChildren&&!r._loadedRoutes&&r.canLoad===void 0||r.loadComponent&&!r._loadedComponent)&&i.push(this.preloadConfig(s,r)),(r.children||r._loadedRoutes)&&i.push(this.processRoutes(a,r.children??r._loadedRoutes))}return Q(i).pipe(ao())}preloadConfig(n,o){return this.preloadingStrategy.preload(o,()=>{let i;o.loadChildren&&o.canLoad===void 0?i=this.loader.loadChildren(n,o):i=M(null);let r=i.pipe(X(s=>s===null?M(void 0):(o._loadedRoutes=s.routes,o._loadedInjector=s.injector,this.processRoutes(s.injector??n,s.routes))));if(o.loadComponent&&!o._loadedComponent){let s=this.loader.loadComponent(n,o);return Q([r,s]).pipe(ao())}else return r})}static \u0275fac=function(o){return new(o||e)(I(Pe),I(re),I(gr),I(oc))};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Yv=new D(""),rT=(()=>{class e{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Oo;restoredId=0;store={};constructor(n,o,i,r,s={}){this.urlSerializer=n,this.transitions=o,this.viewportScroller=i,this.zone=r,this.options=s,s.scrollPositionRestoration||="disabled",s.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(n=>{n instanceof dn?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=n.navigationTrigger,this.restoredId=n.restoredState?n.restoredState.navigationId:0):n instanceof Ze?(this.lastId=n.id,this.scheduleScrollEvent(n,this.urlSerializer.parse(n.urlAfterRedirects).fragment)):n instanceof Tt&&n.code===No.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(n,this.urlSerializer.parse(n.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(n=>{if(!(n instanceof Lo))return;let o={behavior:"instant"};n.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],o):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(n.position,o):n.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(n.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(n,o){this.zone.runOutsideAngular(()=>Uo(this,null,function*(){yield new Promise(i=>{setTimeout(i),typeof requestAnimationFrame<"u"&&requestAnimationFrame(i)}),this.zone.run(()=>{this.transitions.events.next(new Lo(n,this.lastSource==="popstate"?this.store[this.restoredId]:null,o))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(o){Ru()};static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();function sT(e){return e.routerState.root}function vr(e,t){return{\u0275kind:e,\u0275providers:t}}function aT(){let e=y(ye);return t=>{let n=e.get(wt);if(t!==n.components[0])return;let o=e.get(Pe),i=e.get(Kv);e.get(ep)===1&&o.initialNavigation(),e.get(Xv,null,{optional:!0})?.setUpPreloading(),e.get(Yv,null,{optional:!0})?.init(),o.resetRootComponentType(n.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var Kv=new D("",{factory:()=>new te}),ep=new D("",{providedIn:"root",factory:()=>1});function Qv(){let e=[{provide:pu,useValue:!0},{provide:ep,useValue:0},ca(()=>{let t=y(ye);return t.get(id,Promise.resolve()).then(()=>new Promise(o=>{let i=t.get(Pe),r=t.get(Kv);sc(i,()=>{o(!0)}),t.get(rc).afterPreactivation=()=>(o(!0),r.closed?M(void 0):r),i.initialNavigation()}))})];return vr(2,e)}function Zv(){let e=[ca(()=>{y(Pe).setUpLocationChangeListener()}),{provide:ep,useValue:2}];return vr(3,e)}var Xv=new D("");function ey(e){return vr(0,[{provide:Xv,useExisting:qv},{provide:gr,useExisting:e}])}function ty(){return vr(8,[$d,{provide:hr,useExisting:$d}])}function ny(e){Do("NgRouterViewTransitions");let t=[{provide:Kd,useValue:zv},{provide:Qd,useValue:b({skipNextTransition:!!e?.skipInitialTransition},e)}];return vr(9,t)}var oy=[Et,{provide:zn,useClass:ln},Pe,$n,{provide:$e,useFactory:sT,deps:[Pe]},oc,[]],cc=(()=>{class e{constructor(){}static forRoot(n,o){return{ngModule:e,providers:[oy,[],{provide:Wo,multi:!0,useValue:n},[],o?.errorHandler?{provide:Zd,useValue:o.errorHandler}:[],{provide:pn,useValue:o||{}},o?.useHash?lT():uT(),cT(),o?.preloadingStrategy?ey(o.preloadingStrategy).\u0275providers:[],o?.initialNavigation?dT(o):[],o?.bindToComponentInputs?ty().\u0275providers:[],o?.enableViewTransitions?ny().\u0275providers:[],pT()]}}static forChild(n){return{ngModule:e,providers:[{provide:Wo,multi:!0,useValue:n}]}}static \u0275fac=function(o){return new(o||e)};static \u0275mod=Se({type:e});static \u0275inj=he({})}return e})();function cT(){return{provide:Yv,useFactory:()=>{let e=y(_g),t=y(K),n=y(pn),o=y(rc),i=y(zn);return n.scrollOffset&&e.setOffset(n.scrollOffset),new rT(i,o,e,t,n)}}}function lT(){return{provide:lt,useClass:sd}}function uT(){return{provide:lt,useClass:ba}}function dT(e){return[e.initialNavigation==="disabled"?Zv().\u0275providers:[],e.initialNavigation==="enabledBlocking"?Qv().\u0275providers:[]]}var Xd=new D("");function pT(){return[{provide:Xd,useFactory:aT},{provide:la,multi:!0,useExisting:Xd}]}var iy=(()=>{let t=class t{constructor(){this.title="Java & Spring Interview Syllabus"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=ae({type:t,selectors:[["app-root"]],standalone:!1,decls:1,vars:0,template:function(i,r){i&1&&Ee(0,"router-outlet")},dependencies:[fr],encapsulation:2});let e=t;return e})();var ry=[{id:1,title:"Core Java Basics",difficulty:"basic",topics:[{name:"Introduction to Java",subTopics:[{name:"History of Java"},{name:"Features of Java (Platform Independent, OOP, etc.)"},{name:"JDK, JRE, JVM Architecture"},{name:"Compilation and Execution Process"},{name:"Bytecode and Platform Independence"},{name:"Java Editions (SE, EE, ME)"},{name:"Path and Classpath (Environment Variables)"},{name:"First Java Program structure and main method"},{name:"Java Keywords and Identifiers"},{name:"Comments in Java (Single-line, Multi-line, Documentation)"},{name:"Java vs C++ comparison"},{name:"Java is Pass-by-Value"}]},{name:"Data Types & Variables",subTopics:[{name:"Primitive data types"},{name:"Reference types"},{name:"Type casting and conversion"},{name:"Variables (local, instance, static)"}]},{name:"Operators & Control Statements",subTopics:[{name:"Arithmetic, Logical, Relational operators"},{name:"If-else, switch statements"},{name:"Loops (for, while, do-while, enhanced for)"},{name:"Break, continue, return statements"}]},{name:"Arrays & Basic I/O",subTopics:[{name:"Single and multidimensional arrays"},{name:"Array manipulation"},{name:"Jagged arrays"},{name:"Scanner class and Console I/O"}]}]},{id:2,title:"Object-Oriented Programming (OOP)",difficulty:"basic",topics:[{name:"Classes and Objects",subTopics:[{name:"Class definition and object creation"},{name:"Constructors (default, parameterized, copy)"},{name:"Constructor overloading"},{name:"this keyword"},{name:"Object Initialization Order"}]},{name:"Encapsulation",subTopics:[{name:"Access modifiers (private, public, protected, default)"},{name:"Getters and Setters"},{name:"Data hiding"}]},{name:"Inheritance & Composition",subTopics:[{name:"Types of inheritance"},{name:"super keyword"},{name:"Method overriding"},{name:"final keyword"},{name:"IS-A vs HAS-A relationship"}]},{name:"Polymorphism",subTopics:[{name:"Compile-time (Method Overloading)"},{name:"Runtime (Method Overriding)"},{name:"Dynamic method dispatch"}]},{name:"Abstraction",subTopics:[{name:"Abstract classes and methods"},{name:"Interfaces"},{name:"Multiple inheritance using interfaces"},{name:"Marker interfaces"}]}]},{id:3,title:"Advanced OOP & Java Language Features",difficulty:"intermediate",topics:[{name:"Static keyword",subTopics:[{name:"Static variables and methods"},{name:"Static blocks"},{name:"Static nested classes"}]},{name:"Inner Classes",subTopics:[{name:"Member inner class"},{name:"Static nested class"},{name:"Local inner class"},{name:"Anonymous inner class"}]},{name:"Packages",subTopics:[{name:"Creating and using packages"},{name:"Import statements"},{name:"Access protection"}]},{name:"Object Class Methods",subTopics:[{name:"equals() and hashCode() contract"},{name:"toString()"},{name:"clone()"},{name:"finalize()"}]}]},{id:4,title:"Exception Handling",difficulty:"intermediate",topics:[{name:"Core Exception Handling",subTopics:[{name:"Fundamentals"},{name:"Exception Hierarchy"},{name:"Checked vs Unchecked Exceptions"},{name:"try\u2013catch\u2013finally blocks"},{name:"Multi-Catch and try-with-resources"},{name:"throw vs throws keyword"},{name:"Custom Exceptions"},{name:"Exception Propagation"},{name:"Exception Chaining"},{name:"Best Practices for Core Java Exception Handling"}]}]},{id:5,title:"Collections Framework",difficulty:"intermediate",topics:[{name:"Collection Interfaces",subTopics:[{name:"Collection, List, Set, Queue, Map"},{name:"Iterator, ListIterator, and Spliterator"}]},{name:"Implementations",subTopics:[{name:"ArrayList, LinkedList, Vector, Stack"},{name:"HashSet, LinkedHashSet, TreeSet"},{name:"HashMap, LinkedHashMap, TreeMap"},{name:"Hashtable and ConcurrentHashMap"},{name:"PriorityQueue and ArrayDeque"}]},{name:"Sorting and Utility",subTopics:[{name:"Comparable vs Comparator"},{name:"Collections and Arrays utility classes"}]}]},{id:6,title:"Generics",difficulty:"intermediate",topics:[{name:"Generic Classes and Methods"},{name:"Bounded Type Parameters"},{name:"Wildcards (?, extends, super)"},{name:"PECS Principle"},{name:"Type Erasure"}]},{id:7,title:"Multithreading & Concurrency",difficulty:"advanced",topics:[{name:"Thread Basics",subTopics:[{name:"Thread class vs Runnable interface"},{name:"Thread lifecycle"},{name:"sleep, join, yield, interrupt"}]},{name:"Synchronization",subTopics:[{name:"synchronized keyword (blocks/methods)"},{name:"Locking: Object level vs Class level"},{name:"volatile keyword"},{name:"Deadlock, Livelock, and Starvation"}]},{name:"Inter-thread Communication",subTopics:[{name:"wait, notify, and notifyAll"},{name:"Producer-Consumer problem"}]},{name:"Concurrency Utilities",subTopics:[{name:"Executor Framework and Thread Pools"},{name:"Callable and Future"},{name:"CompletableFuture"},{name:"Locks (ReentrantLock, ReadWriteLock)"},{name:"Atomic variables"},{name:"CountDownLatch and CyclicBarrier"}]}]},{id:8,title:"Java Version-wise Features",difficulty:"intermediate",topics:[{name:"Java 8 Features",subTopics:[{name:"Lambda Expressions"},{name:"Functional Interfaces"},{name:"Stream API"},{name:"Optional Class"},{name:"Default and Static methods in Interfaces"},{name:"Date and Time API (java.time)"}]},{name:"Java 9 to 11 Features",subTopics:[{name:"Module System (JPMS)"},{name:"Private methods in Interfaces"},{name:"JShell"},{name:"var keyword (Local Variable Type Inference)"},{name:"HTTP Client API"}]},{name:"Java 12 to 17 Features (LTS)",subTopics:[{name:"Switch Expressions"},{name:"Text Blocks"},{name:"Records"},{name:"Sealed Classes"},{name:"Pattern Matching for instanceof"}]},{name:"Java 21 Features (LTS)",subTopics:[{name:"Virtual Threads (Project Loom)"},{name:"Sequenced Collections"},{name:"Record Patterns"},{name:"Pattern Matching for Switch"}]}]},{id:9,title:"String Handling",difficulty:"basic",topics:[{name:"String immutability and String Pool"},{name:"String vs StringBuilder vs StringBuffer"},{name:"Common String methods"},{name:"String formatting and manipulation"}]},{id:10,title:"Regular Expressions (Regex)",difficulty:"intermediate",topics:[{name:"Pattern and Matcher classes"},{name:"Regex metacharacters and quantifiers"},{name:"Groups and capturing"},{name:"Common regex patterns for validation"}]},{id:11,title:"File I/O & Serialization",difficulty:"intermediate",topics:[{name:"Byte Streams vs Character Streams"},{name:"BufferedReader and BufferedWriter"},{name:"Java NIO (Path, Files, Channels)"},{name:"Serialization and Deserialization (transient, serialVersionUID)"},{name:"Externalizable interface"}]},{id:12,title:"Networking in Java",difficulty:"intermediate",topics:[{name:"Socket Programming (TCP/UDP)"},{name:"URL and URLConnection"},{name:"HttpURLConnection"},{name:"InetAddress class"}]},{id:13,title:"JDBC (Database Connectivity)",difficulty:"intermediate",topics:[{name:"JDBC Architecture and Drivers"},{name:"Statement vs PreparedStatement vs CallableStatement"},{name:"ResultSet and Transaction Management"},{name:"Connection Pooling concepts"}]},{id:14,title:"JVM Internals & Memory Management",difficulty:"advanced",topics:[{name:"JVM Architecture: ClassLoader, Runtime Data Areas, Execution Engine"},{name:"Heap vs Stack Memory"},{name:"Garbage Collection Algorithms (G1, ZGC, etc.)"},{name:"JIT Compiler and Memory Leaks"},{name:"Memory Model and happens-before relationship"},{name:"Reference Types (Strong, Weak, Soft, Phantom)"}]},{id:15,title:"Advanced Java Concepts",difficulty:"advanced",topics:[{name:"Cloning (Shallow vs Deep)"},{name:"Immutable Objects creation"},{name:"Java Native Interface (JNI)"},{name:"Java Beans"},{name:"RMI (Remote Method Invocation)"},{name:"Java Security Manager"}]},{id:16,title:"Miscellaneous Core Topics",difficulty:"intermediate",topics:[{name:"Reflection API"},{name:"Annotations (Built-in and Custom)"},{name:"Enums"},{name:"Wrapper Classes and Autoboxing/Unboxing"},{name:"Internationalization (i18n) and Localization"},{name:"JavaDoc and Code Documentation"}]},{id:17,title:"Core Java Design Principles",difficulty:"advanced",topics:[{name:"SOLID Principles"},{name:"Creational Design Patterns (Singleton, Factory, Builder)"},{name:"Structural Design Patterns (Adapter, Proxy, Decorator)"},{name:"Behavioral Design Patterns (Observer, Strategy)"}]},{id:18,title:"Best Practices & Code Quality",difficulty:"intermediate",topics:[{name:"Clean Code principles"},{name:"Code smells and refactoring"},{name:"Exception handling best practices"},{name:"Naming conventions and coding standards"},{name:"Performance optimization techniques"},{name:"Unit Testing with JUnit and Mockito"}]}];var sy=[{id:1,title:"Core Spring Framework (Deep Dive)",difficulty:"basic",topics:[{name:"Inversion of Control (IoC) & Dependency Injection (DI)",subTopics:[{name:"What is IoC and why Spring uses it"},{name:"What problem does DI solve?"},{name:"How Spring creates and injects beans internally"},{name:"ApplicationContext vs BeanFactory"},{name:"Eager vs Lazy loading - When to use which?"},{name:"Bean Scopes (Singleton, Prototype, Request, Session, Application)"},{name:"Why prototype beans don't get destroyed automatically?"},{name:"Bean Lifecycle (@PostConstruct, @PreDestroy)"},{name:"Complete bean lifecycle steps"},{name:"Bean Initialization and Destruction callbacks"},{name:"Aware Interfaces (BeanNameAware, ApplicationContextAware)"},{name:"Configuration Styles: Java-based (@Configuration), Annotation-based (@Component), XML"},{name:"Dependency Injection types: Constructor (WHY preferred) vs Setter vs Field (WHY discouraged)"},{name:"Autowiring modes and @Qualifier usage"},{name:"@Primary vs @Qualifier"}]},{name:"Spring Bean Management",subTopics:[{name:"@Component, @Service, @Repository, @Controller"},{name:"Why @Repository exists (exception translation)"},{name:"@Configuration vs @Component"},{name:"@Bean vs @Component"},{name:"Bean Naming Strategies"},{name:"Lazy vs Eager Initialization"},{name:"@DependsOn annotation"},{name:"BeanFactoryPostProcessor vs BeanPostProcessor"},{name:"Real-time use cases for BeanPostProcessor and BeanFactoryPostProcessor"}]},{name:"Autowiring & Bean Resolution",subTopics:[{name:"How Spring resolves dependency when multiple beans of same type"},{name:"@Autowired working internally"},{name:"Required = false (deprecated behavior)"},{name:"Circular Dependency - Constructor vs Setter injection case"},{name:"Why constructor injection fails for circular dependency"}]},{name:"Spring Expression Language (SpEL)",subTopics:[{name:"SpEL basics and syntax"},{name:"Using SpEL with @Value"},{name:"Accessing beans, properties, collections via SpEL"}]},{name:"Aspect-Oriented Programming (AOP)",subTopics:[{name:"What is AOP? Why needed?"},{name:"Cross-cutting concerns (Logging, Transaction management)"},{name:"Aspect, Advice, Pointcut, JoinPoint"},{name:"Types of Advice (Before, After, Around, AfterReturning, AfterThrowing)"},{name:"Annotations: @Before, @After, @Around (MOST IMPORTANT), @AfterReturning, @AfterThrowing"},{name:"Pointcut expressions execution(), within()"},{name:"Proxy Mechanism - JDK Dynamic Proxy vs CGLIB"},{name:"Why interface-based proxy preferred?"},{name:"Self-invocation problem in Spring AOP"},{name:"Transaction & AOP relation"},{name:"Why @Transactional uses AOP"},{name:"Why private methods don't work with @Transactional"}]},{name:"Spring Events",subTopics:[{name:"ApplicationEvent and ApplicationListener"},{name:"Custom Events"},{name:"@EventListener annotation"}]},{name:"Spring Profiles & Environment",subTopics:[{name:"@Profile usage"},{name:"Environment abstraction"},{name:"PropertySource and Property resolution"}]}]},{id:2,title:"Spring MVC (Web Layer)",difficulty:"intermediate",topics:[{name:"Spring MVC Architecture",subTopics:[{name:"DispatcherServlet workflow (VERY COMMON)"},{name:"Front Controller Pattern"},{name:"HandlerMapping role"},{name:"Controller, ViewResolver, Model"}]},{name:"Controller Development",subTopics:[{name:"@Controller vs @RestController"},{name:"@RequestMapping vs @GetMapping, @PostMapping"},{name:"@PathVariable vs @RequestParam"},{name:"@RequestBody vs @ResponseBody"},{name:"@RequestBody vs @ModelAttribute"}]},{name:"Data Binding & Validation",subTopics:[{name:"@ModelAttribute"},{name:"@ModelAttribute lifecycle"},{name:"BindingResult"},{name:"JSR-380 Bean Validation (@NotNull, @Size, @Email)"},{name:"Custom validators"}]},{name:"Exception Handling",subTopics:[{name:"@ExceptionHandler"},{name:"@ControllerAdvice"},{name:"@ExceptionHandler vs @ControllerAdvice"},{name:"Global vs local exception handling"},{name:"Global Exception Handling Strategy and Best Practices"}]},{name:"View Technologies",subTopics:[{name:"JSP integration"},{name:"Thymeleaf basics"},{name:"ViewResolver configuration"}]}]},{id:3,title:"Spring Data Access & ORM",difficulty:"intermediate",topics:[{name:"Spring JDBC",subTopics:[{name:"JdbcTemplate"},{name:"RowMapper"},{name:"ResultSetExtractor"},{name:"Exception translation"}]},{name:"Spring ORM & JPA Integration",subTopics:[{name:"JPA integration with Spring"},{name:"EntityManager vs Session"},{name:"@PersistenceContext"},{name:"Lazy vs Eager loading"},{name:"N+1 problem (VERY COMMON)"}]},{name:"Transaction Management",subTopics:[{name:"What is transaction management?"},{name:"Declarative vs Programmatic Transactions"},{name:"@Transactional annotation"},{name:"@Transactional working internally"},{name:"Propagation and Isolation levels"},{name:"Propagation types (REQUIRED, REQUIRES_NEW, etc.)"},{name:"Rollback rules"},{name:"Rollback - Checked vs Runtime exception"},{name:"Why @Transactional doesn't work on private methods"},{name:"Why @Transactional doesn't work on internal method calls"}]},{name:"Exception Handling",subTopics:[{name:"DataAccessException hierarchy"},{name:"Checked vs Runtime exceptions in Spring"}]}]},{id:4,title:"Spring Security (Security 6.x)",difficulty:"advanced",topics:[{name:"Core Concepts",subTopics:[{name:"Authentication vs Authorization"},{name:"SecurityContext & SecurityContextHolder"},{name:"SecurityFilterChain & Filters"},{name:"Filter order importance"},{name:"UserDetailsService & PasswordEncoding (BCrypt)"},{name:"UserDetailsService flow"}]},{name:"Authentication Mechanisms",subTopics:[{name:"Basic Auth & Form Login"},{name:"JWT (JSON Web Tokens): Implementation & Best Practices"},{name:"Stateless vs Stateful authentication"}]},{name:"OAuth2 & OpenID Connect (OIDC)",subTopics:[{name:"Resource Server, Authorization Server, Client"},{name:"Social Login (Google, GitHub)"}]},{name:"Authorization",subTopics:[{name:"Role-based vs Authority-based access"},{name:"Role vs Authority"},{name:"hasRole vs hasAuthority"},{name:"Method Level Security (@PreAuthorize, @PostAuthorize)"}]},{name:"Protection",subTopics:[{name:"CORS (Cross-Origin Resource Sharing)"},{name:"CORS - browser vs server perspective"},{name:"CSRF (Cross-Site Request Forgery)"},{name:"CSRF - what, why, when to disable"}]}]},{id:5,title:"Spring Internals & Advanced Topics (Senior-level)",difficulty:"advanced",topics:[{name:"Spring Container & Initialization",subTopics:[{name:"How Spring container starts"},{name:"ClassPath scanning"},{name:"Reflection usage in Spring"}]},{name:"Design Principles & Best Practices",subTopics:[{name:"Why Spring prefers interfaces"},{name:"Immutable beans and thread safety"},{name:"Memory impact of singleton beans"}]},{name:"Spring Events",subTopics:[{name:"ApplicationEvent and ApplicationListener"},{name:"Custom Events"},{name:"@EventListener annotation"}]},{name:"Spring Profiles & Environment",subTopics:[{name:"@Profile usage"},{name:"Environment abstraction"},{name:"PropertySource and Property resolution"}]}]}];var ay=[{id:1,title:"Spring Boot Fundamentals",difficulty:"intermediate",topics:[{name:"Spring Boot vs Spring",subTopics:[{name:"Why Spring Boot was introduced"},{name:"Problems it solves"},{name:"Spring vs Spring Boot (VERY COMMON)"}]},{name:"@SpringBootApplication",subTopics:[{name:"What it is internally"},{name:"Combination of: @Configuration, @ComponentScan, @EnableAutoConfiguration"},{name:"Why it should be placed in root package"}]},{name:"Starters",subTopics:[{name:"What are starters?"},{name:"How spring-boot-starter-web works"},{name:"Why starters reduce dependency conflicts"}]},{name:"Configuration Management",subTopics:[{name:"application.properties vs application.yml"},{name:"YAML advantages"},{name:"Profile-specific files"},{name:"Profiles (Dev, QA, Prod)"},{name:"Externalized Configuration - Property priority order (ENV > JVM > config files)"},{name:"How environment variables override config"},{name:"@Value vs @ConfigurationProperties"},{name:"@Value vs @ConfigurationProperties - Differences and When to use which"},{name:"Type safety advantages of @ConfigurationProperties"}]},{name:"Developer Tools",subTopics:[{name:"Spring Boot DevTools (Live Reload)"},{name:"Lombok integration"}]}]},{id:2,title:"Auto-Configuration (TOP INTERVIEW AREA)",difficulty:"intermediate",topics:[{name:"Auto-Configuration Internals",subTopics:[{name:"What is auto-configuration?"},{name:"How Spring Boot decides which bean to create"},{name:"@ConditionalOnClass"},{name:"@ConditionalOnMissingBean"},{name:"@ConditionalOnProperty"}]},{name:"Auto-Configuration Files",subTopics:[{name:"spring.factories (Boot < 3)"},{name:"AutoConfiguration.imports (Boot 3+)"},{name:"How auto-config classes are loaded"}]},{name:"Disable / Customize Auto-Config",subTopics:[{name:"exclude attribute"},{name:"spring.autoconfigure.exclude"},{name:"Overriding auto-configured beans"}]}]},{id:3,title:"Spring Boot Startup Lifecycle",difficulty:"intermediate",topics:[{name:"Application Startup",subTopics:[{name:"What happens during SpringApplication.run()"},{name:"Order of execution"},{name:"When beans are created"}]},{name:"Runners",subTopics:[{name:"CommandLineRunner vs ApplicationRunner"},{name:"Use cases"},{name:"Execution order"}]},{name:"Embedded Server",subTopics:[{name:"Embedded Tomcat / Jetty / Netty"},{name:"How Boot starts server internally"},{name:"How to change port & server type"}]}]},{id:4,title:"Data Access & Persistence",difficulty:"intermediate",topics:[{name:"Spring JDBC",subTopics:[{name:"JdbcTemplate & NamedParameterJdbcTemplate"}]},{name:"Spring Data JPA (Hibernate)",subTopics:[{name:"Why repositories don't need implementation"},{name:"Entity Mapping (@Entity, @Table, @Id, @GeneratedValue)"},{name:"Entity scanning"},{name:"Auto-DDL (ddl-auto)"},{name:"Repositories (CrudRepository, JpaRepository)"},{name:"CrudRepository vs JpaRepository"},{name:"Query Methods (Derived queries, @Query, Native Queries)"},{name:"Derived query method rules"},{name:"Relationships (OneToOne, OneToMany, ManyToMany)"},{name:"Lazy vs Eager loading"},{name:"Pagination & Sorting"},{name:"N+1 Problem - What it is"},{name:"N+1 Problem - How to identify"},{name:"N+1 Problem - Solutions (fetch join, EntityGraph)"}]},{name:"Transaction Management (INTERVIEW FAVORITE)",subTopics:[{name:"@Transactional - How it works internally"},{name:"Why @Transactional uses AOP"},{name:"Propagation types (REQUIRED, REQUIRES_NEW)"},{name:"Isolation levels"},{name:"Rollback Rules - Checked vs Runtime exception"},{name:"How to force rollback"},{name:"Common Pitfalls - Why @Transactional doesn't work on private methods"},{name:"Common Pitfalls - Why @Transactional doesn't work on internal method calls"},{name:"Proxy limitation explanation"}]},{name:"NoSQL Integration",subTopics:[{name:"Spring Data MongoDB"},{name:"Spring Data Redis (Caching & Pub/Sub)"}]},{name:"Database Migration",subTopics:[{name:"Flyway or Liquibase integration"}]}]},{id:5,title:"Web & REST API Development",difficulty:"intermediate",topics:[{name:"Controllers",subTopics:[{name:"@RestController vs @Controller"},{name:"@RequestMapping vs @GetMapping"},{name:"@PathVariable vs @RequestParam"},{name:"@RequestBody vs @ModelAttribute"}]},{name:"Response Handling",subTopics:[{name:"ResponseEntity"},{name:"HTTP status codes best practices"}]},{name:"Exception Handling",subTopics:[{name:"@ExceptionHandler"},{name:"@ControllerAdvice"},{name:"Global vs local exception handling"}]},{name:"Advanced REST",subTopics:[{name:"Bean Validation (Hibernate Validator, @Valid, @NotNull, @Size)"},{name:"HATEOAS (Hypermedia as the Engine of Application State)"},{name:"Content Negotiation (JSON vs XML)"},{name:"File Upload/Download"}]},{name:"API Documentation",subTopics:[{name:"OpenAPI 3.0 / Swagger (SpringDoc)"}]}]},{id:6,title:"Spring Boot Security (HIGH DEMAND)",difficulty:"advanced",topics:[{name:"Core Concepts",subTopics:[{name:"Authentication vs Authorization"},{name:"Stateless vs Stateful auth"},{name:"SecurityFilterChain"}]},{name:"JWT with Spring Boot",subTopics:[{name:"Why JWT is stateless"},{name:"Filter flow"},{name:"Where token is validated"}]},{name:"Method Security",subTopics:[{name:"@PreAuthorize"},{name:"@PostAuthorize"},{name:"Role vs Authority"}]},{name:"CSRF & CORS",subTopics:[{name:"What CSRF is"},{name:"Why CSRF disabled for REST APIs"},{name:"Browser-side vs server-side CORS"}]}]},{id:7,title:"Microservices & Spring Cloud",difficulty:"advanced",topics:[{name:"Service Discovery",subTopics:[{name:"Netflix Eureka / HashiCorp Consul"}]},{name:"API Gateway",subTopics:[{name:"Spring Cloud Gateway (Routing, Filtering, Rate Limiting)"}]},{name:"Config Management",subTopics:[{name:"Spring Cloud Config Server (Centralized configuration)"}]},{name:"Resilience & Fault Tolerance",subTopics:[{name:"Resilience4j (Circuit Breaker, Retry, Rate Limiter, Bulkhead)"}]},{name:"Distributed Tracing",subTopics:[{name:"Micrometer Tracing (formerly Sleuth) + Zipkin/Brave"}]}]},{id:8,title:"Spring AI (Generative AI)",difficulty:"advanced",topics:[{name:"Introduction to Generative AI",subTopics:[{name:"Large Language Models (LLMs) concepts"}]},{name:"Spring AI Core",subTopics:[{name:"Chat Client API: Interacting with OpenAI, Azure OpenAI, Ollama, HuggingFace"},{name:"Prompts: Prompt Templates, Prompt Engineering within Java"},{name:"Output Parsers: Converting AI text responses into Java Objects (POJOs)"}]},{name:"Embeddings & Vector Databases",subTopics:[{name:"Text Embeddings models"},{name:"Vector Store integration (PGVector, Pinecone, Milvus, Redis)"}]},{name:"RAG (Retrieval Augmented Generation)",subTopics:[{name:"Document Readers (PDF, Text, JSON)"},{name:"Token Splitters"},{name:"Contextual search implementation"}]},{name:"Advanced AI",subTopics:[{name:"Function Calling (Letting AI call your Java methods)"},{name:"Image Generation (DALL-E, Stability AI)"}]}]},{id:9,title:"Messaging & Event-Driven Architecture",difficulty:"advanced",topics:[{name:"JMS (Java Message Service)",subTopics:[{name:"ActiveMQ integration"}]},{name:"Apache Kafka",subTopics:[{name:"Spring for Apache Kafka"},{name:"Producers, Consumers, Consumer Groups"}]},{name:"RabbitMQ",subTopics:[{name:"Exchanges, Queues, Routing Keys"}]},{name:"Spring Cloud Stream",subTopics:[{name:"Binder abstraction (Switch between Kafka/RabbitMQ easily)"}]}]},{id:10,title:"Spring Batch & Scheduling",difficulty:"advanced",topics:[{name:"Scheduling",subTopics:[{name:"@Scheduled (FixedRate, FixedDelay, Cron expressions)"},{name:"Quartz Scheduler integration"}]},{name:"Spring Batch",subTopics:[{name:"Job, Step, JobRepository"},{name:"ItemReader, ItemProcessor, ItemWriter"},{name:"Chunk-oriented processing"},{name:"Error handling (Skip, Retry policies)"},{name:"Parallel processing & Partitioning"}]}]},{id:11,title:"Reactive Programming (WebFlux)",difficulty:"advanced",topics:[{name:"Project Reactor",subTopics:[{name:"Mono vs Flux"},{name:"Backpressure"}]},{name:"Spring WebFlux",subTopics:[{name:"Non-blocking REST APIs"},{name:"Netty Server"},{name:"Reactive Database Access (R2DBC)"}]}]},{id:12,title:"Spring Boot Testing",difficulty:"intermediate",topics:[{name:"Testing Types",subTopics:[{name:"Unit vs Integration testing"}]},{name:"Unit Testing",subTopics:[{name:"JUnit 5 & Mockito (Mocking dependencies)"}]},{name:"Integration Testing",subTopics:[{name:"@SpringBootTest"},{name:"Test Slices (@WebMvcTest, @DataJpaTest)"}]},{name:"Mocking",subTopics:[{name:"Mockito basics"},{name:"MockBean vs SpyBean"}]},{name:"Advanced Testing",subTopics:[{name:"Testcontainers (Spinning up real DBs/Kafka in Docker for tests)"},{name:"WireMock (Mocking external APIs)"}]}]},{id:13,title:"Observability & Production Ready (Actuator)",difficulty:"advanced",topics:[{name:"Spring Boot Actuator",subTopics:[{name:"Important endpoints: /health, /metrics, /info"},{name:"Custom health indicators"}]},{name:"Monitoring",subTopics:[{name:"Micrometer basics"},{name:"Prometheus & Grafana overview"}]},{name:"Logging",subTopics:[{name:"SLF4J, Logback"},{name:"Log aggregation (ELK Stack: Elasticsearch, Logstash, Kibana)"}]},{name:"Deployment",subTopics:[{name:"Dockerizing Spring Boot"},{name:"Why Boot apps are container-friendly"},{name:"Fat JAR vs Thin JAR"}]}]},{id:14,title:"Performance & Real-World Scenarios (Senior Level)",difficulty:"advanced",topics:[{name:"Startup & Memory",subTopics:[{name:"Why Spring Boot apps are heavy"},{name:"Reduce startup time"},{name:"GraalVM Native Image (concept)"},{name:"GraalVM Native Images (AOT Compilation for instant startup)"}]},{name:"Common Production Issues",subTopics:[{name:"Bean overriding issues"},{name:"Circular dependencies"},{name:"Configuration mismatch across environments"}]}]},{id:15,title:"Miscellaneous / Advanced Spring",difficulty:"advanced",topics:[{name:"GraphQL",subTopics:[{name:"Spring for GraphQL (Controller, Schema, DataFetchers)"}]},{name:"WebSockets",subTopics:[{name:"STOMP protocol, SockJS, Real-time chat"}]},{name:"Caching",subTopics:[{name:"@Cacheable, @CacheEvict"},{name:"Providers: Caffeine, Redis"}]}]}];var fn=(()=>{let t=class t{constructor(){this.javaSections=ry,this.springSections=sy,this.springbootSections=ay}getSections(){return[...this.javaSections,...this.springSections,...this.springbootSections]}getSectionsByTechnology(o){switch(o.toLowerCase()){case"java":return this.javaSections;case"spring":return this.springSections;case"springboot":return this.springbootSections;default:return[]}}getTopicCount(o){return this.getSectionsByTechnology(o).reduce((r,s)=>r+s.topics.length,0)}getSubtopicCount(o){return this.getSectionsByTechnology(o).reduce((r,s)=>r+s.topics.reduce((a,c)=>a+(c.subTopics?.length||0),0),0)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function gT(e,t){e&1&&(h(0,"div",27),m(1,"Coming Soon"),p())}function vT(e,t){if(e&1&&(h(0,"div",28)(1,"div",29)(2,"span",30),m(3),p(),h(4,"span",31),m(5,"Topics"),p()(),h(6,"div",29)(7,"span",30),m(8),p(),h(9,"span",31),m(10,"Subtopics"),p()()()),e&2){let n=O().$implicit;g(3),j(n.topicCount),g(5),j(n.subtopicCount)}}function yT(e,t){e&1&&(h(0,"button",32),m(1," Explore Syllabus \u2192 "),p())}function bT(e,t){e&1&&(h(0,"span",33),m(1," \u{1F512} Coming Soon "),p())}function CT(e,t){if(e&1){let n=St();h(0,"div",16),q("click",function(){let i=it(n).$implicit,r=O();return rt(r.navigateToTechnology(i))}),P(1,gT,2,0,"div",17),h(2,"div",18)(3,"div",19)(4,"span",20),m(5),p()(),h(6,"h3",21),m(7),p(),h(8,"p",22),m(9),p(),P(10,vT,11,2,"div",23),h(11,"div",24),P(12,yT,2,0,"button",25)(13,bT,2,0,"span",26),p()()()}if(e&2){let n=t.$implicit;ce("available",n.available)("coming-soon",!n.available),g(),S("ngIf",!n.available),g(2),To("background",n.color+"20"),g(2),j(n.icon),g(2),j(n.name),g(2),j(n.description),g(),S("ngIf",n.available&&n.topicCount),g(2),S("ngIf",n.available),g(),S("ngIf",!n.available)}}var cy=(()=>{let t=class t{constructor(o,i){this.router=o,this.syllabusService=i,this.technologies=[{id:"java",name:"Java",icon:"\u2615",description:"Core Java, OOP, Collections, Exception Handling",color:"#f89820",route:"/java",available:!0},{id:"spring",name:"Spring Framework",icon:"\u{1F343}",description:"Spring Core, DI, AOP, Spring MVC",color:"#6db33f",route:"/spring",available:!0},{id:"springboot",name:"Spring Boot",icon:"\u{1F680}",description:"Auto-configuration, REST APIs, Microservices",color:"#6db33f",route:"/springboot",available:!0},{id:"angular",name:"Angular",icon:"\u{1F170}\uFE0F",description:"Components, Services, RxJS, Routing",color:"#dd0031",route:"/angular",available:!1},{id:"flutter",name:"Flutter",icon:"\u{1F4F1}",description:"Dart, Widgets, State Management, UI",color:"#02569b",route:"/flutter",available:!1},{id:"android",name:"Android",icon:"\u{1F916}",description:"Kotlin, Activities, Fragments, Jetpack",color:"#3ddc84",route:"/android",available:!1},{id:"react",name:"React",icon:"\u269B\uFE0F",description:"Hooks, Components, Redux, Next.js",color:"#61dafb",route:"/react",available:!1},{id:"nodejs",name:"Node.js",icon:"\u{1F4D7}",description:"Express, REST APIs, MongoDB, Authentication",color:"#68a063",route:"/nodejs",available:!1}]}ngOnInit(){this.technologies.forEach(o=>{o.available&&(o.topicCount=this.syllabusService.getTopicCount(o.id),o.subtopicCount=this.syllabusService.getSubtopicCount(o.id))})}navigateToTechnology(o){o.available&&this.router.navigate([o.route])}};t.\u0275fac=function(i){return new(i||t)(T(Pe),T(fn))},t.\u0275cmp=ae({type:t,selectors:[["app-home"]],standalone:!1,decls:59,vars:1,consts:[[1,"home-container"],[1,"hero-section"],[1,"main-title"],[1,"subtitle"],[1,"stats"],[1,"stat-item"],[1,"stat-number"],[1,"stat-label"],[1,"technologies-section"],[1,"section-title"],[1,"tech-grid"],["class","tech-card",3,"available","coming-soon","click",4,"ngFor","ngForOf"],[1,"features-section"],[1,"features-grid"],[1,"feature-card"],[1,"feature-icon"],[1,"tech-card",3,"click"],["class","card-ribbon",4,"ngIf"],[1,"card-content"],[1,"icon-wrapper"],[1,"tech-icon"],[1,"tech-name"],[1,"tech-description"],["class","stats-info",4,"ngIf"],[1,"card-footer"],["class","explore-btn",4,"ngIf"],["class","locked-badge",4,"ngIf"],[1,"card-ribbon"],[1,"stats-info"],[1,"stat-badge"],[1,"stat-value"],[1,"stat-text"],[1,"explore-btn"],[1,"locked-badge"]],template:function(i,r){i&1&&(h(0,"div",0)(1,"div",1)(2,"h1",2),m(3,"\u{1F4DA} Tech Learning Hub"),p(),h(4,"p",3),m(5,"Master Modern Technologies with Comprehensive Study Materials"),p(),h(6,"div",4)(7,"div",5)(8,"span",6),m(9,"8+"),p(),h(10,"span",7),m(11,"Technologies"),p()(),h(12,"div",5)(13,"span",6),m(14,"100+"),p(),h(15,"span",7),m(16,"Topics Covered"),p()(),h(17,"div",5)(18,"span",6),m(19,"500+"),p(),h(20,"span",7),m(21,"Code Examples"),p()()()(),h(22,"div",8)(23,"h2",9),m(24,"Choose Your Learning Path"),p(),h(25,"div",10),P(26,CT,14,13,"div",11),p()(),h(27,"div",12)(28,"h2",9),m(29,"Why Learn Here?"),p(),h(30,"div",13)(31,"div",14)(32,"div",15),m(33,"\u{1F4D6}"),p(),h(34,"h3"),m(35,"Structured Content"),p(),h(36,"p"),m(37,"Well-organized topics from basics to advanced concepts"),p()(),h(38,"div",14)(39,"div",15),m(40,"\u{1F4BB}"),p(),h(41,"h3"),m(42,"Code Examples"),p(),h(43,"p"),m(44,"Practical code snippets for every concept"),p()(),h(45,"div",14)(46,"div",15),m(47,"\u{1F3AF}"),p(),h(48,"h3"),m(49,"Interview Ready"),p(),h(50,"p"),m(51,"Common interview questions with detailed answers"),p()(),h(52,"div",14)(53,"div",15),m(54,"\u{1F4CA}"),p(),h(55,"h3"),m(56,"Visual Diagrams"),p(),h(57,"p"),m(58,"Complex concepts explained with illustrations"),p()()()()()),i&2&&(g(26),S("ngForOf",r.technologies))},dependencies:[Le,ut],styles:[".home-container[_ngcontent-%COMP%]{min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);padding:40px 20px}.hero-section[_ngcontent-%COMP%]{text-align:center;padding:60px 20px;color:#fff}.main-title[_ngcontent-%COMP%]{font-size:clamp(2rem,8vw,56px);font-weight:800;margin:0 0 20px;text-shadow:2px 2px 4px rgba(0,0,0,.2);animation:_ngcontent-%COMP%_fadeInDown .8s ease-out;line-height:1.2}.subtitle[_ngcontent-%COMP%]{font-size:clamp(1rem,4vw,24px);margin:0 0 50px;opacity:.95;font-weight:300;animation:_ngcontent-%COMP%_fadeInUp .8s ease-out;padding:0 10px}.stats[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:60px;flex-wrap:wrap;margin-top:40px}.stat-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.stat-number[_ngcontent-%COMP%]{font-size:48px;font-weight:700;color:#ffd43b}.stat-label[_ngcontent-%COMP%]{font-size:16px;opacity:.9;margin-top:8px}.technologies-section[_ngcontent-%COMP%]{max-width:1400px;margin:0 auto;padding:40px 20px}.section-title[_ngcontent-%COMP%]{text-align:center;font-size:36px;font-weight:700;color:#fff;margin:0 0 50px;text-shadow:1px 1px 2px rgba(0,0,0,.2)}.tech-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr));gap:30px;padding:20px 0}@media (max-width: 768px){.tech-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:20px;padding:10px 0}}@media (max-width: 480px){.tech-grid[_ngcontent-%COMP%]{gap:15px}}.tech-card[_ngcontent-%COMP%]{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px #0003;transition:all .3s ease;position:relative;cursor:pointer}.tech-card.available[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 20px 40px #0000004d}.tech-card.coming-soon[_ngcontent-%COMP%]{opacity:.7;cursor:not-allowed}.tech-card.coming-soon[_ngcontent-%COMP%]:hover{transform:translateY(-3px)}.card-ribbon[_ngcontent-%COMP%]{position:absolute;top:15px;right:-35px;background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;padding:5px 40px;font-size:12px;font-weight:600;transform:rotate(45deg);box-shadow:0 2px 5px #0003;z-index:10}.card-content[_ngcontent-%COMP%]{padding:30px}.icon-wrapper[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px}.tech-icon[_ngcontent-%COMP%]{font-size:48px}.tech-name[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#333;margin:0 0 12px;text-align:center}.tech-description[_ngcontent-%COMP%]{font-size:14px;color:#666;line-height:1.6;text-align:center;margin:0 0 20px;min-height:40px}.stats-info[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:15px;margin-bottom:20px}.stat-badge[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;background:linear-gradient(135deg,#667eea15,#764ba215);padding:8px 16px;border-radius:12px;border:1px solid #667eea30}.stat-value[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#667eea}.stat-text[_ngcontent-%COMP%]{font-size:11px;color:#666;text-transform:uppercase;margin-top:2px;font-weight:600}.card-footer[_ngcontent-%COMP%]{text-align:center}.explore-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;padding:12px 30px;border-radius:25px;font-size:14px;font-weight:600;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 15px #667eea66}.explore-btn[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 6px 20px #667eea99}.locked-badge[_ngcontent-%COMP%]{display:inline-block;padding:8px 20px;background:#f1f3f5;color:#868e96;border-radius:20px;font-size:13px;font-weight:600}.features-section[_ngcontent-%COMP%]{max-width:1200px;margin:80px auto 0;padding:40px 20px}.features-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:30px;margin-top:40px}.feature-card[_ngcontent-%COMP%]{background:#ffffff1a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.2);border-radius:16px;padding:30px;text-align:center;color:#fff;transition:all .3s ease}.feature-card[_ngcontent-%COMP%]:hover{background:#ffffff26;transform:translateY(-5px)}.feature-icon[_ngcontent-%COMP%]{font-size:48px;margin-bottom:20px}.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:600;margin:0 0 12px}.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;opacity:.9;line-height:1.6;margin:0}@keyframes _ngcontent-%COMP%_fadeInDown{0%{opacity:0;transform:translateY(-30px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 1024px){.home-container[_ngcontent-%COMP%]{padding:30px 15px}.hero-section[_ngcontent-%COMP%]{padding:40px 15px}.stats[_ngcontent-%COMP%]{gap:40px}}@media (max-width: 768px){.home-container[_ngcontent-%COMP%]{padding:20px 10px}.hero-section[_ngcontent-%COMP%]{padding:30px 10px}.stats[_ngcontent-%COMP%]{gap:25px}.stat-number[_ngcontent-%COMP%]{font-size:36px}.stat-label[_ngcontent-%COMP%]{font-size:14px}.section-title[_ngcontent-%COMP%]{font-size:28px;margin-bottom:30px}.card-content[_ngcontent-%COMP%]{padding:20px}.icon-wrapper[_ngcontent-%COMP%]{width:60px;height:60px}.tech-icon[_ngcontent-%COMP%]{font-size:36px}.tech-name[_ngcontent-%COMP%]{font-size:20px}.stats-info[_ngcontent-%COMP%]{gap:10px;flex-wrap:wrap}.stat-badge[_ngcontent-%COMP%]{padding:6px 12px}.explore-btn[_ngcontent-%COMP%]{padding:10px 24px;font-size:13px;min-height:44px}.features-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:20px}.feature-card[_ngcontent-%COMP%]{padding:20px}}@media (max-width: 480px){.home-container[_ngcontent-%COMP%]{padding:15px 8px}.hero-section[_ngcontent-%COMP%]{padding:20px 10px}.stats[_ngcontent-%COMP%]{gap:20px}.stat-number[_ngcontent-%COMP%]{font-size:28px}.stat-label[_ngcontent-%COMP%]{font-size:12px}.section-title[_ngcontent-%COMP%]{font-size:22px;margin-bottom:20px}.card-content[_ngcontent-%COMP%]{padding:15px}.icon-wrapper[_ngcontent-%COMP%]{width:50px;height:50px;margin-bottom:15px}.tech-icon[_ngcontent-%COMP%]{font-size:28px}.tech-name[_ngcontent-%COMP%]{font-size:18px;margin-bottom:10px}.tech-description[_ngcontent-%COMP%]{font-size:13px;min-height:auto}.stats-info[_ngcontent-%COMP%]{gap:8px}.stat-badge[_ngcontent-%COMP%]{padding:5px 10px}.stat-value[_ngcontent-%COMP%]{font-size:16px}.stat-text[_ngcontent-%COMP%]{font-size:10px}.explore-btn[_ngcontent-%COMP%]{padding:10px 20px;font-size:12px;width:100%;max-width:200px}.locked-badge[_ngcontent-%COMP%]{padding:6px 16px;font-size:12px}.card-ribbon[_ngcontent-%COMP%]{font-size:10px;padding:4px 35px}.feature-card[_ngcontent-%COMP%]{padding:15px}.feature-icon[_ngcontent-%COMP%]{font-size:36px;margin-bottom:15px}.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px}}@media (max-width: 360px){.stat-number[_ngcontent-%COMP%]{font-size:24px}.tech-name[_ngcontent-%COMP%]{font-size:16px}.explore-btn[_ngcontent-%COMP%]{font-size:11px}}"]});let e=t;return e})();function wT(e,t){if(e&1){let n=St();h(0,"strong",3),q("click",function(){it(n);let i=O();return rt(i.toggleCollapse())}),m(1),p()}if(e&2){let n=O();ce("collapsed",n.isCollapsed),g(),Be(" ",n.topic.name," ")}}function ST(e,t){if(e&1&&(h(0,"strong"),m(1),p()),e&2){let n=O();g(),Be(" ",n.topic.name," ")}}function ET(e,t){if(e&1){let n=St();h(0,"li",7),q("click",function(){let i=it(n).$implicit,r=O(2);return rt(r.navigateToSubtopic(i.name))}),m(1),p()}if(e&2){let n=t.$implicit;g(),Be(" ",n.name," ")}}function DT(e,t){if(e&1&&(h(0,"div",4)(1,"ul",5),P(2,ET,2,1,"li",6),p()()),e&2){let n=O();ce("collapsed",n.isCollapsed),g(2),S("ngForOf",n.topic.subTopics)}}var ly=(()=>{let t=class t{constructor(o){this.router=o,this.sectionTitle="",this.isCollapsed=!0}toggleCollapse(){this.isCollapsed=!this.isCollapsed}navigateToSubtopic(o){this.router.navigate(["/subtopic-detail"],{queryParams:{subtopic:o,topic:this.topic.name,section:this.sectionTitle}})}};t.\u0275fac=function(i){return new(i||t)(T(Pe))},t.\u0275cmp=ae({type:t,selectors:[["app-topic"]],inputs:{topic:"topic",sectionTitle:"sectionTitle"},standalone:!1,decls:4,vars:3,consts:[["class","topic-header",3,"collapsed","click",4,"ngIf"],[4,"ngIf"],["class","sub-topics-wrapper",3,"collapsed",4,"ngIf"],[1,"topic-header",3,"click"],[1,"sub-topics-wrapper"],[1,"sub-topics"],["class","subtopic-item",3,"click",4,"ngFor","ngForOf"],[1,"subtopic-item",3,"click"]],template:function(i,r){i&1&&(h(0,"li"),P(1,wT,2,3,"strong",0)(2,ST,2,1,"strong",1)(3,DT,3,3,"div",2),p()),i&2&&(g(),S("ngIf",r.topic.subTopics&&r.topic.subTopics.length>0),g(),S("ngIf",!r.topic.subTopics||r.topic.subTopics.length===0),g(),S("ngIf",r.topic.subTopics&&r.topic.subTopics.length>0))},dependencies:[Le,ut],styles:['li[_ngcontent-%COMP%]{padding:10px 15px;margin:8px 0;background:#f8f9fa;border-radius:8px;border-left:3px solid #f5576c;transition:all .3s ease}li[_ngcontent-%COMP%]:hover{background:#e9ecef;transform:translate(10px);box-shadow:0 4px 8px #0000001a}.sub-topics[_ngcontent-%COMP%]{list-style:circle;margin-left:25px;margin-top:8px;color:#555}.sub-topics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px 0;background:none;border:none;transform:none}.sub-topics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:none;transform:none;box-shadow:none}.subtopic-item[_ngcontent-%COMP%]{cursor:pointer;color:#007bff;transition:color .2s ease;padding:8px 12px!important;border-radius:4px;margin:4px 0}.subtopic-item[_ngcontent-%COMP%]:hover{color:#0056b3;background:#e7f3ff!important;text-decoration:underline}.topic-header[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none;position:relative}.topic-header[_ngcontent-%COMP%]:before{content:"\\25bc";display:inline-block;margin-right:8px;transition:transform .3s ease;font-size:.8em}.topic-header.collapsed[_ngcontent-%COMP%]:before{transform:rotate(-90deg)}.sub-topics-wrapper[_ngcontent-%COMP%]{max-height:2000px;overflow:hidden;transition:max-height .3s ease,opacity .3s ease;opacity:1}.sub-topics-wrapper.collapsed[_ngcontent-%COMP%]{max-height:0;opacity:0}@media (max-width: 768px){li[_ngcontent-%COMP%]{padding:8px 12px;margin:6px 0;border-radius:6px}li[_ngcontent-%COMP%]:hover{transform:translate(5px)}.sub-topics[_ngcontent-%COMP%]{margin-left:15px;margin-top:6px}.subtopic-item[_ngcontent-%COMP%]{padding:6px 10px!important;margin:3px 0;font-size:.95em}.topic-header[_ngcontent-%COMP%]:before{margin-right:6px;font-size:.75em}}@media (max-width: 480px){li[_ngcontent-%COMP%]{padding:6px 10px;margin:5px 0;font-size:.9em}li[_ngcontent-%COMP%]:hover{transform:translate(3px)}.sub-topics[_ngcontent-%COMP%]{margin-left:10px}.subtopic-item[_ngcontent-%COMP%]{padding:5px 8px!important;font-size:.85em}}']});let e=t;return e})();function MT(e,t){if(e&1&&(h(0,"span",1),m(1),zu(2,"titlecase"),p()),e&2){let n=O();S("ngClass",n.difficulty),g(),Be(" ",$u(2,2,n.difficulty),`
`)}}var uy=(()=>{let t=class t{constructor(){this.difficulty=""}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=ae({type:t,selectors:[["app-difficulty-badge"]],inputs:{difficulty:"difficulty"},standalone:!1,decls:1,vars:1,consts:[["class","difficulty",3,"ngClass",4,"ngIf"],[1,"difficulty",3,"ngClass"]],template:function(i,r){i&1&&P(0,MT,3,4,"span",0),i&2&&S("ngIf",r.difficulty)},dependencies:[Bi,ut,ad],styles:[".difficulty[_ngcontent-%COMP%]{display:inline-block;padding:3px 10px;border-radius:12px;font-size:.85em;margin-left:10px;font-weight:700}.difficulty.basic[_ngcontent-%COMP%]{background:#28a745;color:#fff}.difficulty.intermediate[_ngcontent-%COMP%]{background:#ffc107;color:#333}.difficulty.advanced[_ngcontent-%COMP%]{background:#dc3545;color:#fff}@media (max-width: 768px){.difficulty[_ngcontent-%COMP%]{padding:2px 8px;font-size:.75em;margin-left:8px}}@media (max-width: 480px){.difficulty[_ngcontent-%COMP%]{padding:2px 6px;font-size:.7em;display:block;margin-top:5px;margin-left:0;width:fit-content}}"]});let e=t;return e})();function xT(e,t){if(e&1&&Ee(0,"app-topic",6),e&2){let n=t.$implicit,o=O();S("topic",n)("sectionTitle",o.section.title)}}var lc=(()=>{let t=class t{constructor(){this.allSections=[]}toggleSection(){this.allSections.forEach(o=>{o.id!==this.section.id&&(o.isCollapsed=!0)}),this.section.isCollapsed=!this.section.isCollapsed}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=ae({type:t,selectors:[["app-section"]],inputs:{section:"section",allSections:"allSections"},standalone:!1,decls:7,vars:8,consts:[[1,"section"],[1,"collapsible","section-title",3,"click"],[3,"difficulty"],[1,"section-content"],[1,"topics"],[3,"topic","sectionTitle",4,"ngFor","ngForOf"],[3,"topic","sectionTitle"]],template:function(i,r){i&1&&(h(0,"div",0)(1,"h2",1),q("click",function(){return r.toggleSection()}),m(2),Ee(3,"app-difficulty-badge",2),p(),h(4,"div",3)(5,"ul",4),P(6,xT,1,2,"app-topic",5),p()()()),i&2&&(g(),ce("collapsed",r.section.isCollapsed),g(),Ht(" ",r.section.id,". ",r.section.title," "),g(),S("difficulty",r.section.difficulty),g(),ce("collapsed",r.section.isCollapsed),g(2),S("ngForOf",r.section.topics))},dependencies:[Le,ly,uy],styles:['.section[_ngcontent-%COMP%]{margin-bottom:35px;border-left:4px solid #667eea;padding-left:20px;transition:transform .3s ease}.section[_ngcontent-%COMP%]:hover{transform:translate(5px)}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#667eea;font-size:1.8em;margin-bottom:15px;display:flex;align-items:center}.section[_ngcontent-%COMP%]   h2.section-title[_ngcontent-%COMP%]:before{content:"\\2615";margin-right:10px;font-size:1.2em}.collapsible[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none;position:relative;padding-right:30px;min-height:44px;display:flex;align-items:center}.collapsible[_ngcontent-%COMP%]:after{content:"\\25bc";position:absolute;right:10px;transition:transform .3s ease;font-size:.8em}.collapsible.collapsed[_ngcontent-%COMP%]:after{transform:rotate(-90deg)}.collapsible[_ngcontent-%COMP%]:hover{opacity:.8}.section-content[_ngcontent-%COMP%]{max-height:5000px;overflow:hidden;transition:max-height .4s ease,opacity .3s ease;opacity:1}.section-content.collapsed[_ngcontent-%COMP%]{max-height:0;opacity:0}.topics[_ngcontent-%COMP%]{list-style:none;padding-left:0}@media (max-width: 768px){.section[_ngcontent-%COMP%]{margin-bottom:25px;padding-left:15px;border-left-width:3px}.section[_ngcontent-%COMP%]:hover{transform:translate(3px)}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.4em;margin-bottom:12px}.section[_ngcontent-%COMP%]   h2.section-title[_ngcontent-%COMP%]:before{margin-right:8px;font-size:1em}.collapsible[_ngcontent-%COMP%]{padding-right:25px}.collapsible[_ngcontent-%COMP%]:after{right:5px;font-size:.7em}}@media (max-width: 480px){.section[_ngcontent-%COMP%]{margin-bottom:20px;padding-left:10px}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2em;flex-wrap:wrap}.section[_ngcontent-%COMP%]   h2.section-title[_ngcontent-%COMP%]:before{margin-right:6px}}']});let e=t;return e})();function AT(e,t){if(e&1&&Ee(0,"app-section",4),e&2){let n=t.$implicit,o=O();S("section",n)("allSections",o.sections)}}var py=(()=>{let t=class t{constructor(o){this.syllabusService=o,this.sections=[]}ngOnInit(){this.sections=this.syllabusService.getSections(),this.sections.forEach(o=>o.isCollapsed=!0)}};t.\u0275fac=function(i){return new(i||t)(T(fn))},t.\u0275cmp=ae({type:t,selectors:[["app-homepage"]],standalone:!1,decls:19,vars:1,consts:[[1,"container"],[1,"content"],[1,"highlight"],[3,"section","allSections",4,"ngFor","ngForOf"],[3,"section","allSections"]],template:function(i,r){i&1&&(h(0,"div",0)(1,"header")(2,"h1"),m(3,"\u2615 Java & Spring Interview Syllabus"),p(),h(4,"p"),m(5,"Complete Guide for Java Developer Interviews (Core + Spring Ecosystem)"),p()(),h(6,"div",1)(7,"div",2)(8,"strong"),m(9,"Note:"),p(),m(10," This syllabus covers essential topics for Java interviews ranging from entry-level to senior positions. It now includes the complete Spring & Spring Boot ecosystem. "),p(),P(11,AT,1,2,"app-section",3),h(12,"div",2)(13,"strong"),m(14,"New!"),p(),m(15," The sections (25-37) contain the comprehensive Spring, Spring Boot 3.4+, and Spring AI syllabus. "),p()(),h(16,"footer")(17,"p"),m(18,"\xA9 2025 Java & Spring Interview Preparation Guide | Good luck with your interviews! \u2615"),p()()()),i&2&&(g(11),S("ngForOf",r.sections))},dependencies:[Le,lc],styles:[".container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;background:#fff;border-radius:15px;box-shadow:0 20px 60px #0000004d;overflow:hidden}header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;text-align:center;padding:40px 20px}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5em;margin-bottom:10px;text-shadow:2px 2px 4px rgba(0,0,0,.2)}header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1em;opacity:.95}.content[_ngcontent-%COMP%]{padding:40px}.highlight[_ngcontent-%COMP%]{background:#fff3cd;padding:15px;border-radius:8px;margin:15px 0;border-left:4px solid #ffc107}footer[_ngcontent-%COMP%]{background:#2c3e50;color:#fff;text-align:center;padding:20px;font-size:.9em}@media (max-width: 768px){.container[_ngcontent-%COMP%]{border-radius:0;box-shadow:none}header[_ngcontent-%COMP%]{padding:30px 15px}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.8em}header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1em}.content[_ngcontent-%COMP%]{padding:20px 15px}.highlight[_ngcontent-%COMP%]{padding:12px;margin:12px 0}footer[_ngcontent-%COMP%]{padding:15px;font-size:.85em}}@media (max-width: 480px){header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5em}header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9em}.content[_ngcontent-%COMP%]{padding:15px 10px}}"]});let e=t;return e})();var fy={name:"Core Java Exception Handling \u2014 Fundamentals",overview:"Understanding the fundamental concepts of exception handling in Java, including what exceptions are, why they exist, and how Java handles them internally.",sections:[{title:"What Is an Exception?",content:"An exception is an abnormal condition that occurs during program execution and disrupts the normal flow of instructions. In simple terms: An exception is a runtime problem that Java can detect and represent as an object.",subsections:[{title:"Common Examples",content:`1) Dividing by zero
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

Now go forth and conquer Java development with confidence! \u{1F4AA}\u{1F604}`}]}],keyPoints:["PATH is an OS-level environment variable that helps the operating system locate Java executables like java, javac, jar, and javadoc","CLASSPATH is a JVM-level environment variable that tells the Java Virtual Machine where to find .class files, packages, and JAR files","PATH is used for finding commands (OS scope), CLASSPATH is used for finding code (JVM scope)","Common PATH error: 'javac' is not recognized \u2014 means OS cannot find Java tools in PATH directories","Common CLASSPATH errors: ClassNotFoundException (class never found) and NoClassDefFoundError (class was found at compile time but missing at runtime)","PATH is analogous to Google Maps for executables \u2014 helping the OS navigate to programs without full addresses","CLASSPATH is analogous to a library catalog \u2014 helping the JVM find classes like a librarian finding books","Modern Java development rarely requires manual CLASSPATH setup \u2014 Maven, Gradle, and IDEs handle it automatically","Best practice: Use -cp or -classpath command-line option instead of global CLASSPATH environment variable","PATH and CLASSPATH work together: PATH finds the tools (javac, java), CLASSPATH finds the classes and libraries","CLASSPATH entries are separated by semicolons (;) on Windows and colons (:) on Linux/macOS","Always include current directory (.) in CLASSPATH to ensure local classes are found","CLASSPATH can contain directories, individual JAR files, or wildcard references (libs/*) for multiple JARs","Setting CLASSPATH permanently as a system variable is discouraged \u2014 it affects all Java applications globally and is hard to debug"],references:["Oracle Java Documentation - Setting the PATH and CLASSPATH","Java SE Tutorial - Environment Variables","Java Language Specification - Class Loading and CLASSPATH","Effective Java by Joshua Bloch - Dependency Management","Oracle Java Troubleshooting Guide - Common Classpath Issues","Java Command Line Options Reference","Maven and Gradle Documentation - Dependency Management"],interviewQA:[{question:"What is the difference between PATH and CLASSPATH in Java?",answer:"PATH is an OS-level environment variable that helps the operating system locate executable programs like java, javac, and jar. CLASSPATH is a JVM-level environment variable that tells the Java Virtual Machine where to find .class files, packages, and JAR files at compile time and runtime. PATH is for finding tools (OS scope), while CLASSPATH is for finding classes and libraries (JVM scope).",difficulty:"easy",tags:["PATH","CLASSPATH","environment-variables","fundamentals"]},{question:"What does the error 'javac' is not recognized mean and how do you fix it?",answer:"This error means PATH is not configured correctly \u2014 the operating system cannot find the javac executable. To fix: (1) Locate your JDK installation (e.g., C:\\Program Files\\Java\\jdk-17), (2) Add the bin folder to PATH (C:\\Program Files\\Java\\jdk-17\\bin), (3) Restart your terminal, (4) Verify with 'javac -version'. On Linux/macOS, add 'export PATH=$PATH:/path/to/jdk/bin' to ~/.bashrc or ~/.zshrc.",difficulty:"easy",tags:["PATH","troubleshooting","errors"]},{question:"What is ClassNotFoundException and how is it different from NoClassDefFoundError?",answer:"ClassNotFoundException occurs when the JVM cannot find a class in CLASSPATH at runtime \u2014 the class was never available. NoClassDefFoundError occurs when a class was present during compilation but is missing at runtime, typically due to CLASSPATH changes, missing JARs, or deleted .class files. ClassNotFoundException means 'never found it', NoClassDefFoundError means 'had it before, lost it now'.",difficulty:"medium",tags:["CLASSPATH","exceptions","errors","troubleshooting"]},{question:"How do you set CLASSPATH for a Java program?",answer:"There are three ways: (1) RECOMMENDED: Use -cp or -classpath option: 'java -cp .;libs/* MyApp' (explicit, no side effects), (2) Temporary environment variable: 'set CLASSPATH=.;libs/*' on Windows or 'export CLASSPATH=.:libs/*' on Linux (current session only), (3) AVOID: Permanent system variable (affects all Java apps globally, hard to debug). Modern best practice is using build tools (Maven, Gradle) or the -cp option.",difficulty:"medium",tags:["CLASSPATH","configuration","best-practices"]},{question:"What can be included in CLASSPATH?",answer:"CLASSPATH can contain: (1) Current directory (.), (2) Directory paths to .class files (C:\\myapp\\classes), (3) Individual JAR files (C:\\libs\\mysql.jar), (4) Wildcard for multiple JARs (C:\\libs/*). Entries are separated by semicolons (;) on Windows or colons (:) on Linux/macOS. The JVM searches entries from left to right and uses the first match found.",difficulty:"medium",tags:["CLASSPATH","configuration","JAR-files"]},{question:"Do you need to set CLASSPATH in modern Java development?",answer:"Rarely. Modern Java development uses build tools (Maven, Gradle) that auto-manage dependencies and CLASSPATH, or IDEs (IntelliJ, Eclipse) that auto-configure build paths. You only set CLASSPATH manually when: (1) Learning Java basics without tools, (2) Running standalone programs with external JARs, (3) Troubleshooting classpath issues, (4) Working with legacy projects. Best practice: Use -cp option when needed, avoid global CLASSPATH environment variable.",difficulty:"medium",tags:["CLASSPATH","modern-development","best-practices","build-tools"]},{question:"Why does CLASSPATH order matter?",answer:"The JVM searches CLASSPATH entries from left to right and uses the FIRST matching class it finds, ignoring duplicates. If you have multiple JARs with the same class (e.g., old-version.jar and new-version.jar), the order determines which version loads. Example: '.;old.jar;new.jar' loads the old version first. To fix: put the desired version first or remove duplicates. This is why dependency management tools (Maven/Gradle) are crucial for preventing version conflicts.",difficulty:"hard",tags:["CLASSPATH","class-loading","dependency-management","troubleshooting"]},{question:"How does PATH help during Java compilation and execution?",answer:"During compilation: When you type 'javac HelloWorld.java', the OS searches PATH directories to find the javac executable. Without PATH, you'd need to type the full path like 'C:\\Program Files\\Java\\jdk-17\\bin\\javac HelloWorld.java'. During execution: Same for 'java HelloWorld' \u2014 OS uses PATH to find the java executable. PATH makes commands work from any directory without specifying full paths to Java tools.",difficulty:"easy",tags:["PATH","compilation","execution","fundamentals"]},{question:"Explain how PATH and CLASSPATH work together with an example.",answer:"Example: 'javac -cp libs/mysql.jar DBApp.java' then 'java -cp .;libs/mysql.jar DBApp'. Step 1: OS uses PATH to find javac executable. Step 2: javac uses CLASSPATH (libs/mysql.jar) to find MySQL driver classes during compilation. Step 3: OS uses PATH to find java executable. Step 4: JVM uses CLASSPATH (. and libs/mysql.jar) to load DBApp.class and MySQL driver at runtime. PATH finds the tools, CLASSPATH finds the code.",difficulty:"hard",tags:["PATH","CLASSPATH","compilation","execution","workflow"]},{question:"What are the best practices for managing CLASSPATH in production?",answer:"Best practices: (1) Use build tools (Maven, Gradle) for automatic dependency management, (2) Never set CLASSPATH as a global environment variable (causes conflicts), (3) Use -cp option for standalone programs, (4) Include current directory (.) when needed, (5) Use relative paths for portability, (6) Leverage fat JARs (Spring Boot) that bundle all dependencies, (7) Use wildcard (libs/*) for multiple JARs, (8) Document dependencies clearly, (9) Avoid mixing library versions. Modern production rarely touches CLASSPATH manually.",difficulty:"hard",tags:["CLASSPATH","best-practices","production","build-tools","dependency-management"]},{question:"How can you programmatically check the current CLASSPATH?",answer:`Use System.getProperty("java.class.path") to get the current CLASSPATH at runtime. Example: String cp = System.getProperty("java.class.path"); String[] paths = cp.split(System.getProperty("path.separator")); for(String p : paths) { System.out.println(p); }. This prints all CLASSPATH entries. You can also use 'java -verbose:class MyApp' to see every class loading with its source JAR/directory. Useful for debugging ClassNotFoundException.`,difficulty:"medium",tags:["CLASSPATH","debugging","runtime","troubleshooting"]},{question:"What is the difference between setting PATH permanently vs temporarily?",answer:"Permanent (System Environment Variable): Survives terminal restarts, affects all sessions, set via System Properties (Windows) or .bashrc/.zshrc (Linux/macOS). Recommended for PATH since Java tools are always needed. Temporary (Session Variable): Lasts only for current terminal session, set with 'set PATH=...' (Windows) or 'export PATH=...' (Linux/macOS). Lost when terminal closes. Useful for testing without affecting global settings. PATH should generally be permanent, CLASSPATH should be temporary (or use -cp).",difficulty:"medium",tags:["PATH","CLASSPATH","environment-variables","configuration"]}]};var Sy={name:"\u{1F680} Structure of a First Java Program & the main Method",overview:"Every Java developer's journey starts with the legendary 'Hello, World!' program. This tiny program may look simple, but each line has a purpose. Let's break it down step by step, using real-life analogies, light humor, and interview-friendly clarity. Understanding the program structure and main method is fundamental to mastering Java! \u{1F4BB}",sections:[{title:"\u{1F3AF} The Legendary First Program",content:"Every Java developer's journey starts with this iconic piece of code. It's simple, elegant, and teaches you everything about Java's structure in just 5 lines!",codeExamples:[{title:"The Classic Hello World",description:"The program that started billions of Java journeys",code:`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,language:"java"}],subsections:[{title:"Why This Program Matters \u{1F31F}",content:`This simple program teaches you:
\u2022 Java's strict structure
\u2022 The importance of the main method
\u2022 Basic syntax and conventions
\u2022 How to print output
\u2022 The foundation for all Java programs

\u{1F4A1} Master this, and you've unlocked Java's door!`},{title:"First Impressions Count",content:`When you run this program:
1. You see 'Hello, World!' printed
2. You feel accomplished \u{1F389}
3. You've just executed your first Java program!
4. You're now part of the Java community

Every expert was once a beginner who typed this exact program!`}]},{title:"\u{1F9F1} Overall Structure of a Java Program",content:"A basic Java program can have these parts in a specific order. Think of a Java program like a house \u{1F3E0}: Package \u2192 Area/society, Imports \u2192 Tools you borrow, Class \u2192 The house itself, main \u2192 Front door, Statements \u2192 What you do inside the house.",images:[{url:"assets/images/java-program-structure.svg",alt:"Complete Java Program Structure",caption:"Visual representation of Java program structure - from package declaration to main method execution, showing how all components fit together"}],subsections:[{title:"The Five Components (In Order)",content:`1\uFE0F\u20E3 Package statement (optional)
2\uFE0F\u20E3 Import statements (optional)
3\uFE0F\u20E3 Class declaration (mandatory)
4\uFE0F\u20E3 main method (mandatory for execution)
5\uFE0F\u20E3 Statements inside main

\u26A0\uFE0F Order matters! Java is very particular about structure.`},{title:"\u{1F3E0} The House Analogy",content:`Think of your Java program as a house:

\u{1F3D8}\uFE0F Package \u2192 Your neighborhood/society
   Groups similar houses together

\u{1F9F0} Imports \u2192 Tools you borrow from neighbors
   Why build when you can borrow?

\u{1F3E0} Class \u2192 The actual house
   Contains all your rooms and furniture

\u{1F6AA} main \u2192 The front door
   The entry point everyone uses

\u{1F6CB}\uFE0F Statements \u2192 Activities inside the house
   The actual work that gets done

\u{1F4A1} Without the house (class) and door (main), nothing happens!`}]},{title:"1\uFE0F\u20E3 Package Statement \u2014 Organizing Your Code",content:"A package is a namespace that groups related classes together. It's the first thing in your Java file (if present).",codeExamples:[{title:"Package Declaration",description:"How to declare a package in Java",code:`package com.example.demo;

import java.util.Scanner;

public class MyApp {
    public static void main(String[] args) {
        System.out.println("I'm in the com.example.demo package!");
    }
}`,language:"java"}],subsections:[{title:"\u{1F9E0} What Is a Package?",content:`A package is a folder-like structure that organizes related classes.

\u{1F4E6} Example packages:
\u2022 java.util \u2192 Utility classes (ArrayList, Scanner)
\u2022 java.io \u2192 Input/Output classes
\u2022 com.example.myapp \u2192 Your custom package

Packages prevent naming conflicts and organize large projects.`},{title:"\u{1F3AF} Why Packages Exist",content:`Three main reasons:

1\uFE0F\u20E3 Organization
   Keep related classes together
   Makes large projects manageable

2\uFE0F\u20E3 Avoid Name Conflicts
   Two classes can have the same name in different packages
   com.example.Utils vs org.company.Utils \u2705

3\uFE0F\u20E3 Access Control
   Package-private access level
   Control which classes can see each other`},{title:"\u{1F3D8}\uFE0F The Home Address Analogy",content:`Package is like your home address:

Two people can be named 'Ravi' but:
\u2022 Ravi at 123 Main Street
\u2022 Ravi at 456 Oak Avenue

Their addresses make them unique!

Similarly:
\u2022 com.example.Utils
\u2022 org.company.Utils

Same class name, different packages = No conflict! \u2705`},{title:"\u{1F604} Without Packages...",content:`Imagine a project with:
\u2022 500 classes
\u2022 All in one folder
\u2022 Names like Utils, Helper, Manager everywhere

Result: Chaos! \u{1F635}\u200D\u{1F4AB}

It's like everyone named 'Utils' living in one room.

Packages save you from this nightmare!`},{title:"\u{1F4DD} Package Naming Conventions",content:`Standard naming pattern:
\u2022 All lowercase
\u2022 Reverse domain name: com.company.project
\u2022 Hierarchical: com.company.project.module.feature

Examples:
\u2022 com.google.android
\u2022 org.apache.commons
\u2022 com.example.myapp.controllers`}]},{title:"2\uFE0F\u20E3 Import Statements \u2014 Borrowing Tools",content:"Import statements tell Java which existing classes you want to use from other packages. They save you from writing fully qualified names everywhere.",codeExamples:[{title:"Import Examples",description:"Different ways to import classes",code:`// Import specific class
import java.util.Scanner;
import java.util.ArrayList;

// Import all classes from a package (not recommended)
import java.util.*;

// Import static method
import static java.lang.Math.sqrt;

public class ImportDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> list = new ArrayList<>();
        double result = sqrt(25); // No need for Math.sqrt()
    }
}`,language:"java"}],subsections:[{title:"\u{1F9E0} What Are Imports?",content:`Imports tell Java:
'Hey, I want to use this existing class from another package.'

Without import:
java.util.Scanner sc = new java.util.Scanner(System.in); \u274C (too long!)

With import:
import java.util.Scanner;
Scanner sc = new Scanner(System.in); \u2705 (clean!)`},{title:"\u{1F3AF} Why Imports Exist",content:`Three main benefits:

1\uFE0F\u20E3 Reuse Existing Code
   Java has thousands of built-in classes
   Don't reinvent the wheel!

2\uFE0F\u20E3 Cleaner Code
   Use short names instead of fully qualified names

3\uFE0F\u20E3 Organize Dependencies
   See exactly which external classes you're using`},{title:"\u{1F9F0} The Toolbox Analogy",content:`Imports are like borrowing tools from a toolbox:

\u{1F528} Why build a hammer when one exists?
\u{1F527} Why create a Scanner when Java provides one?

Java's libraries are your toolbox:
\u2022 java.util \u2192 Collection tools
\u2022 java.io \u2192 File handling tools
\u2022 java.net \u2192 Network tools

Import = Grabbing the tool you need!`},{title:"\u{1F604} Without Imports...",content:`Imagine cooking without utensils:

'I'll cook pasta... but without pots, pans, or spoons!' \u{1F35D}\u{1F604}

That's like Java without imports:
'I'll write a program... but create everything from scratch!'

Result: Exhausting and unnecessary!`},{title:"\u{1F4CB} Import Best Practices",content:`\u2705 DO:
\u2022 Import specific classes: import java.util.ArrayList;
\u2022 Group imports logically
\u2022 Remove unused imports

\u274C DON'T:
\u2022 Use wildcard imports: import java.util.*; (unclear what you're using)
\u2022 Import classes from default package (java.lang) - already imported!
\u2022 Import classes you don't use`},{title:"\u{1F4A1} Fun Fact: java.lang",content:`The java.lang package is automatically imported!

You can use without import:
\u2022 String
\u2022 System
\u2022 Math
\u2022 Integer, Double, etc.

They're like family members - always available! \u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}`}]},{title:"3\uFE0F\u20E3 Class Declaration \u2014 The Heart of Java \u2764\uFE0F",content:"A class is a blueprint that contains methods, variables, and logic. In Java, everything lives inside a class. You cannot write code outside a class - Java is very strict about this!",images:[{url:"assets/images/java-class-structure.svg",alt:"Java Class Structure Diagram",caption:"Anatomy of a Java class - showing class declaration, fields, constructors, and methods with proper visibility modifiers"}],codeExamples:[{title:"Class Declaration Syntax",description:"Different types of class declarations",code:`// Public class - must match filename
public class HelloWorld {
    // This is the class body
}

// Class with access modifiers
public class Student {
    // Fields (variables)
    private String name;
    private int age;
    
    // Constructor
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Methods
    public void study() {
        System.out.println(name + " is studying!");
    }
    
    public static void main(String[] args) {
        Student s = new Student("Alice", 20);
        s.study();
    }
}`,language:"java"}],subsections:[{title:"\u{1F9E0} What Is a Class?",content:`A class is a blueprint that defines:
\u2022 Properties (variables/fields)
\u2022 Behaviors (methods)
\u2022 Structure of objects

In Java:
\u2757 Everything MUST be inside a class
\u2757 No standalone functions/variables allowed
\u2757 Object-oriented = class-oriented`},{title:"\u{1F3AF} Why Classes Exist",content:`Java is object-oriented, so:

1\uFE0F\u20E3 Organization
   Classes group related data and methods

2\uFE0F\u20E3 Reusability
   Create objects from class blueprints

3\uFE0F\u20E3 Encapsulation
   Hide internal details, expose what's needed

4\uFE0F\u20E3 Real-world Modeling
   Classes represent real entities (Student, Car, Account)`},{title:"\u{1F4D0} The Blueprint Analogy",content:`Class = Blueprint of a house \u{1F4D0}
Object = Actual house built from blueprint \u{1F3E0}

Example:
Blueprint (Class): Student
\u2022 Has name, age, rollNo
\u2022 Can study(), attendClass()

Actual Houses (Objects):
\u2022 Student s1 = new Student('Alice', 20);
\u2022 Student s2 = new Student('Bob', 21);

One blueprint, many houses! One class, many objects!`},{title:"\u26A0\uFE0F Java's Strict Rule",content:`In Java, you CANNOT write code outside a class:

\u274C This is INVALID:
System.out.println("Hello"); // Compilation error!

\u2705 This is VALID:
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}

Java is like a strict school principal:
'Everything in class, no exceptions!' \u{1F604}`},{title:"\u{1F4DD} Class Naming Rules",content:`\u2705 MUST follow:
\u2022 Start with uppercase letter
\u2022 Use PascalCase: HelloWorld, StudentInfo
\u2022 No spaces or special characters
\u2022 Should be a noun (represents a thing)

\u2705 Good names:
\u2022 Student, Employee, BankAccount
\u2022 Calculator, FileReader, DatabaseConnection

\u274C Bad names:
\u2022 myclass (lowercase)
\u2022 123Student (starts with digit)
\u2022 Student-Info (has hyphen)`},{title:"\u{1F511} Public Class Rule",content:`\u26A0\uFE0F Critical rule:
If a class is declared public, the filename MUST match!

public class HelloWorld { }

\u2705 Filename must be: HelloWorld.java
\u274C HelloWorld.txt \u2192 Won't work
\u274C helloworld.java \u2192 Won't work (case-sensitive!)

One file = One public class`}]},{title:"4\uFE0F\u20E3 The main Method \u2014 The Star of the Show \u2B50",content:"The main method is the starting point of every Java application. When you run a program, the JVM loads the class, looks for main, and starts execution from there. No main = No execution!",images:[{url:"assets/images/main-method-execution.svg",alt:"JVM Main Method Execution Flow",caption:"How JVM finds and executes the main method - from class loading to program termination, showing the complete execution lifecycle"}],codeExamples:[{title:"The Complete main Method",description:"Understanding every part of the main method signature",code:`public class MainMethodDemo {
    // The entry point of Java application
    public static void main(String[] args) {
        // Your program starts here!
        System.out.println("Program started!");
        System.out.println("JVM found main and executed it!");
    }
    
    // Other methods can exist but won't run automatically
    public void someOtherMethod() {
        System.out.println("I won't run unless called!");
    }
}`,language:"java"}],subsections:[{title:"\u{1F9E0} What Is the main Method?",content:`The main method is:
\u2022 The entry point of your Java program
\u2022 Where execution begins
\u2022 Required for standalone applications
\u2022 Called automatically by JVM

\u{1F4CD} When you run: java HelloWorld

JVM does:
1. Loads HelloWorld class
2. Searches for main method
3. Executes main
4. Program runs!`},{title:"\u{1F6AA} The Front Door Analogy",content:`main is like:

\u{1F6AA} Front door of your house
   Everyone enters here

\u25B6\uFE0F Start button of a game
   Press to begin

\u{1F511} Ignition key of a car
   Turn to start engine

\u{1F3AC} Opening scene of a movie
   Story begins here

No front door = Can't enter house
No main = Can't run program! \u{1F604}`},{title:"\u26A0\uFE0F What If main Is Missing?",content:`Try running a class without main:

public class NoMain {
    public void hello() {
        System.out.println("Hello!");
    }
}

Run: java NoMain

Error: \u274C
'Error: Main method not found in class NoMain'

JVM is confused:
'Where do I start? There's no door!' \u{1F635}`},{title:"\u{1F4CA} Execution Flow",content:`Step-by-step what happens:

1\uFE0F\u20E3 You compile: javac HelloWorld.java
   \u2192 Creates HelloWorld.class (bytecode)

2\uFE0F\u20E3 You run: java HelloWorld
   \u2192 JVM starts

3\uFE0F\u20E3 JVM loads HelloWorld class
   \u2192 Searches for main method

4\uFE0F\u20E3 JVM finds public static void main(String[] args)
   \u2192 Execution begins!

5\uFE0F\u20E3 Statements inside main execute
   \u2192 Line by line

6\uFE0F\u20E3 main method ends
   \u2192 Program terminates`}]},{title:"\u{1F50D} Breaking Down: public static void main(String[] args)",content:"Let's decode the most important method signature in Java, word by word. This is interview gold! Every keyword has a specific purpose and reason.",images:[{url:"assets/images/main-method-breakdown.svg",alt:"Main Method Signature Breakdown",caption:"Detailed breakdown of each component in the main method signature - public, static, void, main, String[] args - with explanations and visual aids"}],subsections:[{title:"\u{1F4CB} Complete Breakdown Table",content:`Part          | Meaning                | Why Needed
------------- | ---------------------- | -------------------------------------
public        | Accessible everywhere  | JVM must access it from outside
static        | No object needed       | JVM doesn't create objects to run main
void          | No return value        | JVM doesn't expect anything back
main          | Method name            | JVM looks for this exact name
String[] args | Command-line arguments | Accept input at runtime

\u{1F3AF} Every word matters! Change one and it won't work!`},{title:"\u{1F513} public \u2014 Open to All",content:`Why public?

JVM is outside your class and needs to access main.

\u274C If private:
JVM: 'Sorry, I can't access this!' \u2192 Error

\u2705 If public:
JVM: 'Perfect, I can call this!' \u2192 Runs

\u{1F6AA} Analogy:
Front door must be public, not locked!
If locked, guests can't enter. \u{1F510}\u{1F604}

Reason: JVM is an external caller that needs access.`},{title:"\u26A1 static \u2014 No Object Required",content:`Why static?

JVM doesn't want to create objects just to run your program.

Without static:
JVM would need to do:
HelloWorld obj = new HelloWorld(); \u274C
obj.main(args); \u274C
Too much work!

With static:
JVM directly calls:
HelloWorld.main(args); \u2705
No object needed!

\u260E\uFE0F Analogy:
Calling customer care:
\u2022 You don't need to know the agent personally
\u2022 Just dial and talk
\u2022 static = Direct access without knowing anyone

Reason: Simplifies program startup - no object construction needed.`},{title:"\u{1F6AB} void \u2014 No Return Value",content:`Why void?

main doesn't return anything to JVM.

JVM says:
'Just run the program, no receipt needed!' \u{1F604}

If main returned something:
public static int main(String[] args) {
    return 42; // JVM: 'What do I do with this?' \u{1F937}
}

JVM doesn't care about return values from main.

\u{1F381} Analogy:
You give a gift to someone.
They say 'Thanks!' and keep it.
They don't give you a receipt! \u{1F604}

Reason: Main is the starting point, not a subroutine that returns data.`},{title:"\u{1F3AF} main \u2014 The Magic Name",content:`Why 'main'?

It's a fixed convention! JVM only recognizes this name.

\u274C Try renaming:
public static void start(String[] args) { }
public static void run(String[] args) { }
public static void begin(String[] args) { }

JVM: 'Error: Main method not found' \u{1F635}

\u2705 Must be exactly:
public static void main(String[] args) { }

JVM: 'Found it! Let's go!' \u{1F680}

\u{1F50D} Analogy:
Like a secret password.
JVM asks: 'What's the password?'
You must say: 'main'
Say anything else = Access denied!

Reason: JVM specification requires this exact name for program entry point.`},{title:"\u{1F4E6} String[] args \u2014 Command-Line Arguments",content:`Why String[] args?

Allows passing input when running the program.

Example:
java MyProgram hello world 123

Inside program:
args[0] \u2192 'hello'
args[1] \u2192 'world'
args[2] \u2192 '123'

\u{1F381} Analogy:
args is like a gift box \u{1F381}
JVM hands it to your program at startup.
You can open it and use what's inside!

\u{1F4A1} Note:
\u2022 Always an array of Strings
\u2022 Can be empty: new String[0]
\u2022 Can rename: String[] parameters (works, but args is convention)

Reason: Provides flexibility to pass runtime arguments without recompiling.`}],codeExamples:[{title:"Using Command-Line Arguments",description:"How to use args parameter in main method",code:`public class ArgsDemo {
    public static void main(String[] args) {
        // Check if arguments are provided
        if (args.length == 0) {
            System.out.println("No arguments provided!");
            return;
        }
        
        System.out.println("Number of arguments: " + args.length);
        
        // Print all arguments
        for (int i = 0; i < args.length; i++) {
            System.out.println("Argument " + i + ": " + args[i]);
        }
    }
}

// Run: java ArgsDemo hello world 123
// Output:
// Number of arguments: 3
// Argument 0: hello
// Argument 1: world
// Argument 2: 123`,language:"java"},{title:"What Happens If You Change main?",description:"Common mistakes and their consequences",code:`// \u274C WRONG: Not public
static void main(String[] args) { }
// Error: Main method not public

// \u274C WRONG: Not static
public void main(String[] args) { }
// Error: Main method not static

// \u274C WRONG: Returns a value
public static int main(String[] args) { return 0; }
// Error: Main method must return void

// \u274C WRONG: Different name
public static void start(String[] args) { }
// Error: Main method not found

// \u274C WRONG: No parameters
public static void main() { }
// Error: Main method signature incorrect

// \u2705 CORRECT: Exact signature
public static void main(String[] args) { }
// Works perfectly!`,language:"java"}]},{title:"5\uFE0F\u20E3 Statements Inside main \u2014 Where Magic Happens \u2728",content:"The actual logic of your program lives inside the main method. These are the instructions that get executed when your program runs.",codeExamples:[{title:"System.out.println Explained",description:"Understanding the most common statement in Java",code:`public class PrintDemo {
    public static void main(String[] args) {
        // System.out.println - Print with new line
        System.out.println("Hello, World!");
        System.out.println("Next line");
        
        // System.out.print - Print without new line
        System.out.print("Same ");
        System.out.print("line!");
        System.out.println(); // Empty line
        
        // System.out.printf - Formatted print
        String name = "Alice";
        int age = 25;
        System.out.printf("Name: %s, Age: %d%n", name, age);
    }
}

// Output:
// Hello, World!
// Next line
// Same line!
// Name: Alice, Age: 25`,language:"java"}],subsections:[{title:"\u{1F9E0} Breaking Down System.out.println",content:`Let's decode Java's most famous statement:

System.out.println('Hello, World!');

\u{1F4CC} System
\u2022 A built-in utility class (from java.lang)
\u2022 Contains standard input/output/error streams
\u2022 Always available (no import needed)

\u{1F4CC} out
\u2022 A static field in System class
\u2022 Type: PrintStream
\u2022 Represents standard output (console/terminal)

\u{1F4CC} println
\u2022 A method of PrintStream class
\u2022 Prints text + adds new line
\u2022 println = print + line break`},{title:"\u{1F5E3}\uFE0F The Speaking Analogy",content:`System.out.println is Java saying:

'Speak to the screen!' \u{1F5E3}\uFE0F\u{1F4BB}

Think of it as:
\u2022 System \u2192 The building
\u2022 out \u2192 The PA system/speakers
\u2022 println \u2192 The announcement with pause

Just like:
'Building.speakers.announce("Hello everyone!")'

Result: Message appears on screen!`},{title:"\u{1F604} Every Beginner's First Print",content:`Every Java beginner prints:
'Hello, World!'

It's like:
\u2022 Baby's first word \u{1F476}
\u2022 A bird's first flight \u{1F426}
\u2022 Your first step in Java \u{1F463}

Why 'Hello, World'?
\u2022 Tradition since 1970s (C language)
\u2022 Simple and clear
\u2022 Proves your setup works
\u2022 Universal programming rite of passage!

Million-dollar apps started with this line! \u{1F4B0}`},{title:"\u{1F4DD} Common Statement Types",content:`Inside main, you can have:

1\uFE0F\u20E3 Variable declarations
int age = 25;
String name = "Alice";

2\uFE0F\u20E3 Method calls
System.out.println("Hello");
obj.doSomething();

3\uFE0F\u20E3 Control structures
if (age > 18) { }
for (int i = 0; i < 10; i++) { }

4\uFE0F\u20E3 Object creation
Student s = new Student();

5\uFE0F\u20E3 Expressions
int sum = 10 + 20;
boolean result = (age > 18);`}]},{title:"\u{1F504} Complete Program Execution Flow",content:"Understanding how Java executes your program from start to finish.",images:[{url:"assets/images/java-execution-flow.svg",alt:"Complete Java Program Execution Flow",caption:"Step-by-step visualization of Java program execution - from source code compilation to JVM execution and termination"}],subsections:[{title:"\u{1F4CA} Step-by-Step Execution",content:`1\uFE0F\u20E3 You write code
   HelloWorld.java (source file)

2\uFE0F\u20E3 You compile
   javac HelloWorld.java
   \u2192 Creates HelloWorld.class (bytecode)

3\uFE0F\u20E3 You run
   java HelloWorld
   \u2192 JVM starts

4\uFE0F\u20E3 JVM loads the class
   \u2192 Reads HelloWorld.class
   \u2192 Loads into memory

5\uFE0F\u20E3 JVM looks for main
   \u2192 Searches: public static void main(String[] args)
   \u2192 Found? \u2192 Continue
   \u2192 Not found? \u2192 Error!

6\uFE0F\u20E3 Execution starts from main
   \u2192 Line by line execution
   \u2192 Top to bottom

7\uFE0F\u20E3 Statements execute
   \u2192 Variables created
   \u2192 Methods called
   \u2192 Output produced

8\uFE0F\u20E3 main method ends
   \u2192 Program terminates
   \u2192 JVM shuts down`},{title:"\u23F1\uFE0F Real-Time Example",content:`Let's trace this program:

public class Demo {
    public static void main(String[] args) {
        System.out.println("Step 1");
        int x = 10;
        System.out.println("x = " + x);
        System.out.println("Step 2");
    }
}

Execution trace:
1. JVM starts
2. Loads Demo class
3. Finds main method
4. Executes: System.out.println('Step 1')
   Output: Step 1
5. Executes: int x = 10;
   Variable x created with value 10
6. Executes: System.out.println('x = ' + x)
   Output: x = 10
7. Executes: System.out.println('Step 2')
   Output: Step 2
8. main ends
9. Program terminates`},{title:"\u{1F3AC} Movie Analogy",content:`Think of program execution like watching a movie:

\u{1F3AC} Opening scene \u2192 main method starts
\u{1F4FD}\uFE0F Scenes play \u2192 Statements execute one by one
\u{1F3AD} Characters act \u2192 Objects interact, methods called
\u{1F3B5} Background music \u2192 JVM managing memory
\u{1F3AC} Ending credits \u2192 main method ends

Just like you can't skip the opening scene,
JVM can't skip the main method!`}],codeExamples:[{title:"Tracing Program Flow",description:"Example showing execution order with comments",code:`public class ExecutionFlow {
    public static void main(String[] args) {
        // Step 1: Program starts here
        System.out.println("1. Main method started");
        
        // Step 2: Variable declaration
        int number = 42;
        System.out.println("2. Variable created: " + number);
        
        // Step 3: Method call
        greet("Alice");
        
        // Step 4: Conditional logic
        if (number > 40) {
            System.out.println("4. Number is greater than 40");
        }
        
        // Step 5: Loop
        for (int i = 1; i <= 3; i++) {
            System.out.println("5. Loop iteration: " + i);
        }
        
        // Step 6: Program ends
        System.out.println("6. Main method ending");
    }
    
    // Helper method (called from main)
    static void greet(String name) {
        System.out.println("3. Hello, " + name + "!");
    }
}

// Output:
// 1. Main method started
// 2. Variable created: 42
// 3. Hello, Alice!
// 4. Number is greater than 40
// 5. Loop iteration: 1
// 5. Loop iteration: 2
// 5. Loop iteration: 3
// 6. Main method ending`,language:"java"}]},{title:"\u{1F4DA} Complete Example: Putting It All Together",content:"Let's see a complete Java program that demonstrates all components working together.",codeExamples:[{title:"Complete Java Program Structure",description:"A comprehensive example with all components",code:`// 1. Package declaration (optional)
package com.example.demo;

// 2. Import statements (optional)
import java.util.Scanner;
import java.time.LocalDate;

// 3. Class declaration (mandatory)
public class CompleteDemo {
    
    // Class variables (fields)
    private static String appName = "My First App";
    
    // 4. main method (mandatory for execution)
    public static void main(String[] args) {
        // 5. Statements inside main
        
        // Print app name
        System.out.println("=== " + appName + " ===");
        System.out.println();
        
        // Use imported class
        LocalDate today = LocalDate.now();
        System.out.println("Today's date: " + today);
        
        // Create object and call method
        Student student = new Student("Alice", 20);
        student.introduce();
        
        // Use command-line arguments
        if (args.length > 0) {
            System.out.println("\\nCommand-line arguments:");
            for (int i = 0; i < args.length; i++) {
                System.out.println("  Arg " + i + ": " + args[i]);
            }
        } else {
            System.out.println("\\nNo command-line arguments provided.");
        }
        
        // Call other methods
        displayMessage("Program completed successfully!");
    }
    
    // Helper method
    private static void displayMessage(String msg) {
        System.out.println("\\n[INFO] " + msg);
    }
}

// Helper class in same file (not public)
class Student {
    private String name;
    private int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void introduce() {
        System.out.println("\\nStudent Info:");
        System.out.println("  Name: " + name);
        System.out.println("  Age: " + age);
    }
}`,language:"java"}]},{title:"\u{1F9E0} Quick Revision Summary",content:"Let's consolidate everything you've learned with quick reference tables and key points.",subsections:[{title:"\u{1F4CB} Component Purpose Table",content:`Component   | Purpose                        | Required?
----------- | ------------------------------ | -----------
Package     | Organize classes into namespaces | Optional
Import      | Use external classes           | Optional
Class       | Blueprint containing code      | Mandatory
main method | Entry point of program         | Mandatory*
Statements  | Actual logic and instructions  | Optional

*Mandatory for standalone applications that need to execute`},{title:"\u{1F511} main Method Signature Breakdown",content:`Keyword | Meaning           | Why Required
------- | ----------------- | -------------------------------------
public  | Anyone can access | JVM needs to call it from outside
static  | No object needed  | JVM won't create objects to run main
void    | Returns nothing   | JVM doesn't expect return value
main    | Method name       | JVM looks for this exact name
String[]| Array of Strings  | Command-line arguments
args    | Parameter name    | Convention (can be any name)`},{title:"\u2705 Key Takeaways",content:`1\uFE0F\u20E3 Java programs have a clear structure
   Order matters: package \u2192 imports \u2192 class \u2192 main

2\uFE0F\u20E3 Class is mandatory
   Everything must be inside a class

3\uFE0F\u20E3 main is the entry point
   Execution always starts from main

4\uFE0F\u20E3 Every keyword in main has a purpose
   public static void main(String[] args) - all required!

5\uFE0F\u20E3 JVM is strict
   Follow the rules or get compilation/runtime errors

6\uFE0F\u20E3 System.out.println is your friend
   First tool to display output

7\uFE0F\u20E3 Understanding structure > memorizing
   Know WHY each part exists, not just WHAT it is`}]},{title:"\u{1F393} Common Mistakes & How to Avoid Them",content:"Learning from common mistakes helps you become a better programmer faster.",subsections:[{title:"\u274C Mistake #1: Filename Doesn't Match Class Name",content:`Wrong:
public class HelloWorld { }
Filename: Test.java \u274C

Error: 'class HelloWorld is public, should be declared in a file named HelloWorld.java'

Correct:
public class HelloWorld { }
Filename: HelloWorld.java \u2705

\u{1F4A1} Remember: Public class name MUST match filename exactly (case-sensitive)!`},{title:"\u274C Mistake #2: Typo in main Method",content:`Wrong:
public static void Main(String[] args) { } // Capital M
public static void main(String args) { }    // Missing []
public void main(String[] args) { }         // Missing static
static void main(String[] args) { }          // Missing public

All result in: 'Error: Main method not found'

Correct:
public static void main(String[] args) { } \u2705

\u{1F4A1} Every character matters! Copy it exactly.`},{title:"\u274C Mistake #3: Missing Semicolon",content:`Wrong:
System.out.println("Hello") // Missing semicolon

Error: '; expected'

Correct:
System.out.println("Hello"); \u2705

\u{1F4A1} Every statement must end with semicolon (except blocks like if, for, etc.)`},{title:"\u274C Mistake #4: Wrong Quotes",content:`Wrong:
System.out.println('Hello');  // Single quotes for string
System.out.println("Hello");   // Smart quotes (curly)

Error: 'Unclosed character literal' or 'Illegal character'

Correct:
System.out.println(\\"Hello\\"); \u2705 // Double straight quotes

\u{1F4A1} Strings use double quotes (\\"), characters use single quotes ('a')`},{title:"\u274C Mistake #5: Code Outside Class",content:`Wrong:
System.out.println("Hello"); // Not in any class
public class Test { }

Error: 'Class, interface, or enum expected'

Correct:
public class Test {
    public static void main(String[] args) {
        System.out.println("Hello"); \u2705
    }
}

\u{1F4A1} All executable code must be inside a class!`},{title:"\u{1F4A1} Pro Tips to Avoid Mistakes",content:`1\uFE0F\u20E3 Use an IDE (IntelliJ, Eclipse, VS Code)
   \u2022 Syntax highlighting
   \u2022 Auto-completion
   \u2022 Error detection

2\uFE0F\u20E3 Copy-paste the main signature initially
   Don't type it from memory until you're confident

3\uFE0F\u20E3 Pay attention to case
   Java is case-sensitive: Main \u2260 main

4\uFE0F\u20E3 Check your brackets
   Every { needs a matching }

5\uFE0F\u20E3 Read error messages carefully
   They tell you exactly what's wrong!`}],codeExamples:[{title:"Common Mistakes Demo",description:"Example of common errors and their fixes",code:`// \u274C WRONG: Multiple mistakes
public class helloworld {  // Wrong: lowercase class name
    public static void Main(String[] args) {  // Wrong: Main should be main
        System.out.println('Hello')  // Wrong: single quotes, missing semicolon
    }
}  // Filename must be: helloworld.java (but class name should be uppercase!)

// \u2705 CORRECT: All fixed
public class HelloWorld {  // Correct: PascalCase class name
    public static void main(String[] args) {  // Correct: lowercase main
        System.out.println("Hello");  // Correct: double quotes, semicolon
    }
}  // Filename: HelloWorld.java`,language:"java"}]},{title:"\u{1F3C1} Final Thoughts",content:"Understanding the structure of a Java program is your foundation for everything else you'll learn in Java.",subsections:[{title:"\u{1F3AF} What You've Learned",content:`You now understand:
\u2705 Why Java programs are structured the way they are
\u2705 The purpose of each component (package, import, class, main)
\u2705 Why every keyword in main is necessary
\u2705 How JVM executes your program
\u2705 Common mistakes and how to avoid them

This knowledge will serve you throughout your Java journey!`},{title:"\u{1F680} What's Next?",content:`Now that you understand program structure:

1\uFE0F\u20E3 Practice writing simple programs
   Start with variations of Hello World

2\uFE0F\u20E3 Experiment with command-line arguments
   Try passing different values

3\uFE0F\u20E3 Learn about variables and data types
   Store and manipulate data

4\uFE0F\u20E3 Explore control structures
   if-else, loops, switch

5\uFE0F\u20E3 Create methods
   Break down your code into reusable pieces

Every expert started where you are now! \u{1F4AA}`},{title:"\u{1F4A1} Remember",content:`The first Java program teaches you:
\u2022 Java is structured (not chaotic)
\u2022 Java is strict (but for good reasons)
\u2022 Java always needs a clear starting point (main)

Once you understand:
\u2705 Program structure
\u2705 main method keywords
\u2705 Execution flow

Java suddenly feels logical instead of scary! \u{1F604}

You're not memorizing rules - you're understanding a well-designed system.

And that's the beauty of Java! \u2615\u2728`}]}],keyPoints:["Every Java program must have at least one class - code cannot exist outside a class","The main method signature must be exactly: public static void main(String[] args)","public allows JVM to access main from outside the class","static allows JVM to call main without creating an object","void means main doesn't return any value to the JVM","'main' is the exact method name JVM looks for - it cannot be renamed","String[] args holds command-line arguments passed to the program","Package statement (optional) organizes classes into namespaces","Import statements (optional) allow using classes from other packages","Public class name must exactly match the filename (case-sensitive)","System.out.println() is used to print output to the console","JVM loads the class, finds main, and starts execution from there","Execution flow: compile \u2192 load class \u2192 find main \u2192 execute statements \u2192 terminate","One .java file can have only one public class","Every statement (except blocks) must end with a semicolon","Java is case-sensitive: Main \u2260 main, String \u2260 string","The main method is the entry point for standalone Java applications"],references:["Oracle Java Documentation - Getting Started with Java","Java Language Specification (JLS) - Chapter 12: Execution","The Java Tutorial by Oracle - The 'Hello World!' Application","Effective Java by Joshua Bloch - Item 1: Consider static factory methods","Java: A Beginner's Guide by Herbert Schildt - Chapter 2","Head First Java by Kathy Sierra - Chapter 1: Breaking the Surface","Oracle Java SE Documentation - The main Method","Java Virtual Machine Specification - Loading, Linking, and Initializing"],interviewQA:[{question:"What is the main method in Java?",answer:"The main method is the entry point of a Java application. It's where program execution begins. JVM looks for this method when you run a Java program. Signature must be: public static void main(String[] args)",difficulty:"easy",tags:["main-method","basics","execution"]},{question:"Why is main method public in Java?",answer:"The main method is public because JVM needs to access it from outside the class. If it were private or protected, JVM couldn't call it to start the program. Public access allows JVM (an external caller) to invoke the method.",difficulty:"easy",tags:["main-method","access-modifiers","public"]},{question:"Why is main method static in Java?",answer:"The main method is static so JVM can call it without creating an object of the class. If it weren't static, JVM would need to instantiate the class first, which is unnecessary and inefficient for program startup. Static allows direct invocation: ClassName.main(args)",difficulty:"medium",tags:["main-method","static","execution"]},{question:"Why does main method return void?",answer:"The main method returns void because JVM doesn't expect any return value. The method's purpose is to start and run the program, not to return data. Program exit status is controlled through System.exit(int) if needed, not through main's return value.",difficulty:"easy",tags:["main-method","void","return-type"]},{question:"What is String[] args in main method?",answer:"String[] args is an array of command-line arguments passed to the program at runtime. When you run 'java MyClass arg1 arg2', args[0] = 'arg1' and args[1] = 'arg2'. It allows passing input without recompiling the program. The name 'args' is convention but can be changed.",difficulty:"medium",tags:["main-method","command-line","arrays"]},{question:"Can we have multiple main methods in a Java program?",answer:"Yes, you can have multiple main methods in different classes within the same program. Each class can have its own main method. When you run the program (java ClassName), JVM executes the main method of that specific class. However, only one public class per file, and filename must match that public class.",difficulty:"medium",tags:["main-method","multiple-classes"]},{question:"What happens if we don't define main method in a class?",answer:"If you try to run a class without a main method, you'll get a runtime error: 'Error: Main method not found in class ClassName'. The class will compile fine, but JVM cannot execute it as a standalone application. Libraries/utility classes don't need main, but executable classes do.",difficulty:"easy",tags:["main-method","errors"]},{question:"Can we change the name of main method?",answer:"No, you cannot rename main to something else (like 'start' or 'run') for the entry point. JVM specifically looks for a method named 'main' with exact signature. You can create other methods with different names, but they won't be execution entry points.",difficulty:"easy",tags:["main-method","naming"]},{question:"What is the sequence of execution in a Java program?",answer:"1) Compile: javac creates .class bytecode. 2) Run: java command starts JVM. 3) JVM loads the class into memory. 4) JVM searches for public static void main(String[] args). 5) Execution begins from first statement in main. 6) Statements execute sequentially. 7) main ends, program terminates.",difficulty:"medium",tags:["execution-flow","JVM","lifecycle"]},{question:"Why must the public class name match the filename?",answer:"In Java, if a class is declared public, the filename must exactly match the class name (case-sensitive) with .java extension. This helps JVM locate the class file. It's a design decision for organization and clarity. One file can have only one public class, but multiple non-public classes.",difficulty:"medium",tags:["class","naming","file-structure"]},{question:"What is System.out.println()?",answer:"System.out.println() is used to print output to console. System is a class in java.lang, 'out' is a static PrintStream object, println() is a method that prints and adds a newline. It's the most common way to display output in Java programs.",difficulty:"easy",tags:["output","println","System"]},{question:"Can we overload the main method?",answer:"Yes, you can overload main method by creating methods with the same name but different parameters. However, JVM will only call public static void main(String[] args) as the entry point. Other overloaded versions must be called explicitly from within the program.",difficulty:"hard",tags:["main-method","overloading","advanced"]}]};var Ey={name:"\u{1F511} Java Keywords & Identifiers \u2014 The VIP Words and Your Creative Names",overview:"Think of Java as a language with two types of words: VIP words (keywords) that are reserved by Java itself, and your custom names (identifiers) that you create for variables, methods, and classes. Understanding these is like learning the difference between protected brand names and the names you give to your own products. Let's dive into this fundamental concept with fun analogies and practical examples! \u{1F3AF}",sections:[{title:"\u{1F3AD} Keywords vs Identifiers: The Grand Introduction",content:"Before we dive deep, let's understand the big picture. Java has special words that it owns (keywords) and words that you create (identifiers). It's like the difference between celebrity names that nobody else can use and the name you choose for your pet!",subsections:[{title:"The Celebrity Analogy \u{1F31F}",content:`Imagine Java as a celebrity club:

\u{1F3AB} Keywords = VIP Celebrity Names
\u2022 Reserved by Java
\u2022 You can't use them for your own purposes
\u2022 They have special powers
\u2022 Examples: if, else, class, public
\u2022 Like trademarked names - off limits!

\u270F\uFE0F Identifiers = Names You Create
\u2022 Your custom variable names
\u2022 Your class names
\u2022 Your method names
\u2022 Examples: studentName, calculateGrade, BankAccount
\u2022 Like naming your pet - your choice!

\u{1F4A1} Golden Rule: Never try to name your variable 'class' or 'if' - those seats are taken by Java VIPs!`},{title:"Quick Comparison",content:`Keyword vs Identifier at a Glance:

Keyword:
\u2022 Predefined by Java \u2705
\u2022 Cannot be used as names \u274C
\u2022 Always lowercase (mostly) \u2705
\u2022 Has special meaning \u2705
\u2022 Example: public, static, void

Identifier:
\u2022 Defined by programmer \u2705
\u2022 Can be any valid name \u2705
\u2022 Case-sensitive \u2705
\u2022 No special meaning (unless you give it) \u2705
\u2022 Example: myAge, StudentInfo, calculateTotal`}]},{title:"\u{1F510} Java Keywords \u2014 The Reserved VIP Words",content:"Keywords are special reserved words in Java that have predefined meanings and purposes. They're like the royal family of the Java language - you can't use their names for anything else!",images:[{url:"assets/images/java-keywords-overview.svg",alt:"Java Keywords Overview and Categories",caption:"Complete visual guide to Java keywords organized by categories - from access modifiers to control flow, with color-coded groupings for easy understanding"}],subsections:[{title:"\u{1F9E0} What Are Keywords?",content:`Keywords are reserved words that:
\u2022 Have special meaning to the Java compiler
\u2022 Cannot be used as identifiers (variable names, class names, etc.)
\u2022 Are predefined by the Java language
\u2022 Control program flow, data types, access, and more

\u{1F4CA} Java has 51 reserved keywords (and 2 reserved literals: true, false)

\u{1F6AB} What happens if you try to use a keyword as a variable name?
Compiler says: 'Not allowed! This is a reserved word!'

Example:
int class = 5; // \u274C Error! 'class' is a keyword
int myClass = 5; // \u2705 Works! 'myClass' is an identifier`},{title:"\u{1F3AF} Why Are Keywords Reserved?",content:`Think of it like this:

Imagine if everyone could name their child 'President' or 'King'
How would you know who's the real president? Chaos! \u{1F635}

Similarly, if you could name a variable 'if' or 'class':
\u2022 Compiler gets confused: 'Is this the if statement or a variable?'
\u2022 Code becomes unreadable
\u2022 Programs break

\u{1F4A1} Keywords are reserved to:
1\uFE0F\u20E3 Avoid confusion
   Compiler knows exactly what 'if' means

2\uFE0F\u20E3 Maintain clarity
   Everyone reading code knows what 'class' does

3\uFE0F\u20E3 Prevent errors
   No accidental naming conflicts

4\uFE0F\u20E3 Ensure consistency
   Same keyword = same meaning everywhere`},{title:"\u{1F4CB} Complete List of Java Keywords",content:`Java has 51 keywords organized by purpose:

\u{1F535} Access Modifiers (4):
public, private, protected, default

\u{1F7E2} Class, Method & Variable Modifiers (11):
abstract, static, final, synchronized, volatile, transient, native, strictfp, class, interface, enum

\u{1F7E1} Data Types (8):
boolean, byte, char, short, int, long, float, double

\u{1F7E0} Control Flow (11):
if, else, switch, case, default, for, while, do, break, continue, return

\u{1F534} Exception Handling (6):
try, catch, finally, throw, throws, assert

\u{1F7E3} Package & Import (2):
package, import

\u{1F7E4} Object-Oriented (7):
class, interface, extends, implements, new, this, super

\u26AB Other Keywords (2):
void, instanceof

\u26A0\uFE0F Reserved but not used (2):
goto, const

\u{1F4A1} Total: 51 keywords + 3 special literals (true, false, null)`}],codeExamples:[{title:"Keywords in Action",description:"Common Java keywords in a real program",code:`// Keywords highlighted with comments
public class StudentGrades {        // public, class
    private int marks;               // private, int
    private static final int MAX = 100;  // private, static, final, int
    
    public StudentGrades(int marks) {    // public, int
        if (marks >= 0 && marks <= MAX) {  // if
            this.marks = marks;            // this
        } else {                           // else
            throw new IllegalArgumentException("Invalid marks");  // throw, new
        }
    }
    
    public void displayGrade() {         // public, void
        if (marks >= 90) {               // if
            System.out.println("A Grade");
        } else if (marks >= 75) {        // else, if
            System.out.println("B Grade");
        } else {                          // else
            System.out.println("C Grade");
        }
    }
    
    public static void main(String[] args) {  // public, static, void
        StudentGrades student = new StudentGrades(85);  // new
        student.displayGrade();
    }
}`,language:"java"}]},{title:"\u{1F4CA} Keywords by Category \u2014 Organized and Explained",content:"Let's explore Java keywords grouped by their purpose. Understanding categories makes them easier to remember!",images:[{url:"assets/images/keywords-categories.svg",alt:"Java Keywords Organized by Categories",caption:"Visual categorization of all Java keywords - Access Modifiers, Data Types, Control Flow, Exception Handling, OOP, and more"}],subsections:[{title:"\u{1F511} 1. Access Modifiers \u2014 The Gatekeepers",content:`Control who can access your code:

Keyword   | Access Level          | Analogy
--------- | --------------------- | --------------------
public    | Everyone              | \u{1F30D} Public park - all welcome
private   | Same class only       | \u{1F512} Private room - owner only
protected | Package + subclasses  | \u{1F468}\u200D\u{1F469}\u200D\u{1F467} Family only
default   | Package only          | \u{1F3D8}\uFE0F Neighborhood access

\u{1F4A1} Example:
public class BankAccount {      // Everyone can see this class
    private double balance;     // Only this class can access
    protected void updateLog()  // This class + child classes
    void processRequest()       // Package-level access (default)
}`},{title:"\u{1F522} 2. Data Type Keywords \u2014 The Containers",content:`Define what type of data you're storing:

\u{1F4E6} Primitive Types:

Keyword | Type          | Size    | Example
------- | ------------- | ------- | --------
boolean | true/false    | 1 bit   | true
byte    | Small integer | 8 bit   | 127
short   | Integer       | 16 bit  | 32000
int     | Integer       | 32 bit  | 100000
long    | Large integer | 64 bit  | 9999999L
float   | Decimal       | 32 bit  | 3.14f
double  | Large decimal | 64 bit  | 3.14159
char    | Single char   | 16 bit  | 'A'

\u{1F3AF} Remember:
int age = 25;        // int is a keyword
boolean isValid = true;  // boolean is a keyword, true is a literal`},{title:"\u{1F3AE} 3. Control Flow Keywords \u2014 The Directors",content:`Control how your program flows:

\u{1F504} Decision Making:
\u2022 if - Check a condition
\u2022 else - Alternative path
\u2022 switch - Multiple choices
\u2022 case - Each choice in switch

\u{1F501} Loops:
\u2022 for - Count-based loop
\u2022 while - Condition-based loop
\u2022 do - Execute at least once

\u{1F6AA} Loop Control:
\u2022 break - Exit loop immediately
\u2022 continue - Skip to next iteration
\u2022 return - Exit method and return value

\u{1F4A1} Analogy:
Control flow = GPS navigation
\u2022 if/else = Choose route based on traffic
\u2022 for/while = Keep driving until destination
\u2022 break = Stop immediately
\u2022 continue = Skip this turn, go to next`},{title:"\u26A0\uFE0F 4. Exception Handling Keywords \u2014 The Safety Net",content:`Handle errors gracefully:

Keyword  | Purpose                    | Analogy
-------- | -------------------------- | ----------------------
try      | Attempt risky code         | \u{1F3AF} Try to catch the ball
catch    | Handle the error           | \u{1F932} Caught it!
finally  | Always execute             | \u{1F9F9} Clean up, no matter what
throw    | Manually create error      | \u26BE Throw the ball
throws   | Declare possible errors    | \u26A0\uFE0F Warning: might throw
assert   | Verify assumption          | \u2705 Make sure it's true

\u{1F4A1} Example:
try {
    int result = 10 / 0;  // Risky operation
} catch (ArithmeticException e) {
    System.out.println("Can't divide by zero!");
} finally {
    System.out.println("Cleanup code here");
}`},{title:"\u{1F3D7}\uFE0F 5. Object-Oriented Keywords \u2014 The Builders",content:`Build classes and objects:

Keyword    | Purpose                  | Example Use
---------- | ------------------------ | ------------------
class      | Define a class           | class Student { }
interface  | Define contract          | interface Payable
extends    | Inherit from class       | class Dog extends Animal
implements | Implement interface      | class Circle implements Shape
new        | Create object            | new Student()
this       | Current object           | this.name
super      | Parent class reference   | super.display()

\u{1F3AF} OOP in action:
class Animal {              // class keyword
    void sound() { }
}

class Dog extends Animal {  // extends keyword
    void sound() {
        super.sound();      // super keyword
        System.out.println("Bark!");
    }
}

Dog myDog = new Dog();      // new keyword`},{title:"\u{1F3AD} 6. Modifier Keywords \u2014 The Attributes",content:`Add special properties to classes, methods, variables:

Keyword      | Meaning                       | Use Case
------------ | ----------------------------- | ------------------
static       | Belongs to class, not object  | static int count
final        | Cannot be changed             | final double PI = 3.14
abstract     | Incomplete, must be inherited | abstract class Shape
synchronized | Thread-safe                   | synchronized method
volatile     | Shared across threads         | volatile boolean flag
transient    | Don't serialize               | transient String temp
native       | Implemented in native code    | native void display()
strictfp     | Strict floating-point         | strictfp class Math

\u{1F4A1} Common uses:
static final double PI = 3.14159;  // Class constant
abstract class Animal { }           // Cannot create object
synchronized void update() { }      // Thread-safe method`},{title:"\u{1F4E6} 7. Package & Import Keywords",content:`Organize code into namespaces:

package com.myapp.util;    // Declare package

import java.util.Scanner;  // Import specific class
import java.util.*;        // Import all from package

\u{1F3D8}\uFE0F Analogy:
\u2022 package = Your neighborhood address
\u2022 import = Borrowing tools from neighbor

Without import:
java.util.Scanner sc = new java.util.Scanner(System.in);  // Too long!

With import:
import java.util.Scanner;
Scanner sc = new Scanner(System.in);  // Clean! \u2705`},{title:"\u{1F6AB} 8. Reserved But Not Used",content:`Two keywords are reserved but not currently used:

\u2022 goto - Reserved (but don't use it!)
  Why? Makes code hard to follow
  Java doesn't allow it intentionally

\u2022 const - Reserved (use 'final' instead)
  Why? 'final' is the Java way
  'const' kept for future use

\u{1F604} Fun fact:
Java reserved 'goto' just to prevent you from using it!
It's like booking a seat and leaving it empty.
Message: 'We don't do that here!' \u{1F606}`}]},{title:"\u270F\uFE0F Identifiers \u2014 The Names You Create",content:"Identifiers are names you give to variables, classes, methods, packages, etc. Think of them as name tags for everything in your program!",images:[{url:"assets/images/identifiers-overview.svg",alt:"Java Identifiers and Naming Rules",caption:"Complete guide to Java identifiers - what they are, naming rules, valid examples, invalid examples, and best practices"}],subsections:[{title:"\u{1F9E0} What Are Identifiers?",content:`Identifiers are programmer-defined names for:

\u270F\uFE0F Variables:
int studentAge;      // 'studentAge' is an identifier
String userName;     // 'userName' is an identifier

\u{1F3F7}\uFE0F Classes:
class BankAccount    // 'BankAccount' is an identifier
class Student        // 'Student' is an identifier

\u2699\uFE0F Methods:
void calculateTotal() // 'calculateTotal' is an identifier
int getAge()         // 'getAge' is an identifier

\u{1F4E6} Packages:
com.example.myapp    // All parts are identifiers

\u{1F3AF} Key Point:
Identifier = Any name you create in Java
Keyword = Reserved name created by Java

You control identifiers, Java controls keywords!`},{title:"\u{1F4DD} Naming Rules \u2014 The Must-Follow Laws",content:`Java has strict rules for identifiers. Break them = Compilation error!

\u2705 MUST Rules:

1\uFE0F\u20E3 Start with:
   \u2022 Letter (A-Z, a-z)
   \u2022 Underscore (_)
   \u2022 Dollar sign ($)
   \u274C NOT with a digit!

2\uFE0F\u20E3 After first character, can contain:
   \u2022 Letters (A-Z, a-z)
   \u2022 Digits (0-9)
   \u2022 Underscore (_)
   \u2022 Dollar sign ($)

3\uFE0F\u20E3 Case-sensitive:
   \u2022 age \u2260 Age \u2260 AGE
   \u2022 All three are different!

4\uFE0F\u20E3 Cannot be a keyword:
   \u2022 \u274C int class = 5;
   \u2022 \u2705 int myClass = 5;

5\uFE0F\u20E3 No length limit:
   \u2022 But keep it reasonable!
   \u2022 thisIsAReallyReallyLongVariableName \u2705 (valid but annoying)

6\uFE0F\u20E3 No spaces allowed:
   \u2022 \u274C student age
   \u2022 \u2705 studentAge or student_age`},{title:"\u2705 Valid Identifiers \u2014 The Good Examples",content:`Let's see what works:

Valid Identifier      | Why It Works
--------------------- | ---------------------------
studentName           | Starts with letter \u2705
_tempValue            | Starts with underscore \u2705
$price                | Starts with dollar sign \u2705
age2                  | Letter + digit \u2705
my_variable           | Letters + underscore \u2705
TOTAL_COUNT           | All caps, underscore \u2705
calculateGrade        | camelCase \u2705
BankAccount           | PascalCase \u2705
___test               | Multiple underscores \u2705
$$$money              | Multiple dollar signs \u2705
a                     | Single letter \u2705

\u{1F4A1} All follow the rules:
\u2022 Start with letter/underscore/dollar
\u2022 No keywords used
\u2022 No spaces`},{title:"\u274C Invalid Identifiers \u2014 The Bad Examples",content:`Learn from mistakes:

Invalid Identifier | Why It Fails                    | Fix
------------------ | ------------------------------- | ----------------
2students          | Starts with digit \u274C            | students2
student-name       | Hyphen not allowed \u274C           | studentName
my variable        | Space not allowed \u274C            | myVariable
class              | Keyword \u274C                      | myClass
student@home       | @ not allowed \u274C                | studentAtHome
#count             | # not allowed \u274C                | count
first name         | Space \u274C                        | firstName
int                | Keyword \u274C                      | myInt
switch             | Keyword \u274C                      | switchValue
123test            | Starts with digit \u274C            | test123

\u{1F604} Common beginner mistakes:
'Why can't I name my variable "class"?' - Because Java already owns it!
'Why no spaces?' - Java gets confused: 'Is it one name or two?'`}],codeExamples:[{title:"Valid vs Invalid Identifiers Demo",description:"Examples showing what works and what doesn't",code:`public class IdentifierDemo {
    // \u2705 VALID identifiers
    int studentAge = 20;
    String firstName = "John";
    double _accountBalance = 1000.50;
    int $price = 99;
    boolean isValid = true;
    final int MAX_SIZE = 100;
    String userName123 = "johndoe";
    
    // \u274C INVALID identifiers (will cause compilation errors)
    // int 2students = 10;        // Starts with digit
    // String first-name = "John"; // Hyphen not allowed
    // int class = 5;              // Keyword
    // double my balance = 100;    // Space not allowed
    // String @username = "test";  // @ not allowed
    
    // \u2705 Case sensitivity demonstration
    int age = 25;
    int Age = 30;      // Different from 'age'
    int AGE = 35;      // Different from both above
    
    public static void main(String[] args) {
        IdentifierDemo demo = new IdentifierDemo();
        System.out.println("Age (lowercase): " + demo.age);
        System.out.println("Age (capitalized): " + demo.Age);
        System.out.println("AGE (uppercase): " + demo.AGE);
        // All three are different variables!
    }
}`,language:"java"}]},{title:"\u{1F3A8} Naming Conventions \u2014 The Best Practices",content:"Rules tell you what you CAN do. Conventions tell you what you SHOULD do. Following conventions makes your code professional and readable!",images:[{url:"assets/images/naming-conventions.svg",alt:"Java Naming Conventions Guide",caption:"Visual guide to Java naming conventions - camelCase for variables and methods, PascalCase for classes, UPPER_SNAKE_CASE for constants"}],subsections:[{title:"\u{1F4CB} Convention Categories",content:`Type              | Convention          | Example
----------------- | ------------------- | --------------------
Variables         | camelCase           | studentAge, userName
Methods           | camelCase           | calculateTotal(), getName()
Classes           | PascalCase          | BankAccount, StudentInfo
Interfaces        | PascalCase          | Runnable, Comparable
Constants         | UPPER_SNAKE_CASE    | MAX_SIZE, PI_VALUE
Packages          | lowercase           | com.example.myapp
Enum constants    | UPPER_SNAKE_CASE    | MONDAY, JANUARY

\u{1F4A1} These aren't rules enforced by compiler, but:
\u2022 Other programmers expect them
\u2022 Makes code readable
\u2022 Industry standard`},{title:"\u{1F42B} camelCase \u2014 For Variables & Methods",content:`First word lowercase, subsequent words capitalized:

\u2705 Good Examples:
studentAge
userName
isValid
totalAmount
calculateGrade()
getStudentDetails()

\u274C Bad (but valid):
StudentAge        // Should start lowercase
student_age       // Use camelCase, not snake_case
studentage        // Hard to read

\u{1F42B} Why called 'camelCase'?
Because it has humps like a camel!
studentAge \u2192 'A' is a hump
            \u{1F446}

\u{1F4A1} Makes code readable:
studentAge \u2705 vs studentage \u274C
Which is easier to read? Obviously the first one!`},{title:"\u{1F3A9} PascalCase \u2014 For Classes & Interfaces",content:`First letter of EVERY word capitalized:

\u2705 Good Examples:
BankAccount
StudentInfo
FileReader
DatabaseConnection
PaymentProcessor

\u274C Bad (but valid):
bankAccount       // Should start with capital
BANKACCOUNT       // Too much caps
bank_account      // Use PascalCase

\u{1F3A9} Why PascalCase for classes?
Classes are important - they deserve capital letters!
It's like writing someone's full name with capitals.

\u{1F4A1} Instant recognition:
BankAccount \u2192 'Oh, this is a class!'
bankAccount \u2192 'Oh, this is a variable!'`},{title:"\u{1F4E2} UPPER_SNAKE_CASE \u2014 For Constants",content:`All capitals with underscores:

\u2705 Good Examples:
MAX_SIZE
PI_VALUE
DEFAULT_TIMEOUT
MIN_AGE
DATABASE_URL

\u274C Bad (but valid):
MaxSize           // Should be all caps
max_size          // Should be caps
MAXSIZE           // Hard to read without underscore

\u{1F4E2} Why shout for constants?
Constants are IMPORTANT and NEVER CHANGE!
It's like shouting: 'HEY! DON'T CHANGE ME!' \u{1F604}

\u{1F4A1} Example:
final int MAX_STUDENTS = 100;  // Clearly a constant
int maxStudents = 100;          // Looks like a variable`},{title:"\u{1F4E6} lowercase \u2014 For Packages",content:`All lowercase, dots separate levels:

\u2705 Good Examples:
com.example.myapp
org.company.project.utils
java.util
javax.swing

\u274C Bad (but valid):
com.Example.MyApp    // Don't capitalize
Com.Example.MyApp    // All lowercase

\u{1F4E6} Why all lowercase?
Packages are like folders - simple and unassuming
Avoid conflicts across different OS (Windows vs Linux)

\u{1F4A1} Standard pattern:
com.companyname.projectname.module
org.apache.commons.lang`},{title:"\u{1F3AF} Meaningful Names \u2014 The Golden Rule",content:`Beyond syntax, make names meaningful!

\u274C Bad (but valid):
int a = 25;
String s = "John";
void m() { }
class C { }

\u2705 Good:
int studentAge = 25;
String studentName = "John";
void calculateGrade() { }
class StudentRecord { }

\u{1F4A1} Why meaningful names matter:

Bad code:
int x = a + b;
if (x > 100) {
    m();
}

Good code:
int totalMarks = mathMarks + scienceMarks;
if (totalMarks > 100) {
    displayErrorMessage();
}

Which one is easier to understand? \u{1F914}

\u{1F3AF} Rule of thumb:
Your code should read like English!
Not like secret spy code! \u{1F604}`},{title:"\u{1F6AB} What to Avoid",content:`\u274C Single letter names (except loop counters):
int a; // What is 'a'?
for (int i = 0; i < 10; i++) { } // OK for loop

\u274C Abbreviations that aren't obvious:
int stdAge; // std = student or standard?
String usrNm; // Just write userName!

\u274C Misleading names:
int count = 0;
count = studentAge; // Now 'count' isn't counting anything!

\u274C Too long names:
int thisIsAVeryLongVariableNameThatDescribesStudentAgeInYears;
// Just use: int studentAge;

\u274C Funny names (in professional code):
int potatoCounter; // Fun for learning, not for production
boolean isProgrammerTired; // Keep it professional \u{1F604}

\u2705 Keep it:
\u2022 Clear
\u2022 Concise
\u2022 Meaningful
\u2022 Professional`}],codeExamples:[{title:"Naming Conventions in Action",description:"Professional code following all conventions",code:`package com.studentmanagement.system;  // lowercase package

import java.util.ArrayList;
import java.util.List;

// PascalCase for class
public class StudentGradeManager {
    
    // UPPER_SNAKE_CASE for constants
    private static final int MAX_STUDENTS = 100;
    private static final double PASSING_GRADE = 60.0;
    private static final String DEFAULT_GRADE = "F";
    
    // camelCase for variables
    private String studentName;
    private int studentAge;
    private double totalMarks;
    private List<Double> subjectMarks;
    
    // PascalCase for constructor (matches class name)
    public StudentGradeManager(String studentName, int studentAge) {
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.subjectMarks = new ArrayList<>();
    }
    
    // camelCase for methods
    public void addSubjectMarks(double marks) {
        if (marks >= 0 && marks <= 100) {
            subjectMarks.add(marks);
        }
    }
    
    public double calculateAverageMarks() {
        if (subjectMarks.isEmpty()) {
            return 0.0;
        }
        
        double sum = 0;
        // 'i' is OK for loop counter
        for (int i = 0; i < subjectMarks.size(); i++) {
            sum += subjectMarks.get(i);
        }
        
        return sum / subjectMarks.size();
    }
    
    public String determineGrade() {
        double average = calculateAverageMarks();
        
        if (average >= 90) return "A";
        else if (average >= 80) return "B";
        else if (average >= 70) return "C";
        else if (average >= PASSING_GRADE) return "D";
        else return DEFAULT_GRADE;
    }
    
    public void displayStudentInfo() {
        System.out.println("Student Name: " + studentName);
        System.out.println("Age: " + studentAge);
        System.out.println("Average Marks: " + calculateAverageMarks());
        System.out.println("Grade: " + determineGrade());
    }
}`,language:"java"}]},{title:"\u{1F393} Common Mistakes & How to Avoid Them",content:"Learn from these common pitfalls that trip up beginners!",subsections:[{title:"\u274C Mistake #1: Using Keywords as Identifiers",content:`Wrong:
int class = 10;           // Error: 'class' is keyword
String public = "test";   // Error: 'public' is keyword
boolean static = true;    // Error: 'static' is keyword

Correct:
int classNumber = 10;     // \u2705
String publicMessage = "test";  // \u2705
boolean isStatic = true;  // \u2705

\u{1F4A1} Tip: IDE will highlight keywords in different color. If your variable name is highlighted, change it!`},{title:"\u274C Mistake #2: Starting with a Digit",content:`Wrong:
int 1stPlace = 1;         // Error: Starts with digit
String 2ndName = "John";  // Error: Starts with digit

Correct:
int firstPlace = 1;       // \u2705
String secondName = "John"; // \u2705
int place1st = 1;         // \u2705 (digit after start is OK)

\u{1F4A1} Remember: Identifiers can CONTAIN digits, but can't START with them!`},{title:"\u274C Mistake #3: Using Special Characters",content:`Wrong:
int student-age = 20;     // Error: Hyphen not allowed
String user@name = "test"; // Error: @ not allowed
boolean is#valid = true;  // Error: # not allowed

Correct:
int student_age = 20;     // \u2705 Underscore OK
int studentAge = 20;      // \u2705 Better: camelCase
String userName = "test"; // \u2705
boolean isValid = true;   // \u2705

\u{1F4A1} Only _ and $ are allowed (besides letters and digits)!`},{title:"\u274C Mistake #4: Forgetting Case Sensitivity",content:`Common confusion:
int age = 25;
System.out.println(Age);  // Error: 'Age' not defined
// Java: 'age' and 'Age' are DIFFERENT!'

String name = "John";
System.out.println(NAME); // Error: 'NAME' not defined
// Java: 'name' and 'NAME' are DIFFERENT!'

Correct:
int age = 25;
System.out.println(age);  // \u2705 Exact match

\u{1F4A1} Java is case-sensitive. ALWAYS match case exactly!`},{title:"\u274C Mistake #5: Spaces in Names",content:`Wrong:
int student age = 20;         // Error: Space
String first name = "John";   // Error: Space
void calculate total() { }    // Error: Space

Correct:
int studentAge = 20;          // \u2705 camelCase
int student_age = 20;         // \u2705 snake_case (valid but not conventional)
String firstName = "John";    // \u2705
void calculateTotal() { }     // \u2705

\u{1F4A1} No spaces allowed! Use camelCase or underscores instead.`},{title:"\u{1F4A1} Pro Tips to Remember",content:`1\uFE0F\u20E3 When in doubt, follow conventions:
   \u2022 Variables/Methods \u2192 camelCase
   \u2022 Classes \u2192 PascalCase
   \u2022 Constants \u2192 UPPER_SNAKE_CASE

2\uFE0F\u20E3 Make names meaningful:
   int x; \u274C vs int studentAge; \u2705

3\uFE0F\u20E3 Keep it readable:
   int sdage; \u274C vs int studentAge; \u2705

4\uFE0F\u20E3 Don't overthink:
   Too long: int thisVariableHoldsTheAgeOfStudent;
   Just right: int studentAge;

5\uFE0F\u20E3 Be consistent:
   Don't mix styles in same project
   If you use camelCase, stick with it!

6\uFE0F\u20E3 Use IDE autocomplete:
   Type few letters, let IDE suggest
   Reduces typos and maintains consistency`}]},{title:"\u{1F50D} Keywords vs Identifiers: Side-by-Side Comparison",content:"Let's put everything together in a clear comparison table.",subsections:[{title:"\u{1F4CA} The Complete Comparison",content:`Aspect          | Keywords                    | Identifiers
--------------- | --------------------------- | ---------------------------
Definition      | Reserved words by Java      | Names created by programmer
Purpose         | Control program structure   | Name variables, classes, etc.
Example         | if, class, int, public      | studentAge, BankAccount
Case            | All lowercase (mostly)      | Case-sensitive
Can change?     | No (fixed by Java)          | Yes (you decide)
Count           | 51 keywords                 | Unlimited
Rules           | Can't use as identifiers    | Must follow naming rules
Conventions     | N/A (predefined)            | camelCase, PascalCase, etc.

\u{1F4A1} Think of it:
Keywords = Traffic signs (universal, can't change)
Identifiers = Your car's license plate (you choose, within rules)`}],codeExamples:[{title:"Keywords vs Identifiers in Code",description:"See the difference in actual code",code:`// Let's mark: [K] = Keyword, [I] = Identifier

public class StudentManager {     // [K]public [K]class [I]StudentManager
    private int studentCount;      // [K]private [K]int [I]studentCount
    private static final int MAX = 100;  // [K]private [K]static [K]final [K]int [I]MAX
    
    public StudentManager() {      // [K]public [I]StudentManager
        this.studentCount = 0;     // [K]this [I]studentCount
    }
    
    public void addStudent(String name) {  // [K]public [K]void [I]addStudent [I]name
        if (studentCount < MAX) {  // [K]if [I]studentCount [I]MAX
            studentCount++;        // [I]studentCount
            System.out.println("Added: " + name);
        } else {                   // [K]else
            System.out.println("Cannot add more students");
        }
    }
    
    public static void main(String[] args) {  // [K]public [K]static [K]void [I]main [I]args
        StudentManager manager = new StudentManager();  // [I]manager [K]new
        manager.addStudent("Alice");  // [I]manager [I]addStudent
    }
}

// Count:
// Keywords: public, class, private, int, static, final, this, void, if, else, new
// Identifiers: StudentManager, studentCount, MAX, addStudent, name, manager, main, args`,language:"java"}]},{title:"\u{1F3C1} Final Thoughts & Summary",content:"Let's wrap up everything you've learned about keywords and identifiers!",subsections:[{title:"\u{1F3AF} Key Takeaways",content:`1\uFE0F\u20E3 Keywords are Java's VIP words
   \u2022 Reserved by Java
   \u2022 51 total keywords
   \u2022 Cannot use as identifiers
   \u2022 All lowercase (mostly)

2\uFE0F\u20E3 Identifiers are names you create
   \u2022 For variables, classes, methods, etc.
   \u2022 Must follow strict rules
   \u2022 Should follow conventions
   \u2022 Make them meaningful!

3\uFE0F\u20E3 Remember the rules:
   \u2705 Start with: letter, _, or $
   \u2705 Can contain: letters, digits, _, $
   \u274C Can't start with: digit
   \u274C Can't be: keyword
   \u274C Can't have: spaces or special chars

4\uFE0F\u20E3 Follow conventions:
   \u2022 Variables/Methods \u2192 camelCase
   \u2022 Classes \u2192 PascalCase
   \u2022 Constants \u2192 UPPER_SNAKE_CASE
   \u2022 Packages \u2192 lowercase

5\uFE0F\u20E3 Be professional:
   \u2022 Clear names
   \u2022 Meaningful names
   \u2022 Consistent style
   \u2022 Readable code`},{title:"\u{1F4A1} Remember",content:`Keywords and identifiers are like:

\u{1F3AB} Keywords = Reserved seats in a theater
   You can't sit there, they're taken by Java!

\u270F\uFE0F Identifiers = Name tags you create
   You design them, but follow the dress code!

Master these basics, and you'll:
\u2022 Write cleaner code
\u2022 Avoid compilation errors
\u2022 Look like a professional
\u2022 Make your code readable
\u2022 Ace your interviews! \u{1F393}

Now go forth and name things wisely! \u{1F680}`}]}],keyPoints:["Keywords are 51 reserved words in Java with predefined meanings and cannot be used as identifiers","Identifiers are programmer-defined names for variables, classes, methods, and other elements","Keywords are always lowercase (except true, false, null which are literals, not keywords)","Identifiers must start with a letter, underscore (_), or dollar sign ($) - never a digit","After the first character, identifiers can contain letters, digits, underscores, and dollar signs","Java is case-sensitive: age, Age, and AGE are three different identifiers","Keywords cannot be used as identifiers (e.g., int class = 5; is invalid)","Naming conventions: camelCase for variables/methods, PascalCase for classes, UPPER_SNAKE_CASE for constants","Identifiers cannot contain spaces or special characters (except _ and $)","Make identifier names meaningful and descriptive for better code readability","Follow Java naming conventions even though they're not enforced by the compiler","Keywords are organized into categories: access modifiers, data types, control flow, exception handling, OOP, and more","Reserved keywords goto and const are not used in Java but cannot be used as identifiers","Constants should be declared as 'static final' and named in UPPER_SNAKE_CASE","Package names should be all lowercase to avoid conflicts across operating systems","Choose professional, clear names over funny or cryptic abbreviations in production code"],references:["Oracle Java Documentation - Java Language Keywords","Java Language Specification (JLS) - Chapter 3: Lexical Structure","Oracle Java Tutorials - Variables and Naming Conventions","Effective Java by Joshua Bloch - Item 68: Adhere to generally accepted naming conventions","Java Code Conventions by Oracle - Naming Conventions","Clean Code by Robert C. Martin - Chapter 2: Meaningful Names","Java: The Complete Reference by Herbert Schildt - Chapter 2: Keywords and Identifiers","Head First Java - Naming Variables and Methods"],interviewQA:[{question:"What are keywords in Java? Give examples.",answer:"Keywords are reserved words in Java that have predefined meanings and purposes. They cannot be used as identifiers. Examples: public, private, class, if, else, int, void, static, final. Java has 51 keywords in total.",difficulty:"easy",tags:["keywords","basics","syntax"]},{question:"What are identifiers in Java?",answer:"Identifiers are programmer-defined names given to variables, classes, methods, packages, and other program elements. Examples: studentAge, BankAccount, calculateTotal(). They must follow specific naming rules and conventions.",difficulty:"easy",tags:["identifiers","naming","basics"]},{question:"What are the rules for naming identifiers in Java?",answer:"Rules: 1) Must start with letter, underscore (_), or dollar ($). 2) After first character, can contain letters, digits, _, $. 3) Cannot be a keyword. 4) Case-sensitive. 5) No spaces allowed. 6) Cannot start with digit. Examples: studentAge \u2705, 2students \u274C, class \u274C",difficulty:"medium",tags:["identifiers","naming-rules","syntax"]},{question:"Can we use keywords as identifiers? Why or why not?",answer:"No, we cannot use keywords as identifiers because they are reserved by Java with predefined meanings. If we use 'class' or 'if' as variable names, the compiler gets confused and throws an error. Example: int class = 5; // Error",difficulty:"easy",tags:["keywords","identifiers","rules"]},{question:"What is the difference between keywords and identifiers?",answer:"Keywords are reserved words predefined by Java (e.g., if, class, public) with special meanings. Identifiers are names created by programmers (e.g., studentAge, BankAccount). Keywords cannot be used as identifiers, are all lowercase, and have fixed meanings.",difficulty:"medium",tags:["keywords","identifiers","comparison"]},{question:"Explain Java naming conventions for different elements.",answer:"1) Variables/Methods: camelCase (studentAge, calculateTotal). 2) Classes/Interfaces: PascalCase (BankAccount, Runnable). 3) Constants: UPPER_SNAKE_CASE (MAX_SIZE, PI_VALUE). 4) Packages: lowercase (com.example.myapp). These are conventions, not compiler rules.",difficulty:"medium",tags:["naming-conventions","best-practices","code-style"]},{question:"Which of these are valid identifiers: studentAge, 2students, student_age, student-age, class?",answer:"Valid: studentAge \u2705 (starts with letter), student_age \u2705 (underscore allowed). Invalid: 2students \u274C (starts with digit), student-age \u274C (hyphen not allowed), class \u274C (keyword). Explanation: Must start with letter/underscore/dollar, no hyphens, no keywords.",difficulty:"medium",tags:["identifiers","validation","examples"]},{question:"Is Java case-sensitive? Give examples with identifiers.",answer:"Yes, Java is case-sensitive. Variables 'age', 'Age', and 'AGE' are three completely different identifiers. Same applies to keywords: 'public' is a keyword but 'Public' or 'PUBLIC' are valid identifiers. This is why following naming conventions is important.",difficulty:"easy",tags:["case-sensitivity","identifiers","syntax"]},{question:"How many keywords are there in Java? Name some categories.",answer:"Java has 51 keywords. Categories: 1) Access modifiers (public, private, protected). 2) Data types (int, boolean, char). 3) Control flow (if, else, while, for). 4) Exception handling (try, catch, finally). 5) OOP (class, interface, extends). 6) Modifiers (static, final, abstract).",difficulty:"medium",tags:["keywords","categories","count"]},{question:"Can identifiers start with a digit? Why or why not?",answer:"No, identifiers cannot start with a digit. They must start with a letter, underscore (_), or dollar sign ($). Example: 2students \u274C (invalid), students2 \u2705 (valid). This rule helps the compiler distinguish between identifiers and numeric literals.",difficulty:"easy",tags:["identifiers","rules","syntax"]},{question:"What are reserved keywords 'goto' and 'const' in Java?",answer:"goto and const are reserved keywords in Java but not currently used. They're reserved to prevent programmers from using them and to keep them available for potential future use. Use 'final' instead of 'const'. Java intentionally doesn't support goto to promote structured programming.",difficulty:"hard",tags:["keywords","reserved","advanced"]},{question:"Why should we follow naming conventions even though they're not enforced?",answer:"Naming conventions improve: 1) Code readability - others understand your code. 2) Maintainability - easier to modify later. 3) Professionalism - shows you follow standards. 4) Team collaboration - consistent style across team. 5) Industry standard - recognized by all Java developers worldwide.",difficulty:"medium",tags:["naming-conventions","best-practices","professional"]}]};var Dy={name:"What is IoC and Why Spring Uses It",overview:"\u{1F3AD} Welcome to the World of Inversion of Control! Imagine you're throwing a party. In the traditional approach, you'd do EVERYTHING yourself - buy groceries, cook food, serve drinks, manage music, clean up... exhausting, right? Now imagine hiring a party planner who handles all of that while you just enjoy being the host. That's essentially what Inversion of Control (IoC) does in the Spring Framework! IoC is the secret sauce that makes Spring powerful, flexible, and your code maintainable. It's not just a design pattern - it's a paradigm shift in how you think about building applications. Let's dive into this game-changing concept with some fun analogies and real examples! \u{1F680}",sections:[{title:"\u{1F914} What is Inversion of Control (IoC)?",content:`Inversion of Control is a design principle where the control of object creation and dependency management is inverted from your code to a framework or container.

The Traditional Way (You're in Control): You create objects, manage their lifecycle, and wire dependencies manually.

The IoC Way (Framework is in Control): The framework creates objects, manages their lifecycle, and injects dependencies for you.

\u{1F354} The Restaurant Analogy:

Without IoC (Cooking at Home):
\u2022 You decide what to eat
\u2022 You buy ingredients
\u2022 You cook the meal
\u2022 You manage all dependencies (utensils, stove, ingredients)
\u2022 You clean up

With IoC (Ordering at a Restaurant):
\u2022 You just tell the waiter what you want (declare dependencies)
\u2022 The kitchen (Spring Container) prepares everything
\u2022 The waiter (Spring) serves you the ready meal (injects dependencies)
\u2022 You just enjoy the food (focus on business logic)
\u2022 The restaurant manages everything behind the scenes!

\u{1F389} Result: You went from being a stressed chef to a relaxed diner!

Definition: IoC is a principle where the framework takes control of the flow of a program and calls into the code you write, rather than your code being in control and calling into framework libraries. In Spring, this means the IoC Container manages object creation, lifecycle, and dependency injection.`,subsections:[{title:"Traditional Control Flow",content:`In traditional programming, your code is in charge:
\u2022 You use the 'new' keyword to create objects
\u2022 You manually manage object lifecycles
\u2022 You wire dependencies yourself
\u2022 You control when objects are created and destroyed

This leads to tight coupling and maintenance nightmares!`},{title:"Inverted Control Flow",content:`With IoC, the framework is in charge:
\u2022 The container creates objects for you
\u2022 The container manages lifecycles automatically
\u2022 Dependencies are injected by the framework
\u2022 You just declare what you need, Spring provides it

This leads to loose coupling and maintainable code!`}]},{title:"\u{1F6AB} The Problem: Traditional Approach (Tightly Coupled Code)",content:"Let's see what happens when YOU are in control of everything. Here's a classic example of tightly coupled code that creates maintenance nightmares.",subsections:[{title:"\u{1F631} What's Wrong with This Code?",content:`\u274C Hard Dependency: UserService is MARRIED to MySQLUserRepository. Want to switch to PostgreSQL? Too bad, you'll need a divorce (code rewrite)!

\u274C Impossible to Test: How do you test UserService without hitting the actual database? You can't inject a mock repository!

\u274C No Flexibility: Want to use a different repository in production vs development? Prepare to create multiple versions of UserService.

\u274C Violates DRY: Every class that needs a UserRepository has to create its own instance. Copy-paste nightmare!

\u274C Lifecycle Chaos: Who manages the repository lifecycle? What if it needs initialization or cleanup? Your code becomes a mess!

This is like being a control freak who insists on making their own furniture, growing their own vegetables, and building their own smartphone. Technically possible, but... why? \u{1F605}`,table:{headers:["Aspect","Traditional (You Control)","IoC (Framework Controls)"],rows:[["Object Creation","You use `new` keyword everywhere","Container creates objects for you"],["Dependency Management","You manually wire dependencies","Container injects dependencies automatically"],["Coupling","Tight coupling (hard-coded dependencies)","Loose coupling (depends on abstractions)"],["Testing","Hard to test (can't mock dependencies)","Easy to test (inject mocks)"],["Flexibility","Change = rewrite code","Change = update configuration"],["Lifecycle Management","You manage init/destroy manually","Container manages entire lifecycle"],["Code Focus","Infrastructure + business logic","Only business logic"],["Maintainability","Nightmare for large apps","Scales beautifully"]]}}],codeExamples:[{title:"\u274C Tightly Coupled Code - The Nightmare",description:"UserService is tightly coupled to MySQLUserRepository, creating maintenance and testing nightmares.",code:`// UserService is tightly coupled to MySQLUserRepository
public class UserService {
    private MySQLUserRepository userRepository;
    
    public UserService() {
        // UserService is creating its own dependency
        // This is TIGHT COUPLING!
        this.userRepository = new MySQLUserRepository();
    }
    
    public User findUser(Long id) {
        return userRepository.findById(id);
    }
}

// In your application
public class Application {
    public static void main(String[] args) {
        UserService service = new UserService();
        User user = service.findUser(1L);
    }
}`,language:"java"}]},{title:"\u2728 How IoC Solves These Problems",content:"Now let's rewrite the same code using IoC principles. Notice how UserService no longer creates its dependencies - it simply declares what it needs, and Spring provides it!",subsections:[{title:"\u{1F389} What Changed?",content:`\u2705 UserService doesn't create UserRepository: Someone else (Spring Container) creates it and hands it over. UserService just says 'I need a UserRepository' and Spring delivers!

\u2705 Depends on Interface, not Implementation: UserService doesn't care if it's MySQL, PostgreSQL, or MongoUserRepository. It just needs something that implements UserRepository.

\u2705 Easy to Test: Just pass a mock repository during testing. No database required!

\u2705 Easy to Switch Implementations: Change configuration, not code. MySQL today, PostgreSQL tomorrow!

\u{1F50C} The Power Socket Analogy:

Your laptop doesn't care whether electricity comes from solar panels, a power plant, or a generator. It just needs a standard socket (interface). The power company (Spring Container) handles the details.

Similarly:
\u2022 UserService = Your laptop
\u2022 UserRepository Interface = Standard power socket
\u2022 MySQLUserRepository = Solar power
\u2022 PostgreSQLUserRepository = Power plant
\u2022 Spring Container = The power company managing everything

You just plug in and work! \u26A1`}],codeExamples:[{title:"\u2705 Loosely Coupled Code with IoC",description:"Using IoC principles, UserService depends on abstractions and Spring handles dependency injection.",code:`// Step 1: Depend on abstraction, not concrete implementation
public interface UserRepository {
    User findById(Long id);
}

// Step 2: UserService no longer creates its dependency
public class UserService {
    private UserRepository userRepository;
    
    // Constructor Injection - Spring will provide the dependency
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public User findUser(Long id) {
        return userRepository.findById(id);
    }
}

// Implementations (Spring will manage these)
@Repository
public class MySQLUserRepository implements UserRepository {
    @Override
    public User findById(Long id) {
        // MySQL implementation
        return null;
    }
}

@Repository
public class PostgreSQLUserRepository implements UserRepository {
    @Override
    public User findById(Long id) {
        // PostgreSQL implementation
        return null;
    }
}`,language:"java"}]},{title:"\u{1F3D7}\uFE0F How Spring Implements IoC",content:"Spring implements IoC through a magical component called the IoC Container (also called the Spring Container). Think of it as your personal assistant who manages all your objects.",subsections:[{title:"IoC vs DI: What's the Difference?",content:`Many developers confuse IoC and DI - but they're NOT the same thing!

IoC (Inversion of Control):
\u2022 The PRINCIPLE or IDEA
\u2022 A design pattern concept
\u2022 Answers: WHAT is being achieved?

DI (Dependency Injection):
\u2022 The MECHANISM or IMPLEMENTATION
\u2022 How IoC is actually done
\u2022 Answers: HOW is it achieved?

Think of it this way:
\u2022 IoC = The goal (loose coupling)
\u2022 DI = The tool to achieve it (constructor/setter/field injection)

Memory Trick:
\u2022 IoC = idea
\u2022 DI = how Spring does it

Interview One-Liner: DI is one way to achieve IoC. IoC is the principle, DI is the mechanism Spring uses to implement it.`},{title:"1\uFE0F\u20E3 The IoC Container (Spring's Heart)",content:`The IoC Container is responsible for:
\u2022 Creating objects (called Beans in Spring)
\u2022 Wiring dependencies (Dependency Injection)
\u2022 Managing lifecycles (initialization, destruction)
\u2022 Configuration management

Think of the IoC Container as your personal assistant who remembers:
\u2022 Who needs what
\u2022 When to create it
\u2022 When to destroy it
\u2022 How to wire everything together

Spring provides two main containers:

BeanFactory: Basic container with lazy loading. Like a small convenience store - gets items only when you ask. Rarely used directly (too basic for modern apps).

ApplicationContext: Advanced container with eager loading, event propagation, AOP support, and more. Like a full-service supermarket - everything ready when you arrive! This is what you actually use (99.9% of the time).

Final Thought: IoC Container says 'Relax, I've got this. Stop micro-managing. Focus on business logic - I'll handle the plumbing!'`},{title:"2\uFE0F\u20E3 Beans - The Managed Objects",content:`A Bean is simply an object that is created, managed, and wired by the Spring IoC Container. Think of beans as VIP objects - they get special treatment from Spring!

How to Create Beans:

Method 1: Using @Component (and its specializations)
\u2022 @Component - Generic bean
\u2022 @Service - Business logic beans
\u2022 @Repository - Data access beans
\u2022 @Controller - Web layer beans

Method 2: Using @Bean in Configuration
\u2022 For complex object creation
\u2022 For third-party library integration
\u2022 When you need full control

Method 3: XML Configuration (old-school, rarely used now)
\u2022 Legacy projects only
\u2022 Please don't use in new code!`},{title:"3\uFE0F\u20E3 Dependency Injection - The Magic Wand",content:`Dependency Injection (DI) is HOW Spring achieves IoC. It's the mechanism by which the container injects dependencies into your beans.

Three Types of Dependency Injection:

1. Constructor Injection (BEST PRACTICE \u2B50)
\u2022 Immutable objects (final fields)
\u2022 Mandatory dependencies clear
\u2022 Easy to test (no reflection needed)
\u2022 Fails fast if dependencies missing
\u2022 @Autowired is optional in modern Spring

2. Setter Injection (for optional dependencies)
\u2022 Good for optional dependencies
\u2022 Can be changed after creation
\u2022 Useful for circular dependencies (though you should avoid them)

3. Field Injection (easy but NOT recommended)
\u2022 Very concise and easy to write
\u2022 But... Cannot use final, hard to test, tight coupling to Spring
\u2022 Avoid in production code!

Interview Tip: Spring officially recommends constructor injection because it's safer, more testable, and makes mandatory dependencies explicit.`,table:{headers:["Type","How It Works","Best For","Recommendation"],rows:[["Constructor Injection","Dependencies via constructor parameters","Mandatory dependencies, immutable objects","ALWAYS USE (Best Practice)"],["Setter Injection","Dependencies via setter methods with @Autowired","Optional dependencies that can change","Use sparingly for optional deps"],["Field Injection","@Autowired directly on fields","Quick prototypes only","AVOID in production (hard to test)"]]}},{title:"4\uFE0F\u20E3 Bean Lifecycle Management",content:`Spring manages the entire lifecycle of beans - from birth to death. It's like having a royal butler for your objects!

High-Level Overview:
Think of bean lifecycle like hiring an employee:
1. Creation (hiring)
2. Dependency Injection (training)
3. Initialization (first day setup)
4. Usage (working)
5. Destruction (retirement party)

Complete Bean Lifecycle (Detailed):
1. Spring instantiates bean
2. Spring injects dependencies
3. Bean name and factory awareness (if implemented)
4. @PostConstruct / init-method called
5. Bean is ready to use!
6. ... (bean does its work) ...
7. Container shutdown triggered
8. @PreDestroy / destroy-method called
9. Bean is destroyed

Key Takeaway: Spring handles the entire lifecycle automatically - you just focus on business logic!`},{title:"5\uFE0F\u20E3 Configuration Styles",content:`Spring gives you multiple ways to configure beans:

Annotation-based (@Component, @Service, etc.):
\u2022 Modern, concise, type-safe
\u2022 Like texting - quick and convenient! \u{1F4F1}
\u2022 Use for your own classes

Java-based (@Configuration, @Bean):
\u2022 Full Java power, refactoring-friendly
\u2022 Like a phone call - more control! \u{1F4DE}
\u2022 Use for third-party libraries or complex bean creation

XML-based (<bean> tags):
\u2022 Old-school, verbose, external to code
\u2022 Like sending a letter - still works but... why? \u{1F4E7}
\u2022 Legacy projects only`}],codeExamples:[{title:"Creating the Spring Container",description:"Configuration class and container initialization showing how Spring creates and wires beans.",code:`// Configuration class tells Spring what beans to create
@Configuration
public class AppConfig {
    
    @Bean
    public UserRepository userRepository() {
        return new MySQLUserRepository();
    }
    
    @Bean
    public UserService userService(UserRepository userRepository) {
        // Spring automatically injects the dependency!
        return new UserService(userRepository);
    }
}

// Starting the container
public class Application {
    public static void main(String[] args) {
        // Create the IoC Container
        ApplicationContext context = 
            new AnnotationConfigApplicationContext(AppConfig.class);
        
        // Get beans from container (already created & wired!)
        UserService userService = context.getBean(UserService.class);
        
        // Just use it - Spring handled everything!
        User user = userService.findUser(1L);
    }
}`,language:"java"},{title:"Three Ways to Define Beans",description:"Demonstrating the three approaches to bean creation in Spring.",code:`// Method 1: Using @Component (and its specializations)
@Component  // Generic bean
public class EmailService { }

@Service    // Business logic beans
public class OrderService { }

@Repository // Data access beans
public class UserRepository { }

@Controller // Web layer beans
public class UserController { }

// Method 2: Using @Bean in Configuration
@Configuration
public class AppConfig {
    @Bean
    public DataSource dataSource() {
        // Complex object creation
        return new HikariDataSource();
    }
}

// Method 3: XML Configuration (old-school, rarely used now)
<!-- applicationContext.xml -->
<bean id="userService" class="com.example.UserService">
    <property name="userRepository" ref="userRepository"/>
</bean>`,language:"java"},{title:"Three Types of Dependency Injection",description:"Comparing Constructor, Setter, and Field injection with their pros and cons.",code:`public class UserService {
    
    private UserRepository userRepository;
    private EmailService emailService;
    private LoggingService loggingService;
    
    // 1. Constructor Injection (BEST PRACTICE \u2B50)
    @Autowired  // Optional in modern Spring
    public UserService(UserRepository userRepository, 
                      EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }
    
    // 2. Setter Injection (for optional dependencies)
    @Autowired
    public void setLoggingService(LoggingService loggingService) {
        this.loggingService = loggingService;
    }
    
    // 3. Field Injection (easy but not recommended)
    @Autowired
    private AuditService auditService;
}

// Why Constructor Injection is best:
// \u2705 Immutable objects (final fields)
// \u2705 Mandatory dependencies clear
// \u2705 Easy to test (no reflection needed)
// \u2705 Fails fast if dependencies missing`,language:"java"},{title:"Bean Lifecycle Hooks",description:"Using @PostConstruct and @PreDestroy to manage bean initialization and cleanup.",code:`@Component
public class DatabaseService {
    
    private Connection connection;
    
    // Called after dependency injection
    @PostConstruct
    public void init() {
        System.out.println("\u{1F3AC} Bean is born! Opening database connection...");
        connection = openConnection();
    }
    
    // Bean does its work here
    public void doWork() {
        System.out.println("\u{1F4BC} Bean is working hard!");
    }
    
    // Called before bean is destroyed
    @PreDestroy
    public void cleanup() {
        System.out.println("\u{1F44B} Bean is retiring! Closing connection...");
        connection.close();
    }
}`,language:"java"}]},{title:"\u{1F3AF} Why Spring Uses IoC - The Big Picture",content:"IoC isn't just a fancy design pattern - it solves real problems in software development. Let's explore the benefits that make IoC essential for modern applications.",subsections:[{title:"Benefits of IoC in Spring",content:`Loose Coupling: Classes depend on abstractions, not implementations. Real Impact: Change database? Just swap the bean!

Testability: Easy to inject mocks and stubs. Real Impact: Unit tests run in milliseconds without database.

Maintainability: Changes isolated to configuration. Real Impact: Add new feature? Don't touch existing code!

Reusability: Beans can be shared across the app. Real Impact: One bean, multiple consumers.

Flexibility: Switch implementations via config. Real Impact: Dev/Prod environments? Different beans, same code!

Separation of Concerns: Business logic separated from object creation. Real Impact: Your code does ONE thing well.

AOP Support: Cross-cutting concerns (logging, security) handled separately. Real Impact: Add logging to all methods without touching them!

Lifecycle Management: Consistent initialization and cleanup. Real Impact: No memory leaks or resource issues.`,table:{headers:["Benefit","Description","Real Impact"],rows:[["Loose Coupling","Classes depend on abstractions, not implementations","Change database? Just swap the bean!"],["Testability","Easy to inject mocks and stubs","Unit tests run in milliseconds without database"],["Maintainability","Changes isolated to configuration","Add new feature? Don't touch existing code!"],["Reusability","Beans can be shared across the app","One bean, multiple consumers"],["Flexibility","Switch implementations via config","Dev/Prod environments? Different beans, same code!"],["Separation of Concerns","Business logic separated from object creation","Your code does ONE thing well"],["AOP Support","Cross-cutting concerns handled separately","Add logging to all methods without touching them!"],["Lifecycle Management","Consistent initialization and cleanup","No memory leaks or resource issues"]]}},{title:"\u{1F3E2} The Company Analogy",content:`Imagine a company:

Without IoC (Chaotic Startup):
\u2022 Every employee builds their own desk
\u2022 Everyone buys their own computer
\u2022 Each person manages their own office supplies
\u2022 No HR, no IT department
\u2022 Result: Chaos, duplication, inefficiency!

With IoC (Professional Company):
\u2022 HR department (Spring Container) hires and manages employees (beans)
\u2022 IT department provides computers (dependencies) to everyone who needs them
\u2022 Facilities team manages desks and office supplies
\u2022 Employees just focus on their job (business logic)
\u2022 Result: Organized, efficient, scalable!

Spring is like having HR, IT, and Facilities departments for your code. You just focus on writing business logic! \u{1F3AF}`}]},{title:"\u{1F4A1} Real-World Example - E-Commerce Application",content:"Let's see a complete example showing how IoC makes a real application maintainable and testable. This example demonstrates profile-based configuration, lifecycle management, and dependency injection in action.",codeExamples:[{title:"Complete IoC Example with Spring",description:"Full e-commerce application showing dependency injection, lifecycle management, and profile-based configuration.",code:`// Domain Model
public class Order {
    private Long id;
    private String product;
    private double amount;
    // getters, setters...
}

// Repository Interface
public interface OrderRepository {
    void save(Order order);
    Order findById(Long id);
}

// Service Layer
@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final EmailService emailService;
    private final PaymentService paymentService;
    
    @Autowired
    public OrderService(OrderRepository orderRepository,
                       EmailService emailService,
                       PaymentService paymentService) {
        this.orderRepository = orderRepository;
        this.emailService = emailService;
        this.paymentService = paymentService;
    }
    
    @PostConstruct
    public void init() {
        System.out.println("\u{1F680} OrderService initialized!");
    }
    
    public void placeOrder(Order order) {
        paymentService.processPayment(order.getAmount());
        orderRepository.save(order);
        emailService.sendConfirmation(order);
        System.out.println("\u2705 Order placed successfully!");
    }
    
    @PreDestroy
    public void cleanup() {
        System.out.println("\u{1F44B} OrderService shutting down");
    }
}

/* What Spring Did for Us:
1. \u2705 Created all beans automatically
2. \u2705 Wired all dependencies 
3. \u2705 Called @PostConstruct after initialization
4. \u2705 Managed bean lifecycle
5. \u2705 Let us focus ONLY on business logic!
*/`,language:"java"}]}],keyPoints:["IoC (Inversion of Control) removes object creation responsibility from developers and gives it to the framework","Traditional approach = You create objects with 'new' (tight coupling); IoC = Framework creates objects (loose coupling)","Spring IoC Container (ApplicationContext) is the brain that manages bean creation, wiring, and lifecycle","IoC vs DI: IoC is the PRINCIPLE (what), DI is the MECHANISM (how) - DI implements IoC","Beans are objects managed by Spring - they're VIP objects with automatic lifecycle management","Three types of DI: Constructor (best practice), Setter (optional deps), Field (avoid in production)","Constructor injection is ALWAYS preferred - immutable, testable, fails fast, and mandatory deps are clear","IoC solves: tight coupling, testing difficulties, maintainability issues, and inflexibility","Benefits: Loose coupling, easy testing with mocks, flexibility, reusability, and cleaner architecture","Three ways to configure beans: Annotations (@Component/@Service/@Repository), Java Config (@Bean), XML (legacy)","Bean lifecycle in 5 steps: Creation \u2192 Dependency Injection \u2192 Initialization \u2192 Usage \u2192 Destruction","ApplicationContext vs BeanFactory: Always use ApplicationContext (99.9% of cases) - eager loading and advanced features","IoC Container is like a personal assistant: remembers who needs what, when to create it, when to destroy it","The Hollywood Principle: 'Don't call us, we'll call you' - framework controls the flow, not your code","Interview killer line: Spring uses IoC to decouple application components by managing object creation and dependency injection through its IoC container","Final thought: IoC says 'Stop micro-managing. Focus on business logic. I'll handle the plumbing.'"],images:[{url:"assets/images/spring/traditional-control-flow.svg",alt:"Traditional Control Flow Diagram",caption:"Traditional approach showing tight coupling with manual object creation and dependency management"},{url:"assets/images/spring/ioc-control-flow.svg",alt:"IoC Control Flow Diagram",caption:"IoC approach with Spring Container creating beans and injecting dependencies automatically"},{url:"assets/images/spring/spring-ioc-container-architecture.svg",alt:"Spring IoC Container Architecture",caption:"Complete architecture showing Configuration \u2192 Bean Definitions \u2192 Bean Factory \u2192 Lifecycle \u2192 Application"},{url:"assets/images/spring/dependency-injection-types.svg",alt:"Dependency Injection Types",caption:"Comparison of Constructor (best), Setter (optional deps), and Field (avoid) injection types"}],references:["Spring Framework Documentation - IoC Container","Martin Fowler - Inversion of Control Containers and the Dependency Injection pattern","Spring in Action by Craig Walls","Pro Spring 5 by Iuliana Cosmina","Expert One-on-One J2EE Design and Development by Rod Johnson","Spring Framework Reference - Core Technologies","Dependency Injection Principles, Practices, and Patterns by Steven van Deursen"],interviewQA:[{question:"What is Inversion of Control?",answer:"IoC is a design principle where the control of object creation and dependency management is inverted from the application code to a framework/container. Instead of your code creating objects using 'new', the framework creates them and injects dependencies. Use an analogy! Compare it to ordering food (IoC) vs cooking yourself (traditional)."},{question:"Why does Spring use IoC?",answer:"Spring uses IoC to achieve: 1) Loose coupling - depend on abstractions, 2) Better testability - easy to inject mocks, 3) Maintainability - change config not code, 4) Lifecycle management - consistent init/destroy, 5) Separation of concerns - business logic separate from object creation. Mention real examples - switching databases, testing without real DB, etc."},{question:"What's the difference between IoC and DI?",answer:"IoC is the PRINCIPLE (what), DI is the MECHANISM (how). IoC = Framework controls object creation. DI = How framework provides dependencies (constructor/setter/field injection). DI is one way to achieve IoC. Think: IoC is the goal, DI is the tool to achieve it."},{question:"What is the Spring IoC Container?",answer:"The IoC Container (ApplicationContext or BeanFactory) is the core of Spring that: Creates and manages beans, Injects dependencies, Manages bean lifecycle, Handles configuration. ApplicationContext is the commonly used container with advanced features. Mention it's like a 'factory + lifecycle manager + dependency resolver' all in one!"},{question:"How do you configure beans in Spring?",answer:"Three ways: 1) Annotation-based: @Component, @Service, @Repository, @Controller, 2) Java-based: @Configuration with @Bean methods, 3) XML-based: <bean> tags (legacy). Modern apps prefer annotations for simplicity and Java config for complex scenarios. Show you know modern approaches (annotations) and when to use Java config (third-party libs)."},{question:"What are the types of Dependency Injection?",answer:"Three types: 1) Constructor Injection - BEST PRACTICE (immutable, testable, fails fast), 2) Setter Injection - for optional dependencies (mutable, flexible), 3) Field Injection - NOT recommended (easy but hard to test, can't use final). Always prefer constructor injection for mandatory dependencies and setter injection for optional ones."},{question:"What is a Bean in Spring?",answer:"A Bean is an object that is created, managed, and wired by the Spring IoC Container. Beans are VIP objects that get special treatment - Spring handles their creation, dependency injection, and lifecycle (init/destroy). Created using @Component annotations, @Bean methods, or XML configuration."},{question:"Explain the Bean Lifecycle in Spring.",answer:"1) Instantiation - Spring creates bean, 2) Dependency Injection - Spring injects dependencies, 3) Aware Callbacks - BeanNameAware, ApplicationContextAware, 4) @PostConstruct/init-method - initialization, 5) Bean Ready - available for use, 6) Container Shutdown, 7) @PreDestroy/destroy-method - cleanup, 8) Bean Destroyed. Spring manages the complete lifecycle automatically."},{question:"ApplicationContext vs BeanFactory?",answer:"BeanFactory: Basic container, lazy loading, minimal features. ApplicationContext: Advanced container, eager loading, event propagation, AOP, i18n, more features. Always use ApplicationContext in modern apps (99.9% of the time). Think: BeanFactory = convenience store, ApplicationContext = full supermarket."},{question:"Why is Constructor Injection preferred?",answer:"Constructor Injection is preferred because: 1) Immutable objects (final fields), 2) Mandatory dependencies are explicit in constructor, 3) Easy to test (just pass mocks to constructor), 4) Fails fast at startup if dependencies missing, 5) No need for @Autowired in modern Spring, 6) Thread-safe by design. Setter injection is only for optional dependencies."}]};var Iy={name:"Problems Dependency Injection Solves",overview:"Ever tried to assemble IKEA furniture where all the screws are permanently glued to the wrong pieces? Frustrating, right? That's exactly what your code feels like without Dependency Injection! Welcome to the world where we'll explore why Dependency Injection isn't just a fancy buzzword - it's the superhero that rescues your code from the villain called 'Tight Coupling.' Imagine building with Lego blocks instead of welding metal pieces together. That's the magic DI brings to software development! Let's dive into the messy world of tightly coupled code and discover how DI transforms it into a clean, maintainable masterpiece.",sections:[{title:"The Nightmare: Life Without Dependency Injection",content:"Before we understand how amazing DI is, let's experience the pain of NOT having it. Picture this: You're building a house where every brick is cemented to specific neighbors. Want to change one brick? Demolish the entire wall! That's your code without DI.",images:[{url:"assets/images/spring/tight-vs-loose-coupling.svg",alt:"Tight vs Loose Coupling Comparison",caption:"Visual comparison showing tightly coupled classes (welded together) vs loosely coupled classes (connected via interfaces)"}],subsections:[{title:"Problem 1: Tight Coupling - The Marriage You Can't Divorce",content:`Tight coupling is when your classes are so dependent on specific implementations that they're basically married... with no prenup!

The Horror Story:
Imagine you own a car that ONLY works with Michelin tires, brand X engine oil, and a specific battery model. Want to switch brands? Buy a new car!

Code Example of Pain:
Your UserService is married to MySQLUserRepository. Want to switch to PostgreSQL for testing? Too bad! Rewrite everything!

Real-World Impact:
\u2022 Change one class? Break five others
\u2022 Want to test? Must set up entire database
\u2022 Need flexibility? Dream on!
\u2022 Code review? Prepare for criticism

The Furniture Analogy:
Tight coupling is like buying a sofa with built-in, non-removable cushions. Spill coffee? Buy a new sofa. With DI, cushions are removable and washable. Spill coffee? Wash the cushion!

Why This Hurts in Real Projects:
\u2022 Team velocity slows down (afraid to change anything)
\u2022 Bug fixes take forever (changing A breaks B, C, D...)
\u2022 New features? Risky business!
\u2022 Onboarding new developers? Good luck explaining the spaghetti!`,table:{headers:["Aspect","Tightly Coupled Code","Pain Level"],rows:[["Changing implementation","Rewrite multiple classes","EXTREME"],["Adding new feature","Touch 10+ files, pray nothing breaks","HIGH"],["Unit testing","Must set up entire infrastructure","EXTREME"],["Code reusability","Copy-paste code everywhere","HIGH"],["Team collaboration","Merge conflicts and breaking changes","HIGH"],["Production bugs","Fix one thing, break two others","EXTREME"]]}},{title:"Problem 2: Hard-Coded Dependencies - The Concrete Prison",content:`Hard-coded dependencies are like having your phone number tattooed on your forehead. It works... until you need to change it!

The Kitchen Disaster:
Imagine a chef who has knives welded to his hands. Great for chopping! But washing hands? Playing piano? Typing? Houston, we have a problem!

In Code:
When you hard-code dependencies using 'new', you're essentially welding objects together. Your class now OWNS its dependencies and must MANAGE them.

The 'new' Keyword Trap:
Every time you write 'new SomeDependency()', you're saying:
\u2022 'I know exactly what I need'
\u2022 'I'll never need anything else'
\u2022 'Testing? Who needs that!'
\u2022 'Flexibility is overrated'

Real Problems This Creates:
1. Impossible to Mock: Unit tests need real database, real payment gateway, real email server
2. Configuration Nightmare: Different configs for dev/test/prod? Copy-paste the class!
3. Hidden Dependencies: What does this class need? Read 200 lines to find out!
4. Violation of SRP: Your class does business logic AND manages object creation

The Lego vs Welding Analogy:
Hard-coding is like welding metal pieces together to build a toy. Built it wrong? Grab the blowtorch! DI is like Lego blocks - snap together, pull apart, rebuild. Made a mistake? Just disconnect and reconnect!`,table:{headers:["Scenario","Hard-Coded Dependencies","With DI"],rows:[["Testing","Need real database, real servers","Inject mocks - test in isolation"],["Switching implementations","Rewrite class code","Change configuration only"],["Multiple environments","Duplicate classes for dev/prod","Same class, different injections"],["Understanding dependencies","Read entire class","Check constructor signature"],["Code maintenance","Fear-driven development","Confident refactoring"]]}},{title:"Problem 3: Poor Testability - The Integration Test Hell",content:`Without DI, your 'unit' tests are actually integration tests in disguise. It's like trying to test if your car's horn works by starting the engine, driving around, and then honking. Overkill much?

The Testing Nightmare:
You want to test if UserService validates email correctly. But without DI:
1. Start database server
2. Create test schema
3. Seed test data
4. Configure email server
5. Set up payment gateway
6. THEN finally test email validation

Time taken: 5 minutes. Test result: Email validation works! Congratulations, you just waited 5 minutes to test a 2-line regex!

Why This Is Terrible:
\u2022 Slow tests = developers skip testing
\u2022 Flaky tests = random failures, wasted time
\u2022 Hard to reproduce bugs = fix takes days
\u2022 Test maintenance = nightmare fuel

The Microwave Test Analogy:
Testing without DI is like needing to test your microwave's door button... but first you must:
\u2022 Connect it to power grid
\u2022 Install cooling system
\u2022 Set up electrical infrastructure
\u2022 Call electrician for inspection

With DI? Just press the button. Done!

Real Developer Pain:
'I spent 3 hours debugging why my test fails... turns out the test database was down. The actual code was fine.' - Every Developer Ever`,table:{headers:["Testing Aspect","Without DI","With DI"],rows:[["Test execution time","Minutes (database, network, etc.)","Milliseconds (in-memory mocks)"],["Test reliability","Flaky (external dependencies)","Rock solid (controlled mocks)"],["Test coverage","Low (too hard to test)","High (easy to test everything)"],["Debugging failed tests","Which dependency failed?","Clear - it's your code"],["CI/CD pipeline","Slow, expensive infrastructure","Fast, runs anywhere"],["Developer happiness","\u{1F622}","\u{1F60A}"]]}},{title:"Problem 4: Difficult Maintenance - The Spaghetti Code Syndrome",content:`Code without DI ages like milk, not wine. Six months later, even YOU won't understand what YOU wrote!

The Spaghetti Restaurant:
Imagine a restaurant where every dish is connected by noodles. Want to serve one plate? You must serve all 50 plates simultaneously! That's your codebase without DI.

Why Maintenance Becomes Hell:
\u2022 Change Propagation: Fix one bug, create three more
\u2022 Fear-Driven Development: 'It works, DON'T TOUCH IT!'
\u2022 Knowledge Silos: Only one person understands this module
\u2022 Technical Debt: Compounds faster than credit card interest

The Domino Effect:
UserService depends on MySQLRepository
MySQLRepository depends on ConnectionPool
ConnectionPool depends on ConfigLoader
ConfigLoader depends on FileSystem

Change FileSystem? \u{1F4A5} EVERYTHING BREAKS!

Real Team Conversations:
Developer 1: 'Can we add a new feature?'
Developer 2: 'Which module?'
Developer 1: 'UserService'
Developer 2: 'The one with 47 dependencies?'
Developer 1: 'Yes'
Developer 2: 'See you next month!'

The Jenga Tower Analogy:
Maintaining tightly coupled code is like playing Jenga with glued blocks. Pull one block? The whole tower comes down! With DI, blocks are independent. Pull one block? Everything else stays stable.`,table:{headers:["Maintenance Task","Difficulty Without DI","Time Impact"],rows:[["Understanding code","Must trace 10+ dependencies","Hours"],["Adding new feature","Modify multiple interconnected classes","Days"],["Fixing bugs","Risk breaking unrelated features","High"],["Onboarding developers","Requires deep system knowledge","Weeks"],["Refactoring","Impossible without breaking things","Never happens"],["Code reviews","Reviewer gives up and approves","Trust issues"]]}},{title:"Problem 5: Lack of Flexibility - The One-Size-Fits-None Trap",content:`Without DI, your code is inflexible like a concrete statue. It does ONE thing, in ONE way, forever. Need variation? Chisel away!

The Restaurant Menu Problem:
Imagine a restaurant that can ONLY serve chicken pizza. No beef, no veggie, no customization. Customer wants beef? Sorry! Vegetarian? Tough luck! That's your hard-coded class.

Real Scenarios Where This Hurts:

1. Multiple Environments:
\u2022 Dev: Use mock database
\u2022 Test: Use in-memory database
\u2022 Prod: Use real database
Without DI: Create UserServiceDev, UserServiceTest, UserServiceProd \u{1F926}

2. Client-Specific Customization:
\u2022 Client A: Send email notifications
\u2022 Client B: Send SMS notifications
\u2022 Client C: Send both
Without DI: if-else hell or duplicate classes

3. Feature Toggles:
\u2022 Enable feature for beta users
\u2022 Disable for regular users
Without DI: Impossible without code changes

4. A/B Testing:
\u2022 Algorithm A for group 1
\u2022 Algorithm B for group 2
Without DI: Deploy two different codebases

The Smartphone vs Landline Analogy:
Code without DI is like a landline phone - fixed location, fixed features, fixed everything. DI makes your code like a smartphone - plug in different apps, change settings, customize everything!

The Cost of Inflexibility:
\u2022 Lost business opportunities (can't adapt quickly)
\u2022 Competitive disadvantage (competitors ship faster)
\u2022 Developer burnout (same problems, different day)
\u2022 Technical debt (workarounds piling up)`,table:{headers:["Need","Without DI Solution","Problems Created"],rows:[["Multiple databases","Copy entire service per database","Code duplication, maintenance nightmare"],["Different notification channels","if-else chains everywhere","Unmaintainable, hard to extend"],["Environment-specific config","Hardcode values, comment/uncomment","Error-prone, dangerous"],["Third-party integrations","Tightly couple to one provider","Vendor lock-in, can't switch"],["Feature experimentation","Deploy multiple versions","Operational complexity"],["Client customization","Create custom branches per client","Merge hell, diverging codebases"]]}}]},{title:"The Hero: How Dependency Injection Solves Everything",content:"Enter Dependency Injection - the superhero that swoops in to save your code from the villains of tight coupling, hard-coding, and inflexibility! Let's see how DI transforms your nightmare into a dream.",images:[{url:"assets/images/spring/dependency-injection-flow.svg",alt:"Dependency Injection Flow Diagram",caption:"Complete flow showing how DI container creates dependencies and injects them into dependent classes"},{url:"assets/images/spring/testing-with-without-di.svg",alt:"Testing Comparison",caption:"Visual showing testing without DI (complex setup, many dependencies) vs with DI (simple mocks, isolated testing)"}],subsections:[{title:"Solution 1: Loose Coupling - The Freedom of Choice",content:`DI transforms marriages into friendly partnerships. Classes work together without being welded together!

The Magic Transformation:
Before DI: Car with built-in, non-replaceable engine
With DI: Car with standard engine interface - swap V6 for V8 anytime!

How DI Creates Loose Coupling:
1. Depend on Abstractions: Use interfaces, not concrete classes
2. Inject Dependencies: Don't create them yourself
3. Single Responsibility: Classes do ONE thing well
4. Open/Closed Principle: Open for extension, closed for modification

Code Transformation:
Before: class UserService { repo = new MySQLRepo(); }
After: class UserService(UserRepository repo) { this.repo = repo; }

The Beautiful Results:
\u2022 Change MySQL to Postgres? Just inject different implementation!
\u2022 Want to test? Inject a mock!
\u2022 Need caching? Inject a caching decorator!
\u2022 Client wants MongoDB? No problem, inject MongoRepo!

The USB Port Analogy:
Loose coupling is like USB ports on your laptop. You don't have a 'keyboard laptop' and a 'mouse laptop' - you have ONE laptop with USB ports. Plug in keyboard, mouse, external drive, phone - anything with USB interface works! That's loose coupling!

Real Developer Joy:
'I switched from MySQL to PostgreSQL in production. Changed ONE line in configuration. Everything worked. I cried tears of joy.' - Happy Developer`,table:{headers:["Change Needed","Tightly Coupled Effort","Loosely Coupled (DI) Effort"],rows:[["Switch database","Rewrite UserService + tests","Change config file - done!"],["Add caching layer","Modify UserService code","Create CachingRepository wrapper"],["Support multiple databases","Duplicate entire codebase","Create new implementation"],["Mock for testing","Create test-specific version","Inject mock - 1 line"],["Add logging","Modify every method","Inject logging decorator"],["Client customization","Branch codebase","Inject client-specific impl"]]}},{title:"Solution 2: Testability - The Joy of Fast, Reliable Tests",content:`With DI, testing becomes a pleasure instead of a chore. It's like switching from a manual typewriter to a modern keyboard!

The Testing Revolution:
Without DI: 'Let me spend 10 minutes setting up databases, servers, and infrastructure to test a 5-line method'
With DI: 'Inject mock, run test, get result in 10 milliseconds. Done!'

How DI Makes Testing Easy:

1. Isolation: Test ONE thing at a time
\u2022 Inject mocks for all dependencies
\u2022 Focus on logic being tested
\u2022 No external dependencies needed

2. Speed: Tests run in milliseconds
\u2022 No database connections
\u2022 No network calls
\u2022 No file system access
\u2022 Pure in-memory operations

3. Reliability: No more flaky tests
\u2022 Controlled environment
\u2022 Predictable behavior
\u2022 No random failures

4. Coverage: Test edge cases easily
\u2022 Mock can throw any exception
\u2022 Mock can return any data
\u2022 Test all scenarios

The Microwave Button Test:
Remember testing the microwave? With DI, it's like having a test button that just checks if the door mechanism works - no power needed, no heating, just the button click!

Real Testing Examples:

Test: Does UserService validate email?
Without DI: Start DB, configure server, seed data, run test
With DI: userService = new UserService(mockRepo); assertThrows(InvalidEmailException);

Test: Does PaymentService handle failed payments?
Without DI: Create test payment gateway account, force failure somehow
With DI: mockGateway.throwsException(); assertPaymentFailed();

Developer Happiness Metrics:
\u2022 Test suite runtime: 2 hours \u2192 2 minutes
\u2022 Flaky tests: 30% \u2192 0%
\u2022 Developer testing: 'Ugh' \u2192 'Let me add more tests!'
\u2022 Code coverage: 40% \u2192 90%`,table:{headers:["Testing Aspect","Before DI","After DI","Impact"],rows:[["Test execution time","Minutes per test","Milliseconds per test","1000x faster"],["Test setup complexity","50+ lines","3 lines","Clean tests"],["External dependencies","Database, servers, network","None - pure mocks","Zero infrastructure"],["Test reliability","Flaky, random failures","Rock solid","Trust your tests"],["Edge case testing","Hard/impossible","Easy","Better coverage"],["CI/CD integration","Slow, expensive","Fast, cheap","Ship faster"]]}},{title:"Solution 3: Maintainability - The Joy of Clean Code",content:`DI transforms your codebase from spaghetti into organized, modular architecture. It's like going from a messy drawer to a perfectly organized toolbox!

The Organizational Miracle:
Before DI: Jenga tower - pull one block, everything falls
With DI: Lego blocks - remove, replace, reorganize freely

How DI Improves Maintainability:

1. Clear Dependencies:
\u2022 Look at constructor - know exactly what's needed
\u2022 No hidden dependencies
\u2022 No surprises

2. Single Responsibility:
\u2022 Classes do ONE thing
\u2022 Easy to understand
\u2022 Easy to modify

3. Modular Design:
\u2022 Change one module - others unaffected
\u2022 Add new modules easily
\u2022 Remove old modules safely

4. Self-Documenting:
\u2022 Constructor shows dependencies
\u2022 Interfaces define contracts
\u2022 Code tells its own story

The Library Analogy:
Code without DI is like books scattered randomly on the floor. Looking for a book? Good luck! With DI, it's like a well-organized library - fiction here, non-fiction there, everything has its place. Need a book? Go to the right section!

Real Maintenance Scenarios:

Scenario 1: Add Logging
Without DI: Modify 20 files, add logging to each method
With DI: Create LoggingDecorator, inject it - done!

Scenario 2: Fix Performance Issue
Without DI: Debug through 10 interconnected classes
With DI: Check which component is slow, replace it

Scenario 3: Onboard New Developer
Without DI: 'Good luck understanding this mess'
With DI: 'Check interfaces, see what depends on what, dive in!'

The Maintenance Cost Reduction:
\u2022 Bug fix time: Days \u2192 Hours
\u2022 New feature development: Weeks \u2192 Days
\u2022 Code review time: Hours \u2192 Minutes
\u2022 Onboarding time: Months \u2192 Weeks`,table:{headers:["Maintenance Task","Time Without DI","Time With DI","Difference"],rows:[["Understanding code","2 hours (trace dependencies)","15 mins (check constructor)","8x faster"],["Adding new feature","3 days (fear of breaking)","4 hours (isolated change)","6x faster"],["Fixing production bug","1 day (find root cause)","2 hours (clear structure)","4x faster"],["Refactoring","Never (too risky)","Regularly (safe changes)","\u221Ex better"],["Code review","1 hour (complex changes)","15 mins (clear changes)","4x faster"],["Onboarding developer","1 month (learn spaghetti)","1 week (clear structure)","4x faster"]]}},{title:"Solution 4: Flexibility - The Power of Configuration",content:`DI makes your code flexible like a Swiss Army knife - one tool, multiple uses, endless configurations!

The Configuration Revolution:
Without DI: Hard-coded everything, change requires recompile
With DI: Configure everything, change on the fly

How DI Enables Flexibility:

1. Runtime Configuration:
\u2022 Inject different implementations based on config
\u2022 No code changes needed
\u2022 Change behavior via configuration files

2. Environment-Specific Behavior:
\u2022 Dev: Inject mock email sender
\u2022 Test: Inject test email sender
\u2022 Prod: Inject real email sender
Same code, different injections!

3. Feature Toggles:
\u2022 Feature enabled? Inject feature implementation
\u2022 Feature disabled? Inject no-op implementation
\u2022 Toggle via config, no deployment!

4. A/B Testing:
\u2022 User in group A? Inject algorithm A
\u2022 User in group B? Inject algorithm B
\u2022 Measure results, pick winner!

5. Client Customization:
\u2022 Client wants email? Inject EmailNotifier
\u2022 Client wants SMS? Inject SMSNotifier
\u2022 Client wants both? Inject CompositeNotifier

The Restaurant Evolution:
Remember our inflexible restaurant? With DI:
\u2022 Base class: PizzaMaker
\u2022 Inject: ToppingStrategy (chicken, beef, veggie)
\u2022 Inject: SizeStrategy (small, medium, large)
\u2022 Inject: CrustStrategy (thin, thick, stuffed)

Result: Infinite pizza combinations, ONE pizza maker class!

Real Flexibility Examples:

Example 1: Multi-Tenant Application
\u2022 Tenant A: Inject TenantACustomization
\u2022 Tenant B: Inject TenantBCustomization
\u2022 Same codebase, different behaviors!

Example 2: Payment Processing
\u2022 US customers: Inject StripePaymentGateway
\u2022 EU customers: Inject PayPalPaymentGateway
\u2022 Region-specific compliance, zero code duplication!

Example 3: Caching Strategy
\u2022 High-traffic pages: Inject RedisCache
\u2022 Low-traffic pages: Inject InMemoryCache
\u2022 Performance optimization via configuration!`,table:{headers:["Flexibility Need","Without DI","With DI"],rows:[["Multiple environments","3 different codebases","1 codebase, 3 configs"],["Client customization","Branched code per client","Same code, different injections"],["Feature flags","Comment code in/out","Inject enabled/disabled impl"],["A/B testing","Deploy 2 versions","Inject A or B based on user"],["Third-party switching","Rewrite integration","Inject new provider"],["Scaling strategy","Hardcoded approach","Inject strategy per load"]]}},{title:"Solution 5: Scalability - Growing Without Pain",content:`DI enables your application to scale from prototype to enterprise without architectural rewrites. It's like building with blocks instead of concrete!

The Scalability Journey:

Phase 1 - Prototype:
\u2022 Inject simple implementations
\u2022 Fast development
\u2022 Prove concept

Phase 2 - MVP:
\u2022 Inject production-ready implementations
\u2022 Same code structure
\u2022 Add reliability

Phase 3 - Growth:
\u2022 Inject caching layers
\u2022 Add monitoring
\u2022 Scale horizontally

Phase 4 - Enterprise:
\u2022 Inject distributed systems
\u2022 Add resilience
\u2022 Global scale

All with the SAME core business logic!

How DI Enables Scaling:

1. Horizontal Scaling:
\u2022 Inject distributed cache instead of in-memory
\u2022 Inject message queue instead of direct calls
\u2022 Zero business logic changes!

2. Performance Optimization:
\u2022 Inject caching decorator
\u2022 Inject connection pooling
\u2022 Inject async implementations

3. Resilience:
\u2022 Inject circuit breaker wrapper
\u2022 Inject retry logic
\u2022 Inject fallback implementations

4. Observability:
\u2022 Inject logging decorator
\u2022 Inject metrics collector
\u2022 Inject distributed tracing

The Building Analogy:
Without DI: Build small wooden house. Need bigger? Demolish and rebuild with brick.
With DI: Build with modular blocks. Need bigger? Add more blocks. Need stronger? Replace wooden blocks with brick blocks!

Real Scaling Stories:

Startup to Unicorn:
\u2022 Day 1: Inject InMemoryCache
\u2022 Month 6: Inject RedisCache
\u2022 Year 1: Inject DistributedRedisCluster
\u2022 Year 3: Inject GlobalCDN

Same caching interface, evolved implementation!`,table:{headers:["Scale Stage","Challenge","DI Solution"],rows:[["Prototype","Speed of development","Inject simple, in-memory implementations"],["MVP","Reliability needed","Inject production-ready implementations"],["Growth","Performance bottlenecks","Inject caching, pooling, async wrappers"],["Scale-up","Vertical scaling limits","Inject distributed implementations"],["Scale-out","Horizontal scaling","Inject message queues, load balancers"],["Enterprise","Global distribution","Inject CDN, regional services, failover"]]}}]},{title:"Before vs After: The Complete Transformation",content:"Let's see the dramatic before-and-after transformation when DI enters your codebase. It's like those home makeover shows, but for code!",images:[{url:"assets/images/spring/before-after-di.svg",alt:"Before and After DI Transformation",caption:"Side-by-side comparison of code architecture before DI (messy, interconnected) and after DI (clean, modular)"}],subsections:[{title:"The Complete Comparison",content:"Here's everything we've learned, condensed into a powerful comparison table that shows just how transformative Dependency Injection truly is.",table:{headers:["Aspect","Without DI (The Nightmare)","With DI (The Dream)"],rows:[["Object Creation","Hard-coded with 'new' everywhere","Injected by framework/container"],["Dependencies","Tightly coupled to implementations","Loosely coupled to interfaces"],["Testing","Integration tests disguised as unit tests","True unit tests with mocks"],["Test Speed","Minutes (need real infrastructure)","Milliseconds (pure in-memory)"],["Flexibility","Change requires code rewrite","Change requires config update"],["Maintenance","Fear-driven, risky changes","Confident, safe refactoring"],["Code Reuse","Copy-paste everywhere","Inject same component everywhere"],["Scalability","Architectural rewrites needed","Swap implementations as you grow"],["Onboarding","Steep learning curve","Clear structure, easy to understand"],["Team Velocity","Slows down over time","Maintains or improves"],["Technical Debt","Accumulates rapidly","Easy to pay down"],["Developer Happiness","Frustration and burnout","Joy and productivity"]]}},{title:"Real-World Impact Metrics",content:"These aren't just theoretical benefits - they're real metrics from teams that adopted DI!",table:{headers:["Metric","Before DI","After DI","Improvement"],rows:[["Test Suite Runtime","2 hours","5 minutes","24x faster"],["Code Coverage","45%","85%","2x better"],["Bug Fix Time","2 days avg","4 hours avg","4x faster"],["Feature Development","2 weeks","3 days","5x faster"],["Production Incidents","12/month","3/month","4x fewer"],["Deployment Frequency","Monthly","Daily","30x more frequent"],["Developer Turnover","High (burnout)","Low (happy devs)","Better retention"],["Technical Interviews","Candidates struggle","Clean code impresses","Better hiring"]]}}]},{title:"Interview Preparation: Master the Concepts",content:"Everything you need to ace DI questions in technical interviews, explained clearly and memorably!",subsections:[{title:"Common Interview Questions & Answers",content:`These are the most frequently asked DI questions. Master these, and you'll impress any interviewer!

Q1: What problems does Dependency Injection solve?
A: DI solves five major problems:
1. Tight Coupling - Classes are married to specific implementations
2. Poor Testability - Can't test in isolation, need full infrastructure
3. Difficult Maintenance - Changes ripple through entire codebase
4. Lack of Flexibility - Can't change behavior without code changes
5. Hard-Coded Dependencies - Dependencies are created internally

Q2: How does DI improve testability?
A: DI allows injecting mock objects instead of real dependencies. This means:
\u2022 No need for database, network, or external services
\u2022 Tests run in milliseconds instead of minutes
\u2022 Complete control over test scenarios
\u2022 Easy to test edge cases and error conditions

Q3: What's the difference between tight and loose coupling?
A: Tight coupling: Class A creates and depends on concrete Class B (married relationship)
Loose coupling: Class A depends on Interface B (professional relationship)
Analogy: Tight = welded parts, Loose = Lego blocks

Q4: Can you give a real-world analogy for DI?
A: Sure! Think of a USB port:
\u2022 Without DI: Computer with keyboard permanently attached
\u2022 With DI: Computer with USB port - plug in any USB device
The computer (class) doesn't care what you plug in (dependency), as long as it implements USB interface!

Q5: How does DI support the Open/Closed Principle?
A: With DI, classes are:
\u2022 Open for extension (create new implementations)
\u2022 Closed for modification (existing code unchanged)
You can add new functionality by creating new implementations and injecting them, without touching existing code!`},{title:"Quick Revision Checklist",content:"Use this checklist to quickly review before interviews or exams!",table:{headers:["Concept","Key Point","Analogy"],rows:[["Tight Coupling","Classes married to specific implementations","Welded metal parts"],["Loose Coupling","Classes depend on interfaces","Lego blocks"],["Hard-Coded Dependencies","Using 'new' inside class","Phone number tattooed on forehead"],["Dependency Injection","Dependencies provided from outside","USB ports on laptop"],["Poor Testability","Need full infrastructure to test","Test microwave by building power grid"],["Good Testability","Test in isolation with mocks","Test button with no power needed"],["Inflexibility","Change requires code rewrite","Concrete statue"],["Flexibility","Change via configuration","Swiss Army knife"],["Difficult Maintenance","Change one thing, break many","Jenga tower"],["Easy Maintenance","Independent, modular changes","Organized library"]]}}]}],keyPoints:["Tight coupling makes classes dependent on specific implementations, creating a 'married' relationship that's hard to break","Hard-coded dependencies using 'new' keyword create concrete prisons - impossible to swap implementations","Without DI, unit tests become integration tests requiring databases, servers, and infrastructure","Maintenance becomes nightmare when changing one class breaks multiple others (domino effect)","Lack of flexibility means different environments need different codebases or hard-coded configurations","DI solves tight coupling by depending on abstractions (interfaces) instead of concrete implementations","DI enables true unit testing by allowing mock injection - tests run in milliseconds, not minutes","DI improves maintainability by creating modular, independent components that can change safely","DI provides flexibility through configuration - same code, different behavior based on what you inject","DI supports scalability - start simple, grow complex by injecting advanced implementations","Loose coupling is like Lego blocks - snap together, pull apart, rebuild easily","Testing with DI is like testing a microwave button without needing the entire power grid","DI follows Open/Closed Principle - open for extension (new implementations), closed for modification (existing code)","Real metrics: 24x faster tests, 4x faster bug fixes, 5x faster feature development with DI","Interview killer analogy: DI is like USB ports - one interface, infinite compatible devices"],references:["Martin Fowler - Inversion of Control Containers and the Dependency Injection pattern","Robert C. Martin - Clean Code: A Handbook of Agile Software Craftsmanship","Dependency Injection Principles, Practices, and Patterns by Steven van Deursen","Spring Framework Documentation - Dependency Injection","Gang of Four - Design Patterns: Dependency Inversion Principle","Effective Java by Joshua Bloch - Item 5: Prefer dependency injection to hardwiring resources","Clean Architecture by Robert C. Martin - Dependency Rule"],interviewQA:[{question:"What is the main problem that Dependency Injection solves?",answer:"DI primarily solves tight coupling. Without DI, classes create their own dependencies using 'new', making them tightly coupled to specific implementations. This makes code hard to test, maintain, and modify. DI inverts this - dependencies are injected from outside, making classes loosely coupled to interfaces. Analogy: Instead of welding parts together (tight coupling), we connect via standard interfaces like USB ports (loose coupling)."},{question:"How does DI improve testability?",answer:"DI allows injecting mock/stub objects during testing instead of real dependencies. Without DI, testing UserService means starting a real database, email server, etc. - integration test nightmare! With DI, we inject mocks - test runs in milliseconds with complete control. It's like testing a microwave button without needing the entire electrical grid connected!"},{question:"What's wrong with using 'new' keyword everywhere?",answer:"Using 'new' creates hard-coded dependencies - the class is now responsible for creating and managing its dependencies. Problems: 1) Can't swap implementations, 2) Can't inject mocks for testing, 3) Violates Single Responsibility (class does business logic AND object creation), 4) Creates tight coupling. It's like tattooing your phone number on your forehead - works until you need to change it!"},{question:"Give a real-world analogy for Dependency Injection.",answer:"USB port analogy: Without DI, your computer has a keyboard permanently welded to it. Want to use a different keyboard? Buy a new computer! With DI, computer has USB ports (interfaces). Plug in any USB device (implementation) - keyboard, mouse, drive, phone. The computer doesn't care WHAT you plug in, as long as it implements the USB interface. That's DI - depending on interfaces, not implementations!"},{question:"How does DI help with maintenance?",answer:"DI creates modular, independent components. Without DI, changing one class breaks others (Jenga tower effect). With DI, components are loosely coupled - change one, others unaffected. Constructor shows all dependencies clearly - no hidden surprises. Easy to understand, easy to modify, easy to test. It's like having an organized library instead of books scattered on the floor!"},{question:"Can you explain tight coupling vs loose coupling?",answer:"Tight coupling: Class A directly creates and depends on concrete Class B using 'new'. They're married - divorce requires major surgery! Loose coupling: Class A depends on Interface B, implementation injected from outside. They're professional partners - easy to replace. Analogy: Tight = welded metal sculpture (permanent), Loose = Lego blocks (snap on/off freely)."},{question:"What problems occur without DI in a real project?",answer:"Five major problems: 1) Tight coupling - can't change implementations without rewriting code, 2) Poor testability - need full infrastructure for unit tests, 3) Difficult maintenance - changes ripple everywhere, 4) No flexibility - different environments need different codebases, 5) Hard-coded dependencies - classes manage their own object creation. Result: slow development, frequent bugs, developer frustration, high costs."},{question:"How does DI support different environments (dev/test/prod)?",answer:"With DI, same code runs in all environments - we just inject different implementations! Dev: inject mock email sender (logs to console), Test: inject test email sender (stores in memory), Prod: inject real email sender (sends actual emails). One codebase, different configurations. Without DI, you'd need separate code versions or hard-coded if-else hell!"},{question:"What's the connection between DI and SOLID principles?",answer:"DI directly supports multiple SOLID principles: D (Dependency Inversion) - depend on abstractions not concretions, S (Single Responsibility) - class doesn't manage object creation, O (Open/Closed) - extend by creating new implementations, not modifying existing code, L (Liskov Substitution) - inject any implementation that follows the interface contract. DI is SOLID's best friend!"},{question:"How do you convince a team to adopt DI?",answer:"Show the pain first: 'Can't test without database? That's a problem DI solves.' Then show metrics: 'Teams using DI report 24x faster tests, 4x faster bug fixes, 5x faster features.' Use analogies: 'Would you rather weld parts together or use Lego blocks?' Finally, start small: 'Let's try DI in one new feature. If you hate it, we'll stop.' Spoiler: They won't hate it!"}]};var My=fy,Ty=hy,xy=my,Ay=gy,_y=vy,ky=yy,Py=by,Oy=Cy,Ry=wy,Ny=Sy,Fy=Ey,Ly=Dy,jy=Iy;var Jy=(()=>{let t=class t{constructor(){this.subtopicContents={Fundamentals:My,"Exception Hierarchy":Ty,"History of Java":xy,"Features of Java (Platform Independent, OOP, etc.)":Ay,"JDK, JRE, JVM Architecture":_y,"Compilation and Execution Process":ky,"Bytecode and Platform Independence":Py,"Java Editions (SE, EE, ME)":Oy,"Path and Classpath (Environment Variables)":Ry,"First Java Program structure and main method":Ny,"Java Keywords and Identifiers":Fy,"What is IoC and why Spring uses it":Ly,"What problem does DI solve?":jy}}getSubtopicContent(o){return this.subtopicContents[o]||null}getAllSubtopicNames(){return Object.keys(this.subtopicContents)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function UT(e,t){if(e&1&&(h(0,"div",19)(1,"h2"),m(2,"Overview"),p(),h(3,"p",20),m(4),p()()),e&2){let n=O(2);g(4),j(n.content.overview)}}function zT(e,t){if(e&1&&(h(0,"th"),m(1),p()),e&2){let n=t.$implicit;g(),j(n)}}function $T(e,t){if(e&1&&(h(0,"td"),m(1),p()),e&2){let n=t.$implicit;g(),j(n)}}function GT(e,t){if(e&1&&(h(0,"tr"),P(1,$T,2,1,"td",34),p()),e&2){let n=t.$implicit;g(),S("ngForOf",n)}}function qT(e,t){if(e&1&&(h(0,"div",33)(1,"table")(2,"thead")(3,"tr"),P(4,zT,2,1,"th",34),p()(),h(5,"tbody"),P(6,GT,2,1,"tr",34),p()()()),e&2){let n=O().$implicit;g(4),S("ngForOf",n.table.headers),g(2),S("ngForOf",n.table.rows)}}function YT(e,t){if(e&1&&(h(0,"div",30)(1,"h3"),m(2),p(),Ee(3,"div",31),P(4,qT,7,2,"div",32),p()),e&2){let n=t.$implicit,o=O(5);g(2),j(n.title),g(),S("innerHTML",o.formatContent(n.content),ea),g(),S("ngIf",n.table)}}function KT(e,t){if(e&1&&(h(0,"div",28),P(1,YT,5,3,"div",29),p()),e&2){let n=O().$implicit;g(),S("ngForOf",n.subsections)}}function QT(e,t){if(e&1&&(h(0,"p",40),m(1),p()),e&2){let n=O().$implicit;g(),j(n.caption)}}function ZT(e,t){if(e&1&&(h(0,"div",37),Ee(1,"img",38),P(2,QT,2,1,"p",39),p()),e&2){let n=t.$implicit;g(),S("src",n.url,ki)("alt",n.alt),g(),S("ngIf",n.caption)}}function XT(e,t){if(e&1&&(h(0,"div",35),P(1,ZT,3,3,"div",36),p()),e&2){let n=O().$implicit;g(),S("ngForOf",n.images)}}function ex(e,t){if(e&1&&(h(0,"p",48),m(1),p()),e&2){let n=O().$implicit;g(),j(n.description)}}function tx(e,t){if(e&1&&(h(0,"div",43)(1,"h3"),m(2),p(),P(3,ex,2,1,"p",44),h(4,"div",45)(5,"div",46)(6,"span",47),m(7),p()(),h(8,"pre")(9,"code"),m(10),p()()()()),e&2){let n=t.$implicit;g(2),j(n.title),g(),S("ngIf",n.description),g(4),j(n.language),g(3),j(n.code)}}function nx(e,t){if(e&1&&(h(0,"div",41),P(1,tx,11,4,"div",42),p()),e&2){let n=O().$implicit;g(),S("ngForOf",n.codeExamples)}}function ox(e,t){if(e&1&&(h(0,"div",23)(1,"h2"),m(2),p(),Ee(3,"div",24),P(4,KT,2,1,"div",25)(5,XT,2,1,"div",26)(6,nx,2,1,"div",27),p()),e&2){let n=t.$implicit,o=t.index,i=O(3);g(2),Ht("",o+1,". ",n.title),g(),S("innerHTML",i.formatContent(n.content),ea),g(),S("ngIf",n.subsections&&n.subsections.length>0),g(),S("ngIf",n.images&&n.images.length>0),g(),S("ngIf",n.codeExamples&&n.codeExamples.length>0)}}function ix(e,t){if(e&1&&(h(0,"div",21),P(1,ox,7,6,"div",22),p()),e&2){let n=O(2);g(),S("ngForOf",n.content.sections)}}function rx(e,t){if(e&1&&(h(0,"p",48),m(1),p()),e&2){let n=O().$implicit;g(),j(n.description)}}function sx(e,t){if(e&1&&(h(0,"div",43)(1,"h3"),m(2),p(),P(3,rx,2,1,"p",44),h(4,"div",45)(5,"div",46)(6,"span",47),m(7),p()(),h(8,"pre")(9,"code"),m(10),p()()()()),e&2){let n=t.$implicit;g(2),j(n.title),g(),S("ngIf",n.description),g(4),j(n.language),g(3),j(n.code)}}function ax(e,t){if(e&1&&(h(0,"div",49)(1,"h2"),m(2,"Code Examples"),p(),P(3,sx,11,4,"div",42),p()),e&2){let n=O(2);g(3),S("ngForOf",n.content.codeExamples)}}function cx(e,t){if(e&1&&(h(0,"p",40),m(1),p()),e&2){let n=O().$implicit;g(),j(n.caption)}}function lx(e,t){if(e&1&&(h(0,"div",37),Ee(1,"img",38),P(2,cx,2,1,"p",39),p()),e&2){let n=t.$implicit;g(),S("src",n.url,ki)("alt",n.alt),g(),S("ngIf",n.caption)}}function ux(e,t){if(e&1&&(h(0,"div",50)(1,"h2"),m(2,"Diagrams & Illustrations"),p(),P(3,lx,3,3,"div",36),p()),e&2){let n=O(2);g(3),S("ngForOf",n.content.images)}}function dx(e,t){if(e&1&&(h(0,"li"),m(1),p()),e&2){let n=t.$implicit;g(),j(n)}}function px(e,t){if(e&1&&(h(0,"div",51)(1,"h2"),m(2,"Key Points"),p(),h(3,"ul",52),P(4,dx,2,1,"li",34),p()()),e&2){let n=O(2);g(4),S("ngForOf",n.content.keyPoints)}}function fx(e,t){if(e&1&&(h(0,"li"),m(1),p()),e&2){let n=t.$implicit;g(),j(n)}}function hx(e,t){if(e&1&&(h(0,"div",53)(1,"h2"),m(2,"References"),p(),h(3,"ul",54),P(4,fx,2,1,"li",34),p()()),e&2){let n=O(2);g(4),S("ngForOf",n.content.references)}}function mx(e,t){if(e&1&&(h(0,"span",66),m(1),p()),e&2){let n=O().$implicit;Wu("difficulty-"+n.difficulty),g(),Be(" ",n.difficulty," ")}}function gx(e,t){if(e&1&&(h(0,"span",69),m(1),p()),e&2){let n=t.$implicit;g(),j(n)}}function vx(e,t){if(e&1&&(h(0,"div",67),P(1,gx,2,1,"span",68),p()),e&2){let n=O().$implicit;g(),S("ngForOf",n.tags)}}function yx(e,t){if(e&1&&(h(0,"div",58)(1,"div",59)(2,"span",60),m(3),p(),P(4,mx,2,3,"span",61)(5,vx,2,1,"div",62),p(),h(6,"div",63)(7,"strong"),m(8,"Q:"),p(),m(9),p(),h(10,"div",64)(11,"strong"),m(12,"A:"),p(),h(13,"pre",65),m(14),p()()()),e&2){let n=t.$implicit,o=t.index;g(3),Be("Q",o+1),g(),S("ngIf",n.difficulty),g(),S("ngIf",n.tags&&n.tags.length>0),g(4),Be(" ",n.question," "),g(5),j(n.answer)}}function bx(e,t){if(e&1&&(h(0,"div",55)(1,"h2"),m(2,"\u{1F4BC} Interview Questions & Answers"),p(),h(3,"div",56)(4,"p"),m(5,"Common interview questions related to this topic with detailed answers."),p()(),P(6,yx,15,5,"div",57),p()),e&2){let n=O(2);g(6),S("ngForOf",n.content.interviewQA)}}function Cx(e,t){if(e&1&&(h(0,"div",11)(1,"h1"),m(2),p(),P(3,UT,5,1,"div",12)(4,ix,2,1,"div",13)(5,ax,4,1,"div",14)(6,ux,4,1,"div",15)(7,px,5,1,"div",16)(8,hx,5,1,"div",17)(9,bx,7,1,"div",18),p()),e&2){let n=O();g(2),j(n.content.name),g(),S("ngIf",n.content.overview),g(),S("ngIf",n.content.sections&&n.content.sections.length>0),g(),S("ngIf",n.content.codeExamples&&n.content.codeExamples.length>0),g(),S("ngIf",n.content.images&&n.content.images.length>0),g(),S("ngIf",n.content.keyPoints&&n.content.keyPoints.length>0),g(),S("ngIf",n.content.references&&n.content.references.length>0),g(),S("ngIf",n.content.interviewQA&&n.content.interviewQA.length>0)}}function wx(e,t){if(e&1&&(h(0,"div",70)(1,"h1"),m(2),p(),h(3,"div",71)(4,"p"),m(5,"\u{1F4DD} Content for this subtopic is not yet available."),p(),h(6,"p"),m(7,"Please check back later or contact the administrator."),p()()()),e&2){let n=O();g(2),j(n.subtopicName)}}var Vy=(()=>{let t=class t{constructor(o,i,r,s){this.route=o,this.router=i,this.location=r,this.contentService=s,this.subtopicName="",this.topicName="",this.sectionTitle="",this.content=null,this.showBackToTop=!1}ngOnInit(){this.route.queryParams.subscribe(o=>{this.subtopicName=o.subtopic||"",this.topicName=o.topic||"",this.sectionTitle=o.section||"",this.content=this.contentService.getSubtopicContent(this.subtopicName)})}goBack(){this.location.back()}onWindowScroll(){this.showBackToTop=window.pageYOffset>300}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}formatContent(o){if(!o)return"";if(o.includes("\u2022")){let r=o.split(`
`).map(s=>s.trim()).filter(s=>s).map(s=>s.startsWith("\u2022")?`<li>${s.substring(1).trim()}</li>`:s);if(r.every(s=>s.startsWith("<li>")))return`<ul>${r.join("")}</ul>`}return o.replace(/\n/g,"<br>")}};t.\u0275fac=function(i){return new(i||t)(T($e),T(Pe),T(Et),T(Jy))},t.\u0275cmp=ae({type:t,selectors:[["app-subtopic-detail"]],hostBindings:function(i,r){i&1&&q("scroll",function(){return r.onWindowScroll()},vu)},standalone:!1,decls:19,vars:7,consts:[[1,"subtopic-detail-container"],[1,"header"],[1,"back-button",3,"click"],[1,"breadcrumb"],[1,"section-name"],[1,"separator"],[1,"topic-name"],[1,"subtopic-name"],["class","content",4,"ngIf"],["class","content no-content",4,"ngIf"],["title","Back to Top",1,"back-to-top",3,"click"],[1,"content"],["class","overview-section",4,"ngIf"],["class","content-sections",4,"ngIf"],["class","code-examples-section",4,"ngIf"],["class","images-section",4,"ngIf"],["class","key-points-section",4,"ngIf"],["class","references-section",4,"ngIf"],["class","interview-section",4,"ngIf"],[1,"overview-section"],[1,"overview-text"],[1,"content-sections"],["class","content-section",4,"ngFor","ngForOf"],[1,"content-section"],[1,"section-content",3,"innerHTML"],["class","subsections",4,"ngIf"],["class","section-images",4,"ngIf"],["class","section-code-examples",4,"ngIf"],[1,"subsections"],["class","subsection",4,"ngFor","ngForOf"],[1,"subsection"],[3,"innerHTML"],["class","comparison-table",4,"ngIf"],[1,"comparison-table"],[4,"ngFor","ngForOf"],[1,"section-images"],["class","image-container",4,"ngFor","ngForOf"],[1,"image-container"],[1,"content-image",3,"src","alt"],["class","image-caption",4,"ngIf"],[1,"image-caption"],[1,"section-code-examples"],["class","code-example",4,"ngFor","ngForOf"],[1,"code-example"],["class","code-description",4,"ngIf"],[1,"code-block"],[1,"code-header"],[1,"language-badge"],[1,"code-description"],[1,"code-examples-section"],[1,"images-section"],[1,"key-points-section"],[1,"key-points-list"],[1,"references-section"],[1,"references-list"],[1,"interview-section"],[1,"interview-intro"],["class","interview-qa",4,"ngFor","ngForOf"],[1,"interview-qa"],[1,"question-header"],[1,"question-number"],["class","difficulty-badge",3,"class",4,"ngIf"],["class","tags",4,"ngIf"],[1,"question"],[1,"answer"],[1,"answer-content"],[1,"difficulty-badge"],[1,"tags"],["class","tag",4,"ngFor","ngForOf"],[1,"tag"],[1,"content","no-content"],[1,"no-content-message"]],template:function(i,r){i&1&&(h(0,"div",0)(1,"div",1)(2,"button",2),q("click",function(){return r.goBack()}),m(3," \u2190 Back "),p(),h(4,"div",3)(5,"span",4),m(6),p(),h(7,"span",5),m(8,"\u203A"),p(),h(9,"span",6),m(10),p(),h(11,"span",5),m(12,"\u203A"),p(),h(13,"span",7),m(14),p()()(),P(15,Cx,10,8,"div",8)(16,wx,8,1,"div",9),h(17,"button",10),q("click",function(){return r.scrollToTop()}),m(18," \u2191 "),p()()),i&2&&(g(6),j(r.sectionTitle),g(4),j(r.topicName),g(4),j(r.subtopicName),g(),S("ngIf",r.content),g(),S("ngIf",!r.content),g(),ce("visible",r.showBackToTop))},dependencies:[Le,ut],styles:['.subtopic-detail-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:20px;min-height:100vh;background:#f5f5f5}.header[_ngcontent-%COMP%]{margin-bottom:30px}.back-button[_ngcontent-%COMP%]{background:#007bff;color:#fff;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;font-size:16px;margin-bottom:15px;transition:background .3s}.back-button[_ngcontent-%COMP%]:hover{background:#0056b3}.breadcrumb[_ngcontent-%COMP%]{font-size:14px;color:#666;margin-top:10px}.section-name[_ngcontent-%COMP%]{color:#007bff;font-weight:500}.topic-name[_ngcontent-%COMP%]{color:#28a745;font-weight:500}.subtopic-name[_ngcontent-%COMP%]{color:#333;font-weight:600}.separator[_ngcontent-%COMP%]{margin:0 8px;color:#999}.content[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:40px;box-shadow:0 2px 8px #0000001a}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#333;margin-bottom:30px;padding-bottom:20px;border-bottom:3px solid #007bff;font-size:36px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#007bff;margin-top:40px;margin-bottom:20px;font-size:28px;border-left:4px solid #007bff;padding-left:15px}.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#555;margin-top:25px;margin-bottom:15px;font-size:22px}.overview-section[_ngcontent-%COMP%]{background:#e7f3ff;padding:20px;border-radius:8px;border-left:4px solid #007bff;margin-bottom:30px}.overview-text[_ngcontent-%COMP%]{font-size:18px;line-height:1.8;color:#333;margin:0}.back-to-top[_ngcontent-%COMP%]{position:fixed;bottom:30px;right:30px;background:#007bff;color:#fff;border:none;width:50px;height:50px;border-radius:50%;font-size:24px;font-weight:700;cursor:pointer;box-shadow:0 4px 12px #007bff66;transition:all .3s ease;z-index:1000;display:flex;align-items:center;justify-content:center;line-height:1;opacity:0;visibility:hidden;transform:translateY(20px)}.back-to-top.visible[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:translateY(0)}.back-to-top[_ngcontent-%COMP%]:hover{background:#0056b3;transform:translateY(-5px);box-shadow:0 6px 16px #007bff99}.back-to-top[_ngcontent-%COMP%]:active{transform:translateY(-2px)}.content-section[_ngcontent-%COMP%]{margin-bottom:40px}.section-content[_ngcontent-%COMP%]{font-size:16px;line-height:1.8;color:#444;margin-bottom:20px}.subsections[_ngcontent-%COMP%]{margin-left:20px;margin-top:20px}.subsection[_ngcontent-%COMP%]{background:#f8f9fa;padding:20px;border-radius:6px;margin-bottom:15px;border-left:3px solid #28a745}.subsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#28a745}.subsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.8;color:#555;margin:0}.section-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .subsection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:0;margin:15px 0}.section-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .subsection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px 0 8px 25px;position:relative;line-height:1.6;color:#444;margin-left:10px}.section-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before, .subsection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";color:#667eea;font-weight:700;font-size:18px;position:absolute;left:0}.comparison-table[_ngcontent-%COMP%]{margin-top:15px;overflow-x:auto}.comparison-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;background:#fff;box-shadow:0 2px 4px #0000001a;border-radius:8px;overflow:hidden}.comparison-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff}.comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:15px;text-align:left;font-weight:600;font-size:14px;text-transform:uppercase;letter-spacing:.5px}.comparison-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #e9ecef;transition:background-color .2s}.comparison-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#f8f9fa}.comparison-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child{border-bottom:none}.comparison-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:15px;color:#495057;font-size:14px}.comparison-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{font-weight:600;color:#212529;background-color:#f8f9fa}.code-examples-section[_ngcontent-%COMP%]{margin-top:40px}.code-example[_ngcontent-%COMP%]{margin-bottom:30px}.code-description[_ngcontent-%COMP%]{color:#666;font-style:italic;margin-bottom:15px}.code-block[_ngcontent-%COMP%]{background:#282c34;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px #00000026}.code-header[_ngcontent-%COMP%]{background:#1e2127;padding:10px 20px;border-bottom:1px solid #3a3f4b}.language-badge[_ngcontent-%COMP%]{background:#007bff;color:#fff;padding:4px 12px;border-radius:4px;font-size:12px;font-weight:600;text-transform:uppercase}.code-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;padding:20px;overflow-x:auto}.code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#abb2bf;font-family:Consolas,Monaco,Courier New,monospace;font-size:14px;line-height:1.6}.images-section[_ngcontent-%COMP%]{margin-top:40px}.image-container[_ngcontent-%COMP%]{margin-bottom:30px;text-align:center}.content-image[_ngcontent-%COMP%]{max-width:100%;height:auto;border-radius:8px;box-shadow:0 4px 12px #0000001a;margin-bottom:10px}.image-caption[_ngcontent-%COMP%]{color:#666;font-style:italic;font-size:14px;margin-top:10px}.key-points-section[_ngcontent-%COMP%]{background:#fff3cd;padding:25px;border-radius:8px;border-left:4px solid #ffc107;margin-top:40px}.key-points-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0;color:#856404}.key-points-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.key-points-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 0 10px 30px;position:relative;color:#856404;font-weight:500}.key-points-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#28a745;font-weight:700;font-size:18px}.references-section[_ngcontent-%COMP%]{background:#f8f9fa;padding:25px;border-radius:8px;margin-top:40px}.references-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0;color:#6c757d}.references-list[_ngcontent-%COMP%]{list-style:decimal;padding-left:20px;margin:0}.references-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px 0;color:#495057;line-height:1.6}.interview-section[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);padding:40px;border-radius:12px;margin-top:50px;box-shadow:0 10px 30px #667eea4d}.interview-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;margin-top:0;border:none;padding:0;font-size:32px}.interview-intro[_ngcontent-%COMP%]{background:#ffffff1a;padding:15px 20px;border-radius:8px;margin-bottom:30px;border-left:4px solid white}.interview-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;margin:0;font-size:16px}.interview-qa[_ngcontent-%COMP%]{background:#fff;border-radius:10px;padding:25px;margin-bottom:20px;box-shadow:0 4px 15px #0000001a;transition:transform .2s,box-shadow .2s}.interview-qa[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 6px 20px #00000026}.question-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:15px;flex-wrap:wrap}.question-number[_ngcontent-%COMP%]{background:#667eea;color:#fff;padding:6px 14px;border-radius:20px;font-weight:700;font-size:14px}.difficulty-badge[_ngcontent-%COMP%]{padding:4px 12px;border-radius:4px;font-size:12px;font-weight:600;text-transform:uppercase}.difficulty-easy[_ngcontent-%COMP%]{background:#d4edda;color:#155724}.difficulty-medium[_ngcontent-%COMP%]{background:#fff3cd;color:#856404}.difficulty-hard[_ngcontent-%COMP%]{background:#f8d7da;color:#721c24}.tags[_ngcontent-%COMP%]{display:flex;gap:6px;flex-wrap:wrap}.tag[_ngcontent-%COMP%]{background:#e9ecef;color:#495057;padding:3px 10px;border-radius:12px;font-size:11px;font-weight:500}.question[_ngcontent-%COMP%]{font-size:18px;color:#333;margin-bottom:15px;line-height:1.6}.question[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#667eea;font-size:20px;margin-right:8px}.answer[_ngcontent-%COMP%]{background:#f8f9fa;padding:20px;border-radius:8px;border-left:4px solid #28a745}.answer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#28a745;font-size:18px;margin-right:8px}.answer-content[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:#495057;line-height:1.8;margin:10px 0 0;white-space:pre-wrap;word-wrap:break-word;background:transparent;padding:0;font-size:15px}.no-content[_ngcontent-%COMP%]{text-align:center;padding:60px 40px}.no-content-message[_ngcontent-%COMP%]{background:#f8f9fa;padding:40px;border-radius:8px;border:2px dashed #dee2e6}.no-content-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;color:#6c757d;margin:10px 0}.no-content-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-size:24px;font-weight:500}@media (max-width: 768px){.subtopic-detail-container[_ngcontent-%COMP%]{padding:15px 10px}.header[_ngcontent-%COMP%]{margin-bottom:20px}.back-button[_ngcontent-%COMP%]{padding:8px 16px;font-size:14px;width:100%;margin-bottom:12px}.breadcrumb[_ngcontent-%COMP%]{font-size:12px;line-height:1.6}.separator[_ngcontent-%COMP%]{margin:0 4px}.content[_ngcontent-%COMP%]{padding:25px 20px;border-radius:6px}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:28px;margin-bottom:20px;padding-bottom:15px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px;margin-top:30px;margin-bottom:15px;padding-left:12px}.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin-top:20px}.overview-section[_ngcontent-%COMP%]{padding:15px;margin-bottom:20px}.overview-text[_ngcontent-%COMP%]{font-size:16px;line-height:1.6}.content-section[_ngcontent-%COMP%]{margin-bottom:30px}.section-content[_ngcontent-%COMP%]{font-size:15px;line-height:1.7}.subsections[_ngcontent-%COMP%]{margin-left:10px;margin-top:15px}.subsection[_ngcontent-%COMP%]{padding:15px;margin-bottom:12px}.code-example[_ngcontent-%COMP%]{margin-bottom:20px}.code-description[_ngcontent-%COMP%]{font-size:14px;margin-bottom:10px}.code-block[_ngcontent-%COMP%]{border-radius:6px}.code-header[_ngcontent-%COMP%]{padding:8px 15px}.language-badge[_ngcontent-%COMP%]{font-size:10px;padding:3px 10px}.code-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{padding:15px;font-size:12px}.code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-size:12px;line-height:1.5}.key-points-section[_ngcontent-%COMP%], .references-section[_ngcontent-%COMP%]{padding:20px;margin-top:30px}.key-points-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px 0 8px 25px;font-size:14px}.key-points-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{font-size:16px}.references-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;line-height:1.5}.interview-section[_ngcontent-%COMP%]{padding:25px 20px;margin-top:30px}.interview-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px}.interview-intro[_ngcontent-%COMP%]{padding:12px 15px;margin-bottom:20px}.interview-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.interview-qa[_ngcontent-%COMP%]{padding:20px 15px;margin-bottom:15px}.question-header[_ngcontent-%COMP%]{gap:8px;margin-bottom:12px}.question-number[_ngcontent-%COMP%]{padding:5px 12px;font-size:12px}.difficulty-badge[_ngcontent-%COMP%]{padding:3px 10px;font-size:11px}.tag[_ngcontent-%COMP%]{padding:2px 8px;font-size:10px}.question[_ngcontent-%COMP%]{font-size:16px;margin-bottom:12px}.question[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:18px}.answer[_ngcontent-%COMP%]{padding:15px}.answer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:16px}.answer-content[_ngcontent-%COMP%]{font-size:14px;line-height:1.7}.no-content[_ngcontent-%COMP%]{padding:40px 20px}.no-content-message[_ngcontent-%COMP%]{padding:30px 20px}.no-content-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.no-content-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-size:20px}}@media (max-width: 480px){.subtopic-detail-container[_ngcontent-%COMP%]{padding:10px 5px}.back-button[_ngcontent-%COMP%]{padding:6px 12px;font-size:13px}.breadcrumb[_ngcontent-%COMP%]{font-size:11px}.content[_ngcontent-%COMP%]{padding:20px 15px}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;margin-bottom:15px;padding-bottom:12px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;margin-top:25px;margin-bottom:12px;padding-left:10px}.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.overview-section[_ngcontent-%COMP%]{padding:12px}.overview-text[_ngcontent-%COMP%]{font-size:15px}.section-content[_ngcontent-%COMP%]{font-size:14px}.subsection[_ngcontent-%COMP%]{padding:12px}.code-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{padding:12px;overflow-x:auto;-webkit-overflow-scrolling:touch}.code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-size:11px;word-wrap:break-word;white-space:pre-wrap}.interview-section[_ngcontent-%COMP%]{padding:20px 15px}.interview-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.interview-qa[_ngcontent-%COMP%]{padding:15px 12px}.question[_ngcontent-%COMP%]{font-size:15px}.question[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:16px}.answer-content[_ngcontent-%COMP%]{font-size:13px}}']});let e=t;return e})();function Sx(e,t){if(e&1){let n=St();h(0,"button",27),q("click",function(){it(n);let i=O();return rt(i.clearFilters())}),m(1,"\u{1F504} Clear Filters"),p()}}function Ex(e,t){if(e&1&&(h(0,"div",28)(1,"p"),m(2),p()()),e&2){let n=O();g(2),Ht("Showing ",n.filteredSections.length," of ",n.sections.length," sections")}}function Dx(e,t){if(e&1){let n=St();h(0,"div",29)(1,"div",30),m(2,"\u{1F50D}"),p(),h(3,"h3"),m(4,"No results found"),p(),h(5,"p"),m(6,"Try adjusting your search or filters"),p(),h(7,"button",20),q("click",function(){it(n);let i=O();return rt(i.clearFilters())}),m(8,"Clear Filters"),p()()}}function Ix(e,t){if(e&1){let n=St();h(0,"app-section",31),q("toggleCollapse",function(){let i=it(n).$implicit,r=O();return rt(r.toggleSection(i))}),p()}if(e&2){let n=t.$implicit,o=t.index;To("animation-delay",o*.05+"s"),S("section",n)}}var Hy=(()=>{let t=class t{constructor(o,i){this.route=o,this.syllabusService=i,this.sections=[],this.filteredSections=[],this.technology="",this.techIcon="",this.techSubtitle="",this.themeClass="",this.searchTerm="",this.selectedDifficulty="all",this.totalSections=0,this.totalTopics=0,this.totalSubtopics=0}ngOnInit(){this.route.params.subscribe(o=>{let i=o.technology;this.loadTechnology(i)})}loadTechnology(o){switch(o){case"java":this.technology="Java",this.techIcon="\u2615",this.techSubtitle="Master Core Java from Basics to Advanced Concepts",this.themeClass="theme-java";break;case"spring":this.technology="Spring Framework",this.techIcon="\u{1F343}",this.techSubtitle="Master Spring Framework from Basics to Advanced",this.themeClass="theme-spring";break;case"springboot":this.technology="Spring Boot",this.techIcon="\u{1F680}",this.techSubtitle="Master Spring Boot from Basics to Production",this.themeClass="theme-springboot";break;default:this.technology="Technology",this.techIcon="\u{1F4DA}",this.techSubtitle="Complete Syllabus",this.themeClass="theme-default"}this.sections=this.syllabusService.getSectionsByTechnology(o),this.sections.forEach(i=>i.isCollapsed=!0),this.filteredSections=[...this.sections],this.calculateStats()}calculateStats(){this.totalSections=this.sections.length,this.totalTopics=this.sections.reduce((o,i)=>o+i.topics.length,0),this.totalSubtopics=this.sections.reduce((o,i)=>o+i.topics.reduce((r,s)=>r+(s.subTopics?.length||0),0),0)}toggleSection(o){o.isCollapsed=!o.isCollapsed}expandAll(){this.filteredSections.forEach(o=>o.isCollapsed=!1)}collapseAll(){this.filteredSections.forEach(o=>o.isCollapsed=!0)}filterByDifficulty(o){this.selectedDifficulty=o,this.applyFilters()}onSearch(){this.applyFilters()}applyFilters(){let o=[...this.sections];if(this.selectedDifficulty!=="all"&&(o=o.filter(i=>i.difficulty===this.selectedDifficulty)),this.searchTerm.trim()){let i=this.searchTerm.toLowerCase();o=o.filter(r=>r.title.toLowerCase().includes(i)||r.topics.some(s=>s.name.toLowerCase().includes(i)||s.subTopics?.some(a=>a.name.toLowerCase().includes(i))))}this.filteredSections=o}clearFilters(){this.searchTerm="",this.selectedDifficulty="all",this.filteredSections=[...this.sections]}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}};t.\u0275fac=function(i){return new(i||t)(T($e),T(fn))},t.\u0275cmp=ae({type:t,selectors:[["app-syllabus"]],standalone:!1,decls:55,vars:20,consts:[[1,"syllabus-container",3,"ngClass"],[1,"header"],["routerLink","/",1,"back-button"],[1,"page-title"],[1,"page-subtitle"],[1,"stats-dashboard"],[1,"stat-card"],[1,"stat-icon"],[1,"stat-value"],[1,"stat-label"],[1,"controls-section"],[1,"search-box"],["type","text","placeholder","\u{1F50D} Search topics, subtopics...",1,"search-input",3,"ngModelChange","input","ngModel"],[1,"filter-controls"],[1,"difficulty-filters"],[1,"filter-btn",3,"click"],[1,"filter-btn","basic",3,"click"],[1,"filter-btn","intermediate",3,"click"],[1,"filter-btn","advanced",3,"click"],[1,"action-buttons"],[1,"action-btn",3,"click"],["class","action-btn clear",3,"click",4,"ngIf"],["class","results-info",4,"ngIf"],[1,"sections-container"],["class","no-results",4,"ngIf"],[3,"section","animation-delay","toggleCollapse",4,"ngFor","ngForOf"],["title","Back to top",1,"scroll-top",3,"click"],[1,"action-btn","clear",3,"click"],[1,"results-info"],[1,"no-results"],[1,"no-results-icon"],[3,"toggleCollapse","section"]],template:function(i,r){i&1&&(h(0,"div",0)(1,"div",1)(2,"a",2),m(3,"\u2190 Back to Home"),p(),h(4,"h1",3),m(5),p(),h(6,"p",4),m(7),p(),h(8,"div",5)(9,"div",6)(10,"div",7),m(11,"\u{1F4DA}"),p(),h(12,"div",8),m(13),p(),h(14,"div",9),m(15,"Sections"),p()(),h(16,"div",6)(17,"div",7),m(18,"\u{1F4D6}"),p(),h(19,"div",8),m(20),p(),h(21,"div",9),m(22,"Topics"),p()(),h(23,"div",6)(24,"div",7),m(25,"\u{1F4DD}"),p(),h(26,"div",8),m(27),p(),h(28,"div",9),m(29,"Subtopics"),p()()()(),h(30,"div",10)(31,"div",11)(32,"input",12),da("ngModelChange",function(a){return Uu(r.searchTerm,a)||(r.searchTerm=a),a}),q("input",function(){return r.onSearch()}),p()(),h(33,"div",13)(34,"div",14)(35,"button",15),q("click",function(){return r.filterByDifficulty("all")}),m(36," All "),p(),h(37,"button",16),q("click",function(){return r.filterByDifficulty("basic")}),m(38," Basic "),p(),h(39,"button",17),q("click",function(){return r.filterByDifficulty("intermediate")}),m(40," Intermediate "),p(),h(41,"button",18),q("click",function(){return r.filterByDifficulty("advanced")}),m(42," Advanced "),p()(),h(43,"div",19)(44,"button",20),q("click",function(){return r.expandAll()}),m(45,"\u{1F4C2} Expand All"),p(),h(46,"button",20),q("click",function(){return r.collapseAll()}),m(47,"\u{1F4C1} Collapse All"),p(),P(48,Sx,2,0,"button",21),p()()(),P(49,Ex,3,2,"div",22),h(50,"div",23),P(51,Dx,9,0,"div",24)(52,Ix,1,3,"app-section",25),p(),h(53,"button",26),q("click",function(){return r.scrollToTop()}),m(54,"\u2191"),p()()),i&2&&(S("ngClass",r.themeClass),g(5),Ht("",r.techIcon," ",r.technology," Complete Syllabus"),g(2),j(r.techSubtitle),g(6),j(r.totalSections),g(7),j(r.totalTopics),g(7),j(r.totalSubtopics),g(5),ua("ngModel",r.searchTerm),g(3),ce("active",r.selectedDifficulty==="all"),g(2),ce("active",r.selectedDifficulty==="basic"),g(2),ce("active",r.selectedDifficulty==="intermediate"),g(2),ce("active",r.selectedDifficulty==="advanced"),g(7),S("ngIf",r.searchTerm||r.selectedDifficulty!=="all"),g(),S("ngIf",r.filteredSections.length!==r.sections.length),g(2),S("ngIf",r.filteredSections.length===0),g(),S("ngForOf",r.filteredSections))},dependencies:[Bi,Le,ut,ka,nv,Md,ac,lc],styles:[".syllabus-container[_ngcontent-%COMP%]{min-height:100vh;padding:20px;transition:all .3s ease}.header[_ngcontent-%COMP%]{text-align:center;margin-bottom:40px;animation:_ngcontent-%COMP%_fadeInDown .6s ease}.back-button[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;margin-bottom:20px;border-radius:8px;text-decoration:none;font-weight:500;transition:all .3s ease}.page-title[_ngcontent-%COMP%]{font-size:3rem;margin:20px 0 10px;font-weight:700;animation:_ngcontent-%COMP%_bounceIn .8s ease}.page-subtitle[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:30px;opacity:.8}.stats-dashboard[_ngcontent-%COMP%]{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin-top:30px}.stat-card[_ngcontent-%COMP%]{padding:25px 40px;border-radius:15px;text-align:center;box-shadow:0 4px 15px #0000001a;transition:transform .3s ease,box-shadow .3s ease;animation:_ngcontent-%COMP%_fadeInUp .6s ease}.stat-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 8px 25px #00000026}.stat-icon[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:10px}.stat-value[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;margin:10px 0}.stat-label[_ngcontent-%COMP%]{font-size:1rem;opacity:.7;text-transform:uppercase;letter-spacing:1px}.controls-section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto 30px;animation:_ngcontent-%COMP%_slideInUp .6s ease}.search-box[_ngcontent-%COMP%]{margin-bottom:20px}.search-input[_ngcontent-%COMP%]{width:100%;padding:15px 20px;font-size:1rem;border:2px solid;border-radius:12px;outline:none;transition:all .3s ease}.search-input[_ngcontent-%COMP%]:focus{transform:translateY(-2px);box-shadow:0 5px 20px #0000001a}.filter-controls[_ngcontent-%COMP%]{display:flex;gap:15px;flex-wrap:wrap;justify-content:space-between;align-items:center}.difficulty-filters[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}.filter-btn[_ngcontent-%COMP%]{padding:10px 20px;border:2px solid;border-radius:25px;background:transparent;cursor:pointer;font-weight:600;transition:all .3s ease}.filter-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 10px #0000001a}.filter-btn.active[_ngcontent-%COMP%]{transform:scale(1.05)}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}.action-btn[_ngcontent-%COMP%]{padding:10px 20px;border:none;border-radius:8px;cursor:pointer;font-weight:600;transition:all .3s ease}.action-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 10px #00000026}.results-info[_ngcontent-%COMP%]{text-align:center;margin:20px 0;font-size:1.1rem;font-weight:500}.sections-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;animation:_ngcontent-%COMP%_fadeIn .8s ease}.no-results[_ngcontent-%COMP%]{text-align:center;padding:60px 20px;animation:_ngcontent-%COMP%_fadeIn .5s ease}.no-results-icon[_ngcontent-%COMP%]{font-size:5rem;margin-bottom:20px;opacity:.5}.no-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:10px}.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:20px;opacity:.7}.scroll-top[_ngcontent-%COMP%]{position:fixed;bottom:30px;right:30px;width:50px;height:50px;border-radius:50%;border:none;font-size:1.5rem;cursor:pointer;box-shadow:0 4px 15px #0003;transition:all .3s ease;z-index:1000}.scroll-top[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 8px 25px #0000004d}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fadeInDown{0%{opacity:0;transform:translateY(-30px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_fadeInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_slideInUp{0%{opacity:0;transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}to{transform:scale(1)}}@media (max-width: 1024px){.syllabus-container[_ngcontent-%COMP%]{padding:15px}.page-title[_ngcontent-%COMP%]{font-size:2.5rem}.stats-dashboard[_ngcontent-%COMP%]{gap:15px}}@media (max-width: 768px){.syllabus-container[_ngcontent-%COMP%]{padding:10px}.page-title[_ngcontent-%COMP%]{font-size:2rem;line-height:1.2}.page-subtitle[_ngcontent-%COMP%]{font-size:1rem}.stats-dashboard[_ngcontent-%COMP%]{gap:10px}.stat-card[_ngcontent-%COMP%]{padding:15px 25px;min-width:120px}.stat-value[_ngcontent-%COMP%]{font-size:2rem}.search-input[_ngcontent-%COMP%]{padding:12px 15px;font-size:16px}.filter-controls[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;gap:15px}.difficulty-filters[_ngcontent-%COMP%], .action-buttons[_ngcontent-%COMP%]{justify-content:center;width:100%}.filter-btn[_ngcontent-%COMP%], .action-btn[_ngcontent-%COMP%]{flex:1;min-width:80px}.scroll-top[_ngcontent-%COMP%]{bottom:20px;right:20px;width:45px;height:45px}}@media (max-width: 480px){.syllabus-container[_ngcontent-%COMP%]{padding:8px}.back-button[_ngcontent-%COMP%]{padding:8px 15px;font-size:.9rem}.page-title[_ngcontent-%COMP%]{font-size:1.5rem;margin:10px 0 8px}.page-subtitle[_ngcontent-%COMP%]{font-size:.9rem;margin-bottom:20px}.stats-dashboard[_ngcontent-%COMP%]{gap:8px}.stat-card[_ngcontent-%COMP%]{padding:10px 15px;min-width:100px}.stat-icon[_ngcontent-%COMP%]{font-size:1.8rem;margin-bottom:5px}.stat-value[_ngcontent-%COMP%]{font-size:1.5rem;margin:5px 0}.stat-label[_ngcontent-%COMP%]{font-size:.8rem}.search-input[_ngcontent-%COMP%]{padding:10px 12px;font-size:16px}.filter-btn[_ngcontent-%COMP%], .action-btn[_ngcontent-%COMP%]{padding:8px 12px;font-size:.85rem;min-height:44px}.results-info[_ngcontent-%COMP%]{font-size:.9rem;padding:8px}.scroll-top[_ngcontent-%COMP%]{bottom:15px;right:15px;width:40px;height:40px;font-size:1.2rem}.no-results-icon[_ngcontent-%COMP%]{font-size:3rem}.no-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem}.no-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (max-width: 360px){.page-title[_ngcontent-%COMP%]{font-size:1.3rem}.stat-card[_ngcontent-%COMP%]{padding:8px 12px;min-width:90px}.stat-value[_ngcontent-%COMP%]{font-size:1.3rem}.stat-label[_ngcontent-%COMP%]{font-size:.7rem}}"]});let e=t;return e})();var Mx=[{path:"",component:cy},{path:"syllabus",component:py},{path:"syllabus/:technology",component:Hy},{path:"java",redirectTo:"syllabus/java",pathMatch:"full"},{path:"spring",redirectTo:"syllabus/spring",pathMatch:"full"},{path:"springboot",redirectTo:"syllabus/springboot",pathMatch:"full"},{path:"subtopic-detail",component:Vy},{path:"**",redirectTo:""}],By=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=Se({type:t}),t.\u0275inj=he({imports:[cc.forRoot(Mx),cc]});let e=t;return e})();var Wy=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=Se({type:t,bootstrap:[iy]}),t.\u0275inj=he({providers:[fn],imports:[bd,Wi,rv,By]});let e=t;return e})();yd().bootstrapModule(Wy).catch(e=>console.error(e));
