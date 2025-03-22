"use client";
import { Collapse, Checkbox, Input, Select } from "antd";
import { HiOutlineXMark } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { IFilters } from "../Discover";
import { useGetAllCountriesQuery } from "@/redux/features/country/countryApi";
import useUser from "@/hooks/useUser";

interface IFilterSectionProps {
  addFilter: boolean;
  setAddFilter: React.Dispatch<React.SetStateAction<boolean>>;
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

const FilterSection = ({
  addFilter,
  setAddFilter,
  filters,
  setFilters,
}: IFilterSectionProps) => {
  const router = useRouter();
  const user = useUser();
  //get all country
  const { data: responseCountryData } = useGetAllCountriesQuery(undefined);
  const countries = responseCountryData?.data?.attributes;

  // Function to handle filter change (checked or unchecked)
  const handleFilterChange = <K extends keyof IFilters>(
    filter: K,
    value: IFilters[K],
    checked: boolean
  ) => {
    const currentQuery = new URLSearchParams(window.location.search);
    if (filter === "age") {
      let minAge = 0;
      let maxAge = 0;

      switch (value) {
        case "18 - 33":
          minAge = 18;
          maxAge = 33;
          break;
        case "34 - 49":
          minAge = 34;
          maxAge = 49;
          break;
        case "50 and above":
          minAge = 50;
          break;
        default:
          break;
      }
      setFilters((prevFilters) => ({
        ...prevFilters,
        minAge,
        maxAge,
      }));
    }
    // Update filters state
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
        if (value === "") {
          delete updatedFilters[filter];
        }
        updatedFilters[filter] = value;
      } else {
        delete updatedFilters[filter];
        if (filter === "age") {
          updatedFilters.minAge = 0;
          updatedFilters.maxAge = 0;
        }
      }
      return updatedFilters;
    });

    if (value === "") {
      currentQuery.delete(filter);
    } else if (checked) {
      if (filter !== "age") {
        currentQuery.set(filter, value.toString());
      }
      if (filter === "age") {
        currentQuery.set("minAge", filters.minAge.toString());
        currentQuery.set("maxAge", filters.maxAge.toString());
      }
    } else {
      currentQuery.delete(filter);
      if (filter === "age") {
        currentQuery.delete("minAge");
        currentQuery.delete("maxAge");
      }
    }

    // Update the URL
    router.push(`/singles?${currentQuery.toString()}`, { scroll: false });
  };

  // Function to handle the reset of filters
  const handleResetFilters = () => {
    setFilters({
      gender: "",
      age: "",
      continent: "",
      maxAge: 0,
      minAge: 0,
      country: "",
      city: "",
      maritalStatus: "",
      distance: "",
      state: "",
      ethnicity: "",
      drinker: "",
      denomination: "",
      hasChildren: "",
      smoker: "",
    });
    const currentQuery = new URLSearchParams(window.location.search);
    currentQuery.delete("gender");
    currentQuery.delete("age");
    currentQuery.delete("continent");
    currentQuery.delete("country");
    currentQuery.delete("minAge");
    currentQuery.delete("maxAge");
    currentQuery.delete("maritalStatus");
    currentQuery.delete("distance");
    currentQuery.delete("ethnicity");
    currentQuery.delete("denomination");
    currentQuery.delete("hasChildren");
    currentQuery.delete("smoker");
    router.push(`/singles?${currentQuery.toString()}`, { scroll: false });
  };

  const basicFilters = [
    {
      key: "1",
      label: <h1 className="text-lg text-gray-600">Gender</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {["Male", "Female"].map((gender) => (
            <Checkbox
              key={gender}
              checked={filters?.gender === gender}
              onChange={(e) =>
                handleFilterChange("gender", gender, e.target.checked)
              }
            >
              {gender}
            </Checkbox>
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: <h1 className="text-lg text-gray-600">Age Group</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {["18 - 33", "34 - 49", "50 and above"].map((age) => (
            <Checkbox
              key={age}
              checked={filters.age === age}
              onChange={(e) => handleFilterChange("age", age, e.target.checked)}
            >
              {age}
            </Checkbox>
          ))}
        </div>
      ),
    },
    {
      key: "4",
      label: <h1 className="text-lg text-gray-600">Country</h1>,
      children: (
        <Select
          size="large"
          showSearch
          onChange={(value) => handleFilterChange("country", value, true)}
          placeholder="Country"
          className="w-full"
          optionFilterProp="label"
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toString()
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toString().toLowerCase())
          }
          options={countries}
          disabled={!countries}
        />
      ),
    },
    {
      key: "5",
      label: <h1 className="text-lg text-gray-600">Marital Status</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {["Single", "Divorced", "Widowed"].map((status) => (
            <Checkbox
              key={status}
              checked={filters.maritalStatus === status}
              onChange={(e) =>
                handleFilterChange("maritalStatus", status, e.target.checked)
              }
            >
              {status}
            </Checkbox>
          ))}
        </div>
      ),
    },
  ];

  const advancedFilters = [
    {
      key: "3",
      label: <h1 className="text-lg text-gray-600">Continent</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {[
            "Asia",
            "Africa",
            "Arab",
            "Europe",
            "North America",
            "South America",
            "Australia",
            "Antarctica",
          ].map((continent) => (
            <Checkbox
              key={continent}
              checked={filters?.continent === continent}
              onChange={(e) =>
                handleFilterChange("continent", continent, e.target.checked)
              }
            >
              {continent}
            </Checkbox>
          ))}
        </div>
      ),
    },
    {
      key: "6",
      label: <h1 className="text-lg text-gray-600">Have Children at Home</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {["Yes", "No"].map((hasChildren) => (
            <Checkbox
              key={hasChildren}
              checked={filters.hasChildren === hasChildren}
              onChange={(e) =>
                handleFilterChange("hasChildren", hasChildren, e.target.checked)
              }
            >
              {hasChildren}
            </Checkbox>
          ))}
        </div>
      ),
    },
    {
      key: "7",
      label: <h1 className="text-lg text-gray-600">Smoker</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {["Yes", "No"].map((smoker) => (
            <Checkbox
              key={smoker}
              checked={filters.smoker === smoker}
              onChange={(e) =>
                handleFilterChange("smoker", smoker, e.target.checked)
              }
            >
              {smoker}
            </Checkbox>
          ))}
        </div>
      ),
    },
    {
      key: "8",
      label: <h1 className="text-lg text-gray-600">Drinker</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {["Yes", "No"].map((drinker) => (
            <Checkbox
              key={drinker}
              checked={filters.drinker === drinker}
              onChange={(e) =>
                handleFilterChange("drinker", drinker, e.target.checked)
              }
            >
              {drinker}
            </Checkbox>
          ))}
        </div>
      ),
    },
    {
      key: "9",
      label: <h1 className="text-lg text-gray-600">Distance Within</h1>,
      children: (
        <div className="space-y-2">
          <Input
            type="number"
            size="large"
            min="1"
            max="500"
            value={filters.distance}
            onChange={(e) =>
              handleFilterChange("distance", e.target.value, true)
            }
            addonAfter="kms"
          />
        </div>
      ),
    },
    {
      key: "10",
      label: <h1 className="text-lg text-gray-600">Ethnicity</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {["Asian", "Caucasian", "African", "Hispanic", "Arab"].map(
            (ethnicity) => (
              <Checkbox
                key={ethnicity}
                checked={filters.ethnicity === ethnicity}
                onChange={(e) =>
                  handleFilterChange("ethnicity", ethnicity, e.target.checked)
                }
              >
                {ethnicity}
              </Checkbox>
            )
          )}
        </div>
      ),
    },
    {
      key: "11",
      label: <h1 className="text-lg text-gray-600">Denomination</h1>,
      children: (
        <div className="flex flex-col gap-3">
          {[
            "Christian  Catholic",
            "Christian  Protestant",
            "Christian  Orthodox",
            "Christian  Evangelical",
            "Christian  Pentecostal",
          ].map((denomination) => (
            <Checkbox
              key={denomination}
              checked={filters.denomination === denomination}
              onChange={(e) =>
                handleFilterChange(
                  "denomination",
                  denomination,
                  e.target.checked
                )
              }
            >
              {denomination}
            </Checkbox>
          ))}
        </div>
      ),
    },
  ];
  const collapseItems = user
    ? [...basicFilters, ...advancedFilters]
    : basicFilters;

  // const collapseItems = user
  //   ? user?.isSubscribed
  //     ? [...basicFilters, ...advancedFilters]
  //     : basicFilters
  //   : basicFilters;

  return (
    <section
      className={`w-full col-span-full md:col-span-3 ${
        addFilter ? "block" : "hidden"
      }`}
    >
      <div className="shadow-md rounded-lg bg-white">
        <div className="w-full p-5">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={() => setAddFilter(false)}>
              <HiOutlineXMark className="size-6 text-gray-500" />
            </button>
          </div>
          <div className="flex justify-between items-center mt-5">
            <h1 className="text-lg text-gray-600">
              {user ? "Advanced Filters" : "Basic Filters"}
            </h1>
            <h1
              className="text-primary font-semibold cursor-pointer"
              onClick={handleResetFilters}
            >
              Reset All
            </h1>
          </div>
        </div>
        <Collapse
          defaultActiveKey={[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
          ]}
          expandIconPosition="start"
          ghost
          items={collapseItems}
          className="pb-10"
        />
      </div>
    </section>
  );
};

export default FilterSection;
