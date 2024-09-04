function titleCase(str) {
    let mot = str.toLowerCase().split(' ');
    let array = [];

    mot.forEach(mots => {
        let firstLetter = mots.charAt(0).toUpperCase();

        let replacement = mots.replace(mots.charAt(0), firstLetter);

        array.push(replacement);
    });

    console.log (array.join(' '));
}

titleCase("hey le monde");