import { Form, TimePicker } from "antd";
import { Dayjs } from "dayjs";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
  placeholder?: string;
  format: string;
  defaultValue?: Dayjs | undefined;
};

const MRTimePicker = ({ name, label, placeholder, format, defaultValue }: TDatePickerProps) => {
  return (
    <div style={{ width: "100%" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => {
          return (
            <Form.Item label={label}>
              <TimePicker
                placeholder={placeholder}
                {...field}
                id={name}
                defaultValue={defaultValue}
                format={format}
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

export default MRTimePicker;
