// const fs = require('fs');
// const path = require('path');
// const sharp = require('sharp');

// const input = "./img";
// const output = "./output";


// const resizeImages = (inputPath, outputPath) => {
//     try {
//         fs.readdir(inputPath, (err, files) => {
//             files.forEach((file) => {
//                 // console.log(file)

//                 const inputFilePath = path.join(inputPath, file)
//                 const ouputFilePath = path.join(outputPath, file)

//                 sharp(inputFilePath)
//                     .resize({ width: 100 })
//                     .toFile(ouputFilePath, (err) => {
//                         err ? console.log("Failed to output") : console.log("Output successfully")
//                     })
//             })
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }
// resizeImages(input, output);


const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const input = "./img";
const output = "./output";

const resizeImages = (inputPath, outputPath) => {
    try {
        // If outputPath is not provided, use a default directory name
        if (!outputPath) {
            outputPath = './output'; // You can change this to your desired default output directory
        }

        // Ensure the output directory exists or create it
        fs.mkdir(outputPath, { recursive: true }, (err) => {
            if (err) {
                console.error('Error creating directory:', err);
                return;
            }

            fs.readdir(inputPath, (err, files) => {
                if (err) {
                    console.error('Error reading directory:', err);
                    return;
                }

                files.forEach((file) => {
                    const inputFilePath = path.join(inputPath, file);
                    const outputFilePath = path.join(outputPath, file);

                    sharp(inputFilePath)
                        .resize({ width: 100 })
                        .toFile(outputFilePath, (err) => {
                            if (err) {
                                console.log("Failed to output:", err);
                            } else {
                                console.log("Output successfully:", outputFilePath);
                            }
                        });
                });
            });
        });
    } catch (error) {
        console.log(error);
    }
};

resizeImages(input, output);
