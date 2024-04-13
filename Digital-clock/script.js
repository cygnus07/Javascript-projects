const time = document.getElementById('clock')
// const time = document.querySelector('#clock')
console.log(time);

//let date = new Date()
// console.log(date.toLocaleTimeString());

setInterval(function(){
    let date = new Date()

    // if want to display am or pm
    // 12 hour format
    // clock.innerHTML = date.toLocaleTimeString([], {
    //     hour: '2-digit', 
    //     minute: '2-digit',
    //     second: '2-digit',
    //     hour12: true
    // });

    // for 24 hour format
    clock.innerHTML = date.toLocaleTimeString();
    // console.log(date.toLocaleTimeString())
}, 1000)

// clock.innerHTML = date.toLocaleTimeString();