function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every(function(element, index) {
        return element === arr2[index];
    });
}

function getUsersNamesInAgeRange(users, gender) {
    return users
        .filter(user => user.gender === gender)
        .map(user => user.age)
        .reduce((sum, age, index, array) => {
            sum += age;
            if (index === array.length - 1) {
                return sum / array.length;
            } else {
                return sum;
            }
        }, 0);
}