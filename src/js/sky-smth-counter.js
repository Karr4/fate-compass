import { mod } from "./mod.js";

export const skySmthCounter = ([day, month, year, bottom, center, dayMonth, monthYear, yearBottom, bottomDay]) => {
    const skySmth = [
        mod(month + bottom), mod(day + year), mod(monthYear + bottomDay), mod(dayMonth + yearBottom)
    ];

    skySmth.push(mod(skySmth[0] + skySmth[1]));
    skySmth.push(mod(skySmth[2] + skySmth[3]));

    return skySmth
}