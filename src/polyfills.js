function showFullName() {
    alert( this.firstName + " " + this.lastName );
  }
  
  const user = {
    firstName: "Василий",
    lastName: "Петров"
  };
  
Function.prototype.myCall = function(context, ...args) {
    return this.bind(context, ...args)()
}

showFullName.myCall(user)
