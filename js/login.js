$(window).on('load',()=>{
     if(sessionStorage.getItem("usrId")=="admin")
     {
         console.log(sessionStorage.getItem("usrId"));
         open("index.html","_SELF");
     }
})

function validateLogin(u,p,callback)
{
    var res;
    if(u!='admin'||p!='12345')
    {
        res=1;
    }
    else
    {
        res=0;
    }
    callback(res);
}


$('#login').on('click',()=>{
    let usrnm=$("input[name=usrnm]").val().toLowerCase();
    let passwd=$("input[name=passwd]").val();
    validateLogin(usrnm,passwd,(flag)=>
    {
        
        if(flag==1)
        {
            $('#validCheck').text("Incorrect username/password");
        }
        else
        {
            sessionStorage.setItem("usrId","admin");
            open("index.html","_SELF");
        }
    });
});