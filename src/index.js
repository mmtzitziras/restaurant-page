import { initialPageLoad } from "./pageLoad"
import * as css from "./styles.css";
import { displayHomeScreen } from "./home";
import { displayMenuScreen } from "./menu";

displayHomeScreen();

const menuBtn = document.querySelector('#menu-btn');
const homeBtn = document.querySelector('#home-btn');

menuBtn.addEventListener("click", function() {
    displayMenuScreen();
})

homeBtn.addEventListener("click", function() {
    displayHomeScreen();
    console.log("Working btn")
})

