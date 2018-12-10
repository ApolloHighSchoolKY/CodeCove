function getWidth(){
    var myWidth = 0;
    if( typeof window.innerWidth === "number" ) {
        myWidth = window.innerWidth;//Non-IE
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        myWidth = document.documentElement.clientWidth;//IE 6+ in 'standards compliant mode'
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        myWidth = document.body.clientWidth;//IE 4 compatible
    }
    return myWidth;
}

function getHeight(){
    var myHeight = 0;
    if( typeof window.innerHeight === "number" ) {
        myHeight = window.innerHeight;//Non-IE
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        myHeight = document.documentElement.clientHeight;//IE 6+ in 'standards compliant mode'
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        myHeight = document.body.clientHeight;//IE 4 compatible
    }
    return myHeight;
}
