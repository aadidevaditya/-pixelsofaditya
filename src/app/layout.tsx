import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <nav className="px-6 py-4 border-b border-gray-800">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            
            <div className="text-white font-medium">
              Pixels of Aditya
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/work" className="hover:text-white">Work</Link>
              <Link href="/life" className="hover:text-white">Life</Link>
              <Link href="/logs" className="hover:text-white">Logs</Link>
            </div>

          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}