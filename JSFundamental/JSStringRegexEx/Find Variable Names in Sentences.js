function variableNames([input]) {
        let pattern =  /\b_([a-zA-Z0-9]+)\b/g;
        let variable = [];

    let macth = pattern.exec(input);

    while (macth) {
        variable.push(macth[1]);
        macth = pattern.exec(input);
    }

    console.log(variable.join(', '));
}

variableNames(['The _id and _age variables are both integers.']);