import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import React from "react";
import HomepageSection from "./HomepageSection";
import { IotaCore, IotaToken, PickAWallet } from "./icons";

export default function UsePart() {
  return (
    <HomepageSection
      header={() => (
        <Translate>Nachhaltiger Vermögensaufbau im 21. Jahrhundert</Translate>
      )}
    >
      <div className="about__cards">
        <Link
          to="learn/about-iota/an-introduction-to-iota"
          className="about__card"
        >
          <div className="about__section">
            <div className="about__icon">
              <IotaCore />
            </div>
            <h3 className="about__header">Vermögen verstehen</h3>
            <p className="about__description">
              <Translate>
                Lernen Sie wie Geld heute funktioniert und wie man in einer
                Industrie planbar und sicher Vermögen aufbaut.
              </Translate>
            </p>
          </div>
        </Link>
        <Link to="learn/iota-token/buying-iota" className="about__card">
          <div className="about__section">
            <div className="about__icon">
              <IotaToken />
            </div>
            <h3 className="about__header">
              <Translate>Gespräch vereinbaren</Translate>
            </h3>
            <p className="about__description">
              <Translate>
                Sie haben Fragen? Sprechen Sie mit uns und lassen Sie sich alle
                Fragen beantworten.
              </Translate>
            </p>
          </div>
        </Link>
        <Link to="/use/wallets/what-is-a-wallet" className="about__card">
          <div className="about__section">
            <div className="about__icon">
              <PickAWallet />
            </div>
            <h3 className="about__header">
              <Translate>Auf Amazon bestellen</Translate>
            </h3>
            <p className="about__description">
              <Translate>
                Bestellen Sie das neue Buch von Christian Heinz »Der
                Geld-Algorithmus» und lernen Sie wie Vermögen funktionieren.
              </Translate>
            </p>
          </div>
        </Link>
      </div>
    </HomepageSection>
  );
}
