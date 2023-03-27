import { ReactNode } from 'react';
import { useForm, UseFormReturn, SubmitHandler, UseFormProps, FieldValues, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, ZodTypeDef } from 'zod';
import clsx from 'clsx';

// * types
type FormProps<TFormValues extends FieldValues, Schema> = {
  id?: string;
  schema: Schema;
  className?: string;
  options?: UseFormProps<TFormValues>;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => ReactNode;
}

const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >
>({
  id,
  schema,
  className,
  options,
  onSubmit,
  children,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm({
    ...options,
    resolver: schema && zodResolver(schema),
  });

  return (
    <form
      id={id}
      className={clsx('flex flex-col gap-y-6', className)}
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      {children(methods)}
    </form>
  );
};

export default Form;
