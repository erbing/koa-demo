var age = 11;
const modules = {
  age: 14
};

let myModule = {
  age: 12,
  getAge: function() {
    return this.age;
  }
};

let getAge = myModule.getAge;

getAge.bind(window)(); // 11
getAge.bind(modules)(); // 14
