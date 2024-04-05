import React from 'react';
import {
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	getDay,
	subDays,
	format,
	isBefore,
} from 'date-fns';
import Button from './Button';

// Define the day of the week names
const dayOfWeekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

type classDate = {
	date: Date;
	currentPlayers: string[];
	playerLimit: number;
};

type calendarProps = {
	classDates?: classDate[];
};

export const mockClassDates: classDate[] = [
	{
		date: new Date('2024-04-14'),
		currentPlayers: ['joseph'],
		playerLimit: 4,
	},
	{
		date: new Date('2024-04-17'),
		currentPlayers: ['pieda', 'joseph'],
		playerLimit: 4,
	},
];

const Calendar = ({
	classDates = mockClassDates,
}: calendarProps): React.JSX.Element => {
	const currentDate = new Date();
	const firstDayOfMonth = startOfMonth(currentDate);
	const firstDayOfWeek = getDay(firstDayOfMonth); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
	const firstDayOfCalendar = subDays(firstDayOfMonth, firstDayOfWeek); // Shift back the necessary chunks
	const lastDayOfMonth = endOfMonth(currentDate);
	const daysOfMonth = eachDayOfInterval({
		start: firstDayOfCalendar,
		end: lastDayOfMonth,
	});

	console.log(firstDayOfWeek);

	return (
		<div className="grid grid-cols-7 gap-5">
			{dayOfWeekNames.map((day) => (
				<div
					key={day}
					className="calendar-header flex items-center justify-center"
				>
					{day}
				</div>
			))}
			{daysOfMonth.map((day, index) => {
				const isClassDate = classDates?.some((classDate) => {
					return classDate.date.toDateString() === day.toDateString();
				});
				const isBeforeMonth = isBefore(day, firstDayOfMonth);

				if (isBeforeMonth) {
					return (
						<div
							key={index}
							className="calendar-day flex items-center justify-center text-slate-400 p-1"
						>
							{format(day, 'd')}
						</div>
					);
				}

				if (isClassDate) {
					// console.log(day.toDateString(), classDates[0].date.toDateString());
					const classInfo = classDates.filter(
						(classDate) =>
							classDate.date.toDateString() === day.toDateString()
					)[1];
					// console.log(classInfo);
					const isEnable =
						classInfo?.currentPlayers?.length <=
						classInfo?.playerLimit;
					return (
						<div className="calendar-day flex items-center justify-center">
							<Button className="w-8 h-8" disabled={!isEnable}>
								{format(day, 'd')}
							</Button>
						</div>
					);
				}

				return (
					<div
						key={index}
						className="calendar-day flex items-center justify-center p-1"
					>
						{format(day, 'd')}
					</div>
				);
			})}
		</div>
	);
};

export default Calendar;
