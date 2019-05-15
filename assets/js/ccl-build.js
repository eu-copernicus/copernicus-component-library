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
		if (window.location.href.includes($(this).attr('href')) && $(this).attr('href') != "#"){
			
			$(this).addClass('ccl-side-navigation__active').parents('li').find('.ccl-expandable__button').attr('aria-expanded','true');
		}
		
	});

	$(".ccl-expandable__button").click(function(){
		$(this).attr('aria-expanded', function(index, attr){
			return attr == 'true' ? 'false' : 'true';
		});
	})
	


	//build element ccl
		$(".demo-item").each(function(){
			$('<div class="label">Result</div>').prependTo($(this));
		})
	//build demo code ccl
		$(".demo-code").each(function(){
			$('<div class="label">HTML</div>').prependTo($(this));
			$('textarea',this).addClass('toCodeMirror');
		})	


	//build the theme selector 
	
	//load configuration JSON file
	$.getJSON(baseUrl("/assets/json_data/themes.json"+v), function(result){
		$.each(result, function(i, el){
			var newOptions= $('<option>').val(i).text(el);
			$("#themeselector").append(newOptions);
		})
	})

	//Change theme command
	$("#themeselector").change(function(){
		changeTheme($(this).val());
	})

	//build the codemirror 
	codeMirror();
	
	//default theme is GENERIC
	changeTheme('generic');


	




	
});