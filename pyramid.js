const pyramid2 = () => {
  const size = 5;
  for (let i = 0; i < size; i++) {
    let txt = "";
    for (let j = 1; j <= size - i - 1; j++) {
      txt += " ";
    }
    for (let k = 0; k <= i + i * 1; k++) {
      if (k % 2 === 0) {
        txt += "$";
      } else {
        txt += " ";
      }
    }
    console.log(txt);
  }
};

pyramid2();
