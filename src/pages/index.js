import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import "./styles.css";
import UsePart from "../components/UsePart";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Title"
      description="Description will go into a meta tag in <head />"
    >
      <UsePart />
      <main></main>
    </Layout>
  );
}
