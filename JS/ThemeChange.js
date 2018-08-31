var theme=1;
function switchTheme(){
  if(theme===1){
    document.getElementById('style').setAttribute('href', 'Coder.css');
    theme=2;
  }
  else if(theme===2){
    document.getElementById('style').setAttribute('href', 'Github.css');
    theme=1;
  }
};
