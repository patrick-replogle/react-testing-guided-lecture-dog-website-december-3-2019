const wait = (seconds, cb) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Hurray!");
      cb("resolve finished");
    }, seconds * 1000);
  });
};

export default wait;
