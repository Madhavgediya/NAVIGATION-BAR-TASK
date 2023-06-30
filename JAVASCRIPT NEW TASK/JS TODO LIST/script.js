
var pError = document.getElementById("error");
var inputTag = document.getElementById("valueEnter");
var button = document.getElementById("btn");

button.addEventListener("click", function () {
    if (inputTag.value.length === 0) {
        pError.innerHTML = ("<h4 style='color: red;'> Please Enter Value Don't Allow Empty</h4>");
    }
    else {
        pError.innerHTML += `
    <div class="container">
        <div class="mx-auto p-auto">
        <table class="table table-striped">
        ${inputTag.value}
        <button type="button" id="btn_delete" class="btn btn-danger"> <i class="fa-solid fa-circle-xmark"></i> </button>
        </table>
        `;

        var delete_id = document.querySelectorAll("#btn_delete");
        for(var i=0; i < delete_id.length; i++){
            delete_id[i].onclick = function(){
                    this.parentNode.remove();
            }
        }
    }
}); 
