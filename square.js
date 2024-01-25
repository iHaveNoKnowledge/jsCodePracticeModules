// ความยาก ***
const creatSqr = (n) => {
  const width = n;
  const height = n;
  for (let i = 0; i < n; i++) {
    let txt = "";
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        txt += "#";
      } else {
        if (j === 0 || j === n - 1) {
          txt += "#";
        } else {
          txt += " ";
        }
      }
    }
    console.log(txt);
  }
};
creatSqr(inputList);
