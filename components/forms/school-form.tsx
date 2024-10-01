"use client";
import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { useToast } from "@/hooks/use-toast";
import { Etablissement } from "@/types/models";
import {
  add_etablissement,
  update_etablissement,
} from "@/services/etablissements";
export const IMG_MAX_LIMIT = 3;
const formSchema = z.object({
  nom: z
    .string()
    .nonempty("Le nom est requis")
    .min(3, "Le nom doit contenir au moins 3 caractères"),
  adresse: z.string().nullable(),
});

type EtablissementFormValues = z.infer<typeof formSchema>;

interface SchoolProps {
  initialData: Etablissement | null;
}

export const SchoolForm: React.FC<SchoolProps> = ({ initialData }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const title = initialData
    ? "Editer un établissement"
    : "Ajouter un établissement";
  const toastMessage = initialData
    ? "Etablissement modifié avec succès"
    : "Etablissement ajouté avec succès";
  const action = initialData ? "Sauvergarder les modifications" : "Ajouter";

  const defaultValues = initialData
    ? initialData
    : {
        nom: "",
        adresse: "",
      };

  const form = useForm<EtablissementFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: EtablissementFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await update_etablissement(initialData.id.toString(), data)
          .then(() => {
            router.refresh();
            router.push(`/admin/schools`);
            toast({
              variant: "success",
              title: toastMessage,
              description: toastMessage,
            });
          })
          .catch((error) => {
            console.log(error.response.data.message);
            toast({
              variant: "destructive",
              title: "Erreur lors de la modification",
              description: error.response.data.message,
            });
          });
      } else {
        await add_etablissement(data)
          .then(() => {
            router.refresh();
            router.push(`/admin/schools`);
            toast({
              variant: "success",
              title: toastMessage,
              description: toastMessage,
            });
          })
          .catch((error) => {
            console.log(error.response.data.message);
            toast({
              variant: "destructive",
              title: "Erreur lors de l'ajout",
              description: error.response.data.message,
            });
          });
      }
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Heading title={title} description={""} />
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <div className="gap-8 md:grid md:grid-cols-3">
            <FormField
              control={form.control}
              name="nom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Nom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adresse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Adresse"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
