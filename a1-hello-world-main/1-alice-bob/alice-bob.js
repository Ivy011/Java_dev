// Your code here
const respond = (name, age) => {
  let response = '';
  if (age<20){
    response = `Hi ${name}! You are younger than me.`
  } else {
    response = `Hi ${name}! You are older than me.`
  } 

  // if (age>=20){
  //   response = `Hi ${name}! You are older than me.`
  // } 
  return response;
}
// End your code

export { respond };