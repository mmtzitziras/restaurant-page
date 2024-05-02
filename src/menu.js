function displayMenuScreen(){

    const menu = [
        {
          name: "Mediterranean Sampler",
          description: "Hummus, baba ganoush, tabbouleh, and pita bread",
          price: 12.99
        },
        {
          name: "Spanakopita",
          description: "Flaky phyllo pastry filled with spinach and feta cheese",
          price: 9.99
        },
        {
          name: "Bruschetta",
          description: "Toasted baguette slices topped with diced tomatoes, basil, and balsamic glaze",
          price: 8.99
        },
        {
          name: "Greek Salad",
          description: "Mixed greens, tomatoes, cucumbers, red onions, olives, feta cheese, and Greek dressing",
          price: 11.99
        },
        {
          name: "Caprese Salad",
          description: "Sliced tomatoes, fresh mozzarella, basil leaves, balsamic glaze, and olive oil",
          price: 10.99
        },
        {
          name: "Lamb Gyro Platter",
          description: "Grilled lamb slices served with pita bread, tzatziki sauce, and Greek salad",
          price: 16.99
        },
        {
          name: "Shrimp Linguine",
          description: "Shrimp sautéed with garlic, cherry tomatoes, and spinach in a white wine sauce",
          price: 18.99
        },
        {
          name: "Chicken Shawarma",
          description: "Marinated chicken served with rice pilaf, tahini sauce, and grilled vegetables",
          price: 15.99
        },
        {
          name: "Baklava",
          description: "Layers of phyllo pastry filled with chopped nuts and honey syrup",
          price: 7.99
        },
        {
          name: "Tiramisu",
          description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese",
          price: 8.99
        }
      ];
    const containerDiv = document.querySelector("#content");
    containerDiv.innerHTML = "";

    menu.forEach((food) => {
        const foodDiv = document.createElement('div')
        const foodTitle = document.createElement('h2');
        const foodDesc = document.createElement('p');

        foodTitle.textContent = food.name;
        foodDesc.textContent = food.description;
        foodDiv.appendChild(foodTitle);
        foodDiv.appendChild(foodDesc);
        containerDiv.appendChild(foodDiv);
    })

}

export {displayMenuScreen};