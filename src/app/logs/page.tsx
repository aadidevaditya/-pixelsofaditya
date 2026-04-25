import Container from "../../components/Container";

export default function Logs() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold mb-6">Logs</h1>

      <div className="space-y-6 text-gray-400">

        <div>
          <p className="text-white">Week 0 — Foundation</p>
          <p>Weight: 63kg</p>
          <p>Gym: inconsistent timing</p>
          <p>Diet: not meeting calorie targets</p>
          <p>Work: stable, no active switch prep yet</p>
          <p className="mt-2">Observation: lack of structure is the main bottleneck.</p>
        </div>

      </div>
    </Container>
  );
}