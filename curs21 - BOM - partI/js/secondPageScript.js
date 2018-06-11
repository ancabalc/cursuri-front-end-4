console.log(window.parent.globalVar);
window.onload = () => {
    document.getElementById("blur").addEventListener("click", () => {
        window.blur();
    });
}