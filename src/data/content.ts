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

export const practiceContent: Localized<{
	title: string;
	heading: string;
	intro: string;
	quickFacts: Array<{ label: string; value: string }>;
	activitiesHeading: string;
	activities: Array<{ icon: string; heading: string; body: string }>;
	schoolHeading: string;
	schoolBody: string;
	individualHeading: string;
	individualBody: string;
	contactLabel: string;
}> = {
	en: {
		title: 'English Practice & Workshops | Bến Garden Cafe',
		heading: 'English grows through play',
		intro: 'Every morning, Bến Garden becomes a relaxed place for children to practice English with international volunteers through real conversations, creative activities, and shared curiosity.',
		quickFacts: [
			{ label: 'When', value: 'Most mornings, 8:00 am to 12:00 pm' },
			{ label: 'Who', value: 'Local children, school groups, and visiting families' },
			{ label: 'Where', value: 'Bến Garden, Cầu Giăng, Da Nang' }
		],
		activitiesHeading: 'What happens in a morning',
		activities: [
			{ icon: '🎲', heading: 'Games & conversation', body: 'Children build confidence through simple games, questions, stories, and everyday English that feels natural rather than like a lesson.' },
			{ icon: '🎨', heading: 'Art & making', body: 'Drawing, crafts, and hands-on projects give children a reason to use new words while making something they can take pride in.' },
			{ icon: '🎵', heading: 'Music & movement', body: 'Songs, rhythm, and playful activities help language stick while volunteers and children enjoy the morning together.' }
		],
		schoolHeading: 'Workshops for schools',
		schoolBody: 'Schools can arrange a friendly morning visit built around English games, art, music, garden activities, and cultural exchange. We can shape the pace and activities around the age of the group.',
		individualHeading: 'Individual sign-ups',
		individualBody: 'Families can get in touch to ask about a child joining a suitable morning session. Places and activities depend on the day, so contact us before visiting.',
		contactLabel: 'Contact Bến Garden to arrange a visit'
	},
	vi: {
		title: 'Tiếng Anh & Workshop | Bến Garden Cafe',
		heading: 'Học tiếng Anh qua vui chơi',
		intro: 'Mỗi buổi sáng, Bến Garden trở thành một không gian nhẹ nhàng để trẻ em luyện tiếng Anh cùng các tình nguyện viên quốc tế qua trò chuyện, hoạt động sáng tạo và sự tò mò chung.',
		quickFacts: [
			{ label: 'Thời gian', value: 'Hầu hết các buổi sáng, từ 8:00 đến 12:00' },
			{ label: 'Dành cho', value: 'Trẻ em địa phương, nhóm học sinh và gia đình' },
			{ label: 'Địa điểm', value: 'Bến Garden, Cầu Giăng, Đà Nẵng' }
		],
		activitiesHeading: 'Một buổi sáng có gì?',
		activities: [
			{ icon: '🎲', heading: 'Trò chơi & trò chuyện', body: 'Trẻ em tự tin hơn qua các trò chơi đơn giản, câu hỏi, câu chuyện và tiếng Anh đời thường thay vì một tiết học cứng nhắc.' },
			{ icon: '🎨', heading: 'Nghệ thuật & sáng tạo', body: 'Vẽ, làm thủ công và các hoạt động thực hành giúp trẻ sử dụng từ mới trong khi tạo ra những sản phẩm đáng tự hào.' },
			{ icon: '🎵', heading: 'Âm nhạc & vận động', body: 'Bài hát, nhịp điệu và các hoạt động vui chơi giúp việc học ngôn ngữ trở nên tự nhiên và đáng nhớ.' }
		],
		schoolHeading: 'Workshop dành cho trường học',
		schoolBody: 'Các trường có thể đăng ký một buổi tham quan thân thiện với trò chơi tiếng Anh, nghệ thuật, âm nhạc, hoạt động trong vườn và giao lưu văn hóa. Chúng tôi có thể điều chỉnh hoạt động theo độ tuổi của nhóm.',
		individualHeading: 'Đăng ký cá nhân',
		individualBody: 'Gia đình có thể liên hệ để hỏi về một buổi sinh hoạt phù hợp cho trẻ. Số lượng và hoạt động tùy từng ngày, vì vậy hãy liên hệ trước khi đến.',
		contactLabel: 'Liên hệ Bến Garden để sắp xếp chuyến thăm'
	}
};

export const photosContent: Localized<{
	title: string;
	heading: string;
	intro: string;
	items: Array<{ src: string; alt: string }>;
}> = {
	en: {
		title: 'Photos | Bến Garden Cafe', heading: 'Gallery', intro: 'A glimpse into the garden, community, and everyday life at Bến Garden.', items: [
			{ src: '/gallery/community-table.jpg', alt: 'Children and adults sharing food around a garden table' },
			{ src: '/gallery/garden-team.jpg', alt: 'Volunteers celebrating together in the garden' },
			{ src: '/gallery/garden-community.jpg', alt: 'The Bến Garden community gathered under a tree' },
			{ src: '/gallery/children-water-play.jpg', alt: 'Children playing outdoors in the garden' },
			{ src: '/gallery/facebook-profile.jpg', alt: 'BẾN Garden social page profile image' }
		]
	},
	vi: {
		title: 'Hình ảnh | Bến Garden Cafe', heading: 'Thư viện ảnh', intro: 'Một vài hình ảnh về khu vườn, cộng đồng và cuộc sống thường ngày tại Bến Garden.', items: [
			{ src: '/gallery/community-table.jpg', alt: 'Trẻ em và người lớn cùng dùng bữa quanh bàn trong khu vườn' },
			{ src: '/gallery/garden-team.jpg', alt: 'Các tình nguyện viên cùng vui vẻ trong khu vườn' },
			{ src: '/gallery/garden-community.jpg', alt: 'Cộng đồng Bến Garden tập trung dưới tán cây' },
			{ src: '/gallery/children-water-play.jpg', alt: 'Trẻ em vui chơi ngoài trời trong khu vườn' },
			{ src: '/gallery/facebook-profile.jpg', alt: 'Ảnh đại diện trang mạng xã hội BẾN Garden' }
		]
	}
};
