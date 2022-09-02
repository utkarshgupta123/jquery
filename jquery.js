


$('#hide').click(function (){
    $('p')[0].style.display = "none";
})

$('#show').click(function (){
    $('p')[0].style.display = "block";
})


//////////////////////////////////////////////

$('button').click(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/todos/12",
        type: "GET",
        success: function(data){
            console.log(data);
            document.getElementsByTagName("h1")[0].innerText = data.title;
        }
    })
})