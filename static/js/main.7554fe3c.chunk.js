(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(53)},27:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(27),a(1)),s=a(2),i=a(4),m=a(3),u=a(5),d=a(7),p=r.a.createContext(),E=function(e,t){switch(t.type){case"UPDATE_LOCATION":var a=t.payload,n=a.list,r=a.city,c=r.name,l=r.country;return Object(d.a)({},e,{city:c,country:l,list:n,loading:!1,error:""});case"RESET_FORM":return Object(d.a)({},e,{city:"",country:"",list:"",error:"",loading:!1});case"ERROR":return Object(d.a)({},e,{city:"",country:"",list:"",error:t.payload,loading:!1});case"LOADING":return Object(d.a)({},e,{city:"",country:"",list:"",error:"",loading:!0});default:return e}},f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={city:"",country:"",list:"",error:"",loading:!1,dispatch:function(e){return a.setState(function(t){return E(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),b=p.Consumer,h=function(e){var t=e.color;return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border text-".concat(t," m-auto"),role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))};h.defaultProps={color:"primary"};var v=h,y=a(9),g=a.n(y),N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null,function(e){var t=e.city,a=e.country,n=e.error,c=e.loading;return r.a.createElement("div",{className:"bg-primary"},r.a.createElement("div",{className:g()("card-body bg-primary text-white text-center",{"bg-danger":n})},c?r.a.createElement(v,{color:"text-white"}):r.a.createElement("h1",{className:"display-4",style:{fontSize:"36px"}},r.a.createElement("strong",null,t?"".concat(t,", ").concat(a):"Weather Conditions"))))})}}]),t}(n.Component),O=a(11),x=a.n(O),w=a(20),j=a(8),k={weatherAPI:"20dcc09738b693710bd6fab74bc9f6b0"},C=a(12),S=a.n(C),F=function(e){var t=e.findGeolocation;return r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{className:"btn btn-outline-primary ",type:"button",onClick:t},r.a.createElement("i",{className:"fas fa-search-location"}),r.a.createElement("span",{className:"d-none d-md-inline"}," Use Current Location")))},D=function(e){var t=e.value,a=e.onChange,c=e.onResetClick;return r.a.createElement(n.Fragment,null,r.a.createElement("input",{type:"text",className:"form-control",name:"zipcode",placeholder:"Lookup Zip Code...",value:t,onChange:a}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-primary",type:"submit"},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("span",{className:"d-none d-sm-inline"}," Search"))),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:c},r.a.createElement("i",{className:"fas fa-undo"}),r.a.createElement("span",{className:"d-none d-md-inline"}," Reset"))))},R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={zipcode:"",coordinates:null},a.onChange=function(e){return a.setState(Object(j.a)({},e.target.name,e.target.value))},a.onResetClick=function(e){a.setState({zipcode:""}),e({type:"RESET_FORM"})},a.getWeather=function(){var e=Object(w.a)(x.a.mark(function e(t,n){var r,c,l,o,s;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.zipcode,l=r.coordinates,t({type:"LOADING"}),e.prev=3,!a.state.coordinates){e.next=12;break}return e.next=7,S.a.get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(l.latitude,"&lon=").concat(l.longitude,"&appid=").concat(k.weatherAPI));case 7:o=e.sent,t({type:"UPDATE_LOCATION",payload:o.data}),a.setState(Object(d.a)({},a.state,{coordinates:null})),e.next=16;break;case 12:return e.next=14,S.a.get("https://api.openweathermap.org/data/2.5/forecast?zip=".concat(c,"&appid=").concat(k.weatherAPI));case 14:s=e.sent,t({type:"UPDATE_LOCATION",payload:s.data});case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),t({type:"ERROR",payload:"Please enter a valid US zip code."});case 21:case"end":return e.stop()}},e,this,[[3,18]])}));return function(t,a){return e.apply(this,arguments)}}(),a.findGeolocation=function(e,t){t.persist(),t.preventDefault(),e({type:"LOADING"});navigator.geolocation?navigator.geolocation.getCurrentPosition(function(n){a.setState({zipcode:"",coordinates:n.coords}),a.getWeather(e,t)},function(){e({type:"ERROR",payload:"Geolocation must be enabled"})}):e({type:"ERROR",payload:"Geolocation must be enabled"})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(b,null,function(t){var a=t.dispatch,n=t.error,c=t.loading;return r.a.createElement("div",{className:g()("border border-primary p-2",{"border-danger":n})},r.a.createElement("div",{className:"d-flex flex-row justify-content-center"},c?r.a.createElement(v,null):r.a.createElement("form",{className:"form-inline py-2",onSubmit:e.getWeather.bind(e,a)},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement(F,{findGeolocation:e.findGeolocation.bind(e,a)}),r.a.createElement(D,{value:e.state.zipcode,onChange:e.onChange,onResetClick:e.onResetClick.bind(e,a)}))))))})}}]),t}(n.Component),A=function(e){return(9*(e-273.15)/5+32).toFixed(0)},W=function(e){return e.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ")},I=function(e){return(parseInt(e,10)<10?"0":"")+e},M=function(e){var t;return(t=void 0===e?new Date:new Date("".concat(e," UTC"))).getHours()<=12?"".concat(parseInt(t.getHours()),":").concat(I(parseInt(t.getMinutes())),"AM"):"".concat(parseInt(t.getHours())-12,":").concat(I(parseInt(t.getMinutes())),"PM")},_=function(e){var t=e.forecast;return r.a.createElement("div",{className:"row"},t.map(function(e){var t=e.dt_txt.substring(5,10),a=M(e.dt_txt);return r.a.createElement("div",{className:"col-xs-auto mx-auto",key:a},r.a.createElement("div",{className:"text-center item-hl mt-2",style:{width:"150px",height:"225px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,t),r.a.createElement("small",null,a),r.a.createElement("br",null),r.a.createElement("img",{src:"https://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:""}),r.a.createElement("p",null,A(e.main.temp),"\xb0 F"),r.a.createElement("p",null,W(e.weather[0].description)))))}))},P=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.isOpen;return r.a.createElement(b,null,function(t){var a=t.list.slice(0,5);return r.a.createElement(n.Fragment,null,e&&r.a.createElement("div",{className:"card card-body bg-warning"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-11 mx-auto"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h4",{className:"text-center m-0"},"12-Hour Forecast"),r.a.createElement(_,{forecast:a}))))))})}}]),t}(n.Component),T=function(e){var t=e.forecast,a=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];return r.a.createElement("div",{className:"row"},t.map(function(e){var t=new Date(e.dt_txt).getDay(),n=e.dt_txt.substring(5,10);return r.a.createElement("div",{className:"col-xs-auto mx-auto",key:t},r.a.createElement("div",{className:"text-center mt-2",style:{width:"150px",height:"225px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,n),r.a.createElement("small",null,a[t]),r.a.createElement("br",null),r.a.createElement("img",{src:"https://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:""}),r.a.createElement("p",null,A(e.main.temp),"\xb0 F"),r.a.createElement("p",null,W(e.weather[0].description)))))}))},L=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.isOpen;return r.a.createElement(b,null,function(t){for(var a=t.list,c=[],l=0;l<a.length;l+=8)c.push(a[l]);return r.a.createElement(n.Fragment,null,e&&r.a.createElement("div",{className:"card card-body bg-info"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-11 mx-auto"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h4",{className:"text-center m-0"},"5-Day Forecast"),r.a.createElement(T,{forecast:c}))))))})}}]),t}(n.Component),z={N:[348.75,11.25],NNE:[11.25,33.75],NE:[33.75,56.25],ENE:[56.25,78.75],E:[78.75,101.25],ESE:[101.25,123.75],SE:[123.75,146.25],SSE:[146.25,168.75],S:[168.75,191.25],SSW:[191.25,213.75],SW:[213.75,236.25],WSW:[236.25,258.75],W:[258.75,281.25],WNW:[281.25,303.75],NW:[303.75,326.25],NNW:[326.25,348.75]};z[Symbol.iterator]=function(){var e=this,t=Object.keys(this),a=0,n=!1;return{next:function(){return a>=t.length&&(n=!0),{value:e[t[a++]],done:n}}}};var G=function(e){var t=0;if(e>z.N[0]||e<z.N[1])return Object.keys(z)[t];var a=!0,n=!1,r=void 0;try{for(var c,l=z[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var o=c.value;if(e>o[0]&&e<o[1])return Object.keys(z)[t];t+=1}}catch(s){n=!0,r=s}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}},H=a(21),U=a.n(H),Y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.isOpen;return r.a.createElement(b,null,function(t){var a=t.list[0],c=a.weather[0].description,l=A(a.main.temp),o=A(a.main.temp_min),s=A(a.main.temp_max),i=a.main.humidity,m=(2.23694*a.wind.speed).toFixed(2),u=a.weather[0].icon,d=M(),p=G(a.wind.deg);return r.a.createElement(n.Fragment,null,e&&r.a.createElement("div",{className:"card card-body bg-secondary"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-7 mx-auto"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h4",{className:"text-center m-0 p-0"},r.a.createElement(U.a,{format:"MMMM Do YYYY"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 align-self-center"},r.a.createElement("div",{className:"card-body text-center align-self-center p-0 m-0"},r.a.createElement("h2",{className:""},r.a.createElement("strong",null,l,"\xb0 F")),r.a.createElement("p",{className:"my-0"},"Low: ",o,"\xb0 | High: ",s,"\xb0"),r.a.createElement("small",null,"As of: ",d))),r.a.createElement("div",{className:"col-md-6 align-self-center"},r.a.createElement("div",{className:"card-body align-self-center pt-0 mt-2"},r.a.createElement("img",{className:"my-0",src:"https://openweathermap.org/img/w/".concat(u,".png"),alt:""}),r.a.createElement("p",{className:"m-0"},W(c)),r.a.createElement("p",{className:"m-0"},"Humidity: ",i,"%"),r.a.createElement("p",{className:"m-0"},"Wind Speed: ",m," MPH ",p)))))))))})}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={openSections:{}},a.onClick=function(e){a.setState({openSections:Object(j.a)({},e.target.dataset.text,!a.state.openSections[e.target.dataset.text])})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({openSections:{currentForecast:!0}})}},{key:"render",value:function(){var e=this;return r.a.createElement(b,null,function(t){var a=t.city,c=t.error,l=e.state.openSections,o=l.currentForecast,s=l.todayForecast,i=l.fiveDayForecast;return r.a.createElement(n.Fragment,null,a?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"d-flex flex-row align-items-stretch text-center"},r.a.createElement("div",{className:"port-item bg-secondary text-white w-100 p-4","data-text":"currentForecast",onClick:e.onClick},r.a.createElement("span",{"data-text":"currentForecast"},"Current Weather")),r.a.createElement("div",{className:"port-item bg-warning text-white w-100 p-4","data-text":"todayForecast",onClick:e.onClick},r.a.createElement("span",{"data-text":"todayForecast"},"12-Hour Forecast")),r.a.createElement("div",{className:"port-item bg-info text-white w-100 p-4","data-text":"fiveDayForecast",onClick:e.onClick},r.a.createElement("span",{"data-text":"fiveDayForecast"},"5-Day Forecast"))),r.a.createElement(Y,{isOpen:o}),r.a.createElement(P,{isOpen:s}),r.a.createElement(L,{isOpen:i})):r.a.createElement("div",{className:"text-center"},r.a.createElement("small",{className:"text-danger text-center"},c)))})}}]),t}(n.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null,function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"mt-3",id:"main-header"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement(N,null),r.a.createElement(R,null),r.a.createElement(J,null))))))})}}]),t}(n.Component),Z=function(){return r.a.createElement("footer",{className:"footer text-center mt-5 fixed-bottom"},r.a.createElement("div",{className:"d-flex justify-content-center row-hl"},r.a.createElement("div",{className:"p-4 d-none d-sm-inline"},r.a.createElement("strong",null,"David Mai")),r.a.createElement("div",{className:"p-4"},r.a.createElement("a",{href:"http://david-mai.com/",className:"text-dark",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-globe"}))),r.a.createElement("div",{className:"p-4"},r.a.createElement("a",{href:"https://www.linkedin.com/in/nldavidmai/",className:"text-dark",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("div",{className:"p-4"},r.a.createElement("a",{href:"https://github.com/DevMai90",className:"text-dark",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"}))),r.a.createElement("div",{className:"p-4"},r.a.createElement("a",{href:"https://twitter.com/devmai90",className:"text-dark",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-twitter"})))))},q=(a(51),a(52),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement("div",{className:"App"},r.a.createElement(B,null),r.a.createElement(Z,null)))}}]),t}(n.Component));l.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.7554fe3c.chunk.js.map