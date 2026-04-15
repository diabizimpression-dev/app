// Countdown timer for promo bar
(function(){
  var h=document.getElementById('cd-h'),m=document.getElementById('cd-m'),s=document.getElementById('cd-s');
  if(!h)return;
  var total=(parseInt(h.textContent,10)*3600)+(parseInt(m.textContent,10)*60)+parseInt(s.textContent,10);
  function tick(){
    if(total<=0){total=25*3600+36*35;}
    total--;
    var hh=Math.floor(total/3600),mm=Math.floor((total%3600)/60),ss=total%60;
    h.textContent=String(hh).padStart(2,'0');
    m.textContent=String(mm).padStart(2,'0');
    s.textContent=String(ss).padStart(2,'0');
  }
  setInterval(tick,1000);
})();

// Mobile menu
var hamb=document.getElementById('hamb'),nav=document.getElementById('nav');
if(hamb){hamb.addEventListener('click',function(){nav.classList.toggle('m-nav--open');});}

// Filter tabs
document.querySelectorAll('.m-filter').forEach(function(btn){
  btn.addEventListener('click',function(){
    document.querySelectorAll('.m-filter').forEach(function(b){b.classList.remove('m-filter--active');});
    btn.classList.add('m-filter--active');
  });
});

// Plan picker
document.querySelectorAll('.m-plan').forEach(function(btn){
  btn.addEventListener('click',function(){
    document.querySelectorAll('.m-plan').forEach(function(b){b.classList.remove('m-plan--active');});
    btn.classList.add('m-plan--active');
  });
});

// Meal count picker
document.querySelectorAll('.m-count').forEach(function(btn){
  btn.addEventListener('click',function(){
    document.querySelectorAll('.m-count').forEach(function(b){b.classList.remove('m-count--active');});
    btn.classList.add('m-count--active');
  });
});
