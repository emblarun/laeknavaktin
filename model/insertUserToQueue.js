const insertUserToQueue = (userId) => {
  return new Promise((resolve) => {
    db.collection("queue").add({
      userId: userId,
      enteredQueueAt: Date.now(),
    })
      .then(() => resolve());
  });
};
