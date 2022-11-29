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

loadScript(`../v10.2/goal-list.js`)
    .then(() => loadScript(`../lib/item-tracker/tracker-data.js`))
    .then(() => loadScript(`../lib/item-tracker/tracker-default.js`))
    .then(() => {
        testIfEnAndJpTrackerMatchOnTrackerData()
        testIfTrackerDefaultNamesExistInGoalList()
    })

function testIfEnAndJpTrackerMatchOnTrackerData() {
    const goals = getGoals()
    let mismatches = 0;

    for (const goal of goals) {

        let goalTrackerData = null;
        let goalMatch = null;
        for (const trackerData of window.trackerData) {
            goalMatch = trackerData.regex.exec(goal.name);
            if (goalMatch !== null) {
                goalTrackerData = trackerData
                break;
            }
        }

        let goalTrackerDataJP = null;
        let goalMatchJP = null;
        for (const trackerData of window.trackerData) {
            goalMatchJP = trackerData.regexJP.exec(goal.jp);
            if (goalMatchJP !== null) {
                goalTrackerDataJP = trackerData;
                break;
            }
        }

        if (goalTrackerDataJP?.regex !== goalTrackerData?.regex) {
            console.log(`mismatch tracker-data: english: ${goalTrackerData?.regex} - jp: ${goalTrackerDataJP?.regex},    for goal: ${goal.name}`);
            mismatches++;
        }

        if (goalTrackerData === null || goalTrackerDataJP === null) {
            continue;
        }

        if ('counter' in goalTrackerData.options && !('denominator' in goalTrackerData.options.counter) && (+goalMatch[1] !== +goalMatchJP[1])) {
            console.log(`mismatch denominator: english: ${+goalMatch[1]} - jp: ${+goalMatchJP[1]},      for goal: ${goal.name}`)
            mismatches++;
        }
    }

    if (mismatches === 0) {
        console.log("Passed test: no mismatches between EN and JP tracker data found!")
    } else {
        console.log(`Failed test: found ${mismatches} mismatches between EN and JP tracker data.`)
    }
}


function testIfTrackerDefaultNamesExistInGoalList() {
    let missingCount = 0;

    const goals = getGoals();
    const goalNames = goals.map(goal => goal.name);
    const goalNamesJp = goals.map(goal => goal.jp);

    const trackerGoalNames = Object.keys(window.trackerDefaults);

    for (const trackerGoalName of trackerGoalNames) {
        if (!goalNames.includes(trackerGoalName) && !goalNamesJp.includes(trackerGoalName)) {
            missingCount++;
            console.log(`Tracker goal name '${trackerGoalName}' missing in goal list, goal was possibly removed or renamed`)
        }
    }

    if (missingCount === 0) {
        console.log("Passed test: all tracker goal names in tracker-default.js also exist in the goal list!")
    } else {
        console.log(`Failed test: found ${missingCount} tracker goal names that do not exist in the goal list.`)
    }
}

function getGoals() {
    const goals = [];
    for (let i = 1; i <= 25; i++) {
        goals.push(...bingoList.normal[i]);
    }
    goals.sort((a, b) => a.name < b.name ? -1 : 1);
    return goals;
}
