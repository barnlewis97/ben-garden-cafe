import hangImg from '../assets/team page/hang.jpeg';
import huyImg from '../assets/team page/huy.jpeg';
import volImg from '../assets/team page/volunteers.jpeg';

export type Language = 'en' | 'vi';

type Localized<T> = Record<Language, T>;

export const siteInfo = {
	facebookUrl: 'https://www.facebook.com/bentuyloan/',
	workawayUrl: 'https://www.workaway.info/en/host/272595511442',
	phone: '+84 34 385 4567',
	address: 'Bến Garden, KV Cầu Giăng, Túy Loan Đông 2, Hòa Phong, Hòa Vang, Đà Nẵng, Vietnam'
};

export const homeContent: Localized<{
	title: string;
	heading: string;
	storyHeading: string;
	storyParagraphs: string[];
	imageAlt: string;
}> = {
	en: {
		title: 'Bến Garden Cafe | Home',
		heading: 'A peaceful garden in Da Nang',
		storyHeading: 'Our Story',
		storyParagraphs: [
			'Bến Garden is a small riverside garden and coffee space in the peaceful countryside of Da Nang, created by Hang and Huy as a place to live close to nature and build a meaningful community.',
			'We grow vegetables, care for animals, share food, and welcome local people, children, and international visitors into simple everyday experiences shaped by kindness and cultural exchange.'
		],
		imageAlt: 'Bến Garden Cafe exterior and garden'
	},
	vi: {
		title: 'Bến Garden Cafe | Trang chủ',
		heading: 'Khu vườn bình yên ở Đà Nẵng',
		storyHeading: 'Câu chuyện của chúng tôi',
		storyParagraphs: [
			'Bến Garden là một khu vườn ven sông và không gian cà phê nhỏ giữa vùng quê yên bình của Đà Nẵng. Hang và Huy tạo dựng nơi đây với mong muốn sống gần thiên nhiên và xây dựng một cộng đồng ý nghĩa.',
			'Chúng tôi trồng rau, chăm sóc vật nuôi, cùng nhau dùng bữa và chào đón người dân địa phương, trẻ em cùng du khách quốc tế đến chia sẻ những trải nghiệm đời thường và giao lưu văn hóa.'
		],
		imageAlt: 'Bến Garden Cafe'
	}
};

