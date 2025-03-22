"use client";
import { useState } from "react";
import DiscoverContent from "./DiscoverContent/DiscoverContent";
import FilterSection from "./FilterSection/FilterSection";
export interface IFilters {
  gender: string;
  age: string;
  continent: string;
  country: string;
  state: string;
  city: string;
  minAge: number;
  maxAge: number;
  distance: string;
  maritalStatus: string;
  hasChildren: string;
  ethnicity: string;
  denomination: string;
  smoker: string;
  drinker: string;
}
const Discover = () => {
  const [filters, setFilters] = useState<IFilters>({
    gender: "",
    continent: "",
    age: "",
    country: "",
    hasChildren: "",
    state: "",
    maritalStatus: "",
    minAge: 0,
    maxAge: 0,
    city: "",
    distance: "",
    smoker: "",
    drinker: "",
    ethnicity: "",
    denomination: "",
  });

  const [addFilter, setAddFilter] = useState<boolean>(false);
  return (
    <section className="w-full px-5  py-36 bg-[#F5F9FF] ">
      <div className="w-full md:container grid grid-cols-1 md:grid-cols-12 gap-10">
        <FilterSection
          addFilter={addFilter}
          setAddFilter={setAddFilter}
          filters={filters}
          setFilters={setFilters}
        />
        <DiscoverContent
          addFilter={addFilter}
          setAddFilter={setAddFilter}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
    </section>
  );
};

export default Discover;
