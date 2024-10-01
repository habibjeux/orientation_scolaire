"use client";
import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { assign_etablissement } from "@/services/gerants";
export const IMG_MAX_LIMIT = 3;
const formSchema = z.object({
  etablissements: z.string().nonempty("Veillez selectionner un établissement"),
});

type EtablissementFormValues = z.infer<typeof formSchema>;

interface SchoolAssignProps {
  etablissements: Etablissement[];
  schoolId: string;
}

export const SchoolAssignForm: React.FC<SchoolAssignProps> = ({
  etablissements,
  schoolId,
}) => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const form = useForm<EtablissementFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: EtablissementFormValues) => {
    try {
      setLoading(true);
      const dataBody = {
        etablissement_id: data.etablissements,
        gerant_id: schoolId,
      };
      await assign_etablissement(dataBody)
        .then(() => {
          router.refresh();
          router.push(`/admin/schools`);
          toast({
            variant: "success",
            title: "Etablissement assigné",
            description: "L'établissement a été assigné avec succès",
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
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Heading title={"Assignation d'un établissement"} description={""} />
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <div className="gap-8 md:grid md:grid-cols-3">
            <FormField
              control={form.control}
              name="etablissements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Etablissement</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Selectionner un établissement"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {etablissements.map((etablissement) => (
                        <SelectItem
                          key={etablissement.id}
                          value={etablissement.id.toString()}
                        >
                          {etablissement.nom}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            Assigner
          </Button>
        </form>
      </Form>
    </>
  );
};
