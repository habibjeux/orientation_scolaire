export function formatDate(date: string): string {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
}

export function formatDateForInput(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
}
