import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const contactInformation = [
  {
    title: "Email",
    value: "dev.elbehery@gmail.com",
    icon: MailIcon,
    alias: "elsharqawi.dev",
  },
  {
    title: "Phone",
    value: "+201021141193",
    icon: PhoneIcon,
  },
  {
    title: "Location",
    value: "Cairo, Egypt",
    icon: LocationOnIcon,
  },
];

export const socialIcons = [
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/mohamed-elsharqawi/" },
  {
    icon: GitHubIcon,
    href: "https://github.com/Mohamed-Elbehery"
  },
  { icon: WhatsAppIcon, href: "https://api.whatsapp.com/send/?phone=201021141193" },
];