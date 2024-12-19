import React from 'react';
import { Layout } from './components/layout/Layout';
import { Card } from './components/ui/Card';
import { Typography } from './components/ui/Typography';
import { Section } from './components/ui/Section';

function App() {
  return (
    <Layout>
      <Section>
        <Card>
          <Typography variant="h2" className="mb-4">
            Welcome to MyApp
          </Typography>
          <Typography variant="p" className="text-gray-600">
            Start building your application by editing the files in the src directory.
          </Typography>
        </Card>
      </Section>
    </Layout>
  );
}

export default App;