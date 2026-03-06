const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const PropertyResponse = require('./response/propertyResponse');
const { spawn } = require('node:child_process');


app.use(express.json());

app.post("/property", (req, res) => {

    const addressString = req.body.address;
    const command = "./scripts/venv/bin/python3";
    const scriptFile = "./scripts/property_lookup.py";

    // start lookup process, kill after 12sec (no data found)
    const lookup = spawn(command, 
        [scriptFile, addressString], 
        { timeout: 12000, killSignal: 'SIGKILL' }
    );

    // response on stdout
    lookup.stdout.on('data', (r) => {
        const response = new PropertyResponse(true, r.toString(), "Property data successfully retrieved");
        res.send(response);
    });

    // response on stderr
    lookup.stderr.on('data', (e) => {
        const response = new PropertyResponse(false, null, `Error: ${e.toString()}`);
        res.send(response);
    });

    // response on close/timeout
    lookup.on('close', (code, signal) => {
        if (signal === 'SIGKILL') {
            const response = new PropertyResponse(false, null, "Could not retrieve property data");
            res.send(response);
        } else {
            console.log(`child process exited with code ${code}`)
        }
    });

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})