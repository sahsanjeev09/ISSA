function getFruit(fruit) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fruit === "watermelon") {
          reject(new Error("Sorry, we're out of watermelons"));
        } else {
          resolve(`Here is your ${fruit}`);
        }
      }, 1000);
    });
  }
  