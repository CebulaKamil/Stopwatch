$(function(){const t=$("#start"),e=$("#resume"),n=$("#stop"),o=$("#reset"),i=$("#lap");let c,l,s,a,d,p,f,h=!1,r=0,u=0,v=0;const m=function(t){return t<10?"0"+t:t},x=function(){h=!0,t.hide(),n.show(),i.show(),c=setInterval(function(){6e5==++r&&(r=0),6e5==++u&&(u=0),l=Math.floor(r/6e3),s=Math.floor(r%6e3/100),a=r%6e3%100,$("#time-minute").text(m(l)),$("#time-second").text(m(s)),$("#time-centisecond").text(m(a)),d=Math.floor(r/6e3),p=Math.floor(u%6e3/100),f=u%6e3%100,$("#lap-minute").text(m(d)),$("#lap-second").text(m(p)),$("#lap-centisecond").text(m(f))},10)};t.click(x),n.click(function(){n.hide(),i.hide(),e.show(),o.show(),clearInterval(c),h=!1}),i.click(function(){1==h&&(v++,u=0,function(){const t="<div class='div-lop'><div class='title-lop'>Lap: "+v+"</div><div class='lap-details'><span>"+m(d)+"</span> <span>"+m(p)+"</span> <span>"+m(f)+"</span></div></div>";$(t).appendTo("#col-lop")}())}),e.click(function(){e.hide(),o.hide(),x(),h=!0}),o.click(function(){location.reload()})});