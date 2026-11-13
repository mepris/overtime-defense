/** Illustrated Canvas loading screen. Progress counts decoded required assets, not bytes. */
export class LoadingScreen {
 constructor(stage,background,layer,assets,onEnter,onRetry){this.stage=stage;this.background=background;this.layer=layer;this.assets=assets;this.onEnter=onEnter;this.onRetry=onRetry;this.state={ready:0,total:12,status:'正在唤醒园区…',failed:false,preview:false};}
 draw(layout){const K=window.Konva,{W,H}=layout,L=this.layer,S=this.state;this.background.destroyChildren();L.destroyChildren();this.background.add(new K.Rect({width:W,height:H,fill:'#f7efd9',listening:false}));this.background.add(new K.Rect({width:W,height:H,fillRadialGradientStartPoint:{x:W*.5,y:H*.4},fillRadialGradientEndPoint:{x:W*.5,y:H*.4},fillRadialGradientStartRadius:20,fillRadialGradientEndRadius:Math.max(W,H)*.65,fillRadialGradientColorStops:[0,'#fffdf000',1,'#d5bd8133'],listening:false}));
 const text=(value,x,y,w,size,color='#68775b',bold=false)=>{L.add(new K.Text({x,y,width:w,text:value,fontSize:size,fontFamily:'system-ui, PingFang SC, sans-serif',fontStyle:bold?'bold':'normal',align:'center',lineHeight:1.6,fill:color,listening:false}));};
 const image=(key,x,y,w,h)=>{if(this.assets[key])L.add(new K.Image({image:this.assets[key],x,y,width:w,height:h,listening:false}));};
 const portrait=H>W*.9;let lx,ly,lw,ax,ay,aw,px,py,pw;
 if(portrait){aw=Math.min(W*.94,1030);lw=aw*.78;const groupHeight=lw*.67+aw*2/3+194,top=Math.max(45,(H-groupHeight)*.36);lx=(W-lw)/2;ly=top;ax=(W-aw)/2;ay=top+lw*.62+24;px=W*.22;pw=W*.56;py=ay+aw*2/3+32;}
 else{lw=Math.min(W*.42,580);lx=W*.035;ly=H*.14;aw=Math.min(W*.61,H*1.24);ax=W-aw-12;ay=(H-aw*2/3)/2-12;px=lx+lw*.12;pw=lw*.76;py=Math.min(H-150,ly+lw*2/3+110);}
 image('loading-art',ax,ay,aw,aw*2/3);image('loading-logo',lx,ly,lw,lw*2/3);
 if(!this.assets['loading-logo'])text('保卫下班',lx,ly+lw*.25,lw,48,'#244b36',true);
 const tagY=portrait?ay-38:ly+lw*.64;text('把夜晚，留给生活。',portrait?0:lx,tagY,portrait?W:lw,portrait?23:20,'#526947',true);
 const ratio=Math.min(1,S.ready/S.total);text(S.failed?'园区暂时没有准备好':S.status,px-30,py-43,pw+60,16,'#435a3e',true);
 L.add(new K.Rect({x:px,y:py,width:pw,height:12,fill:'#e1d7b5',cornerRadius:6,listening:false}));if(ratio>0)L.add(new K.Rect({x:px,y:py,width:Math.max(12,pw*ratio),height:12,fill:'#6b8950',cornerRadius:6,listening:false}));
 text(S.failed?'网络连接未完成，可以重试':`素材就绪 ${S.ready} / ${S.total}   ·   ${Math.round(ratio*100)}%`,px,py+24,pw,12,'#899372');
 text('不同的职能，同一个目标：准点下班。',px-80,py+59,pw+160,13,'#9b9b7a');
 if(S.failed||S.preview){const x=px+pw*.15,y=py+99,w=pw*.7;const g=new K.Group({x,y});g.add(new K.Rect({width:w,height:42,cornerRadius:9,fill:'#345d3d'}));g.add(new K.Text({x:0,y:12,width:w,text:S.failed?'重新加载':S.ready===S.total?'进入园区 →':'正在准备…',fontSize:14,fontFamily:'system-ui, sans-serif',align:'center',fill:'#fff4d9',listening:false}));g.on('click tap',()=>{if(S.failed)this.onRetry();else if(S.ready===S.total)this.onEnter();});L.add(g);}
 text('OFFICE DEFENSE CLUB  /  下班守护局',0,H-41,W,10,'#929e7d');this.background.draw();L.draw();
 }
}
