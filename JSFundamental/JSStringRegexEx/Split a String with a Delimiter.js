function spiltString(string, delimiter) {
    let splited = string.split(delimiter);

    for (let i = 0; i < splited.length; i++) {
        console.log(splited[i]);
    }
}

spiltString('One-Two-Three-Four-Five', '-');