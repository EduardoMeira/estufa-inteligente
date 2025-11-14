class FakeWebSocket {
  constructor(url) {
    // callbacks
    this.onmessage = null;
    this.interval = null;

    // começa a disparar dados falsos
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      const fakeData = this.generateFakeData();
      if (this.onmessage) {
        this.onmessage({ data: fakeData });
      }
    }, 2000); // a cada 2s
  }

  // gera mensagens fake no mesmo formato que seu back-end
  generateFakeData() {
    const sensors = ["dht", "soil", "ldr", "rele0", "rele1", "rele2", "rele3"];
    const sensor = sensors[Math.floor(Math.random() * sensors.length)];

    if (sensor === "dht") {
      const temp = (20 + Math.random() * 10).toFixed(1);
      const hum = (40 + Math.random() * 20).toFixed(1);
      return `${temp},${hum}:dht`;
    }
    if (sensor === "soil") {
      const soil = (Math.random() * 100).toFixed(0);
      return `${soil}:soil`;
    }
    if (sensor === "ldr") {
      const ldr = (Math.random() * 100).toFixed(0);
      return `${ldr}:ldr`;
    }
    if (sensor.startsWith("rele")) {
      const status = Math.random() > 0.5 ? "1" : "0";
      return `${status}:${sensor}`;
    }

    return "ping:esp";
  }

  // simula envio
  send(msg) {
    console.log("Mensagem enviada (fake):", msg);
  }

  // simula fechar
  close() {
    clearInterval(this.interval);
    console.log("Fake WebSocket fechado");
  }
}