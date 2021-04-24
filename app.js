

$(document).ready(function(){

$(".purchase").click(function(){
var topping = $("#topping  option:selected").val()
var crust = $("#crust  option:selected").val();
var location = $("#location option:selected").val()
var price = $("input[type='checkbox']").val();
var size = $("#size  option:selected").val();
// if(price==="big"){
//     var value = 1200;
//     $("#output").text(`Your cost is: ${value} and your pizza will be delivered to ${location.text()}`).addClass('output')

// }

var price;
if(size==='Large'){
    price=1200
}
else if(size==='Medium'){
    price=700
}
else if(size==='Small'){
    price=400
}
else if(size==='Not selected'){
    alert("Please select your size!")
    price=0;
}

$(".table").append(
    `
    <tr>
        <td>${size}</td>
        <td>${topping}</td>
        <td>${crust}</td>
        <td>${location}</td>
        <td>${price}</td>
        <td><button class="btn remove">remove</button></td>
    </tr>
    `
)


var value;
var theTotal = 0;
function updateTotal(){
$("td:nth-child(5)").each(function () {
    value = $(this).html();
   

    theTotal += parseInt(value);
    $(".result").text('Total: ' + theTotal);
});
}

updateTotal()

    var deletebtn = $(".remove");
    deletebtn.addClass('remove')
    deletebtn.click(function(e){
        const btn = e.target;
        btn.closest('tr').remove();
        reduceTotal();
        
    })
 

})


$('input[type="checkbox"]').click(function(){
    if($(this).prop("checked") == true){
        $(".location").show()
    }
    else if($(this).prop("checked") == false){
        $(".location").hide()
    }
});
})