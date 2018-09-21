//Navbar for html
document.write(`
  <div class="navbar">
    <div class="dropdown">
      <button class="dropbtn">Contact Us
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="mailto:Christopher.cox@stu.daviess.kyschools.us?Subject=Code%20Cove" target="_top">Christopher.cox@stu.daviess.kyschools.us</a>
        <a href="mailto:Nathan.roberts@stu.daviess.kyschools.us?Subject=Code%20Cove" target="_top">Nathan.roberts@stu.daviess.kyschools.us</a>
        <a href="mailto:Jacob.jones3@stu.daviess.kyschools.us?Subject=Code%20Cove" target="_top">Jacob.jones3@stu.daviess.kyschools.us</a>
      </div>
    </div>
    <a href="../index.html">Home</a>
    <a href="https://github.com/ApolloHighSchoolKY/CodeCove">Github</a>
    <a href="https://prod.teamgantt.com/gantt/schedule/?ids=1257545&public_keys=fHDTzH5DeW7d&zoom=d100&font_size=12&estimated_hours=0&assigned_resources=0&percent_complete=0&documents=0&comments=0&col_width=355&hide_header_tabs=0&menu_view=1&resource_filter=1&name_in_bar=0&name_next_to_bar=0&resource_names=1#user=&company=&custom=&date_filter=&hide_completed=false&color_filter=">GanttChart</a>
    <a href="https://teamup.com/ks2y6w6whbvjz625sh">Calendar</a>
    <a id="hacker" href="javascript:switchTheme();">Hacker Green</a>
    <a href="html/questions.html">Questions</a>
    <a id=loginButton href="../html/login.html">Login</a>
  </div>`);

//Method to switch theme
var theme=1;
function switchTheme(){
  if(theme===1){
    document.getElementById('hacker').innerHTML="GitHub Orange";
    document.getElementById('style').setAttribute('href', '../CSS/Coder.css');
    theme=2;
  }
  else if(theme===2){
    document.getElementById('hacker').innerHTML="Hacker Mode";
    document.getElementById('style').setAttribute('href', '../CSS/Github.css');
    theme=1;
  }
};

//Links html to Jquery
document.write("<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>");
