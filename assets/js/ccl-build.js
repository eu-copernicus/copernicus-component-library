$(function() {

	//Build Menu
	$(".demo-site-nav > ul").addClass('demo-side-navigation__root');
	$(".demo-site-nav > ul ul").addClass('demo-side-navigation__group');
	$(".demo-site-nav li").addClass('demo-side-navigation__item');
	$(".demo-site-nav a").each(function(){
		$(this).addClass('demo-side-navigation__link');
		if ($(this).next('ul').length){
			$(this).addClass('demo-expandable__button').attr('aria-expanded','false');
		}
		if (window.location.href.indexOf($(this).attr('href')) >= 0 && $(this).attr('href') != "#"){			
			$(this).addClass('demo-side-navigation__active').parents('li').children('.demo-expandable__button').attr('aria-expanded','true');
		}
		
	});

	$(".demo-expandable__button").click(function(){

		dropDownRoot=$(this).parents('ul.demo-side-navigation__root');			
		$("a.demo-expandable__button[aria-expanded='true']",dropDownRoot).each(function(){
			$(this).addClass('demo-expandable__toclose');						
		})
		$(this).parents('li').children('.demo-expandable__toclose').removeClass('demo-expandable__toclose');

		$('.demo-expandable__toclose').each(function(){			
			$(this).next().slideUp('fast', function() {
				$(this).prev().removeClass('demo-expandable__toclose').attr('aria-expanded','false');
			})
		})	

		

		$(this).next().slideToggle('fast', function() {

	    	// Animation complete.
	    	$(this).prev().attr('aria-expanded', function(index, attr){
	    		return attr == 'true' ? 'false' : 'true';
	    	});

	    });
		

	})
	


	//build element ccl
	$(".demo-item").each(function(){
		$(this).wrap('<div class="demo-item-container"></div>')
		$('<div class="label">Example</div>').insertBefore($(this));
	})
	//build demo code ccl
	$(".demo-code").each(function(){
		$('<div class="label">HTML</div>').prependTo($(this));
		$('textarea',this).addClass('toCodeMirror');
	})	


	//build the theme selector 
	var defaultTheme = (typeof $.cookie("ccl-theme") !== 'undefined') ? $.cookie("ccl-theme") : "generic";

	//load configuration JSON file
	
	$.getJSON(baseUrl("/assets/json_data/themes.json"+v), function(result){
		themes = result;		
		$.each(result, function(i, el){
			var selected = (defaultTheme == i) ? {"selected":"selected","data-theme":i} : {"data-theme":i};
			var newOptions= $('<option>').val(i).text(el).attr(selected);
			$("#themeselector").append(newOptions);
		});
		$("#themeselector").addClass('ccl-select-reverse').wrap('<div class="ccl-form"></div>')
		buildSelect($("#themeselector"),9999);
		//Change theme command
		$("#themeselector").change(function(){
			changeTheme($(this).val());
		})
			//build the codemirror 
			codeMirror();

			//default theme cookie value or GENERIC	
			changeTheme(defaultTheme);
		})

	$(".demo-collapse-nav-btn").click(function(){
		$('.demo-content').toggleClass('fullwidth');
		$('.demo-leftside').toggle( 'slide',function(){
			$('.demo-leftside').toggleClass('demo-collapse-nav-visible');

		})
		
	})

	
});