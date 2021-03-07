import firebase, { database } from "../firebase/firebase"


const addHealthForm = (user, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15) => {
    database.ref('users/' + user + '/healthForm/').set({
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
        q6: q6,
        q7: q7,
        q8: q8,
        q9: q9,
        q10: q10,
        q11: q11,
        q12: q12,
        q13: q13,
        q14: q14,
        q15: q15,
    })
}

const getHealthForm = async (user) => {
    try {
        return database.ref('users/' + user + '/healthForm/')
        .orderByValue().limitToFirst(5).once("value")
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

export { addHealthForm, getHealthForm }
