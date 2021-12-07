const notcompleted=[];
const completed=[];
var comp=document.querySelector("#completed");
var incomp=document.querySelector("#pending");
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    for (var i=0;i<data.length;i++)
    {
        if(data[i].completed===true)
        {
            var para=document.createElement("li");
            para.innerText=data[i].title
            comp.appendChild(para);

        }
        else
        {
            var para=document.createElement("li");
            para.innerText=data[i].title
            incomp.appendChild(para);
        
        }
        
    }
  });




