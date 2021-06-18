export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / (1000 * 60 * 60));
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const seconds = Math.floor((duration / 1000) % 60);

  const timeString = [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");

  return timeString;
}
