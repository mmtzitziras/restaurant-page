function displayHomeScreen(){
    const containerDiv = document.querySelector("#content");
    containerDiv.innerHTML = "";
    const homeH1 = document.createElement('h1');
    homeH1.textContent = "Marios' Mediterranean Bistro";
    containerDiv.appendChild(homeH1);
    const homeDesc = document.createElement('p');
    homeDesc.textContent = "Indulge in the flavors of the Mediterranean at Marios' Bistro. Our menu features a delightful fusion of Greek, Italian, and Middle Eastern cuisines, expertly crafted to tantalize your taste buds. From savory gyros to fresh seafood dishes and aromatic pastas, every bite is a journey through the sun-kissed shores of the Mediterranean. Whether you're craving a leisurely lunch or a romantic dinner, Marios' Bistro promises an unforgettable culinary experience.";
    containerDiv.appendChild(homeDesc);
    const homeHours = document.createElement('p');
    homeHours.textContent = `Open Hours:

    Monday to Thursday: 11:00 AM - 9:00 PM
    Friday and Saturday: 11:00 AM - 10:00 PM
    Sunday: 12:00 PM - 8:00 PM`;

    containerDiv.appendChild(homeHours);

    const homeLocation = document.createElement('p');
    homeLocation.textContent = 'Location: 123 Olive Grove Lane Seaview Terrace, Rivertown, AZ 12345' 
    containerDiv.appendChild(homeLocation);

    console.log("Works!")

}

export {displayHomeScreen};