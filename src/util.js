// Simulates a api call
export default function sleep(m) {
  return new Promise(r => setTimeout(() => console.log("Fetched !"), m));
}
