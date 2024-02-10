function calcAverageCalories(days) {
 let sum = 0
 for(const day of days) {
  sum += day.calories;
}
return days.length > 0 ? sum / days.length : 0;
}

