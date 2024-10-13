export const toPersianNums = (str: string | number): string => {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return String(str).replace(/\d/g, match => persianNumbers[parseInt(match)]);
};
