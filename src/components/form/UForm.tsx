import { Form } from "antd";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

// @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
const MRForm = ({ onSubmit, children, defaultValues, resolver }) => {
  const formConfig = {};
  if (defaultValues) {
    // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form layout='vertical' onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default MRForm;
