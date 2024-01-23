const fs = require('fs');

const getCount = (name) => {
    let info = {};
    try {
        info = fs.readFileSync('./info.json');
        info = JSON.parse(info);
        info[name] = info[name] == null ? 1 : info[name] + 1;
    } catch (err) {
        info[name] = 1;
    }
    // console.log(JSON.stringify(info));
    fs.writeFile('./info.json', JSON.stringify(info), err => {
        if (err) {
            console.log(err.message);
            throw err;
        }
    }
    );

    return info[name];
}

module.exports = {getCount}