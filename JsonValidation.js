module.exports = function validateJson(jsonvalue){
    try {
        console.log(jsonvalue);
        JSON.parse(jsonvalue);
        return true;
      } catch(err) {
        console.error(err)
        return false;
      }
    
}