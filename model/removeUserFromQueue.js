//remove a user with certain phone number from the queue collection


//id er hér parameter sem þú kallar á og hann verður fjarlægður úr röðinni.
const removeUserFromQueue = (queueItemId) => {
  return new Promise((resolve) => {
    db.collection("queue").doc(queueItemId).delete()
      .then(() => resolve());
  });
};
