console.log("🚀 Vendo Pulse Agent Started...");
console.log("🔎 Initializing peer monitoring module...");

const peers = [
  { id: "peer-01", status: "online", latency: 22 },
  { id: "peer-02", status: "online", latency: 31 },
  { id: "peer-03", status: "offline", latency: null },
  { id: "peer-04", status: "online", latency: 19 }
];

const activePeers = peers.filter(p => p.status === "online");

const avgLatency =
  activePeers.reduce((sum, peer) => sum + peer.latency, 0) /
  activePeers.length;

console.log(`✅ Active peers: ${activePeers.length}`);
console.log(`📶 Average latency: ${avgLatency.toFixed(2)} ms`);
console.log("📡 Network health: Stable");
console.log("✔ Monitoring cycle complete.");
