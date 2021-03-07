import firebase, { database } from "../firebase/firebase"

const addGoal = (user, title) => {
    console.log("Adding goal: " + title)
    database.ref('users/' + user + '/goals').push({
        title: title
    })
}

const deleteGoal = (user, item) => {
    database
        .ref('users/' + user + '/goals/' + item).remove()
        .then(() => {
            console.log("Item deleted.")
        })
        .catch((err) => {
            console.log(err)
        })
}

const getGoals = async (user) => {
    console.log("inside")
    try {
        return database.ref("users/" + user + "/goals/")
        .once("value")
        .then(function(snapshot) {
            if (snapshot.val() !== null) 
            {
                let goalObject = snapshot.val();
                let goalList = Object.keys(goalObject).map((key) => ({
                    ...goalObject[key],
                    key: key,
                }));
                goalList.sort(compareByPriority);
                console.log(goalList)
                return goalList;
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

export { addGoal, getGoals, deleteGoal }


// helper functions
const compareByPriority = (a, b) => {
    let comparison = 0;
    if (a.priority > b.priority) {
      comparison = -1;
    } else if (a.priority < b.priority) {
      comparison = 1;
    }
    return comparison;
}