import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";
import type { RemarkPlugin } from "@astrojs/markdown-remark";

export const remarkReadingTime: RemarkPlugin = () => {
  return function (tree, { data }: any) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}
