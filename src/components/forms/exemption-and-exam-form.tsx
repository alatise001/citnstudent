"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { QualificationsFormSchema } from "@/schemas/formschemas";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import data from "../../../public/data/citn-exam-database.json";

const qualifications = Object.entries(data.qualifications)
  .map(([key, value]) => ({
    label: value.name,
    value: value.name,
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

export default function ExemptionAndExamForm({
  setIsQualification,
}: {
  setIsQualification: React.Dispatch<React.SetStateAction<string>>;
}) {
  const form = useForm<z.infer<typeof QualificationsFormSchema>>({
    resolver: zodResolver(QualificationsFormSchema),
  });

  function onSubmit(data: z.infer<typeof QualificationsFormSchema>) {
    // console.log(data);
    setIsQualification(data.qualifications);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex justify-between"
      >
        <FormField
          control={form.control}
          name="qualifications"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[250px] md:w-[550px] justify-between border-b border-black border-l-0 border-r-0 border-t-0 rounded-none bg-transparent shadow-none",
                        !field.value && "text-black overflow-hidden"
                      )}
                    >
                      <p className="text-black text-left overflow-hidden whitespace-nowrap text-ellipsis">
                        {field.value
                          ? qualifications.find(
                              (qualification) =>
                                qualification.value === field.value
                            )?.label
                          : "Select qualification"}
                      </p>
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[250px] md:w-[550px] bg-transparent p-0">
                  <Command className="">
                    <CommandInput
                      placeholder="Search framework..."
                      className="h-9 text-black"
                    />
                    <CommandList className="bg-transparent">
                      <CommandEmpty>No qualification found.</CommandEmpty>
                      <CommandGroup className="bg-transparent">
                        {qualifications.map((language) => (
                          <CommandItem
                            className=" rounded-none"
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue("qualifications", language.value);
                            }}
                          >
                            {language.label}
                            <Check
                              className={cn(
                                "ml-auto text-black",
                                language.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="md:w-[150px] bg-[#008f47] text-white hover:bg-white hover:text-[#008f47]"
          type="submit"
          variant={"outline"}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
