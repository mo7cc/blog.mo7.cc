function p(){document.addEventListener("touchmove",function(i){i.preventDefault()});var g=document.body,t=document.createElement("canvas");t.id="bgCanvas",t.style.zIndex="3",t.style.width="100vw",t.style.height="100vh",t.style.position="fixed",t.style.left="0",t.style.top="0",g.appendChild(t);var r=document.getElementById("bgCanvas"),e=r.getContext("2d"),d=window.devicePixelRatio||1,h=window.innerWidth,a=window.innerHeight,l=90,o,s=Math,c=0,u=s.PI*2,v=s.cos,x=s.random;r.width=h*d,r.height=a*d,e.scale(d,d),e.globalAlpha=.6;function y(){for(e.clearRect(0,0,h,a),o=[{x:0,y:a*.7+l},{x:0,y:a*.7-l}];o[1].x<h+l;)b(o[0],o[1])}function b(i,n){e.beginPath(),e.moveTo(i.x,i.y),e.lineTo(n.x,n.y);var m=n.x+(x()*2-.25)*l,w=f(n.y);e.lineTo(m,w),e.closePath(),c-=u/-50,e.fillStyle="#"+(v(c)*127+128<<16|v(c+u/3)*127+128<<8|v(c+u/3*2)*127+128).toString(16),e.fill(),o[0]=o[1],o[1]={x:m,y:w}}function f(i){var n=i+(x()*2-1.1)*l;return n>a||n<0?f(i):n}document.onclick=y,document.ontouchstart=y,y()}export{p as default};