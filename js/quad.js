// QUAD landing page — FAQ accordion
(function(){
  document.querySelectorAll('.q-acc__btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var item = btn.closest('.q-acc__item');
      var open = item.classList.contains('is-open');
      // Close all
      document.querySelectorAll('.q-acc__item').forEach(function(i){ i.classList.remove('is-open'); });
      if(!open) item.classList.add('is-open');
    });
  });
})();
