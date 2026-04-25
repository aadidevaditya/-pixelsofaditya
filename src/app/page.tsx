import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      
      <h1 className="text-4xl font-semibold tracking-tight mb-4">
        Pixels of Aditya
      </h1>

      <p className="text-lg text-gray-400 mb-10">
        Engineer building systems for both work and life — documenting the process.
      </p>

      {/* Current Focus */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-3">Current Focus</h2>
        <ul className="text-gray-400 space-y-2">
          <li>• Backend Engineering → Preparing for next role</li>
          <li>• Physique → 63kg → 70kg (lean muscle gain)</li>
          <li>• Life → Swimming (freestyle), Badminton (self-training)</li>
        </ul>
      </div>

      {/* Now */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-3">Now</h2>
        <p className="text-gray-400">
          Focusing on building consistency across daily systems — gym, nutrition, and structured work. 
          No new distractions for the next 60 days.
        </p>
      </div>

      {/* Logs */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-3">Logs</h2>
        <ul className="text-gray-400 space-y-2">
          <li>Week 0 — Started documenting. Current weight 63kg. Gym inconsistent. Diet not meeting calorie targets.</li>
          <li>Observation — Lack of structure is the main bottleneck, not effort.</li>
        </ul>
      </div>

      {/* Connect */}
      <div>
        <h2 className="text-xl font-medium mb-3">Connect</h2>
        <div className="flex gap-4 text-gray-400">
          <a href="https://instagram.com/pixelsofaditya" target="_blank" className="hover:text-white">
            Instagram
          </a>
          <a href="https://youtube.com/@pixelsofaditya" target="_blank" className="hover:text-white">
            YouTube
          </a>
        </div>
      </div>

    </Container>
  );
}