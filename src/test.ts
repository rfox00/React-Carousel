// printDelayed 返回值是一个 'Promise<void>'
async function printDelayed(elements: string[]) {
  for (const element of elements) {
      await delay(400);
      console.log(element);
  }
}

async function delay(milliseconds: number) {
  return new Promise<void>(resolve => {
      setTimeout(resolve, milliseconds);
  });
}

printDelayed(["Hello", "beautiful", "asynchronous", "world"]).then(() => {
  console.log("打印每一个内容!");
});