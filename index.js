const replacement = {
    3: 'Foo',
    5: 'Bar',
    7: 'Qix'
}

const fooBarQix = (input) => {
    let output = '';
    let changed = false;
    const stringInput = '' + input;


    // Divisible by
    for (const key in replacement) {
        if (input%key === 0) {
            output += replacement[key];
            changed = true;
        }
    }

    // Contains
    for (let index = 0; index < stringInput.length; index++) {
        const character = stringInput[index];
        if (replacement[character]) {
            output += replacement[character];
            changed = true;
        }
        if (character == '0') {
            output += '*';
        }
    }

    return changed ? output : stringInput.replace('0', '*');
}

exports.fooBarQix = fooBarQix;