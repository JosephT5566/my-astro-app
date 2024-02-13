import { Client, isFullPage } from '@notionhq/client';

export type ScheduledEvent = {
	date: Date;
	type: string;
	players: string[];
	price: number;
	playersLimit: number;
};

enum PROPERTIES_NAME {
	date = 'Date',
	type = '類別',
	players = 'Players multi',
	price = '收費金額',
	playersLimit = '人數上限',
}

export async function getEvents(): Promise<ScheduledEvent[]> {
	const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });
	const pages = await notion.databases.query({
		database_id: import.meta.env.NOTION_DATABASE_ID,
		filter: {
			and: [
				{
					property: 'Date',
					date: {
						next_month: {},
					},
				},
			],
		},
	});

	// console.log(pages.results);

    // Since it's a full page database.
	const events = pages.results.filter(isFullPage).map((page) => {

		const date =
			page.properties[PROPERTIES_NAME.date]?.type === 'date'
				? page.properties[PROPERTIES_NAME.date].date
				: null;
		const players =
			page.properties[PROPERTIES_NAME.players]?.type === 'multi_select'
				? page.properties[PROPERTIES_NAME.players].multi_select.map(
						(p) => p.name
					)
				: [];
		const type =
			page.properties[PROPERTIES_NAME.type]?.type === 'select'
				? page.properties[PROPERTIES_NAME.type].select?.name
				: '';
		const playersLimit =
			page.properties[PROPERTIES_NAME.playersLimit]?.type === 'number'
				? page.properties[PROPERTIES_NAME.playersLimit].number
				: 0;
		const price =
			page.properties[PROPERTIES_NAME.price]?.type === 'number'
				? page.properties[PROPERTIES_NAME.price].number
				: 0;

		return {
			date: date ? new Date(date.start) : new Date(),
			type: type ? type : '',
			players,
			playersLimit: playersLimit ? playersLimit : 0,
			price: price ? price : 0,
		};
	});

	return events;
}
