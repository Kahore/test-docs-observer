import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
export class FormatDate {
	public static getHumanizedDateTime(date: string): string {
		const dateObj = dayjs(date);
		const now = dayjs();

		const humanized = dateObj.fromNow();

		if (dateObj.isSame(now.subtract(1, 'day'), 'day')) {
			return `yesterday at ${dateObj.format('HH:mm')}`;
		} else if (dateObj.isBefore(now.subtract(1, 'day')) && dateObj.isAfter(now.subtract(1, 'week'))) {

			const daysAgo = dateObj.to(now, true);
			return `${daysAgo} ago at ${dateObj.format('HH:mm')}`;
		} else if (dateObj.isBefore(now.subtract(1, 'week'))) {

			return dateObj.format('DD.MM.YYYY');
		}

		return humanized;
	}
}


