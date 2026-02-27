import data from "./../../data.json";

const Projects = () => {
  const { projects, companies, projectsSection } = data;

  return (
    <div className="min-h-screen bg-white text-neutral-900 px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto space-y-28">
        {/* EXPERIENCE */}
        <section>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
            {projectsSection.workHeading}
          </h2>

          <div className="space-y-16">
            {companies.map((company, index) => (
              <div key={index} className="grid md:grid-cols-[180px_1fr] gap-8">
                {/* Date Column */}
                <div className="text-sm text-neutral-400 uppercase tracking-wider">
                  {company.duration.from} — {company.duration.to}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-medium">{company.name}</h3>
                  <p className="text-neutral-500 mt-1">{company.role}</p>

                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-neutral-600">
                    {company.technologies.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>

                  {company.website && (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm text-black underline underline-offset-4"
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
            Selected Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {/* Image */}
                <div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden flex items-center justify-center p-8">
                  <img
                    src={`/Projects/${project.image}`}
                    alt={project.name}
                    className="max-h-full max-w-full object-contain transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Text */}
                <h3 className="text-xl font-medium group-hover:underline underline-offset-4">
                  {project.name}
                </h3>

                <p className="mt-3 text-neutral-600 leading-relaxed">
                  {project.description}
                </p>

                {project.date && (
                  <p className="mt-3 text-sm text-neutral-400">
                    {project.date.from} — {project.date.to}
                  </p>
                )}
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pt-12">
          <a
            href={projectsSection.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium underline underline-offset-8"
          >
            {projectsSection.githubCtaLabel}
          </a>
        </section>
      </div>
    </div>
  );
};

export default Projects;
