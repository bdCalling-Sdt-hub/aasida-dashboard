import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

const UDatePicker = ({ name, label, placeholder }: TDatePickerProps) => {
  return (
    <div style={{ width: "100%" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => {
          return (
            <Form.Item label={label}>
              <DatePicker
                placeholder={placeholder}
                {...field}
                id={name}
                style={{ width: "100%" }}
              />
              {error && <small style={{ color: "red" }}>{error.message} something </small>}
            </Form.Item>
          );
        }}
      />
    </div>
  );
};

export default UDatePicker;
