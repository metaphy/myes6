# My ES6 Note
* ES5只有全局作用域和函数作用域，没有块级作用域。let为ES6新增了块级作用域。
* 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
* 顶层对象的属性与全局变量挂钩，被认为是 JavaScript 语言设计的最大败笔之一。首先是没法在编译时就报出变量未声明的错误，其次，程序员很容易不知不觉地就创建了全局变量（比如打字出错）；最后，顶层对象的属性是到处可以读写的，这非常不利于模块化编程。ES6 为了改变这一点，规定let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
* ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring），比如： let [x,y] = [400, 600];
* 箭头函数可以让里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域。箭头函数可以让this指向固定化，这种特性很有利于封装回调函数。
* 闭包就是函数中又定义了一个函数，并且，内部函数可以引用外部函数的参数和局部变量，当内部函数被返回时，相关参数和变量都保存在返回的函数中。闭包的作用：封装数据，所以通常用面向对象实现的功能，用闭包也能实现。
* (一个英文的解释) A closure is a persistent scope which holds to the local variables even after the code has move out of that code block.
* generator和普通函数相比，有什么用？ 因为generator可以在执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数，还有另一个巨大的好处，就是把异步回调代码变成“同步”代码。

* ES6 - Promise is an resolution for the asynchronization programming; it is to replace the traditional callback funciton.

const promise = new Promise(function(resolve, reject) { if (/* 异步操作成功 */){ resolve(value); } else { reject(error); } });

promise.then(function(value) { // success }, function(error) { // failure });
