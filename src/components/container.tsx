export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </main>
  );
}