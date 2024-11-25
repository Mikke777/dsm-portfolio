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
    description: "I’m a Junior Software Engineer with a passion for coding and problem-solving. I thrive on creating innovative solutions that simplify and enhance everyday life, aiming to make a meaningful impact through technology.",
    header: <Skeleton />,
    className: "md:col-span-1 md:row-span-1 bg-white-100",
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
    description: "Communication is the key to success.",
    header: <Skeleton />,
    className: "md:col-span-1 md:row-span-1 bg-white-100",
    icon: <IconAward className="h-4 w-4 text-color" />,
  },
  {
    id: 4,
    title: "My Tech Stack",
    description:
      "I'm eager to learn new technologies and improve my skills.",
    header: <Skeleton />,
    className: "md:col-span-2 md:row-span-2 bg-white-100",
    icon: <IconTableColumn className="h-4 w-4 text-color" />,
  },
  {
    id: 5,
    title: "CV",
    description: "Click the button to open in a new tab my resume.",
    header: <Skeleton />,
    className: "md:col-span-1 bg-white-100",
    icon: <IconSignature className="h-4 w-4 text-color" />,
  },
  {
    id: 6,
    title: "Let's work together",
    description:"Copy my email.",
    header: <Skeleton />,
    className: "md:col-span-1 bg-white-100",
    icon: <IconMail className="h-4 w-4 text-color" />,
  },
];
