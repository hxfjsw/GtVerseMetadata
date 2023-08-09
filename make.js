const fs = require("fs");

const define = require ('./define.json');

const template = {
    "name": "HTML5 Shiv",
    "image": "https://hxfjsw.github.io/GtVerseMetadata/images/test.jpg",
    "animation_url": "https://hxfjsw.github.io/GtVerseMetadata/video/test.mp4",
    "attributes": [
        {
            "trait_type": "MaxSpeed",
            "value": "220 km/h"
        },
        {
            "trait_type": "MaxTorque",
            "value": "320 Nm"
        },
        {
            "trait_type": "Weight",
            "value": "1,415 kg"
        },
        {
            "trait_type": "Brand",
            "value": "BMW"
        }
    ]
}

function deep_copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

for (let i = 0; i < 100; i++) {
    let metadata = deep_copy(template);
    const define = defines[i % defines.length];
    metadata.name = "#" + i +" " + define.Name.replaceAll('_', ' ');
    metadata.image = "https://hxfjsw.github.io/GtVerseMetadata/images/" + define.Name + ".jpg";
    metadata.animation_url = "https://hxfjsw.github.io/GtVerseMetadata/video/" + define.Name + ".mp4";

    console.log(metadata);
    metadata.attributes[0].value = define.MaxSpeed + " km/h";
    metadata.attributes[1].value = define.MaxTorque + " nm";
    metadata.attributes[2].value = define.Weight + " kg";
    metadata.attributes[3].value = define.Brand;

    //todo 写入到文件
    fs.writeFileSync("./docs/json/" + i + ".json", JSON.stringify(metadata));
}

