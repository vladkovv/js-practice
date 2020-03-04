function showFullName(firstPart, lastPart) {
    console.log(this[firstPart] + " " + this[lastPart]);
}

const user = {
    firstName: "Василий",
    lastName: "Петров",
    patronym: 'Иванович'
};

Function.prototype.myCall = function (context, ...args) {
    return this.apply(context, args)
}


Function.prototype.myApply = function (context, args) {
    return this.call(context, ...args)
}

Function.prototype.myBind = function (context, ...args) {
    return () => this.apply(context, args)
}

showFullName.myCall(user, 'firstName', 'lastName');
showFullName.myCall(user, 'firstName', 'patronym');

showFullName.myApply(user, ['firstName', 'lastName']);
showFullName.myApply(user, ['firstName', 'patronym']);

const bindedFunc = showFullName.myBind(user, 'firstName', 'patronym');
bindedFunc();
