function myFunction(){
    let text = document.getElementById("m-replace").innerHTML;
    document.getElementById("m-replace").innerHTML = text.replace(/anther/g, "madhav's")
}

// this is replaceAll()

function myFunctionAll(){
    let text = document.getElementById("m-replaceAll").innerHTML;
    text = text.replaceAll("cats", "dogs");
    text = text.replaceAll("Cats", "Dogs");
    document.getElementById("m-replaceAll").innerHTML = text;
}