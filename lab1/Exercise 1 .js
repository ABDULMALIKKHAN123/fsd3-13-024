// write a fn to take number 0 to 9 and written in words
const toWords = (digit)=> {
    switch(digit){
        case 1 :
            return "One";
            case 2 :
                return "Two";
                case 3 :
                    return "Three";
                    case 4:
                    return "Four";
                    case 5 :
                        return "Five";
                        case 6:
                            return "Six";
                            case 7 :
                                return "seven";
                                case 8:
                                    return "Eight";
                                    case 9:
                                        return "Nine";
                                            case 0:
                                                return "Zero";
                    
    }
}

const toWords2 = (digit)=>{
    const words =["Zero","One","two","three","Four","Six","Seven","Eight","Nine"];
    return words[digit];
}


// switch ke alawa👇
// console.log(toWords(0));
// console.log(toWords(1));
// console.log(toWords(2));
// console.log(toWords(3));
// console.log (toWords(5));
// console.log (toWords(3));
// console.log (toWords(6));
// switch ke alawa 👆



// create another fn that take a no and show into word fn

const rollNum ="2503201000024";
const digits = String(rollNum).split("");
console.log(digits);

let inWords = "";

//syntax
//array name.forEach((c) =>{} );

digits.forEach((d) => {
    inWords += " " + toWords(Number(d));
    // console.log(toWords(Number(d)));
});
console.log(inWords);