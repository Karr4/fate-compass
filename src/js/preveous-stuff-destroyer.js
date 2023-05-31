export const prevStuffDestroyer = (attributeName) => {
    const elementsToDelete = document.querySelectorAll(`[${attributeName}]`);

    if (!elementsToDelete)
        return;

    for (const element of elementsToDelete)
        element.remove();
};