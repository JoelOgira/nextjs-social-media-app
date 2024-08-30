"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { SearchFormValues, searchSchema } from "@/lib/validation";
import { SearchInput } from "@/components/search-input";
import { useSearchContext } from "../_providers/search-provider";

export default function SearchField() {
  const router = useRouter();
  const { isMobile, setShowSearch } = useSearchContext();

  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      q: "",
    },
  });

  function onSubmit(values: SearchFormValues) {
    router.push(`/search?q=${encodeURIComponent(values.q)}`);
    if (isMobile) {
      setShowSearch(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="q"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <SearchInput {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
