/** @jsxImportSource solid-js */

import { For, Show } from "solid-js";
import { HiSolidLink } from "solid-icons/hi";

import "./ProjectsGrid.css";

const ProjectsGrid = (props: {
  projects: readonly {
    title: string;
    // date: string;
    compiled: any;
    website: string;
    stack: string[];
  }[];
}) => {
  return (
    <div class="project-grid">
      <For each={props.projects}>
        {(project, index) => (
          <div class="project-grid-item">
            <div class="project-grid-heading">
              <h1 class="project-grid-heading-title">{project.title}</h1>
              {project.website && (
                <a
                  class="project-grid-heading-link"
                  target="_blank"
                  href={project.website}
                >
                  <HiSolidLink />
                </a>
              )}
            </div>

            <div class="project-grid-description">
              <div innerHTML={project.compiled} />
            </div>

            <div class="project-grid-tags">
              <For each={project.stack}>
                {(stackItem, index) => (
                  <div class="project-grid-tags-item">{stackItem}</div>
                )}
              </For>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export default ProjectsGrid;
