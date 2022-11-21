import React, { useState } from "react";

export default function ShowcaseCard(props) {
  return (
    <div className="showcase-card-wrapper">
      <div
        className="card--image-wrapper"
        onMouseLeave={(event) => props.zoomOut(event, props.id)}
      >
        <img
          src={props.image}
          onMouseMove={(event) => props.zoom(event, props.id)}
          style={{
            transform: props.styles.transform,
            transformOrigin: `${props.styles.locX}px ${props.styles.locY}px`,
          }}
        ></img>
      </div>
      <div className="card--links">
        <a className="card--url" href={props.url}>
          LINK TO PROJECT
        </a>
        <a className="card--github" href={props.github}>
          LINK TO GITHUB
        </a>
      </div>
      <div className="card--text-wrapper">
        <div className="card--title">{props.name}</div>
        <div className="card--stacks">
          <div className="card--front-stack">
            <strong>Frontend:</strong> {props.frontStack}
          </div>
          <div className="card--back-stack">
            <strong>Backend:</strong> {props.backStack}
          </div>
        </div>
      </div>
    </div>
  );
}
