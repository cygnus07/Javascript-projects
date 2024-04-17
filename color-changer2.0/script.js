const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#'
    for(let i=0;i<6;i++)
        color += hex[Math.floor(Math.random() * 16)]
    return color;
}

console.log(randomColor());

let interval;
document.querySelector('#start').addEventListener('click', () => {
    console.log("Color change has started");
    const body = document.querySelector('body');
    //const colorArray = ["green", "yellow", "skyblue", "grey", "orange"]
    //let index =0;
    // const changeColor = () => {
    //     body.style.backgroundColor = colorArray[index % colorArray.length];
    //     index++;
    // }
    
    const changeColor = () => {
        body.style.backgroundColor = randomColor();
    }
    if(!interval){
        interval = setInterval(changeColor, 1000);
    }
    

    document.querySelector('h2').
    innerHTML = "Click on Stop to stop Color Change"
});

document.querySelector('#stop').addEventListener('click', () => {
    console.log("Color change has stopped");
    document.querySelector('h2').
    innerHTML = "Click On Start to start Color Change"
    clearInterval(interval)
    interval =null;
})