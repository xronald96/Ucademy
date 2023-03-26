import { FormProvider, useForm } from "react-hook-form";

export const WrapperUseForm = (props: any) => {
  const formMethods = useForm();

  return <FormProvider {...formMethods}>{props.children}</FormProvider>;
};
