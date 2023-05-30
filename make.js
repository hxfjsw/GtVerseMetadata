const fs = require("fs");

const template = {
    "name": "HTML5 Shiv",
    "image": "https://hxfjsw.github.io/GtVerseMetadata/images/test.jpg",
    "animation_url": "https://hxfjsw.github.io/GtVerseMetadata/video/test.mp4",
    "attributes": []
}

function deep_copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

for (let i = 0; i < 100; i++) {
    let metadata = deep_copy(template);
    metadata.name = "Test #" + i;

    console.log(metadata);
    //todo 写入到文件
    fs.writeFileSync("./docs/json/" + i + ".json", JSON.stringify(metadata));
}

