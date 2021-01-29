import { getDurationStr } from './get-duration-str';

describe('CourseVolumeData', () => {
  describe('getDurationStr', () => {
    it('should return duration as is for seconds less then 5 minutes', () => {
      expect(getDurationStr(245)).toBe('4 minutes');
    });

    it('should return seconds rounded up (to 10 or 5) for seconds more then 5 minutes', () => {
      expect(getDurationStr(310)).toBe('10 minutes');
      expect(getDurationStr(14338)).toBe('4 hours');
      expect(getDurationStr(3598)).toBe('1 hour');
    });

    it('should return "1 minute" for seconds less then minute', () => {
      expect(getDurationStr(1)).toBe('1 minute');
    });

    it('should return duration with "minute" for 60 seconds', () => {
      expect(getDurationStr(60)).toBe('1 minute');
    });

    it('should return duration with "minutes" for 120 seconds', () => {
      expect(getDurationStr(120)).toBe('2 minutes');
    });

    it('should return duration with "hour" for 3600 seconds', () => {
      expect(getDurationStr(3600)).toBe('1 hour');
    });

    it('should return duration with "hours" for 7200 seconds', () => {
      expect(getDurationStr(7200)).toBe('2 hours');
    });

    it('should return duration with "hour" and "minute" for 3660 seconds', () => {
      expect(getDurationStr(3660)).toBe('1 hour 5 minutes');
    });

    it('should return duration with "hour" and "minutes" for 4865 seconds', () => {
      expect(getDurationStr(4865)).toBe('1 hour 25 minutes');
    });

    it('should return duration with "hours" and "minutes" for 8465 seconds', () => {
      expect(getDurationStr(8465)).toBe('2 hours 25 minutes');
    });
  });
});
