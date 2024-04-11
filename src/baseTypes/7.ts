/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/


enum DaysOfWeek {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY'
};

function isWeekend(day: DaysOfWeek): boolean {
  return (day === DaysOfWeek.SATURDAY || day === DaysOfWeek.SUNDAY);
}
let testDay: DaysOfWeek = DaysOfWeek.SATURDAY
console.log(isWeekend(testDay))