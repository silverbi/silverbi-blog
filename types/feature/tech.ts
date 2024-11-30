export type TechPostTypes = {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  subtitle?: string;
  tags: string[];
  shortDescription: string;
  thumbnail: string;
  commentsCount: number;
  likesCount: number;
  minRead: number;
  isPublished: boolean;
  key: string;
};
