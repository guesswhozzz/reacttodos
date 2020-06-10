let datetest = () => {
  let date = new Date(),
    month = date.getMonth(),
    day = date.getDate();
  return { month: month, day: day };
};
let monthName = [
  `Январь`,
  `Февраль`,
  `Март`,
  `Апрель`,
  `Май`,
  `Июнь `,
  `Июль`,
  `Ввгуст`,
  `Сентябрь`,
  `Октябрь`,
  `Ноябрь`,
  `Декабрь`,
];
let date = datetest();
console.log(date.day, monthName[date.month - 1]);

export default date;
