// window.console.log it's usually used as console.log
console.log("The usual logging mode");
console.warn("This is a warning");
console.error("This is an error message");

window.onload = () => {
    // const iframeBody = document.getElementById("frame-body");
    // iframeBody.innerHTML = "Something new";
    console.log(window.frames.length);
    window.name = "Parent master window";
    const openWinBtn = document.getElementById("new-win");
    window.globalVar = 5;
    
    openWinBtn.addEventListener("click", () => {
        window.scroll(0, 50);
        const newWin = window.open("file:///D:/Projects/BOM/secondPage.html","","width=200, height=100");
        newWin.moveBy(300, 100);
        newWin.focus();
    });
}

