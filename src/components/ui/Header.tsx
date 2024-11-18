import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Languages } from 'lucide-react';
import { useChangeLanguage } from '@/context/Language';

const Header = () => {
  const { changeLanguage, language } = useChangeLanguage();

  return (
    <div className='h-[60px] flex justify-center bg-gray-100 items-center'>
      <Select
        defaultValue={language}
        onValueChange={changeLanguage}>
        <SelectTrigger className='w-[300px]'>
          <Languages />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='en'>English</SelectItem>
          <SelectItem value='ar'>Arabic</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Header;
