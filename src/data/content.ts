import hangImg from '../assets/team page/hang.jpeg';
import huyImg from '../assets/team page/huy.jpeg';
import volImg from '../assets/team page/volunteers.jpeg';

export type Language = 'en' | 'vi';

type Localized<T> = Record<Language, T>;

export const homeContent: Localized<{
	title: string;
	heading: string;
	storyHeading: string;
	storyParagraphs: string[];
	imageAlt: string;
}> = {
	en: {
		title: 'Bến Garden Cafe | Home',
		heading: 'Welcome to Bến Garden',
		storyHeading: 'Our Story',
		storyParagraphs: [
			'Founded with a vision to create a peaceful sanctuary for locals and visitors alike, our cafe brings together craft coffee, warm hospitality, and a commitment to giving back.',
			'Whether you are stopping by for your morning brew, learning about our community programs, or relaxing in our garden space, we are delighted to welcome you.'
		],
		imageAlt: 'Bến Garden Cafe exterior and garden'
	},
	vi: {
		title: 'Bến Garden Cafe | Trang chủ',
		heading: 'Chào mừng đến với Bến Garden',
		storyHeading: 'Câu chuyện của chúng tôi',
		storyParagraphs: [
			'Được thành lập với mong muốn tạo ra một không gian yên bình cho cộng đồng địa phương và du khách, quán cà phê của chúng tôi mang đến trải nghiệm cà phê thủ công, sự hiếu khách ấm áp và cam kết đóng góp cho xã hội.',
			'Dù bạn ghé thăm để thưởng thức ly cà phê buổi sáng, tìm hiểu về các chương trình cộng đồng, hay thư giãn trong không gian sân vườn, chúng tôi luôn hân hạnh được đón tiếp bạn.'
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
		title: 'Our Mission | Bến Garden Cafe', heading: 'Our Mission & Impact', intro: 'Creating sustainable opportunity and supporting local initiatives in Vietnam.', cards: [
			{ icon: '🌱', heading: 'Ethical Sourcing', body: 'We work directly with local Vietnamese coffee farmers to source high-quality beans, ensuring fair compensation and sustainable farming methods.' },
			{ icon: '🤝', heading: 'Community Support', body: 'Our space acts as a hub for local social initiatives, offering educational workshops, volunteer programs, and community gatherings.' },
			{ icon: '🎓', heading: 'Skill Development', body: 'We provide hands-on training for young adults and volunteers in hospitality, barista skills, and English language exchange.' }
		]
	},
	vi: {
		title: 'Sứ mệnh | Bến Garden Cafe', heading: 'Sứ mệnh & Tác động xã hội', intro: 'Tạo dựng cơ hội bền vững và hỗ trợ các sáng kiến cộng đồng tại Việt Nam.', cards: [
			{ icon: '🌱', heading: 'Nguồn cung ứng tử tế', body: 'Chúng tôi hợp tác trực tiếp với nông dân trồng cà phê tại Việt Nam để chọn lọc những hạt cà phê chất lượng cao, đảm bảo mức thù lao công bằng và phương pháp canh tác bền vững.' },
			{ icon: '🤝', heading: 'Hỗ trợ cộng đồng', body: 'Không gian của chúng tôi là điểm kết nối cho các hoạt động xã hội địa phương, tổ chức các buổi xưởng nghệ thuật, chương trình tình nguyện và giao lưu cộng đồng.' },
			{ icon: '🎓', heading: 'Phát triển kỹ năng', body: 'Chúng tôi cung cấp các khóa đào tạo thực tế cho thanh niên và tình nguyện viên về ngành dịch vụ, kỹ năng pha chế và trao đổi ngôn ngữ.' }
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
