"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Recent years have seen an alarming surge in cancer cases across India, with the disease emerging as a major public health crisis. According to the Indian Council of Medical Research, new cancer cases in India are projected to increase from 1.39 million in 2020 to 1.57 million by 2025.
`;

const Hero = () => {
  return(
    <TextGenerateEffect words={words} />
  );
};

export default Hero;