

const callExpressAPI = async (str) => {
    return await fetch('/api/getData?str=' + str)
    .then(res => res.json())
    .then(data => {
        return data;
    })
}

export { callExpressAPI }
