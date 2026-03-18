// ==========================================
// Portfolio Data Source
// ==========================================
// ユーザーが書き換えることで作品を反映できる配列
const portfolioData = [
    {
        "group": "Title",
        "title": "Page 1",
        "image": "pages/portfolio/page_1.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "1",
        "title": "Page 2",
        "image": "pages/portfolio/page_2.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "1",
        "title": "Page 3",
        "image": "pages/portfolio/page_3.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "1",
        "title": "Page 4",
        "image": "pages/portfolio/page_4.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "1",
        "title": "Page 5",
        "image": "pages/portfolio/page_5.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "1",
        "title": "Page 6",
        "image": "pages/portfolio/page_6.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "1",
        "title": "Page 7",
        "image": "pages/portfolio/page_7.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "1",
        "title": "Page 8",
        "image": "pages/portfolio/page_8.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "1",
        "title": "Page 9",
        "image": "pages/portfolio/page_9.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "1",
        "title": "Page 10",
        "image": "pages/portfolio/page_10.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "1",
        "title": "Page 11",
        "image": "pages/portfolio/page_11.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "1",
        "title": "Page 12",
        "image": "pages/portfolio/page_12.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "1",
        "title": "Page 13",
        "image": "pages/portfolio/page_13.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "1",
        "title": "Page 14",
        "image": "pages/portfolio/page_14.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "1",
        "title": "Page 15",
        "image": "pages/portfolio/page_15.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "2",
        "title": "Page 16",
        "image": "pages/portfolio/page_16.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "2",
        "title": "Page 17",
        "image": "pages/portfolio/page_17.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "2",
        "title": "Page 18",
        "image": "pages/portfolio/page_18.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "2",
        "title": "Page 19",
        "image": "pages/portfolio/page_19.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "2",
        "title": "Page 20",
        "image": "pages/portfolio/page_20.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "2",
        "title": "Page 21",
        "image": "pages/portfolio/page_21.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "2",
        "title": "Page 22",
        "image": "pages/portfolio/page_22.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "2",
        "title": "Page 23",
        "image": "pages/portfolio/page_23.jpg",
        "subtitle": "",
        "desc": "",
        "qrCodes": [{ "url": "https://akechany0122-lang.github.io/pass-movie/", "type": "link", "position": "bottom-left-aligned", "label": "Movie" }]
    },
    {
        "group": "2",
        "title": "Page 24",
        "image": "pages/portfolio/page_24.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "2",
        "title": "Page 25",
        "image": "pages/portfolio/page_25.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "2",
        "title": "Page 26",
        "image": "pages/portfolio/page_26.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "2",
        "title": "Page 27",
        "image": "pages/portfolio/page_27.jpg",
        "subtitle": "",
        "desc": "",
        "qrCodes": [{ "url": "https://akechany0122-lang.github.io/Pass-people-live-tracking/", "type": "link", "position": "bottom-left-aligned", "label": "Live tracking" }]
    },
    {
        "group": "3",
        "title": "Page 28",
        "image": "pages/portfolio/page_28.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "3",
        "title": "Page 29",
        "image": "pages/portfolio/page_29.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "3",
        "title": "Page 30",
        "image": "pages/portfolio/page_30.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "3",
        "title": "Page 31",
        "image": "pages/portfolio/page_31.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "4",
        "title": "Page 32",
        "image": "pages/portfolio/page_32.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "4",
        "title": "Page 33",
        "image": "pages/portfolio/page_33.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "4",
        "title": "Page 34",
        "image": "pages/portfolio/page_34.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "4",
        "title": "Page 35",
        "image": "pages/portfolio/page_35.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "4",
        "title": "Page 36",
        "image": "pages/portfolio/page_36.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "4",
        "title": "Page 37",
        "image": "pages/portfolio/page_37.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "4",
        "title": "Page 38",
        "image": "pages/portfolio/page_38.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "4",
        "title": "Page 39",
        "image": "pages/portfolio/page_39.jpg",
        "subtitle": "",
        "desc": "",
        "qrCodes": [{ "url": "https://www.tiktok.com/@chany_arthouse?_r=1&_t=ZS-94EPAUBT6Bt", "type": "link", "position": "bottom-center-left-aligned", "label": "Chany TikTok" }]
    },
    {
        "group": "4",
        "title": "Page 40",
        "image": "pages/portfolio/page_40.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "4",
        "title": "Page 41",
        "image": "pages/portfolio/page_41.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "5",
        "title": "Page 42",
        "image": "pages/portfolio/page_42.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "5",
        "title": "Page 43",
        "image": "pages/portfolio/page_43.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "5",
        "title": "Page 44",
        "image": "pages/portfolio/page_44.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "5",
        "title": "Page 45",
        "image": "pages/portfolio/page_45.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "5",
        "title": "Page 46",
        "image": "pages/portfolio/page_46.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "5",
        "title": "Page 47",
        "image": "pages/portfolio/page_47.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "5",
        "title": "Page 48",
        "image": "pages/portfolio/page_48.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "5",
        "title": "Page 49",
        "image": "pages/portfolio/page_49.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "5",
        "title": "Page 50",
        "image": "pages/portfolio/page_50.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "5",
        "title": "Page 51",
        "image": "pages/portfolio/page_51.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "5",
        "title": "Page 52",
        "image": "pages/portfolio/page_52.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "5",
        "title": "Page 53",
        "image": "pages/portfolio/page_53.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "6",
        "title": "Page 54",
        "image": "pages/portfolio/page_54.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "6",
        "title": "Page 55",
        "image": "pages/portfolio/page_55.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "6",
        "title": "Page 56",
        "image": "pages/portfolio/page_56.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "6",
        "title": "Page 57",
        "image": "pages/portfolio/page_57.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "6",
        "title": "Page 58",
        "image": "pages/portfolio/page_58.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "6",
        "title": "Page 59",
        "image": "pages/portfolio/page_59.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "6",
        "title": "Page 60",
        "image": "pages/portfolio/page_60.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "6",
        "title": "Page 61",
        "image": "pages/portfolio/page_61.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "7",
        "title": "Page 62",
        "image": "pages/portfolio/page_62.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "7",
        "title": "Page 63",
        "image": "pages/portfolio/page_63.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "7",
        "title": "Page 64",
        "image": "pages/portfolio/page_64.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "7",
        "title": "Page 65",
        "image": "pages/portfolio/page_65.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "7",
        "title": "Page 66",
        "image": "pages/portfolio/page_66.jpg",
        "subtitle": "",
        "desc": "",
        "qrCodes": [{ "url": "https://www.airbnb.jp/rooms/1265175676912399071?source_impression_id=p3_1772071518_P3_NmkBB2stzZRyK", "type": "link", "position": "bottom-center-right-aligned-1", "label": "寿司アートホテル airbnb" }, { "url": "https://www.booking.com/hotel/jp/sushi-art.html?aid=1725679&label=spot-lj0135268&chal_t=1772071515135&force_referer=https%3A%2F%2Fwww.google.com%2F", "type": "link", "position": "bottom-center-right-aligned-2", "label": "寿司アートホテル Booking.com" }]
    },
    {
        "group": "7",
        "title": "Page 67",
        "image": "pages/portfolio/page_67.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "7",
        "title": "Page 68",
        "image": "pages/portfolio/page_68.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "7",
        "title": "Page 69",
        "image": "pages/portfolio/page_69.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "7",
        "title": "Page 70",
        "image": "pages/portfolio/page_70.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "7",
        "title": "Page 71",
        "image": "pages/portfolio/page_71.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "8",
        "title": "Page 72",
        "image": "pages/portfolio/page_72.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "8",
        "title": "Page 73",
        "image": "pages/portfolio/page_73.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "8",
        "title": "Page 74",
        "image": "pages/portfolio/page_74.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "8",
        "title": "Page 75",
        "image": "pages/portfolio/page_75.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "8",
        "title": "Page 76",
        "image": "pages/portfolio/page_76.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "8",
        "title": "Page 77",
        "image": "pages/portfolio/page_77.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "8",
        "title": "Page 78",
        "image": "pages/portfolio/page_78.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "8",
        "title": "Page 79",
        "image": "pages/portfolio/page_79.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "8",
        "title": "Page 80",
        "image": "pages/portfolio/page_80.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "8",
        "title": "Page 81",
        "image": "pages/portfolio/page_81.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "9",
        "title": "Page 82",
        "image": "pages/portfolio/page_82.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "9",
        "title": "Page 83",
        "image": "pages/portfolio/page_83.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "9",
        "title": "Page 84",
        "image": "pages/portfolio/page_84.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "9",
        "title": "Page 85",
        "image": "pages/portfolio/page_85.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "9",
        "title": "Page 86",
        "image": "pages/portfolio/page_86.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "9",
        "title": "Page 87",
        "image": "pages/portfolio/page_87.jpg",
        "subtitle": "",
        "desc": "",
        "qrCodes": [{ "url": "https://akechany0122-lang.github.io/ieicon-shindan/", "type": "link", "position": "bottom-center-left-aligned", "label": "家アイコン診断" }]
    },
    {
        "group": "9",
        "title": "Page 88",
        "image": "pages/portfolio/page_88.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "9",
        "title": "Page 89",
        "image": "pages/portfolio/page_89.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "10",
        "title": "Page 90",
        "image": "pages/portfolio/page_90.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "10",
        "title": "Page 91",
        "image": "pages/portfolio/page_91.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "10",
        "title": "Page 92",
        "image": "pages/portfolio/page_92.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "10",
        "title": "Page 93",
        "image": "pages/portfolio/page_93.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "10",
        "title": "Page 94",
        "image": "pages/portfolio/page_94.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "10",
        "title": "Page 95",
        "image": "pages/portfolio/page_95.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "10",
        "title": "Page 96",
        "image": "pages/portfolio/page_96.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "10",
        "title": "Page 97",
        "image": "pages/portfolio/page_97.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "11",
        "title": "Page 98",
        "image": "pages/portfolio/page_98.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "11",
        "title": "Page 99",
        "image": "pages/portfolio/page_99.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "11",
        "title": "Page 100",
        "image": "pages/portfolio/page_100.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "11",
        "title": "Page 101",
        "image": "pages/portfolio/page_101.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "12",
        "title": "Page 102",
        "image": "pages/portfolio/page_102.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "12",
        "title": "Page 103",
        "image": "pages/portfolio/page_103.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "12",
        "title": "Page 104",
        "image": "pages/portfolio/page_104.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "12",
        "title": "Page 105",
        "image": "pages/portfolio/page_105.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "12",
        "title": "Page 106",
        "image": "pages/portfolio/page_106.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "12",
        "title": "Page 107",
        "image": "pages/portfolio/page_107.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "13",
        "title": "Page 108",
        "image": "pages/portfolio/page_108.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "13",
        "title": "Page 109",
        "image": "pages/portfolio/page_109.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "13",
        "title": "Page 110",
        "image": "pages/portfolio/page_110.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "13",
        "title": "Page 111",
        "image": "pages/portfolio/page_111.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "13",
        "title": "Page 112",
        "image": "pages/portfolio/page_112.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "13",
        "title": "Page 113",
        "image": "pages/portfolio/page_113.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "13",
        "title": "Page 114",
        "image": "pages/portfolio/page_114.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "13",
        "title": "Page 115",
        "image": "pages/portfolio/page_115.jpg",
        "subtitle": "",
        "desc": "",
        "qrCodes": [{ "url": "https://akechany0122-lang.github.io/ultimate-daihugou2/", "type": "link", "position": "bottom-center-right-aligned-1", "label": "ULTIMATE 大富豪" }]
    },
    {
        "group": "End",
        "title": "Page 116",
        "image": "pages/portfolio/page_116.jpg",
        "subtitle": "",
        "desc": ""
    },
    {
        "group": "End",
        "title": "Reset",
        "image": "pages/portfolio/page_1.jpg",
        "isExtra": true,
        "isReset": true
    }
];




