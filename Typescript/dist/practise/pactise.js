"use strict";
const greet = (name) => {
    console.log(`Hello, ${name}`);
};
greet('TypScript');
const greet2 = (person, date) => {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
};
greet2('Maddison', new Date());
const a = 'a';
let b = 'b';
const obj = { counter: 0 };
const handleRequest = (a, b) => {
    console.log(a, b);
};
const req = { url: 'https://example.com', method: 'GET' };
const req2 = { url: 'https://example.com', method: 'GET' };
handleRequest(req2.url, req2.method);
const req3 = { url: 'https://example.com', method: 'GET' };
handleRequest(req3.url, req3.method);
const req4 = { url: 'https://example.com', method: 'GET' };
handleRequest(req4.url, req4.method);
function liveDangerously(x) {
    console.log(x.toFixed());
}
