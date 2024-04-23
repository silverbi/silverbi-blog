export interface ProjectTypes {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  status: string;
  role: string;
  subtitle: string;
  tags: Array<string>;
  thumbnail: string;
}

export interface ProjectDetailTypes {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  status: string;
  role: string;
  short_description: string;
  tags: Array<string>;
  thumbnail: string;
  description: {
    intro: string;
    feature: string;
    tech_stack: string;
    result: string;
    lesson_leaned: string;
  };
  images: Array<string>;
}
