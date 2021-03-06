$(window).on('load',()=>{
    if(sessionStorage.getItem("usrId")!="admin")
    {
        open("login.html","_SELF");
    }
});

$('#logout').on('click',()=>{
    sessionStorage.clear();
    open("login.html","_SELF");
});