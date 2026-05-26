function randomMs(minMs, maxMs) {
    return Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs
}

function setupLeaveRejoin(bot, createBot) {
    // disabled - bot stays connected permanently
    // only index.js handles reconnection on forced disconnects
}

module.exports = setupLeaveRejoin
