const updateUserComment = (queueId, comment) => {
  return db.collection("queue").doc(queueId).update({
    comment,
  });
};
