import{w as ln,c as B}from"./path-53f90ab3.js";import{ao as an,ap as H,aq as q,ar as rn,as as y,am as on,at as L,au as _,av as un,aw as t,ax as sn,ay as tn,az as fn}from"./mermaid.core-0c0ebc31.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function xn(l,h,E,z,v,A,C,a){var I=E-l,i=z-h,n=C-v,m=a-A,r=m*I-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*I,h+r*i]}function W(l,h,E,z,v,A,C){var a=l-E,I=h-z,i=(C?A:-A)/L(a*a+I*I),n=i*I,m=-i*a,r=l+n,s=h+m,f=E+n,c=z+m,F=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,T=v-A,w=r*c-f*s,O=(g<0?-1:1)*L(fn(0,T*T*R-w*w)),S=(w*g-p*O)/R,j=(-w*p-g*O)/R,P=(w*g+p*O)/R,x=(-w*p+g*O)/R,d=S-F,e=j-o,u=P-F,G=x-o;return d*d+e*e>u*u+G*G&&(S=P,j=x),{cx:S,cy:j,x01:-n,y01:-m,x11:S*(v/T-1),y11:j*(v/T-1)}}function vn(){var l=cn,h=yn,E=B(0),z=null,v=gn,A=mn,C=pn,a=null,I=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,F=un(c-f),o=c>f;if(a||(a=n=I()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(F>on-y)a.moveTo(s*H(f),s*q(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*H(c),r*q(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,R=f,T=c,w=F,O=F,S=C.apply(this,arguments)/2,j=S>y&&(z?+z.apply(this,arguments):L(r*r+s*s)),P=_(un(s-r)/2,+E.apply(this,arguments)),x=P,d=P,e,u;if(j>y){var G=sn(j/r*q(S)),M=sn(j/s*q(S));(w-=G*2)>y?(G*=o?1:-1,R+=G,T-=G):(w=0,R=T=(f+c)/2),(O-=M*2)>y?(M*=o?1:-1,p+=M,g-=M):(O=0,p=g=(f+c)/2)}var J=s*H(p),K=s*q(p),N=r*H(T),Q=r*q(T);if(P>y){var U=s*H(g),V=s*q(g),X=r*H(R),Y=r*q(R),D;if(F<an)if(D=xn(J,K,X,Y,U,V,N,Q)){var Z=J-D[0],$=K-D[1],k=U-D[0],b=V-D[1],nn=1/q(tn((Z*k+$*b)/(L(Z*Z+$*$)*L(k*k+b*b)))/2),en=L(D[0]*D[0]+D[1]*D[1]);x=_(P,(r-en)/(nn-1)),d=_(P,(s-en)/(nn+1))}else x=d=0}O>y?d>y?(e=W(X,Y,J,K,s,d,o),u=W(U,V,N,Q,s,d,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),d<P?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(J,K),a.arc(0,0,s,p,g,!o)):a.moveTo(J,K),!(r>y)||!(w>y)?a.lineTo(N,Q):x>y?(e=W(N,Q,U,V,r,-x,o),u=W(J,K,X,Y,r,-x,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),x<P?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,R,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[H(m)*n,q(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:B(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:B(+n),i):h},i.cornerRadius=function(n){return arguments.length?(E=typeof n=="function"?n:B(+n),i):E},i.padRadius=function(n){return arguments.length?(z=n==null?null:typeof n=="function"?n:B(+n),i):z},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:B(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:B(+n),i):A},i.padAngle=function(n){return arguments.length?(C=typeof n=="function"?n:B(+n),i):C},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
