// Number default = 0
let age = 30;
let temperature = 36.6;
let bigNumber = 1e9; // 1 billion (scientific notation)
let negativeInfinity = -Infinity;
let notANumber = NaN;

// String default = ""
let name = "Alice";
let greeting = "Hello, world!";
let multiLine = `This is a
multi-line string`;

// Boolean default = false
let isActive = true;
let isLoggedIn = false;

// Object default = {}
let person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log("Hello!");
  },
};
console.log(person.name); // Output: Alice
person.greet(); // Output: Hello!

// Array default = []
let fruits = ["Apple", "Banana", "Cherry"];
let fruits2 = [1, 2, 3];
let fruits3 = [{}, {}, {}];
console.log(fruits[1]); // Output: Banana
fruits.push("Orange"); // Adds a new element to the array

// Function callback
// function sum(...arg) => sum(1,2,3,4,5)
// function sum(props) => sum(1)
// function sum({a,b}) => sum({a:1, b:2})
// function sum(a, b) => sum(1,3)
// shotFN: ()=> "a"
// shotFN: ()=> { return "a" }
// function component: function Aaa({children}){ return <div>children</div>}
// use: <Aaa>ghghg</Aaa>
// useState: (default value)=> { return [value, (set value)=> (value)=> set value] }
// const [a, setA] = useState(0)
// setA("a")
// setA((prevStart)=>{ return "a"})
// const [count, setCount] = useState(0)
// setCount(count+1)
// setCount(count+1)
// output: 1
// output: 3
// setCount(prevState=> prevState+1)
// setCount(prevState=> prevState+1)
// output: 2

// useEffect(fn callback,dependency array)
// useEffect(()=>{},[])
// useEffect(()=>{
// const init =()=> { }
// init()
// return ()=> {}
// },[])

// useMemo(fn callback,dependency array): any
// const n = useMemo(()=>{},[])
// const n = useMemo(()=>{
// logic
// return
// },[])
// const a = ()=> return
// <div>{a()}</div>
// <div>{n}</div>

// let x = 1, z = 3
// const a = ()=>{ return x + z}
// const b = useCallback(()=>{ return x + z },[])
// set x = 2, set z = 5
// onClick={()=> a()}: output: 7
// onClick={()=> b()}: 4

// {}? => true : "??" "||" "&&"
// []? => true
// ""? => true
// 0? => true
// 0 || null => null
// 0 ?? 1 => 0
// 0 || 1 => 1
// cosnt toggle = false
// active toggle || true => true
// active toggle ?? true => toggle

// false && <div/> => false
// <div className={false ? "nnn" : ""}/>

// const myRef = useRef()
// <div ref={myRef} />
// <div ref={e=> myRef.current = e} />
// myRef.current
// <form onSubmit>
// <button onClick={()=> myRef.current = 1}>submit1</button>
// <button onClick={()=> myRef.current = 2}>submit2</button>
// </form>
// <div onClick={a} />

// interval(callback,time) => infinite
// clearInterval()
// timeout(callback,time) => one time
// clearTimeout()
//
// eventlistener
// <div ref={myRef} />
// addEvenListener(event name, callback)
// myRef.current.addEvenListener("click", (event)=>{})
// myRef.current.removeEvenListener()
// useWindowResize

function sum(a, b) {
  return a + b;
}
let result = sum(5, 10);
console.log(result); // Output: 15

// Undefined
let x;
console.log(x); // Output: undefined

// Null
let y = null;
console.log(y); // Output: null
