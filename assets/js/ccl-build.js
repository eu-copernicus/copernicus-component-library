$(function() {

	//Build Menu
	$(".ccl-site-nav > ul").addClass('ccl-side-navigation__root');
	$(".ccl-site-nav > ul ul").addClass('ccl-side-navigation__group');
	$(".ccl-site-nav li").addClass('ccl-side-navigation__item');
	$(".ccl-site-nav a").each(function(){
		$(this).addClass('ccl-side-navigation__link');
		if ($(this).next('ul').length){
			$(this).addClass('ccl-expandable__button').attr('aria-expanded','false');
		}
		if (window.location.href.indexOf($(this).attr('href')) >= 0 && $(this).attr('href') != "#"){			
			$(this).addClass('ccl-side-navigation__active').parents('li').children('.ccl-expandable__button').attr('aria-expanded','true');
		}
		
	});

	$(".ccl-expandable__button").click(function(){
		$(this).attr('aria-expanded', function(index, attr){
			return attr == 'true' ? 'false' : 'true';
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

		//Change theme command
		$("#themeselector").change(function(){
			changeTheme($(this).val());
		})
			//build the codemirror 
			codeMirror();

			//default theme cookie value or GENERIC	
			changeTheme(defaultTheme);
		})



	
});