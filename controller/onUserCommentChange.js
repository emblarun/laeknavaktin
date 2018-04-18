const onUserCommentChange = (queueId) => {
  let timeout;

  const input = document.getElementById("reasonForVisit");
  input.oninput = (e) => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      updateUserComment(queueId, input.value);
    }, 1000);
  };
}