import React from 'react';
import { Label } from './label';
import { Switch } from './switch';
import { PriceDetails } from '@/types/types';
import { useTranslation } from 'react-i18next';

const PayInAdvance = ({
  prices,
  setPrices,
}: {
  prices: PriceDetails;

  setPrices: React.Dispatch<PriceDetails>;
}) => {
  const { t } = useTranslation();
  return (
    <div className='flex  mt-5 gap-3'>
      <Switch
        onCheckedChange={(e) => {
          if (e) {
            setPrices({
              regularPrice: prices.regularPrice,
              yoursPrice: prices.yoursPrice,
              afterDiscount: prices.afterDiscount,
              totalPrice: prices.totalPrice - (prices.totalPrice * 5) / 100,
            });
          } else {
            setPrices({
              regularPrice: prices.regularPrice,
              yoursPrice: prices.yoursPrice,
              afterDiscount: prices.afterDiscount,
              totalPrice: prices.totalPrice,
            });
          }
        }}
      />
      <Label className=' capitalize text-sm font-semibold'>{t('order.pay_advance')}</Label>
    </div>
  );
};

export default PayInAdvance;
