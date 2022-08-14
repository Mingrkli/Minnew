// Expandable
const newsExpand = document.querySelector('.news .expand-able')
const newsShrink = document.querySelector('.news .shrink-able')
const reviewsExpand = document.querySelector('.reviews .expand-able')
const reviewsShrink = document.querySelector('.reviews .shrink-able')
// Sections Grid Base
const homeGridBase = document.querySelector('.latest .grid-base')
const newsGridBase = document.querySelector('.news .grid-base')
const reviewsGridBase = document.querySelector('.reviews .grid-base')

// newsData Reverse
let newsDataReverse = newsData.reverse()

/* Event Listeners
============================================================================================== */
window.addEventListener('DOMContentLoaded', () => {
    setDataReverse(9, homeGridBase)
    setDataReverseCategory(6, newsGridBase, 'News')
    setDataReverseCategory(4, reviewsGridBase, 'Reviews')

    resetTilt()
})

// News
newsExpand.addEventListener('click', () => {
    setDataReverseCategory(newsData.length, newsGridBase, 'News')
    newsExpand.classList.add('hidden')
    newsShrink.classList.remove('hidden')
})

newsShrink.addEventListener('click', () => {
    setDataReverseCategory(6, newsGridBase, 'News')
    newsShrink.classList.add('hidden')
    newsExpand.classList.remove('hidden')
})

// Reviews
reviewsExpand.addEventListener('click', () => {
    setDataReverseCategory(newsData.length, reviewsGridBase, 'Reviews')
    reviewsExpand.classList.add('hidden')
    reviewsShrink.classList.remove('hidden')
})

reviewsShrink.addEventListener('click', () => {
    setDataReverseCategory(4, reviewsGridBase, 'Reviews')
    reviewsShrink.classList.add('hidden')
    reviewsExpand.classList.remove('hidden')
})

/* Functions
============================================================================================== */
// Appends the latest num amount of index in reverse order
function setDataReverse(num, tagName) {
    // Clear
    removeAllChildNodes(tagName)

    let sliceData = newsData.slice(0, num)

    // For each i in sliceData
    for (let i of sliceData) {
        let createDiv = document.createElement('div');
        createDiv.classList.add('grid-card');

        divInnerText = `
        <!-- Grid Card Img -->
        <div class="grid-card-img">
            <img src="${i.img}" alt="">
            <p class="credit">
            Photo by <a href="${i.imgCreditLink}">${i.imgCredit}</a> on <a href="https://unsplash.com/s/photos/street?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </p>
        </div>

        <!-- Grid Card Text -->
        <div class="grid-card-text">
            <h2 class="grid-card-text-genre">${i.genre}</h2>
            <a href="${i.titleLink}" class="grid-card-text-title">${i.title}<span class="material-symbols-outlined"> arrow_forward </span></a>
            <p class="grid-card-text-description">${i.shortDesc}</p>
            <p class="grid-card-author">${i.author} | <span class="grid-card-comments">${i.comment} comments</span></p>
        </div>
        `;

        createDiv.innerHTML = divInnerText;
        tagName.appendChild(createDiv);
    }

    resetTilt()
}

// Appends the indx in reverse order with only that genre
function setDataReverseCategory(num, tagName, genreName) {
    // Clear
    removeAllChildNodes(tagName)

    let count = 0;
    // For each i in newsDataReverse
    for (let i of newsDataReverse) {
        if (i.genre === genreName && count != num) {
            let createDiv = document.createElement('div');
            createDiv.classList.add('grid-card');
    
            divInnerText = `
            <!-- Grid Card Img -->
            <div class="grid-card-img">
                <img src="${i.img}" alt="">
                <p class="credit">
                Photo by <a href="${i.imgCreditLink}">${i.imgCredit}</a> on <a href="https://unsplash.com/s/photos/street?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </p>
            </div>
    
            <!-- Grid Card Text -->
            <div class="grid-card-text">
                <h2 class="grid-card-text-genre">${i.genre}</h2>
                <a href="${i.titleLink}" class="grid-card-text-title">${i.title}<span class="material-symbols-outlined"> arrow_forward </span></a>
                <p class="grid-card-text-description">${i.shortDesc}</p>
                <p class="grid-card-author">${i.author} | <span class="grid-card-comments">${i.comment} comments</span></p>
            </div>
            `;
    
            createDiv.innerHTML = divInnerText;
            tagName.appendChild(createDiv);
            count++;
        }
    }

    resetTilt()
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/* Tilt */
function resetTilt() {
    VanillaTilt.init(document.querySelectorAll(".grid-card"), {
        reverse: true,
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.1,
    });
}