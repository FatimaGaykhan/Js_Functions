"use strict";

// let person={
//     name:"Nurlan",
//     surname:"Umudov",
//     age:22
// }
// document.querySelector("h1").innerText=person.name

// console.log(person)

// let datas=[
//     {
//         name:"Fatima",
//         surname:"Qayxanova",
//         groups:[
//             "PB101",
//             "P133"
//         ],
//         teachers:[
//             "Cavid",
//             "Hemid"
//         ]

//     },
//     {
//         name:"Fexriyye",
//         surname:"Tagizade",
//         groups:[
//             "PB101"
//         ],
//         teachers:[
//             "Cavid"
//         ]

//     },
//     {
//         name:"Afide",
//         surname:"Veliyeva",
//         groups:[
//             "PB101",
//             "P134"
//         ],
//         teachers:[
//             "Cavid",
//             "Elcin"
//         ]

//     }    
// ]

// console.log(datas)

let fullName="Tagizade Fexriyye"

// console.log(surname.length)
// console.log(surname.toLowerCase())
// console.log(surname.toUpperCase())
// console.log(surname.trim())
// console.log(surname.startsWith("t".toUpperCase()))
// console.log(surname.endsWith("t".toUpperCase()))
// console.log(surname.indexOf("a"))
// console.log(surname.lastIndexOf("a"))
// console.log("fiabibeurbvauebsbcbsdbjnjiusduhidshoihdoiwhednjasc as c sajkndnqudihwufhuwehdfuwf".substring(0,10)+"...")
// console.log(surname.substring(0,2))

// for (let i = 0; i < surname.length; i++) {
//     const element = surname[i];
//     console.log(element)
    
// }

// console.log(surname.includes("a"))
// console.log(surname.includes("t".toUpperCase()))

// let array=surname.split(" ")
// console.log(array)

// console.log(surname.charAt(1))
// console.log(surname.charCodeAt("a"))
// console.log(surname.slice(1,3))
// console.log(surname.replace("Azerbaycan","Italiya"))

// let nums=[1,4,5,6,7,8,8]
// for (const num of nums) {
//     // num=100
//     console.log(num)
// }

// let person={
//     name:"Nurlan",
//     surname:"Umudov",
//     age:22
// }

// for (const key in person) {
//    if(key=="name"||key=="surname"){
//     console.log(person[key])
//    }
// }

//  let nums=[1,4,5,6,7,8,8]
// let data=nums.length
// console.log(data)

// nums.forEach((element,i) => {
//     console.log(element,i)
// });

// let data=nums.toString()
// console.log(data)

// console.log(nums.join("-"))

// nums.pop()
// nums.push(100)
// nums.shift()
// nums.unshift(500)
// console.log(nums)

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren)

// let address="Ehmedli"
// let result=[...address]
// console.log(result)

// let obj={
//     name:"test",
//     surname:"testov"
// }
// let data={...obj}
// console.log(data)

//  let nums=[1,4,5,6,7,8,8]
// let datas=[...nums]
// console.log(datas)

// function showText(){
//     let a=60
//     if(a>50){
//       console.log("Hello World")
//     }
// }

// showText();

// function showText(text){
// console.log(text)
// }
// showText("salamlar")

// function sum(a,b){
//     let result=a+b
//     console.log(result)
// }
// sum(100,200)

// let datas=[1,2,100,5,600,9,90]

// function findData(arr){
// for (const item of arr) {
//     if(item=="100"){
//         console.log("found")
//         return
//     }
// }
// }
// findData(datas)

// function sum(a,b){
//     return a+b
// }
// console.log(sum(3,4))

//  let nums=[1,4,5,6,7,8,8]

//  function test(arr){
//     arr[0]=100
//     console.log(arr)
//  }
//  test(nums)

//  console.log(nums)

// let b=100

// function test(a){
//     a=20
//    console.log(a)
// }
// test(b)

// console.log(b)

// let datas=[1,2,100,5,600,9,90]

// function test(arr){
//     let newArr=["salam","sagol"]
//     arr=newArr
//     console.log(arr)
// }
// test(datas)
// console.log(datas)

// let arr1=[1,2,3]
// let arr2=arr1

// arr2[0]=100

// console.log(arr1)
// console.log(arr2)

// let elems1=[1,2,3,4]
// let elems2=[4,5,6]

// elems1=elems2

// elems2[0]=100

// console.log(elems1)
// console.log(elems2)

// let datas=[1,2,100,5,600,9,90]
// let newArr=["salam","sagol"]

