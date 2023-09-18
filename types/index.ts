export type Frontmatter = {
    slug?:string;
    title: string;
    date: string;
    status?: string;
    tags?: string[];
    description?: string;
    author?: string;
    bannerUrl?: string;
};