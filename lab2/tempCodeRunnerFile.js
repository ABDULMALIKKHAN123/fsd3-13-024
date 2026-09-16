const main = async () => {
  const cin = readline.createInterface({
    input: stdin,
    output: stdout
  });

  let choice;

  do {
    console.log("Welcome to shopping cart 🛍️");
    console.log("1 ------- Add to cart");
    console.log("2 ------- Show Cart");
    console.log("3 ------- Remove Item");
    console.log("4 ------- Update Quantity");
    console.log("5 ------- Checkout");

    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {

      case 1:
        let data = await cin.question("Enter id,name,price,qty: ");

        let p = data.split(",");
        let q = p.map((item) => item.trim());

        let [id, name, price, qty] = q;

        const product = {
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty)
        };

        await addToCart(product);
        break;

      case 2:
        await showCart();
        break;

      case 3:
        await deleteFromCart();
        break;

      case 4:
        await updateCart();
        break;

      case 5:
        console.log("See you later...😃");
        break;

      default:
        console.log("Invalid choice! try again 🛑");
    }

  } while (choice != "5");

  cin.close();
};

main();