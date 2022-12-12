const generateCaptcha = () => {
  let value = btoa(Math.random() * 100000000);
  return value.substr(0, 5 + Math.random() * 5).split("");
};

const fonts = ["cursive", "sans-serif", "serif", "monospace"];

export { generateCaptcha, fonts };
