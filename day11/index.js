function createButtonWithCounter() {
  let count = 0;

  const button = document.createElement("button");
  button.textContent = "Click me";
  document.body.appendChild(button);

  button.addEventListener("click", function () {
    count++;
    console.log(`Button clicked ${count} time(s).`);
  });
}

createButtonWithCounter();
// ===================================
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    reset: function () {
      count = 0;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
console.log(counter.reset()); // 0
console.log(counter.getCount()); // 0
