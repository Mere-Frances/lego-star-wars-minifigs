// initialise jquery
$(document).ready(function () {
    // jquery functions here
    // jquery datepicker
    $("#datepicker").datepicker();
});

$(document).ready(function () {

    $('#fullpage').fullpage({
        // license
        licenseKey: 'gplv3-license',
        //options here
        autoScrolling: true,
        // scrollHorizontally: true,
        // v turns on navigation arrows v
        navigation: true,
        // slidesNavigation:true,
        controlArrows: false,
        setAllowScrolling: true,
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);

    //  Function to move to the specified section
    function moveToSection(number) {
        // v allows you to move sections or "jump"
        fullpage_api.moveTo(number);
    }

    $('goToSection1').click(function () {
        moveToSection(1);
        fullpage_api.getScrollY();
    })
    $('goToSection2').click(function () {
        moveToSection(2);
    })
    $('goToSection3').click(function () {
        moveToSection(3);
    })
    $('goToSection4').click(function () {
        moveToSection(4);
    })



    // Move to slide # - first number is sectin, second is slide - zero indexed for slides
    $('#goToSlide1').click(function () {
        fullpage_api.moveTo(1, 0);
    });

    $('#goToSlide2').click(function () {
        fullpage_api.moveTo(1, 1);
    });

    $('#goToSlide3').click(function () {
        fullpage_api.moveTo(1, 2);
    });

    $('#goToSlide4').click(function () {
        fullpage_api.moveTo(1, 3);
    });

    let user;

    modalHandlers();

});

const minifigs = [{
        id: 1,
        species: 'clone',
        name: '212th Airborne Trooper',
        date: '2014',
        sets: 'Utapau Troopers - Episode 3',
        price: 30,
        no: 'sw0523',
        popularity: 6,
        images: [
            './images/212th.webp'
        ]
    },
    {
        id: 2,
        species: 'jedi/sith',
        name: 'Ahsoka Tano',
        date: '2020 - 2022',
        sets: [
            'Armoured Assault Tank (AAT)',
            'Duel on Mandalore'
        ],
        price: 15,
        no: 'sw1096',
        popularity: 7,
        images: [
            './images/ahsoka.webp'
        ]
    },
    {
        id: 3,
        species: 'other',
        name: 'Queen Amidala',
        date: '2012',
        sets: 'Gungan Sub - Episode 1',
        price: 300,
        no: 'sw0387',
        popularity: 10,
        images: [
            './images/amidala.webp'
        ]
    },
    {
        id: 4,
        species: 'jedi/sith',
        name: 'Anakin Skywalker',
        date: '2012',
        sets: "Palpatine's Arrest - Episode 3",
        price: 90,
        no: 'sw0419',
        popularity: 10,
        images: [
            './images/anakin.webp'
        ]
    },
    {
        id: 5,
        species: 'mandalorian',
        name: 'Boba Fett',
        date: '2017',
        sets: 'Desert Skiff Escape',
        price: 70,
        no: 'sw0822',
        popularity: 8,
        images: [
            './images/boba.webp'
        ]
    },
    {
        id: 6,
        species: 'mandalorian',
        name: 'Bo-Katan Kryze',
        date: '2021 - 2022',
        sets: [
            'Bo-Katan Kryze paper bag - The Clone Wars',
            'Mandalorian Starfighter - The Clone Wars'
        ],
        price: 20,
        no: 'sw1163',
        popularity: 4,
        images: [
            './images/bokatan.webp'
        ]
    },
    {
        id: 7,
        species: 'other',
        name: 'Chewbacca',
        date: '2000 - 2023',
        sets: [
            'Millennium Falcon',
            'Imperial AT-ST',
            'Chewie Minifigure Pack'
        ],
        price: 10,
        no: 'sw0011',
        popularity: 2,
        images: [
            './images/chewbacca.webp'
        ]
    },
    {
        id: 8,
        species: 'droid',
        name: 'Chrome C-3PO',
        date: '2007',
        sets: '30th Anniversary Edition',
        price: 2000,
        no: 'sw0158',
        popularity: 10,
        images: [
            './images/c3po.webp'
        ]
    },
    {
        id: 9,
        species: 'jedi/sith',
        name: 'Yoda',
        date: '2013 - 2015',
        sets: 'Watch Set',
        price: 15,
        no: 'sw0685',
        popularity: 4,
        images: [
            './images/yoda.webp'
        ]
    },
    {
        id: 10,
        species: 'clone',
        name: 'Commander Cody',
        date: '2008',
        sets: 'Republic Attack Gunship - The Clone Wars',
        price: 80,
        no: 'sw0196',
        popularity: 8,
        images: [
            './images/cody.webp'
        ]
    },
    {
        id: 11,
        species: 'jedi/sith',
        name: 'Darth Vader',
        date: '2014',
        sets: 'Imperial Star Destroyer',
        price: 40,
        no: 'sw0586',
        popularity: 6,
        images: './images/darthvader.webp'
    },
    {
        id: 12,
        species: 'clone',
        name: 'Corporal Echo',
        date: '2021',
        sets: 'The Bad Batch Attack Shuttle - The Bad Batch',
        price: 30,
        no: 'sw1151',
        popularity: 5,
        images: './images/echo.webp'
    },
    {
        id: 13,
        species: ['jedi/sith', 'other'],
        name: 'Hoth Princess Leia',
        date: '2018',
        sets: [
            'Hoth Medical Chamber',
            'Betrayal at Cloud City'
        ],
        price: 30,
        no: 'sw0958',
        popularity: 6,
        images: './images/leia.webp'
    },
    {
        id: 14,
        species: 'other',
        name: 'Jar Jar Binks',
        date: '2011 - 2015',
        sets: [
            'Gungan Sub - Episode 1',
            'The Battle of Naboo - Episode 1',
            'AAt - Episode 1'
        ],
        price: 10,
        no: 'sw0301',
        popularity: 2,
        images: './images/jarjar.webp'
    },
    {
        id: 15,
        species: 'jedi/sith',
        name: 'Mace Windu',
        date: '2012',
        sets: 'Palpatine\'s Arrest - Episode 3',
        price: 35,
        no: 'sw0417',
        popularity: 5,
        images: './images/windu.webp'
    },
    {
        id: 16,
        species: 'mandalorian',
        name: 'The Mandalorian',
        date: '2021 - 2022',
        sets: [
            'Boba Fett’s Starship - The Mandalorian',
            'Imperial Light Cruiser - The Mandalorian',
            'Trouble on Tatooine - The Mandalorian'
        ],
        price: 10,
        no: 'sw1135',
        popularity: 4,
        images: './images/mando.webp'
    },
    {
        id: 17,
        species: 'jedi/sith',
        name: 'Darth Maul',
        date: '2021-2022',
        sets: [
            'Foil Pack',
            'Duel on Mandalore - The Clone Wars'
        ],
        price: 10,
        no: 'sw1155',
        popularity: 6,
        images: './images/maul.webp'
    },
    {
        id: 18,
        species: 'other',
        name: 'Padme Naberrie',
        date: '2019',
        sets: 'Anakin\'s Podracer - Episode 1',
        price: 20,
        no: 'sw1023',
        popularity: 7,
        images: './images/padme.webp'
    },
    {
        id: 19,
        species: 'droid',
        name: 'R2-D2, Astromech Droid',
        date: '2009',
        sets: 'Anakin\'s Y-Wing Starfighter - The Clone Wars',
        price: 20,
        no: 'sw0255',
        popularity: 4,
        images: './images/r2d2.webp'
    },
    {
        id: 20,
        species: 'clone',
        name: 'Captain Rex',
        date: '2013',
        sets: 'BARC Speeder with Sidecar - The Clone Wars',
        price: 300,
        no: 'sw0450',
        popularity: 10,
        images: './images/rex.webp'
    },
    {
        id: 21,
        species: 'other',
        name: 'Royal Guard',
        date: '2006 - 2009',
        sets: [
            'Death Star - UCS',
            'Imperial Star Destroyer'
        ],
        price: 15,
        no: 'sw0040b',
        popularity: 5,
        images: './images/royalguard.webp'
    },
    {
        id: 22,
        species: 'other',
        name: 'Imperial Tie Fighter Pilot',
        date: '2015',
        sets: 'Tie Fighter - UCS',
        price: 90,
        no: 'sw0632',
        popularity: 9,
        images: './images/tiefighter.webp'
    },
    {
        id: 23,
        species: 'clone',
        name: 'Commander Wolffe',
        date: '2011',
        sets: 'Republic Frigate - The Clone Wars',
        price: 210,
        no: 'sw0330',
        popularity: 9,
        images: './images/wolffe.webp'
    },
    {
        id: 24,
        species: 'jedi/sith',
        name: 'Young Anakin Skywalker',
        date: '2007 - 2009',
        sets: ' Naboo N-1 Starfighter and Vulture Droid - Episode 1',
        price: 10,
        no: 'sw0159',
        popularity: 3,
        images: './images/younganakin.webp'
    },
];

function populateMinifigs(productArray) {
    const products = document.getElementById('products');
    products.innerHTML = '';

    for (let i = 0; i < productArray.length; i++) {
        const miniProduct = productArray[i];
        products.innerHTML += `
        <div class="card">
            <div class="card-details"><img class="card-img" src="${miniProduct.images}"></div>
            <button id="two openModal" class="button card-button" data-id="${miniProduct.id}">
                <p class="text-title">${miniProduct.name}</p>
            </button>
        </div>
        `;
        console.log('inner html working')
    }
}

populateMinifigs(minifigs);

const lovedMinifigs = {}; // Change to object

function populateModal(miniProductId) {
    const modal = $('#modalInner');
    modal.empty();

    const miniProduct = minifigs.find(minifig => minifig.id === miniProductId);

    if (!miniProduct) {
        console.error('Minifig not found for ID:', miniProductId);
        return;
    }

    modal.append(`
    <div class="modal-details">
        <div id="modal-${miniProduct.id}" class="modal">
            <div class="modal-content">
                <div class="modal-img-details"><img class="modal-img" src="${miniProduct.images}"></div>
                <div class="modal-card-text">
                    <h4>${miniProduct.name}</h4>
                    <p>${miniProduct.no}</p>
                    <p>Release year: ${miniProduct.date}</p>
                    <p>Sets found in: <br>${miniProduct.sets}</p>
                    <p>Avg price: $${miniProduct.price}</p>
                    <div class="modal-buttons">
                        <button class="find-sellers">Find sellers</button>
                        <button id="love-${miniProductId}" class="find-sellers love-button">
                            <svg height="32" width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="empty">
                                <path d="M0 0H24V24H0z" fill="none"></path>
                                <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" class="filled">
                                <path fill="none" d="M0 0H24V24H0z"></path>
                                <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
                            </svg>
                            I love this
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <button id="closeModal-${miniProduct.id}" class="closeModal"><i class="fa-solid fa-xmark"></i></button>
    </div>
    `);

    // Add event listener to the "I love this" button
    const loveButton = document.getElementById(`love-${miniProductId}`);
    loveButton.addEventListener('click', function() {
        const productId = miniProductId.toString();
        if (lovedMinifigs[productId]) {
            delete lovedMinifigs[productId];
        } else {
            lovedMinifigs[productId] = miniProduct;
        }
        console.log('Loved minifigs:', lovedMinifigs);
        letsSee(); // Update loved minifigs display
    });
}

function letsSee() {
    const testing = document.getElementById('lovedContainer');
    testing.innerHTML = ''; // Clear previous content
    for (const productId in lovedMinifigs) {
        if (lovedMinifigs.hasOwnProperty(productId)) {
            const product = lovedMinifigs[productId];
            testing.innerHTML += `
                <div class="example-card">
                <div class="card-details"><img class="card-img" src="${product.images}"></div>
                </div>
            `;
        }
    }
}

letsSee(lovedMinifigs); // Call this function wherever you want to populate the modal

function modalHandlers() {
    $('.button').click(function (event) {
        console.log("CLICKED")
        const value = $(this).data('id');
        console.log(value)
        var buttonId = $(this).attr('id');
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');
        populateModal(value);
    })

    $('#modal-container').click(function () {
        $(this).addClass('out');
        $('body').removeClass('modal-active');
    });
}

// ------------ PRICE SORTING   

const priceMin = document.getElementById('priceMin');
const priceMax = document.getElementById('priceMax');
const sortPop = document.getElementById('sortPop');
const sortAlpha = document.getElementById('sortAlpha');

function sortMinPrice(minifigs) {
    return minifigs.sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return priceA - priceB;
    });
}

