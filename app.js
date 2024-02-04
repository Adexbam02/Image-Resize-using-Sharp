const fs = require('fs');
const path = require('path');
const sharp = require('sharp');


function compressImages(inputPath, outputPath) {
    
    // Read the input directory
    fs.readdir(inputPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        // Filter only files with common image extensions (you can extend this list)
        const imageFiles = files.filter(file =>
            /\.(jpg|jpeg|png|gif)$/i.test(path.extname(file))
        );

        // Process each image
        imageFiles.forEach(file => {
            const inputFilePath = path.join(inputPath, file);
            const outputFilePath = outputPath
                ? path.join(outputPath, file)
                : inputFilePath; // If no output path is provided, compress in place

            // Use sharp to compress the image
            sharp(inputFilePath)
                .toFile(outputFilePath, (err, info) => {
                    if (err) {
                        console.error(`Error compressing ${file}:`, err);
                    } else {
                        console.log(`Compressed ${file} to ${outputFilePath}.`);
                    }
                });
        });
    });
}

// Command-line arguments
const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath) {
    console.error('Usage: node compressImages.js <input-path> [output-path]');
} else {
    compressImages(inputPath, outputPath);
}
