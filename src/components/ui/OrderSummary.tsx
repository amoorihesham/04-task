import { FormType } from '@/schemas/FormType';
import { Button } from './button';
import { useEffect, useState } from 'react';
import calcPrices from '@/utils/calcPrices';
import MonthPlan from './MonthPlan';
import PayInAdvance from './PayInAdvance';
import SubTotals from './SubTotals';
import FinalTotals from './FinalTotals';
import { PriceDetails } from '@/types/types';
import { Separator } from './separator';
import Terms from './Terms';
import { useFormContext } from 'react-hook-form';
import { useChangeLanguage } from '@/context/Language';
import { useTranslation } from 'react-i18next';

const OrderSummary = () => {
  const { direction } = useChangeLanguage();
  const { t } = useTranslation();
  const { watch, getValues } = useFormContext();
  const [formValues] = useState<FormType>(getValues() as FormType);
  const [prices, setPrices] = useState<PriceDetails>(calcPrices(formValues.monthly_sessions, 8.26, 4));
  const currentSessions: number = watch('monthly_sessions');
  useEffect(() => {
    setPrices(calcPrices(currentSessions, 8.26, 4));
  }, [currentSessions]);

  return (
    <div className={`flex-1 bg-slate-100 px-5 py-6 ${direction === 'ltr' ? 'text-left' : 'text-right'}`}>
      <h2 className='text-xs font-bold text-black uppercase'>{t('order.overview')}</h2>
      <MonthPlan />
      <PayInAdvance
        prices={prices}
        setPrices={setPrices}
      />
      <SubTotals
        sessions={currentSessions}
        prices={prices}
      />
      <Separator className='my-5' />
      <div className=' space-y-5'>
        <FinalTotals prices={prices} />
        <Terms />
      </div>
      <Button
        className='bg-green-600 w-full mt-7 hover:bg-green-700'
        type='submit'>
        Order Now
      </Button>
    </div>
  );
};

export default OrderSummary;
