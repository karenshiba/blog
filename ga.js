function ismart(){
var x=(Math.floor((Math.random() * 5))+1)*1000;
var t1=setTimeout(function() {document.getElementsByTagName("body")[0].click();}, x);
var t2=setTimeout(function() {window.location.reload(true);},900000);
}

function addLink() {
	var body_element = document.getElementsByTagName('body')[0];
	var selection;
	selection = window.getSelection();
	var pagelink = "<br /><br /> Find more at: <a href='"+document.location.href+"' target='_blank' rel='dofollow'>"+document.title+"</a>";
	var copytext = selection + pagelink;
	var newdiv = document.createElement('div');
	newdiv.style.position='absolu';
	newdiv.style.left='-0px';
	body_element.appendChild(newdiv);
	newdiv.innerHTML = copytext;
	selection.selectAllChildren(newdiv);
	window.setTimeout(function() {
		body_element.removeChild(newdiv);
	},0);
}
document.oncopy = addLink;
