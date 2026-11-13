// Sample only the highlighted route, then favor a nearby panel with least occlusion.
export function placePopover(layout,route,anchor,radius,w,h){
 const scale=layout.bw/layout.mapW,toScreen=([x,y])=>[layout.bx+x*scale,layout.by+y*scale],center=toScreen(anchor),samples=[];
 for(let i=1;i<route.length;i++){const a=route[i-1],b=route[i],steps=Math.ceil(Math.hypot(b[0]-a[0],b[1]-a[1])/8);for(let k=0;k<=steps;k++){const t=k/steps,p=[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t];if(Math.hypot(p[0]-anchor[0],p[1]-anchor[1])<=radius+6)samples.push(toScreen(p));}}
 const minY=112,maxY=Math.max(minY,layout.dockY-h-12),maxX=layout.W-w-12,clamp=(v,a,b)=>Math.max(a,Math.min(v,b));
 const xs=[12,maxX,center[0]-w-60,center[0]+60],ys=[minY,maxY,center[1]-h/2,center[1]-h-55,center[1]+55];
 for(let x=12;x<=maxX;x+=80)xs.push(x);for(let y=minY;y<=maxY;y+=80)ys.push(y);
 let best;for(const rawX of xs)for(const rawY of ys){const x=clamp(rawX,12,maxX),y=clamp(rawY,minY,maxY),inside=([px,py],pad=14)=>px>x-pad&&px<x+w+pad&&py>y-pad&&py<y+h+pad,hidden=samples.filter(p=>inside(p)).length,coverAnchor=inside(center,45),distance=Math.hypot(x+w/2-center[0],y+h/2-center[1]),score=hidden*10000+(coverAnchor?1000000:0)+distance;if(!best||score<best.score)best={x,y,score,hidden};}
 return best;
}
