const os = require('os')
const log = require('./logger')

setInterval(() => {
    const { freemem, totalmem } = os

    const mem = parseInt(freemem() / 1024 / 1024)
    const memTotal = parseInt(totalmem() / 1024 / 1024)
    const percents = parseInt((mem / memTotal) * 100)

    console.log(mem, memTotal, percents)

    const statusComputerMemorie = {
        free: `${mem}MB`,
        total: `${memTotal}MB`,
        usagePercents: `${percents}%`
    }

    console.clear()
    console.log("PC STATS")
    console.table(statusComputerMemorie)

    log(`${JSON.stringify(statusComputerMemorie)}\n`)

}, 1000)