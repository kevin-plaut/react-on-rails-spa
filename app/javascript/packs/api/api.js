// Private API
let post = (payload) => {
  console.log(payload);
  return payload;
}
// Public API
const helloWorld = () => {
  let payload = 'Hello World!'
  post(payload)
}
// Export Api
export const Api = {
  helloWorld
}
