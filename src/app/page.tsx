import Container from "../components/container";

export default function Home() {
  return (
    <Container>
      
      <h1 className="text-4xl font-semibold tracking-tight mb-4">
        Pixels of Aditya
      </h1>

      <p className="text-lg text-gray-400 mb-10">
        Engineer building systems for both work and life — documenting the process.
      </p>

      <div className="mb-10">
        <h2 className="text-xl font-medium mb-3">Current Focus</h2>
        <ul className="text-gray-400 space-y-2">
          <li>• Backend Engineering → Preparing for next role (≥60 LPA)</li>
          <li>• Physique → 63kg → 70kg (muscle gain phase)</li>
          <li>• Life → Swimming (freestyle), Badminton (self-training)</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-medium mb-3">Now</h2>
        <p className="text-gray-400">
          Building consistency across work, training, and daily systems.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-medium mb-3">Logs</h2>
        <ul className="text-gray-400 space-y-2">
          <li>Week 1 — Fixed gym timing, still inconsistent with diet</li>
          <li>Week 2 — Slight strength improvement, need better sleep discipline</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-medium mb-3">Connect</h2>
        <div className="flex gap-4 text-gray-400">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">YouTube</a>
        </div>
      </div>

    </Container>
  );
}