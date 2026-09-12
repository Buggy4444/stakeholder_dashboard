import { ProjectWorkspace } from "@/components/portfolio/project-workspace";
import { PROJECTS } from "@/lib/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  return <ProjectWorkspace projectId={projectId} />;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ projectId: project.id }));
}
