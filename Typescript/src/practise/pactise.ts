const greet = (name: string) => {
  console.log(`Hello, ${name}`)
}

greet('TypScript')

const greet2 = (person: string, date: Date) => {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`)
}
greet2('Maddison', new Date())

//literal reference
const a = 'a' //"a"
let b = 'b' // string
const obj = {counter: 0} // counter is number
//TS assumes that the object values might change

//BUT
const handleRequest = (a: string, b: 'GET' | 'POST') => {
  console.log(a, b)
}

const req = {url: 'https://example.com', method: 'GET'}

// handleRequest(req.url, req.method)
//This will throw an error. We need get, but req is an object. fn needs GET but req.method is a string

//Add assertions (Hover over to see changes)
const req2 = {url: 'https://example.com', method: 'GET' as 'GET'}
handleRequest(req2.url, req2.method)
//OR
const req3 = {url: 'https://example.com', method: 'GET'}
handleRequest(req3.url, req3.method as 'GET')
//OR
const req4 = {url: 'https://example.com', method: 'GET'} as const //makes the WHOLE object "literal". Acts as const but for the type system.
handleRequest(req4.url, req4.method)

//Non-null Assertion Operator  (Postfix!)
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed())
}
