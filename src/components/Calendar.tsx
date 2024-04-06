import React, { useState, useRef } from 'react';
import { animated, useSpring } from '@react-spring/web';
import {
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	getDay,
	subDays,
	subMonths,
	addMonths,
	format,
	isBefore,
} from 'date-fns';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import Button from './Button';
import useWidth from '@/hooks/useWidth';

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

const CalendarContent = ({
	className,
	month,
	calendarWidth,
	classDates,
}: {
	className?: string;
	month: Date;
	calendarWidth: number;
	classDates: classDate[];
}) => {
	const firstDayOfMonth = startOfMonth(month);
	const firstDayOfWeek = getDay(firstDayOfMonth); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
	const firstDayOfCalendar = subDays(firstDayOfMonth, firstDayOfWeek); // Shift back the necessary chunks
	const lastDayOfMonth = endOfMonth(month);
	const daysOfMonth = eachDayOfInterval({
		start: firstDayOfCalendar,
		end: lastDayOfMonth,
	});

	return (
		<div className={`shrink-0 w-[${calendarWidth}px] ${className}`}>
			<div
				className={`grid grid-cols-7 gap-5 `}
				key={format(month, 'yyyy-MMMM')}
			>
				{daysOfMonth.map((day, index) => {
					const isBeforeMonth = isBefore(day, startOfMonth(month));
					const isAfterMonth = isBefore(endOfMonth(month), day);
					const isClassDate = classDates?.some((classDate) => {
						return (
							classDate.date.toDateString() === day.toDateString()
						);
					});

					if (isClassDate) {
						// console.log(day.toDateString(), classDates[0].date.toDateString());
						const classInfo = classDates.filter(
							(classDate) =>
								classDate.date.toDateString() ===
								day.toDateString()
						)[1];
						// console.log(classInfo);
						const isEnable =
							classInfo?.currentPlayers?.length <=
							classInfo?.playerLimit;
						return (
							<div className="calendar-day flex items-center justify-center">
								<Button className="w-8 h-8" disabled={isEnable}>
									{format(day, 'd')}
								</Button>
							</div>
						);
					}

					return (
						<div
							key={format(day, 'MMMM-dd')}
							className={`calendar-day flex items-center justify-center p-1 ${
								isBeforeMonth || isAfterMonth
									? 'text-slate-400'
									: ''
							}`}
						>
							{format(day, 'd')}
						</div>
					);
				})}
			</div>
		</div>
	);
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
	const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());
	const [prevMonth, setPrevMonth] = useState<Date | undefined>(undefined);
	const [nextMonth, setNextMonth] = useState<Date | undefined>(undefined);
	const calendarRef = useRef(null);
	const calendarWidth = useWidth(calendarRef);

	const currentYear = format(selectedMonth, 'yyyy');
	const currentMonth = format(selectedMonth, 'MMMM');

	const isTransiting = useRef(false);

	const [position, api] = useSpring(() => ({
		x: 0,
		config: { duration: 200 },
		onStart: () => {
			isTransiting.current = true;
		},
		onRest: () => {
			isTransiting.current = false;

			console.log('rest');
			setPrevMonth((prev) => {
				if (!prev) {
					return prev;
				}
				setSelectedMonth(prev);
				return undefined;
			});

			setNextMonth((prev) => {
				if (!prev) {
					return prev;
				}
				setSelectedMonth(prev);
				return undefined;
			});

			api.set({ x: 0 });
		},
	}));

	const goToPreviousMonth = () => {
		if (isTransiting.current) {
			return; // prevent double click
		}

		setPrevMonth(subMonths(selectedMonth, 1));
		api.start({
			from: {
				x: 0,
			},
			to: {
				x: calendarWidth,
			},
		});
	};

	const goToNextMonth = () => {
		if (isTransiting.current) {
			return; // prevent double click
		}

		setNextMonth(addMonths(selectedMonth, 1));
		api.start({
			from: {
				x: 0,
			},
			to: {
				x: -calendarWidth,
			},
		});
	};

	return (
		<div className="calendar-container" ref={calendarRef}>
			<div className="flex gap-4 justify-between">
				<div className="flex gap-2">
					<div>{currentYear}</div>
					<div>{currentMonth}</div>
				</div>
				<div className="flex gap-2">
					<Button onClick={goToPreviousMonth}>
						<MdChevronLeft />
					</Button>
					<Button onClick={goToNextMonth}>
						<MdChevronRight />
					</Button>
				</div>
			</div>

			{/* Monday, Tuesday, Wednesday, ... */}
			<div className="calender-week-names grid grid-cols-7 gap-5">
				{dayOfWeekNames.map((day) => (
					<div
						key={day}
						className="calendar-header flex items-center justify-center"
					>
						{day}
					</div>
				))}
			</div>

			<div className="w-full relative overflow-hidden">
				<animated.div className="flex relative" style={position}>
					{prevMonth ? (
						<CalendarContent
							className={`absolute left-[-${calendarWidth}px]`}
							month={prevMonth}
							calendarWidth={calendarWidth}
							classDates={classDates}
						/>
					) : null}
					<CalendarContent
						month={selectedMonth}
						calendarWidth={calendarWidth}
						classDates={classDates}
					/>
					{nextMonth ? (
						<CalendarContent
							className={`absolute left-[${calendarWidth}px]`}
							month={nextMonth}
							calendarWidth={calendarWidth}
							classDates={classDates}
						/>
					) : null}
				</animated.div>
			</div>
		</div>
	);
};

export default Calendar;
