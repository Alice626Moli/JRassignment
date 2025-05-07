// classes.ts

/**
 * 定义一个 Person 类
 */
class Person {
    name: string
    age: number
  
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
  
    introduce(): string {
      return `My name is ${this.name} and I'm ${this.age} years old.`
    }
  }
  
  // 测试
  const mario = new Person('Mario', 32)
  console.log(mario.introduce())  // My name is Mario and I'm 32 years old.
  