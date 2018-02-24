# 安装

[地址](https://github.com/facebook/jest)

```bash
npm install --save-dev jest
```

# 使用

```bash
npm test
```

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
// 关于这个测试文件的位置： 
// 建议是对每个组件新建一个__test__文件夹，然后文件命名是name.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// package.json
{
  "scripts": {
    "test": "jest"
  }
}
```

## Matchers

```js
// 常用： toBe() （等价 ===）
test('2加2等于4', ()=> {
    expect(2 + 2).toBe(4);
});

// 对象：toEqual()
test('object assigenment', ()=> {
    let data = { one: 1};
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
})

// 反向： not
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

// 是： toBeTruthy()
// 否： toBeFalsy()
// 空： toBeNull()
// 未定义： toBeUndefined()
// 已定义： toBeDefined()
test('null', () => {
    let n = null;
      expect(n).toBeNull();
      expect(n).toBeDefined();
      expect(n).not.toBeUndefined();
      expect(n).not.toBeTruthy();
      expect(n).toBeFalsy();
});

// 大于 toBeGreaterThan()
// 大于等于 toBeGreaterThanOrEqual()
// 小于 toBeLessThan()
// 小于等于 toBeLessThanOrEqual()
test('two plus two', () => {
    let value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBe(4);
    expect(value).toEqual(4);
})

// 浮点数： toBeCloseTo()
test('adding floating point numbers', () => {
    let value = 0.1 + 0.2;
    expect(value).not.toBe(0.3);    // It isn't! Because rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});

// 正则表达式匹配： toMatch()
test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
})

// 抛出错误： toThrow()
function compileAndroidCode() {
    throw new ConfigError('you are using the wrong JDK');
}
test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(ConfigError);
    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});

// 异步测试：1.callback
test('the data is uyun', done => {
    function callback(data) {
        expect(data).toBe('uyun');
        done();
    }
    fetchData(callback);
});

// 异步测试：2.promise
test('the data is uyun', () => {
    return fetchData().then(data => {
        expect(data).toBe('uyun');
    });
});

// 异步测试：3.async/await
test('the data is uyun', async () => {
    const data = await fetchData();
    expect(data).toBe('uyun');
});
```

常见参数：

```json
// --runInBand 在当前进程中连续测试所有
// --forceExit 测试完成后强制退出
// --coverage 覆盖率报告
"scripts": {
    "test": "jest --runInBand --forceExit tests/",
    "test:coverage": "jest --runInBand --forceExit --coverage",
  },
```

