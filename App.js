import { callsPending } from './calls.js';
import Agent from './Agents.js';

const agents = [
    new Agent("Sebastian"),
    new Agent("Nahuel"),
];

const Sebastian = agents[0];
const Nahuel = agents[1];

async function main() {
    if (callsPending.length > 1) {

        while (callsPending.length > 0) {

            await Sebastian.handleCall(callsPending);

            console.log('─'.repeat(50));

            if (callsPending.length > 0) {
                await Nahuel.handleCall(callsPending);
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
}

main().catch(console.error);