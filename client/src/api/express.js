const callExpressAPI = () => {
    console.log("in client express.js")
    return fetch('/api/getData')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data;
    })
}

export { callExpressAPI }
