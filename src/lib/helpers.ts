export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTime(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Thailand's time
  const offsetThailand = 7; // Thailand is in Central European Summer Time (UTC+2), but you might need to adjust this based on Daylight Saving Time
  now.setHours(now.getUTCHours() + offsetThailand);

  return now;
}

export function formatTime(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Bangkok",
    timeZoneName: "shortOffset",
  };

  // We us en-GB cuz its more commonly to do day-month-year format in Thailand
  let formattedTime = new Intl.DateTimeFormat("en-GB", options).format(date);

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
