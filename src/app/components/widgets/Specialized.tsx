"use client";

import Wrapper from "../shared/Wrapper";
import Boxes from "../shared/Boxes";
import Image from "next/image";
import Web3Img from "@/app/assets/images/web3.png";
import AiImg2 from "@/app/assets/images/AiImg2.png";
import AiImg3 from "@/app/assets/images/Aiimg3.png";
import AiImg4 from "@/app/assets/images/Aiimg4.png";
import AiImg5 from "@/app/assets/images/Aiimg5.png";
import AiImg6 from "@/app/assets/images/Aiimg6.png";

import { useState } from "react";

export const programData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    mainline: "Specialized Program",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: Web3Img,
    quarter: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    mainline: "Specialized Program",
    description: "description of Ai",
    image: AiImg2,
    quarter: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    mainline: "Specialized Program",
    description: "description of Ai",
    image: AiImg3,
    quarter: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    mainline: "Specialized Program",
    description: "description of Ai",
    image: AiImg4,
    quarter: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    mainline: "Specialized Program",
    description: "description of Ai",
    image: AiImg5,
    quarter: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    mainline: "Specialized Program",
    description: "description of Ai",
    image: AiImg6,
    quarter: [
      {
        header: "Quarter IV",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
];



const Specialized = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");
  const selectedItemsData = programData.find(
    (item) => item.slug === selectedItem
  );

  return (
    <section className="mt-40 mb-40">
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold sm:text-4xl mt-3 whitespace-pre">
            Specialized Tracks:
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>

        <div className="mt-10 flex gap-x-6 gap-y-8">
          {/* Content Left */}
          <div className="sticky top-28 basis-8/12 self-start shadow-xl rounded-xl border border-slate-200 py-8 px-8">
            <h4 className="text-primary text-lg font-medium">
            Specialized Program
            </h4>
            <h1 className="text-xl font-bold">{selectedItemsData?.header}</h1>
            <p className="text-lg text-slate-600 mt-2">
              {selectedItemsData?.description}
            </p>
            <button className="text-teal-700 text-xl  font-medium mt-4 underline flex">
              Learn More {" > "}
            </button>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {selectedItemsData?.quarter.map((item) => (
                <Boxes
                  key={item.number}
                  description={item.description}
                  header={item.header}
                  number={item.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>
          {/* Content Right */}
          <div className=" px-4 space-y-4 py-6 basis-4/12">
            {programData.map((item, i) => (
              <div
                onClick={() => setSelectedItem(item.slug)}
                key={item.slug}
                className="item-center flex gap-x-2 cursor-pointer">
                <div className="flex flex-shrink-0 h-24 w-32">
                  <Image
                    src={item.image}
                    alt={item.header}
                    className={"h-24 object-cover rounded-md"}
                  />
                </div>
                <div>
                  <h4 className="text-primary text-xl font-semibold">
                    {item.mainline}
                  </h4>
                  <h3>{item.header}</h3>
                </div>
              </div>
              

// Artificial Intelligence (AI) and Deep Learning Specialization

            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Specialized;
