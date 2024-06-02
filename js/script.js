/*jshint esversion: 6*/
// mapbox token
// mapboxgl.accessToken = "mapbox access token link here";

// initialise jquery
$(document).ready(function () {
    // jquery functions here
    // jquery datepicker
    $("#datepicker").datepicker();
});

$(document).ready(function () {
    // ALL JS GOES IN HERE

    // // FULLPAGE Initialisation
    // new fullpage('#fullpage', {
    //     // licence
    //     licenseKey: 'gplv3-license', // Open Source Free licence
    //     //options here
    //     // autoScrolling: true,
    //     scrollHorizontally: true,
    //     // turn on navigation arrows:
    //     navigation: true,
    // });

    // //  Function to move to the specified section
    // function moveToSection(number) {
    //     fullpage_api.moveTo(number); // allows you to move sections or "jump"
    // }

    $('#fullpage').fullpage({
        // license
        licenseKey: 'gplv3-license',
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        // v turns on navigation arrows v
        navigation: true,
        // slidesNavigation:true,
        controlArrows: false,
        setAllowScrolling:true,
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

    // // moveSilently:
    // $('#goToSlide3').click(function() {
    //     fullpage_api.silentMoveTo(1, 2);
    // });

    // Set Up a Variable to track the User
    let user;

    // Click on the submit Button:
    $('#submitButton').click(function (event) {
        event.target.preventDefault();
        console.log('working');

        // Setup Regex for form validation:
        const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        // Get input values:
        const username = $('#username').val();
        const email = $('#email').val();
        const password = $('#password').val();

        console.log(username + password + email);

        // Test against regex for form validation:
        if (!usernameRegex.test(username)) {
            $('#formMessage').html('Username must be between 3 and 15 characters long and can only contain letters, numbers and underscores.');
        } else if (!emailRegex.test(email)) {
            $('#formMessage').html(`<p>'Invalid email format.'</p>`)
        } else if (!passwordRegex.test(password)) {
            $('#formMessage').html(`<p>'Password must be at least 8 characters long and contain both letters and numbers.'</p>`);
        } else {
            // if passed all regex tests:
            $('#formMessage').html('');
            // set user equal to the username:
            user = username; //
            console.log(user);
            // Set the logged in user span to the user value:
            checkForLoggedInUser();
            // Move to slide 2 of section 1
            fullpage_api.moveTo(1, 1); // slide 2
        }
    })

    function checkForLoggedInUser() {
        if (!user) {
            console.log("log in");
        } else {
            console.log(user);
            $('#slide2').html(`<h2>Hey, <span id="loggedInUser">${user}</span>!</h2>`);
            $('nav').html(`<h2>Welcome Back, <span id="loggedInUser">${user}</span>!</h2>`);
        }
    }

    checkForLoggedInUser(); // because no vlaue is assigned to user it treats it as false

});



const minifigs = [{
        id: 1,
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
        name: 'The Mandolorian',
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
        name: 'Young Anakin Skywalker',
        date: '2007 -2009',
        sets: '	Naboo N-1 Starfighter and Vulture Droid - Episode 1',
        price: 10,
        no: 'sw0159',
        popularity: 3,
        images: './images/younganakin.webp'
    }
];

function populateMinifigs(productArray) {
    const products = document.getElementById('products');
    products.innerHTML = '';

    for (let i = 0; i < productArray.length; i++) {
        products.innerHTML += `
        <div class="card">
            <div class="card-details"><img class="card-img" src="${productArray[i].images}"></div>
            <button class="card-button">
                <p class="text-title">${productArray[i].name}</p>
            </button>
        </div>
        `;
    }
}

populateMinifigs(minifigs);