import Container from "../../components/Container";

export default function Work() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold mb-6">Work</h1>

      <p className="text-gray-400 mb-6">
        Backend engineer working on financial systems, focused on building reliable and scalable data pipelines.
      </p>

      <div className="space-y-4 text-gray-400">
        <p>• Goldman Sachs — Controllers Division (Associate)</p>
        <p>• Working on fund oversight systems handling Trial Balance, Holdings, and Investor Allocation data</p>
        <p>• Focus areas: data integrity, control checks, backend reliability, large-scale data processing</p>
      </div>

      <div className="mt-8 text-gray-400 space-y-2">
        <p>Currently:</p>
        <p>• Deepening backend + system design understanding</p>
        <p>• Preparing for next role</p>
      </div>
    </Container>
  );
}