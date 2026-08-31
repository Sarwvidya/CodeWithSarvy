import React from 'react';
import Layout from '@theme/Layout';
import { About } from '../components/About.jsx';
import { LearningSection } from '../components/LearningSection.jsx';

export default function Home() {
  return (
    <Layout
      title="Portfolio & Study Vault"
      description="Engineering notes, roadmaps, and portfolio by Sarwvidya (@codewithsarvy)"
    >
      <main className="content-wrap">
        <About />
        <LearningSection />
      </main>
    </Layout>
  );
}
