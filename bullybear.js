var bear = prompt("What do you do when a Bear is trying to take your pants? Do you BATTLE with the bear, REASON with the bear or GIVE the bear your pants?").toUpperCase();

switch(bear) {
    case 'BATTLE':
        var weapon=prompt("Wow, you're gonna fight! Do you even have a weapon equipped (yes or no)?").toUpperCase();
        var dex=prompt("Are you fast at least(yes or no)?").toUpperCase();
        if(weapon==='YES' || dex === 'YES') {
            console.log("It's all good, as long as you can be nimble warrior or wield a weapon you can still keep your pants!");
        } else {
            console.log("Looks like someone shamefully loses their pants this day. Sucks.")
        }
        break;

    case 'GIVE':
        var handover=prompt("You're just going to let the bear bully you?(yes or no?)").toUpperCase();
        var help=prompt("Are you going to help the bear with the pants removal?(yes or no?)").toUpperCase();
        if(handover==='YES' || help === 'YES') {
            console.log("I guess you lost your dignity too. You should've at least tried to battle for your pants!");
        } else {
            console.log("I'm glad there's still some resistance left in you!");
        }
        break;
    case 'REASON':
        var mediate=prompt("So you're going to try and kindly ask the bear not to take your pants.(yes or no?)").toUpperCase();
        var insult=prompt("Are you sure you want to insult the bear?(yes or no?)").toUpperCase();
        if (mediate === 'YES' && insult === 'YES') {
        console.log("Bear don't care! The bear takes your pants and then eats you.");
        } else {
            console.log("You and the bear stare awkwardly at each other, then the bear takes your pants and shoes away from you.");
        }
        break;


    default:
        console.log("You have to do something!");
}
