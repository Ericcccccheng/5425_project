const { exec } = require('child_process');

// Execute Python script
exec('python -u test.py', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing Python script: ${error}`);
    return;
  }
  console.log(`Python script output: ${stdout}`);
  if (stderr) {
    console.error(`Python script error: ${stderr}`);
  }
});