import { interviewCovers, mappings } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const techIconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons"

const normalizedTechName = (tech: string) => {
  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "")
  return mappings[key as keyof typeof mappings]
};

const checkIconExists = async(url: string) =>{
  try {
    const response = await fetch(url, {method: "HEAD"})
    return response.ok
  } catch (error) {
    return false
  }
}

export const getTechLogos = async (techArray: string[]) => {
  const logoUrl = techArray.map((tech) => {
    const normalized = normalizedTechName(tech);
    return {
      tech,
      url: `${techIconBaseUrl}/${normalized}/${normalized}-original.svg`
    }
  });

  const results = await Promise.all(
    logoUrl.map(async ({tech, url}) => ({
      tech,
      url: (await checkIconExists(url)) ? url : "tech.svg"
    }))
  )

  return results
};

export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
};
