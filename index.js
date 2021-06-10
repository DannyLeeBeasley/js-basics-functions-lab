const distanceFromHqInBlocks = (pickupBlock) => {
    return Math.abs(pickupBlock - 42)
} 

const distanceFromHqInFeet = (pickupBlock) => {
    return Math.abs(pickupBlock - 42) * 264
}

const distanceTravelledInFeet = (pickupBlock, dropoffBlock) => {
    return Math.abs(pickupBlock - dropoffBlock) * 264
}

const calculatesFarePrice = (pickupBlock, dropoffBlock) => {
    const tripDistanceInFeet = distanceTravelledInFeet(pickupBlock, dropoffBlock)

    if (tripDistanceInFeet < 400){
        return 0
    }
    else if (tripDistanceInFeet > 400 && tripDistanceInFeet < 2000){
        return (tripDistanceInFeet - 400) * .02
    }
    else if (tripDistanceInFeet > 2000 && tripDistanceInFeet < 2500){
        return 25
    }
    else {return 'cannot travel that far'}
}