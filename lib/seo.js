// SEO utility functions for generating metadata
export function generatePageMetadata(page) {
  const baseUrl = "https://ashraful-sifat.vercel.app"

  const pages = {
    home: {
      title: "Ashraful Sifat - Backend Developer & Full Stack Engineer",
      description:
        "Passionate Backend Developer skilled in Node.js, Express.js, MongoDB, PostgreSQL, React, and Next.js. Building scalable, high-performance web applications with focus on system design and modern technologies.",
      url: baseUrl,
    },
    services: {
      title: "Services - Web Development & Backend Solutions",
      description:
        "Explore my professional services including web design, frontend development, backend development, and game development. Specialized in Node.js, React, and modern web technologies.",
      url: `${baseUrl}/services`,
    },
    work: {
      title: "Portfolio - Full Stack Development Projects",
      description:
        "Explore my portfolio featuring full-stack web applications built with Node.js, Express.js, React, MongoDB, and modern web technologies. View live projects and source code.",
      url: `${baseUrl}/work`,
    },
    resume: {
      title: "Resume - Skills, Experience & Education",
      description:
        "View Ashraful Sifat's professional resume including backend development skills, work experience at SM Technology, education from Faridpur Engineering College, and technical certifications.",
      url: `${baseUrl}/resume`,
    },
    contact: {
      title: "Contact - Get In Touch",
      description:
        "Contact Ashraful Sifat for web development projects, backend solutions, and collaboration opportunities. Based in Dhaka, Bangladesh. Available for freelance and full-time opportunities.",
      url: `${baseUrl}/contact`,
    },
  }

  return pages[page] || pages.home
}

export function generateKeywords(pageKeywords = []) {
  const baseKeywords = [
    "Ashraful Sifat",
    "Backend Developer",
    "Full Stack Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Web Developer Bangladesh",
  ]

  return [...baseKeywords, ...pageKeywords]
}
