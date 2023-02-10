import Link from "@docusaurus/Link";
import React from "react";

function Languages(props) {
  return (
    <>
      {Object.entries(props.languages).length > 0 && (
        <div className="languages">
          {Object.entries(props.languages).map(([language, to], key) => (
            <Link
              className="language button button--outline button--primary"
              to={to}
              key={key}
            >
              {language}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Languages;
