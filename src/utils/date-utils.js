export const setExpirationDate = (expDays) => {
    const date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    return date.toUTCString();
}

export const hasExpired = (expDate) => {
    const date = new Date();
    const expirationDate = new Date(expDate);
    if(date.getTime() > expirationDate.getTime()) {
        return true;
    }
    return false;
}