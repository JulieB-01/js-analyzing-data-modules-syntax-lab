


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
require('datejs')
function combineUsers(...args){

  const combinedObject = {
    users: [],
    merge_date: Date.today().toString("M/d/yyyy")
  }
  for (let arr of args){
    combinedObject.users = [...combinedObject.users, ...arr];
  }
  return combinedObject
  
}
