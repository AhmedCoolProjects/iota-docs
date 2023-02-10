import { Instagram, LinkedIn, TikTok, Twitter, Youtube } from "../icons";

const map = [
  {
    name: "LinkedIn",
    Icon: LinkedIn,
    link: "https://github.com",
    color: "#111f3b",
  },
  {
    name: "Youtube",
    Icon: Youtube,
    link: "https://github.com",
    color: "#2C3850",
  },
  {
    name: "Twitter",
    Icon: Twitter,
    link: "https://github.com",
    color: "#4B576F",
  },
  {
    name: "Instagram",
    Icon: Instagram,
    link: "https://github.com",
    color: "#6A768E",
  },
  {
    name: "TikTok",
    Icon: TikTok,
    link: "https://github.com",
    color: "#7D89A1",
  },
];

export default function get_socials_data() {
  return map;
}
