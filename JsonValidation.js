module.exports = function validateJson(jsonvalue) {
  try {
    JSON.parse(jsonvalue);
    return true;
  } catch (err) {
    return false;
  }

}