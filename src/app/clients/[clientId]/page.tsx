import { ClientDetail } from "@/components/portfolio/client-detail";
import { CLIENTS } from "@/lib/clients";

export default async function ClientPage({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = await params;
  return <ClientDetail clientId={clientId} />;
}

export function generateStaticParams() {
  return CLIENTS.map((client) => ({ clientId: client.id }));
}
