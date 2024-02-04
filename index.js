const sharp = require('sharp')
const fs = require('fs')

// fs.mkdir("./files")
const input = "./img"
const formatImg = () => {
    const inpu = input.ma
    try {
        sharp(input)
            .resize({ width: 100 })
            .toFile("out.jpg")
            // .toBuffer()
            // .then(data => {
            //     // 100 pixels wide, auto-scaled height
            //     fs.mkdir("./files")
            // });
    } catch (error) {
        console.log(error)
    }
}

formatImg()
