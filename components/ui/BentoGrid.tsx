"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { GlobeDemo } from "@/components/ui/GlobeDemo";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitSquare, FaGithub, FaFigma  } from "react-icons/fa";
import { BsFiletypeScss, BsFiletypeSql } from "react-icons/bs";
import { IoCopyOutline, IoLogoJavascript, IoDocument, IoLogoNodejs } from "react-icons/io5";
import { SiStimulus, SiNextdotjs, SiSqlite, SiHotwire, SiTailwindcss, SiTypescript, SiHeroku, SiRubyonrails } from "react-icons/si";
import { DiPostgresql, DiRuby } from "react-icons/di";
import { TbBrandFramerMotion } from "react-icons/tb";
import MagicButton from "./MagicButton";
import { Cover } from "@/components/ui/Cover";
import Image from "next/image";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  icon,
  image,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image?: string;
  children?: React.ReactNode;
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    console.log("copying email");
    navigator.clipboard.writeText("distadiomichele93@gmail.com");
    setCopied(true);
  };

  const [open, setOpen] = useState(false);

  const handleDownload = () => {
    console.log("open resume");
    window.open("/CV_MDS.pdf", "_blank");
    setOpen(true);
  };

  return (
    <div
  className={cn(
    `row-span-1 overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-b/[0.2] bg-white border justify-between flex flex-col ${id === 1 ? 'space-y-0' : 'space-y-4'}`,
    className
  )}
  >
      { id === 1 && (
        <div className="w-full">
          {image && (
            <Image src={image} alt={title as string} className="object-center rounded-full" width={500} height={500} />
          )}
        </div>
      )}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className={`font-sans font-bold text-color ${id === 1 ? 'mb-0 mt-0' : 'mb-2 mt-2'}`}>
          {title}
        </div>
        <div className="font-sans font-normal text-color text-xs text-color">
          {description}
        </div>
        {id === 2 && (
          <div>
            <GlobeDemo />
          </div>
        )}
        {id === 3 && (
          <div className="flex justify-center items-center mt-14">
            <h1>
              <Cover>Your Ideas, My Keyboard.</Cover>
            </h1>
          </div>
        )}
        {id === 4 && (
          <div className="flex justify-center items-center mt-5">
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-5 md:gap-y-3 lg:grid-cols-5 lg:gap-y-3 xl:grid-cols-6 xl:gap-y-7 gap-10">
              <div className="flex flex-col transform justify-center text-center items-center hover:text-orange-100 hover:translate-y-1">
                <FaHtml5 className="text-6xl" />
                <p className="text-sm">Html</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <FaCss3Alt  className="text-6xl"  />
                <p className="text-sm text-center">Css</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <BsFiletypeScss className="text-6xl" />
                <p className="text-sm text-center">Scss</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform text-6xl hover:text-orange-100 hover:translate-y-1">
                <SiTailwindcss className="text-6xl" />
                <p className="text-sm text-center">Tailwind</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <IoLogoJavascript className="text-6xl" />
                <p className="text-sm text-center">Javascript</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <SiHotwire className="text-6xl" />
                <p className="text-sm text-center">Hotwire</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <FaReact className="text-6xl" />
                <p className="text-sm text-center">React</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <SiStimulus className="text-6xl" />
                <p className="text-sm text-center">Stimulus</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <SiTypescript className="text-6xl" />
                <p className="text-sm text-center">Typescript</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <FaBootstrap className="text-6xl" />
                <p className="text-sm text-center">Bootstrap</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <SiNextdotjs className="text-6xl" />
                <p className="text-sm text-center">Next.js</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <BsFiletypeSql className="text-6xl" />
                <p className="text-sm text-center">Sql</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <DiPostgresql className="text-6xl" />
                <p className="text-sm text-center">Postgresql</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <SiSqlite className="text-6xl" />
                <p className="text-sm text-center">Sqlite</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <FaGitSquare className="text-6xl" />
                <p className="text-sm text-center">Git</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <FaGithub className="text-6xl" />
                <p className="text-sm text-center">Github</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <DiRuby className="text-6xl" />
                <p className="text-sm text-center">Ruby</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <SiRubyonrails className="text-6xl" />
                <p className="text-sm text-center">Rails</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <FaFigma className="text-6xl" />
                <p className="text-sm text-center">Figma</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <SiHeroku className="text-6xl" />
                <p className="text-sm text-center">Heroku</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <IoLogoNodejs className="text-6xl" />
                <p className="text-sm text-center">Node.js</p>
              </div>
              <div className="flex flex-col justify-center text-center items-center transform hover:text-orange-100 hover:translate-y-1">
                <TbBrandFramerMotion className="text-6xl" />
                <p className="text-sm text-center">Framer Motion</p>
              </div>
            </div>
          </div>
        )}
        {id === 5 && (
          <div className="flex flex-cols justify-center mt-2 md:mt-0">
            <MagicButton
              title={open ? "Clicked" : "My CV"}
              icon={<IoDocument />}
              position="left"
              handleClick={handleDownload}
            />
          </div>
        )}

        {id === 6 && (
          <div className="flex flex-cols justify-center mt-8">
            <MagicButton
             title={copied ? "Copied!" : "Copy my Email" }
             icon={<IoCopyOutline />}
             position="left"
             handleClick={handleCopy}
             />
          </div>
        )}
      </div>
    </div>
  );
};
