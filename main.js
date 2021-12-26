let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      i++;
    }
    let width = 480; 
    let count = 3; 
    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');
    let position = 0; 
    carousel.querySelector('.prev').onclick = function() {
      position += width * count;
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };
    carousel.querySelector('.next').onclick = function() {
      position -= width * count;
      position = Math.max(position, -width*count);
      list.style.marginLeft = position + 'px';
    };
    $(document).ready(function(){
      $(".clast").click(function(event){
          $(".menu_click, .clast").toggleClass("active");
      });
   });
   $(document).ready(function(){
    $(".datepick").click(function(event){
        $(".menu_click1, .datepick").toggleClass("active");
    });
 });
 $(document).ready(function(){
  $(".datepusher").click(function(event){
      $(".menu_click2, .datepusher").toggleClass("active");
  });
});
 $(document).ready(function(){
  $(".datepick1").click(function(event){
      $(".menu_click4, .datepick1").toggleClass("active");
  });
});
$(document).ready(function(){
  $(".datepusher1").click(function(event){
      $(".menu_click3, .datepusher1").toggleClass("active");
  });
});
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
    let y = 1 ;
    for(let li of glitch.querySelectorAll('li')) {
      li.style.position = 'relative';
      y++;
    }
    let lut = 300; 
    let colt = 3; 
    let frume = glitch.querySelector('ul');
    let frumeElems = glitch.querySelectorAll('li');
    let stat = 0; 
    glitch.querySelector('.prev').onclick = function() {
      stat += lut * colt;
      stat = Math.min(stat, 0)
      frume.style.marginLeft = stat + 'px';
    };
    glitch.querySelector('.next').onclick = function() {
      stat -= lut * colt;
      stat = Math.max(stat, -lut*(frumeElems.length - count));
      frume.style.marginLeft = stat + 'px';
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
    let t = 1 ;
    for(let li of parta.querySelectorAll('li')) {
      li.style.position = 'relative';
      t++;
    }
    let luck = 174; 
    let com = 6; 
    let frul = parta.querySelector('ul');
    let frulElems = parta.querySelectorAll('li');
    let stof = 0; 
    parta.querySelector('.prev').onclick = function() {
      stof += luck * com;
      stof = Math.min(stof, 0)
      frul.style.marginLeft = stof + 'px';
    };
    parta.querySelector('.next').onclick = function() {
      stof -= luck * com;
      stof = Math.max(stof, -luck*(frulElems.length - com));
      frul.style.marginLeft = stof + 'px';
    };
    $(document).ready(function(){
      $(".aroowww2").click(function(event){
          $(".aroowww2").toggleClass("active");
      });
    });
    $(document).ready(function(){
      $(".aroowww3").click(function(event){
          $(".aroowww3").toggleClass("active");
      });
    });

    