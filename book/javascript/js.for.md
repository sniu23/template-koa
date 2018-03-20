
## `for`和`forEach`和`for in`和`for of`

```js
// for 
// 最原始和标准
var myArray = [1, 2, 4, 'a', 'd']
for (var index = 0; index < myArray.length; index++) {
  console.log(myArray[index]);
}
```

```js
// forEach
// ES5加入的 Array 方法。
// 缺点： 无法 break, continue
myArray.forEach(function (value) {
  console.log(value);
});
```

```js
// for in
// 枚举属性`名`
var obj = {a:1, b:2, c:3};
for (var prop in obj) {
console.log("obj." + prop + " = " + obj[prop]);
}
// 输出:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"


// 不推荐下面这样
var myArry =[1,2,3,4];
myArry.desc ='four';
 for(var value in myArry){ //循环key
  console.log(value)
}
//"0"
//"1"
//"2"
//"3"
//"desc" 注意这里添加上去的属性也被遍历出来了
```

```js
// for of
// ES6加入
// 它能循环很多东西！！！
// 循环遍历对象的值，是遍历键值对后面的那一个 `value` 哦 ，与for in遍历 `key` 相反 ！！

let iterable = [10, 20, 30];
for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30

let iterable = "boo";
for (let value of iterable) {
console.log(value);
}
// "b"
// "o"
// "o"

let iterable = new Uint8Array([0x00, 0xff]);
for (let value of iterable) {
console.log(value);
}
// 0
// 255

let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);
for (let [key, value] of iterable) {
console.log(value);
}
// 1
// 2
// 3

for (let entry of iterable) {
console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]

let iterable = new Set([1, 1, 2, 2, 3, 3]);
for (let value of iterable) {
console.log(value);
}
// 1
// 2
// 3
```
