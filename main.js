///////////////////////////////// exe 1 //////////////////////////////
// ................. by forEach
// const ages = [ 10,12,23,,11,55,9,99,50]
// const newAges = []
// ages.forEach((ageItem)=>{if(ageItem>20)newAges.push(ageItem)
// })
// console.log(newAges);
// ................. bt forOf
// for (const ageItem of ages){if(ageItem>20)newAges.push(ageItem);
// }
// console.log(newAges);
///////////////////////////////// exe 2 //////////////////////////////
// const car = {
//     color:"green",
//     model:2009,
//     company:"mazda"
// }
// for (const key in car) {
//       console.log(`${key}:${car[key]}`);
// }
/////////////////////////////// exe 3 ////////////////////////////////
// const numbers = ["ראשון","שני","שלישי","רביעי"]
// const changeArrayNumbers =[]
// let counter = 0 
// // .......................... by forEach
// function addIndex(array) {
//      array.forEach((numberItem)=>{
//      changeArrayNumbers.push(`${numberItem}.${counter}`)
//      counter++
//   });     
//    return changeArrayNumbers
// }
// console.log(numbers);
// console.log(addIndex(numbers));
// .......................... by forOf
// function addIndex(numbers) {
//      for (const numberItem of numbers) {
//          changeArrayNumbers.push(`${numberItem}.${counter}`)
//          counter++
//      }
//      return changeArrayNumbers
// }
// console.log(numbers);
// console.log(addIndex(["ראשון","שני","שלישי","רביעי"]));
/////////////////////////////// exe 4 ////////////////////////////////
// const numbers = [1,2,3,4,5,6,7,8,9]
// const evenNumbers = []
// // .......................... by forEach
// function evenNumber(numbers){
//     numbers.forEach((numberItem )=> {
//         if(numberItem%2==0)
//         numberItem ="even" 
//         evenNumbers.push(numberItem);
//     });
//         return evenNumbers
// }
// console.log(numbers);
// console.log(evenNumber([1,2,3,4,5,6,7,8,9]));
// .......................... by forOf
// function evenNumber(numbers) {
//     for (let numberItem of numbers){
//         if(numberItem%2==0)
//         numberItem = "even"
//         evenNumbers.push(numberItem);
//     }
//     return evenNumbers
// }
// console.log(evenNumber([1,2,3,4,5,6,7,8,9]));

/////////////////////////////// exe 5 ////////////////////////////////
// function arrangedObject(object) {
//     for (const carKey in object){
//     document.write(`${carKey}:${object[carKey]}<br>`)
//     }
// }
// arrangedObject({color:"green",model:2009,company:"mazda"})

/////////////////////////////// exe 6 ////////////////////////////////
// const car = {color:"green",model:2009,company:"mazda"}
// const newCar = {}
// function addHi(car) {
//     for (const carKey in car){
//         newCar[carKey] = `${carKey}:${car[carKey]} HI `
//         // newCar +
//     }
//     return newCar
// }
// console.log(addHi(car));

/////////////////////////////// exe 7 ////////////////////////////////
// const studentArray=[
// {
//     name:"izhak",
//     age:19,
//     Class:"י"
// },
// {
//     name:"maor",
//     age:18,
//     Class:"יב"
// },
// {
//     name:"ziv",
//     age:15,
//     Class:"ח"
// },]
// const newStudentArray = []
// function addSir(array) {
      
//     array.forEach((studentItem)=> {
//         studentItem.name = "sir" + studentItem.name
//             newStudentArray.push(studentItem)         
//     });
//     return newStudentArray
// }
// console.log(addSir(studentArray));

/////////////////////////////// exe 8 ////////////////////////////////
// const studentArray=[
//     {
//          name:"izhak",
//          age:19,
//          Class:"י"
//     },
//     {
//         name:"maor",
//         age:14,
//         Class:"יב"
//     },
//     {
//         name:"ziv",
//         age:15,
//         Class:"ח"
//     },
//     ]
// const newStudentArray = []
// function allowAge(array) {
//     array.forEach((studentItem)=> {
//         if (studentItem.age>16) {
//         newStudentArray.push(studentItem)        
//         }
//     });
//     return newStudentArray
// }
// console.log(allowAge(studentArray));


























































