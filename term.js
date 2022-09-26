document.addEventListener("keydown", listenKey);
document.getElementById("termx").innerHTML = (" ~ > ");
console.log(document.getElementById("termx").className);
document.getElementById("termx").className = "text-green-300 font-mono text-xl"
document.getElementById("termp").className = "text-amber-500 font-mono text-xl";

localStorage.setItem("input", "");

function listenKey() {
    if(event.key === "Backspace") {
        localStorage.setItem("input",localStorage.getItem("input").substring(0, localStorage.getItem("input").length -1));
    } else if(event.key === "Shift") {

    } else if(event.key.includes("Arrow")) {

    } else if(event.key === "CapsLock") {

    } else if(event.key === "Tab") {

    } else if(event.key === "Enter") {
        var clone0 = document.getElementById("termp").cloneNode(true);
        var clone1 = document.getElementById("termx").cloneNode(true);
        console.log(localStorage.getItem("input"));
        switch(localStorage.getItem("input")) {
            case ("help"):
                var neofetch = document.createElement("span");
                neofetch.id = "neofetch";
                neofetch.className = "text-green-400 font-mono text-lg";
                var neofetch1 = neofetch.cloneNode(true);
                neofetch.className = "text-green-200 font-mono text-xl";
                neofetch.innerHTML = (
                    `HELP`
                );

                neofetch1.innerHTML = (
                    `neofetch: "Display info" | youtube: "Go to the YouTube page for RuntimeTerror's creator." | github: "Go to the GitHub page for RuntimeTerror's creator." `
                );


                var nline0 = document.createElement("br");
                nline0.id = "nline0";
                var nline1 = document.createElement("br");
                nline1.id = "nline1";
                
                document.getElementById("termx").after(nline0);
                document.getElementById("nline0").after(neofetch);
                document.getElementById("neofetch").after(nline1);
                document.getElementById("nline1").after(neofetch1);

                setTimeout(() => {
                    nline0.remove();
                    neofetch.remove();
                    nline1.remove();
                    neofetch1.remove();
                    localStorage.setItem("input", "");
                    document.getElementById("termx").innerHTML = (" ~ > \n".concat(localStorage.getItem("input")));
                }, 5500);

                break;
            case ("neofetch"):
                var neofetch = document.createElement("span");
                neofetch.id = "neofetch";
                neofetch.className = "text-green-400 font-mono text-lg";
                var neofetch1 = neofetch.cloneNode(true);
                neofetch.className = "text-green-200 font-mono text-xl";
                neofetch.innerHTML = (
                    `NEOFETCH`
                );

                neofetch1.innerHTML = (
                    `CPU: "RuntimeTerror V1" | RAM: "16KB" | DISK: "1M" | SHELL: "term.js" | HOST: "${document.baseURI}"`
                );


                var nline0 = document.createElement("br");
                nline0.id = "nline0";
                var nline1 = document.createElement("br");
                nline1.id = "nline1";
                
                document.getElementById("termx").after(nline0);
                document.getElementById("nline0").after(neofetch);
                document.getElementById("neofetch").after(nline1);
                document.getElementById("nline1").after(neofetch1);

                setTimeout(() => {
                    nline0.remove();
                    neofetch.remove();
                    nline1.remove();
                    neofetch1.remove();
                    localStorage.setItem("input", "");
                    document.getElementById("termx").innerHTML = (" ~ > \n".concat(localStorage.getItem("input")));
                }, 5500);

                break;
            case ("youtube"):
                var neofetch = document.createElement("span");
                neofetch.id = "neofetch";
                neofetch.className = "text-green-400 font-mono text-lg";
                var neofetch1 = neofetch.cloneNode(true);
                neofetch.className = "text-green-200 font-mono text-xl";

                neofetch.innerHTML = (
                    `YOUTUBE`
                );

                neofetch1.innerHTML = (
                    `Redirecting to YouTube...`
                );


                var nline0 = document.createElement("br");
                nline0.id = "nline0";
                var nline1 = document.createElement("br");
                nline1.id = "nline1";

                document.getElementById("termx").after(nline0);
                document.getElementById("nline0").after(neofetch);
                document.getElementById("neofetch").after(nline1);
                document.getElementById("nline1").after(neofetch1);

                setTimeout(() => {
                    nline0.remove();
                    neofetch.remove();
                    nline1.remove();
                    neofetch1.remove();
                    localStorage.setItem("input", "");
                    document.getElementById("termx").innerHTML = (" ~ > \n".concat(localStorage.getItem("input")));
                    window.open("https://www.youtube.com/channel/UCpEYiOD5VxkK3iK7JmtbrPQ", "_blank");
                }, 100);

                break;

            case ("github"):
                var neofetch = document.createElement("span");
                neofetch.id = "neofetch";
                neofetch.className = "text-green-400 font-mono text-lg";
                var neofetch1 = neofetch.cloneNode(true);
                neofetch.className = "text-green-200 font-mono text-xl";
                
                neofetch.innerHTML = (
                    `GITHUB`
                );

                neofetch1.innerHTML = (
                    `Redirecting to GitHub...`
                );


                var nline0 = document.createElement("br");
                nline0.id = "nline0";   
                var nline1 = document.createElement("br");
                nline1.id = "nline1";
                
                document.getElementById("termx").after(nline0);
                document.getElementById("nline0").after(neofetch);
                document.getElementById("neofetch").after(nline1);
                document.getElementById("nline1").after(neofetch1);

                setTimeout(() => {
                    nline0.remove();
                    neofetch.remove();
                    nline1.remove();
                    neofetch1.remove();
                    localStorage.setItem("input", "");
                    document.getElementById("termx").innerHTML = (" ~ > \n".concat(localStorage.getItem("input")));
                    window.open("https://github.com/TheRealHiThere/Runtime-Terror-master", "_blank");
                }, 100);

                break;

            default:
                localStorage.setItem("input", "Unknown Command!");
                document.getElementById("termx").className = "text-red-600 font-mono text-xl"
                setTimeout(() => {
                    localStorage.setItem("input", "");
                    document.getElementById("termx").innerHTML = (" ~ > \n".concat(localStorage.getItem("input")));
                    document.getElementById("termx").className = "text-green-300 font-mono text-xl";
                }, 1500);
                break;
        }
    } else localStorage.setItem("input",localStorage.getItem("input").concat(event.key));
    document.getElementById("termx").innerHTML = (" ~ > \n".concat(localStorage.getItem("input")));
}


