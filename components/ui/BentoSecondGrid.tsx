import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconAward,
  IconMail,
} from "@tabler/icons-react";



export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl grid-cols-1 mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          id={item.id}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          image={item.image}
        >
        </BentoGridItem>
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    id: 1,
    title: "About Me",
    description: "I’m a Junior Web Developer with a passion for coding and problem-solving. I thrive on creating innovative solutions that simplify and enhance everyday life, aiming to make a meaningful impact through technology.",
    header: <Skeleton />,
    className: "md:col-span-1 md:row-span-1 bg-white-100 text-justify",
    icon: <IconClipboardCopy className="h-4 w-4 text-color" />,
    image: "/photo-prof.jpg",
  },
  {
    id: 2,
    title: "",
    description: "" ,
    header: <Skeleton />,
    className: "md:col-span-2 md:row-span-2 bg-white-100",
    icon: <IconFileBroken className="hidden" />,
  },
  {
    id: 3,
    title: "Comunication Skills",
    description: "Through the years I develop different soft skills, but communication is for me vital, as it directly impacts project success. Share your ideas! Lets build something memorable!",
    header: <Skeleton />,
    className: "md:col-span-1 md:row-span-1 bg-white-100 text-justify",
    icon: <IconAward className="h-4 w-4 text-color" />,
  },
  {
    id: 4,
    title: "My Tech Stack",
    description:
      "Looking for something more? So am I! As a Junior Web Developer, I am committed to continuously expanding and deepening my tech stack. I quickly and independently master new technologies, and I approach every challenge with an open and positive mindset. Let me show you what I can bring to the table!",
    header: <Skeleton />,
    className: "md:col-span-2 md:row-span-2 bg-white-100 text-justify",
    icon: <IconTableColumn className="h-4 w-4 text-color" />,
  },
  {
    id: 5,
    title: "My Background",
    description: "With a master's in International Business and Development and experience in fintech, hardware sales, and guest service, I bring a unique perspective to user experience as a software developer, integrating insights from people, business, and research. Do you want to know more about my educational and professional background? Have a look at my CV",
    header: <Skeleton />,
    className: "md:col-span-1 bg-white-100",
    icon: <IconSignature className="h-4 w-4 text-color" />,
  },
  {
    id: 6,
    title: "Let's work together",
    description:"Click the button in order to copy my email address.",
    header: <Skeleton />,
    className: "md:col-span-1 bg-white-100",
    icon: <IconMail className="h-4 w-4 text-color" />,
  },
];
