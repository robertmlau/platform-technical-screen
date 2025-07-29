/**
 * Function to sort packages based on bulkiness and heaviness.
 * @param {number} width - Width in cm
 * @param {number} height - Height in cm
 * @param {number} length - Length in cm
 * @param {number} mass - Mass in kg
 * @returns {string} - Name of the stack: "STANDARD", "SPECIAL", or "REJECTED"
 */
function sort(width, height, length, mass) {
  // Calculate volume (in cubic centimeters)
  const volume = width * height * length;

  // Bulky: volume >= 1,000,000 cm^3 OR any dimension >= 150 cm
  const isBulky = (
    volume >= 1000000 ||
    width >= 150 ||
    height >= 150 ||
    length >= 150
  );

  // Heavy: mass >= 20 kg
  const isHeavy = mass >= 20;

  // Decision logic
  if (isBulky && isHeavy) {
    // Both conditions met: REJECTED
    return "REJECTED";
  } else if (isBulky || isHeavy) {
    // Either condition met: SPECIAL
    return "SPECIAL";
  } else {
    // Neither condition met: STANDARD
    return "STANDARD";
  }
}

// Example usage and tests
console.log(sort(100, 100, 100, 19)); // "STANDARD" (not bulky, not heavy)
console.log(sort(200, 50, 30, 10));   // "SPECIAL" (bulky dimension)
console.log(sort(50, 50, 50, 25));    // "SPECIAL" (heavy mass)
console.log(sort(200, 200, 200, 25)); // "REJECTED" (both bulky and heavy)
