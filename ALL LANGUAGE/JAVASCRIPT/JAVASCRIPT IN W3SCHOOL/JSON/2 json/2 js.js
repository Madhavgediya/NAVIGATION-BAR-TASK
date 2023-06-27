function showList(){
    fetch("2 json.json")
    .then(response => response.json)
    .then(data => createList(data));
}

function createList(data){
 const mainUl = document.createElement('ul');
 
 for(let i = 0; i < data.contacts.length; i++){

    const user_name = document.createElement('li');
    
    user_name.innerHTML = data.contacts[i].name;

    const user_mobile = document.createElement('ul');
    for(var key in data.contacts[i].mobile){
        const user_mobile_li = document.createElement('li');
        user_mobile_li.innerHTML = key + ': ' + data.contacts[i].mobile[key];
        user_mobile.appendChild(user_mobile_li);
    }

    user_name.appendChild(user_mobile);

    mainUl.appendChild(user_name);
 }
 document.body.appendChild(mainUl);
}