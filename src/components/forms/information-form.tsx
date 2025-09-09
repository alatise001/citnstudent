"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormContext } from "@/contexts/formContext";
import { useRouter } from "next/navigation";
import { InformationFormSchema } from "@/schemas/formschemas";
export default function InformationForm() {
  const router = useRouter();
  const { isform, setFormData } = React.useContext(FormContext);

  const form = useForm<z.infer<typeof InformationFormSchema>>({
    resolver: zodResolver(InformationFormSchema),
    defaultValues: {
      fullname: isform.fullname,
      email: isform.email,
      telnumber: isform.telnumber,
    },
  });
  function onSubmit(data: z.infer<typeof InformationFormSchema>) {
    setFormData({
      fullname: data.fullname,
      email: data.email,
      telnumber: data.telnumber,
    });
    router.push("/exemption-and-exam");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center h-full w-[80%] md:w-[60%] items-center"
      >
        <div className="flex flex-col gap-10 w-[80%]">
          <h1 className=" text-[32px]">Enter Your Details</h1>
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Full Name</FormLabel> */}
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
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
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telnumber"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Phone Number</FormLabel> */}
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="self-start mt-10  w-[250px] h-[48px] bg-[#008f47] text-white hover:bg-white hover:border-[#008f47] hover:border hover:text-[#008f47]"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
