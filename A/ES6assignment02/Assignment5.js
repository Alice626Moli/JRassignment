// functions.ts
// 5.1 默认参数与可选参数
function greet(name, greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}
console.log(greet('Mario')); // Hello, Mario!
console.log(greet('Mario', 'Welcome')); // Welcome, Mario!
// 5.2 泛型函数
function identity(arg) {
    return arg;
}
console.log(identity(42)); // 42
console.log(identity('TypeScript')); // TypeScript
function combine(a, b) {
    return a + b;
}
console.log(combine(1, 2)); // 3
console.log(combine('foo', 'bar')); // foobar
//# sourceMappingURL=Assignment5.js.map