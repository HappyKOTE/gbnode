const colors = require('colors');

let startNum = Number(process.argv[2]);
const finishNum = Number(process.argv[3]);
const arr = [];

if ( finishNum > startNum && startNum > 0 && typeof(startNum) === "number" && typeof(finishNum) === "number" ) {
  for (startNum; startNum <= finishNum; startNum++) {
    if (startNum == 2) arr.push(startNum);
    for (let i = 2; i < startNum; i++) {
      if (startNum % i == 0) break;
      arr.push(startNum)
      break;
    }
  }
  if (arr.length > 0) {
    for (let cicleCount = 0; cicleCount < Math.ceil(arr.length/3); cicleCount++) {
      for (let colorVariant = 0; colorVariant < 3; colorVariant++) {
        if (colorVariant == 0 && arr[(cicleCount*3)+colorVariant]) console.log(colors.green(arr[(cicleCount*3)+colorVariant]));
        if (colorVariant == 1 && arr[(cicleCount*3)+colorVariant]) console.log(colors.yellow(arr[(cicleCount*3)+colorVariant]));
        if (colorVariant == 2 && arr[(cicleCount*3)+colorVariant]) console.log(colors.red(arr[(cicleCount*3)+colorVariant]));
      }
    }
  } else {
    console.log(colors.red("простых чисел в диапазоне нет"));
  }
} else {
  console.log(colors.red("ошибка в диапазоне чисел"));
}
