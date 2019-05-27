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
	

	$.cookie("ccl-theme", palette, { path: '/' });
	$(".ccl-element").attr('class','ccl-element');
	$(".ccl-element").attr('class','ccl-element ccl-style ccl-color_'+palette);
	$("#themeselector_container").attr('class','ccl-color_'+palette);
	$(".ccl-header-logo-service-container").hide();
	$(".ccl-header-logo-service-container.ccl-service-button-"+palette).css('display','flex');


	$('.CodeMirror').each(function(i, el){
		var code=el.CodeMirror.getValue();
		code=code.replace(/ccl-color_[a-z]+/,'ccl-color_'+palette);

		if (code.includes("<!-- service logo //-->")){
			lablBtn=$('.ccl-service-button-'+palette+' .ccl-service-button-label').html();
			code=code.replace(/ccl-service-button-[a-z]+"/,'ccl-service-button-'+palette+'"');
			code=code.replace(/ccl-icon-[a-z]+\.svg/,'ccl-icon-'+palette+'.svg');
			code=code.replace(/<div class="ccl-service-button-label" >.+<\/div>/,'<div class="ccl-service-button-label" >'+lablBtn+'</div>');		
			
		};




		el.CodeMirror.setValue(code);
		setTimeout(function() {
			el.CodeMirror.refresh();
			el.CodeMirror.setSelection({
				'line':el.CodeMirror.firstLine(),
				'ch':0,
				'sticky':null
			},{
				'line':el.CodeMirror.lastLine(),
				'ch':0,
				'sticky':null
			},
			{scroll: false});

			el.CodeMirror.indentSelection("smart");
			el.CodeMirror.setCursor(0);
			$(document).scrollTop(0)
		},1);
	});

	$(".demo-color_code").each(function(){
		var color=$(this).prev('div').css('background-color');
		var colorHex=rgb2hex(color);
		$(this).html('<span class="demo-hex">'+colorHex+'</span><span class="demo-rgb">'+color+'</span>');
		
		$(this).parent()

	})

	$(".copy-color").click(function(){
			var copyinput=$('<input>').appendTo('body');
			copyinput.val($(this).next().children('.demo-hex').text());	
			copyinput.select();	
			document.execCommand('copy');
			copyinput.remove();
			$(this).addClass('copied');
			setTimeout(function(el){
				$('.copied').removeClass('copied');
			},1500)
	})


	$(".demo-theme-name").each(function(){		
		$(this).text(themes[palette]);
	})

}

//Function to Convert RGB to HEX
function rgb2hex(rgb){
	rgb = rgb.match(/^rgb\(([0-9]+), *([0-9]+), *([0-9]+)\)$/);

	return "#" +
	("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
	("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
	("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}