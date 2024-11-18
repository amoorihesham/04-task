import { useTranslation } from 'react-i18next';

const NumbersOfSessions = ({ sessions }: { sessions: number }) => {
  const { t } = useTranslation();
  return (
    <p className='font-bold text-muted-foreground uppercase flex justify-between items-center text-sm'>
      {t('order.monthly_session')} <span className='text-black'>{sessions}</span>
    </p>
  );
};

export default NumbersOfSessions;
