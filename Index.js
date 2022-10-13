console.log("CONTENT MANAGER.JS LOADED");



// generate random uuid
const tilt = $('#test_tilt').tilt({
    maxTilt: 7,
    speed: 1000,
});
let content = {
    pages: {
        1: {
            1: {
                content: "Improves cognition and increases the release of nerver growth factor.",
                title: "Lion’s mane mushroom",
            },
            2: {
                content: "Boosts memory and cognitive speed!",
                title: "Ginko Bilboa",
            },
            3: {
                content: "Boosts neuronal function and reduces stress and anxiety to promote cerebral calmness.",
                title: "Ashwagandha1",
            },
            4: {
                content: "Increases certain brain chemicals involved in thinking, and memory.",
                title: "Bacopa Monnieri",
            },
            image: "Assets/image1.png",
        },
        2: {
            1: {
                content: "Improves cognition and increases the release of nerver growth factor.",
                title: "Lion’s mane mushroom",
            },
            2: {
                content: "Boosts memory and cognitive speed!",
                title: "Ginko Bilboa",
            },
            3: {
                content: "Boosts neuronal function and reduces stress and anxiety to promote cerebral calmness.",
                title: "Ashwagandha2",
            },
            4: {
                content: "Increases certain brain chemicals involved in thinking, and memory.",
                title: "Bacopa Monnieri",
            },
            image: "Assets/image2.png"
        },
        3: {
            1: {
                content: "Improves cognition and increases the release of nerver growth factor.",
                title: "Lion’s mane mushroom",
            },
            2: {
                content: "Boosts memory and cognitive speed!",
                title: "Ginko Bilboa",
            },
            3: {
                content: "Boosts neuronal function and reduces stress and anxiety to promote cerebral calmness.",
                title: "Ashwagandha",
            },
            4: {
                content: "Increases certain brain chemicals involved in thinking, and memory.",
                title: "Bacopa Monnieri",
            },
            image: "Assets/image3.png"
        }
    }
}

let page = 1;
let header_1 = {
    headerElem: document.getElementById("header_1"),
    contentElem: document.getElementById("header_1_content"),
},
    header_2 = {
        headerElem: document.getElementById("header_2"),
        contentElem: document.getElementById("header_2_content"),
    },
    header_3 = {
        headerElem: document.getElementById("header_3"),
        contentElem: document.getElementById("header_3_content"),
    },
    header_4 = {
        headerElem: document.getElementById("header_4"),
        contentElem: document.getElementById("header_4_content"),
    },
    image = {
        headerElem: document.getElementById("image")
    };

image.headerElem.style.backgroundImage = `${content.pages[page].image}`; // CHANGE IT TO URL() IN PRODUCTION
function updatePage() {
    // update dots
    if (page == 1) {
        dot1.className = activeClass;
        dot2.className = inactiveClass;
        dot3.className = inactiveClass;
    } else if (page == 2) {
        dot1.className = inactiveClass;
        dot2.className = activeClass;
        dot3.className = inactiveClass;
    } else if (page == 3) {
        dot1.className = inactiveClass;
        dot2.className = inactiveClass;
        dot3.className = activeClass;
    }



    // update headers
    header_1.headerElem.style.opacity = 0;
    header_1.contentElem.style.opacity = 0;
    header_2.headerElem.style.opacity = 0;
    header_2.contentElem.style.opacity = 0;
    header_3.headerElem.style.opacity = 0;
    header_3.contentElem.style.opacity = 0;
    header_4.headerElem.style.opacity = 0;
    header_4.contentElem.style.opacity = 0;

    setTimeout(() => {
        header_1.headerElem.innerHTML = content.pages[page][1].title;
        header_1.headerElem.style.opacity = 1;

        header_1.contentElem.innerHTML = content.pages[page][1].content;
        header_1.contentElem.style.opacity = 1;

        header_2.headerElem.innerHTML = content.pages[page][2].title;
        header_2.headerElem.style.opacity = 1;
        header_2.contentElem.innerHTML = content.pages[page][2].content;
        header_2.contentElem.style.opacity = 1;

        header_3.headerElem.innerHTML = content.pages[page][3].title;
        header_3.headerElem.style.opacity = 1;

        header_3.contentElem.innerHTML = content.pages[page][3].content;
        header_3.contentElem.style.opacity = 1;

        header_4.headerElem.innerHTML = content.pages[page][4].title;
        header_4.headerElem.style.opacity = 1;
        header_4.contentElem.innerHTML = content.pages[page][4].content;
        header_4.contentElem.style.opacity = 1;


        image.headerElem.style.backgroundImage = `url(${content.pages[page].image})`;
        image.headerElem.srcset = `${content.pages[page].image} auto, ${content.pages[page].image} auto`

    }, 300)

}

setInterval(() => {
    if (page < 3) {
        page++;
        updatePage();
    } else {
        page = 1;
        updatePage();
    }
}, 4000)


let rightArrow = document.getElementById("rightArrow");
let leftArrow = document.getElementById("leftArrow");


let dot1 = document.getElementById("dot1"),
    dot2 = document.getElementById("dot2"),
    dot3 = document.getElementById("dot3"),
    activeClass = "fa-regular fa-circle-dot",
    inactiveClass = "fa-solid fa-circle-dot";

dot1.onclick = () => {
    page = 1;
    updatePage();
    dot1.className = activeClass;
}

dot2.onclick = () => {
    page = 2;
    updatePage();
    dot2.className = activeClass;
}

dot3.onclick = () => {
    page = 3;
    updatePage();
    dot3.className = activeClass;
}
// check if the user is on the second section

window.onkeydown = (e) => {
    if (e.key == "ArrowRight") {
        if (page < 3) {
            page++;
            updatePage();
        } else {
            page = 1;
            updatePage();
        }
    } else if (e.key == "ArrowLeft") {
        if (page > 1) {
            page--;
            updatePage();
        } else {
            page = 3;
            updatePage();
        }
    }
};

rightArrow.addEventListener("click", () => {
    if (page < 3) {
        page++;
    } else {
        page = 1;
    }
    updatePage();
});

leftArrow.addEventListener("click", () => {
    if (page > 1) {
        page--;
    } else {
        page = 3;
    }
    updatePage();
}
);