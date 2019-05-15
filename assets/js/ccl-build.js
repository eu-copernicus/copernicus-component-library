$(function() {

	 
	//Build Menu
	$(".ccl-site-nav > ul").addClass('ccl-side-navigation__root');
	$(".ccl-site-nav > ul ul").addClass('ccl-side-navigation__group');
	$(".ccl-site-nav li").addClass('ccl-side-navigation__item');
	$(".ccl-site-nav a").addClass('ccl-side-navigation__link');

	/*	$(".ccl-expandable__button").click(function(){

			$(this).attr('aria-expanded', function(index, attr){
				return attr == 'true' ? 'false' : 'true';
			});
	})*/
	

	//SHOW page
	//$('body').fadeIn('slow');

	//build element ccl
	$(".demo-item").each(function(){
		$('<div class="label">Result</div>').prependTo($(this));
	})
	


	//build the theme selector and INCLUDE it
	$('<div id="themeselector_container"></div>').load(baseUrl('/includes/theme_selector.html'),
		function() {
			//load configuration JSON file
			$.getJSON(baseUrl("/includes/json_data/themes.json"+v), function(result){
				$.each(result, function(i, el){
					var newOptions= $('<option>').val(i).text(el);
					$("#themeselector").append(newOptions);
				})
			})

			//CHange theme command
			$("#themeselector").change(function(){
				changeTheme($(this).val());
			})
		})	
	.appendTo($('.ccl-leftside'));
	
	//default theme is GENERIC
	changeTheme('generic');
   



	//build the 'how to use' block selector and INCLUDE it
	$('<div id="howto_container"></div>').load(baseUrl('/includes/how_to_use.html'),function(){

		$('#demo-include-css').val($('#demo-include-css').val().replace(/{{baseurl}}/g,baseurlpath));
		$('.toCodeMirror').each(function(index, elem){
			CodeMirror.fromTextArea(elem, {
				mode: "htmlmixed",  
				lineNumbers: true,
				lineWrapping: true
			});
		});
	}).appendTo($('.ccl-element'));


	

	
});