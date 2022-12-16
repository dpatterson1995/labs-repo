import { Greeter } from "./greeter";
import { HtmlGreeter } from "./htmlGreeter";
import { JavaScriptGreeter } from "./JavascriptGreeter";
import { LoudGreeter } from "./loudGreeter";

let testGreeter = new Greeter("hello");
console.log(testGreeter.greet("Jimmy"));

let testJavascriptGreeter = new JavaScriptGreeter("hello");
console.log(testJavascriptGreeter.greet("Mike"));

let test = new LoudGreeter("hello");
test.addVolume();

console.log(test.greet("jake"));

let testHtmlGreeter = new HtmlGreeter("Hello");
console.log(testHtmlGreeter.greet("Dave"));


