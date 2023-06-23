let text = '"employees":[' +
    '{"firstName":"Madhav","lastName":"Gediya"}, ' +
    '{"firstName":"Madhav1","lastName":"Gediya1"}, ' +
    '{"firstName":"Madhav2","lastName":"Gediya2"}]}' ;

    const obj = JSON.parse(text);
    document.getElementById("json").innerHTML = obj.employees[1].firstName + " " + obj.employees[1].lastName;