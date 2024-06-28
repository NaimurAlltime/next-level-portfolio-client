"use client";
import { useGetLocationsQuery } from "@/redux/features/location/location.api";
import FormSelectField, { SelectOptions } from "./FormSelectField";

type Props = {
  name: string;
  label?: string;
  size?: "small" | "large" | undefined;
};

const LocationSelect = ({ name, label, size = "large" }: Props) => {
  const { data, isLoading } = useGetLocationsQuery({});
  const location = data?.locations;
  const options: SelectOptions[] = !location
    ? []
    : location?.map((item) => {
        return {
          label: item?.name,
          value: item?._id,
        };
      });

  return <FormSelectField loading={isLoading} name={name} label={label} size={size} options={options} />;
};

export default LocationSelect;
