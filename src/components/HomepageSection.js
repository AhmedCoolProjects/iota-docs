import React from "react";
import clsx from "clsx";
// import ReactDOMServer from "react-dom/server";

export default function HomepageSection(props) {
  const toKebabCase = (header) =>
    header &&
    header
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((parts) => parts.toLowerCase())
      .join("-");

  return (
    <div className={clsx("homepage__section", props.className)}>
      <div className="homepage__container">
        {props.header() && (
          <h2
            className="homepage__header"
            // id={ReactDOMServer.renderToStaticMarkup(props.header()).replace(
            //   /<[^>]+>/g,
            //   ""
            // )}
          >
            {props.header()}
          </h2>
        )}
        {props.description && (
          <p className="homepage__description">{props.description}</p>
        )}
        {props.children}
      </div>
    </div>
  );
}
