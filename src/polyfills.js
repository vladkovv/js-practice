function showFullName(firstPart, lastPart) {
    console.log( this[firstPart] + " " + this[lastPart] );
  }
  
  const user = {
    firstName: "Василий",
    lastName: "Петров",
    patronym: 'Иванович'
  };

Function.prototype.myCall = function(context, ...args) {
    return this.apply(context, args)
}

showFullName.myCall(user, 'firstName', 'lastName')
showFullName.myCall(user, 'firstName', 'patronym')
