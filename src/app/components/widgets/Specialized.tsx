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
    <section className="mt-20 mb-20 laptop:mt-40 laptop:mb-40">
      <Wrapper>
        <div>
          {/* Header */}
          <div>
            <h2 className="3xl:mt-5 3xl:text-7xl laptop:text-5xl tab:text-left tab:text-3xl text-4xl mobile:text-centre mobile:text-3xl mobile:mt-3 font-bold sm:text-4xl mt-3 whitespace-pre">
              Specialized Tracks:
            </h2>
            <p className="3xl:mt-6 3xl:text-4xl 3xl:max-w-screen-lg mobile:mt-3 mobile:text-sm mobile:max-w-screen-sm laptop:max-w-screen-md laptop:mt-6 laptop:text-2xl tab:mt-4 text-slate-600">
              After completing the first three quarters the participants will
              select one or more specializations consisting of two courses each:
            </p>
          </div>

          <div className="flex 3xl:flex-row laptop:mt-10 flex-col-reverse gap-x-6 gap-y-1">
            {/* Content Left */}
            <div className="sticky top-28 basis-8/12 self-start shadow-xl rounded-xl border border-slate-200 laptop:py-8 laptop:px-8 py-4 px-6">
              <h4 className="text-primary 3xl:mt-1 3xl:text-[27px] mobile:text-[13px] laptop:text-xl text-lg font-medium">
                Specialized Program
              </h4>
              <h1 className="3xl:mt-3 3xl:text-[38px] laptop:text-3xl laptop:mt-1 mobile:text-xl font-bold">
                {selectedItemsData?.header}
              </h1>
              <p className="3xl:mt-6 3xl:text-3xl laptop:text-2xl mobile:text-[13px] mobile:mt-1 text-slate-600 laptop:mt-5">
                {selectedItemsData?.description}
              </p>
              <button className="text-teal-700 3xl:mt-6 3xl:text-3xl laptop:text-2xl tab:text-sm mobile:text-[14px] mobile:mt-2 font-medium laptop:mt-6 underline flex">
                Learn More {" > "}
              </button>
              <div className="flex 3xl:mt-0 3xl:-mb-12 mobile:flex-col mobile:gap-2 mobile:mt-2 tab:flex-col tab:gap-2 tab:mt-4 laptop:flex-row laptop:gap-4 laptop:mt-3">
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
            <div className="px-4 py-6 3xl:space-y-8 laptop:space-y-4 mobile:-space-y-4 tab:-space-y-2 tab:basis-7/12 laptop:basis-4/12 3xl:basis-4/12">
              {programData.map((item, i) => (
                <div
                  onClick={() => setSelectedItem(item.slug)}
                  key={item.slug}
                  className="item-center flex gap-x-0 tab:gap-x-1 laptop:gap-x-2 laptop cursor-pointer"
                >
                  <div className="flex flex-shrink-0 3xl:h-32 3xl:w-44 h-24 w-32">
                    <Image
                      src={item.image}
                      alt={item.header}
                      className={
                        "3xl:h-32 3xl:w-48 tab:h-16 mobile:h-14 laptop:h-24 object-cover shadow-lg drop-shadow-xl rounded-md"
                      }
                    />
                  </div>
                  <div>
                    <h4 className="text-primary 3xl:text-3xl laptop:text-xl tab:text-md mobile:text-sm font-semibold">
                      {item.mainline}
                    </h4>
                    <h3 className="text-slate-600 3xl:text-2xl laptop:text-lg tab:text-sm mobile:text-[13px]">
                      {item.header}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Specialized;
