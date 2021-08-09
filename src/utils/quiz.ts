export function generateGroup() {
  const options: Array<number> = [];

  while (options.length < 4) {
    const id = Math.floor(Math.random() * 898) + 1;
    if (options.indexOf(id) === -1) {
      options.push(id);
    }
  }

  return options;
}
