document.write(`items(${2 + 2}): $${(2 * 2095 + 2 * 799) / 100}
`);
document.write(`Shipping & handling : ($${2 * 4.99})`);

document.write(`Total Before tax :$${(2 * 2095 + 2 * 799 + 499 + 499) / 100}`);

document.write(
  `Estimated tax (10%):  ${
    Math.round((2 * 2095 + 2 * 799 + 499 + 499) * 0.1) / 100
  } `
);
