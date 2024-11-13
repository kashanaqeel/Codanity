import React, { FC } from "react";
import { Feature } from "./Feature";
import { FeaturesProps } from "./Features.interface";

export const Features: FC<FeaturesProps> = ({ features }) => {
  return (
    <div className="bg-[#f4f5f7] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center lg:items-start gap-8 mt-14">
          <h2 className="text-4xl text-center lg:text-start">
            Why Choose Codanity?
          </h2>
          <h4 className="text-gray-400 w-full text-center lg:text-start lg:w-1/2">
            With extensive experience in Next.js, MERN stack, Django, and mobile development, Codanity is your go-to partner for robust, scalable, and modern applications.
          </h4>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features?.map((feature) => {
            return <Feature key={feature.id} feature={feature} />;
          })}
        </div>
      </div>
    </div>
  );
};