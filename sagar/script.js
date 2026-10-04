/* =====================================
   SCREEN 1
===================================== */

function openWebsite() {

    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "page2.html";
    }, 800);

}


/* =====================================
   SCREEN 2
===================================== */

function goToMemories() {

    document.body.classList.add("page-exit");

    setTimeout(() => {
        window.location.href = "memories.html";
    }, 900);

}


/* =====================================
   MEMORIES
   TAP PHOTO → NEXT PHOTO
===================================== */

const memories = [

    {
        image: "photo1.jpg",
        text: "Some moments are ordinary... until you remember them."
    },

    {
        image: "photo2.jpg",
        text: "A little moment I somehow never forgot."
    },

    {
        image: "photo3.jpg",
        text: "Maybe just another day. But I remember this one."
    },

    {
        image: "photo4.jpg",
        text: "Some moments quietly become favourites."
    },

    {
        image: "photo5.jpg",
        text: "A small moment, but worth keeping."
    },

    {
        image: "photo6.jpg",
        text: "You probably don't know how memorable this was."
    },

    {
        image: "photo7.jpg",
        text: "Just a moment... that stayed."
    },

    {
        image: "photo8.jpg",
        text: "Another little memory I didn't want to leave behind."
    },

    {
        image: "photo9.jpg",
        text: "Funny how certain moments never really leave."
    },

    {
        image: "photo10.jpg",
        text: "And somehow, this one stayed too. ♡"
    }

];


let currentMemory = 0;


/* =====================================
   GET ELEMENTS
===================================== */

const memoryCard =
    document.getElementById("memoryCard");

const memoryImage =
    document.getElementById("memoryImage");

const memoryText =
    document.getElementById("memoryText");

const memoryNumber =
    document.getElementById("memoryNumber");

const currentNumber =
    document.getElementById("currentNumber");


/* =====================================
   SHOW MEMORY
===================================== */

function showMemory() {

    if (!memoryImage) return;


    /* Photo animation */

    memoryCard.classList.remove(
        "memory-changing"
    );

    void memoryCard.offsetWidth;

    memoryCard.classList.add(
        "memory-changing"
    );


    /* Change photo */

    memoryImage.src =
        memories[currentMemory].image;


    /* Change caption */

    memoryText.textContent =
        memories[currentMemory].text;


    /* Change number inside photo */

    memoryNumber.textContent =
        String(currentMemory + 1).padStart(2, "0");


    /* Change bottom counter */

    currentNumber.textContent =
        String(currentMemory + 1).padStart(2, "0");

}


/* =====================================
   TAP PHOTO → NEXT PHOTO
===================================== */

if (memoryCard) {

    memoryCard.addEventListener(
        "click",
        function() {

            currentMemory++;

            /* After photo 10 → photo 1 */

            if (
                currentMemory >= memories.length
            ) {

                currentMemory = 0;

            }

            showMemory();

        }
    );

}


/* =====================================
   NEXT PAGE
===================================== */

function goToWishes() {

    document.body.style.transition =
        "opacity .7s ease";

    document.body.style.opacity =
        "0";

    setTimeout(function() {

        window.location.href =
            "wishes.html";

    }, 700);

}