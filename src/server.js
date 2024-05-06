const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(cors({
    origin: 'http://localhost:3000', // Match the URL of your frontend
    methods: "POST",
    allowedHeaders: "*"
}));

app.use(bodyParser.json({ limit: '50mb' })); // Adjust limit as necessary

app.post('/run-python', (req, res) => {
    console.log("Received request on /run-python");

    if (!req.body.imageData) {
        console.error("No image data provided");
        return res.status(400).send("No image data provided");
    }

    // Get the base64 encoded image data
    const base64Image = req.body.imageData;

    // Spawn Python process with the base64 image as an argument
    const pythonProcess = spawn('python', ['-u', 'imageRetrieval.py', base64Image]);

    let completeData = '';
    pythonProcess.stdout.on('data', (data) => {
        completeData += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error('Error from Python script:', data.toString());
    });

    pythonProcess.on('exit', (code) => {
        console.log('Python process exited with code ', code);
        console.log('Complete Data Received:', completeData);  // Log the complete raw data received

        // Extract JSON-like output
        const match = completeData.match(/\[.*\]/);
        if (match) {
            try {
                const output = JSON.parse(match[0]);
                res.send({ similarImages: output });
            } catch (parseError) {
                console.error("Failed to parse Python output:", parseError);
                res.status(500).send("Failed to parse Python output: " + parseError.message);
            }
        } else {
            res.status(500).send("No valid JSON array found in Python output");
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
