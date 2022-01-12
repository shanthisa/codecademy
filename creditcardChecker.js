// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
//371612019985236
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = (txt, cardNum) => {
  let newArr = [];
  console.log('card: ', cardNum, cardNum.length);
  for (i= cardNum.length-2; i >= -1 ; i=i-2){
    
    let double = cardNum[i]*2
    if (double > 9) {
        double -= 9;
    }
    //new arr [ 8, 6, 12, 14, 0, 0, 12, 0 ]
    console.log('digit: '+cardNum[i] + ' prev: ' + cardNum[i+1], 'i: ',i);
    if (cardNum[i+1] !== undefined) newArr.unshift(cardNum[i+1]);
    if(cardNum[i] !== undefined) newArr.unshift(double);
  }
  console.log('new arr', newArr, ' length: ', newArr.length);
  let sum = newArr.reduce((prev, curr) => prev + curr);
  console.log('sum of digits: ', sum);
  if (sum % 10 === 0) {
    console.log(txt + ' is valid credit card');
    return true;
  }
  else {
    console.log(txt + ' is invalid credit card');
    return false;
  }
}

validateCred('invalid1', invalid1);
validateCred('valid1', valid1);
validateCred('invalid2', invalid2);
validateCred('valid2', valid2);
validateCred('invalid3', invalid3);
validateCred('valid3', valid3);
validateCred('invalid4', invalid4);
validateCred('valid4', valid4);
validateCred('invalid5', invalid5);
validateCred('valid5', valid5);
validateCred('mystery1', mystery1);
validateCred('mystery2', mystery2);
validateCred('mystery3', mystery3);
validateCred('mystery4', mystery4);
validateCred('mystery5', mystery5);

const findInvalidCards = (arrCC) => {
  let invalidCards = [];
  for (const cc of arrCC) {
    if (!validateCred(cc,cc)) invalidCards.push(cc);
  }
  console.log('invalid: ', invalidCards);
  return invalidCards;
}

let ICCs = findInvalidCards(batch);

function idInvalidCardCompanies(invalidCC) {
 let company = {
   3: "Amex",
   4: "Visa",
   5: "Mastercard",
   6: "Discover"
 }
 let ICC = [];
 for (const cc of invalidCC) {
   for (const c in company)
   if (cc[0].toString() === c) {
     console.log(company[c] + ' is invalid');
    if(ICC.includes(company[c])) continue; 
    else
     ICC.push(company[c]);
   }
   else console.log(cc[0].toString(), c);
 }
 if (ICC.length === 0) console.log('Company not found');
 else {
   console.log('ICC', ICC);
   return ICC;
 }
}
idInvalidCardCompanies(ICCs);


