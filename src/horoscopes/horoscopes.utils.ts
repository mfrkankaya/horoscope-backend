import { Horoscope } from './horoscope.model';

export const mapHoroscope = ({
  id,
  name,
  daily,
  weekly,
  monthly,
}: Horoscope) => ({ id, name, daily, weekly, monthly });

export const mapHoroscopeWithoutContent = ({ id, name }: Horoscope) => ({
  id,
  name,
});
