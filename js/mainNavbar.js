document.write(`
  <div id="navbar" class="top">
   <div class="bar theme-d2 left-align">
    <a class="bar-item button hide-medium hide-large right hover-white theme-d2" href="javascript:void(0);" onclick="openNav()"><i class="fa fa-bars"></i></a>
    <a href="javascript:void(0)" onclick="$('html, body').animate({scrollTop: '0px'}, 750);" class="bar-item button" id="navHome"><i class="fa fa-home margin-right"></i>Home</a>
    <a href="javascript:void(0)" onclick="$('html, body').animate({scrollTop: ($('#team').offset().top)},500);" class="bar-item button hide-small hover-accent">Team</a>
    <a href="javascript:void(0)" onclick="$('html, body').animate({scrollTop: ($('#lessons').offset().top)},500);" class="bar-item button hide-small hover-accent">Lessons</a>
    <a href="javascript:void(0)" onclick="$('html, body').animate({scrollTop: ($('#accounts').offset().top)},500);" class="bar-item button hide-small hover-accent">Accounts</a>
    <a href="javascript:void(0)" onclick="$('html, body').animate({scrollTop: ($('#contact').offset().top)},500);" class="bar-item button hide-small hover-accent">Contact</a>
    <div class="dropdown-hover hide-small">
      <button class="button hover-accent">Theme<i class="fa fa-caret-down"></i></button>
      <div class="dropdown-content card-4 bar-block">
        <a href="javascript:void(0)" onclick="random_bg_color()" class = "bar-item button hover-accent" >Random</a>
        <a href="javascript:void(0)" onclick="defaultTheme()" class = "bar-item button hover-accent" >Default</a>
        <a href="javascript:void(0)" onclick="setRemoteTheme()" class="bar-item button hover-accent" >Save</a>
      </div>
    </div>
    <div class="dropdown-hover hide-small">
      <button class="button hover-accent">Games<i class="fa fa-caret-down"></i></button>
      <div class="dropdown-content card-4 bar-block">
        <a href="javascript:void(0)" onclick="window.location.href='/CodeCove/html/games/ast.html'" class="bar-item button hover-accent">Asteroids</a>
          <a href="javascript:void(0)" onclick="window.location.href='/CodeCove/html/games/snake.html'" class="bar-item button hover-accent" target="_blank">Snake</a>
      </div>
    </div>
    <div class="dropdown-hover hide-small">
      <button class="button hover-accent">Resources<i class="fa fa-caret-down"></i></button>
      <div class="dropdown-content card-4 bar-block">
        <a href="https://github.com/ApolloHighSchoolKY/CodeCove" target="_blank" class="bar-item button hover-accent">Source Code</a>
        <a href="https://prod.teamgantt.com/gantt/schedule/?ids=1257545&public_keys=fHDTzH5DeW7d&zoom=d100&font_size=12&estimated_hours=0&assigned_resources=0&percent_complete=0&documents=0&comments=0&col_width=355&hide_header_tabs=0&menu_view=1&resource_filter=1&name_in_bar=0&name_next_to_bar=0&resource_names=1#user=&company=&custom=&date_filter=&hide_completed=false&color_filter=" target="_blank" class="bar-item button hover-accent">TeamGantt</a>
        <a href="https://teamup.com/ks2y6w6whbvjz625sh" target="_blank" class="bar-item button hover-accent">Teamup Calendar</a>
      </div>
    </div>
    <a href="javascript:void(0);" onclick="
      if($('#navLogin').text()=='Log In'){
        $('#modLogin').fadeIn();
      } else {
        logout();
      }" class="bar-item button hide-small hover-accent right" id="navLogin">Log In
    </a>
  </div>

    <!-- Navbar on small screens -->
    <div id="navDemo" class="bar-block theme-d2 hide hide-large hide-medium">
      <a href="javascript:void(0)" onclick="$('html, body').animate({scrollTop: ($('#team').offset().top)},500);" class="bar-item button">Team</a>
      <a href="javascript:void(0)" onclick="$('html, body').animate({scrollTop: ($('#lessons').offset().top)},500);" class="bar-item button">Lessons</a>
      <a href="javascript:void(0)" onclick="$('html, body').animate({scrollTop: ($('#accounts').offset().top)},500);" class="bar-item button">Accounts</a>
      <a href="javascript:void(0)" onclick="$('html, body').animate({scrollTop: ($('#contacts').offset().top)},500);" class="bar-item button">Contact</a>
      <a href="javascript:void(0)" onclick="random_bg_color()" class = "bar-item button hover-accent" >Random Theme</a>
      <a href="javascript:void(0)" onclick="defaultTheme()" class = "bar-item button hover-accent" >Default Theme</a>
      <a href="javascript:void(0)" onclick="setRemoteTheme()" class = "bar-item button hover-accent" >Save Theme</a>
      <a href="javascript:void(0)" onclick="window.location.href='/CodeCove/html/games/ast.html'" class="bar-item button hover-accent">Asteroids (WIP)</a>
      <a href="https://github.com/ApolloHighSchoolKY/CodeCove" target="_blank" class="bar-item button hover-accent">Source Code</a>
      <a href="https://prod.teamgantt.com/gantt/schedule/?ids=1257545&public_keys=fHDTzH5DeW7d&zoom=d100&font_size=12&estimated_hours=0&assigned_resources=0&percent_complete=0&documents=0&comments=0&col_width=355&hide_header_tabs=0&menu_view=1&resource_filter=1&name_in_bar=0&name_next_to_bar=0&resource_names=1#user=&company=&custom=&date_filter=&hide_completed=false&color_filter=" target="_blank" class="bar-item button hover-accent">TeamGantt</a>
      <a href="https://teamup.com/ks2y6w6whbvjz625sh" target="_blank" class="bar-item button hover-accent">Teamup Calendar</a>
      <!--<a href="javascript:void(0)" onclick="window.location.href='login.html'" class="bar-item button">Log In</a>-->
    </div>
  </div>
`);
