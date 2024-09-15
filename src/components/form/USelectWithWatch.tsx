import { Form, Select } from "antd";
import React, { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type TMRSelectProps = {
  label: string;
  name: string;
  disabled?: boolean;
  mode?: "multiple" | "tags" | undefined;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
  options:
    | {
        value: string;
        label: string;
        disabled?: boolean;
      }[]
    | undefined;
  defaultValue?: string;
  placeholder?: string;
};

const MRSelectWithWatch = ({
  label,
  name,
  options,
  defaultValue,
  placeholder,
  disabled,
  mode,
  onValueChange,
}: TMRSelectProps) => {
  const { control } = useFormContext();
  const inputValue = useWatch({
    control,
    name,
  });

  useEffect(() => {
    onValueChange(inputValue);
  }, [inputValue, onValueChange]);

  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <Form.Item label={label}>
            <Select
              disabled={disabled}
              defaultValue={defaultValue}
              placeholder={placeholder}
              style={{ width: "100%" }}
              mode={mode}
              {...field}
              options={options}
            />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        );
      }}
    />
  );
};

export default MRSelectWithWatch;
