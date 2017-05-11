function getCookie(cname) {
  var name = cname + "=";
  var ca = decodeURIComponent(document.cookie).split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }
  return "";
}

function setCookie(name, value){ 
  var Days = 30; 
  var exp = new Date(); 
  exp.setTime(exp.getTime() + Days*24*60*60*1000); 
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
}

export { getCookie, setCookie }