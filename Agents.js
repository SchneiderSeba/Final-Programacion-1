

class Agent {
  constructor(name) {
    this.name = name || "Agent";
    this.callsHandled = 0;
    this.callsDone = [];
  }
  async handleCall(callsPending) {
    this.callsHandled++;
    const call = callsPending.shift();
    console.log(`Handling call ${call.client} at number ${call.number} by ${this.name}`);
    console.log(`Pending calls: , 📞 ${callsPending.length} , calls left time ⏳ ${callsPending.length * 5} seconds`);
    // Crear una Promise que se resuelve después de 3 segundos
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

    await this.doneCalls(call);
  }

  async doneCalls(call) {
    this.callsDone.push(call);
    this.callsDone.push({ ...call, status: "done" });
    console.log(`Call handled by ${this.name}: ${call.client} call, Status: Done✅`);
  }
}

export default Agent;