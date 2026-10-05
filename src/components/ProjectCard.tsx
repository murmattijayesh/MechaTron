import Link from "next/link";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  kicker?: string;
  index?: number;
  compact?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  priority = false,
  images = [],
  title,
  content,
  description,
  link,
  kicker,
  index,
  compact = false,
}) => {
  const cover = images[0];
  const code = typeof index === "number" ? String(index + 1).padStart(2, "0") : undefined;

  return (
    <article className={`${styles.card} ${compact ? styles.compact : ""}`}>
      <Link href={href} className={styles.visual} aria-label={title} tabIndex={-1}>
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover}
            alt={title}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className={styles.image}
          />
        ) : (
          <span className={styles.generated} aria-hidden="true">
            <span className={styles.grid} />
            <span className={styles.ring} />
            <span className={styles.ringTwo} />
            {code && <span className={styles.code}>{code}</span>}
            {kicker && <span className={styles.genKicker}>{kicker}</span>}
          </span>
        )}
        <span className={styles.shade} aria-hidden="true" />
      </Link>
      <div className={styles.body}>
        {kicker && cover && <span className={styles.kicker}>{kicker}</span>}
        <h2 className={styles.title}>
          <Link href={href}>{title}</Link>
        </h2>
        {description?.trim() && <p className={styles.description}>{description}</p>}
        <div className={styles.links}>
          {content?.trim() && (
            <Link href={href} className={styles.link}>
              Read case study <span aria-hidden="true">→</span>
            </Link>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              View project <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
