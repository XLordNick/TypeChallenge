const STARTBT = document.querySelector("#start");
const TEXTBOX = document.querySelector(".type-box textarea");
const COPYTEXT = document.querySelector("#type-text");
const SCORE = document.querySelector(".intro h4");

TEXTBOX.disabled = true;

random_word_list = ["Adult", "Aeroplane", "Air", "Aircraft Carrier", "Airforce", "Airport", "Album", "Alphabet", "Apple", "Arm", "Army", "Baby", "Baby", "Backpack", "Balloon", "Banana", "Bank", "Barbecue", "Bathroom", "Bathtub", "Bed", "Bed", "Bee", "Bible", "Bible", "Bird", "Bomb", "Book", "Boss", "Bottle", "Bowl", "Box", "Boy", "Brain", "Bridge", "Butterfly", "Button", "Cappuccino", "Car", "Car-race", "Carpet", "Carrot", "Cave", "Chair", "Chess Board", "Chief", "Child", "Chisel", "Chocolates", "Church", "Church", "Circle", "Circus", "Circus", "Clock", "Clown", "Coffee", "Coffee-shop", "Comet", "Compact Disc", "Compass", "Computer", "Crystal", "Cup", "Cycle", "Data Base", "Desk", "Diamond", "Dress", "Drill", "Drink", "Drum", "Dung", "Ears", "Earth", "Egg", "Electricity", "Elephant", "Eraser", "Explosive", "Eyes", "Family", "Fan", "Feather", "Festival", "Film", "Finger", "Fire", "Floodlight", "Flower", "Foot", "Fork", "Freeway", "Fruit", "Fungus", "Game", "Garden", "Gas", "Gate", "Gemstone", "Girl", "Gloves", "God", "Grapes", "Guitar", "Hammer", "Hat", "Hieroglyph", "Highway", "Horoscope", "Horse", "Hose", "Ice", "Ice-cream", "Insect", "Jet fighter", "Junk", "Kaleidoscope", "Kitchen", "Knife", "Leather jacket", "Leg", "Library", "Liquid", "Magnet", "Man", "Map", "Maze", "Meat", "Meteor", "Microscope", "Milk", "Milkshake", "Mist", "Money $$$$", "Monster", "Mosquito", "Mouth", "Nail", "Navy", "Necklace", "Needle", "Onion", "PaintBrush", "Pants", "Parachute", "Passport", "Pebble", "Pendulum", "Pepper", "Perfume", "Pillow", "Plane", "Planet", "Pocket", "Post-office", "Potato", "Printer", "Prison", "Pyramid", "Radar", "Rainbow", "Record", "Restaurant", "Rifle", "Ring", "Robot", "Rock", "Rocket", "Roof", "Room", "Rope", "Saddle", "Salt", "Sandpaper", "Sandwich", "Satellite", "School", "Sex", "Ship", "Shoes", "Shop", "Shower", "Signature", "Skeleton", "Slave", "Snail", "Software", "Solid", "Space Shuttle", "Spectrum", "Sphere", "Spice", "Spiral", "Spoon", "Sports-car", "Spot Light", "Square", "Staircase", "Star", "Stomach", "Sun", "Sunglasses", "Surveyor", "Swimming Pool", "Sword", "Table", "Tapestry", "Teeth", "Telescope", "Television", "Tennis racquet", "Thermometer", "Tiger", "Toilet", "Tongue", "Torch", "Torpedo", "Train", "Treadmill", "Triangle", "Tunnel", "Typewriter", "Umbrella", "Vacuum", "Vampire", "Videotape", "Vulture", "Water", "Weapon", "Web", "Wheelchair", "Window", "Woman", "Worm", "X-ray"];

var timer = 30;
var matchText = randomPhraseGenerator();
var characterCorrect = 0;
var characterTyped = 0;

function startPress(e) {
    TEXTBOX.disabled = false;
    e.preventDefault();
    if (STARTBT.innerText === "Start") {
        TEXTBOX.value = "";
        STARTBT.innerText = "Start Over";
        startGame();
    } else {
        TEXTBOX.value = "";
        clearInterval(timer_clock);
        startGame();
    }
}

function startGame() {
    timer = 30;
    characterCorrect = 0;
    characterTyped = 0;
    matchText = randomPhraseGenerator();
    COPYTEXT.innerHTML = matchText;
    SCORE.innerHTML = "Characters Correct: " + characterCorrect;
    document.querySelector(".intro h3");
    document.querySelector(".intro h3").innerHTML = "Time Remaining " + timer;
    timer_clock = setInterval(decrementTimer, 1000);
}

function decrementTimer() {
    if (timer > 0) {
        timer--;
        document.querySelector(".intro h3").innerHTML = "Time Remaining " + timer;
    } else {
        clearInterval(timer_clock);
        TEXTBOX.disabled = true;
        checkMatch(null);
        alert("Congrats!! You submitted " + characterCorrect + " characters correctly" +
            " and submitted " + characterTyped + " characters in total!!");
    }
}

function checkMatch(e) {
    if (e == null || e.key == "Enter") {
        if (e != null) {
            e.preventDefault();
        }
        characterTyped += TEXTBOX.value.length;
        if (TEXTBOX.value == matchText) {
            characterCorrect += TEXTBOX.value.length;
            SCORE.innerHTML = "Characters Correct: " + characterCorrect;
            matchText = randomPhraseGenerator();
            COPYTEXT.innerHTML = matchText;
        } else {
            alert("Incorrect");
        }
        TEXTBOX.value = "";
    }
}

function randomPhraseGenerator() {
    let phrase = "";
    for (let i = 0; i < Math.floor(Math.random() * 5) + 5; i++) {
        phrase += (random_word_list[Math.floor(Math.random() * random_word_list.length)]) + " ";
    }
    return phrase.trim();
}

STARTBT.addEventListener("click", startPress, false);
document.body.addEventListener("keypress", checkMatch, false);


/**
 * Change character count to include backspace <-- don't feel like it
 * Disable copy and pasting
 */