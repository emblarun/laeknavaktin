const getQueue = () => {
  const queue = [];

  return new Promise((resolve) => {
    db.collection("queue").get().then((data)=>{

      data.forEach((queueItem)=>{
        queue.push({
          ...queueItem.data(),
          id: queueItem.id,
        });
      });

      resolve(queue);
    })
  });
}
