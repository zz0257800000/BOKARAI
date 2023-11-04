// for(var i = 0;i<10;i++){
//         console.log(i);
//      console.log("<br/>");
// }
// let arr = [];
// let ob = [
//         {
//         name:"戚戚",
//         age:15
// },
// {
//         name:"媽",
//         age:40
// }
// ,
// {
//         name:"爸",
//         age:40
// }
// ,

// ]
// console.log(arr)
// console.log(ob)
// if (x % 7 == 0) {
//         console.log(x + "天後星期天");
// } else if (x % 7 == 1) { }

// let x = 5;
// switch (x % 7) {

//         case 1:
//                 console.log(x + "天後星期一");
//                 break;
//         case 2:
//                 console.log(x + "天後星期二");
//                 break;
//         case 3:
//                 console.log(x + "天後星期三");
//                 break; 

//         case 4:
//                 console.log(x + "天後星期四");
//                 break;
//                 case 5:
//                 console.log(x + "天後星期五");
//                 break;
//                 case 6:
//                 console.log(x + "天後星期六");
//                 break;
//                 default:
//                         console.log(x + "天後星期天");
//                         break;

// }


// let arr = [1,"jhon",true,null,[],{"a":1,"b":2,"c":[1,2,3]}];

// for(let i = 0; i < arr.length;i++){
// console.log(arr[i])}

// arr.forEach(i=>{
// console.log(i)
// })


// let arr2=[];
// for(let i = 0;i<10;i++){
//     arr2.push(i)
// }
// console.log(arr2)

// for(let i = 5; i >0 ;i--){
//     console.log(i)}


//     console.log("========")
//     for(let i = 0; i <5 ;i++){
//         if( i == 1 ){
//             continue;
//         }else{
//             console.log(i)
//         }

//     }
// for(let i = 0; i <50 ;i++){
//     console.log(i)
// }
// let totalNum = []
// let singleNum = []
// let doubleNum = []
// for (let i = 0; i <= 50; i++) {
//     totalNum.push(i);
//     if (i % 2 == 0) {
//         doubleNum.push(i);

//     }
//     else {
//         singleNum.push(i);
//     }
// }
// console.log("totalNum")
// console.log(totalNum)
// console.log("奇數")
// console.log(singleNum)
// console.log("偶數")

// console.log(doubleNum)
// console.log("========")
// let totalSum = 0;
// let singleSum = 0;
// let doubleSum = 0;
// totalNum.forEach(function (item) {
//     totalSum = totalSum + item;
// }
// )
// singleNum.forEach(item => {
//     singleSum = singleSum + item;
// }
// )
// for (let i = 0; i < doubleNum.length; i+=2) {
//     doubleSum += doubleNum[i];
//     doubleSum = doubleSum + doubleNum[i];
// }
// console.log("1" + totalSum)
// console.log("2" + singleSum)
// console.log("3" + doubleSum)




// for (let i =0;i < 5; i++){
//     console.log("i")
//     for (let j =0; j<2;j++){
//         console.log(j)
//     }
// }
// for (let i =1;i < 2; i++){
//     console.log("i")
//     for (let j =1; j<2;j++){
//         console.log(i*j)
//     }
// }
// for (let x = 1;x<=9;x++){
//     console.log("x="+x)
//     for(let y = 1; y<=9; y++){
//         console.log("y="+y)
//     console.log(x+"*"+y+"="+x *y)}
// }
// let singleNum = []


//     for (let i = 0; i <= 100; i++) {
        
//         if (i % 2 == 0) {
//             doubleNum(i);
// continue;
//         }
//         else {
//             singleNum(i);
//         }
//     }


// console.log("奇數")
// console.log(singleNum)


// let friends = ["黑","黃","綠","藍","菊"];
// for(let q = 0; q<friends.length;q++){
//     document.write(friends[q]);
//     document.write("<br/>");
// }

// let questions = [
// {
//     prompt:"香蕉什麼色?\nA紅\nB綠\nC黃",
//     answer:("C")
// },
// {
//     prompt:"草莓什麼色?\nA紅\nB綠\nC黃",
//     answer:"A"
// },
// {
//     prompt:"一公尺幾公分?\nA1\nB10\nC100",
//     answer:"C"
// }


// ]

// let score = 0;
// for(let q=0; q<questions.length;q++){
//     let input=prompt(questions[q].prompt);
//     if(input==questions[q].answer){
//         score++;
//         alert("答對了!");
//     }
//     else{
//         alert("答錯了!");
//     }

// }
// alert("總共答對了"+score+"題");

// var number = [
// [1,2,3],
// [4,5,6],
//     [7,8,9],
//     [0]
// ];
// for(var i=0;i<number.length;i++){
//     for(var j=0;j<number[i].length;j++)
//  {  document.write(number[i][j]);
// }document.write("<br/>");
// }
// class Phone {
//     constructor(number,year ,waterproof){
//         this.number = number;
//         this.year = year;
//         this.waterproof = waterproof;
//     }
//     phone_age(){
//         return 2021 - this.year;
//     }
// }
// let phone1 = new Phone("123",2020,false);
// let phone2 = new Phone("456",2018,false);
// document.write(phone2.waterproof);

for(let i =1; i<=100;i++) {
    console.log (`${i}. Fock you \n`);
}

let btn = document.getElementById("btn");
btn.addEventListener("click",function(){
     alert("按屁阿");
    this.innerText = "按洨";
    this.style.color = "red" ;
})

let img = document.getElementById("img");
img.addEventListener("mouseover",function(){
    this.src = "3375674-PH.jpg"
})
img.addEventListener("mouseout",function(){
    this.src = "maxresdefault.jpg"
})

