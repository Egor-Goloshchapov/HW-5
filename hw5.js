// const drink = prompt("Choose your drink: coffee, tea or juice");
// if(drink === "coffee" || drink === "tea" || drink === "juice"){
//     alert(`You choosed: ${drink}`)
// } else{
//     alert(`${drink}`)
// }



// const week = prompt("Write work days and then weekends");
// if (week === "monday tuesday wednesday thursday friday") {
//     alert("Its workdays")
// } else if (week === "saturday and sunday") {
// alert("Its weekends")
// } else{
//     alert("Try again")
// }


// const month = prompt("Write a random number of month");
// if(month === "1"){
//     alert("Its winter")
// } else if(month === "2"){
//     alert("Its winter")
// } else if(month === "3"){
//     alert("Its spring")
// } else if(month === "4"){
//     alert("Its spring")
// } else if(month === "5"){
//     alert("Its spring")
// } else if(month === "6"){
//     alert("Its summer")
// } else if(month === "7"){
//     alert("Its summer")
// } else if(month === "8"){
//     alert("Its summer")
// } else if(month === "9"){
//     alert("Its autumn")
// } else if(month === "10"){
//     alert("Its autumn")
// } else if(month === "11"){
//     alert("Its autumn")
// } else if(month === "12"){
//     alert("Its winter")
// } else{
//     alert("Write again")
// }



// let monthNumber
// switch (month) {
//     case "1":
//         monthNumber = 1;
//         alert(`${monthNumber} is january`);
//         break;
//     case "2":
//         monthNumber = 2;
//         alert(`${monthNumber} is february`);
//         break;
//     case "3":
//         monthNumber = 3;
//         alert(`${monthNumber} is march`);
//         break;
//     case "4":
//         monthNumber = 4;
//         alert(`${monthNumber} is april`);
//         break;
//     case "5":
//         monthNumber = 5;
//         alert(`${monthNumber} is may`);
//         break;
//     case "6":
//         monthNumber = 6;
//         alert(`${monthNumber} is june`);
//         break;
//     case "7":
//         monthNumber = 7;
//         alert(`${monthNumber} is july`);
//         break;
//     case "8":
//         monthNumber = 8;
//         alert(`${monthNumber} is august`);
//         break;
//     case "9":
//         monthNumber = 9;
//         alert(`${monthNumber} is september`);
//         break;
//     case "10":
//         monthNumber = 10;
//         alert(`${monthNumber} is october`);
//         break;
//     case "11":
//         monthNumber = 11;
//         alert(`${monthNumber} is november`);
//         break;
//     case "12":
//         monthNumber = 12;
//         alert(`${monthNumber} is december`);
//         break;

//     default:
//         alert("Write again")
// }



const choose = parseInt(prompt("Write 1 number of 3 colors: 1 is green, 2 is yellow, 3 is red"));
let message = "";
message =
    choose === 1
        ? "Go"
        : choose === 2
            ? "Wait"
            : choose === 3
                ? "Stop"
                : "We dont have this number"
alert(message);