/*build full path*/
function baseUrl(path){
	if (path.charAt(0) == '/'){
		return baseurlpath+path;
	}else{
		return path;
	}
}


/*GENERATe HTML editor*/
function codeMirror(){
	
	$('.toCodeMirror').each(function(index, elem){
		CodeMirror.fromTextArea(elem, {
			mode: "htmlmixed",  
			lineNumbers: true,
			lineWrapping: true,
			readOnly:true
		});
	});
}

// CHANGE the COLOR theme
function changeTheme(palette){
	
	$(".ccl-element").attr('class','ccl-element');
	$(".ccl-element").attr('class','ccl-element ccl-style ccl-color_'+palette);
	$("#themeselector_container").attr('class','ccl-color_'+palette);
	


	$('.CodeMirror').each(function(i, el){
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