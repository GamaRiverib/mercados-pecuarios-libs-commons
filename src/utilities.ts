export function getISODate(): string {
  const today = new Date();
  today.setHours(today.getHours()-7); // TODO: -7?
  return today.toISOString();
}
