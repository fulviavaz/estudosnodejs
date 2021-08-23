const {EventEmitter} = require('events')

const ev = new EventEmitter()

ev.on('saySomething', () => {
    console.log('eu ouvi você', message)
})

ev.emit('saySomething', 'Fulvia')

// usa-se once para ouvir uma unica vez - on para sempre ouvir