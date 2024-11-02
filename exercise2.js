const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI (${BMIMark.toFixed(
      2
    )}) is higher than John's (${BMIJohn.toFixed(2)})!`
  );
} else {
  console.log(
    `John's BMI (${BMIJohn.toFixed(
      2
    )}) is higher than Mark's (${BMIMark.toFixed(2)})!`
  );
}
