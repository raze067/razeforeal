export interface Project {
  title: string;
  category: string;
  description: string;
  img: string;
  colSpan: string;
  heightClass: string;
  videos: string[];
  isLarge?: boolean;
}

export const PROJECTS: Project[] = [
  { 
    title: "Personal Brand", 
    category: "Influencer Editing", 
    description: "High-energy, fast-paced editing tailored for personal brands. Designed to maximize viewer retention and engagement across social platforms.",
    img: "https://picsum.photos/seed/cinema/1200/600", 
    videos: ["do78TF5cJl8", "RBQZLVMsCTA", "5lMX5jMYh_A", "Eojw7gUffu8", "rSV3Io3NJKg"], 
    colSpan: "md:col-span-12 lg:col-span-8", 
    heightClass: "h-[300px] md:h-[400px] lg:h-[460px]", 
    isLarge: true 
  },
  { 
    title: "Cinematic", 
    category: "Brand Identity", 
    description: "A comprehensive visual overhaul focused on cinematic storytelling, elevating the brand's identity through striking color grading and atmospheric sound design.",
    img: "https://picsum.photos/seed/abstract/800/1000", 
    videos: ["31yCm2ElTwQ", "7HcGyIMSc_U", "4lSLmkplX2w", "FKV3gDkg4VE"], 
    colSpan: "md:col-span-6 lg:col-span-4", 
    heightClass: "h-[300px] md:h-[400px] lg:h-[460px]" 
  },
  { 
    title: "Virality", 
    category: "Instagram Editing", 
    description: "Short-form content engineered for the algorithm. Utilizing rapid pacing, trending audio, and bold typography to drive viral growth.",
    img: "https://picsum.photos/seed/speed/800/1000", 
    videos: ["d1w44vVpBPc", "zvxposAXprg", "VGkcB0L0t-I", "ra_0t6kvsY8", "sf-9EW_T3bk"], 
    colSpan: "md:col-span-6 lg:col-span-4", 
    heightClass: "h-[300px] md:h-[400px] lg:h-[450px]" 
  },
  { 
    title: "Agency", 
    category: "Commercial", 
    description: "Sleek, professional commercial work designed for modern agencies. Balancing clear messaging with high-end visual aesthetics.",
    img: "https://picsum.photos/seed/neon/800/1000", 
    videos: ["hOrP39DEvfc", "6_k6loJJrNc", "bMMBe_RmCME", "jv5yVRMSgu0", "su5oQX3slnU"], 
    colSpan: "md:col-span-6 lg:col-span-4", 
    heightClass: "h-[300px] md:h-[400px] lg:h-[450px]" 
  },
  { 
    title: "Creative", 
    category: "Poster Design", 
    description: "Bold and experimental visual art. Combining striking typography with surreal imagery to create memorable key art and digital posters.",
    img: "https://picsum.photos/seed/dark/800/1000", 
    videos: ["UskDs1iT_Ro", "iMr7fRWRWLU"], 
    colSpan: "md:col-span-6 lg:col-span-4", 
    heightClass: "h-[300px] md:h-[400px] lg:h-[450px]" 
  },
];
