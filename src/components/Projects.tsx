/** @jsxImportSource solid-js */

import { For, Show } from "solid-js";

import "./Projects.css";

const Projects = (props: {
  projects: readonly {
    title: string;
    // date: string;
    compiled: any;
    stack: string[];
  }[];
}) => {
  return (
    <div class="project-grid">
      <For each={props.projects}>
        {(project, index) => (
          <div class="project-grid-item">
            <div class="project-grid-heading">
              <h4 class="project-grid-heading-title">{project.title}</h4>
              <a class="project-grid-heading-link" target="_blank">
                {/* TODO: Add Icon HERE */}
              </a>
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

export default Projects;
