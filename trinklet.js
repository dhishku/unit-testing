module.exports.trinklet = function (input) {
  if (typeof input !== "number") throw new Error("Input should be a number");

  if ((input % 3 == 0) && (input % 5) == 0) return "Trinklet";

  if (input % 5 == 0) return "Trink";

  if (input % 3 == 0) return "Let";

  return input;
};