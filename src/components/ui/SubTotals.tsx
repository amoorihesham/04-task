import { memo } from 'react';
import NumbersOfSessions from './NumbersOfSessions';
import { NumericFormat } from 'react-number-format';
import { PriceDetails } from '@/types/types';
import { useTranslation } from 'react-i18next';

const SubTotals = ({ sessions, prices }: { sessions: number; prices: PriceDetails }) => {
  const { t } = useTranslation();
  return (
    <div className='mt-8  space-y-3'>
      <NumbersOfSessions sessions={sessions} />
      <p className='font-bold text-muted-foreground uppercase flex justify-between items-center text-sm'>
        {t('order.regular_price')}
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
        {t('order.your_price')}
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
        {t('order.discount_amount')} 4 %
        <span className='text-green-500 '>
          <NumericFormat
            value={-prices.afterDiscount}
            displayType='text'
            suffix='$'
          />
        </span>
      </p>
    </div>
  );
};

export default memo(SubTotals);
