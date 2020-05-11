export const colorsGenerator = (amount) => { // amount = (кол-во карточек) / 2
  const arr = [];
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    if (!arr.includes(color)) arr.push(color);
    if (arr.length < amount) randomColor();
  }
  randomColor();
  return [...arr, ...arr].sort(() => Math.random() - 0.5);
}

export const mapGenerator = (colors, useGrids) => {
  const arr = [];
  for (let i = 1; i <= useGrids ** 2; i += 1) {
    arr.push({ id: `grid${i}`, opened: false, color: colors[i - 1]})
  }
  return arr;
}