// fileEnter mobileEnter
var pError = document.getElementById("error");
var valueEnter = document.getElementById("valueEnter");
var addressEnter = document.getElementById("addressEnter");
var mobileEnter = document.getElementById("mobileEnter");
var emailEnter = document.getElementById("emailEnter");
var button = document.getElementById("btn");

button.addEventListener("click", function () {
    if (valueEnter.value == "" || addressEnter.value == "" || mobileEnter.value == "" || emailEnter.value == "") {
        pError.innerHTML = ("<h4 style='color: red;'> Please Enter Value Don't Allow Empty</h4>");
    }
    else {
        pError.innerHTML += `
 
        <div class="mx-auto p-auto table1 ">
            <table class="table table-striped table-dark table2">
                <tr>
                    <th> mr./miss </th>
                    <td>${valueEnter.value} </td>
                </tr>
                <tr>
                    <th> Address </th>
                    <td>${addressEnter.value}</td>
                </tr>
                <tr>
                    <th> Mobile </th>
                    <td>${mobileEnter.value}</td>
                </tr>
                <tr>
                    <th> Email </th>
                    <td> ${emailEnter.value}</td>
                </tr>
                    <button type="button" id="btn_delete" class="btn text-warning btn-delete"> <i class="fas fa-xmark"></i> </button>
                </table>    
        </div>
        ${valueEnter.value = ""}
        ${addressEnter.value = ""}
        ${mobileEnter.value = ""}
        ${emailEnter.value = ""}
        `;

        var delete_id = document.querySelectorAll("#btn_delete");
        for (var i = 0; i < delete_id.length; i++) {
            delete_id[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}); 
