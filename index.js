console.log("i'm ready")

// Iteration 1: Names and Input

var driverName = 'hacker1';
console.log(`The Driver's name is ${driverName}. `);
var navigatorName= 'hacker2';
console.log(`The Navigator's name is ${navigatorName}. `);

// Iteration 2: Conditionals

if (driverName.length > navigatorName.length)
    console.log(`The driver has the longest name, it has ${driverName.length} characters.`);
else if (driverName.length < navigatorName.length)
    console.log(`It seems that the navigator has the longest name, it has ${navigatorName.length} characters.`);
else 
    console.log(`Wow, you both have equally long names, ${driverName.length} characters!`)

    // Iteration 3: Loops

result1="";
for (let i=0 ;i<driverName.length ; i++) {
    result1+=driverName[i].toUpperCase();
    if (i<driverName.length-1)
        result1+=" "}
console.log(result1)

result2=""
for(let j=navigatorName.length-1;j>=0;j--){
    result2+=(navigatorName[j])
}
console.log(result2)