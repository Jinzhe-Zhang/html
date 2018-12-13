var dynamicValue = "33.3";
var  rule= "@-webkit-keyframes run{0% {transform:translateX(0%);-webkit-transform:translateX(0%);}\n"+
      "100%{transform:translateX("+ dynamicValue + "%);-webkit-transform:translateX("+ dynamicValue +"%);}}\n.run{animation:run 1s;}";
 
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = rule;
document.getElementsByTagName('head')[0].appendChild(style);
this.stylesheet = document.styleSheets[document.styleSheets.length-1];
try {
    this.stylesheet.insertRule( rule , this.stylesheet.rules.length);
} catch (e) {
 console.log("haha");
};