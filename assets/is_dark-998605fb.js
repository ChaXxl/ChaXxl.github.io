import{aH as c,aI as a}from"./mermaid.core-bd2b5ebc.js";const e=n=>{const{r,g:t,b:o}=c.parse(n),s=.2126*a.channel.toLinear(r)+.7152*a.channel.toLinear(t)+.0722*a.channel.toLinear(o);return a.lang.round(s)},i=e,l=n=>i(n)>=.5,u=l,h=n=>!u(n),L=h;export{L as i};
