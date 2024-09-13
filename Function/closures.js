function closer(num) {
  let givingPoint = num;

  const add = (closer) => {
    return (givingPoint += closer);
  };

  const sub = (closer) => {
    return (givingPoint -= closer);
  };

  const total = (closer) => {
    return givingPoint;
  };

  return { add, sub, total };
}

const tab = closer(100);

console.log(tab.add(20));

console.log(tab.sub(20));


console.log(tab.total());