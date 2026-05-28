// reverse a string 

/*
function ReverseString(s1){

    let RevString = " ";
    for(let i=s1.length-1;i>=0;i--){
        RevString += s1[i];    // we use += for Strings
    }
    return RevString;
}


let x = ReverseString("hello");
console.log(x);
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Check for palindrome 

/*
function PalindromeCheck(number){
    let rev =0 ;
    while(number>0){
        rev = rev*10 +number%10;
        number = Math.floor(number/10);
    }
    return rev;
}

let a = 121;
let x = PalindromeCheck(a);
if(x == a){
    console.log("Palindrome")
}

else{
    console.log("not a Palindome");
}

*/
//SOO PALINDROME MEANS Math.floor()

/////////////////////////////////////////////////////////////////////////////////////////////////////////



// Find the Largest Number in an Array

/*
function LargestNumber(arr){
    let largest = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest)
        {
            largest = arr[i];
        }
    }
    return largest;
}

let x = LargestNumber([1,2,3,4,5]);
console.log(x);

*/

// Remove duplicates from an ARRAY

/*
function RemoveDuplivates(arr){
    let perfectarr = []; // array stores the correct values.
    let result = {};    // make a seperate object result for each element of array 
    for(let i=0;i<arr.length;i++){
        let current = arr[i];
        if(current in result){
            continue;
        }
        else{
            result[current] =true;
            perfectarr.push(current);
        }
    }
    return perfectarr;
}



let x = RemoveDuplivates([4,1,2,2,2,55,100,1,2,2,2]);
x.sort((a,b) => a - b);  // sort x by taking 2 numbers a and b at a time then sorting them in ascending-order

console.log(x);

/*

/*
// for ascending order 
let y = x.split(' ').sort().join('');
console.log(y);

let fruits = ["banana", "apple", "cherry", "date"];
// 1. Sort alphabetically (A-Z)
// 2. Flip it backwards (Z-A)
let reverseSorted = fruits.sort().reverse();

console.log(reverseSorted);
*/



// Count Character Occurrences in a String

function CountCharacters(s1){
    let result = {};
    for(let item of s1){
        if(result[item]){
            result[item] = result[item] +1;   
            }
        else{
            result[item] = 1;
        }
    }
    return result;
}

let x = CountCharacters("I love youu youu youu 3000");
console.log(x);


