const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const k = 0.693/HALF_LIFE_PERIOD;
  const a = Number(sampleActivity);
  const t = Math.log(MODERN_ACTIVITY / a) / k;
if (typeof sampleActivity === 'string') {
  if(isNaN(a) === true || a <= 0 || a > 15) {
    return false
  } else {
  return Math.ceil(t)
  }

} else {return false}
}
