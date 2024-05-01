function user() {
  for (let i = 0; i < 10; i++) {
    let input = prompt("Введіть число більше 100");

    if (input === null) {
      console.log("Скасовано");
      return;
    }

    input = Number(input);

    if (input > 100) {
      console.log("Введено число більше 100:", input);
      return;
    } else {
      console.log("Введено некоректне число. Спробуйте ще раз.");
    }
  }

  console.log("Досягнуто максимальну кількість введень");
}

user();
