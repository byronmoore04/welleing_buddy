import firebase, { database } from "../firebase/firebase"


const addProfile = (user, gender, age) => {
    database.ref('users/' + user + '/profile').set({
        gender: gender,
        age: age
    })
}

const getProfile = async (user) => {
    try {
        return database.ref("users/" + user + "/profile")
        .once("value")
        .then(function(snapshot) {
            if (snapshot.val() !== null) 
            {
                let profileObject = snapshot.val();
                return profileObject;
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

export { addProfile, getProfile }