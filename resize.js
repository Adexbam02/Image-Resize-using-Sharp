const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputPath = "./img";
const output = "./output";

function resizeImages(inputPath, outputPath) {
    // if (!outputPath) {
        
    // }
  // Read the input directory
  fs.readdir(inputPath, (err, files) => {
    try {

    //   if (!output) {
    //     fs.mkdir(__dirname, "out", err => {
    //         console.log(err)
    //     })
    //   }

      // Iterate over each file in the directory
      files.forEach((file) => {
        const inputFilePath = path.join(inputPath, file);
        const outputFilePath = path.join(outputPath, file);

        // Resize each image and save to the output directory
        sharp(inputFilePath)
          .resize({ width: 100 })
          .toFile(outputFilePath, (err, info) => {
            if (err) {
              console.error(`Error resizing ${file}:`, err);
            } else {
              console.log(`Resized ${file} to ${outputFilePath}.`);
            }
          });
      });
    } catch (error) {
      console.error(err);
    }
  });
}

resizeImages(inputPath, output);
