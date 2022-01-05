document.getElementById('btn').addEventListener('click', ()=> {
    // let randomColor = (Math.random() * 0xfffff * 1000000).toString(16);
    // return '#' + randomColor.slice(0, 6);

    // document.body.style.backgroundColor = randomColor ; 
    // console.log(randomColor)

    let arrColor = ['blue', 'red', 'green', 'pink', 'yellow', 'aqua', 'brown', 'voilet', 'indigo', 'orange' ]

    let randomC = Math.floor(Math.random() * arrColor.length) 

    document.body.style.backgroundColor = arrColor[randomC];

})