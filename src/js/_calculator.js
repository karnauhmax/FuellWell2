function euCalc(
  mileage,
  consumption,
  cost,
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

console.log(euCalc(100000, 30, 1.88, 10, 15, 2));

function gbCalc(
  mileage,
  consumption,
  cost,
  efficiency,
  co2Efficiency,
  co2DieselEfficiency
) {
  const result = (mileage / consumption) * cost;
  const economy = (result * efficiency) / 100;
  const co2 = co2DieselEfficiency * (mileage / consumption);
  const co2Economy = (co2 * co2Efficiency) / 100;
  const tempStorage = [
    Math.floor(economy),
    Math.floor(result),
    Math.floor(co2),
    Math.floor(co2Economy),
  ];
  return tempStorage;
}

console.log(gbCalc(50000, 7.84, 8.78, 10, 15, 20.04));

function usCalc(
  mileage,
  consumption,
  cost,
  efficiency,
  co2Efficiency,
  co2DieselEfficiency
) {
  const result = (mileage / consumption) * cost;
  const economy = (result * efficiency) / 100;
  const co2 = co2DieselEfficiency * (mileage / consumption);
  const co2Economy = (co2 * co2Efficiency) / 100;
  const tempStorage = [
    Math.floor(economy),
    Math.floor(result),
    Math.floor(co2),
    Math.floor(co2Economy),
  ];
  return tempStorage;
}

console.log(usCalc(50000, 6.27, 5.48, 10, 15, 16.69));
