import './globals.css';

export const metadata = {
  title: 'Aditya Jaiswal — Full Stack Developer | Portfolio',
  description:
    'B.Tech CSE student at IIIT Agartala. Full-stack developer specializing in scalable web apps and zero-trust IoT security systems. Codeforces Pupil, CodeChef 3-Star.',
  keywords: 'Aditya Jaiswal, Full Stack Developer, IIIT Agartala, React, Node.js, IoT, portfolio',
  authors: [{ name: 'Aditya Jaiswal' }],
  openGraph: {
    title: 'Aditya Jaiswal — Full Stack Developer',
    description: 'Portfolio of Aditya Jaiswal — CSE student, full-stack dev, hackathon finalist.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Syne + Inter + Space Mono + DM Sans + Shrikhand (Aditi's display font) + Playfair Display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500;600;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Shrikhand&family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ cursor: 'none' }}>{children}</body>
    </html>
  );
}
