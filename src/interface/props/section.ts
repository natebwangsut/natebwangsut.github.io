export interface DefaultFrontmatterProps {
  preTitle: any;
  title: any;
  caption: any;
  subCaption: any;
}

export interface DefaultSectionProps {
  frontmatter: DefaultFrontmatterProps;
  html: any;
}

export interface LandingProps {
  frontmatter: {
    preTitle: any;
    title: any;
    caption: any;
    subCaption: any;
    iam: [{ item: string; color: string }];
  };
  html: any;
}

export interface ExperienceProps {
  frontmatter: {
    title: any;
    role: any;
    company: any;
    start_date: String;
    end_date: String;
  };
  html: any;
}

export interface ProjectProps {
  frontmatter: {
    title: any;
    date: String;
    website: any;
    github: any;
    stack: any[];
  };
  html: any;
}
