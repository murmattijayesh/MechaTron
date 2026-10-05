import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

const featured = [
  "ga-drawing-automation",
  "mech-ai-suite",
  "product-development-aeron",
  "configurable-cad-automation-platform",
];

const simulation = [
  "cubesat-structural-fea-analysis",
  "naca-airfoil-optimization-genetic-algorithm",
  "solenoid-steady-state-thermal-analysis",
  "planar-truss-1d-fea-analysis",
  "pneumatic-cylinder-cover-fea",
  "bench-vice-cad-design",
  "brain-tumor-detection-machine-learning",
];

const hardware = ["arduino-bluetooth-smart-car", "home-iot-automation"];

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column gap="12" marginBottom="24">
        <Text variant="code-default-s" onBackground="brand-weak">
          {"// Featured — CAD automation & engineering tools"}
        </Text>
        <Heading variant="display-strong-s">Projects</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Automating the repetitive parts of mechanical design — and the products, analysis and
          hardware behind it.
        </Text>
      </Column>
      <Projects slugs={featured} />

      <Column gap="8" marginTop="40">
        <Text variant="code-default-s" onBackground="brand-weak">
          {"// Simulation & analysis"}
        </Text>
        <Heading as="h2" variant="heading-strong-xl">
          FEA, CFD and design studies
        </Heading>
      </Column>
      <Projects slugs={simulation} compact />

      <Column gap="8" marginTop="40">
        <Text variant="code-default-s" onBackground="brand-weak">
          {"// Hardware & IoT"}
        </Text>
        <Heading as="h2" variant="heading-strong-xl">
          Embedded and robotics builds
        </Heading>
      </Column>
      <Projects slugs={hardware} compact />
    </Column>
  );
}
