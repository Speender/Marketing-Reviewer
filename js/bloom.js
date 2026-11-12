/* Flower message: ASCII-style lilies that grow while the message types. */
(function(){
'use strict';
var MSG = "Good luck, lovee! You can do this! Always remember that God is with you, and He will guide you every step of the way. Just pray, trust His plans, believe in yourself, and give it your very best. Don't let nervousness or doubt get the best of you. You've worked hard to get here, and I know you're capable of doing great things.\n\nWhatever happens, be proud of yourself for trying and giving your all. Take a deep breath, stay calm, and just focus on what you can do. Don't put too much pressure on yourself. I believe in you, and I'll always be cheering you on. You've got this, lovee! Do your best and leave the rest to God. I love you!";

var btn = document.getElementById('flowerbtn');
if(!btn) return;
var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var S = null; /* current session state */

/* Composition in a 0..1 box (u right, v down), modeled on the reference bouquet. */
var FLOWERS = [ /* back to front */
  {u:.48, v:.19, r:.185, c:['#B5552F','#E07B4C'], rot:8,  start:.56},  /* orange, top */
  {u:.21, v:.34, r:.170, c:['#9E78AC','#C9A3D4'], rot:-14, start:.42}, /* lavender, left */
  {u:.76, v:.37, r:.155, c:['#ADA846','#DCD77A'], rot:20, start:.48},  /* yellow, right */
  {u:.31, v:.57, r:.175, c:['#9A3F98','#CC6CC8'], rot:-4, start:.26},  /* magenta, lower left */
  {u:.65, v:.58, r:.165, c:['#9C9C9C','#DADADA'], rot:26, start:.33}   /* white, lower right */
];
var STEMS = [ /* from flower centre to the ground, with a control point */
  {f:0, ctrl:[.49,.60], end:[.49,1]},
  {f:1, ctrl:[.30,.78], end:[.43,1]},
  {f:2, ctrl:[.70,.78], end:[.56,1]},
  {f:3, ctrl:[.37,.86], end:[.46,1]},
  {f:4, ctrl:[.60,.86], end:[.53,1]}
];
var LEAVES = [
  {a:[.42,1], c:[.22,.92], b:[.10,.66], w:.050},
  {a:[.45,1], c:[.36,.86], b:[.27,.72], w:.032},
  {a:[.55,1], c:[.76,.90], b:[.88,.63], w:.050},
  {a:[.52,1], c:[.62,.86], b:[.70,.70], w:.032},
  {a:[.48,1], c:[.44,.88], b:[.40,.78], w:.022}
];
var GLYPHS = '@@@@##%&8$*';
var STEM_COL = ['#5E9A6C','#7DB88A'];
var STAMEN = '#F1EEE8';

function quad(p0,p1,p2,t){ var m=1-t; return [m*m*p0[0]+2*m*t*p1[0]+t*t*p2[0], m*m*p0[1]+2*m*t*p1[1]+t*t*p2[1]]; }
function mix(a,b,t){ function h(x,i){return parseInt(x.substr(i,2),16);} var r=[1,3,5].map(function(i){ return Math.round(h(a,i)+(h(b,i)-h(a,i))*t); }); return 'rgb('+r.join(',')+')'; }
function glyph(){ return GLYPHS.charAt(Math.floor(Math.random()*GLYPHS.length)); }
function sampleCurve(p0,p1,p2,n){ var pts=[]; for(var i=0;i<=n;i++) pts.push(quad(p0,p1,p2,i/n)); return pts; }
function nearest(pts,x,y){ var best=1e9, bi=0; for(var i=0;i<pts.length;i++){ var dx=pts[i][0]-x, dy=pts[i][1]-y, d=dx*dx+dy*dy; if(d<best){best=d;bi=i;} } return {d:Math.sqrt(best), s:bi/(pts.length-1)}; }

/* Build the character grid for a bouquet box (bx,by,bw,bh in CSS px). */
function buildCells(bx,by,bw,bh){
  var cw = Math.max(5, Math.min(8.5, bw/96)), ch = cw*1.38, fs = ch*1.02;
  var cols = Math.floor(bw/cw), rows = Math.floor(bh/ch);
  function P(u,v){ return [bx+u*bw, by+v*bh]; }
  var flowers = FLOWERS.map(function(f){ var pk=[]; for(var i=0;i<6;i++) pk.push(.86+Math.random()*.2); return {x:bx+f.u*bw, y:by+f.v*bh, R:f.r*bw, c:f.c, rot:f.rot, start:f.start, pk:pk}; });
  var stems = STEMS.map(function(s){ var f=flowers[s.f]; return {pts:sampleCurve([f.x,f.y], P(s.ctrl[0],s.ctrl[1]), P(s.end[0],s.end[1]), 60), until:f.start}; });
  var leaves = LEAVES.map(function(l){ return {pts:sampleCurve(P(l.a[0],l.a[1]), P(l.c[0],l.c[1]), P(l.b[0],l.b[1]), 60), w:l.w*bw}; });
  var cells=[];
  for(var r=0;r<rows;r++){
    for(var c=0;c<cols;c++){
      var x=bx+(c+.5)*cw, y=by+(r+.5)*ch, cell=null;
      /* flowers, front to back */
      for(var k=flowers.length-1;k>=0 && !cell;k--){
        var f=flowers[k], dx=x-f.x, dy=(y-f.y)/0.9, d=Math.sqrt(dx*dx+dy*dy);
        if(d>f.R*1.1) continue;
        var a=Math.atan2(dy,dx)*180/Math.PI - f.rot - 30;
        var aa=((a%360)+360)%360, idx=Math.floor((aa+30)/60)%6, m=((aa+30)%60)-30;
        var edge=f.R*f.pk[idx]*(0.36+0.64*Math.pow(1-Math.abs(m)/30,1.3));
        if(d>edge) continue;
        var perp=Math.abs(Math.sin(m*Math.PI/180))*d, stamen=(perp<cw*0.55 && d<f.R*0.6) || d<cw*1.1;
        var shade=1-Math.abs(m)/30;
        cell={x:x,y:y,col: stamen?STAMEN:mix(f.c[0],f.c[1],Math.min(1,shade*0.9+Math.random()*0.25)),
              t:f.start+0.40*Math.pow(d/(f.R*1.05),0.85)+Math.random()*0.012};
      }
      /* leaves */
      for(var j=0;j<leaves.length && !cell;j++){
        var L=leaves[j], n=nearest(L.pts,x,y), w=L.w*Math.pow(Math.sin(Math.PI*Math.min(.98,n.s+.02)),0.75);
        if(n.d<=Math.max(cw*0.6,w)) cell={x:x,y:y,col:mix(STEM_COL[0],STEM_COL[1],Math.random()*.7), t:0.04+0.30*n.s+Math.random()*0.01};
      }
      /* stems (grow from the ground up to their flower) */
      for(var s=0;s<stems.length && !cell;s++){
        var st=stems[s], q=nearest(st.pts,x,y);
        if(q.d<=cw*0.95) cell={x:x,y:y,col:mix(STEM_COL[0],STEM_COL[1],Math.random()*.6), t:st.until*(1-q.s)*0.98};
      }
      if(cell){ cell.g=glyph(); cells.push(cell); }
    }
  }
  cells.sort(function(a,b){ return a.t-b.t; });
  return {cells:cells, cw:cw, ch:ch, fs:fs};
}

function layout(W,H){
  var wide = W >= 860 && W/H > 1.05;
  if(wide){
    var bh=H*0.9, bw=Math.min(bh*0.87, W*0.48), bx=W*0.26-bw/2; if(bx<12) bx=12;
    var nx=Math.max(bx+bw+24, W*0.52), nw=Math.min(560, W-nx-40);
    return {box:[bx,(H-bh)/2+H*0.02,bw,bh], note:{left:nx, top:H*0.14, width:nw, maxHeight:H*0.72}};
  }
  var bh2=H*0.52, bw2=Math.min(W*0.96, bh2*0.87);
  return {box:[(W-bw2)/2, H-bh2-6, bw2, bh2], note:{left:W*0.04, top:Math.max(64,H*0.08), width:W*0.92, maxHeight:H*0.40}};
}

function open(){
  if(S) return;
  var last=document.activeElement;
  var ov=document.createElement('div');
  ov.className='bloom'; ov.setAttribute('role','dialog'); ov.setAttribute('aria-modal','true'); ov.setAttribute('aria-label','A good luck message');
  ov.innerHTML='<canvas aria-hidden="true"></canvas>'+
    '<div class="bloom-note" tabindex="0"><div class="lbl">For you &hearts;</div><p class="bloom-msg"><span class="bloom-t"></span><span class="bloom-caret"></span></p><div class="bloom-hint">Tap the message to show it all</div><button class="bloom-again" type="button" hidden>Watch again</button></div>'+
    '<button class="bloom-x" type="button" aria-label="Exit the flower message">&#10005; Exit</button>';
  var stars=document.createDocumentFragment();
  for(var i=0;i<70;i++){ var s=document.createElement('i'); s.className='bloom-star'; s.style.left=(Math.random()*100)+'%'; s.style.top=(Math.random()*100)+'%'; s.style.setProperty('--d',(2.5+Math.random()*4)+'s'); s.style.setProperty('--dl',(-Math.random()*5)+'s'); if(Math.random()<.2){ s.style.width=s.style.height='3px'; } stars.appendChild(s); }
  ov.insertBefore(stars, ov.firstChild);
  document.body.appendChild(ov);
  document.body.style.overflow='hidden';
  var cv=ov.querySelector('canvas'), ctx=cv.getContext('2d'), note=ov.querySelector('.bloom-note'), out=ov.querySelector('.bloom-t'),
      caret=ov.querySelector('.bloom-caret'), hint=ov.querySelector('.bloom-hint'), again=ov.querySelector('.bloom-again'), xb=ov.querySelector('.bloom-x');
  S={ov:ov, last:last, timers:[], raf:0, typed:0, target:0, shown:0, grid:null, drawn:0, flash:[], done:false};

  function size(){
    var W=window.innerWidth, H=window.innerHeight, dpr=Math.min(2, window.devicePixelRatio||1);
    cv.width=Math.round(W*dpr); cv.height=Math.round(H*dpr); ctx.setTransform(dpr,0,0,dpr,0,0);
    var L=layout(W,H), n=L.note;
    note.style.left=n.left+'px'; note.style.top=n.top+'px'; note.style.width=n.width+'px'; note.style.maxHeight=n.maxHeight+'px';
    S.grid=buildCells(L.box[0],L.box[1],L.box[2],L.box[3]); S.drawn=0; S.flash=[];
    ctx.clearRect(0,0,W,H);
    ctx.font=S.grid.fs.toFixed(1)+'px "IBM Plex Mono", Consolas, monospace'; ctx.textBaseline='middle'; ctx.textAlign='center';
  }
  function drawCell(c, col){ var g=S.grid; ctx.clearRect(c.x-g.cw/2, c.y-g.ch/2, g.cw, g.ch); ctx.fillStyle=col||c.col; ctx.fillText(c.g, c.x, c.y); }
  function frame(){
    if(!S) return;
    S.shown += (S.target - S.shown) * 0.06;
    if(S.target>=1 && S.shown>0.995) S.shown=1;
    var cells=S.grid.cells, now=performance.now();
    /* newly grown characters flash warm white, then settle into their colour */
    while(S.flash.length && now-S.flash[0].at>240){ drawCell(S.flash.shift().c); }
    while(S.drawn<cells.length && cells[S.drawn].t<=S.shown){ var c=cells[S.drawn]; drawCell(c, '#FFF7EC'); S.flash.push({c:c, at:now}); S.drawn++; }
    /* shimmer: a few grown characters change glyph */
    for(var k=0;k<5 && S.drawn>0;k++){ var r=cells[Math.floor(Math.random()*S.drawn)]; r.g=glyph(); drawCell(r); }
    S.raf=requestAnimationFrame(frame);
  }
  function setProgress(){ S.target = S.typed/MSG.length; }
  function finish(){
    if(!S || S.done) return;
    S.done=true; S.typed=MSG.length; out.textContent=MSG; setProgress(); S.target=1;
    hint.hidden=true; again.hidden=false; note.scrollTop=0;
    hearts();
  }
  function step(){
    if(!S || S.done) return;
    S.typed++; out.textContent=MSG.slice(0,S.typed); setProgress();
    if(note.scrollHeight>note.clientHeight) note.scrollTop=note.scrollHeight;
    if(S.typed>=MSG.length){ finish(); return; }
    var ch=MSG.charAt(S.typed-1), d = ch==='\n' ? 420 : (/[.!]/.test(ch) ? 360 : (ch===',' ? 180 : 38+Math.random()*34));
    S.timers.push(setTimeout(step, d));
  }
  function hearts(){
    if(reduce) return;
    for(var i=0;i<16;i++){ (function(i){ S.timers.push(setTimeout(function(){ if(!S) return; var h=document.createElement('span'); h.className='bloom-heart'; h.textContent='♥';
      var r=note.getBoundingClientRect(); h.style.left=(r.left+Math.random()*r.width)+'px'; h.style.top=(r.bottom-10)+'px';
      h.style.setProperty('--dx',(Math.random()*120-60)+'px'); h.style.setProperty('--s',(14+Math.random()*16)+'px'); h.style.setProperty('--d',(2.8+Math.random()*1.8)+'s');
      ov.appendChild(h); setTimeout(function(){ h.remove(); }, 5000); }, i*160)); })(i); }
  }
  function close(){
    if(!S) return;
    var st=S; S=null;
    cancelAnimationFrame(st.raf); st.timers.forEach(clearTimeout);
    window.removeEventListener('resize', onResize); document.removeEventListener('keydown', onKey);
    st.ov.classList.add('out');
    setTimeout(function(){ st.ov.remove(); }, reduce?0:450);
    document.body.style.overflow='';
    if(st.last && st.last.focus) st.last.focus();
  }
  function onKey(e){
    if(e.key==='Escape'){ e.preventDefault(); close(); }
    else if(e.key==='Tab'){ var f=[note, xb].concat(again.hidden?[]:[again]); var i=f.indexOf(document.activeElement); e.preventDefault(); f[(i+(e.shiftKey?f.length-1:1))%f.length].focus(); }
  }
  var rt=0; function onResize(){ clearTimeout(rt); rt=setTimeout(function(){ if(S) size(); }, 150); }

  xb.addEventListener('click', close);
  note.addEventListener('click', function(e){ if(e.target===again) return; finish(); });
  note.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); finish(); } });
  again.addEventListener('click', function(e){ e.stopPropagation(); close(); setTimeout(open, reduce?0:480); });
  window.addEventListener('resize', onResize);
  document.addEventListener('keydown', onKey);

  size();
  xb.focus();
  if(reduce){ finish(); S.shown=1; }
  else { S.timers.push(setTimeout(step, 1200)); }
  frame();
}

btn.addEventListener('click', open);
})();
