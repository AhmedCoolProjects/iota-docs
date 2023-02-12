import React from "react";
import Translate from "@docusaurus/Translate";

const data = {
  title: () => (
    <Translate>
      Ein Ereignis. Eine Industrie. Alle vier Jahre. Ihre nächste Chance.
    </Translate>
  ),
  description: () => (
    <Translate>
      Die globalen Finanzmärkte sind komplex. Die Renditen gering. Die
      finanzielle Zukunft unsicher. Wie Sie sicher, planbar und nachhaltig
      Vermögen aufbauen. Ich begleite Sie auf jedem Schritt des Weges. Sie
      behalten zu 100% die Kontrolle. 4 Jahre Geld-zurück-Garantie.
    </Translate>
  ),
  outlinedButton: {
    buttonText: () => <Translate>Vermögen verstehen</Translate>,
    url: "/docs/intro",
  },
  solidButton: {
    buttonText: () => <Translate>Jetzt starten</Translate>,
    url: "/docs2/intro",
  },
  imagePath: "img/homepage/header.svg",
};

export default data;
