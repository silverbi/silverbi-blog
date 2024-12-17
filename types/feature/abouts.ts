export type CareerDetailTypes = {
  title: string;
  subtitle: string;
  role: string[];
  startDate: string;
  endDate: string;
  company: string;
  description: CareerDescriptionTypes[];
};

export type CareerDescriptionTypes = {
  title: string;
  link: string | null;
};
