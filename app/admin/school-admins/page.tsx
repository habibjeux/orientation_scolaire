"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { GerantEtablissementClient } from "@/components/tables/school-admin-tables/client";
import { get_gerants } from "@/services/gerants";
import { GerantEtablissement } from "@/types/models";
import { formatDate } from "@/utils/dateFormater";
import { useEffect, useState } from "react";

export default function page() {
  const [gerants, setGerants] = useState<GerantEtablissement[]>([]);
  const breadcrumbItems = [
    { title: "Admin", link: "/admin" },
    { title: "Gérants d'établissement", link: "/admin/school-admins" },
  ];
  useEffect(() => {
    get_gerants().then((data) => setGerants(data));
  }, []);
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <GerantEtablissementClient data={gerants} />
      </div>
    </PageContainer>
  );
}
