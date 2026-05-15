// GreenTech Solutions Final Project JavaScript
// This file adds simple beginner-level interactivity.

// Mobile menu button
let menuButton = document.getElementById("menuButton");
let mainMenu = document.getElementById("mainMenu");

if (menuButton) {
    menuButton.addEventListener("click", function() {
        mainMenu.classList.toggle("show");

        if (mainMenu.classList.contains("show")) {
            menuButton.setAttribute("aria-expanded", "true");
        } else {
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
}

// High contrast button
let contrastButton = document.getElementById("contrastButton");

if (contrastButton) {
    contrastButton.addEventListener("click", function() {
        document.body.classList.toggle("high-contrast");
    });
}

// Product search and filter
let productSearch = document.getElementById("productSearch");
let filterButtons = document.getElementsByClassName("filterButton");
let products = document.getElementsByClassName("product");
let currentFilter = "all";

function showProducts() {
    let searchText = "";

    if (productSearch) {
        searchText = productSearch.value.toLowerCase();
    }

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let productName = product.innerText.toLowerCase();
        let productCategory = product.getAttribute("data-category");

        let matchesSearch = productName.includes(searchText);
        let matchesFilter = currentFilter === "all" || currentFilter === productCategory;

        if (matchesSearch && matchesFilter) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    }
}

if (productSearch) {
    productSearch.addEventListener("keyup", showProducts);
}

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function() {
        currentFilter = this.getAttribute("data-filter");
        showProducts();
    });
}

// Blog read more buttons
let readMoreButtons = document.getElementsByClassName("readMoreButton");

for (let i = 0; i < readMoreButtons.length; i++) {
    readMoreButtons[i].addEventListener("click", function() {
        let extraText = this.nextElementSibling;

        if (extraText.style.display === "block") {
            extraText.style.display = "none";
            this.textContent = "Read more";
        } else {
            extraText.style.display = "block";
            this.textContent = "Show less";
        }
    });
}

// Newsletter form
let newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let newsletterMessage = document.getElementById("newsletterMessage");
        newsletterMessage.textContent = "Thank you for signing up for the GreenTech newsletter.";
    });
}

// Contact form validation
let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill out all required fields.";
        } else {
            formMessage.textContent = "Thank you, " + name + ". Your message was received.";
            contactForm.reset();
        }
    });
}
