const myname = "Joseph Mugerwa"
console.log(myname)

function increase(){
    var unitPrice = 1200
    var addItem = Number(document.getElementById("number").innerHTML)
    var totalPrice = unitPrice * addItem

    document.getElementById("money").innerHTML = totalPrice
    //var totalCart = Number(document.getElementById("money").innerHTML)
    document.getElementById("number").innerHTML = addItem+1

    console.log(addItem)
    console.log(totalPrice)
}

function empty (){
    document.getElementById("number").innerHTML = 0
    document.getElementById("money").innerHTML = 0
}
