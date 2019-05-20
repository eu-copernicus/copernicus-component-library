/* Replace all SVG images with inline SVG */
$(function() {

    // img .svg with ccl-svg class to SVG in DOM
    $('img.ccl-svg').each(function(){
      var $img = $(this);
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

    });

    //builds  dropdown. toogle the next element
    $('.ccl-expandable__button').click(function(){
      $(this).attr('aria-expanded', function(index, attr){
        return attr == 'true' ? 'false' : 'true';
      });
    })

    //builds nice select dropdown

    
  

    $('.ccl-select').each(function(){
      $(this).hide().wrap('<div class="ccl-select-container"></div>');
      var $Selected=$('<div></div>')
      .addClass('ccl-select-selected')
      .text($(this).val())
      .click(function(){
       
        $(this).next('.ccl-select-items').toggleClass("ccl-select-hide");
        $(this).toggleClass("ccl-select-arrow-active");
      })



      var $options=$('<div></div>').addClass('ccl-select-items ccl-select-hide'); 
      $('option',this).each(function(index,el){
        $option=$('<div></div>').text($(el).text()).click(function(){
          $elParent=$(el).parents('.ccl-select-container')
          $('select',$elParent)[0].selectedIndex = index;
          $('.ccl-select-selected',$elParent).text($(el).text());
          $('.ccl-same-as-selected',$(el).parent()).removeAttr('class')
          $(el).addClass('ccl-same-as-selected');
        });

        $options.append($option);
      })
      $options.insertAfter($(this));
      $Selected.insertAfter($(this));
      
    });
    /*if the user clicks anywhere outside the select box, then close all select boxes:*/
 
  });