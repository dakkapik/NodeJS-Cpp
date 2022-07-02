'use strict'
const { spawn } = require('child_process')
const { Readable } = require("stream")

const child = spawn('main', [], {
    stdio: ['ignore', 'pipe', 'inherit']
})

child.stdout.on("data", (data) => {
    console.log(data)
})


// const readable = Readable.from(child.stdout)

// readable.on('data', (chunk) => {
//     console.log(chunk.toString())
// })


