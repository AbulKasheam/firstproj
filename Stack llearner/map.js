                        //math 
var x =4.58;

// console.log(Math.floor(x));
// console.log(Math.round(x))
// console.log(Math.ceil(x))
// console.log(Math.min(1,2,4,5,6,7))
// console.log(Math.max(1,2,3,4,5,100))
// console.log(Math.pow(2,4))
// console.log(Math.sinh(3))
// con/sole.log(Math.sqrt(64))
// console.log(Math.E)
// console.log(Math.LN2)
// console.log(Math.LN10)
// console.log(Math.log10(2))
                                    //js DATE ..


var date = new Date();
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.getFullYear())
                                    //statement
// var a = 10;
// var b = 12; 
// if(a>b){
//     console.log(a +" is grater than"+b)
// }
// var a = 17;
// if(a%2 ===0){
//     console.log("you adalt")
// }
// else{
//     console.log("you not adalt")
// }



                                                    //ex
// var i =0;
// while(i<100){
//     i++
//     if(i%2 ===0){
//         console.log(i)
//     }
// }
// var x =20;
// var y =30;
// if(x==y){
//     console.log("x equal y")
// }else{
//     console.log("x not equal y")
// }
// var i =10;
// if(i==50){
//     console.log("false")
// }else if(i==11){
//     console.log("true")
// }else{
//     console.log("sorry")
// }
// var i =0;
// while(i<50){
//     i++
//     if(i%2 !=1){
//         console.log(i)
//     }
// }
          //(date = 21/03/2021)


// const paragraph = document.querySelector('.para');
// const button = document.querySelector('.btn')
// button.addEventListener('click',() =>{
//     paragraph.innerText="'love this'"
// })






// const button = document.querySelector('.btn')
// const paragraph = document.querySelector('.para')
// button.addEventListener('click',() =>{
//     paragraph.innerText='love this'
// });

// const button = document.querySelector('.btn1')
// const header = document.querySelector('.header')
// button.addEventListener('click',() =>{
//     const paragraph = document.createElement('p')
//     header.appendChild(paragraph)
//     paragraph.innerText='2+2=4;'
// });


// const button = document.querySelector('.btn2')
// const header = document.querySelector('.button2')
// button.addEventListener('click',() =>{
//     const paragraph = document.createElement('p')
//     header.appendChild(paragraph)
//     paragraph.innerText='2+2=4;'
// });


// const button = document.querySelector('.btn2')
// const header = document.querySelector('button2')
// button.addEventListener('click',() =>{
//     const paragraph = document.createElement('p')
//     button2.appendChild(paragraph)
// })

// const button =document.querySelector('.btn')
// const container =document.querySelector('.container')
// button.addEventListener('click',() =>{
//  const button  = document.createElement('button')
//     container.appendChild(button)
// })
// const button = document.querySelector('.btn')
// const container = document.querySelector('.container')
// button.addEventListener('click',() =>{
// const paragraph = document.createElement('p')
// container.appendChild(paragraph) 
// })
// const button = document.querySelector('.btn1')
// const container = document.querySelector('.container')
// button.addEventListener('click',() =>{
// const  span=document.createElement('span')
// container.appendChild(span)
// })


// const button = document.querySelector('.btn')
// const button = document.querySelector('.btn1')
// const container = document.querySelector('.container')
// button.addEventListener('click',() =>{
//     const paragraph = document.createElement('p')
//     container.appendChild(paragraph)
   
// });










const container = document.querySelector('.container')
const onelement = document.querySelector('.btn')
const twoelement = document.querySelector('.btn1')
const threeElement = document.querySelector('.btn2')
const fourElement = document.querySelector('.btn3')
const fiveElement = document.querySelector('.btn4')

onelement.addEventListener('click',() =>{{
const paragraph = document.createElement('p')
container.appendChild(paragraph)
paragraph.classList.add('para')
paragraph.innerText='Hello Kasheam'
}})



twoelement.addEventListener('click',()=>{
const span =document.createElement('span')
container.appendChild(span)
span.innerText=' How Are you?'
})

threeElement.addEventListener('click',()=>{
const span =document.createElement('span')
container.appendChild(span)
span.innerText=' Where are you form?'
})

fourElement.addEventListener('click',()=>{
const span =document.createElement('span')
container.appendChild(span)
span.innerText='  Iam form '
})

fiveElement.addEventListener('click',()=>{
const strong =document.createElement('strong')
container.appendChild(strong)
strong.innerText='Bangladesh.'
})










