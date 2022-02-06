//Problem 1: ana to vori----------------------------------------------------------------

function anaToVori(ana) {

    //Error handling
    if (typeof ana !== 'number' || ana <= 0) {
        return 'Error, Give a Valid Number.';
    }


    //ana divided by vori
    let vori = ana / 16;

    return vori;
}
let voriResult = anaToVori(70);
console.log(voriResult);


//Problem 2: Panda cost--------------------------------------------------------------------

function pandaCost(singara, somosa, jilapi) {

    //Error handling
    if (typeof singara != 'number' || typeof somosa != 'number' || typeof jilapi != 'number' || singara <= 0 || somosa <= 0 || jilapi <= 0) {
        return 'Error, Give a Valid Number.';
    }

    //variable of 3 product
    let singaraPrice = 7;
    let somosaPrice = 10;
    let jilapiPrice = 15;


    //multiplication of variable and parameter's
    let singaraQuantity = singara * singaraPrice;
    let somosaQuantity = somosa * somosaPrice;
    let jilapiQuantity = jilapi * jilapiPrice;

    let totalPrice = singaraQuantity + somosaQuantity + jilapiQuantity;

    return totalPrice;

}

let pandaResult = pandaCost(1, 5, 1);
console.log(pandaResult);


//Problem 3: picnic Budget-----------------------------------------------------------------


function picnicBudget(members) {


    //Error handling
    if (typeof members != 'number' || members <= 0) {
        return 'Error, Give a Valid Number.';
    }


    let total;
    //conditon for 100 members
    if (members <= 100) {

        total = members * 5000;


    }
    //condition for 200 members
    else if (members <= 200) {

        let first100 = 100 * 5000;
        let secound100 = (members - 100) * 4000;
        total = first100 + secound100;

    }
    //condition for more then 200 members
    else {

        let first100 = 100 * 5000;
        let secound100 = 100 * 4000;
        let third100 = (members - 200) * 3000;
        total = first100 + secound100 + third100;
    }

    return total;
}

let budgetResult = picnicBudget(300);
console.log(budgetResult)



//Problem 4: odd Friend------------------------------------------------------------------

function oddFriend(myFriends) {

    //Error handling
    if (typeof myFriends == 'number') {
        return 'Error, Give a Valid string.';
    }

    let friend;
    for (const element of myFriends) {

        //condition for finding first odd friend name
        if (element.length % 2 != 0) {
            friend = element;
            break
        }
    }
    return friend;
}


let friendNameResult = oddFriend(['arif ahmed', 'sadikur rahman mahi', 'raju ahmed', 'salikur islam', 'saifur rahman']);
console.log(friendNameResult);