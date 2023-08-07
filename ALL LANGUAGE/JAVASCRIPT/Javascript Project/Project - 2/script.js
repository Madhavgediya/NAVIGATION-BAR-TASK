function changeColor(){
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    let hex = '#' + n.slice(0,6);
    
    return document.getElementById("container").style.backgroundColor = hex;
};


