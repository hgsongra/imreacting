(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),s=(n(16),n(9)),u=n(8),l=n(1),i=n(2),m=n(4),b=n(3),d=n(5),p=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).formatedCount=function(){var e=n.props.counter.value;return 0===e?"Zero":e},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onIncrease,n=e.counter,a=e.onDelete;return r.a.createElement("div",null,r.a.createElement("span",{className:this.getBadgeClasses()},this.formatedCount()),r.a.createElement("button",{onClick:function(){return t(n)},className:"btn btn-secondary btn-sm"},"Increment"),r.a.createElement("button",{onClick:function(){return a(n.id)},className:"btn btn-danger btn-sm m-2"},"Delete"))}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}}]),t}(a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onReset,n=e.counters,a=e.onDelete,c=e.onIncrement;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-primary btn-sm m-2",onClick:t},"Reset"),n.map(function(e){return r.a.createElement(p,{key:e.id,onDelete:a,onIncrease:c,counter:e})}))}}]),t}(a.Component),f=function(e){var t=e.total;return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},"Navbar ",r.a.createElement("span",{className:"badge badge-secondary badge-pill"},t))},h=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={counters:[{id:1,value:3},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},n.incrementCounter=function(e){var t=Object(u.a)(n.state.counters),a=t.indexOf(e);t[a]=Object(s.a)({},e),t[a].value++,n.setState({counters:t})},n.resetCounters=function(){var e=n.state.counters.map(function(e){return e.value=0,e});n.setState({counters:e})},n.deleteCounter=function(e){var t=n.state.counters.filter(function(t){return t.id!==e});n.setState({counters:t})},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{total:this.state.counters.length}),r.a.createElement("main",{className:"comtainer"},r.a.createElement(v,{counters:this.state.counters,onReset:this.resetCounters,onDelete:this.deleteCounter,onIncrement:this.incrementCounter})))}}]),t}(a.Component);o.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.e34becbd.chunk.js.map