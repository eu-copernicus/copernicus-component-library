 //builds nice select dropdown

 function buildSelect(elSelect,i){


  var $wrapper=$('<div class="ccl-select-container"></div>')
  if ($(elSelect).hasClass('ccl-select-reverse')){
    $wrapper.addClass('ccl-select-container-reverse');
  }
  $(elSelect).hide().wrap($wrapper);
  var $Selected=$('<div></div>')
  .addClass('ccl-select-selected')
  .attr('id','ccl-select-id--'+i)
  .text($(elSelect).children('option:selected').text())
  .click(function(){
    closeAllSelect(this);
    $(this).next('.ccl-select-items').toggleClass("ccl-select-hide");
    $(this).toggleClass("ccl-select-arrow-active");
  })



  var $options=$('<div></div>').addClass('ccl-select-items ccl-select-hide'); 
  $('option',elSelect).each(function(index,el){
    $option=$('<div></div>').text($(el).text()).click(function(){
      $elParent=$(el).parents('.ccl-select-container')
      $('select',$elParent)[0].selectedIndex = index;
      $('select',$elParent).trigger('change');
      $('.ccl-select-selected',$elParent).text($(el).text());
      $('.ccl-same-as-selected',$(el).parent()).removeAttr('class')
      $(el).addClass('ccl-same-as-selected');
    });

    $options.append($option);
  })
  $options.insertAfter($(elSelect));
  $Selected.insertAfter($(elSelect));
}

function closeAllSelect(elmnt) {
  
  if ($(elmnt).hasClass('ccl-select-selected')){
    $('.ccl-select-selected').each(function(){
      if ($(this).attr('id') != $(elmnt).attr('id')){
        $(this).removeClass('ccl-select-arrow-active');
        $('.ccl-select-items',$(this).parent()).addClass('ccl-select-hide');
      }
    })
  }else{
    $('.ccl-select-selected').removeClass('ccl-select-arrow-active');
    $('.ccl-select-items').addClass('ccl-select-hide');
  }
}

/* Replace all SVG images with inline SVG */
function imgToSSVG(img) {
  var $img = img;
      var imgURL = $img.attr('src');
      var imgID =  ($img.attr('id') === undefined) ? 'ccl-svg--'+imgURL.replace(/[^A-Z0-9]+/ig, "_") : imgID; ;          
      var imgClass = $img.attr('class');
      var imgTitle = $img.attr('title');       

      var imgURL = $img.attr('src');

      $.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                  $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                  $svg = $svg.attr('class', imgClass+' ccl-svg--processed');
                }

                // Add replaced image's title to the new SVG
                if(typeof imgTitle !== 'undefined') {
                  $svg = $svg.attr('title', imgTitle);
                }

                // Add replaced image's title to the new SVG
                


                function makeSVG(tag, attrs) {
                  var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
                  for (var k in attrs)
                    el.setAttribute(k, attrs[k]);
                  return el;
                }                    



                //limit classes scope to the current svg
                $svg.find('style').text($svg.find('style').text().replace(/\.st/g,'#'+imgID+' .st'));
                $svg.find('style').text($svg.find('style').text().replace(/\.cls/g,'#'+imgID+' .cls'));

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

              }, 'xml');

}

// build language selector
 function languageSelector(languageBlock){
 
          var currentLang =$('.ccl-language-list a.is-active',languageBlock).text();
          currentLang=currentLang.replace(/(^.+)\(([A-Z]+)\)/g,'<span class="ccl-active-lang-label">$1</span><span> (</span>$2<span>)</span>')

          $('<span></span>').addClass('ccl-active-lang').html(currentLang).prependTo($(languageBlock));          
          $('.ccl-language-list',languageBlock).css({"min-width": $('.ccl-active-lang',languageBlock).outerWidth(  )});
          
          $(languageBlock).hover(              
            function(){
              $('.ccl-main-menu').removeClass('ccl-collapsible-open');  
              $('.ccl-language-list-container',this).show();
            }
            , 
            function(){
                
              $('.ccl-language-list-container',this).hide();
            }

             )
          $(languageBlock).click(function(){
            $('.ccl-main-menu').removeClass('ccl-collapsible-open'); 
            $('.ccl-language-list-container',this).toogle();
          })

 }
   

$(function() {

    // build language selector
    languageSelector($("#block-languageswitcher"));

    // img .svg with ccl-svg class to SVG in DOM
    $('img.ccl-svg').each(function(){
      imgToSSVG($(this))
    });

    //builds  dropdown. toogle the next element
    $('.ccl-expandable__button').click(function(){
      $(this).attr('aria-expanded', function(index, attr){
        return attr == 'true' ? 'false' : 'true';
      });
    })

    //collapsible  nav
    $('.ccl-main-menu-collapse-button').click(function(){


      if($('.ccl-main-menu').hasClass('ccl-collapsible-open')){
        $('.ccl-main-menu').slideUp('fast',function(){
          $(this).removeClass('ccl-collapsible-open').removeAttr('style');

        });
        
      }else{
        $('.ccl-main-menu').slideDown('fast',function(){
          $(this).addClass('ccl-collapsible-open').removeAttr('style');
        });
        
      }
    })

    $('.ccl-header-menu-tools').clone().addClass('ccl-collapsible-toolmenu').appendTo($('.ccl-main-menu'));
    //collapsible search
    $('.ccl-search-collapse-button').click(function(){
      $('.ccl-header-search').css('display','flex').mouseleave(function(){
        $(this).removeAttr('style');
      });

    })

    $('.ccl-select').each(function(index,el){
      buildSelect(el,index);
    });
    /*if the user clicks anywhere outside the select box, then close all select boxes:*/
    $(document).click(function(event){
      closeAllSelect(event.target);
    })


  $('.ccl-banner-top-container-slider').slick({
    autoplay:true,
    autoplaySpeed:3000
  });

$('.ccl-list-carousel').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }   
  ]
});

  });