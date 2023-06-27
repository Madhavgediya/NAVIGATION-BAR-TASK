const fruits = ["madhav","rajeshbhai","gediya"];
document.getElementById("push_method").innerHTML = fruits;

function clickMy(){
    fruits.push("bca");
    document.getElementById("push_method").innerHTML = fruits;
}


// POP () => Use for remove element in array....!

const fruits1 = ["madhav","rajeshbhai","gediya"];
document.getElementById("pop-p").innerHTML = fruits1.pop();
fruits1.push("new add");
document.getElementById("push-p").innerHTML = fruits1;
