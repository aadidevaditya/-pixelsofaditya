import Container from "@/components/Container";

export default function Life() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold mb-6">Life</h1>

      <p className="text-gray-400 mb-6">
        Building physical strength, discipline, and exploring high-agency life skills.
      </p>

      <div className="space-y-4 text-gray-400">
        <p>• Physique → 63kg → 70kg (lean muscle gain)</p>
        <p>• Gym → building consistency in training and recovery</p>
        <p>• Swimming → learning freestyle</p>
        <p>• Badminton → self-training and skill improvement</p>
      </div>

      <div className="mt-8 text-gray-400">
        <p>
          Exploring multiple disciplines, but focusing on building depth and consistency over time.
        </p>
      </div>
    </Container>
  );
}