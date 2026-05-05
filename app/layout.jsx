import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import PageWrapper from './components/PageWrapper';
import ClientProviders from './components/ClientProviders';

/*
FAVICON SETUP INSTRUCTIONS:
1. Go to https://favicon.io/favicon-generator/
2. Text: "TI"
3. Background: #2dd4bf
4. Font color: #0a0f1e
5. Download and extract
export const metadata = {
  title: "Tariqul Islam | Junior Frontend Developer",
  description: "Junior Frontend Developer specializing in React and Next.js. Building clean, responsive web applications. Open to remote opportunities.",
  keywords: ["Frontend Developer", "React Developer", "Next.js Developer", "Junior Developer", "Remote Developer", "Tariqul Islam"],
  authors: [{ name: "Tariqul Islam" }],
  openGraph: {
    title: "Tariqul Islam | Frontend Developer",
    description: "Junior Frontend Developer — React & Next.js",
    type: "website",
  },
};

/*
FAVICON INSTRUCTIONS:
1. Go to https://favicon.io/favicon-generator/
2. Text: "TI", Background: #2dd4bf (teal), Font color: #0a0f1e (dark)
3. Download and place favicon.ico in /app/ folder
*/

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <body className="text-[var(--text-primary)] selection:bg-[color:rgba(45,212,191,0.3)] selection:text-[#2dd4bf] transition-colors duration-300">
        <ClientProviders>
          <Loader />
          <CursorGlow />
          
          <main className="relative min-h-screen overflow-hidden">
            {/* Fixed glow background - stays behind everything */}
            <div 
              aria-hidden="true" 
              className="fixed inset-0 -z-20"
              style={{ background: 'var(--global-bg)' }}
            />
            {/* Fixed dot grid - stays behind everything */}
            <div 
              aria-hidden="true"
              className="fixed inset-0 -z-10 opacity-[0.12]"
              style={{
                backgroundImage: 'radial-gradient(var(--dot-color) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
              }}
            />
            {/* Noise texture overlay */}
            <div 
              aria-hidden="true"
              className="fixed inset-0 -z-10 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              }}
            />

            <Navbar />
            <PageWrapper>
              {children}
            </PageWrapper>
            <Footer />
          </main>
        </ClientProviders>
      </body>
    </html>
  );
}
