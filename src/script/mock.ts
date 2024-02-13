import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const mockPages: PageObjectResponse[] = [
	{
		object: 'page',
		id: 'f1dcbe3d-92ae-4a08-bb2e-94e3cdd5fade',
		created_time: '2024-02-12T02:33:00.000Z',
		last_edited_time: '2024-02-12T17:00:00.000Z',
		created_by: {
			object: 'user',
			id: 'f389aa0f-92a9-4251-b2cb-711070e37cce',
		},
		last_edited_by: {
			object: 'user',
			id: 'f389aa0f-92a9-4251-b2cb-711070e37cce',
		},
		cover: null,
		icon: null,
		parent: {
			type: 'database_id',
			database_id: '452e2a8b-0873-4ada-8ffb-9d8a23cf11a7',
		},
		archived: false,
		properties: {
			人數上限: { id: 'UNbz', type: 'number', number: 4 },
			'Players multi': {
				id: 'YM%5EU',
				type: 'multi_select',
				multi_select: [
					{
						id: '2cfee0c9-0629-4a58-8955-6f380f9ea18d',
						name: 'Josh',
						color: 'green',
					},
				],
			},
			收費金額: { id: 'j%7DE%7C', type: 'number', number: 2800 },
			Date: {
				id: 'kCfp',
				type: 'date',
				date: { start: '2024-02-24', end: null, time_zone: null },
			},
			'Players rel': {
				id: '%7Bn%5CU',
				type: 'relation',
				relation: [{ id: 'a39f0701-3e03-4b43-84e1-fff59481d9a3' }],
			},
			類別: {
				id: '~%3D%3BY',
				type: 'select',
				select: { id: 'PB=h', name: '體驗班', color: 'default' },
			},
			Name: {
				id: 'title',
				type: 'title',
				title: [
					{
						type: 'text',
						text: { content: '2/24 體驗班', link: null },
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default',
						},
						plain_text: '2/24 體驗班',
						href: null,
					},
				],
			},
		},
		url: 'https://www.notion.so/2-24-f1dcbe3d92ae4a08bb2e94e3cdd5fade',
		public_url: null,
	},
	{
		object: 'page',
		id: '5cafec4d-3344-49e4-905f-37ceb1f19e99',
		created_time: '2024-02-11T13:58:00.000Z',
		last_edited_time: '2024-02-12T16:59:00.000Z',
		created_by: {
			object: 'user',
			id: 'f389aa0f-92a9-4251-b2cb-711070e37cce',
		},
		last_edited_by: {
			object: 'user',
			id: 'f389aa0f-92a9-4251-b2cb-711070e37cce',
		},
		cover: null,
		icon: null,
		parent: {
			type: 'database_id',
			database_id: '452e2a8b-0873-4ada-8ffb-9d8a23cf11a7',
		},
		archived: false,
		properties: {
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
		},
		url: 'https://www.notion.so/2-12-5cafec4d334449e4905f37ceb1f19e99',
		public_url: null,
	},
	{
		object: 'page',
		id: '3a1b4a3f-2335-4ebb-b42e-4a3c0ee33839',
		created_time: '2024-02-11T13:56:00.000Z',
		last_edited_time: '2024-02-12T16:59:00.000Z',
		created_by: {
			object: 'user',
			id: 'f389aa0f-92a9-4251-b2cb-711070e37cce',
		},
		last_edited_by: {
			object: 'user',
			id: 'f389aa0f-92a9-4251-b2cb-711070e37cce',
		},
		cover: null,
		icon: null,
		parent: {
			type: 'database_id',
			database_id: '452e2a8b-0873-4ada-8ffb-9d8a23cf11a7',
		},
		archived: false,
		properties: {
			人數上限: { id: 'UNbz', type: 'number', number: 4 },
			'Players multi': {
				id: 'YM%5EU',
				type: 'multi_select',
				multi_select: [],
			},
			收費金額: { id: 'j%7DE%7C', type: 'number', number: 2200 },
			Date: {
				id: 'kCfp',
				type: 'date',
				date: {
					start: '2024-02-19T20:30:00.000+08:00',
					end: null,
					time_zone: null,
				},
			},
			'Players rel': {
				id: '%7Bn%5CU',
				type: 'relation',
				relation: [],
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
						text: { content: '2/19 週一班', link: null },
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default',
						},
						plain_text: '2/19 週一班',
						href: null,
					},
				],
			},
		},
		url: 'https://www.notion.so/2-19-3a1b4a3f23354ebbb42e4a3c0ee33839',
		public_url: null,
	},
	{
		object: 'page',
		id: 'f889e9fb-fb7a-4a0e-b359-93365c83c811',
		created_time: '2024-02-11T13:55:00.000Z',
		last_edited_time: '2024-02-12T16:59:00.000Z',
		created_by: {
			object: 'user',
			id: 'f389aa0f-92a9-4251-b2cb-711070e37cce',
		},
		last_edited_by: {
			object: 'user',
			id: 'f389aa0f-92a9-4251-b2cb-711070e37cce',
		},
		cover: null,
		icon: null,
		parent: {
			type: 'database_id',
			database_id: '452e2a8b-0873-4ada-8ffb-9d8a23cf11a7',
		},
		archived: false,
		properties: {
			人數上限: { id: 'UNbz', type: 'number', number: 4 },
			'Players multi': {
				id: 'YM%5EU',
				type: 'multi_select',
				multi_select: [{ id: 'n;JT', name: 'Pieda', color: 'yellow' }],
			},
			收費金額: { id: 'j%7DE%7C', type: 'number', number: 3000 },
			Date: {
				id: 'kCfp',
				type: 'date',
				date: {
					start: '2024-02-17T14:00:00.000+08:00',
					end: null,
					time_zone: null,
				},
			},
			'Players rel': {
				id: '%7Bn%5CU',
				type: 'relation',
				relation: [],
			},
			類別: {
				id: '~%3D%3BY',
				type: 'select',
				select: { id: '`<Jw', name: '走板初級', color: 'red' },
			},
			Name: {
				id: 'title',
				type: 'title',
				title: [
					{
						type: 'text',
						text: { content: '2/17 走板初級', link: null },
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default',
						},
						plain_text: '2/17 走板初級',
						href: null,
					},
				],
			},
		},
		url: 'https://www.notion.so/2-17-f889e9fbfb7a4a0eb35993365c83c811',
		public_url: null,
	},
	{
		object: 'page',
		id: 'bdcbaeba-ebb0-408d-bec5-e2fc27d6bb2d',
		created_time: '2024-02-11T13:55:00.000Z',
		last_edited_time: '2024-02-12T16:59:00.000Z',
		created_by: {
			object: 'user',
			id: 'f389aa0f-92a9-4251-b2cb-711070e37cce',
		},
		last_edited_by: {
			object: 'user',
			id: 'f389aa0f-92a9-4251-b2cb-711070e37cce',
		},
		cover: null,
		icon: null,
		parent: {
			type: 'database_id',
			database_id: '452e2a8b-0873-4ada-8ffb-9d8a23cf11a7',
		},
		archived: false,
		properties: {
			人數上限: { id: 'UNbz', type: 'number', number: 4 },
			'Players multi': {
				id: 'YM%5EU',
				type: 'multi_select',
				multi_select: [
					{ id: '{]=S', name: 'ㄇㄏ', color: 'pink' },
					{ id: 'kRKY', name: '鬍子', color: 'gray' },
					{ id: 'J<pm', name: 'Amigo', color: 'orange' },
				],
			},
			收費金額: { id: 'j%7DE%7C', type: 'number', number: 2200 },
			Date: {
				id: 'kCfp',
				type: 'date',
				date: {
					start: '2024-02-13T20:00:00.000+08:00',
					end: null,
					time_zone: null,
				},
			},
			'Players rel': {
				id: '%7Bn%5CU',
				type: 'relation',
				relation: [],
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
						text: { content: '2/13 週二班', link: null },
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default',
						},
						plain_text: '2/13 週二班',
						href: null,
					},
				],
			},
		},
		url: 'https://www.notion.so/2-13-bdcbaebaebb0408dbec5e2fc27d6bb2d',
		public_url: null,
	},
];
