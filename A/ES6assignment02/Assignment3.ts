

// 继续 index.ts 的内容

// 定义 Person 接口
interface Person {
    name: string;
    age: number;
  }
  
  /**
   * 打印问候信息
   * @param person Person 对象
   */
  function greet(person: Person): void {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
  }
  
  // 创建一个 Person 对象并调用
  const user: Person = { name: 'Mario', age: 32 };
  greet(user);
  