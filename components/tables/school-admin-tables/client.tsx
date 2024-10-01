"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import { GerantEtablissement } from "@/types/models";

interface GerantEtablissementProps {
  data: GerantEtablissement[];
}

export const GerantEtablissementClient: React.FC<GerantEtablissementProps> = ({
  data,
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Gérants d'établissement (${data.length})`}
          description="Liste des gérants d'établissement"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/admin/school-admins/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Ajouter
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="email" columns={columns} data={data} />
    </>
  );
};
