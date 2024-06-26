// code your solution here
//creates a function that has a default value and can be overridden
function saturdayFun(){
}
function saturdayFun(String='roller-skate'){
    return(`This Saturday, I want to ${String}!`)
}
function mondayWork(string='go to the office'){
    return(`This Monday, I will ${string}.`)
}

//creates a functionthat is wrapped in another function
function wrapAdjective(str1){
    return function(str2){
        return(`You are ${str1}${str2}${str1}!`)
    }
}