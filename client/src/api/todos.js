import firebase, { database } from "../firebase/firebase"

const addTodo = (user, title, priority) => {
    console.log("Adding todo: " + title)
    database.ref('users/' + user + '/todos').push({
        title: title,
        priority: priority,
        isDone: false
    })
}

const updateTodo = (user, title, priority, id) => {
    database.ref('users/' + user + '/todos/' + id).set({
        title: title,
        priority: priority,
        isDone: false
    })
}

const deleteTodo = (user, item) => {
    database
        .ref('users/' + user + '/todos/' + item).remove()
        .then(() => {
            console.log("Item deleted.")
        })
        .catch((err) => {
            console.log(err)
        })
}

const getTodos = async (user) => {
    try {
        return database.ref("users/" + user + "/todos/")
        .orderByChild("isDone").equalTo(false).once("value")
        .then(function(snapshot) {
            if (snapshot.val() !== null) 
            {
                let todoObject = snapshot.val();
                let todoList = Object.keys(todoObject).map((key) => ({
                    ...todoObject[key],
                    key: key,
                }));
                todoList.sort(compareByPriority);
                return todoList;
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

export { addTodo, updateTodo, getTodos, deleteTodo }




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