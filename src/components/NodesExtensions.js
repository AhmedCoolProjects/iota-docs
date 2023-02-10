import NodesImg from "@site/static/img/homepage/section_nodes.png";
import NodesImgDark from "@site/static/img/homepage/section_nodes_dark.png";
import Link from "@docusaurus/Link";
import React from "react";
import ThemedImage from "@theme/ThemedImage";
import HomepageSection from "./HomepageSection";
import { Bee, Chronicle, Hornet } from "./icons";

function NodesExtensions() {
  return (
    <HomepageSection
      header="Nodes and extensions"
      description="Nodes are the core of an IOTA network. They run the node software, which gives them read and write access to the IOTA network. You can extend their functionality with additional extensions such as INX plugins or the Wasp software for Smart Contracts"
    >
      <div className="nodes__cards">
        <div className="nodes__card">
          <div className="nodes__icon">
            <Hornet />
          </div>
          <div className="nodes__section">
            <h3 className="nodes__header">Digitale Vermögenswerte</h3>
            <ul className="nodes__features">
              <li className="nodes__feature">
                <Link to="/hornet/welcome">
                  A node implementation written in Go
                </Link>
              </li>
              <li className="nodes__feature">
                <Link to="/hornet/getting_started">
                  Participate in the network
                </Link>
              </li>
              <li className="nodes__feature">
                <Link to="/hornet/how_tos/managing_a_node">
                  Manage your node
                </Link>
              </li>
            </ul>
            <Link
              to="hornet/how_tos/hornet_apt_repository"
              className="nodes__button button button--outline button--primary"
            >
              Jetzt starten
            </Link>
          </div>
        </div>
        <div className="nodes__card">
          <div className="nodes__icon">
            <Bee />
          </div>
          <div className="nodes__section">
            <h3 className="nodes__header">Venture Building</h3>
            <ul className="nodes__features">
              <li className="nodes__feature">
                <Link to="/bee/welcome">A node implementation in Rust</Link>
              </li>
              <li className="nodes__feature">
                <Link to="/bee/getting_started">
                  Participate in the network
                </Link>
              </li>
              <li className="nodes__feature">
                <Link to="/bee/how_tos/docker">Become a node operator</Link>
              </li>
            </ul>
            <Link
              to="bee/how_tos/setup_a_node"
              className="nodes__button button button--outline button--primary"
            >
              Jetzt starten
            </Link>
          </div>
        </div>
        <div className="nodes__card">
          <div className="nodes__icon">
            <Chronicle />
          </div>
          <div className="nodes__section">
            <h3 className="nodes__header">
              Investment Banking & Unternehmensfinanzierung
            </h3>
            <ul className="nodes__features">
              <li className="nodes__feature">
                <Link to="/chronicle/welcome">
                  Efficient and reliable permanodes
                </Link>
              </li>
              <li className="nodes__feature">
                <Link to="/chronicle/welcome#project-structure">
                  Solution for storing all transactions
                </Link>
              </li>
              <li className="nodes__feature">
                <Link to="/chronicle/config_reference">
                  Managing and accessing the permanode
                </Link>
              </li>
            </ul>
            <Link
              to="chronicle/getting_started"
              className="nodes__button button button--outline button--primary"
            >
              Jetzt starten
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
