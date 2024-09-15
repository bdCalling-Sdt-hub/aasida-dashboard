import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TMRSelectProps = {
  label: string;
  name: string;
  disabled?: boolean;
  mode?: "multiple" | "tags" | undefined;
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

const MRSelect = ({
  label,
  name,
  options,
  defaultValue,
  placeholder,
  disabled,
  mode,
}: TMRSelectProps) => {
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

export default MRSelect;
