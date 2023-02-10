import Link from "@docusaurus/Link";
import React from "react";
import HomepageSection from "./HomepageSection";
import { IntegrationServices, Tutorials } from "./icons";

function DevResources() {
  return (
    <HomepageSection header="Hilfreiche Ressourcen">
      <div className="resources__cards">
        <div className="resources__card resources__card--logo" />
        <Link to="tutorials" className="resources__card">
          <div className="resources__icon">
            <Tutorials />
          </div>
          <h3 className="resources__header">Digitale Vermögenswerte</h3>
          <p className="resources__description">
            Lernen Sie wie digitale Wirtschaftsgüter auf verteilten Systemen
            Werte schaffen.
          </p>
        </Link>
        <Link to="integration-services/welcome" className="resources__card">
          <div className="resources__icon">
            <IntegrationServices />
          </div>
          <h3 className="resources__header">
            Investitionsentscheidungen Cheat Sheet
          </h3>
          <p className="resources__description">
            Mit dieser Checklist vermeiden sie alle Fehler bei
            Investitions-Entscheidungen.
          </p>
        </Link>
      </div>
    </HomepageSection>
  );
}

export default DevResources;
