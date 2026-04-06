export type Project = {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    gallery: string[];
    githubUrl?: string;
    liveDemoUrl?: string;
    specialFeatures?: SpecialFeatures[];
  };
export type SpecialFeatures = {
    title: string;
    description: string;
    images: string[];
}