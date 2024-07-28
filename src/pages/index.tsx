import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";
import Paper from "../components/Paper";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";
import { preprints } from "../data/preprints";
import { publications } from "../data/publications";

const IndexPage = () => {
  return (
    <Layout>
      <section id="about" className="scroll-mt-20">
        <SectionHeader>Sahel Iqbal</SectionHeader>
        <div className="md:grid md:grid-cols-5 md:gap-6">
          <StaticImage
            src="../images/profile_picture.jpg"
            alt="My profile picture."
            loading="eager"
            className="md:col-span-2 md:flex md:items-center"
            objectFit="cover"
          />
          <div className="text-lg md:col-span-3 md:py-4">
            <p className="pt-8 md:pt-0">
              Hey there! I'm a second-year PhD student at Aalto University,
              Finland, supervised by Prof.{" "}
              <a
                href="https://users.aalto.fi/~ssarkka/"
                target="_blank"
                rel="noreferrer"
                className="underline text-sky-700"
              >
                Simo Särkkä
              </a>
              . My broad interests lie in the intersection of probabilistic
              machine learning and physics, and I'm interested in developing and
              applying Bayesian inference techniques for applications in
              physical/dynamical systems. Specific areas that I work on as part
              of my PhD include probabilistic partial differential equation
              solvers, Bayesian experimental design, and control as
              probabilistic inference.
            </p>
            <p className="pt-4">
              {/* For academic details, see my{" "}
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="underline text-sky-700"
              >
                resume
              </a>{" "}
              (last updated on 1st July, 2023). */}
              For reseach related queries, I can be contacted at
              sahel[dot]iqbal[at]aalto[dot]fi. Here are links to my{" "}
              <a
                href="https://scholar.google.com/citations?user=KP7mJUgAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="underline text-sky-700"
              >
                Google Scholar
              </a>{" "}
              homepage,{" "}
              <a
                href="https://github.com/Sahel13"
                target="_blank"
                rel="noreferrer"
                className="underline text-sky-700"
              >
                GitHub
              </a>{" "}
              profile, and{" "}
              <a
                href="https://twitter.com/sahel_iqbal"
                target="_blank"
                rel="noreferrer"
                className="underline text-sky-700"
              >
                Twitter
              </a>{" "}
              handle.
            </p>
            <p className="pt-4 italic">
              Website last updated on 29th July, 2024.
            </p>
          </div>
        </div>
      </section>
      <section id="publications" className="my-6 scroll-mt-20">
        <SectionHeader>Featured Publications</SectionHeader>
        <ul className="mt-2 ml-4 list-disc">
          {publications.map((element) => (
            <Paper
              key={element.title}
              title={element.title}
              authors={element.authors}
              year={element.year}
              link={element.link}
              code={element.code}
              venue={element.venue}
              arxiv={element.arxiv}
            />
          ))}
        </ul>
      </section>
      <section id="preprints" className="my-6 scroll-mt-20">
        <SectionHeader>Preprints</SectionHeader>
        <ul className="mt-2 ml-4 list-disc">
          {preprints.map((element) => (
            <Paper
              key={element.title}
              title={element.title}
              authors={element.authors}
              year={element.year}
              arxiv={element.arxiv}
              code={element.code}
            />
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return <Seo />;
};
