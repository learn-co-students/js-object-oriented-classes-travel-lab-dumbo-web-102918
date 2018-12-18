class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }



  blocksTravelled(){
    function avenues(avenue){
      let eastWest = [
        '1st Avenue',
        '2nd Avenue',
        '3rd Avenue',
        'Lexington Avenue',
        'Park',
        'Madison Avenue',
        '5th Avenue'
      ];
      return eastWest.indexOf(avenue)
    }
    // console.log(this.beginningLocation.horizontal);
    // console.log(this.endingLocation);
    let travelledHorizontal = avenues(this.endingLocation.horizontal) - avenues(this.beginningLocation.horizontal)
    let travelledVertical = parseInt(this.endingLocation.vertical)- parseInt(this.beginningLocation.vertical)

    return Math.abs(travelledHorizontal) + Math.abs(travelledVertical);
  }

  estimatedTime(peak){
    if (peak){
      return this.blocksTravelled()/2
    }else{
      return this.blocksTravelled()/3
    }
  }

}
