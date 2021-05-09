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
    start_date: any;
    end_date: any;
    date: any;
  };
  html: any;
}
