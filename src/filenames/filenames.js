import * as fs from 'fs';
import * as path from 'path/win32';
async function listFilesInDirectory(directoryPath) {
    try {
        const files = fs.readdirSync(directoryPath);
        const fileArray = files.filter((file) => {
        const fullPath = path.join(directoryPath, file);
        return fs.statSync(fullPath).isFile();
        });
  
        return fileArray;
    } catch (error) {
        console.error('Error reading directory:', error);
        return [];
    }
}
async function saveFilenamesToFile(directoryPath, outputFilePath) {
    const fileArray = await listFilesInDirectory(directoryPath);
  
    try {
        fs.writeFileSync(outputFilePath, JSON.stringify(fileArray, null, 2));
        console.log('Filenames saved to', outputFilePath);
    } catch (error) {
        console.error('Error writing to file:', error);
    }
}
  

saveFilenamesToFile("../checkpoints", "./filenames.json");

