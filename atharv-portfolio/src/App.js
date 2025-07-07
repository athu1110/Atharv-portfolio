import React from "react";

const App = () => {
  const profile = {
    name: "Atharv Yoge",
    title: "Digital Marketer | Creative Strategist",
    location: "Navi Mumbai, Maharashtra, India",
    email: "atharvyoge17@gmail.com",
    phone: "+91 72493 35844",
    linkedin: "linkedin.com/in/atharvyoge",
    about:
      "Marketing Executive with expertise in online branding, campaigns, and digital marketing strategies. Computer Science Engineering background with specialized skills in data analysis and visualization. Passionate about leveraging technology to solve real-world problems and drive customer engagement through creative, data-driven marketing solutions.",
  };

  const experience = [
    {
      role: "Marketing Executive",
      company: "all things people",
      duration: "Dec 2024 – May 2025",
      description:
        "Full-time role focusing on Go-To-Market Strategy for Product Market Fit, approaching C-Suite people using platforms like LinkedIn Sales Navigator and strategic marketing initiatives.",
    },
    {
      role: "Marketing Intern",
      company: "Performant India - Bangalore Pvt Ltd",
      duration: "Aug 2024 – Sep 2024",
      description:
        "Developed SOPs, created media content, and gained hands-on campaign design experience.",
    },
    {
      role: "Digital Marketing Intern",
      company: "TripoMonk Travels Pvt Ltd",
      duration: "Feb 2024 – Mar 2024",
      description:
        "Digital marketing communications and presentation development.",
    },
    {
      role: "Sales And Marketing Intern",
      company: "PHN Technology Pvt Ltd",
      duration: "Apr 2023 – Jun 2023",
      description:
        "Sales strategy and marketing presentations development.",
    },
    {
      role: "Marketing Intern",
      company: "Woobblr Technologies Pvt Ltd",
      duration: "Sep 2022 – Nov 2022",
      description:
        "Marketing strategy and presentation development.",
    },
  ];

  const education = {
    degree: "Bachelor of Engineering - Computer Science",
    university:
      "Vishwaniketan Institute of Management Entrepreneurship and Engineering Technology (iMEET)",
  };

  const services = [
    "Social Media Management",
    "Marketing Campaign Strategy",
    "Content Creation",
    "Market Research",
    "SEO/SEM Consulting",
    "Presentation Design",
  ];

  const certifications = [
    {
      name: "Applied Marketing Studies",
      issuer: "NEXT MBA",
      date: "Apr 2025",
      id: "AMS-54811-55429",
    },
    {
      name: "Digital Marketing Expert",
      issuer: "Indian Council for Technical Research and Development (ICTRD)",
      date: "Feb 2024",
      id: "DI/C/23001672",
    },
    {
      name: "Google Digital Unlocked",
      issuer: "Google",
    },
    {
      name: "Search Engine Optimization Crash Course",
      issuer: "SemRush SEO",
    },
    {
      name: "Data Visualization: Empowering Business with Effective Insights",
      issuer: "Forage",
    },
  ];

  const skills = [
    "Digital Marketing",
    "Brand Marketing",
    "Content Strategy",
    "Social Media",
    "SEO/SEM",
    "Data Analysis",
    "Campaign Strategy",
    "Media Management",
    "Market Research",
    "Presentations",
    "Report Writing",
    "AI Marketing",
  ];

  const achievements = [
    "Published LinkedIn article: 'Why Startups Should Adopt AI in Today's Marketing Landscape'",
    "Completed 'The State and Future of Digital Marketing' module",
    "Received Letter of Recommendation from Performant, TripoMonk",
    "Best Intern of the Batch in Woobblr Technologies Pvt Ltd",
    "Successfully transitioned from Computer Engineering to Marketing",
  ];

  return (
    <div className="scroll-smooth bg-gradient-to-b from-white to-indigo-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">{profile.name}</h1>
          <p className="text-sm text-gray-500">{profile.title}</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        <section>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">{profile.about}</p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">Experience</h2>
          <div className="space-y-6">
            {experience.map((job, idx) => (
              <div key={idx} className="border-l-4 border-indigo-600 pl-4">
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="text-indigo-600 font-medium">{job.company}</p>
                <p className="text-sm text-gray-500">{job.duration}</p>
                <p className="mt-2">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">Education</h2>
          <div className="border-l-4 border-indigo-600 pl-4">
            <h3 className="text-xl font-semibold">{education.degree}</h3>
            <p className="text-indigo-600 font-medium">{education.university}</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {services.map((service, idx) => (
              <li key={idx} className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span> {service}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span key={idx} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="border-l-4 border-indigo-600 pl-4">
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
                {cert.date && <p className="text-xs text-gray-500">{cert.date}</p>}
                {cert.id && <p className="text-xs text-gray-500">ID: {cert.id}</p>}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">Achievements</h2>
          <ul className="space-y-3">
            {achievements.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-green-500 mr-2">✔️</span> {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">Contact</h2>
          <p><strong>Location:</strong> {profile.location}</p>
          <p><strong>Email:</strong> <a href={`mailto:${profile.email}`} className="text-indigo-600">{profile.email}</a></p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>LinkedIn:</strong> <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600">{profile.linkedin}</a></p>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Atharv Yoge — Turning Ideas into Impact
        </div>
      </footer>
    </div>
  );
};

export default App;
