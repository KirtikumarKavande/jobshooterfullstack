const RangeCalculation = (end,start ) => {
  let AllValues = ["-",];

  for (let i = end; i >=start; i--) {
    AllValues.push(i);
  }
  return AllValues;
};

export default RangeCalculation;
