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


var obj = {
  name: 'zhang'
}

var obj1 = {
  name: 'ge',
  getName() {
    console.log(this.name)
  }
}

var gets = obj1.getName.tbind(obj)

var res = gets()
