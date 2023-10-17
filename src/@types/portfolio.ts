export interface ImageAlias {
  width: number;
  height: number;
  src: string;
}

export interface Case {
  id: string;
  title: string;
  description: string;
  link?: string;
  size: number;
  originWidth: number;
  originHeight: number;
  source: ImageAlias[];
}

export type Portfolio = Case[];
