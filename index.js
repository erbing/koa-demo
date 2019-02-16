var a = 1;
var obj = {
  a: 2,
  b: function() {
    (() => {
      var a = 3;
      console.log(this.a);
    })();
  }
};

obj.b();
