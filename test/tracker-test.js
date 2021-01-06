function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.onload = resolve
        script.onerror = reject
        script.src = src
        document.head.append(script)
    })
}

loadScript(`../v10.1/goal-list.js`)
    .then(() => loadScript(`../lib/item-tracker/tracker-data.js`))
    .then(() => {
        test_if_en_and_jp_tracker_match_on_tracker_data()
    })

function test_if_en_and_jp_tracker_match_on_tracker_data() {
    const getGoals = () => {
        const goals = [];
        for (let i = 1; i <= 25; i++) {
            goals.push(...bingoList.normal[i]);
        }
        goals.sort((a, b) => a.name < b.name ? -1 : 1);
        return goals
    }

    const goals = getGoals()
    var mismatches = 0;

    for (var g = 0; g < goals.length; g++) {
        goal = goals[g]

        for (let i = 0; i < window.trackerData.length; i++) {
            var matchingData = window.trackerData[i];
            var match = matchingData.regex.exec(goal.name);
            if (match !== null) {
                matchRegex = matchingData.regex;
                break;
            } else {
                matchRegex = 'none';
            }
        }

        for (let i = 0; i < window.trackerData.length; i++) {
            var matchingDataJP = window.trackerData[i];
            var matchJP = matchingDataJP.regexJP.exec(goal.jp);
            if (matchJP !== null) {
                matchRegexJP = matchingDataJP.regex;
                break;
            } else {
                matchRegexJP = 'none';
            }
        }

        matches = matchingData.regexJP.exec(goal);

        if (matchRegexJP !== matchRegex) {
            console.log(`mismatch tracker-data: english: ${matchRegex} - jp: ${matchRegexJP},    for goal: ${goal.name}`);
            mismatches++;
        }

        if (matchRegex === 'none' || matchRegexJP === 'none') {
            continue;
        }

        if ('counter' in matchingData.options && !('denominator' in matchingData.options.counter) && (+match[1] !== +matchJP[1])) {
            console.log(`mismatch denominator: english: ${+match[1]} - jp: ${+matchJP[1]},      for goal: ${goal.name}`)
            mismatches++;
            console.log(matchingDataJP)
        }
    }
    if (mismatches == 0) {
        console.log("Passed test: no mismatches between EN and JP tracker data found!")
    } else {
        console.log(`Failed test: found ${mismatches} mismatches between EN and JP tracker data.`)
    }
}
