(()=>{"use strict";var e,n,r,a={13:(e,n)=>{n.__esModule=!0,n.usersInfoArray=void 0,n.usersInfoArray=[{userid:"127e4567-e89b-12d3-a458-426614174000",name:"John",birthdate:"1982-02-17T21:00:00.000Z",age:40,organization:{name:"Amazon",position:"General manager"}},{userid:"127e4567-e89a-12f3-a458-327395154000",name:"Anna",birthdate:"1988-02-17T21:00:00.000Z",age:34,organization:{name:"Amazon",position:"Manager"}}]},822:(e,n)=>{n.__esModule=!0,n.usersArray=void 0,n.usersArray=[{userid:"127e4567-e89b-12d3-a458-426614174000",name:"John",gender:"man"},{userid:"127e4567-e89a-12f3-a458-327395154000",name:"Anna",gender:"woman"}]}},o={};function s(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return a[e](r,r.exports,s),r.exports}e=s(822),n=s(13),r=function(e){var r=e.map((function(e){return{name:e.name,gender:e.gender}}));console.log(r);for(var a=n.usersInfoArray.map((function(e){return{name:e.name,position:e.organization.position,age:e.age,gender:""}})),o=0;o<a.length;o++)for(var s=a[o],i=0;i<r.length;i++)s.gender=r[o].gender;return a}(e.usersArray),console.log("userPositions",r)})();