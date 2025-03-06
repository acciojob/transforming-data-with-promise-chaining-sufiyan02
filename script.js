//your JS code here. If required.

document.getElementById("btn").addEventListener("click", function () {
    let inputValue = document.getElementById("ip").value;
    let outputDiv = document.getElementById("output");

    // Convert input to a number
    let number = Number(inputValue);

    if (isNaN(number)) {
        outputDiv.innerText = "Please enter a valid number!";
        return;
    }

    // Step 1: Initial Promise (2s delay)
    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.innerText = `Result: ${number}`;
            // console.log( number);
            resolve(number);
        }, 2000);
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num * 2;
                outputDiv.innerText = `Result: ${result}`;
                // console.log("(Multiply by 2)", result);
                resolve(result);
            }, 2000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num - 3;
                outputDiv.innerText = `Result: ${result}`;
                // console.log("Subtract 3", result);
                resolve(result);
            }, 1000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num / 2;
                outputDiv.innerText = `Result: ${result}`;
                // console.log("Divide by 2", result);
                resolve(result);
            }, 1000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num + 10;
                outputDiv.innerText = `Final Result: ${result}`;
                // console.log("Add 10", result);
                resolve(result);
            }, 1000);
        });
    });
});
