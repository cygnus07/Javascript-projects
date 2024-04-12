const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.querySelector("body")

// for(let i=0;i< 3;i++)
//     console.log(body.children[i].innerHTML);
//  console.log(body.children[3].innerHTML);

buttons.forEach(function(button) {
  //  console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'skyblue')
            body.style.backgroundColor = e.target.id;
        if(e.target.id === 'red')
            body.style.backgroundColor = e.target.id;
        if(e.target.id === 'green')
            body.style.backgroundColor =e.target.id;
        if(e.target.id === 'orange')
            body.style.backgroundColor = e.target.id;
        
    })
});