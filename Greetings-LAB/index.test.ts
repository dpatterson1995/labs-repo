import { Greeter } from "./greeter";
import { JavaScriptGreeter } from "./JavascriptGreeter";
import { LoudGreeter } from "./loudGreeter";
import { HtmlGreeter } from "./htmlGreeter";


describe("tests for greeter class", () =>{
    test("Should return hello, Jimmy!", () =>{
        let greetResult = new Greeter("hello")
        let nameResult = greetResult.greet("Jimmy")

        expect(nameResult).toBe("hello, Jimmy!")
    })

    test("Should return Welcome, Dave!", () =>{
        let greetResult = new Greeter("Welcome")
        let nameResult = greetResult.greet("Dave")

        expect(nameResult).toBe("Welcome, Dave!")
    })
})
describe("tests for JavascriptGreeter class", () =>{
    test("should return console.log Hello, Jimmy!",()=>{
        let javaResult = new JavaScriptGreeter("Hello")
        let nameResult = javaResult.greet("Jimmy")

        expect(nameResult).toBe("console.log(Hello, Jimmy!)")
    })

    test("should return console.log Welcome, Dave!",()=>{
        let javaResult = new JavaScriptGreeter("Welcome")
        let nameResult = javaResult.greet("Dave")

        expect(nameResult).toBe("console.log(Welcome, Dave!)")
    })
})

describe("tests for LoudGreeter Class",()=>{
    test("should return hello Jimmy!!",()=>{
        let loudResult = new LoudGreeter("Hello")
        let nameResult = loudResult.greet("Jimmy")

        expect(nameResult).toBe("Hello, Jimmy!!")
    })

    test("should return Welcome Dave!!!!",()=>{
        let loudResult = new LoudGreeter("Welcome")
        loudResult.addVolume()
        loudResult.addVolume()
        let nameResult = loudResult.greet("Dave")

        expect(nameResult).toBe("Welcome, Dave!!!!")
    })
})

describe("tests for HTML greeter",()=>{
    test("Should return <p>Hello, Jimmy!</p>",()=>{
        let htmlResult = new HtmlGreeter("Hello", "p")
        let nameResult = htmlResult.greet("Jimmy")

        expect(nameResult).toBe("<p>Hello, Jimmy!</p>")
    })

    test("Should return <h1>Welcome, Dave!</h1>",()=>{
        let htmlResult = new HtmlGreeter("Welcome")
        let nameResult = htmlResult.greet("Dave")

        expect(nameResult).toBe("<h1>Welcome, Dave!</h1>")
    })
})