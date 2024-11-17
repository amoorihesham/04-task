import { FormType } from '@/schemas/FormType';
import { Button } from './button';
import { Checkbox } from './checkbox';
import { Label } from './label';
import { Separator } from './separator';
import { Switch } from './switch';
import { NumericFormat } from 'react-number-format';
import { useCallback, useEffect, useState } from 'react';
import calcPrices from '@/utils/calcPrices';

const OrderSummary = ({ form, dir }: { form: any; dir: 'ltr' | 'rtl' }) => {
  const [formValues, setFormValues] = useState<FormType>(form.getValues());
  const [prices, setPrices] = useState(calcPrices(formValues.monthly_sessions, 8.26, 4));

  return (
    <div
      className='flex-1 bg-slate-100 px-5 py-6'
      dir={dir}>
      <h2 className='text-xs font-bold text-black uppercase'>Order Overview</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 mt-5'>
        <div className='p-3 bg-white uppercase font-semibold text-muted-foreground text-xs text-center cursor-pointer hover:bg-slate-50 transition-colors duration-300'>
          6 months
        </div>
        <div className='p-3 bg-white uppercase font-semibold text-muted-foreground text-xs text-center cursor-pointer hover:bg-slate-50 transition-colors duration-300'>
          9 months
        </div>
        <div className='p-3 bg-white uppercase font-semibold text-muted-foreground text-xs text-center cursor-pointer hover:bg-slate-50 transition-colors duration-300'>
          12 months
        </div>
        <div className='p-3 bg-white uppercase font-semibold text-muted-foreground text-xs text-center cursor-pointer hover:bg-slate-50 transition-colors duration-300'>
          18 months
        </div>
        <div className='p-3 bg-white uppercase font-semibold text-muted-foreground text-xs text-center cursor-pointer hover:bg-slate-50 transition-colors duration-300'>
          24 months
        </div>
        <div className='p-3 bg-white uppercase font-semibold text-muted-foreground text-xs text-center cursor-pointer hover:bg-slate-50 transition-colors duration-300'>
          36 months
        </div>
      </div>

      <div className='flex  mt-5 gap-3'>
        <Switch
          onCheckedChange={() => {
            setPrices((prev) => {
              return { ...prev, totalPrice: prices.totalPrice - 1 };
            });
          }}
        />
        <Label className=' capitalize text-sm font-semibold'>pay in advance with 5% Discount</Label>
      </div>
      <div className='mt-8  space-y-3'>
        <p className='font-bold text-muted-foreground uppercase flex justify-between items-center text-sm'>
          Number of session p.m <span className='text-black'>{formValues.monthly_sessions}</span>
        </p>
        <p className='font-bold text-muted-foreground uppercase flex justify-between items-center text-sm'>
          regular price{' '}
          <span className='text-black line-through'>
            <NumericFormat
              value={prices.regularPrice}
              thousandSeparator
              displayType='text'
              suffix='$'
            />
          </span>
        </p>
        <p className='font-bold text-muted-foreground uppercase flex justify-between items-center text-sm'>
          your price
          <span className='text-black '>
            <NumericFormat
              value={prices.yoursPrice}
              thousandSeparator
              displayType='text'
              suffix='$'
            />
          </span>
        </p>
        <p className='font-bold text-green-500 uppercase flex justify-between items-center text-sm'>
          discount 4 %
          <span className='text-green-500'>
            <NumericFormat
              value={-prices.afterDiscount}
              displayType='text'
              suffix='$'
            />
          </span>
        </p>
      </div>
      <Separator className='my-5' />
      <div className=' space-y-5'>
        <p className='font-bold text-muted-foreground uppercase flex justify-between items-center text-sm'>
          setup fee{' '}
          <span className='text-blue-700'>
            <NumericFormat
              value={0}
              displayType='text'
              suffix='$'
            />
          </span>
        </p>
        <p className='font-bold text-muted-foreground uppercase flex justify-between items-center text-sm'>
          total p.m{' '}
          <span className='text-blue-700'>
            <NumericFormat
              value={prices.totalPrice}
              suffix='$'
              displayType='text'
            />
          </span>
        </p>
        <div className='flex gap-3 items-center'>
          <Checkbox />
          <p>i accept terms & conditions and understand my rights of withdraw</p>
        </div>
      </div>
      <Button
        className='bg-green-600 w-full mt-7 hover:bg-green-700'
        onClick={form.handleSubmit}
        type='submit'>
        Order Now
      </Button>
    </div>
  );
};

export default OrderSummary;
