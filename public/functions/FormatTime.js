export default function FormatTime(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  const persianHours = hours.toLocaleString("fa-IR");
  const persianMinutes = minutes.toLocaleString("fa-IR");
  return `${hours > 0 ? `${persianHours} ساعت` : ""} ${
    minutes > 0 ? `${persianMinutes} دقیقه` : ""
  }`.trim();
}
