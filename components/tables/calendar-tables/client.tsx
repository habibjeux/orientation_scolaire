"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import { Calendrier } from "@/types/models";

interface CalendrierClientProps {
  data: Calendrier[];
}

export const CalendrierClient: React.FC<CalendrierClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Calendriers (${data.length})`}
          description="Liste des établissements"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/manager/calendar/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Ajouter
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="annee_academique" columns={columns} data={data} />
    </>
  );
};
