"use client";

//import { ArrowUpRight, Github, Mail, MessageSquare, Twitter } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "10-k-10-q-extraction",
    description: "Python- openpyxl, Pandas, Psycopg2, Selenium, Webdriver manager, PostgreSQL.",
    status: "maintained",
    url: "https://github.com/DrishtiiAggarwal/10-k-10-q-extraction"
  },
  {
    name: "Penguinium",
    description: "React, Cloudflare workers, zod, type inference, Typescript, Prisma, Postgres, jwt.",
    status: "maintained",
    url: "https://github.com/DrishtiiAggarwal/penguinium"
  },
  {
    name: "Noteify",
    description: "Tailwind CSS, ReactJS, MongoDB, ExpressJS, NodeJS, JWT.",
    status: "maintained",
    url: "https://notesappfrontend-1.onrender.com/"
  },
  {
    name: "CCUS Visualizer",
    description: "Nextjs,Nodejs,Expressjs,Postgress,Typescript,TailwindCSS",
    status: "maintained",
    url: "https://ccus-frontend1.onrender.com/"
  },
];

const updates = [
  {
    role: "Software Developer Intern",
    company: "The Lantern Tribe",
    date: "Aug 2023 - Jan 2024",
    description: "Developed an interactive magazine page and an engaging blog page enhancing user experience and readability.",
  },
  {
    role: "Contributor",
    company: "GirlScript Summer of Code",
    date: "May 2023 - Oct 2023",
    description: "Developed an interactive magazine page and an engaging blog page enhancing user experience and readability",
  },
  {
    role: "Frontend Intern",
    company: "GirlUp Aayat ",
    date: "Jan 2023 - Jan 2024",
    description: "Developed an interactive magazine page and an engaging blog page enhancing user experience and readability",
  },
  {
    role: "Fullstack Software Developer Internship",
    company: "IEEE GBPEC Student Branch",
    date: "May 2022 - May 2023",
    description: "Designed and developed the official IEEE website for G.B Pant Delhi Skill and Entrepreneurship University, serving as the primary online platform for the IEEE student chapter.",
  },
];

const socials = [
  { name: "Email", href: "mailto:drishtiaggarwals17@gmail.com" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/drishtiiaggarwal/" },
  { name: "Resume", href: "https://drive.google.com/file/d/1i8vN_mOo0TAPvHcFqa1obhnrt0odwSyO/view?usp=sharing" },
  { name: "LeetCode", href: "https://leetcode.com/u/Drishtii/" },
  { name: "CodeForces", href: "https://codeforces.com/profile/Drishtiiaggarwal" },
  { name: "Github", href: "https://github.com/DrishtiiAggarwal" },
];

export default function Home() {
  return (
    <main className="items-center gap-8 min-h-screen bg-black text-white p-8 md:p-16 lg:p-24">
      <div className="max-w-3xl mx-auto space-y-16">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-2xl font-bold">Drishti Aggarwal</h1>
          <div className="flex items-center space-x-2">
          {/* <div className="absolute flex size-4">
              <span className="absolute top-[4.5px] size-2 animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative top-[4.5px] size-2 rounded-full bg-green-500"></span>
            </div> */}
            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <span className="">available for work</span>
          </div>
        </header>

        {/* Bio */}
        <section className="space-y-4">
          <p className="text-lg">
            I&apos;m a{" "}
            <span className="font-serif italic">final-year B.Tech student</span> passionate about building 
            creative and modern web applications
          </p>
          <p className="text-gray-400">
          I'll be graduating in 2025.
          </p>
        </section>

        {/* Projects */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <Link
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-center justify-between py-4 border-b border-gray-800 hover:bg-gray-900/30 transition-colors rounded-lg px-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-4">
                      <h3 className="font-medium">{project.name}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-400">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{project.description}</p>
                  </div>
                  {/* <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Updates */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Updates</h2>
          <div className="space-y-4">
            {updates.map((update, index) => (
              <div
                key={index}
                className="group flex items-center justify-between py-4 border-b border-gray-800 hover:bg-gray-900/30 transition-colors rounded-lg px-4"
              >
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{update.role}</h3>
                    <span className="text-sm text-gray-400">{update.company}</span>
                  </div>
                  <p className="text-sm text-gray-400">{update.description}</p>
                  <span className="text-xs text-gray-500">{update.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-6">
          <p className="text-gray-400">
          let's connect and collaborate!
          </p>
          <div className="flex flex-wrap gap-4">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-sm hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}