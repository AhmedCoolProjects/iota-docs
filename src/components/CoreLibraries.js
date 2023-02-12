import Link from "@docusaurus/Link";
import React from "react";
import CoreLibImg from "@site/static/img/homepage/section_core_libraries.png";
import CoreLibImgDark from "@site/static/img/homepage/section_core_libraries_dark.png";
import HomepageSection from "./HomepageSection";
import { IotaCore, Wallet } from "./icons";
import Languages from "./Languages";
import ThemedImage from "@theme/ThemedImage";
import Translate from "@docusaurus/Translate";

function CoreLibraries() {
  return (
    <HomepageSection
      header={() => <Translate>Vermögensaufbau-as-a-Service</Translate>}
      // description="With the IOTA core libraries you can easily integrate IOTA into your own applications."
    >
      <div className="libraries__cards">
        <div className="libraries__card">
          <div className="libraries__section">
            <div className="libraries__head">
              <div className="libraries__icon">
                <IotaCore />
              </div>
              <Languages
                languages={{
                  Rust: "/iota.rs/getting_started/rust",
                  NodeJS: "/iota.rs/getting_started/nodejs",
                  Python: "/iota.rs/getting_started/python",
                  Java: "/iota.rs/getting_started/java/getting_started",
                  Wasm: "/iota.rs/getting_started/wasm",
                }}
              />
            </div>
            <h3 className="libraries__header">
              <Translate>FÜR PRIVATE</Translate>
            </h3>
            <ul className="libraries__features">
              <li className="libraries__feature">
                {/* <Link to="/iota.rs/examples/get_info"> */}
                <Translate>
                  Wir führen Sie Schritt-für-Schritt durch den Auswahl- und
                  Investitions-Prozess. Sie behalten zu jeder Zeit 100% die
                  Kontrolle.
                </Translate>
                {/* </Link> */}
              </li>
              {/* <li className="libraries__feature">
                <Link to="/iota.rs/examples/data_message">
                  Send a data message
                </Link>
              </li>
              <li className="libraries__feature">
                <Link to="/iota.rs/explanations/messages_payloads_and_transactions">
                  Learn about transactions
                </Link>
              </li> */}
            </ul>
            <Link
              to="/iota.rs/welcome"
              className="libraries__button button button--outline button--primary"
            >
              <Translate>Jetzt Gespräch vereinbaren</Translate>
            </Link>
          </div>
        </div>
        <div className="libraries__card">
          <div className="libraries__section">
            <div className="libraries__head">
              <div className="libraries__icon">
                <Wallet />
              </div>
              <Languages
                languages={{
                  Rust: "/wallet.rs/getting_started/rust",
                  NodeJS: "/wallet.rs/getting_started/nodejs",
                  Python: "/wallet.rs/getting_started/python",
                  Java: "/wallet.rs/getting_started/java",
                }}
              />
            </div>
            <h3 className="libraries__header">
              <Translate>FÜR UNTERNEHMEN</Translate>
            </h3>
            <ul className="libraries__features">
              <li className="libraries__feature">
                {/* <Link to="/wallet.rs/explanations/nutshell"> */}
                <Translate>
                  Nach einer initialen Discovery implementieren wir sämtliche
                  Prozesse und Strukturen gemäß ESMA-Vorgaben für Sie und
                  begleiten alle weiteren Schritte.
                </Translate>
                {/* </Link> */}
              </li>
              {/* <li className="libraries__feature">
                <Link to="/wallet.rs/examples/rust#backup-and-restore-example">
                  Store account data
                </Link>
              </li>
              <li className="libraries__feature">
                <Link to="/wallet.rs/examples/rust#transfer-example">
                  Transfer tokens
                </Link>
              </li> */}
            </ul>
            <Link
              to="/docs3/intro"
              className="libraries__button button button--outline button--primary"
            >
              <Translate>Mehr erfahren</Translate>
            </Link>
          </div>
        </div>
        <div className="spaceholder__card__img">
          <ThemedImage
            alt="Core Libraries"
            sources={{
              light: CoreLibImg,
              dark: CoreLibImgDark,
            }}
          />
        </div>
      </div>
    </HomepageSection>
  );
}

export default CoreLibraries;
