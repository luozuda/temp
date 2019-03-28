module.exports = (buttonName) => {
    const button = document.createElement("button");
    button.innerText = `button:${buttonName}`;
    return button;
}