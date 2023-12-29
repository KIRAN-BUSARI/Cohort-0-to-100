let count = 0;
function counterUsingSetTimeout() {
    count++
    console.log(count);
    setTimeout(counterUsingSetTimeout,1000)
}

counterUsingSetTimeout()