function euCalc(
  mileage,
  cost,
  consumption,
  efficiency,
  co2Efficiency,
  co2DieselEfficiency
) {
  const result = (mileage / 100) * consumption * cost;
  const economy = (result * efficiency) / 100;
  const co2 = (co2DieselEfficiency * consumption * mileage) / 100;
  const co2Economy = (co2 * co2Efficiency) / 100;
  const tempStorage = [result, economy, co2, co2Economy];

  if (
    typeof mileage === "number" &&
    typeof consumption === "number" &&
    typeof cost === "number"
  ) {
    return tempStorage;
  }
}

console.log(euCalc(100000, 1.88, 30, 10, 15, 2));

function naCalc(mileage, cost, consumption, efficiency) {
  const result = (mileage / consumption) * cost;
  const economy = (result * efficiency) / 100;

  return economy;
}

console.log(naCalc(50000, 6.27, 5.48, 0.1));

console.log((50000 * 6.27) / 5.48);
