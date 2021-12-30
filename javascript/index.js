"use strict"
//    const name="waste"
//    var age="18"
//    if(age>10){
//       let name="waste a"
//       console.log(name);

//   }
//   console.log(name)

//  var agr="dg"
//  console.log(typeof(agr))

//hosting

// console.log(age)
// var age=67

// object

// let emp={
//     name:"sai",
//     phno:227890,
//     post:"manager"
// }
// console.log(emp)

//Array

// let emp=["ganesh","poorna","deekshi"]
// console.log(emp)

// Alrets

//alert("ganesh is good boy")

// prompt
    // let emp=prompt("Enter your name")
    // console.log(emp)
//confirm("Was deekshi is super cute..!!!")

// console.log("Welcome")
// console.info("deekshi")
// console.warn(" check the poorna once")
// console.error("name is sai")

// Spread operator

// let im=[23,34,45,56,67]
// let em=[56,67,78,89,90]
// let fm=[...em,...im]
// let r=[im]
// console.log(fm)
// console.log(r)

// function addition(x,y,...remainData){
//     console.log(x)
//     console.log(y)
//     console.log(remainData)
// }
// console.log(addition(2,3,45,67,89))

// destructuring of array

// let emp=["king","queen","minister"]

// name1=emp[0]
// let [a,...data]=emp
// console.log(data)

let emp={
         name:"sai",
         phno:227890,
         post:"manager"
     }
      let {name,...rt}=emp
     console.log(name)
     console.log(rt)
