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
        <h1 className="text-3xl font-normal">Sahel Iqbal</h1>
        <div className="h-1 bg-black mb-4"></div>
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
              . I'm broadly interested in probabilistic machine learning (ML) methods
              and adding inductive biases to ML models, and I enjoy developing
              and applying Bayesian inference techniques for applications in
              physical/dynamical systems. Specific research areas that I work on as
              part of my PhD include Bayesian experimental design and
              probabilistic solvers for differential equations.
            </p>
            <p className="pt-4">
              For academic details, see my{" "}
              <a
                href="/sahel_iqbal_cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="underline text-sky-700"
              >
                resume.
              </a>{" "}
              For research-related queries, I can be contacted at sahel[dot]iqbal[at]aalto[dot]fi.
            </p>
            <p className="pt-4 italic">
              Website last updated on 7th August, 2024.
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
