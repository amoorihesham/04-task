import { useTranslation } from 'react-i18next';

const MonthPlan = () => {
  const { t } = useTranslation();
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 mt-5'>
      <div className='active:bg-red-300 p-3 bg-white uppercase font-semibold text-muted-foreground text-xs text-center cursor-pointer hover:bg-slate-50 transition-colors duration-300'>
        {t('order.6m')}
      </div>
      <div className='p-3 bg-white uppercase font-semibold text-muted-foreground text-xs text-center cursor-pointer hover:bg-slate-50 transition-colors duration-300'>
        {' '}
        {t('order.9m')}
      </div>
      <div className='p-3 bg-white uppercase font-semibold text-muted-foreground text-xs text-center cursor-pointer hover:bg-slate-50 transition-colors duration-300'>
        {t('order.12m')}
      </div>
      <div className='p-3 bg-white uppercase font-semibold text-muted-foreground text-xs text-center cursor-pointer hover:bg-slate-50 transition-colors duration-300'>
        {t('order.18m')}
      </div>
      <div className='p-3 bg-white uppercase font-semibold text-muted-foreground text-xs text-center cursor-pointer hover:bg-slate-50 transition-colors duration-300'>
        {t('order.24m')}
      </div>
      <div className='p-3 bg-white uppercase font-semibold text-muted-foreground text-xs text-center cursor-pointer hover:bg-slate-50 transition-colors duration-300'>
        {t('order.36m')}
      </div>
    </div>
  );
};

export default MonthPlan;
