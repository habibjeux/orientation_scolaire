"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { EtablissementClient } from "@/components/tables/school/client";
import { get_etablissements } from "@/services/etablissements";
import { Etablissement } from "@/types/models";
import { useEffect, useState } from "react";

export default function page() {
  const [etablissements, setEtablissements] = useState<Etablissement[]>([]);
  const breadcrumbItems = [
    { title: "Admin", link: "/admin" },
    { title: "Etablissement", link: "/admin/schools" },
  ];
  useEffect(() => {
    get_etablissements().then((data) => setEtablissements(data));
  }, []);
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <EtablissementClient data={etablissements} />
      </div>
    </PageContainer>
  );
}
