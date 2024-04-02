const prompt = require('prompt-sync')({sigint:true});

const lowerNumber = parseInt(prompt("Enter lower number: "));
const highNumber = parseInt(prompt("Enter the higher number: "));

if(lowerNumber > highNumber){
    console.log("Inadmissable");
} else {
    console.log(`The prime numbers between ${lowerNumber} and ${highNumber} are: `);
}

for(let i = lowerNumber; i<=highNumber;i++){
    let flag = 0;
    for(let j = 2; j<i;j++){
        if(i%j==0){
            flag = 1;
            break;
        }
    }
    if(i>1 && flag == 0){
        console.log(i);
    }
 //   console.log(`There are ${flag/i} prime numbers`)
}

function Ranger(lowerNumber, highNumber){
    let count = 0;
    for(let num = lowerNumber; num<=highNumber;num++){
        let isPrime = true;
        if(num<2){
            isPrime = false;
        } else {
            for(let i = 2; i<=Math.sqrt(num); i++){
                if(num%i === 0){
                    isPrime = false;
                    break;
                }
            }
        }
        if(isPrime){
            count++
        }
    }
        
    
    return count;
}


//let t = (higherNumber - lowerNumber);
let cp = Ranger(lowerNumber, highNumber);
console.log(`Number of prime numbers are: ${cp}`);