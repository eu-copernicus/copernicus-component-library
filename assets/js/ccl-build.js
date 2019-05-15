$(function() {

	//Build main container
	//$(".ccl-element").wrap( "<div class='ccl-main-container'></div>" );
	//INCLUDE header
	//$('<header class="ccl-site-header" role="banner"></header>').load(baseUrl('/includes/header.html')).prependTo($('.ccl-main-container'));
	//Build content container
	//$(".ccl-element").wrap( "<div class='ccl-container'></div>" );
    //Build nav container
    //$('<div class="ccl-leftside"><nav class="ccl-site-nav" ></nav></div>').prependTo($('.ccl-container'));

	//INCLUDE navigation
	//$.getJSON(baseUrl("/includes/json_data/nav.json"+v), function(result){     
		//Build Menu
		$(".ccl-site-nav").append(buildMenu(result['menu'],'','ccl-side-navigation__root'));
		$(".ccl-expandable__button").click(function(){

			$(this).attr('aria-expanded', function(index, attr){
				return attr == 'true' ? 'false' : 'true';
			});
		})
	});

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