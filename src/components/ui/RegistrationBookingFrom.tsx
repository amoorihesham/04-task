import { useFormContext } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form';
import { Input } from './input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from './label';
import { COUNTRIES_OPTIONS, PAYMENT_OPTIONS, SESSION_OPTIONS } from '@/utils/constants';
import { useTranslation } from 'react-i18next';
import { useChangeLanguage } from '@/context/Language';

const RegistrationBookingFrom = () => {
  const { control, getValues } = useFormContext();
  const { t } = useTranslation();
  const { direction } = useChangeLanguage();
  return (
    <div className='flex-1 bg-white p-5'>
      <div className='text-center mb-5'>
        <h2 className='text-2xl font-bold text-black'>{t('form.heading')}</h2>
        <p className='text-muted-foreground text-md mt-1 font-light'>{t('form.subHeading')}</p>
      </div>
      <div
        className={`space-y-3 ${direction === 'ltr' ? 'text-left' : 'text-right'}`}
        dir={direction}>
        <FormField
          control={control}
          name='login_number'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>
                {t('form.login_number')} <span className='text-black normal-case'> (preferable the student's)</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='text'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name='contact_number'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>
                {t('form.contact_number')} <span className='text-black normal-case'> (preferable the student's)</span>
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
          name='contact_email'
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>
                {t('form.contact_email')} <span className='text-black normal-case'> (preferable the student's)</span>
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
          name='contact_name'
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>{t('form.contact_name')}</FormLabel>
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
        <div className='flex items-center gap-4'>
          <FormField
            name='billing_address.address'
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>{t('form.address.billing_address')}</FormLabel>
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
            name='billing_address.nr'
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>{t('form.address.billing_number')}</FormLabel>
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
          <FormField
            name='billing_address.postalCode'
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>{t('form.address.postal_code')}</FormLabel>
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
        </div>
        <div className='flex items-center gap-4'>
          <FormField
            name='billing_address.city'
            control={control}
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>{t('form.address.city')}</FormLabel>
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
            name='billing_address.country'
            control={control}
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase p-0'>{t('form.address.country')}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Country' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {COUNTRIES_OPTIONS.map((country: string) => (
                      <SelectItem
                        value={country}
                        key={country}>
                        {country.toUpperCase()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          name='monthly_sessions'
          control={control}
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>{t('form.monthly_sessions')}</FormLabel>
              <Select
                onValueChange={(value) => field.onChange(Number(value))}
                defaultValue={String(field.value)}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Monthly Sessions' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {SESSION_OPTIONS.map((option: number, index: number) => (
                    <SelectItem
                      value={String(option)}
                      key={index}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='payment.method'
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>{t('form.payment.payment_method')}</FormLabel>
              <RadioGroup
                defaultValue={field.value}
                onValueChange={field.onChange}>
                {PAYMENT_OPTIONS.map((option: string, index: number) => (
                  <div
                    className={`flex items-center space-x-2 ${direction === 'en' ? 'justify-end' : 'justify-start'}`}
                    key={index}>
                    <RadioGroupItem
                      value={option}
                      id={option}
                    />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </FormItem>
          )}
        />
        {getValues().payment.method === 'visa' ? (
          <div>
            <FormField
              control={control}
              name='payment.cardHolder'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>{t('form.payment.card_holder')}</FormLabel>
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
              control={control}
              name='payment.cardNumber'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel className='m-0 text-xs text-muted-foreground font-bold uppercase'>{t('form.payment.card_number')}</FormLabel>
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
    </div>
  );
};

export default RegistrationBookingFrom;
