const intensiveTask = () => {
    let total = 0;

    const startTime = performance.now();

    for (let i = 0; i < 4000000000; i++) {
        total += i;
    }

    const endTime = performance.now();
    console.log("duration", endTime - startTime);

    return total;
}

addEventListener("message", (message) => {
    console.log("I'm worker process");
    const total = intensiveTask();
    postMessage(total);
    // console.log(message);
})