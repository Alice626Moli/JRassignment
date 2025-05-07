// functions.ts

// 5.1 默认参数与可选参数
function greet(name: string, greeting: string = 'Hello'): string {
    return `${greeting}, ${name}!`
  }
  
  console.log(greet('Mario'))                // Hello, Mario!
  console.log(greet('Mario', 'Welcome'))     // Welcome, Mario!
  
  // 5.2 泛型函数
  function identity<T>(arg: T): T {
    return arg
  }
  
  console.log(identity<number>(42))          // 42
  console.log(identity<string>('TypeScript'))// TypeScript
  
  // 5.3 函数重载
  function combine(a: number, b: number): number
  function combine(a: string, b: string): string
  function combine(a: any, b: any): any {
    return a + b
  }
  
  console.log(combine(1, 2))                 // 3
  console.log(combine('foo', 'bar'))         // foobar
  