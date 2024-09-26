function getHours() {
    var element = document.getElementById("clock");

    const date = new Date()
    const h = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()

    const hour = h < 10 ? `0${h}` : h
    const minute = min < 10 ? `0${min}` : min
    const seconds = sec < 10 ? `0${sec}` : sec
        element.innerHTML = `${hour} : ${minute} : ${seconds}`
}

setInterval(() => {
    getHours()
}, 1000)