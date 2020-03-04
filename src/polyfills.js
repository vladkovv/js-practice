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


Function.prototype.myApply = function(context, args) {
    return this.call(context, ...args)
}
showFullName.myCall(user, 'firstName', 'lastName');
showFullName.myCall(user, 'firstName', 'patronym');
console.log('===================================');

showFullName.myApply(user, ['firstName', 'lastName']);
showFullName.myApply(user, ['firstName', 'patronym']);
