// Function.prototype.testBind = function() {
//   let args = this.arguments
//   let that = this
//   return function() {
//     return that.apply(this, args)
//   }
// }

if (!Function.prototype.tbind) {
  Function.prototype.tbind = function () {
      var self = this,                        // 保存原函数
      context = [].shift.call(arguments), // 保存需要绑定的this上下文
      args = [].slice.call(arguments);    // 剩余的参数转为数组
      return function () {                    // 返回一个新函数
          self.apply(context,[].concat.call(args, [].slice.call(arguments)));
      }
  }
}

if (!Function.prototype.xbind) {
  Function.prototype.xbind = function() {
    let that = this
    let context = [].shift.call(arguments)
    let args = Array.from(arguments)
    return function () {
      return that.apply(context, [].concat.call(args, Array.from(arguments)))
    }
  }
}


var obj = {
  name: 'zhang'
}

var obj1 = {
  name: 'ge',
  getName(name) {
    this.name = name
    console.log(this.name)
  }
}

var gets = obj1.getName.tbind(obj,'san')

var res = gets()
