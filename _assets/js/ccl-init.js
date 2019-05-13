v='?v=0.1.0.1';
baseurlpath="http://demo.codex42.online/copernicus";

var includes={
	"scripts":[
		"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js",
		"/_assets/js/ccl-functions.js",
		"/_assets/lib/codemirror.js",
		"/_assets/js/javascript.js",
		"/_assets/js/xml.js",
		"/_assets/js/css.js",
		"/_assets/js/htmlmixed.js",
		
		"/_assets/js/ccl-build.js",
	],
	"css":[
	"/_assets/css/demo.css",
	"/_assets/lib/codemirror.css",
		
	"/ccl-css/fonts.css",	
	"/ccl-css/base.css",
	"/ccl-css/template.css",
	"/ccl-css/elements.css",
	"/ccl-css/colors.css",
	"https://use.fontawesome.com/releases/v5.8.2/css/all.css"	
	
	]
	
}
function baseUrl(path){
	if (path.charAt(0) == '/'){
		return baseurlpath+path;
	}else{
		return path;
	}
}
function addScript(scriptSrc){
	var script = document.createElement('script');
	script.src = baseUrl(scriptSrc+v);
	script.async = false;
	document.head.appendChild(script);
}

function addLink(linkHref){
	var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = baseUrl(linkHref+v);
    link.media = 'all';
    document.head.appendChild(link);
}


includes['css'].forEach(addLink);
includes['scripts'].forEach(addScript);



	











