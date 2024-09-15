import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
};

const MRInput = ({ type, name, label, placeholder }: TInputProps) => {
  return (
    <div style={{ width: "100%" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => {
          return (
            <Form.Item label={label}>
              <Input placeholder={placeholder} {...field} type={type} id={name} />
              {error && <small style={{ color: "red" }}>{error.message}  </small>}
            </Form.Item>
          );
        }}
      />
    </div>
  );
};

export default MRInput;
