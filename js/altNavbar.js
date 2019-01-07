document.write(`
  <div id="navbar" style="color: black; background-image: linear-gradient(to right, rgba(255,255,255,1), rgba(0,188,212,.7));" class="top">
   <div class="bar theme-d2 left-align">
    <a class="bar-item button hide-medium hide-large right hover-white theme-d2" href="javascript:void(0);" onclick="openNav()"><i class="fa fa-bars"></i></a>
    <a href="/CodeCove/html/main.html" class="bar-item button cyan"><i class="fa fa-home margin-right"></i>Home</a>
    <a href="/CodeCove/html/lessons.html" class="bar-item button hide-small hover-cyan">Lessons Home</a>
    <!--Theme Options-->
    <div class="dropdown-hover hide-small">
      <button class="button hover-cyan">Theme<i class="fa fa-caret-down"></i></button>
      <div class="dropdown-content card-4 bar-block">
        <a href="javascript:random_bg_color()" class = "bar-item button hover-cyan" >Random</a>
        <a href="javascript:defaultTheme()" class = "bar-item button hover-cyan" >Default</a>
        <a href="javascript:setRemoteTheme()" class="bar-item button hover-cyan" >Save</a>
      </div>
    </div>
    <!--Fun Section-->
    <div class="dropdown-hover hide-small">
      <button class="button hover-cyan">Fun<i class="fa fa-caret-down"></i></button>
      <div class="dropdown-content card-4 bar-block">
        <a href="/CodeCove/html/games/ast.html" class="bar-item button hover-cyan">Asteroids</a>
      </div>
    </div>
    <!--External Resources-->
    <div class="dropdown-hover hide-small">
      <button class="button hover-cyan">Resources<i class="fa fa-caret-down"></i></button>
      <div class="dropdown-content card-4 bar-block">
        <a href="https://github.com/ApolloHighSchoolKY/CodeCove" target="_blank" class="bar-item button hover-cyan">GitHub</a>
        <a href="https://prod.teamgantt.com/gantt/schedule/?ids=1257545&public_keys=fHDTzH5DeW7d&zoom=d100&font_size=12&estimated_hours=0&assigned_resources=0&percent_complete=0&documents=0&comments=0&col_width=355&hide_header_tabs=0&menu_view=1&resource_filter=1&name_in_bar=0&name_next_to_bar=0&resource_names=1#user=&company=&custom=&date_filter=&hide_completed=false&color_filter=" target="_blank" class="bar-item button hover-cyan">TeamGantt</a>
        <a href="https://teamup.com/ks2y6w6whbvjz625sh" target="_blank" class="bar-item button hover-cyan">Teamup Calendar</a>
      </div>
    </div>
    <a href="javascript:void(0);" onclick="javascript:
    if($('#navLogin').text()=='Log In'){
      $('#modLogin').fadeIn();
    } else {
      logout();
    }" class="bar-item button hide-small hover-cyan right" id="navLogin">Log In
  </a>
   </div>

   <!-- Navbar on small screens -->
   <div id="navDemo" class="bar-block theme-d2 hide hide-large hide-medium" style="color: black; background-color: transparent;">
     <a href="/CodeCove/html/main.html#team" class="bar-item button">Team</a>
     <a href="/CodeCove/html/main.html#lessons" class="bar-item button">Lessons</a>
     <a href="/CodeCove/html/main.html#accounts" class="bar-item button">Accounts</a>
     <a href="/CodeCove/html/main.html#contact" class="bar-item button">Contact</a>
     <a href="javascript:random_bg_color()" class = "bar-item button hover-cyan" >Random Theme</a>
     <a href="javascript:defaultTheme()" class = "bar-item button hover-cyan" >Default Theme</a>
     <a href="javascript:setRemoteTheme()" class = "bar-item button hover-cyan" >Save Theme</a>
     <a href="/CodeCove/html/games/ast.html" class="bar-item button hover-cyan">Asteroids (WIP)</a>
     <a href="https://github.com/ApolloHighSchoolKY/CodeCove" target="_blank" class="bar-item button hover-cyan">GitHub</a>
     <a href="https://prod.teamgantt.com/gantt/schedule/?ids=1257545&public_keys=fHDTzH5DeW7d&zoom=d100&font_size=12&estimated_hours=0&assigned_resources=0&percent_complete=0&documents=0&comments=0&col_width=355&hide_header_tabs=0&menu_view=1&resource_filter=1&name_in_bar=0&name_next_to_bar=0&resource_names=1#user=&company=&custom=&date_filter=&hide_completed=false&color_filter=" target="_blank" class="bar-item button hover-cyan">TeamGantt</a>
     <a href="https://teamup.com/ks2y6w6whbvjz625sh" target="_blank" class="bar-item button hover-cyan">Teamup Calendar</a>
     <!--<a href="login.html" class="bar-item button">Log In</a>-->
   </div>
   </div>
`);
