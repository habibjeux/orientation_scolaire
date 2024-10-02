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
import { Calendrier } from "@/types/models";
import { add_calendar, update_calendar } from "@/services/calendriers";
export const IMG_MAX_LIMIT = 3;
const formSchema = z.object({
  annee_academique: z
    .string()
    .nonempty("L'année académique est requise")
    .regex(/^\d{4}-\d{4}$/i, "Format invalide"),
  debut: z.string().nonempty("La date de début est requise"),
  fin: z.string().optional(),
  etablissement_id: z.number(),
});

type CalendrierFormValues = z.infer<typeof formSchema>;

interface SchoolProps {
  initialData: Calendrier | null;
}

export const CalendrierForm: React.FC<SchoolProps> = ({ initialData }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const title = initialData ? "Editer un calendrier" : "Ajouter un calendrier";
  const toastMessage = initialData
    ? "Calendrier modifié avec succès"
    : "Calendrier ajouté avec succès";
  const action = initialData ? "Sauvergarder les modifications" : "Ajouter";

  const schoolId = 2;

  const defaultValues = initialData
    ? initialData
    : {
        annee_academique: "",
        debut: "",
        fin: "",
        etablissement_id: schoolId,
      };

  const form = useForm<CalendrierFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: CalendrierFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await update_calendar(initialData.id.toString(), data)
          .then(() => {
            router.refresh();
            router.push(`/manager/calendar`);
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
        await add_calendar(data)
          .then(() => {
            router.refresh();
            router.push(`/manager/calendar`);
            toast({
              variant: "success",
              title: toastMessage,
              description: toastMessage,
            });
          })
          .catch((error) => {
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
              name="annee_academique"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Année Académique</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="2023-2024"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="debut"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date de début</FormLabel>
                  <FormControl>
                    <Input disabled={loading} type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date de fin</FormLabel>
                  <FormControl>
                    <Input disabled={loading} type="date" {...field} />
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
