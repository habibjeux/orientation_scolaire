"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendrier } from "@/types/models";

export const columns: ColumnDef<Calendrier>[] = [
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
    accessorKey: "annee_academique",
    header: "ANNEE ACADEMIQUE",
  },
  {
    accessorKey: "debut",
    header: "DATE DE DEBUT",
    cell: ({ row }) => {
      const date = row.original.debut;
      return new Date(date).toLocaleDateString();
    },
  },
  {
    accessorKey: "fin",
    header: "DATE DE FIN",
    cell: ({ row }) => {
      const date = row.original.fin;
      if (!date) return "Non défini";
      return new Date(date!).toLocaleDateString();
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
