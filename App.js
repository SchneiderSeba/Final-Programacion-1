// 
import { callsPending } from './calls.js';
import Agent from './Agents.js';

const agents = [
    new Agent("Sebastian"),
    new Agent("Nahuel"),
    new Agent("Flaco")
];

const Sebastian = agents[0];
const Nahuel = agents[1];
const Flaco = agents[2];

async function main() {
    if (callsPending.length > 1) {

        while (callsPending.length > 0) {

            await Sebastian.handleCall(callsPending);

            console.log('─'.repeat(50));

            if (callsPending.length > 0) {
                await Nahuel.handleCall(callsPending);
                console.log('─'.repeat(50));
            }
            if (callsPending.length > 0) {
                await Flaco.handleCall(callsPending);
                console.log('─'.repeat(50));
            }
        }

    } else if (callsPending.length == 1) {

        await Sebastian.handleCall(callsPending);
        console.log('─'.repeat(50));

    } else {
        console.log("No pending calls to handle.");
    }

    console.log("All calls have been handled.");
    
    console.log("Sebastian's handled calls:", Sebastian.callsDone);
    console.log("Sebastian's handled calls count:", Sebastian.callsHandled);

    console.log("Nahuel's handled calls:", Nahuel.callsDone);
    console.log("Nahuel's handled calls count:", Nahuel.callsHandled);

    console.log("Flaco's handled calls:", Flaco.callsDone);
    console.log("Flaco's handled calls count:", Flaco.callsHandled);
    console.log("Total calls handled:", Sebastian.callsHandled + Nahuel.callsHandled + Flaco.callsHandled);
}

main().catch(console.error);