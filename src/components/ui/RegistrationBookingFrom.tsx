import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form';
import { Input } from './input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from './label';
import { EyeClosedIcon } from 'lucide-react';

import OrderSummary from './OrderSummary';
import { z } from 'zod';
import formSchema from '@/schemas/FormSchemas';
import formDefaults from '@/schemas/FormDefaults';

const RegistrationBookingFrom = ({ dir }: { dir: 'ltr' | 'rtl' }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaults,
  });
  console.log(form.getValues());
  const onSubmit = async (data: any) => {
    console.log(data);
    console.log(form.getValues());
  };
  return (
    <Form {...form}>
      <form
        className='flex flex-col md:flex-row'
        onSubmit={form.handleSubmit(onSubmit)}
        dir={dir}>
        <div className='flex-1 bg-white p-5'>
          <div className='text-center mb-5'>
            <h2 className='text-2xl font-bold text-black'>Registration & Booking at GoStudent</h2>
            <p className='text-muted-foreground text-md mt-1 font-light'>The leading platform for online tutoring.</p>
          </div>
          <FormField
            control={form.control}
            name='login_number'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>
                  Login Phone Number <span className='text-black normal-case'> (preferable the student's)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className='m-0 outline-none'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='contact_number'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>
                  Contact Phone Number <span className='text-black normal-case'> (preferable the student's)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className='m-0 outline-none'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='contact_email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>
                  Contact email address <span className='text-black normal-case'> (preferable the student's)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className='m-0 outline-none'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='contact_name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>Contact name</FormLabel>
                <FormControl>
                  <Input
                    className='m-0 outline-none'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <div className='flex gap-3'>
              <FormField
                control={form.control}
                name='billing_address.address'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>billing address</FormLabel>
                    <FormControl>
                      <Input
                        className='m-0 outline-none'
                        placeholder='Address'
                        type='text'
                        {...field}
                      />
                    </FormControl>

                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='billing_address.nr'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>billing number</FormLabel>
                    <FormControl>
                      <Input
                        className='m-0 outline-none'
                        placeholder='Nr'
                        type='text'
                        {...field}
                      />
                    </FormControl>

                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex gap-3'>
              <FormField
                control={form.control}
                name='billing_address.postalCode'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <Input
                        className='m-0 outline-none'
                        placeholder='Postal Code'
                        type='text'
                        {...field}
                      />
                    </FormControl>

                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='billing_address.city'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <Input
                        className='m-0 outline-none'
                        placeholder='City'
                        type='text'
                        {...field}
                      />
                    </FormControl>

                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='billing_address.country'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Country' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='cairo'>Cairo</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name='monthly_sessions'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  defaultValue={String(field.value)}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Monthly Sessions' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='8'>8</SelectItem>
                    <SelectItem value='14'>14</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='payment.method'
            render={({ field }) => (
              <FormItem>
                <RadioGroup
                  defaultValue={field.value}
                  onValueChange={field.onChange}>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem
                      value='visa'
                      id='option-one'
                    />
                    <Label htmlFor='option-one'>
                      <img
                        src='/visa.png'
                        width={60}
                      />
                    </Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem
                      value='else'
                      id='option-two'
                    />
                    <Label htmlFor='option-two'>
                      <EyeClosedIcon />
                    </Label>
                  </div>
                </RadioGroup>
              </FormItem>
            )}
          />

          {form.getValues().payment.method === 'visa' ? (
            <div>
              <FormField
                control={form.control}
                name='payment.cardHolder'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <Input
                        className='m-0 outline-none'
                        placeholder='Card Holder'
                        type='text'
                        {...field}
                      />
                    </FormControl>

                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='payment.cardNumber'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <Input
                        className='m-0 outline-none'
                        placeholder='Card Number'
                        {...field}
                      />
                    </FormControl>

                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ) : null}
        </div>

        <OrderSummary
          form={form}
          dir={dir}
        />
      </form>
    </Form>
  );
};

export default RegistrationBookingFrom;
