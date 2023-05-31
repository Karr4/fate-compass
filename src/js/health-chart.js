import { mod } from "./mod.js";

export const healthChart = ([day, month, year, bottom, center,
                                , , , , centerDay, centerMonth, centerYear, centerBottom,
                                , , , , dayCenterDay, monthCenterMonth, , ,
                                , , , , , , , soulSmth, soulSmth2]) => {
    const chart = {
        physic: [day, dayCenterDay, centerDay, soulSmth, center, centerYear, year],
        energy: [month, monthCenterMonth, centerMonth, soulSmth2, center, centerBottom, bottom],
        emotions: [
            mod(day + month),
            mod(dayCenterDay + monthCenterMonth),
            mod(centerDay + centerMonth),
            mod(soulSmth + soulSmth2),
            mod(center + center),
            mod(centerYear + centerBottom),
            mod(year + bottom)
        ]
    }

    const { physic, energy, emotions } = chart;

    physic.push(mod(physic.reduce((prev, element) => prev + element)));
    energy.push(mod(energy.reduce((prev, element) => prev + element)));
    emotions.push(mod(emotions.reduce((prev, element) => prev + element)));

    return chart;
}

