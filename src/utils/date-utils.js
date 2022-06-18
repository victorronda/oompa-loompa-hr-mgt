export const getExpirationDate = (expDays) => {
    const date = new Date();
    console.log('This is date:', date);
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    return date.toUTCString();
}