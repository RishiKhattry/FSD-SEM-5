function sum(a, b) {
  return a + b;
}
function sumWithMsg(a, b, msg) {
  const result = clbk(20, 30);
  const fresult = "Hi" + msg + "your score is" + result;
  console.log(fresult);
}
sumWithMsg(sum, 20, 30, "John");