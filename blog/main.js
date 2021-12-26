let x = 1 ;
    for(let li of grang.querySelectorAll('li')) {
      li.style.position = 'relative';
      x++;
    }
    let mix = 248; 
    let colic = 3; 
    let frame = grang.querySelector('ul');
    let frameElems = grang.querySelectorAll('li');
    let stats = 0; 
    grang.querySelector('.prev').onclick = function() {
      stats += mix * colic;
      stats = Math.min(stats, 0)
      frame.style.marginLeft = stats + 'px';
    };
    grang.querySelector('.next').onclick = function() {
      stats -= mix * colic;
      stats = Math.max(stats, -mix*colic);
      frame.style.marginLeft = stats + 'px';
    };
    $(document).ready(function(){
        $(".aroowww").click(function(event){
            $(".aroowww").toggleClass("active");
        });
      });
      $(document).ready(function(){
        $(".aroowww1").click(function(event){
            $(".aroowww1").toggleClass("active");
        });
      });