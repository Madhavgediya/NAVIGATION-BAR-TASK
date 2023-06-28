// Display Property Name ,Address And Price with its Symbol Make This Type Of Ui ,Creadted By Date

fetch("message.json")
    .then(response => response.json())
    .then(data => {
        var result = data.result;
        var datacontainer = document.getElementById("datacontainer");
        
        var countDisplay = document.getElementById("all");
        var totalCount = result.length;
        countDisplay.innerHTML = `All List ${totalCount}`;
        var clickShowAll = document.getElementById("all");
        clickShowAll.addEventListener("click",function (){
            element(result);
        })

        var clickReview = document.getElementById("good");
        var emptyReview = result.filter(function (result){
            return result.property_reviews > 0;
        }); 
        clickReview.innerHTML = `Review ${emptyReview.length}`;
        clickReview.addEventListener("click", function(){
            element(emptyReview);
        });

        // var clickBadReview = document.getElementById("bad");
        // var emptyBReview = result.filter(function (result){
        //     return 0 < result.property_reviews;
        // }); 

        // clickBadReview.innerHTML = `Bad ${emptyBReview.length}`;
        // clickBadReview.addEventListener("click", function(){
        //     element(emptyBReview);
        // });

        
        function dataput(good){
            datacontainer.innerHTML = "";
        
        good.forEach(element => {
            
            var ratingStars = "";
            var filledStars = element.property_reviews;
            var emptyStars = 5 - filledStars;

            for (var i = 0; i < filledStars; i++) {
                ratingStars += '<i class="icon fa-solid fa-star"></i>';
            }

            for (var i = 0; i < emptyStars; i++) {
                ratingStars += '<i class="icon fa-regular fa-star "></i>';
            }

            var images = document.createElement("div");
            var date = element.createdAt;
            images.innerHTML = `
                <div class="row">
                    <div class="col-3">            
                        <div class="product">  
                            <img class='img card-img-top' src="${element.image[element.image.length - 1]}">                    
                            <div class="rupee">${element.price.map((e) => e.number + " " + e.currency.slice(0, 1))}</div>
                            <div class="title">${element.title.slice(0, 15)}</div>
                            <div class="city">${element.location_name}</div>             
                            <hr class="m-auto">
                            <div class="date"> ${date.slice(0, 10)}
                            <span class="rating">Rate ${ratingStars}</span>
                            </div>                    
                        </div>
                    </div>
                </div>
                `
            datacontainer.appendChild(images);
        });
    }

    dataput(result);
    });

// function createList(data) {
//           document.getElementById("m").src = data.result[0].image+"<br>";

//         //     for(i in data.result){
//         //     for(id in data.result[i])
//         //     document.write(data.result  [i][id]+"<br>");
//         //  }
//         }

// function make_filter() {
//     // const
// }

// showList();