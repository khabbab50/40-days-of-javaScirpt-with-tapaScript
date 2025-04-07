function processPayment(amount) {
  const balance = 1000; // Example balance

  if (typeof amount !== "number" || isNaN(amount)) {
    throw new Error("Invalid amount: must be a number.");
  }

  if (amount <= 0) {
    throw new Error("Payment amount must be greater than zero.");
  }

  if (amount > balance) {
    throw new Error("Insufficient balance for this payment.");
  }

  console.log(`Payment of $${amount} processed successfully.`);
}

try {
  processPayment(500); // ✅ success
  processPayment(-100); // ❌ throws error
  processPayment(1500); // ❌ throws error
} catch (error) {
  console.log("Error:", error.message);
}
