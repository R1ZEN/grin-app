const FIVE_MINUTES = 300;
const ONE_MINUTE = 60;
const ONE_HOUR = 3600;

export function getDurationStr(seconds: number) {
  if (seconds < ONE_MINUTE) {
    return '1 minute';
  }

  // Calculation
  let hours = Math.floor(seconds / ONE_HOUR);
  let minutes = Math.floor(seconds / ONE_MINUTE) % ONE_MINUTE;

  if (seconds > FIVE_MINUTES) {
    const num = minutes % 10;
    const round = num === 5 ? Math.ceil(5.1 / 5) * 5 : Math.ceil(num / 5) * 5;

    minutes = minutes - num + round;
    hours = minutes === 60 ? hours + 1 : hours;
    minutes = minutes === 60 ? 0 : minutes;
  }

  // Displaying
  const result = [];
  if (hours > 0) {
    result.push(hours);
    result.push(' ');
    result.push(`hour${hours > 1 ? 's' : ''}`);
  }

  if (minutes > 0) {
    result.push(hours > 0 ? ' ' : '');
    result.push(minutes);
    result.push(' ');
    result.push(`minute${minutes > 1 ? 's' : ''}`);
  }

  return result.join('');
}