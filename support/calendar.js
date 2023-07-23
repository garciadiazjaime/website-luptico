const ical = require('node-ical');


const eventFilter = (event) => {
    const dateInTheFutureBy3Months = new Date()
    dateInTheFutureBy3Months.setMonth(dateInTheFutureBy3Months.getMonth() + 3)
    return event.type === "VEVENT" && new Date(event.end).getTime() < new Date(dateInTheFutureBy3Months).getTime()

}

async function main() {
    const webEvents = await ical.async.fromURL('https://www.airbnb.com/calendar/ical/897016284894923633.ics?s=d82fde5df8f362523a6ca9f3e00a8114');

    const events = Object.keys(webEvents).reduce((accu, key) => {
        const event = webEvents[key]
        if (eventFilter(event)) {
            accu.push(event)
        }

        return accu
    }, [])

    console.log(JSON.stringify(webEvents, null, 2))
    console.log("\n---------------------\n")
    console.log(JSON.stringify(events, null, 2))
}

main().then(() => {
    console.log('end')
})
