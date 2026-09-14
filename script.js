function area(width, height) {
    if (width <= 0 || height < 0){
        return 0
    }
  const result = width * height;
  return result;
}
const paintNeeded = area(0, 10) / 350;
console.log(paintNeeded);