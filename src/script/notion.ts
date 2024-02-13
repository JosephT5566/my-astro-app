import { Client, isFullPage } from '@notionhq/client';

export type ScheduledEvent = {
	date: Date;
	title: string;
	description: string;
	type: string;
};

const mock = {
	人數上限: { id: 'UNbz', type: 'number', number: 4 },
	'Players multi': {
		id: 'YM%5EU',
		type: 'multi_select',
		multi_select: [
			{ id: 'rBch', name: 'Joseph', color: 'red' },
			{ id: 'J<pm', name: 'Amigo', color: 'orange' },
			{ id: 'DQ:{', name: 'Sara', color: 'default' },
		],
	},
	收費金額: { id: 'j%7DE%7C', type: 'number', number: 2200 },
	Date: {
		id: 'kCfp',
		type: 'date',
		date: {
			start: '2024-02-12T20:30:00.000+08:00',
			end: null,
			time_zone: null,
		},
	},
	'Players rel': {
		id: '%7Bn%5CU',
		type: 'relation',
		relation: [
			{ id: 'a39f0701-3e03-4b43-84e1-fff59481d9a3' },
			{ id: '06c16a0a-3ed1-480c-883d-3ed484d6c475' },
			{ id: '6159ee4b-2408-4d4d-b2b3-3f7cc76929e6' },
		],
		has_more: false,
	},
	類別: {
		id: '~%3D%3BY',
		type: 'select',
		select: { id: '?Gy\\', name: '進階班', color: 'purple' },
	},
	Name: {
		id: 'title',
		type: 'title',
		title: [
			{
				type: 'text',
				text: { content: '2/12 週一班', link: null },
				annotations: {
					bold: false,
					italic: false,
					strikethrough: false,
					underline: false,
					code: false,
					color: 'default',
				},
				plain_text: '2/12 週一班',
				href: null,
			},
		],
	},
};

export async function getEvents(): Promise<any> {
	console.log(import.meta.env.NOTION_DATABASE_ID);
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

	const events = pages.results.map((page) => {
        // Since it's a full page database.
		if (!isFullPage(page)) {
			return [];
		}

		const players =
			page.properties['Players multi']?.type === 'multi_select'
				? page.properties['Players multi'].multi_select.map(
						(p) => p.name
					)
				: [];
		const type =
			page.properties['類別']?.type === 'select'
				? page.properties['類別'].select?.name
				: '';
		const limitPlayers =
			page.properties['人數上限']?.type === 'number'
				? page.properties['人數上限'].number
				: 0;

		return {
			players,
			type,
			limitPlayers,
		};
	});

	// const events = pages.results
	// 	.map((page) => {
	// 		let type = '';
	// 		switch (page.properties.Type.select.name) {
	// 			case 'Long Form Video':
	// 			case 'Short Form Video':
	// 				type = 'YouTube';
	// 				break;
	// 			case 'Livestream':
	// 				type = 'Twitch';
	// 				break;
	// 			case 'Blog':
	// 				type = 'Blog';
	// 				break;
	// 		}
	// 		return {
	// 			id: page.id,
	// 			title: page.properties.Name.title[0].plain_text,
	// 			description:
	// 				page.properties.Description.rich_text[0].plain_text,
	// 			date: new Date(page.properties['Release Date'].date.start),
	// 			type: type,
	// 		};
	// 	})
	// 	.sort((a, b) => a.date.getTime() - b.date.getTime())
	// 	.splice(0, 5);

	return events;
}
