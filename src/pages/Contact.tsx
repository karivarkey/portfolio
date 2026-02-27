import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import data from "./../../data.json";

const contacts = [
  {
    id: "github",
    url: data.card.contact.githubUrl,
    icon: FaGithub,
    label: "GitHub",
  },
  {
    id: "linkedin",
    url: data.card.contact.linkedInUrl,
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    id: "instagram",
    url: data.card.contact.instagramUrl,
    icon: FaInstagram,
    label: "Instagram",
  },
];

const Contact = () => {
  return (
    <section className="min-h-screen bg-white text-neutral-900 px-6 md:px-16 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          {data.contactPage.headline}
        </h1>

        <p className="mt-6 text-lg text-neutral-500 max-w-xl">
          {data.contactPage.subhead}
        </p>

        {/* Divider */}
        <div className="mt-16 border-t border-neutral-200" />

        {/* Contact List */}
        <div className="mt-12 space-y-10">
          {contacts.map(({ id, url, icon: Icon, label }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between text-xl"
            >
              <div className="flex items-center gap-6">
                <Icon className="text-2xl text-neutral-400 group-hover:text-black transition-colors duration-300" />
                <span className="font-medium group-hover:underline underline-offset-8">
                  {label}
                </span>
              </div>

              <span className="text-neutral-400 text-sm group-hover:text-black transition">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