// ==========================================
// Global Variables
// ==========================================
let pageFlip;
const ASPECT_RATIO = 1.414; // A3 Landscape aspect ratio

// DOM Elements
const views = {
    flip: document.getElementById('view-flip'),
    scroll: document.getElementById('view-scroll'),
    grid: document.getElementById('view-grid'),
    movie: document.getElementById('view-movie')
};

const btns = {
    flip: document.getElementById('btn-flip'),
    scroll: document.getElementById('btn-scroll'),
    grid: document.getElementById('btn-grid'),
    movie: document.getElementById('btn-movie'),
    fullscreen: document.getElementById('btn-fullscreen')
};

// ==========================================
// Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    generateDOM();
    initPageFlip();
    setupEventListeners();
    switchView('flip');

    // Auto-appear animation for scroll view on load if it were active
    // setupScrollObserver();
});

// ==========================================
// DOM Generation
// ==========================================
function generateDOM() {
    const flipBook = document.getElementById('flip-book');
    const scrollContainer = document.getElementById('scroll-container');
    const gridContainer = document.getElementById('grid-container');
    const movieContainer = document.getElementById('movie-container');

    // 1. Initialize buffers
    let flipHTML = '';
    let navHTML = '';
    const groupStartPages = {};
    const movieGroups = {};

    // --- Process all items for different views ---
    portfolioData.forEach((item, index) => {
        // A. Flip Mode Pages
        const sideClass = index % 2 === 0 ? 'page-right' : 'page-left';
        let qrOverlay = '';
        if (item.qrCodes && item.qrCodes.length > 0) {
            item.qrCodes.forEach(qr => {
                let qrImgSrc = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qr.url)}`;
                let action = qr.type === 'video' ? `onclick="openVideoModal('${qr.url}'); event.stopPropagation();" onmousedown="event.stopPropagation();" ontouchstart="event.stopPropagation();"` : `onclick="window.open('${qr.url}', '_blank'); event.stopPropagation();" onmousedown="event.stopPropagation();" ontouchstart="event.stopPropagation();"`;
                qrOverlay += `<div class="qr-button qr-${qr.position}" ${action}><img src="${qrImgSrc}"></div>`;
            });
        }
        if (item.isBlank) {
            flipHTML += `
                <div class="page ${sideClass}">
                    <div class="page-content" style="background: #fff;"></div>
                </div>`;
        } else if (item.isReset) {
            flipHTML += `
                <div class="page ${sideClass}">
                    <div class="page-content" style="background: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer;" onclick="flipBackToStart();">
                        <h1 style="color: #555; font-size: 2rem; letter-spacing: 0.1em;">TITLE</h1>
                    </div>
                </div>`;
        } else {
            flipHTML += `
                <div class="page ${sideClass}">
                    <div class="page-content" style="position: relative;">
                        <img src="${item.image}" class="page-image-full">
                        ${qrOverlay}
                    </div>
                </div>`;
        }

        // B. Top Nav Gathering
        if (item.group && !groupStartPages[item.group]) {
            groupStartPages[item.group] = index;
            // Determine nav content: Text for Title, Image logo for others (1-12)
            const groupNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
            let navContent = item.group;
            let groupIndex = groupNames.indexOf(item.group);
            if (groupIndex !== -1) {
                navContent = `<img src="logo/${groupIndex + 1}.png" class="nav-logo-img" alt="${item.group}">`;
            }

            // Only remove End button from top UI
            if (item.group !== "End") {
                if (item.group === "Title") {
                    navContent = `<span style="font-weight: bold; font-family: 'Inter', sans-serif;">TITLE</span>`;
                }
                navHTML += `<button class="nav-link" onclick="goToProject('${item.group}', ${index})">${navContent}</button>`;
            }
        }



        // D. Aggregating Movie Data
        if (item.qrCodes || item.type === "video") {
            if (!movieGroups[item.group]) movieGroups[item.group] = [];
            if (item.qrCodes) {
                item.qrCodes.forEach(q => movieGroups[item.group].push({ ...q, title: item.title, thumbnail: item.image }));
            } else if (item.type === "video") {
                movieGroups[item.group].push({ url: item.videoUrl, type: "video", title: item.title, thumbnail: item.image });
            }
        }
    });

    // C & E. Generate Staggered Spreads for Grid and Scroll
    // First spread has only a right page (index 0). Subsequent have two pages.
    // Filter out extra pages (reset/blank) for Grid and Scroll views
    const displayData = portfolioData.filter(item => !item.isExtra);

    const spreads = [];
    if (displayData.length > 0) {
        spreads.push({ left: null, right: { item: displayData[0], index: 0 } });
    }
    for (let i = 1; i < displayData.length; i += 2) {
        spreads.push({
            left: { item: displayData[i], index: i },
            right: displayData[i + 1] ? { item: displayData[i + 1], index: i + 1 } : null
        });
    }

    let gridHTML = '';
    let scrollHTML = '';
    let currentGridGroup = null;

    spreads.forEach(spread => {
        let groupForSpread = spread.left && spread.left.item.group ? spread.left.item.group
            : (spread.right && spread.right.item.group ? spread.right.item.group : null);

        if (groupForSpread && groupForSpread !== currentGridGroup) {
            currentGridGroup = groupForSpread;
            const groupNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
            let headerContent = currentGridGroup;
            let groupIndex = groupNames.indexOf(currentGridGroup);
            if (groupIndex !== -1) {
                headerContent = `<img src="logo/${groupIndex + 1}.png" class="section-logo-img" alt="${currentGridGroup}">`;
            } else if (currentGridGroup === "Title" || currentGridGroup === "End") {
                headerContent = "TITLE"; // Insert title.jpg instead of blank text
            }

            if (headerContent !== "") {
                gridHTML += `<div class="grid-group-header"><h2>${headerContent}</h2></div>`;
                scrollHTML += `<div class="scroll-group-header"><h2>${headerContent}</h2></div>`;
            }
        }

        const createMiniPage = (pageData) => {
            if (!pageData) return '<div class="mini-page empty-page" style="background: transparent; border: none;"></div>';
            const item = pageData.item;

            if (item.isBlank) {
                return `<div class="mini-page blank-page" style="background: #fff; border: none;"></div>`;
            }

            if (item.isReset) {
                return `
                    <div class="mini-page reset-page" onclick="flipBackToStart(); event.stopPropagation();" style="background: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                        <h2 style="color: #555;">TITLE</h2>
                    </div>`;
            }

            let qrOverlay = '';
            if (item.qrCodes && item.qrCodes.length > 0) {
                item.qrCodes.forEach(qr => {
                    let qrImgSrc = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qr.url)}`;
                    let action = qr.type === 'video' ? `onclick="openVideoModal('${qr.url}'); event.stopPropagation();" onmousedown="event.stopPropagation();" ontouchstart="event.stopPropagation();"` : `onclick="window.open('${qr.url}', '_blank'); event.stopPropagation();" onmousedown="event.stopPropagation();" ontouchstart="event.stopPropagation();"`;
                    qrOverlay += `<div class="qr-button qr-${qr.position}" ${action}><img src="${qrImgSrc}"></div>`;
                });
            }
            return `<div class="mini-page"><img src="${item.image}">${qrOverlay}</div>`;
        };

        const leftHTML = createMiniPage(spread.left);
        const rightHTML = createMiniPage(spread.right);
        const targetIndex = spread.left ? spread.left.index : spread.right.index;

        gridHTML += `
            <div class="grid-spread" onclick="goToProject('', ${targetIndex})">
                ${leftHTML}
                ${rightHTML}
            </div>
        `;

        scrollHTML += `
            <article class="scroll-spread" onclick="goToProject('', ${targetIndex})">
                ${leftHTML}
                ${rightHTML}
            </article>
        `;
    });

    gridContainer.innerHTML = gridHTML;
    scrollContainer.innerHTML = scrollHTML;

    // F. Generate Consolidated Movie View
    let finalMovieHTML = '';
    for (const [group, items] of Object.entries(movieGroups)) {
        finalMovieHTML += `
            <div class="movie-group">
                <h3>${(() => {
                const groupNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
                let groupIndex = groupNames.indexOf(group);
                if (groupIndex !== -1) {
                    return `<img src="logo/${groupIndex + 1}.png" class="section-logo-img" alt="${group}">`;
                }
                return group;
            })()}</h3>
                <div class="movie-grid">
                    ${items.map(m => {
                let icon = m.type === 'video' ? 'fa-play' : 'fa-link';
                let action = m.type === 'video' ? `openVideoModal('${m.url}')` : `window.open('${m.url}', '_blank')`;
                let qrImgStr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(m.url)}`;
                const displayTitle = m.label || m.title;
                return `
                            <div class="movie-card" onclick="${action}; event.stopPropagation();" onmousedown="event.stopPropagation();" ontouchstart="event.stopPropagation();">
                                <div class="movie-thumbnail-container">
                                    <img src="${m.thumbnail}" class="movie-thumbnail">
                                    <div class="movie-qr-mini-overlay">
                                        <img src="${qrImgStr}">
                                    </div>
                                </div>
                                <div class="movie-info">
                                    <div class="movie-card-title"><i class="fa-solid ${icon}"></i> ${displayTitle}</div>
                                </div>
                            </div>
                        `;
            }).join('')}
                </div>
            </div>
        `;
    }
    movieContainer.innerHTML = finalMovieHTML;

    // G. Finalize Flip Book and Nav
    flipBook.innerHTML = flipHTML;
    const topNav = document.getElementById('top-nav');
    if (topNav) topNav.innerHTML = navHTML;
}

function initPageFlip() {
    const flipContainer = document.getElementById('flip-container');
    const flipBookEl = document.getElementById('flip-book');

    // Calculates dimensions based on container and aspect ratio
    const containerWidth = flipContainer.clientWidth * 0.9;
    const containerHeight = flipContainer.clientHeight * 0.9;

    // We need to fit two pages side-by-side. 
    // User requested EACH PAGE to be A3 Landscape (1.414 : 1).
    // Therefore, Page Width : Page Height = 1.414 : 1

    // Determine bounds
    let pageHeight = containerHeight;
    let pageWidth = pageHeight * 1.414;

    // Check if it fits width-wise (both pages)
    if ((pageWidth * 2) > containerWidth) {
        pageWidth = containerWidth / 2;
        pageHeight = pageWidth / 1.414;
    }

    try {
        pageFlip = new St.PageFlip(flipBookEl, {
            width: pageWidth,
            height: pageHeight,
            size: "fixed",
            minWidth: 300,
            maxWidth: 2000,
            minHeight: 200,
            maxHeight: 1500,
            maxShadowOpacity: 0.6,
            showCover: true,
            usePortrait: false, // Force 2-page spread
            mobileScrollSupport: false,
            flippingTime: 400 // Faster flip
        });

        pageFlip.loadFromHTML(document.querySelectorAll('.page'));

        // Update pagination
        document.getElementById('flip-page-total').textContent = pageFlip.getPageCount();

        pageFlip.on('flip', (e) => {
            document.getElementById('flip-page-current').textContent = e.data + 1;
        });

    } catch (error) {
        console.error("PageFlip initialization error:", error);
    }
}

// ==========================================
// Event Listeners & Interactions
// ==========================================
function setupEventListeners() {
    // Mode Switching
    btns.flip.addEventListener('click', () => switchView('flip'));
    btns.scroll.addEventListener('click', () => {
        switchView('scroll');
        // Trigger scroll animations manually since intersection observer might miss them initially
        setTimeout(() => {
            const items = document.querySelectorAll('.scroll-item');
            items.forEach((item, index) => {
                setTimeout(() => item.classList.add('visible'), index * 150);
            });
        }, 100);
    });
    btns.grid.addEventListener('click', () => switchView('grid'));
    btns.movie.addEventListener('click', () => switchView('movie'));

    // Pagination Controls
    const btnPrev = document.getElementById('btn-prev-page');
    const btnNext = document.getElementById('btn-next-page');

    if (btnPrev && btnNext) {
        btnPrev.addEventListener('click', () => {
            if (pageFlip) pageFlip.flipPrev();
        });
        btnNext.addEventListener('click', () => {
            if (pageFlip) pageFlip.flipNext();
        });
    }

    // Fullscreen Toggle
    btns.fullscreen.addEventListener('click', toggleFullscreen);

    // Grid Item Click -> Go to Flip Mode at specific page
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', () => {
            const targetPage = parseInt(item.getAttribute('data-page-index'), 10);
            switchView('flip');
            if (pageFlip) {
                setTimeout(() => {
                    pageFlip.turnToPage(targetPage);
                }, 400); // Wait for transition
            }
        });
    });

    // Window Resize -> Recalculate PageFlip (Skip if Fullscreen)
    let resizeTimer;
    window.addEventListener('resize', () => {
        // Prevent reload if we are toggling fullscreen
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            return;
        }

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (views.flip.classList.contains('active')) {
                // In production, calling pageFlip.update() is better, but reloading works for robust resizing here.
                location.reload();
            }
        }, 400); // Debounce longer
    });

    // Intersection Observer for Scroll effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-item').forEach(item => {
        observer.observe(item);
    });
}

function switchView(targetView) {
    // Hide all
    Object.values(views).forEach(v => v.classList.remove('active'));
    Object.values(btns).forEach(b => {
        if (b.id !== 'btn-fullscreen') b.classList.remove('active');
    });

    // Show target
    views[targetView].classList.add('active');
    btns[targetView].classList.add('active');

    // Control top-nav visibility: ALWAYS show
    const topNav = document.getElementById('top-nav');
    if (topNav) {
        topNav.style.display = 'flex';
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        }
        btns.fullscreen.innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        }
        btns.fullscreen.innerHTML = '<i class="fa-solid fa-expand"></i>';
    }
}

// ==========================================
// Video Modal Logic
// ==========================================
function openVideoModal(videoUrl) {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('fullscreen-video');
    video.src = videoUrl;
    modal.classList.remove('modal-hidden');
    video.play();
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('fullscreen-video');
    video.pause();
    video.src = "";
    modal.classList.add('modal-hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('btn-close-video');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeVideoModal();
        });
    }

    // 背景をクリックした時にも閉じる
    const modal = document.getElementById('video-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeVideoModal();
            }
        });
    }
});

function goToProject(groupName, pageIndex) {
    switchView('flip');
    if (pageFlip) {
        setTimeout(() => {
            pageFlip.turnToPage(pageIndex);
        }, 100);
    }
}

function flipBackToStart() {
    if (!pageFlip) return;

    const flipBook = document.getElementById('flip-book');
    if (!flipBook) return;

    const rect = flipBook.getBoundingClientRect();

    let overlay = document.getElementById('reset-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'reset-overlay';
        document.body.appendChild(overlay);
    }

    overlay.innerHTML = '';
    overlay.style.display = 'block';

    // Sample images from portfolioData, excluding extras
    const imagePool = portfolioData.filter(item => !item.isExtra && item.image).map(item => item.image);

    const leafCount = 12;
    const pageW = rect.width / 2;
    const pageH = rect.height;

    // Total duration ~2s
    const stagger = 0.1;
    const startDelay = 0.3; // Delay the start of leaves slightly

    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'reset-leaf';

        leaf.style.width = `${pageW}px`;
        leaf.style.height = `${pageH}px`;
        leaf.style.top = `${rect.top}px`;
        leaf.style.left = `${rect.left}px`;

        const randomImg = imagePool[Math.floor(Math.random() * imagePool.length)];
        leaf.innerHTML = `<img src="${randomImg}" style="width: 100%; height: 100%; object-fit: cover;">`;

        // Use the startDelay
        leaf.style.animation = `fake-flip-reverse 0.8s ease-in-out ${startDelay + (i * stagger)}s forwards`;
        overlay.appendChild(leaf);
    }

    // DELAY the book disappearance so it starts after leaves are already flipping
    setTimeout(() => {
        flipBook.classList.add('book-resetting');
    }, 500);

    setTimeout(() => {
        pageFlip.turnToPage(0);
        flipBook.classList.remove('book-resetting');
    }, 1500); // Reset after most leaves covered the surface

    setTimeout(() => {
        overlay.style.display = 'none';
        overlay.innerHTML = '';
    }, 2500);
}
