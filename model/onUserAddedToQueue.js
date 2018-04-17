// Add any functions that you want to run when a user is
// added to the queue into onUserAddedToQueue
const onUserAddedToQueue = (queueItem) => {
  console.log(queueItem);
};

db.collection("queue").where("enteredQueueAt", ">", Date.now())
  .onSnapshot((snapshot) => {
      snapshot.docChanges.forEach((change) => {
          if (change.type === "added") {
            console.log("User added to queue");
            onUserAddedToQueue(change.doc.data());
          }
      });
  });