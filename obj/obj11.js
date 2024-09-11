let house = {
  type: "Apartment",
  bedroom: 3,
  bathroom: 2,
};

if ("garage" in house) {
  console.log("exits");
} else {
  console.log("No garage");
}
