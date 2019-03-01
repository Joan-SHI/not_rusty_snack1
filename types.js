module.exports = {
    getBoolean,
    getFunction,
    getNull,
    getNumber,
    getObject,
    getString
}

function getBoolean () {
    return true
}

function getFunction () {
    return function() {}
}

function getNull () {
    return null
}

function getNumber () {
    return 8
}

function getObject () {
    return {}
}

function getString () {
    return ''
}