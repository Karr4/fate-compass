import { mod } from "./mod.js";

export const matrixCounter = (day, month, year) => {
    const array = [];

    const bottom = mod(day + month + year);
    const center = mod(day + month + year + bottom);

    const dayMonth = mod(day + month);
    const monthYear = mod(month + year);
    const yearBottom = mod(year + bottom);
    const bottomDay = mod(bottom + day);

    const centerDay = mod(center + day);
    const centerMonth = mod(center + month);
    const centerYear = mod(center + year);
    const centerBottom = mod(center + bottom);

    const centerDayMonth = mod(center + dayMonth);
    const centerMonthYear = mod(center + monthYear);
    const centerYearBottom = mod(center + yearBottom);
    const centerBottomDay = mod(center + bottomDay);

    const dayCenterDay = mod(day + centerDay);  
    const monthCenterMonth = mod(month + centerMonth);
    const yearCenterYear = mod(year + centerYear);
    const bottomCenterBottom = mod(bottom + centerBottom);

    const centerDayMonthDayMonth = mod(centerDayMonth + dayMonth);
    const centerMonthYearMonthYear = mod(centerMonthYear + monthYear);
    const centerYearBottomYearBottom = mod(centerYearBottom + yearBottom);
    const centerBottomDayBottomDay = mod(centerBottomDay + bottomDay);

    const financeRelationship = mod(centerYear + centerBottom);
    const finance = mod(financeRelationship + centerYear);
    const relationship = mod(financeRelationship + centerBottom);

    const soulSmth = mod(centerDay + center);
    const soulSmth2 = mod(centerMonth + center);

    array.push(day, month, year, bottom, center,
        dayMonth, monthYear, yearBottom, bottomDay,
        centerDay, centerMonth, centerYear, centerBottom,
        centerDayMonth, centerMonthYear, centerYearBottom, centerBottomDay,
        dayCenterDay, monthCenterMonth, yearCenterYear, bottomCenterBottom,
        centerDayMonthDayMonth, centerMonthYearMonthYear, centerYearBottomYearBottom, centerBottomDayBottomDay,
        financeRelationship, finance, relationship,
        soulSmth, soulSmth2
    );

    return array;
}