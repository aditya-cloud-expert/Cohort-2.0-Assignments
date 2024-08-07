// create Counter in JS


let count = 0;

function counter() {
    console.log(count)
    return count++
}

setInterval(() => {
    counter()
}, 1000)
