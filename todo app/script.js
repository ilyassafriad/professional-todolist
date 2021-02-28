const plus = document.querySelector('.plus');
const container = document.querySelector('.container');
const clear = document.querySelector('.clear');

plus.addEventListener('click', function(){
    const input = document.querySelector('.input');
    const create = document.createElement('div');
    const place = document.querySelector('.place');
    const text = document.createTextNode(input.value);
    create.appendChild(text);

    if(input.value == ''){
        alert("please enter your task");
    } else{
        place.appendChild(create);
        input.value="";
        create.style.marginTop="15px" ;
        container.style.height="500px" ;
        container.style.marginTop="50px" ;
        create.classList.add('text');
        create.addEventListener('click', function(){
          create.classList.toggle('text2');
        })
        clear.style.backgroundColor="rgb(67, 122, 204)" ;
        clear.classList.add('clear2');

        clear.addEventListener('click', function(){
         // place.removeChild(create);
         const text2 = document.querySelector('.text2');
         place.removeChild(text2);
        })
    }
   
})

var count = 0 ;
plus.addEventListener('click', function (){
  count++
  document.querySelector('.calcul').innerHTML = "you have: "+ count+" pending tasks" ;
})


clear.addEventListener('click', function(){
  count = count - 1
  document.querySelector('.calcul').innerHTML = "you have: "+ count+" pending tasks" ;
})