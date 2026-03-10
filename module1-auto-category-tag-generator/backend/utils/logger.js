const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, '..', 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const reqLogFile = path.join(logDir, 'ai_requests.log');
const jsonLogFile = path.join(logDir, 'ai_logs.json');

const logger = {
    info: (message, meta = {}) => {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] INFO: ${message} - ${JSON.stringify(meta)}\n`;
        console.log(`[${timestamp}] INFO: ${message}`);
        fs.appendFileSync(reqLogFile, logEntry);
    },
    error: (message, error = null) => {
        const timestamp = new Date().toISOString();
        const errorMsg = error ? ` - ${error.message || error}` : '';
        const logEntry = `[${timestamp}] ERROR: ${message}${errorMsg}\n`;
        console.error(`[${timestamp}] ERROR: ${message}${errorMsg}`);
        fs.appendFileSync(reqLogFile, logEntry);
    },
    logAiGeneration: (prompt, response) => {
        const timestamp = new Date().toISOString();
        const logEntry = {
            timestamp,
            prompt,
            response
        };

        // Initialize array if file doesn't exist, else append properly
        let logs = [];
        if (fs.existsSync(jsonLogFile)) {
            try {
                const fileContent = fs.readFileSync(jsonLogFile, 'utf8');
                if (fileContent) {
                   logs = JSON.parse(fileContent);
                }
            } catch (err) {
                console.error("Error reading ai_logs.json", err);
            }
        }
        
        logs.push(logEntry);
        fs.writeFileSync(jsonLogFile, JSON.stringify(logs, null, 2));
    }
};

module.exports = logger;

