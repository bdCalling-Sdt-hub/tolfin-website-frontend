import InputComponent from "@/components/ui/InputComponent";
import useUser from "@/hooks/useUser";
import { useFillUpUserInfoMutation } from "@/redux/features/profile/profileApi";
import { Select, Input, Form } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
const { TextArea } = Input;
import moment from "moment";
import { TError } from "@/types/error";
import {
  useGetAllCountriesQuery,
  useGetCitiesQuery,
  useGetStatesQuery,
} from "@/redux/features/country/countryApi";

interface FormValues {
  gender: string;
  continent: string;
  country: string;
  state: string;
  city: string;
  dob: string;
  ethnicity: string;
  denomination: string;
  education: string;
  maritalStatus: string;
  haveChildren: string;
  smoker: string;
  drinker: string;
  hobby: string[];
  occupation: string;
  interests: string[];
  aboutMe: string;
}

interface TEditProfileProps {
  setIsProfileEdit: (value: boolean) => void;
}
const EditProfile = ({ setIsProfileEdit }: TEditProfileProps) => {
  const user = useUser();
  const [fillUpUserProfile] = useFillUpUserInfoMutation();
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [form] = Form.useForm<FormValues>();
  const [country, setCountry] = useState<string>("");
  const [state, setState] = useState<string>("");
  //get all country
  const { data: responseCountryData } = useGetAllCountriesQuery(undefined);
  const countries = responseCountryData?.data?.attributes;
  //get country by states
  const { data: responseStatesData } = useGetStatesQuery(country);
  const states = responseStatesData?.data?.attributes;
  //get city by states
  const { data: responseCitiesData } = useGetCitiesQuery({ country, state });
  const cities = responseCitiesData?.data?.attributes;

  useEffect(() => {
    if (user) {
      form.setFieldsValue(user);
      form.setFieldValue("dob", moment(user.dateOfBirth).format("YYYY-MM-DD"));
      setDateOfBirth(user.dateOfBirth);
    }
  }, [form, user]);
  const onFinish = async (values: FormValues) => {
    try {
      const formattedData = {
        ...values,
        dateOfBirth: moment(dateOfBirth).format("YYYY-MM-DD"),
      };
      await fillUpUserProfile(formattedData).unwrap();
      toast.success("User info updated successfully");
      setIsProfileEdit(false);
    } catch (error) {
      const err = error as TError;
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8 text-blue-600">
        Edit Your Profile
      </h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="w-full md:grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {/* Gender */}
        <Form.Item
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
              message: "Please gender",
            },
          ]}
        >
          <Select
            size="large"
            showSearch
            placeholder="Gender"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toString()
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
          />
        </Form.Item>

        {/* DOB */}
        <Form.Item
          label="Date of Birth"
          className="w-full"
          name="dob"
          rules={[
            {
              required: true,
              message: "Please select date of birth",
            },
          ]}
        >
          <InputComponent
            type="date"
            value={dateOfBirth} // Ensure this value is in "YYYY-MM-DD" format
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="w-full"
            placeholder="Date of Birth"
          />
        </Form.Item>

        {/* Continent */}
        <Form.Item
          label="Continent"
          name="continent"
          rules={[{ required: true, message: "Please select continent" }]}
        >
          <Select
            size="large"
            showSearch
            placeholder="Continent"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "Asia", label: "Asia" },
              { value: "Europe", label: "Europe" },
              { value: "Africa", label: "Africa" },
              { value: "North America", label: "North America" },
              { value: "South America", label: "South America" },
              { value: "Australia", label: "Australia" },
              { value: "Antarctica", label: "Antarctica" },
              { value: "Oceania", label: "Oceania" },
            ]}
          />
        </Form.Item>

        {/* Country */}
        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please select country" }]}
        >
          <Select
            size="large"
            showSearch
            onChange={(value) => setCountry(value)}
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
        </Form.Item>

        {/* State/Province */}
        <Form.Item label="Enter Your State/Province" name="state">
          <Select
            size="large"
            showSearch
            onChange={(value) => setState(value)}
            placeholder="State/Province"
            className="w-full"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toString()
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toString().toLowerCase())
            }
            options={states}
            disabled={!country}
          />
        </Form.Item>

        {/* City */}
        <Form.Item label="Enter Your City/Town" name="city">
          <Select
            size="large"
            showSearch
            placeholder="City/Town"
            className="w-full"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toString()
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toString().toLowerCase())
            }
            options={cities}
            disabled={!country || !state}
          />
        </Form.Item>
        {/* Address */}
        <Form.Item
          label="Enter Your Address"
          name="address"
          rules={[{ required: true, message: "Please enter your address" }]}
        >
          <InputComponent placeholder="Address" />
        </Form.Item>

        {/* Ethnicity */}
        <Form.Item
          label="Ethnicity"
          name="ethnicity"
          rules={[{ required: true, message: "Please select ethnicity" }]}
        >
          <Select
            size="large"
            showSearch
            placeholder="Ethnicity"
            className="w-full"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "African", label: "African" },
              { value: "Asian", label: "Asian" },
              { value: "Arab", label: "Arab" },
              { value: "Caucasian", label: "Caucasian" },
              { value: "Hispanic/Latino", label: "Hispanic/Latino" },
              { value: "Middle Eastern", label: "Middle Eastern" },
              { value: "Mixed Race", label: "Mixed Race" },
              { value: "Native American", label: "Native American" },
              { value: "Other", label: "Other" },
            ]}
          />
        </Form.Item>

        {/* Denomination */}
        <Form.Item
          label="Denomination"
          name="denomination"
          rules={[{ required: true, message: "Please select denomination" }]}
        >
          <Select
            size="large"
            showSearch
            placeholder="Denomination"
            className="w-full"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "Christian  Catholic", label: "Christian  Catholic" },
              {
                value: "Christian  Protestant",
                label: "Christian  Protestant",
              },
              { value: "Christian  Orthodox", label: "Christian  Orthodox" },
              {
                value: "Christian  Evangelical",
                label: "Christian  Evangelical",
              },
              {
                value: "Christian  Pentecostal",
                label: "Christian  Pentecostal",
              },
            ]}
          />
        </Form.Item>

        {/* Education */}
        <Form.Item
          label="Education"
          name="education"
          rules={[{ required: true, message: "Please select education" }]}
        >
          <Select
            size="large"
            showSearch
            placeholder="Education"
            className="w-full"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "High School", label: "High School" },
              { value: "Engineering", label: "Engineering" },
              { value: "Medicine", label: "Medicine" },
              { value: "Arts and Humanities", label: "Arts and Humanities" },
              {
                value: "Business and Management",
                label: "Business and Management",
              },
              { value: "Science", label: "Science" },
              { value: "Law", label: "Law" },
              {
                value: "Information Technology",
                label: "Information Technology",
              },
              { value: "Education", label: "Education" },
              { value: "Diploma", label: "Diploma" },
              { value: "Bachelor's Degree", label: "Bachelor's Degree" },
              { value: "Master's Degree", label: "Master's Degree" },
              { value: "PhD/Doctorate", label: "PhD/Doctorate" },
              { value: "Other", label: "Other" },
            ]}
          />
        </Form.Item>

        {/* Marital Status */}
        <Form.Item
          label="Marital Status"
          name="maritalStatus"
          rules={[{ required: true, message: "Please select marital status" }]}
        >
          <Select
            size="large"
            showSearch
            placeholder="Marital Status"
            className="w-full"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "Single", label: "Single" },
              { value: "Divorced", label: "Divorced" },
              { value: "Widowed", label: "Widowed" },
            ]}
          />
        </Form.Item>
        {/* Occupation */}
        <Form.Item
          label="Enter Your Occupation"
          name="occupation"
          rules={[{ required: true, message: "Please enter your occupation" }]}
        >
          <InputComponent placeholder="Occupation" />
        </Form.Item>
        {/* Children */}
        <Form.Item
          label="Children"
          name="haveChildren"
          rules={[{ required: true, message: "Please select children" }]}
        >
          <Select
            size="large"
            showSearch
            placeholder="Children"
            className="w-full"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "No", label: "No" },
              { value: "Yes", label: "Yes" },
              { value: "Maybe", label: "Maybe" },
              { value: "Over 18", label: "Over 18" },
              { value: "No Stated", label: "No Stated" },
            ]}
          />
        </Form.Item>
        {/* Smoker */}
        <Form.Item
          label="Smoker"
          name="smoker"
          rules={[{ required: true, message: "Please select smoker" }]}
        >
          <Select
            size="large"
            showSearch
            placeholder="Smoker"
            className="w-full"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "No", label: "No" },
              { value: "Yes", label: "Yes" },
            ]}
          />
        </Form.Item>
        {/* Drink */}
        <Form.Item
          label="Drink"
          name="drinker"
          rules={[{ required: true, message: "Please select drinker" }]}
        >
          <Select
            size="large"
            showSearch
            placeholder="Drink"
            className="w-full"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "No", label: "No" },
              { value: "Yes", label: "Yes" },
            ]}
          />
        </Form.Item>

        {/* Hobby */}
        <Form.Item
          label="Hobby"
          name="hobby"
          className="col-span-full md:col-span-3"
          rules={[
            { required: true, message: "Please select at least one hobby" },
          ]}
        >
          <Select
            size="large"
            showSearch
            mode="multiple"
            placeholder="Hobby"
            className="w-full"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "Reading", label: "Reading" },
              { value: "Traveling", label: "Traveling" },
              { value: "Cooking", label: "Cooking" },
              { value: "Dancing", label: "Dancing" },
              { value: "Fishing", label: "Fishing" },
              { value: "Gardening", label: "Gardening" },
              { value: "Photography", label: "Photography" },
              { value: "Painting", label: "Painting" },
              { value: "Drawing", label: "Drawing" },
              { value: "Cycling", label: "Cycling" },
              { value: "Hiking", label: "Hiking" },
              { value: "Yoga", label: "Yoga" },
              { value: "Sports", label: "Sports" },
              { value: "Knitting", label: "Knitting" },
              { value: "Crafting", label: "Crafting" },
              { value: "Playing Music", label: "Playing Music" },
              { value: "Collecting", label: "Collecting" },
              { value: "Video Games", label: "Video Games" },
              { value: "Bird Watching", label: "Bird Watching" },
              { value: "Writing", label: "Writing" },
            ]}
          />
        </Form.Item>

        {/* Interest Tags */}
        <Form.Item
          label="Interests"
          name="interests"
          className="col-span-full md:col-span-3"
          rules={[
            {
              required: true,
              message: "Please select at least one interest",
            },
          ]}
        >
          <Select
            size="large"
            showSearch
            mode="tags"
            placeholder="Interests"
            className="w-full"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              { value: "Lying on the beach", label: "Lying on the beach" },
              { value: "Camping", label: "Camping" },
              { value: "Dancing", label: "Dancing" },
              { value: "Fishing & Hunting", label: "Fishing & Hunting" },
              { value: "Hockey", label: "Hockey" },
              { value: "Music & Concerts", label: "Music & Concerts" },
              { value: "Sailing", label: "Sailing" },
              { value: "Travelling", label: "Travelling" },
              { value: "Biking", label: "Biking" },
              { value: "Cars", label: "Cars" },
              { value: "Diving", label: "Diving" },
              { value: "Games", label: "Games" },
              { value: "Movies", label: "Movies" },
              { value: "Nature", label: "Nature" },
              { value: "Shopping", label: "Shopping" },
              { value: "Watching TV", label: "Watching TV" },
              { value: "Reading books", label: "Reading books" },
              { value: "Cooking", label: "Cooking" },
              { value: "Fashion", label: "Fashion" },
              { value: "Hobbies & Crafts", label: "Hobbies & Crafts" },
              { value: "Museums & Art", label: "Museums & Art" },
              { value: "Party & Night Clubs", label: "Party & Night Clubs" },
              { value: "Sports", label: "Sports" },
              { value: "Meditation & Yoga", label: "Meditation & Yoga" },
            ]}
          />
        </Form.Item>

        {/* Describe Yourself */}
        <Form.Item
          label="Describe Yourself"
          name="aboutMe"
          className="w-full col-span-full md:col-span-3"
          rules={[{ required: true, message: "Please describe yourself" }]}
        >
          <TextArea
            className="w-full"
            rows={6}
            placeholder="Write about yourself here"
          />
        </Form.Item>

        {/* Buttons */}
        <div className="col-span-3 flex gap-6 items-center mt-4">
          <Form.Item>
            <button
              type="submit"
              className="px-6 py-2 bg-primary hover:bg-[#193f72] transition-all duration-300 text-white rounded-lg"
            >
              Submit
            </button>
          </Form.Item>
          <Form.Item>
            <button
              onClick={() => setIsProfileEdit(false)}
              className="px-8 py-2 bg-rose-500 transition-all duration-300 text-white rounded-lg"
            >
              Cancel
            </button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default EditProfile;