export const menuContent: Localized<{
	title: string;
	heading: string;
	tagline: string;
	intro: string;
	sections: Array<{
		category: string;
		subtitle?: string;
		items: Array<{ name: string; price: string }>;
	}>;
}> = {
	en: {
		title: 'Menu | Bến Garden Cafe',
		heading: 'Our Menu',
		tagline: '"...Every coffee bean is a story of passion..."',
		intro: 'A selection of handcrafted coffees, fresh teas, juices, and local snacks.',
		sections: [
			{ category: 'Coffee (Cà Phê)', subtitle: 'Every coffee bean is a story of passion', items: [
				{ name: 'Black Coffee (Filter/Machine)', price: '15k' }, { name: 'White Coffee with Condensed Milk (Filter/Machine)', price: '16k' }, { name: 'Salted Cream Coffee', price: '25k' }, { name: 'Coconut Coffee', price: '28k' }, { name: 'Almond Coffee', price: '28k' }, { name: 'Saigon Style Coffee (Black / Milk)', price: '22k / 25k' }, { name: 'Iced Bạc Xỉu (Extra Milk Coffee)', price: '26k' }, { name: 'Salted Bạc Xỉu', price: '28k' }, { name: 'Cocoa (Iced / Hot)', price: '25k' }
			] },
			{ category: 'Latte', items: [
				{ name: 'Matcha Latte', price: '26k' }, { name: 'Cocoa Latte', price: '26k' }, { name: 'Matcha / Cocoa with Salted Cream', price: '28k' }
			] },
			{ category: 'Fresh Oolong Tea (Real Fruit)', items: [
				{ name: 'Peach Orange Lemongrass Oolong', price: '30k' }, { name: 'Mango Passionfruit Oolong', price: '30k' }, { name: 'Tropical Fruit Oolong', price: '30k' }, { name: 'Salted Lime Oolong', price: '30k' }, { name: 'Hot Orange Cinnamon Tea', price: '30k' }, { name: 'Hot Lipton Tea', price: '25k' }, { name: 'Ginger Tea with Preserved Lime', price: '20k' }
			] },
			{ category: 'Creative Drinks', items: [
				{ name: 'Shaken Iced Tamarind', price: '26k' }, { name: 'Milo with Jelly', price: '30k' }, { name: 'Black Sugar Boba Milk', price: '26k' }, { name: 'Taro Milk Tea', price: '22k' }
			] },
			{ category: 'Ice Blended (Đá Xay)', items: [
				{ name: 'Chocolate Ice Blended', price: '30k' }, { name: 'Matcha Ice Blended', price: '30k' }, { name: 'Oreo Cookie Ice Blended', price: '30k' }
			] },
			{ category: 'Yogurt (Sữa Chua)', items: [
				{ name: 'Granola Yogurt', price: '30k' }, { name: 'Sticky Black Rice Yogurt', price: '30k' }, { name: 'Mango Yogurt', price: '26k' }, { name: 'Strawberry Yogurt', price: '26k' }, { name: 'Blueberry Yogurt', price: '26k' }, { name: 'Plain Yogurt', price: '22k' }
			] },
			{ category: 'Fresh Juice', items: [
				{ name: 'Orange Juice', price: '26k' }, { name: 'Guava Juice', price: '26k' }, { name: 'Pineapple Juice', price: '26k' }, { name: 'Carrot Juice', price: '26k' }, { name: 'Salted Preserved Lime (Iced / Hot)', price: '25k' }
			] },
			{ category: 'Snacks (Nhâm Nhi)', items: [
				{ name: 'Mixed Cereal Seeds', price: '10k' }, { name: 'Watermelon Seeds', price: '15k' }, { name: 'Coconut Sunflower Seeds', price: '15k' }
			] }
		]
	},
	vi: {
		title: 'Thực đơn | Bến Garden Cafe',
		heading: 'Thực Đơn',
		tagline: '"...Mỗi hạt Cà Phê là một câu chuyện về Đam Mê..."',
		intro: 'Thưởng thức các loại cà phê thủ công, trà trái cây tươi và món ăn vặt nhẹ nhàng.',
		sections: [
			{ category: 'Cà Phê', subtitle: 'Mỗi hạt Cà Phê là một câu chuyện về Đam Mê...', items: [
				{ name: 'Cafe Đen phin/máy', price: '15k' }, { name: 'Cafe Sữa phin/máy', price: '16k' }, { name: 'Cafe Muối', price: '25k' }, { name: 'Cafe Dừa', price: '28k' }, { name: 'Cafe Hạnh Nhân', price: '28k' }, { name: 'Cafe Đen/Sữa Sài Gòn', price: '22k/25k' }, { name: 'Bạc Xỉu đá', price: '26k' }, { name: 'Bạc Xỉu Muối', price: '28k' }, { name: 'Cacao đá/nóng', price: '25k' }
			] },
			{ category: 'Latte', items: [
				{ name: 'Matcha Latte', price: '26k' }, { name: 'Cacao Latte', price: '26k' }, { name: 'Matcha / Cacao Kem muối', price: '28k' }
			] },
			{ category: 'Trà ÔLong Tươi (dùng trái cây thật)', items: [
				{ name: 'ÔLong Đào Cam sả', price: '30k' }, { name: 'ÔLong Xoài Chanh leo', price: '30k' }, { name: 'ÔLong Nhiệt đới', price: '30k' }, { name: 'ÔLong Chanh Xí muội', price: '30k' }, { name: 'Trà Cam Quế nóng', price: '30k' }, { name: 'Trà Lipton nóng', price: '25k' }, { name: 'Trà Gừng xí muội', price: '20k' }
			] },
			{ category: 'Thức Uống Sáng Tạo', items: [
				{ name: 'Đá Me lắc', price: '26k' }, { name: 'Milo dằm Thạch', price: '30k' }, { name: 'Sữa tươi trân châu đường đen', price: '26k' }, { name: 'Trà sữa Khoai Môn', price: '22k' }
			] },
			{ category: 'Đá Xay', items: [
				{ name: 'Socola đá xay', price: '30k' }, { name: 'Matcha đá xay', price: '30k' }, { name: 'Bánh Oreo đá xay', price: '30k' }
			] },
			{ category: 'Sữa Chua', items: [
				{ name: 'Sữa chua Ngũ cốc', price: '30k' }, { name: 'Sữa chua Nếp Cẩm', price: '30k' }, { name: 'Sữa chua Xoài', price: '26k' }, { name: 'Sữa chua Dâu', price: '26k' }, { name: 'Sữa chua Việt Quất', price: '26k' }, { name: 'Sữa chua trắng/đá', price: '22k' }
			] },
			{ category: 'Nước Ép', items: [
				{ name: 'Nước ép Cam', price: '26k' }, { name: 'Nước ép Ổi', price: '26k' }, { name: 'Nước ép Dứa (Thơm)', price: '26k' }, { name: 'Nước ép Cà Rốt', price: '26k' }, { name: 'Chanh xí muội (đá/nóng)', price: '25k' }
			] },
			{ category: 'Nhâm Nhi', items: [
				{ name: 'Hạt Ngũ Cốc', price: '10k' }, { name: 'Hạt Dưa', price: '15k' }, { name: 'Hướng Dương Dừa', price: '15k' }
			] }
		]
	}
};

