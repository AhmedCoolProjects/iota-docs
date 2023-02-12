import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import React from "react";
import HomepageSection from "./HomepageSection";
import { Discord, Search, Tips } from "./icons";

function FurtherLinks() {
  return (
    <HomepageSection header={() => <Translate>Further links</Translate>}>
      <div className="further__cards">
        <Link to="https://discord.iota.org/" className="further__card">
          <div className="further__section">
            <div className="further__icon">
              <Discord />
            </div>
            <h3 className="further__header">Schritt-für-Schritt Anleitung</h3>
            <p className="further__description">
              Wie Sie sicher und Schritt-für-Schritt starten.
            </p>
          </div>
        </Link>
        <Link to="/tips" className="further__card">
          <div className="further__section">
            <div className="further__icon">
              <Tips />
            </div>
            <h3 className="further__header">Mehr erfahren</h3>
            <p className="further__description">
              Wir klären Ihre Fragen gerne in einem Telefonat oder einer
              Videoschaltung.
            </p>
          </div>
        </Link>
        <Link to="https://explorer.iota.org/mainnet" className="further__card">
          <div className="further__section">
            <div className="further__icon">
              <Search />
            </div>
            <h3 className="further__header">Über uns</h3>
            <p className="further__description">
              Erfahren Sie mehr über Christian Heinz und seine Geschichte.
            </p>
          </div>
        </Link>
      </div>
    </HomepageSection>
  );
}

export default FurtherLinks;
