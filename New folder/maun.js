// var countru = "usa"
// var age =20;
// var entaringparson = "teachear";

// var rusult = ((countru == "bangladesh" || countru =="pakistan" || countru=="indiya") && (age == 20 && entaringparson == "teachear")) ? "Registation Sucessful" : "You are not allow";
// document.getElementById("demo").innerHTML= rusult;


//#16 class freelancer nasim vi//
// var farenHaight = 44;


// var result = (farenHaight -32) *5/9;
// document.getElementById("demo").innerHTML = result;


//function 2nd class//
// function muFunctino(){
//  document.write('<a href="https://www.google.com/">click me</a>');
//  document.getElementById("demo").innerHTML= button;
// }


// muFunctino();

// function myFunction(price , newtax){
//     var productPrice =price;
//     var tax = newtax;
//     var result =productPrice /100*tax +productPrice;
//     return result;
// }
// document.getElementById("mobile").innerHTML=myFunction(12000, 12);
// document.getElementById("bikas").innerHTML=myFunction(1000, 2);
// document.getElementById("laptop").innerHTML=myFunction(60000, 4);
////OBJECT //
var car ={
    name : "toyota corola",
    carPrice: "3500000",
    tax = 40,
    carColor : "red whin",
    whilSize : 14,
    adBanner:function (amaderDiscount){
        var carPrice =this.carPrice;
        var tax =this.tax;
        var priceWithtax = carPrice /100 * tax + carPrice;
        // var myDiscount = amaderDiscount;
        // var redusMoney = priceWithtax/100 * myDiscount;
        // var fainalPrice =priceWithtax - redusMoney;
        return fainalPrice;
    }
};
document.getElementById("name").innerHTML= car.name;
document.getElementById("price").innerHTML= car.carPrice;
document.getElementById("color").innerHTML= car.carColor;
document.getElementById("whsize").innerHTML= car.whilSize;
document.getElementById("method").innerHTML= car.adBanner(20);





// console.log("hello kashem")