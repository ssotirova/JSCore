function occurencesWord(sentense, word) {
    let count = 0;
    let pattern = new RegExp("\\b"+word+"\\b", "gi");
    let match = pattern.exec(sentense);

    while (match) {
        count++;
        match = pattern.exec(sentense);
    }

    console.log(count);
}

occurencesWord('The waterfall was so high, that the child couldn’t see its peak.', 'the');