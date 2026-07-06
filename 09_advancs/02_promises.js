const promise1 = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        // console.log('async task is completed');
        resolve()
    }, 1000)
});

promise1.then(function () {
    // console.log('Promise consumed');
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('Async task 2');
        resolve()
    }, 2000)
}).then(function () {
    // console.log('Async 2 resolved');
});

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'chai', email: 'chai@example.com' })
    }, 1000)
});

promise3.then(function (user) {
    // console.log(user);
})


const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: 'Ashish', password: '123' })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
});

promise4
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);

    })
    .catch(function (error) {
        console.log(error);

    })
    .finally(() => console.log('The promise is either resolved or rejected'))

const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: 'javascript', password: '123' })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5()

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('E: ',error);
    }

}
getAllUsers()