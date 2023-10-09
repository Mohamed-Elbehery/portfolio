import Link from "next/link";
import { contactInformation } from "@/constants";
import { Info } from "@/types";

const ContactInformation = () => {
  //TODO Display Email & Phone as Links and Location as a Normal Text
  const information = ({ title, alias, value }: Info) => {
    return (
      <>
        {title.toLowerCase() === "email" ? (
          <Link className="link" href={"mailto:dev.elbehery@gmail.com"}>
            {alias}
          </Link>
        ) : title.toLowerCase() === "phone" ? (
          <Link className="link" href={`tel:${value}`}>
            {value}
          </Link>
        ) : (
          <p className="text-sm w-[70px]">{value}</p>
        )}
      </>
    );
  };

  return (
    <div className="contact-info">
      {contactInformation.map(({ icon: Icon, title, value, alias }) => (
        <div className="info" key={title}>
          {/* Icon */}
          <span className="bg-gradient-to-b from-zinc-800 via-zinc-800 to-gray-700 rounded-full p-[6px]">
            <Icon className="text-light-gold" />
          </span>
          {/* Title & Info */}
          <div>
            {/* Title */}
            <h4 className="text-[#808080] text-sm">{title.toUpperCase()}</h4>
            {/* Info */}
            {information({ alias, value, title })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInformation;
