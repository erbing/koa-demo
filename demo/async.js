async function await1(params) {
  await await2();
  console.log(1);
}

async function await2() {
  await console.log(2);
  console.log(3);
}

console.log(4);

setTimeout(() => {
  console.log(5);
}, 0);

console.log(6);

await1();
