var para=document.getElementById("p1");
var pcv = document.getElementsByClassName("pc1");
function changecolor()
{
    // var p=document.getElementById("p1").style.color="red";
    if(document.getElementById("p1").style.color=="black")
    {
        document.getElementById("p1").style.color="red";
    }
    else
    {
        document.getElementById("p1").style.color="black";
    }
}


function changecolclass(){
    pcv[0].style.background='red';
    pcv[1].style.background='green';

    // for(var i=0; i<pcv.length;i++)
    // {
    //     pcv[i].style.background='purple';
    // }
}

// var p=document.getElementById("p1");
// var button=document.getElementById("button");
// button.onclick = function changecolor(){
//     p.style.color="red";
// }

function addpara()
{
    var newTag = document.createElement("p");
    var newText = document.createTextNode("this is dynamically added");
    newTag.appendChild(newText);
    document.body.appendChild(newTag);
}

