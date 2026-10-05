import { getPosts } from "@/utils/utils";
import { Column, Grid } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  /** Show only these slugs, in this order */
  slugs?: string[];
  /** Two-column thumbnail layout */
  compact?: boolean;
}

export function Projects({ range, exclude, slugs, compact = false }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = slugs
    ? slugs
        .map((slug) => allProjects.find((post) => post.slug === slug))
        .filter((post): post is (typeof allProjects)[number] => Boolean(post))
    : allProjects.sort((a, b) => {
        return (
          new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
        );
      });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  const cards = displayedProjects.map((post, index) => (
    <ProjectCard
      priority={index < 2}
      key={post.slug}
      index={index}
      compact={compact}
      href={`/work/${post.slug}`}
      images={post.metadata.images}
      title={post.metadata.title}
      description={post.metadata.summary}
      content={post.content}
      kicker={typeof post.metadata.tag === "string" ? post.metadata.tag : undefined}
      avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
      link={post.metadata.link || ""}
    />
  ));

  if (compact) {
    return (
      <Grid fillWidth columns="2" s={{ columns: 1 }} gap="16" marginBottom="40">
        {cards}
      </Grid>
    );
  }

  return (
    <Column fillWidth gap="24" marginBottom="40">
      {cards}
    </Column>
  );
}
