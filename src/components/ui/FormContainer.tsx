import RegistrationBookingFrom from './RegistrationBookingFrom';
import OrderSummary from './OrderSummary';
import { FormProvider, useForm } from 'react-hook-form';
import formSchema from '@/schemas/FormSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import formDefaults from '@/schemas/FormDefaults';
import { z } from 'zod';

const FormContainer = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaults,
    mode: 'all',
  });
  const onSubmit = async (data: any) => {
    /* Add Login Here When Submitting The Form */
    console.log(data);
  };
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col md:flex-row'>
        <RegistrationBookingFrom />
        <OrderSummary />
      </form>
    </FormProvider>
  );
};

export default FormContainer;
