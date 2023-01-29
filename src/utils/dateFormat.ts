
/**
 * Format a time string as 12-hour time.
 * 
 * @param date The date.
 * @returns The time string.
 */
export function formatTime12(date: Date):`${number}:${string} ${"AM"|"PM"}` {
    const meridian = date.getHours() >= 12 ? "PM" : "AM";
    const hours = date.getHours() > 12 ? (date.getHours() - 12) : (date.getHours() === 0 ? 12 : date.getHours());
    const minutes = date.getMinutes().toString(10).padStart(2, '0');
    return `${hours}:${minutes} ${meridian}`;
}

/**
 * Get the short name of a month.
 *
 * @param date The date.
 * @returns The month name.
 */
export function formatDateMonthShort(date: Date) {
    return [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun",
        "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec"
    ][date.getMonth()];
}

