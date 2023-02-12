import NodesImg from "@site/static/img/homepage/section_nodes.png";
import NodesImgDark from "@site/static/img/homepage/section_nodes_dark.png";
import Link from "@docusaurus/Link";
import React from "react";
import ThemedImage from "@theme/ThemedImage";
import HomepageSection from "./HomepageSection";
import { Bee, Chronicle, Hornet } from "./icons";
import Translate from "@docusaurus/Translate";

function NodesExtensions() {
  return (
    <HomepageSection
      header={() => <Translate>Expertise & Erfahrung</Translate>}
      // description="Nodes are the core of an IOTA network. They run the node software, which gives them read and write access to the IOTA network. You can extend their functionality with additional extensions such as INX plugins or the Wasp software for Smart Contracts"
    >
      <div className="nodes__cards">
        <div className="nodes__card">
          <div className="nodes__icon">
            <Hornet />
          </div>
          <div className="nodes__section">
            <h3 className="nodes__header">
              <Translate>Digitale Vermögenswerte</Translate>
            </h3>
            <ul className="nodes__features">
              <li className="nodes__feature no__link">
                {/* <Link to="/hornet/welcome"> */}
                <Translate>
                  Neue wirtschaftliche Werte befinden sich auf verteilten
                  Systemen. Wie die Wertschöpfung funktioniert und wie Sie am
                  teilhaben haben können.
                </Translate>
                {/* </Link> */}
              </li>
              <li className="nodes__feature">
                <Link to="docs4/intro">
                  <Translate>Erfahren Sie mehr.</Translate>
                </Link>
              </li>
            </ul>
            <Link
              to="docs4/intro"
              className="nodes__button button button--outline button--primary"
            >
              <Translate>Jetzt starten</Translate>
            </Link>
          </div>
        </div>
        <div className="nodes__card">
          <div className="nodes__icon">
            <Bee />
          </div>
          <div className="nodes__section">
            <h3 className="nodes__header">
              <Translate>Venture Building</Translate>
            </h3>
            <ul className="nodes__features">
              <li className="nodes__feature no__link">
                <Translate>
                  Unser interdisziplinäres Team aus Experten führt Ideen Schritt
                  für Schritt in ein erfolgversprechendes Unternehmen über.
                </Translate>
              </li>
              <li className="nodes__feature">
                <Link to="docs4/intro">
                  <Translate>Erfahren Sie mehr.</Translate>
                </Link>
              </li>
            </ul>
            <Link
              to="docs4/intro"
              className="nodes__button button button--outline button--primary"
            >
              <Translate>Jetzt starten</Translate>
            </Link>
          </div>
        </div>
        <div className="nodes__card">
          <div className="nodes__icon">
            <Chronicle />
          </div>
          <div className="nodes__section">
            <h3 className="nodes__header">
              <Translate>
                Investment Banking & Unternehmensfinanzierung
              </Translate>
            </h3>
            <ul className="nodes__features">
              <li className="nodes__feature no__link">
                <Translate>
                  Wir skalieren innvoative Unternehmen. Von der Pre-Seed Phase
                  bis zum d-IPO.
                </Translate>
              </li>
              <li className="nodes__feature">
                <Link to="docs4/intro">
                  <Translate>Erfahren Sie mehr.</Translate>
                </Link>
              </li>
            </ul>
            <Link
              to="docs4/intro"
              className="nodes__button button button--outline button--primary"
            >
              <Translate>Jetzt starten</Translate>
            </Link>
          </div>
        </div>
        <div className="spaceholder__card__img">
          <ThemedImage
            alt="Nodes Setup"
            sources={{
              light: NodesImg,
              dark: NodesImgDark,
            }}
          />
        </div>
      </div>
    </HomepageSection>
  );
}

export default NodesExtensions;
