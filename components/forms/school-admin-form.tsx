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
import { Etablissement, GerantEtablissement } from "@/types/models";
import { add_gerant, update_gerant } from "@/services/gerants";
export const IMG_MAX_LIMIT = 3;
const formSchema = z.object({
  prenom: z
    .string()
    .nonempty("Le prénom est requis")
    .min(3, "Le prénom doit contenir au moins 3 caractères"),
  nom: z
    .string()
    .nonempty("Le nom est requis")
    .min(2, "Le nom doit contenir au moins 2 caractères"),
  date_naissance: z
    .string()
    .nonempty("La date de naissance est requise")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Format de date invalide"),
  adresse: z.string().min(1, "L'adresse est requise"),
  email: z.string().email("Adresse email invalide"),
});

type GerantEtablissementFormValues = z.infer<typeof formSchema>;

interface SchoolProps {
  initialData: Etablissement | null;
}

export const SchoolAdminForm: React.FC<SchoolProps> = ({ initialData }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const title = initialData
    ? "Editer un gerant d'établissement"
    : "Ajouter un gerant d'établissement";
  const toastMessage = initialData
    ? "Gerant d'établissement modifié avec succès"
    : "Gerant d'établissement ajouté avec succès";
  const action = initialData ? "Sauvergarder les modifications" : "Ajouter";

  const defaultValues = initialData
    ? initialData
    : {
        prenom: "",
        nom: "",
        date_naissance: "",
        adresse: "",
        email: "",
        etablissement: "",
      };

  const form = useForm<GerantEtablissementFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: GerantEtablissementFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await update_gerant(initialData.id.toString(), data)
          .then((res) => {
            console.log(res);
            router.refresh();
            router.push(`/admin/school-admins`);
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
        await add_gerant(data)
          .then((res) => {
            console.log(res);
            router.refresh();
            router.push(`/admin/school-admins`);
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
              name="prenom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Prénom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              name="date_naissance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date de naissance</FormLabel>
                  <FormControl>
                    <Input disabled={loading} type="date" {...field} />
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
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Email" {...field} />
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
