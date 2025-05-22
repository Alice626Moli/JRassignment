// classes.ts
/**
 * 定义一个 Person 类
 */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `My name is ${this.name} and I'm ${this.age} years old.`;
    }
}
// 测试
const mario = new Person('Mario', 32);
console.log(mario.introduce()); // My name is Mario and I'm 32 years old.
//# sourceMappingURL=Assignment4.js.map