// Code your solution in this file!
function distanceFromHqInBlocks(pickUpBlock){
    return Math.abs(pickUpBlock-42, 10);
}

function distanceFromHqInFeet(pickUpBlock){
    return distanceFromHqInBlocks(pickUpBlock)*264
}

function distanceTravelledInFeet(pickUpBlock, dropOffBlock){
    return Math.abs(pickUpBlock-dropOffBlock)*264
}

function calculatesFarePrice(pickUpBlock, dropOffBlock){
    const tripDistanceInFeet = distanceTravelledInFeet(pickUpBlock, dropOffBlock)
    
    if (tripDistanceInFeet < 400){
        return 0
    } 
    else if (tripDistanceInFeet > 400 && tripDistanceInFeet < 2000){
        return (tripDistanceInFeet-400)*.02
    }
    else if (tripDistanceInFeet > 2000 && tripDistanceInFeet < 2500){
        return 25
    }
    else if (tripDistanceInFeet > 2500){
        return 'cannot travel that far'
    }
}