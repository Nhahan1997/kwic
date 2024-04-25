import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


// Set up file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an Express application
const app = express();
const port = 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));




// Catch-all route to serve the main HTML file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for serving the main HTML file on '/home'
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});