// code your solution here
function saturdayFun(exist = "roller-skate") {
    return `This Saturday, I want to ${exist}!`
}

function mondayWork(exist = 'go to the office') {
    return `This Monday, I will ${exist}.`

}

function wrapAdjective(style) {
    let result = (function(compliment) {
        return "You are " + style + compliment + style + "!"
    })
    return result
}