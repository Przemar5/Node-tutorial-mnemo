// const tuts = require('./tuts')

// console.log(tuts.sum(2,2))
// console.log(tuts)



// 14

// const EventEmitter = require('events')
// const eventEmitter = new EventEmitter()

// eventEmitter.on('tutorial', () => {
//   console.log('Tutorial event has occured')
// })
// eventEmitter.on(1, () => {
//   console.log('Number tutorial event has occured')
// })
// eventEmitter.on([], () => {
//   console.log('Array tutorial event has occured')
// })
// eventEmitter.on(null, () => {
//   console.log('Null tutorial event has occured')
// })
// eventEmitter.on('sum', (a, b) => {
//   console.log(`Sum event has occured: ${a} + ${b} = ${a+b}`)
// })

// eventEmitter.emit('tutorial')
// eventEmitter.emit(1)
// eventEmitter.emit([])
// eventEmitter.emit(null)
// eventEmitter.emit('sum', 2, 3)
 
// class Person extends EventEmitter
// {
//   constructor(name) {
//     super()
//     this._name = name
//   }

//   get name() {
//     return this._name
//   }
// }

// let pedro = new Person('Pedro')
// pedro.on('name', () => {
//   console.log(`My name is ${pedro.name}`)
// })

// pedro.emit('name')



// const readline = require('readline')
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// let num1 = Math.floor((Math.random() * 10) + 1)
// let num2 = Math.floor((Math.random() * 10) + 1)
// let answer = num1 + num2

// rl.question(`What is ${num1} + ${num2}?\n`, (userInput) => {
//   if (userInput.trim() == answer) {
//     rl.close()
//   }
//   else {
//     rl.setPrompt('Incorrect response. Please try again!\n')
//     rl.prompt()
//     rl.on('line', (userInput) => {
//       if (userInput.trim() == answer) {
//         rl.close()
//       }
//       else {
//         rl.setPrompt(`Your answer of ${userInput} is incorrect. Please try again!\n`)
//         rl.prompt()
//       }
//     })
//   }
// })

// rl.on('close', () => {
//   console.log('Correct!!!')
// })

// const rl2 = readline.createInterface({
//   input: process.stdin,
//   output:process.stdout
// })

// rl2.question('Are you hungry?\n', (input) => {
//   if (input.trim().toLowerCase() == 'yes') {
//     console.log('So go eat something!\n')
//   }
//   else if (input.trim().toLowerCase() == 'no') {
//     rl2.setPrompt('Are you sure?\n')
//     rl2.prompt()
//     rl2.on('line', (input) => {
//       if (input.trim().toLowerCase() == 'yes') {
//         console.log('So go eat something!\n')
//       }
//       else if (input.trim().toLowerCase() == 'no') {
//         rl2.setPrompt('Are you sure?\n')
//         rl2.prompt()
//       }
//       else {
//         rl2.setPrompt('There\'s no such option. Are you hungry?\n')
//         rl2.prompt()
//       }
//     })
//   }
//   else {
//     rl2.setPrompt('There\'s no such option. Are you hungry?\n')
//     rl2.prompt()
//   }
// })



// 35

// const fs = require('fs')

// fs.writeFile('example.txt', 'Przemek Krogulski proudly presents an example file!', (err) => {
//   if (err) {
//     console.log(err)
//   }
//   else {
//     console.log('File created successfully!\n')
//     fs.readFile('example.txt', 'utf8', (err, file) => {
//       if (err) {
//         console.log(err)
//       }
//       else {
//         console.log(file)
//       }
//     })
//   }
// })


// 1:13

// const http = require('http')
// const server = http.createServer((req, res) => {
//   if (req === '/') {
//     res.write('Hello world!')
//     res.end()
//   }
// })

// server.listen('8880')




// const http = require('http')
// const fs = require('fs')

// http.createServer((req, res) => {
//   const readStream = fs.createReadStream('./page.html')
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   readStream.pipe(res)
// }).listen(8881)




// 1:37

// const express = require('express')
// const path = require('path')
// const Joi = require('joi')
// const bodyParser = require('body-parser')
// const app = express()

// app.use('/public', express.static(path.join(__dirname, 'static')))
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'static', 'page.html'))
// })
// app.listen(8886)

// app.get('/example/:name/:age', (req, res) => {
//   console.log(req.params)
//   console.log(req.query)
//   res.send(`Hello ${req.params.name} of the age ${req.params.age}!`)
// })

// app.post('/', (req, res) => {
//   console.log(req.body)
//   const schema = Joi.object().keys({
//     email: Joi.string().trim().email().required(),
//     password: Joi.string().min(5).max(10).required()
//   })
//   const {err, result} = schema.validate(req.body)

//   if (err) {
//     console.log(err)
//     res.send('An error has occured')
//   }
//   else {
//     console.log(result)
//     res.send('successfully posted data')
//   }
//   // })
//   // res.send('Successfully posted data')
//   // res.json({success: true})
// })




// 2:16

// const Joi = require('joi')

// const arrayString = ['apple', 'banana', 'cipher']
// const arrayObjects = [{example: 'example1'}, {example: 'example2'}]

// const userInput = {
//   personalInfo: {
//     streetAddress: '123456789',
//     city: 'sdfghnjm',
//     state: 'fs'
//   },
//   preferences: arrayString
// }

// const personalInfoSchema = Joi.object().keys({
//   streetAddress: Joi.string().trim().required(),
//   city: Joi.string().min(2).max(255).trim().required(),
//   state: Joi.string().length(2).trim().required()
// })

// const preferencesSchema = Joi.array().items(Joi.string())

// const schema = Joi.object().keys({
//   personalInfo: personalInfoSchema,
//   preferences: preferencesSchema
// })

// const {err, result} = schema.validate(userInput)

// if (err) {
//   console.log(err)
// }
// else {
//   console.log(result)
// }

// console.log(err)
// console.log(result)



// 2:25

// const express = require('express')
// const path = require('path')
// const app = express()

// app.use('/public', express.static(path.join(__dirname, 'static')))
// app.set('view engine', 'ejs')

// app.get('/:userQuery', (req, res) => {
//   res.render('index', {
//     data: {
//       userQuery: req.params.userQuery,
//       searchResults: ['item1', 'item2', 'item3'],
//       loggedIn: true,
//       username: 'Przemo'
//     }
//   })
// })
// app.listen(8886)



// 2:36

// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()

// app.use(bodyParser.json())
// app.use((req, res, next) => {
//   console.log(req.url, req.method)
//   req.additional = 'banana'
//   next()
// })

// app.get('/', (req, res) => {
//   console.log(req.additional)
//   res.write('Hello!')
//   res.end()
// }).listen(8886)



// 2:43


// const express = require('express')
// const path = require('path')
// const app = express()

// app.use('/public', express.static(path.join(__dirname, 'static')))
// app.set('view engine', 'ejs')

// const people = require('./people')

// app.use('/people', people)

// app.get('/', (req, res) => {
//   console.log(req.additional)
//   res.write('Hello!')
//   res.end()
// }).listen(8886)



const express = require('express')
const app = express()
const router = express.Router()

router.use((req, res, next) => {
  console.log('Router level middleware being used')
  next()
})

router.get('/test', (req, res) => {
  res.send('Index page')
})

app.use('/', router)
app.listen(8886)