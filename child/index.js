const { stdin, stdout, stderr } = require('node:process');
const { spawn } = require("child_process");


const child = spawn('test', [], {
    stdio: ['pipe','pipe', stderr]
})

stdin.pipe(child.stdin)
child.stdout.pipe(stdout)


// child.stdin.pipe(stdin);
// stdin.pipe(stdout);


// child.stdout.on("data", (data) => {
//     console.log(data)
// })
