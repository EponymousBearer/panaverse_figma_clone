"use client";

import Wrapper from "../shared/Wrapper";
import Boxes from "../shared/Boxes";
import Image from "next/image";
import Web3Img from "../../assets/images/web3.png";
import AiImg2 from "../../assets/images/AiImg2.png";
import AiImg3 from "../../assets/images/AiImg3.png";
import AiImg4 from "../../assets/images/AiImg4.png";
import AiImg5 from "../../assets/images/AiImg5.png";
import AiImg6 from "../../assets/images/AiImg6.png";

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
    <section className="laptop:mt-24 mb-20">
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="laptop:mt-2 laptop:text-5xl tab:text-left tab:text-3xl tab:mt-2 text-4xl mobile:text-centre mobile:text-2xl mobile:mt-3 font-bold sm:text-4xl mt-3 whitespace-pre">
            Specialized Tracks:
          </h2>
          <p className="laptop:mt-10 tab:mt-4 text-lg mobile:mr-6 mobile:mt-4 mobile:text-sm text-slate-600 max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>

        <div className="laptop:mt-10 tab:mt-10 flex flex-col-reverse sm:flex-row gap-x-6 gap-y-8">
          {/* Content Left */}
          <div className="sticky top-28 basis-8/12 self-start shadow-xl rounded-xl border border-slate-200 py-8 px-8">
            <h4 className= "text-primary mobile:text-[12px] text-lg font-medium">
            Specialized Program
            </h4>
            <h1 className="laptop:text-3xl laptop:mt-3 mobile:text-lg font-bold">{selectedItemsData?.header}</h1>
            <p className="laptop:text-lg tab:text-sm mobile:text-[12px] mobile:mt-1 text-slate-600 laptop:mt-6">
              {selectedItemsData?.description}
            </p>
            <button className="text-teal-700 laptop:text-xl tab:text-sm mobile:text-[14px] mobile:mt-2 font-medium laptop:mt-6 underline flex">
              Learn More {" > "}
            </button>
            <div className="flex mobile:flex-col mobile:gap-2 mobile:mt-4 tab:flex-col tab:gap-2 tab:mt-4 laptop:flex-row laptop:gap-4 laptop:mt-6">
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
          <div className=" px-4 mobile:-space-y-6 tab:-space-y-2 laptop:space-y-4 py-6 tab:basis-7/12 laptop:basis-4/12">
            {programData.map((item, i) => (
              <div
                onClick={() => setSelectedItem(item.slug)}
                key={item.slug}
                className="item-center flex tab:gap-x-1 laptop:gap-x-2 laptop cursor-pointer">
                <div className="flex flex-shrink-0 h-24 w-32">
                  <Image
                    src={item.image}
                    alt={item.header}
                    className={"tab:h-16 mobile:h-14 laptop:h-24 object-cover shadow-lg drop-shadow-xl rounded-md"}
                  />
                </div>
                <div>
                  <h4 className="text-primary laptop:text-xl tab:text-sm mobile:text-[12px] font-semibold">
                    {item.mainline}
                  </h4>
                  <h3 className="laptop:text-lg tab:text-sm mobile:text-[10px]">{item.header}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Specialized;
