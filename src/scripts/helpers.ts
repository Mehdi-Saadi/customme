export const toPersianNums = (str: string): string => {
    const persianNumbers = ['0', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return str.replace(/\d/g, match => persianNumbers[parseInt(match)]);
};
