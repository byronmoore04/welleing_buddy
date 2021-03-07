import firebase, { database } from "../firebase/firebase"


const addMood = (user, mood) => {
    let today = getDate()
    database.ref('users/' + user + '/moods/' + today).set({
        inputMood: mood
    })
}

const getMood = async (user) => {
    let today = getDate()
    try {
        return database.ref("users/" + user + "/moods/" + today)
        .once("value")
        .then(function(snapshot) {
            if (snapshot.val() !== null) 
            {
                let moodObject = snapshot.val();
                let moodList = Object.keys(moodObject).map((key) => ({
                    ...moodObject[key],
                    key: key,
                }));
                return moodList;
            } else {
                return [];
            }
            
        }).then((res) => {
            return res
        })
    } 
    catch (err) {
        return err
    }
}

export { addMood, getMood }



const getDate = () => {

    let date = new Date();
    let month = date.getDate() + 1
    let dateString = month + "-" + date.getDate() + "-" + date.getFullYear()
    console.log(dateString)
    return dateString;
}