import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "./styles.css";
import UsePart from "../components/UsePart";
import CoreLibraries from "../components/CoreLibraries";
import NodesExtensions from "../components/NodesExtensions";
import DevResources from "../components/DevResources";
import Header from "../components/Header";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Title"
      description="Description will go into a meta tag in <head />"
    >
      <Header />
      <main
        style={{
          paddingTop: 48,
        }}
      >
        <UsePart />
        <CoreLibraries />
        <NodesExtensions />
        <DevResources />
      </main>
    </Layout>
  );
}
