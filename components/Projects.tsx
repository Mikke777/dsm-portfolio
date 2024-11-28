"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/AppleCardsCarousel";
import { data as projectData } from "@/data/index";
import { Lens } from "./ui/Lens";

const DummyContent = ({ content }) => {
  return (
    <>
      {content.map((item, index) => (
        <div
          key={index}
          className="flex flex-cols items-center justify-center bg-[#F5F5F7] max-h-fit p-8 md:p-14 rounded-3xl mb-4"
        >
          <div className="mt-4 mb-4">
            <h1 className="text-center text-base md:text-2xl text-black-100 mb-4">
              {item.title}
            </h1>
            <Lens>
              <Image
              src={item.imgSrc}
              alt={item.imgAlt}
              height={600}
              width={600}
              sizes={item.sizes}
              className="mx-auto mb-4 rounded-3xl"
            />
            </Lens>
            <div>
              <p className="mb-4 text-justify text-black-100 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};


const contentMap = projectData.reduce((acc, item) => {
  acc[item.contentId] = <DummyContent content={item.content} />;
  return acc;
}, {});

export function Projects() {
  const cards = projectData.map((card, index) => (
    <Card
      key={card.src}
      card={{
        ...card,
        content: contentMap[card.contentId],
        sizes: card.sizes,
        priority: card.src === "/homep.png", // Add priority to the LCP image
      }}
      index={index}
    />
  ));

  return (
    <div id="Projects" className="max-w-4xl mx-auto h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-color font-sans">
        Some of my projects!
      </h2>
      <p className="max-w-7xl pl-4 mt-5 mx-auto text-base text-color font-sans">
        Here are some of the projects I&apos;ve worked on. Scroll to the right to explore them all, and click on any project for more details.
      </p>
      <Carousel items={cards} />
    </div>
  );
}
