//need to see this problem thoroughly


function dominantDirection(text) {
    const directions = countBy(text, (char) => {
        const script = characterScript(char.codePointAt(0));
        return script ? script.direction : 'none';
    }).filter(({
        name
    }) => name != 'none');

    if (directions.length < 2) return directions[0].name;
    return directions.reduce((a, b) => a.count > b.count ? a.name : b.name);
}

console.log(dominantDirection("Hello!"));
// → ltr


console.log(dominantDirection("Hey, مساء الخير"));