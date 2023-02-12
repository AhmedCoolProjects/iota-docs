import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import slide from "./slideData";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={clsx(styles.slide__container)}>
      <div
        className={clsx(styles.slide)}
        style={{
          backgroundColor: "transparent",
          backgroundImage: ` url(${slide.imagePath})`,
          backgroundSize: "45%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      >
        <div className={clsx(styles.slide__section)}>
          <h1 className={clsx(styles.slide__header)}>{slide.title()}</h1>
          <p className={clsx(styles.slide__description)}>
            {slide.description()}
          </p>
          <div className={clsx(styles.slide__buttons)}>
            {slide.outlinedButton && (
              <Link
                to={slide.outlinedButton.url}
                className={clsx(
                  styles.slide__button,
                  "button",
                  "button--outline",
                  "button--primary"
                )}
              >
                {slide.outlinedButton.buttonText()}
              </Link>
            )}
            {slide.solidButton && (
              <Link
                to={slide.solidButton.url}
                className={clsx(
                  styles.slide__button,
                  "button",
                  "button--primary"
                )}
              >
                {slide.solidButton.buttonText()}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
