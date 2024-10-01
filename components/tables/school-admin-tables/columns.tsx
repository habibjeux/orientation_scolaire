"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Checkbox } from "@/components/ui/checkbox";
import { GerantEtablissement } from "@/types/models";

export const columns: ColumnDef<GerantEtablissement>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Selectionner tout"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Selectionner la ligne"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nomComplet",
    header: "NOM",
    cell: ({ row }) => {
      const prenom = row.original.prenom;
      const nom = row.original.nom;
      return `${prenom} ${nom}`;
    },
  },
  {
    accessorKey: "email",
    header: "EMAIL",
  },
  {
    accessorKey: "etablissement",
    header: "ETABLISSEMENT",
  },
  {
    accessorKey: "date_naissance",
    header: "DATE DE NAISSANCE",
    cell: ({ row }) => {
      const date = row.original.date_naissance;
      return new Date(date).toLocaleDateString();
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
