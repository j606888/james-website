import {
  SiRubyonrails,
  SiReact,
  SiFigma,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiOpenai,
  SiLine,
} from "react-icons/si";
import { motion } from "motion/react";

const data = [
  {
    icon: SiRubyonrails,
    name: "Ruby on Rails",
  },
  {
    icon: SiReact,
    name: "React",
  },
  {
    icon: SiFigma,
    name: "Figma",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
  },
  {
    icon: SiOpenai,
    name: "OpenAI",
  },
  {
    icon: SiLine,
    name: "Line",
  },
];

const Marquee = () => {
  return (
    <div className="relative w-full bg-black flex items-center py-3">
      <div className="relative max-w-[1024px] w-full mx-auto overflow-x-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />
        <motion.div
          className="flex gap-6 w-max min-w-max md:gap-15"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...data, ...data, ...data].map((item, index) => (
            <div
              className="flex items-center gap-2 text-[#A2A2A2] md:gap-4"
              key={index}
            >
              <item.icon className="w-5 h-5 md:w-10 md:h-10" />
              <span className="text-[18px] font-medium whitespace-nowrap md:text-[24px]">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
