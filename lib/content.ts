import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");
const caseStudiesDirectory = path.join(process.cwd(), "content/case-studies");

export interface ContentPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  category?: string;
  author?: string;
  authorRole?: string;
  authorImage?: string;
  readTime?: string;
  client?: string;
  results?: string[];
  [key: string]: any;
}

function getItemsFromDirectory(directory: string): ContentPost[] {
  if (!fs.existsSync(directory)) {
    return [];
  }
  const fileNames = fs.readdirSync(directory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        ...data,
      } as ContentPost;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllBlogPosts(): ContentPost[] {
  return getItemsFromDirectory(blogDirectory);
}

export function getBlogPostBySlug(slug: string): ContentPost | null {
  try {
    const fullPathMdx = path.join(blogDirectory, `${slug}.mdx`);
    const fullPathMd = path.join(blogDirectory, `${slug}.md`);
    const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;
    
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title || "",
      date: data.date || "",
      description: data.description || "",
      ...data,
    } as ContentPost;
  } catch {
    return null;
  }
}

export function getAllCaseStudies(): ContentPost[] {
  return getItemsFromDirectory(caseStudiesDirectory);
}

export function getCaseStudyBySlug(slug: string): ContentPost | null {
  try {
    const fullPathMdx = path.join(caseStudiesDirectory, `${slug}.mdx`);
    const fullPathMd = path.join(caseStudiesDirectory, `${slug}.md`);
    const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;

    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title || "",
      date: data.date || "",
      description: data.description || "",
      ...data,
    } as ContentPost;
  } catch {
    return null;
  }
}
