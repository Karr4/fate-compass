import mod from "./mod.js";

const matrix = document.querySelector("ul.matrix");
const matrixForm = document.querySelector(".matrix-form");

matrixForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Removing the previous matrix from the page
    const prevMatrix = document.querySelectorAll(".matrix__number").length;
    prevMatrixDestroyer(prevMatrix);

    const {
        elements: { birthday }
    } = event.currentTarget;

    let date = birthday.value.split(".");  

    const day = mod(parseInt(date[0]));
    const month = mod(parseInt(date[1]));
    const year = mod(parseInt(date[2]));

    // Counting new matrix
    const matrixData = matrixCounter(day, month, year);

    // Adding matrix to the main page
    markupCreator(matrixData);
});

function prevMatrixDestroyer(numberOfItems) {
    for (let i = 0; i < numberOfItems; i += 1) {
        const number = document.querySelector(".matrix__number");
        number.remove();
    }
};

function matrixCounter(day, month, year) {
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

function markupCreator(array) {
    const markup = array.map(element => 
        `<li class="matrix__number">
            <p>${element}</p>
        </li>`
    ).join("");

    matrix.insertAdjacentHTML("beforeend", markup); 
}