var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray
}

function johnLennonFacts(array) {
  var j = [];
  let l = 0;
  while (l < facts.length) {
    j.push(facts(l) + "!!!")
  }
  return array
}