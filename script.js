$(document).ready(function(){
    $(".link").hover(function()
    {
        $(this).css("font-size", "2em");
    },
    function(){
        $(this).css("font-size", "default");
    });
});

function loadRepo() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            results = JSON.parse(this.responseText);
        
            //put a for loop here
        }
    }
    xhttp.open("GET", "https://api.github.com/users/aprilburns/repos", true);
    xhttp.send();
}