priceMin.addEventListener('click', function () {
    const lowestSort = sortMinPrice(minifigs);
    populateMinifigs(lowestSort);
    console.log('price sorting working')
    modalHandlers();
})

function sortMaxPrice(minifigs) {
    return minifigs.sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return priceB - priceA;
    });
}
priceMax.addEventListener('click', function () {
    const highestSort = sortMaxPrice(minifigs);
    populateMinifigs(highestSort);
    modalHandlers();
})

function sortAlphabetical(minifigs) {
    return minifigs.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameA.localeCompare(nameB);
    })
}

sortAlpha.addEventListener('click', function () {
    const alphabeticalSorting = sortAlphabetical(minifigs);
    populateMinifigs(alphabeticalSorting);
    modalHandlers();
})

function sortPopular(minifigs) {
    return minifigs.sort((a, b) => {
        const popA = parseFloat(a.popularity);
        const popB = parseFloat(b.popularity);
        return popB - popA;
    });
}

sortPop.addEventListener('click', function () {
    const popularSort = sortPopular(minifigs);
    populateMinifigs(popularSort);
    modalHandlers();
})

// FILTERING

const sithJedi = document.getElementById('sithJedi');
const clones = document.getElementById('clones');
const mandalorians = document.getElementById('mandalorians');
const droids = document.getElementById('droids');

document.getElementById('sithJedi').addEventListener('click', function () {
    const sithJediMinifigs = minifigs.filter(minifig => minifig.species === 'jedi/sith');
    populateMinifigs(sithJediMinifigs);
    modalHandlers();
})

document.getElementById('clones').addEventListener('click', function () {
    const cloneMinifigs = minifigs.filter(minifig => minifig.species === 'clone');
    populateMinifigs(cloneMinifigs);
    modalHandlers();
});

document.getElementById('mandalorians').addEventListener('click', function () {
    const mandalorianMinifigs = minifigs.filter(minifig => minifig.species === 'mandalorian');
    populateMinifigs(mandalorianMinifigs);
    modalHandlers();
})

document.getElementById('droids').addEventListener('click', function () {
    const droidMinifigs = minifigs.filter(minifig => minifig.species === 'droid');
    populateMinifigs(droidMinifigs);
    modalHandlers();
});
