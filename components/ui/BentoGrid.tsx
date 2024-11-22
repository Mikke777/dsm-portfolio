"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { GlobeDemo } from "@/components/ui/GlobeDemo";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitSquare, FaGithub, FaFigma  } from "react-icons/fa";
import { BsFiletypeScss, BsFiletypeSql } from "react-icons/bs";
import { IoCopyOutline, IoLogoJavascript, IoDocument, IoLogoNodejs } from "react-icons/io5";
import { SiStimulus, SiNextdotjs, SiSqlite, SiHotwire, SiTailwindcss, SiTypescript, SiHeroku, SiRubyonrails } from "react-icons/si";
import { DiPostgresql, DiRuby } from "react-icons/di";
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
        "row-span-1 overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
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
        <div className="font-sans font-bold text-color text-color mb-2 mt-2">
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
              <Cover>Accelerated Results Through Focused Communication.</Cover>
            </h1>
          </div>
        )}
        {id === 4 && (
          <div className="flex justify-center items-center mt-5">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-10">
              <div className="text-6xl">
                <FaHtml5 />
              </div>
              <div className="text-6xl">
                <FaCss3Alt />
              </div>
              <div className="text-6xl">
                <BsFiletypeScss />
              </div>
              <div className="text-6xl">
                <SiTailwindcss />
              </div>
              <div className="text-6xl">
                <IoLogoJavascript />
              </div>
              <div className="text-6xl">
                <SiHotwire />
              </div>
              <div className="text-6xl">
                <FaReact />
              </div>
              <div className="text-6xl">
                <SiStimulus />
              </div>
              <div className="text-6xl">
                <SiTypescript />
              </div>
              <div className="text-6xl">
                <FaBootstrap />
              </div>
              <div className="text-6xl">
                <SiNextdotjs />
              </div>
              <div className="text-6xl">
                <BsFiletypeSql />
              </div>
              <div className="text-6xl">
                <DiPostgresql />
              </div>
              <div className="text-6xl">
                <SiSqlite />
              </div>
              <div className="text-6xl">
                <FaGitSquare />
              </div>
              <div className="text-6xl">
                <FaGithub />
              </div>
              <div className="text-6xl">
                <SiNextdotjs />
              </div>
              <div className="text-6xl">
                <DiRuby />
              </div>
              <div className="text-6xl">
                <SiRubyonrails />
              </div>
              <div className="text-6xl">
                <FaFigma />
              </div>
              <div className="text-6xl">
                <SiHeroku />
              </div>
              <div className="text-6xl">
                <IoLogoNodejs />
              </div>
            </div>
          </div>
        )}
        {id === 5 && (
          <div className="mt-8">
            <MagicButton
              title={open ? "Clicked" : "Click here"}
              icon={<IoDocument />}
              position="left"
              handleClick={handleDownload}
            />
          </div>
        )}

        {id === 6 && (
          <div className="mt-8">
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
