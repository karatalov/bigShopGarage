import { Locations } from '@/Types/Shops'

export const locations: Locations = {
	bishkek_center: {
		name: 'Центр Бишкека',
		center: [42.8746, 74.6122],
		shops: [
			{ id: 1, coordinates: [42.8746, 74.6122], name: 'Ала-Тоо площадь' },
			{ id: 2, coordinates: [42.8709, 74.6003], name: 'Опера и Балет' },
			{ id: 3, coordinates: [42.8721, 74.619], name: 'Исторический музей' },
		],
	},
	victory_square: {
		name: 'Площадь Победы',
		center: [42.8664, 74.6101],
		shops: [
			{ id: 4, coordinates: [42.8664, 74.6101], name: 'Монумент Победы' },
		],
	},
	panfilov_park: {
		name: 'Панфиловский парк',
		center: [42.8763, 74.5981],
		shops: [
			{ id: 5, coordinates: [42.8763, 74.5981], name: 'Колесо обозрения' },
			{ id: 6, coordinates: [42.8771, 74.597], name: 'Аллея Героев' },
		],
	},
	osh_bazaar: {
		name: 'Ошский базар',
		center: [42.8744, 74.5827],
		shops: [{ id: 7, coordinates: [42.8744, 74.5827], name: 'Главный вход' }],
	},
	ata_turk: {
		name: 'Парк Ататюрка',
		center: [42.8225, 74.5729],
		shops: [
			{ id: 8, coordinates: [42.8225, 74.5729], name: 'Памятник Ататюрку' },
		],
	},
}
