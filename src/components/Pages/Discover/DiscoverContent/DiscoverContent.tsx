import DiscoverCard from "../DiscoverCard/DiscoverCard";
import { useGetAllDiscoverUserQuery } from "@/redux/features/discover/discoverApi";
import { TUser } from "@/types/user.Type";
import { IFilters } from "../Discover";
import useUser from "@/hooks/useUser";
import { useState } from "react";
import { Select, Pagination, Input, Drawer, Checkbox, Collapse } from "antd";
import DiscoverCardSkeleton from "../DiscoverCard/DiscoverCardSkeleton";
import { MdFilterList } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useGetAllCountriesQuery } from "@/redux/features/country/countryApi";

interface IDiscoverContentProps {
  addFilter: boolean;
  setAddFilter: React.Dispatch<React.SetStateAction<boolean>>;
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

const DiscoverContent = ({
  addFilter,
  setAddFilter,
  filters,
  setFilters,
}: IDiscoverContentProps) => {
  const user = useUser();
  const [visible, setVisible] = useState(false); // State to control Drawer visibility
  const [sortBy, setSortBy] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  //get all country
  const { data: responseCountryData } = useGetAllCountriesQuery(undefined);
  const countries = responseCountryData?.data?.attributes;
  const router = useRouter();

  const { data: responseData, isLoading } = useGetAllDiscoverUserQuery({
    //filter age properties remove to add all filters
    gender: filters.gender,
    minAge: filters.minAge,
    maxAge: filters.maxAge,
    continent: filters.continent,
    country: filters.country,
    maritalStatus: filters.maritalStatus,
    hasChildren: filters.hasChildren,
    smoker: filters.smoker,
    distance: filters.distance,
    ethnicity: filters.ethnicity,
    denomination: filters.denomination,
    userId: user?._id,
    fullName: search,
    sortBy,
    page: currentPage, // Pass current page
    limit: 12, // Limit the results to 12 per page
  });

  const allDiscoverUser = responseData?.data?.attributes?.results;
  const totalResults = responseData?.data?.attributes?.totalResults;

  let content = null;
  if (isLoading) {
    content = (
      <div
        className={`w-full grid grid-cols-1 ${
          addFilter
            ? "md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 "
            : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        } gap-x-5 gap-y-10 my-5`}
      >
        {Array(8)
          .fill(0)
          .map((_, idx) => (
            <DiscoverCardSkeleton key={idx} />
          ))}
      </div>
    );
  } else if (allDiscoverUser?.length <= 0) {
    content = (
      <h1 className="text-2xl font-semibold text-center">No Data Found</h1>
    );
  } else if (allDiscoverUser?.length > 0) {
    content = (
      <div
        className={`w-full grid grid-cols-1 ${
          addFilter
            ? "md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 "
            : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        } gap-x-5 gap-y-10 my-5`}
      >
        {allDiscoverUser?.map((discover: TUser) => (
          <DiscoverCard key={discover._id} discover={discover} />
        ))}
      </div>
    );
  }

  // Function to show the Drawer
  const showDrawer = () => {
    setVisible(true);
  };

  // Function to close the Drawer
  const onClose = () => {
    setVisible(false);
  };

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
    onClose();
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
    onClose();
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
  return (
    <section
      className={`w-full col-span-full  ${
        addFilter ? "md:col-span-9" : "md:col-span-12"
      }`}
    >
      {addFilter ? (
        <div className="flex justify-between items-center">
          <h1>Showing all {allDiscoverUser?.length} results</h1>
          <div className="flex items-center gap-3">
            <h1>SortBy</h1>
            <Select
              options={[
                { value: "-createdAt", label: "Newest" },
                { value: "createdAt", label: "Oldest" },
              ]}
              defaultValue="-createdAt"
              onChange={(e) => setSortBy(e)}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
          <button
            onClick={() => setAddFilter(true)}
            className="hidden md:block px-6 py-2 rounded-lg border"
          >
            Filters
          </button>
          <div className="flex justify-between items-center gap-2">
            <Input
              placeholder="Search for people"
              className="w-full md:w-72"
              size="large"
              onChange={(e) => setSearch(e.target.value)}
              allowClear
            />
            <button
              onClick={showDrawer}
              className=" md:hidden w-12 h-10 rounded flex justify-center items-center bg-primary "
            >
              <MdFilterList className="size-5 text-white" />
            </button>
            <Drawer
              title={
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-semibold">Filter</h1>
                  <div className="flex gap-5 items-center">
                    <h1
                      onClick={handleResetFilters}
                      className="text-sm text-gray-600"
                    >
                      Clear Filter
                    </h1>
                  </div>
                </div>
              }
              placement="right"
              onClose={onClose}
              open={visible}
              footer={null}
            >
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
            </Drawer>
          </div>
        </div>
      )}

      {content}

      {/* Pagination component */}
      {totalResults !== 0 && totalResults > 12 && (
        <div className="flex justify-center mt-5">
          <Pagination
            current={currentPage}
            total={totalResults}
            pageSize={12}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
          />
        </div>
      )}
    </section>
  );
};

export default DiscoverContent;
