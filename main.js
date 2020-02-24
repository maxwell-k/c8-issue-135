module.exports = async function() {
  const first = await new Promise(function(resolve) {
    resolve(1);
  });
  return first;
};
