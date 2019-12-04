import wait from "./wait";

//async await method to test async code *THE BEST METHOD*
// test("wait for promise to resolve", async () => {
//   const result = await wait(3);
//   expect(result).toBe("Hurray!");
// });

//asyc test with the return Promise way
// test("wait for promise to resolve", () => {
//   return wait(3).then(result => {
//     expect(result).toBe("Hurray!");
//   });
// });

//async test with the done method way
// test("wait for promise to resolve", done => {
//   wait(3).then(result => {
//     expect(result).toBe("Hurray!");
//     done();
//   });
// });

jest.useFakeTimers();

test("wait for promise to resolve", async () => {
  const spy = jest.fn();

  const waitFn = wait(3, spy);

  jest.runAllTimers();

  const result = await waitFn;

  expect(result).toBe("Hurray!");

  expect(spy).toHaveBeenCalledWith("resolve finished");
  expect(spy).toHaveBeenCalledTimes(1);
});
