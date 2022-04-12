// Code your solution in this file!
//distanceFromHqInBlocks(): returns a distance in blocks:
function distanceFromHqInBlocks(urefu){
    if (urefu > 42){
        return urefu-42;
    }
    else if (urefu < 42){
        return 42-urefu;
    }
};
// distanceFromHqInBlocks(): returns a distance in blocks:
function distanceFromHqInFeet(urefu) {
    return (distanceFromHqInBlocks(urefu)*264) 
};
// distanceFromHqInBlocks(): calculates distances travelled in street:
function distanceFromHqInFeet(start, destination){
      if (destination > start) {
        return ((destination - start) * 264);
      } else if (destination < start) {
        return ((start - destination) * 264);
      }
};     
// calculatesFarePrice(start, destination)
function calculatesFarePrice(start, destination) {
  let urefu = distanceTravelledInFeet(start, destination);
  //gives customers a free sample:
  if (urefu <= 400) {
    return 0;
  }
  // calculatesFarePrice(start, destination)
  // charges 2 cents per foot when total feet travelled is between 400 and 2000
  // (remember the first 400 feet are free!):
  if (urefu > 400 && urefu <= 2000) {
    return 0.02 * (distance - 400);
  }
  // calculatesFarePrice(start, destination);
  // charges 25 dollars for a distance over 2000 feet:
  if (urefu > 2000 && urefu <= 2500) {
    return 25;
  }
  //   calculatesFarePrice(start, destination);
  //   does not allow rides over 2500 feet:
  if (urefu > 2500) {
    return "cannot travel that far";
  }
};
