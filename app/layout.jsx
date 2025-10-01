import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  metadataBase: new URL('https://ashraful-sifat.vercel.app'),
  title: {
    default: 'Ashraful Sifat - Backend Developer & Full Stack Engineer',
    template: '%s | Ashraful Sifat - Backend Developer'
  },
  description: 'Experienced Backend Developer specializing in Node.js, Express.js, MongoDB, PostgreSQL, React, and Next.js. Building scalable, high-performance web applications with focus on system design and modern technologies.',
  keywords: [
    'Backend Developer',
    'Full Stack Developer',
    'Node.js Developer', 
    'React Developer',
    'Next.js Developer',
    'MongoDB',
    'PostgreSQL',
    'Express.js',
    'JavaScript Developer',
    'Web Developer',
    'Ashraful Sifat',
    'Portfolio',
    'System Design',
    'Scalable Applications'
  ],
  authors: [{ name: 'Ashraful Sifat', url: 'https://ashraful-sifat.vercel.app' }],
  creator: 'Ashraful Sifat',
  publisher: 'Ashraful Sifat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashraful-sifat.vercel.app',
    title: 'Ashraful Sifat - Backend Developer & Full Stack Engineer',
    description: 'Experienced Backend Developer specializing in Node.js, Express.js, MongoDB, PostgreSQL, React, and Next.js. Building scalable, high-performance web applications.',
    siteName: 'Ashraful Sifat Portfolio',
    images: [
      {
        url: '/assets/Images/profile-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Ashraful Sifat - Backend Developer Profile Image',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashraful Sifat - Backend Developer & Full Stack Engineer',
    description: 'Experienced Backend Developer specializing in Node.js, Express.js, MongoDB, PostgreSQL, React, and Next.js.',
    images: ['/assets/Images/profile-img.jpg'],
    creator: '@ashraful_sifat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ashraful Sifat",
    "jobTitle": "Backend Developer",
    "description": "Experienced Backend Developer specializing in Node.js, Express.js, MongoDB, PostgreSQL, React, and Next.js",
    "url": "https://ashraful-sifat.vercel.app",
    "image": "https://ashraful-sifat.vercel.app/assets/Images/profile-img.jpg",
    "email": "ashrafulsifat26@gmail.com", 
    "telephone": "+8801303291451",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "sameAs": [
      "https://github.com/sifat2626",
      "https://linkedin.com/in/ashraful-sifat"
    ],
    "knowsAbout": [
      "Node.js",
      "Express.js", 
      "MongoDB",
      "PostgreSQL",
      "React",
      "Next.js",
      "JavaScript",
      "Backend Development",
      "Full Stack Development",
      "System Design"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Faridpur Engineering College"
    },
    "worksFor": {
      "@type": "Organization", 
      "name": "SM Technology"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition className="bg-red-500">{children}</PageTransition>
      </body>
    </html>
  );
}
