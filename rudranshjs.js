
        var qwe=document.getElementById("add");
        var text;
        qwe.onclick=function myFunction() {
          
          var person = prompt("Please enter your name:", "Harry Potter");
          if (person == null || person == "") {
            text = "User cancelled the prompt.";
          } else {
            text = "Your Note - " + person;
          }
          document.getElementById("demo").innerHTML = text;
        }



var addoc=document.getElementById("Addoc");
addoc.onclick=function ChangeV()
{
    document.getElementById("demo").innerHTML = "";
    document.getElementById("doc").innerHTML = text;  
}
