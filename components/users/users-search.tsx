"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  defaultSearchParamsValues,
  useSearchParamsStore,
} from "@/lib/store/search-params";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function UsersSearch() {
  const { params, setParams } = useSearchParamsStore();

  function handleClear() {
    setParams(defaultSearchParamsValues);
  }

  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <div className="relative flex-1">
        <Input
          placeholder="Search users..."
          value={params.q}
          onChange={(e) =>
            setParams({
              ...params,
              q: e.target.value,
              debounceEnabled: true,
            })
          }
          className="pr-10"
        />
        {params.q && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full"
            onClick={handleClear}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <Select
          onValueChange={(e: string) => {
            setParams({
              ...params,
              sortBy: e as any,
              debounceEnabled: false,
            });
          }}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Sorted by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sortby</SelectLabel>
              <SelectItem value="firstName">First Name</SelectItem>
              <SelectItem value="lastName">Last Name</SelectItem>
              <SelectItem value="maidenName">Maiden Name</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(e: string) => {
            setParams({
              ...params,
              sortBy: e as any,
              debounceEnabled: false,
            });
          }}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Order by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Order by</SelectLabel>
              <SelectItem value="asc">Ascending</SelectItem>
              <SelectItem value="desc">Descending</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(e: string) => {
            setParams({
              ...params,
              limit: +e,
              debounceEnabled: false,
            });
          }}
          defaultValue={params.limit.toString()}
        >
          <SelectTrigger className="w-[60px]">
            <SelectValue placeholder="Limit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Limit</SelectLabel>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="15">15</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
