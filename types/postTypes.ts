export interface PostTypes {
  id: number;
  title: string;
  date: string;
  minRead: number;
  like: number;
  short_description: string;
  tags: Array<string>;
  thumbnail: string;
}

export interface PostDetailTypes {
  id: number;
  title: string;
  subtitle: string;
  short_description: string;
  body: string;
  tags: Array<string>;
  date: string;
  minRead: number;
  like: number;
  thumbnail: string;
  comments: any;
  series: any;
  linked_posts: any;
}

export interface RetrospectDetailTypes {
  id: number;
  title: string;
  subtitle: string;
  short_description: string;
  body: string;
  tags: Array<string>;
  date: string;
  minRead: number;
  like: number;
  thumbnail: string;
  comments: any;
  linked_posts: any;
}

export interface RetrospectTypes {
  id: number;
  title: string;
  date: string;
  short_description: string;
  thumbnail: string;
}
