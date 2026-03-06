const express = require('express');
const { spawn } = require('node:child_process');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/property", (req, res) => {
    const data = req.body;
    const command = "./scripts/venv/bin/python3"

    const lookup = spawn(command, 
        ["./scripts/property_lookup.py", data.address]);

    lookup.stdout.on('data', (r) => {
        res.send(r.toString());
    })

    lookup.stderr.on('data', (r) => {
        console.error(`stderr: ${r.toString()}`);
    })

    lookup.on('close', (code) => {
        console.log(`child process exited with code ${code}`)
    })
    
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})