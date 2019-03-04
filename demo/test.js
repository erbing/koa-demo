// Function.prototype.testBind = function(obj){
//     let that = this
//     return () => that.apply(obj, arguments)
// }

Function.prototype.testBind = function(obj){
    return () => this.apply(obj, arguments)
}


let foo = {
    name : 'zhang'
}

let bar = {
    name: 'xiao',
    getName() {
        console.log(this.name)
    }
}

var getFooName = bar.getName.testBind(foo)
// console.log(getFooName)
getFooName('123')