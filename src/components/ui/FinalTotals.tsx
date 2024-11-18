import { PriceDetails } from '@/types/types';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NumericFormat } from 'react-number-format';

const FinalTotals = ({ prices }: { prices: PriceDetails }) => {
  const { t } = useTranslation();
  return (
    <>
      <p className='font-bold text-muted-foreground uppercase flex justify-between items-center text-sm'>
        {t('order.setup_fee')}
        <span className='text-blue-700'>
          <NumericFormat
            value={0}
            displayType='text'
            suffix='$'
          />
        </span>
      </p>
      <p className='font-bold text-muted-foreground uppercase flex justify-between items-center text-sm'>
        {t('order.total_price')}
        <span className='text-blue-700'>
          <NumericFormat
            value={prices.totalPrice}
            suffix='$'
            displayType='text'
          />
        </span>
      </p>
    </>
  );
};

export default memo(FinalTotals);
