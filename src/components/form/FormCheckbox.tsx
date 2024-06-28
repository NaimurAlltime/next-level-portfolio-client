import { setDropOff } from "@/redux/features/searchbox/searchboxSlice";
import { useAppDispatch } from "@/redux/hooks";
import { getErrorMessageByPropertyName } from "@/utils/Form/schemaValidator";
import { CSSProperties } from "@ant-design/cssinjs/lib/hooks/useStyleRegister";
import { Checkbox } from "antd";
import { useSearchParams } from "next/navigation";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

type CheckboxFieldProps = {
  name: string;
  label?: string;
  defaultValue?: boolean;
  loading?: boolean;
  style?: CSSProperties;
  handleChange?: (checked: boolean) => void;
};

const FormCheckboxField = ({ name, label, defaultValue, style, handleChange }: CheckboxFieldProps) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const searchParamsObj = Object.fromEntries(searchParams);
  const defaultValueP = searchParamsObj[name];

  const value = defaultValueP === "true" ? true : false;

  setValue(name, value);

  // Function to handle change events from the Checkbox
  const onCheckboxChange = (e: any) => {
    // Call the passed handleChange function with the new checked state
    if (handleChange) {
      handleChange(e.target.checked);
    }
    if (name === "dropOff") {
      dispatch(setDropOff(e.target.checked));
    }
  };

  // Get the error message for this field if any
  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Checkbox
            checked={field.value}
            onChange={(e) => {
              field.onChange(e.target.checked);
              onCheckboxChange(e);
            }}
            style={style as any}
          >
            {label}
          </Checkbox>
        )}
      />
      {errorMessage && <small style={{ color: "red" }}>{errorMessage}</small>}
    </>
  );
};

export default memo(FormCheckboxField);
