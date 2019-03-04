Function.prototype.testBind = function() {
  let args = this.arguments
  let that = this
  return function() {
    return that.apply(this, arguments)
  }
}

var obj = {
  name: 'zhang'
}

var obj1 = {
  name: 'ge',
  getName() {
    return this.name
  }
}

var gets = obj1.getName.testBind(obj)

var res = gets()

console.log(res)