import { experiences, services } from "@/constants";
import { SearchParamsProps } from "@/types";
import SectionTitle from "../SectionTitle";

const About = ({ searchParams }: SearchParamsProps) => {
  return (
    <article
      className={`component${
        searchParams?.activeLink?.toLowerCase() === "about" ||
        searchParams?.activeLink === undefined
          ? " active-component"
          : ""
      }`}
    >
      <SectionTitle title="About" />

      <div className="descs text-grey space-y-5 text-sm sm:text-base leading-8 mb-8">
        <p>
          I’m a Front-End Developer passionate about bringing clients’ visions
          to life. Furthermore, I have managed many projects for a diverse
          client base.
        </p>

        <p>
          My job is to build your website to be functional, user-friendly, and
          attractive. Moreover, I add a personal touch to your product and make
          sure that it is eye-catching and easy to use. My aim is to bring
          across your message and identity in the most creative way
        </p>

        <p>
          Experienced in working with teams to produce impactful, leading-edge
          websites that engage customers and deliver business results.
          Well-versed in design standards and user preferences.
        </p>

        <p>
          Empowering your web identity, We develop websites that ignite your
          business.
        </p>
      </div>

      {/* Experiences */}
      <div className="experiences grid lg:grid-cols-4 md:grid-cols-3 min-[460px]:grid-cols-2 gap-4 text-grey">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="flex gap-x-4 border border-zinc-700 rounded-md p-5 bg-gradient-to-br from-zinc-800 via-zinc-800 via-75% to-gray-700"
          >
            {/* Icon */}
            <div>{<exp.icon className="text-light-gold text-4xl" />}</div>
            {/* Content */}
            <div className="flex flex-col gap-y-2">
              <h5 className="text-xl font-bold text-wheat">+{exp.num}</h5>
              <p className="font-bold text-sm w-full sm:w-20">{exp.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* What I'm Doing */}
      <div className="mt-8 space-y-4">
        <h3 className="text-2xl font-bold text-wheat">What I'm Doing</h3>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 text-grey">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex gap-x-4 border border-zinc-700 rounded-md p-5 bg-gradient-to-br from-zinc-800 via-zinc-800 via-75% to-gray-700"
            >
              {/* Icon */}
              <div>{<service.icon className="text-light-gold text-4xl" />}</div>
              {/* Content */}
              <div className="flex flex-col gap-y-2">
                <h5 className="text-xl font-bold text-wheat">
                  {service.title}
                </h5>
                <p className="text-sm leading-6">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default About;
