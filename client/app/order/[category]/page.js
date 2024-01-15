'use client'

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Link from "next/link";

import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

export default function GetCategory() {
  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      price: 0,
    },
  });
  return (
    <div className="relative flex min-h-screen flex-col justify-between">
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className='flex flex-col m-40 justify-center items-center text-4xl gap-10'
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible
        }}
        // style={
        //   {
        //     "--base-width": "24vw",
        //     top: "-18vw",
        //     letterSpacing: "-1.4vw",
        //     x: "-50%"
        //   }
        // }
      >
        Category
      </motion.h1>
      <Form {...form}>
        <form
          onSubmit={() => {
            alert(form.getValues().price);
          }}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="coffee"
            render={({ field: { value, onChange } }) => (
              <FormItem>
                <FormLabel>Coffee - {value}</FormLabel>
                <FormControl>
                  <Slider
                    min={0}
                    max={100}
                    step={1}
                    defaultValue={[value]}
                    onValueChange={onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="milk"
            render={({ field: { value, onChange } }) => (
              <FormItem>
                <FormLabel>Milk - {value}</FormLabel>
                <FormControl>
                  <Slider
                    min={0}
                    max={100}
                    step={1}
                    defaultValue={[value]}
                    onValueChange={onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cups"
            render={({ field: { value, onChange } }) => (
              <FormItem>
                <FormLabel>Cups - {value}</FormLabel>
                <FormControl>
                  <Slider
                    min={0}
                    max={100}
                    step={1}
                    defaultValue={[value]}
                    onValueChange={onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
      {/* <div className="flex flex-row w-1/2 justify-between">
        <Label>coffee</Label>
          <Slider name='coffee' defaultValue={[33]} max={100} step={1} />
      </div>
      <div className="flex flex-row w-1/2 justify-between">
        <Label>milk</Label>
          <Slider name='milk' defaultValue={[33]} max={100} step={1} />
      </div>
      <div className="flex flex-row w-1/2 justify-between">
        <Label>water</Label>
          <Slider name='cup' defaultValue={[33]} max={100} step={1} />
      </div> */}
    </motion.article>
    </div>
  );
}
