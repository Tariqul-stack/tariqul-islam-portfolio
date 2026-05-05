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
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[color:rgba(45,212,191,0.3)] selection:text-[#2dd4bf] transition-colors duration-300">
        <ClientProviders>
          <Loader />
          <CursorGlow />
          <Navbar />
          <PageWrapper>
            {children}
          </PageWrapper>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
