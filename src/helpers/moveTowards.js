export function moveTowards(person, destinationPosition, speed) {
    let distanceToTravelX = destinationPosition.x - person.position.x;
    let distanceToTravelY = destinationPosition.y - person.position.y;

    let distance = Math.sqrt(distanceToTravelX ** 2 + distanceToTravelY ** 2);
    if (distance <= speed) {
        // if close enough move to the destination
        person.position.x = destinationPosition.x;
        person.position.y = destinationPosition.y;
    }else{
        // move by speed in direction of destination
        let normalizedX = distanceToTravelX / distance;
        let normalizedY = distanceToTravelY / distance;

        person.position.x += normalizedX * speed;
        person.position.y += normalizedY * speed;

        // reacalculate distance after moving

        distanceToTravelX = destinationPosition.x - person.position.x;
        distanceToTravelY = destinationPosition.y - person.position.y;
        distance = Math.sqrt(distanceToTravelX ** 2 + distanceToTravelY ** 2);
    }
    return distance;
}