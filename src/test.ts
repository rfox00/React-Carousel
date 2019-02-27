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

export default printDelayed(["Hello", "beautiful", "asynchronous", "world"]).then(() => {
  console.log("打印每一个内容!");
});

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  console.log("Hello, " + person.firstName + " " + person.lastName);
}

greeter({firstName: 'tt', lastName: 'aa'});