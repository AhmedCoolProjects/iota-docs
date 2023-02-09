import Link from "@docusaurus/Link";
import React from "react";
import HomepageSection from "./HomepageSection";
import { IotaCore, IotaToken, PickAWallet } from "./icons";

export default function UsePart() {
  return (
    <HomepageSection header="Use IOTA">
      <div className="about__cards">
        <Link
          to="learn/about-iota/an-introduction-to-iota"
          className="about__card"
        >
          <div className="about__section">
            <div className="about__icon">
              <IotaCore />
            </div>
            <h3 className="about__header">What is IOTA?</h3>
            <p className="about__description">
              An open, feeless and scalable distributed ledger, designed to
              support data and value transfer.
            </p>
          </div>
        </Link>
        <Link to="learn/iota-token/buying-iota" className="about__card">
          <div className="about__section">
            <div className="about__icon">
              <IotaToken />
            </div>
            <h3 className="about__header">Get IOTA tokens</h3>
            <p className="about__description">
              The IOTA token is used to transact value on the IOTA distributed
              ledger.
            </p>
          </div>
        </Link>
        <Link to="/use/wallets/what-is-a-wallet" className="about__card">
          <div className="about__section">
            <div className="about__icon">
              <PickAWallet />
            </div>
            <h3 className="about__header">Pick a wallet</h3>
            <p className="about__description">
              Choose a wallet to store your public and private keys and interact
              with the IOTA network.
            </p>
          </div>
        </Link>
      </div>
    </HomepageSection>
  );
}
