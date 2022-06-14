// Assignment code here

//variables used for random password
var numberChars="0,1,2,3,4,5,6,7,8,9";
var upperChars= "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var lowerChars= "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var specialChars= "!,@,#,$,%,^,&,*,?,<,>,-,_"

//password length requirements
function userOptions() {
  var length=prompt ("How long is your password required to be?");
    if (length <8 ){
      alert("Please choose a password that is greater than 8 characters.")
      return null;
    }
    if (length >50) {
      alert("Please choose a password that is 50 characters or less.")
      return null;
    }

//determining other special password requirements

var confirmLowerCase= confirm("Does your password require lowercase letters?");
var confirmUpperCase= confirm("Does your password require uppercase letters?");
var confirmNumber= confirm("Does your password require numbers?");
var confirmSpecial= confirm("Does your password require any special characters?");

var allChars = {
  length:length,
  confirmLowerCase:confirmLowerCase,
  confirmUpperCase:confirmUpperCase,
  confirmNumber:confirmNumber,
  confirmSpecial:confirmSpecial,
}
return allChars;

};

function randomChars(Array) {
  var randomIndex = Math.floor(Math.random() * Array.length);
  var randomElement = Array[randomIndex];
  return randomElement;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var userChoice = userOptions();
  var typesChars = []
  var actualChars = []

  if (userChoice.confirmSpecial) {
    typesChars = typesChars.concat(specialChars);
    actualChars.push(randomChars(specialChars));
  }

  if (userChoice.confirmLowerCase) {
    typesChars = typesChars.concat(specialChars);
    actualChars.push(randomChars(specialChars));
  }

  if (userChoice.confirmUpperCase) {
    typesChars = typesChars.concat(specialChars);
    actualChars.push(randomChars(specialChars));
  }

  if (userChoice.confirmNumber) {
    typesChars = typesChars.concat(specialChars);
    actualChars.push(randomChars(specialChars));
  }
  
  for (let i=0; i<userChoice.length; i++) {

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