export const missionContent: Localized<{
	title: string;
	heading: string;
	intro: string;
	cards: Array<{ icon: string; heading: string; body: string }>;
}> = {
	en: {
		title: 'Our Mission | Bến Garden Cafe', heading: 'Our Mission & Impact', intro: 'A peaceful community garden where children, local people, and international volunteers learn through everyday life.', cards: [
			{ icon: '🌱', heading: 'Garden Life', body: 'Grow vegetables, care for animals, share meals, and enjoy a slower rhythm close to nature in the countryside outside Da Nang.' },
			{ icon: '🤝', heading: 'Community & Culture', body: 'We bring local people and international visitors together through food, stories, workshops, games, and genuine cultural exchange.' },
			{ icon: '🎓', heading: 'Natural English Practice', body: 'Patient volunteers help local children practice English through conversation, play, creative activities, and simple experiences from daily life.' }
		]
	},
	vi: {
		title: 'Sứ mệnh | Bến Garden Cafe', heading: 'Sứ mệnh & Tác động xã hội', intro: 'Một khu vườn cộng đồng yên bình nơi trẻ em, người dân địa phương và tình nguyện viên quốc tế cùng học hỏi qua cuộc sống thường ngày.', cards: [
			{ icon: '🌱', heading: 'Cuộc sống trong khu vườn', body: 'Trồng rau, chăm sóc vật nuôi, cùng dùng bữa và tận hưởng nhịp sống chậm gần gũi với thiên nhiên ở vùng quê Đà Nẵng.' },
			{ icon: '🤝', heading: 'Cộng đồng & văn hóa', body: 'Chúng tôi kết nối người dân địa phương với du khách quốc tế qua ẩm thực, câu chuyện, các buổi workshop, trò chơi và giao lưu chân thành.' },
			{ icon: '🎓', heading: 'Thực hành tiếng Anh tự nhiên', body: 'Các tình nguyện viên kiên nhẫn đồng hành cùng trẻ em luyện tiếng Anh qua trò chuyện, vui chơi, hoạt động sáng tạo và những trải nghiệm đời thường.' }
		]
	}
};

export const teamContent: Localized<{
	title: string;
	heading: string;
	intro: string;
	members: Array<{ name: string; role: string; bio: string; image: ImageMetadata }>;
}> = {
	en: {
		title: 'Meet the Team | Bến Garden Cafe', heading: 'Meet Our Team', intro: 'The friendly faces behind the coffee, garden, and community.', members: [
			{ name: 'Hang', role: 'General Manager and Wonderful Woman', bio: 'Passionate about specialty Vietnamese coffee brewing techniques.', image: hangImg },
			{ name: 'Huy', role: 'Incredible Chef and Master Craftsman', bio: 'Oversees daily operations and community outreach events.', image: huyImg },
			{ name: 'Volunteers', role: 'Community Support', bio: 'Invaluable international and local volunteers helping drive our mission forward.', image: volImg }
		]
	},
	vi: {
		title: 'Đội ngũ | Bến Garden Cafe', heading: 'Đội ngũ của chúng tôi', intro: 'Những gương mặt thân quen đằng sau tách cà phê, khu vườn và không gian cộng đồng.', members: [
			{ name: 'Hằng', role: 'Quản lý chung', bio: 'Đam mê các kỹ thuật pha chế cà phê đặc sản Việt Nam.', image: hangImg },
			{ name: 'Huy', role: 'Đầu bếp chính', bio: 'Phụ trách hoạt động vận hành hàng ngày và các sự kiện cộng đồng.', image: huyImg },
			{ name: 'Tình nguyện viên', role: 'Hỗ trợ cộng đồng', bio: 'Đội ngũ tình nguyện viên quốc tế và địa phương đầy nhiệt huyết.', image: volImg }
		]
	}
};

export const photosContent: Localized<{
	title: string;
	heading: string;
	intro: string;
	items: string[];
}> = {
	en: {
		title: 'Photos | Bến Garden Cafe', heading: 'Gallery', intro: 'A glimpse into our space, coffee, and daily life in Vietnam.', items: ['Garden Seating Area', 'Freshly Brewed Coffee', 'Community Workshop', 'Cafe Exterior & Entrance', 'Team & Volunteers', 'Speciality Drinks Menu']
	},
	vi: {
		title: 'Hình ảnh | Bến Garden Cafe', heading: 'Thư viện ảnh', intro: 'Góc nhìn về không gian, cà phê và cuộc sống thường nhật tại Bến Garden.', items: ['Góc sân vườn', 'Cà phê pha tươi', 'Buổi xưởng cộng đồng', 'Mặt tiền & Lối vào', 'Đội ngũ & Tình nguyện viên', 'Menu đồ uống đặc sản']
	}
};
