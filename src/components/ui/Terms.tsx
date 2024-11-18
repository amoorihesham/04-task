import { useTranslation } from 'react-i18next';
import { Checkbox } from './checkbox';

const Terms = () => {
  const { t } = useTranslation();
  return (
    <div className='flex gap-3 items-center mt-5'>
      <Checkbox />
      <p className='text-muted-foreground max-w-[400px] text-sm'>{t('order.terms')}</p>
    </div>
  );
};

export default Terms;
