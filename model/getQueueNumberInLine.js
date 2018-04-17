const getQueueNumberInLine = (queueItemId) => {
  return new Promise((resolve) => {
    getQueue().then((queue) => {
      queue.sort((a, b) => b.enteredQueueAt - a.enteredQueueAt);
    
      const queueIds = queue.map((queueItem) => queueItem.id);
      resolve(queueIds.length - queueIds.indexOf("6ycAxeNDC2yBnqD7YDvn"));
    });
  });
};
