

/*MENU*/
function buildMenu(eljson,menupath,classes){//recursive html list (dropdown) based on JSON
	var classesa = (typeof classes !== 'undefined') ? classes:'ccl-side-navigation__group';
	var newmenu = $('<ul>').addClass(classesa);
	$.each(eljson, function(i, el){		
		var newel=$('<li>').addClass('ccl-side-navigation__item');		
		var href = (typeof el.link !== 'undefined') ? baseUrl('/'+menupath+'/ccl-'+el.link+'.html'):'#';
		var linkclass = (typeof el.menu !== 'undefined') ? 'ccl-side-navigation__link ccl-expandable__button':'ccl-side-navigation__link';
		var newlink= $('<a>').attr('aria-expanded','false').addClass(linkclass).attr('href',href).text(el.label);

		newel.append(newlink);
		newel.append(buildMenu(el.menu,el.path));
		newmenu.append(newel);

	})
	return newmenu;
}

/*GENERATe HTML editor*/
function generateCode(palette){
	$(".demo-item").each(function(){
		$('<div class="demo-code"><div class="label">HTML</div><textarea class="toCodemirror"><body class="ccl-style ccl-color_'+palette+'">\n   '+$.trim($(this).html().replace(/\t/g,' '))+'\n</body></textarea></div>').insertAfter( $(this) );
	})
	$('.toCodemirror').each(function(index, elem){
		CodeMirror.fromTextArea(elem, {
			mode: "htmlmixed",  
			lineNumbers: true,
			lineWrapping: true
		});
	});
}

// CHANGE the COLOR theme
function changeTheme(palette){
	
	$(".ccl-element").attr('class','ccl-element');
	$(".ccl-element").attr('class','ccl-element ccl-style ccl-color_'+palette);
	$("#themeselector_container").attr('class','ccl-color_'+palette);
	$(".demo-code").remove();
	generateCode(palette);


	$('#demo-body-example').next('.CodeMirror').each(function(i, el){
		el.CodeMirror.setValue('<body class="ccl-style ccl-color_'+palette+'">');
		setTimeout(function() {
			el.CodeMirror.refresh();;
		},1);
	});

	$(".demo-color_code").each(function(){
		var color=$(this).prev('div').css('background-color');
		$(this).html(rgb2hex(color)+'<span class="demo-rgb">'+color+'</span>');
		
	})
}

//Function to Convert RGB to HEX
function rgb2hex(rgb){console.log(rgb);
	rgb = rgb.match(/^rgb\(([0-9]+), *([0-9]+), *([0-9]+)\)$/);

	return "#" +
	("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
	("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
	("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}