(self.webpackChunkoiiao=self.webpackChunkoiiao||[]).push([[42],{267:(e,t,a)=>{var r,s=Object.create,l=Object.defineProperty,i=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,o=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,h=(e,t,a,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let s of n(t))p.call(e,s)||s===a||l(e,s,{get:()=>t[s],enumerable:!(r=i(t,s))||r.enumerable});return e},d=(e,t,a)=>(((e,t,a)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),y={};((e,t)=>{for(var a in t)l(e,a,{get:t[a],enumerable:!0})})(y,{default:()=>P}),e.exports=(r=y,h(l({},"__esModule",{value:!0}),r));var u=((e,t,a)=>(a=null!=e?s(o(e)):{},h(!t&&e&&e.__esModule?a:l(a,"default",{value:e,enumerable:!0}),e)))(a(43)),c=a(206),m=a(520);class P extends u.Component{constructor(){super(...arguments),d(this,"callPlayer",c.callPlayer),d(this,"playerID",this.props.config.playerId||`twitch-player-${(0,c.randomString)()}`),d(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),d(this,"unmute",(()=>{this.callPlayer("setMuted",!1)}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){const{playsinline:a,onError:r,config:s,controls:l}=this.props,i=m.MATCH_URL_TWITCH_CHANNEL.test(e),n=i?e.match(m.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(m.MATCH_URL_TWITCH_VIDEO)[1];t?i?this.player.setChannel(n):this.player.setVideo("v"+n):(0,c.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((t=>{this.player=new t.Player(this.playerID,{video:i?"":n,channel:i?n:"",height:"100%",width:"100%",playsinline:a,autoplay:this.props.playing,muted:this.props.muted,controls:!!i||l,time:(0,c.parseStartTime)(e),...s.options});const{READY:r,PLAYING:o,PAUSE:p,ENDED:h,ONLINE:d,OFFLINE:y,SEEK:u}=t.Player;this.player.addEventListener(r,this.props.onReady),this.player.addEventListener(o,this.props.onPlay),this.player.addEventListener(p,this.props.onPause),this.player.addEventListener(h,this.props.onEnded),this.player.addEventListener(u,this.props.onSeek),this.player.addEventListener(d,this.props.onLoaded),this.player.addEventListener(y,this.props.onLoaded)}),r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return u.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}d(P,"displayName","Twitch"),d(P,"canPlay",m.canPlay.twitch),d(P,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerTwitch.0eb46398.chunk.js.map