// datas=newArr
// console.log(datas)
// console.log(newArr)

// function test(arr,arr2){
//     arr=arr2
//     console.log(arr)
// }

// test(datas,newArr)

// console.log(datas)

// function test(...datas){
//     for (let i = 0; i < datas.length; i++) {
//         const element = datas[i];
//         console.log(element)
//     }
// }

// test(1,2,3,4,5)

// function test(){
//     for (let i = 0; i < arguments.length; i++) {
//                 const element = arguments[i];
//                 console.log(element)
//             }
// }

// test(1,2,3,4,5)


// console.log(this)

// function showNumber(){
//     console.log(this)
// }
// showNumber();

// let showText=(text)=>{
//     console.log(this)
// }

// showText("tested");


// let student={
//     name:"Reshad",
//     surname:"Agayev",
//     age:22,
//     address:"Neftciler",
//     getFullName:function(){
//         console.log(this.name+" "+this.surname)
//     },
//     getFullData:()=>{
//         console.log(this.name+" "+this.surname)
//     }

// }

// student.getFullName()
// student.getFullData()

// const test=()=>{
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(element)
//     }
// }

// test(1,2,3)

// function test(){
//         for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(element)
//     }
// }

// test(1,2,3);

// this.alert()

// document.querySelector("button").addEventListener("click",function(){
//     // this.style.backgroundColor="red"
//     window.location.reload();
// })


// ////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////

// Tasks


// Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// function isDevided(n){
// if(n%3==0 && n%7==0){
//     console.log("3 ve 7-e qaliqsiz bolunur")
// }else{
//     console.log("bolunmur")
// }
// }

// isDevided(21)




// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 

// function factorialOfNumber(n){
//     let sum=1
//     if(n!=0){
//         for (let i = 1; i <= n; i++) {
//             sum*=i
//         }
//     }else{
//         console.log("n ededi 0-a beraber ola bilmez")
//         return
//     }

//   console.log(sum)
// }

// factorialOfNumber(0)


// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// let nums=[2,1,5,7,8,3,2]

// function sumOfNumPowers(arr){
//     let result=0;
//     let power=1;
//    for (const item of arr) {
//     if(item%2==0){
//         power=item*item;
//         result+=power;
//     }
//    }
//    console.log(result)
// }

// sumOfNumPowers(nums)


// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.


// function login(mail,password){

//     if(mail=="cavid@code.edu.az" && password=="12345"){
//         console.log("Girish olundu")
//     }else{
//         console.log("Mail ve yaxud password sehvdir")
//     }
// }

// login("cavid@code.edu.az","12345")


// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.


// let nums=[1,4,3,6,8,3,6,5,9];

// function sumOfOddNums(arr){
//     let sum=0;
// for (const item of arr) {
//     if(item%2==1){
//         sum+=item
//     }
// }
// console.log(sum)
// }

// sumOfOddNums(nums)



// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// let nums=[1,4,3,6,8,3,6,5,9];

// function sumOfEvenNums(arr){
//     let count=0;
// for (const item of arr) {
//     if(item%2==0){
//         count++;
//     }
// }
// console.log(count)
// }

// sumOfEvenNums(nums)




// 8) Icerisinde name, surname, age, email olan bir nece student objectleriniz var. Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.
//      1) Yashi 18-25 araliginda olan telebelerin sayi.
//      2) Emailinde "c" herfi olan studentlerin sayi.



// let datas=[
//     {
//         name:"Fatima",
//         surname:"Qayxanova",
//         age:22,
//         email:"fatimaeg@code.edu.az"

//     },
//     {
//         name:"Fexriyye",
//         surname:"Tagizade",
//         age:22,
//         email:"faxa@code.edu.az"

//     },
//     {
//         name:"Afide",
//         surname:"Veliyeva",
//         age:38,
//         email:"afida@code.edu.az"

//     }    
// ]

// function countOfStudents(arr){
//     let count=0;
//     for (const student of arr) {
//         if(student.age>18 && student.age<25){
//             count++;
//         }
//     }
//     console.log(count)
// }



// function countOfIncludesCLetterInEmail(arr){
//     let count=0;
//    for (const student of arr) {
//     if(student.email.includes('c')|| student.email.includes('C')){
//         count++;
//     }
//    }
//    console.log(count)
// }

// countOfIncludesCLetterInEmail(datas)

// countOfStudents(datas)




// 9) Function yazacaqsiz, Functiona parametr olaraq string gelecek. Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.

// function capitalizeFirstLetter(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(capitalizeFirstLetter("fatima"))