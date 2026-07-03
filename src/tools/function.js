export function categoryImg(category) {
  let cateImg = "";
  if (category === "food") {
    cateImg = "🍽️";
  } else if (category === "tour") {
    cateImg = "🏛️";
  } else if (category === "activity") {
    cateImg = "🎡";
  } else if (category === "shopping") {
    cateImg = "🛍️";
  } else if (category === "cafe") {
    cateImg = "☕";
  } else if (category === "hotel") {
    cateImg = "🏨";
  } else if (category === "transport") {
    cateImg = "🚆";
  }
  return cateImg;
}
