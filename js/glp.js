// Weight slider interaction
(function(){
  var input = document.getElementById('gw-input');
  var current = document.getElementById('gw-current');
  var loss = document.getElementById('gw-loss');
  if(input && current && loss){
    var update = function(){
      var v = parseInt(input.value,10);
      current.textContent = v + ' lbs';
      loss.textContent = Math.round(v * 0.23) + ' lbs';
      var min = parseInt(input.min,10), max = parseInt(input.max,10);
      var pct = ((v - min) / (max - min)) * 100;
      input.style.background = 'linear-gradient(90deg,var(--yellow-500) 0%,var(--yellow-500) '+pct+'%,var(--cream-200) '+pct+'%)';
    };
    input.addEventListener('input', update);
    update();
  }

  // FAQ: close siblings on open (single-open accordion)
  var items = document.querySelectorAll('.g-faq__item');
  items.forEach(function(el){
    el.addEventListener('toggle', function(){
      if(el.open){
        items.forEach(function(o){ if(o!==el) o.open = false; });
      }
    });
  });
})();
