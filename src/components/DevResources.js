import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import React from "react";
import HomepageSection from "./HomepageSection";
import { IntegrationServices, Tutorials } from "./icons";

function DevResources() {
  return (
    <HomepageSection
      header={() => <Translate>Hilfreiche Ressourcen</Translate>}
    >
      <div className="resources__cards">
        <div className="resources__card resources__card--logo" />
        <Link to="tutorials" className="resources__card">
          <div className="resources__icon">
            <Tutorials />
          </div>
          <h3 className="resources__header">
            <Translate>Digitale Vermögenswerte</Translate>
          </h3>
          <p className="resources__description">
            <Translate>
              Lernen Sie wie digitale Wirtschaftsgüter auf verteilten Systemen
              Werte schaffen.
            </Translate>
          </p>
        </Link>
        <Link to="integration-services/welcome" className="resources__card">
          <div className="resources__icon">
            <IntegrationServices />
          </div>
          <h3 className="resources__header">
            <Translate>Investitionsentscheidungen Cheat Sheet</Translate>
          </h3>
          <p className="resources__description">
            <Translate>
              Mit dieser Checklist vermeiden sie alle Fehler bei
              Investitions-Entscheidungen.
            </Translate>
          </p>
        </Link>
      </div>
    </HomepageSection>
  );
}

export default DevResources;
