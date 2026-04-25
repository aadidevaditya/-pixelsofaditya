import Container from "../../components/container";

export default function Logs() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold mb-6">Logs</h1>

      <div className="space-y-6 text-gray-400">
        <div>
          <p className="text-white">Week 1</p>
          <p>Fixed gym timing, still inconsistent with diet.</p>
        </div>

        <div>
          <p className="text-white">Week 2</p>
          <p>Slight strength improvement, need better sleep discipline.</p>
        </div>
      </div>
    </Container>
  );
}