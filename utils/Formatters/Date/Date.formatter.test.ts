import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FormatDate } from './Date.formatter';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

describe('utils/Formatters Date', () => {
	const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	beforeAll(() => {
		jest.useFakeTimers().setSystemTime(new Date('2025-02-04T12:00:00Z'));
	});

	afterAll(() => {
		jest.useRealTimers();
	});

	it('should return a humanized relative time for dates in the future', () => {
		const date = '2025-02-05T12:00:00Z';
		const result = FormatDate.getHumanizedDateTime(date);
		expect(result).toBe('in a day');
	});

	it('should return "yesterday at HH:mm" for dates one day ago, considering time zones', () => {
		const date = '2025-02-03T12:00:00Z';
		const expectedTime = dayjs(date).tz(userTimeZone).format('HH:mm');
		const result = FormatDate.getHumanizedDateTime(date);
		expect(result).toBe(`yesterday at ${expectedTime}`);
	});

	it('should return "X days ago at HH:mm" for dates more than one day ago but less than a week', () => {
		const date = '2025-02-01T12:00:00Z';
		const expectedTime = dayjs(date).tz(userTimeZone).format('HH:mm');
		const daysAgo = dayjs('2025-02-04T12:00:00Z').diff(dayjs(date), 'day');
		const result = FormatDate.getHumanizedDateTime(date);
		expect(result).toBe(`${daysAgo} days ago at ${expectedTime}`);
	});

	it('should return the date in DD.MM.YYYY format for dates more than a week ago', () => {
		const date = '2025-01-02T12:00:00Z';
		const expectedDate = dayjs(date).tz(userTimeZone).format('DD.MM.YYYY');
		const result = FormatDate.getHumanizedDateTime(date);
		expect(result).toBe(expectedDate);
	});
});

