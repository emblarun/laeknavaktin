const getWaitingPageInfo = (queueId) => {
  getQueueNumberInLine(queueId)
    .then((numberInLine) => {
      displayWaitingPage(numberInLine, queueId);
    });
};
