export const personalInformation = {
	name: "Marissa Mayer",
	image: "https://miro.medium.com/max/1500/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
	subtitle: 'Business Woman & Proud Geek',
	subSubList: [
		{text: "marissa.mayer@outlook.com", icon: "fas fa-at"},
		{text: "https://www.marissa.mayer.com", icon: "fas fa-link"},
		{text: "Askari XII, Rawalpindi", icon: "fas fa-map"},
	]
};

export const experienceData = [
	{
		title: "President & CEO",
		company: "Yahoo!",
		startMonth: "July",
		startYear: "2012",
		isOngoing: true,
		location: "Sunnyvale, CA",
		keyPoints: [
			'Lead the $5 billion acquisition of the company with Verizon - the entity which believed most in the immense value Yahoo! has created.',
			'Acquired Tumblr for $1.1 billion and moved the company\'s blog there',
			'Built Yahoo\'s mobile, video and social businesses from nothing in 2011 to $1.6 billion in GAAP revenue in 2005',
			'Tripled the company\'s mobile base to over 600 million monthly active users and generated over $1 billion of mobile advertising revenue last year'
		]
	},
	{
		title: "Vice President of Location & Local Services ",
		company: "Google",
		startMonth: "October",
		startYear: "2010",
		endMonth: "July",
		endYear: "2012",
		isOngoing: false,
		location: "Palo Alto, CA",
		keyPoints: [
			'Position Google Maps as the world leader in mobile maps and navigation',
			'Oversaw 1000+ engineers and product managers working on Google Maps, Google Places and Google Earth'
		]
	},
	{
		title: "Product Manager & Technical UI Lead",
		company: "Google",
		startMonth: "October",
		startYear: "2001",
		endMonth: "July",
		endYear: "2005",
		isOngoing: false,
		location: "Palo Alto, CA",
		keyPoints: [
			'Appointed by the founder Larry Page in 2011 to lead the Product Management and USer Interaction Teams',
			'Optimized Google\'s homepage and A/B tested every minor detail to increase the usability (incl. spacing between words, color schemes and pixel-by-pixel element alignment) '
		]
	},
];

export const educations = [
	{
		educationTitle: "BSc. Computer Sciences",
		startMonth: "August",
		startYear: "2018",
		endMonth: "",
		endYear: "",
		isOngoing: true,
		instituteName: "Comsats University Islamabad",
		instituteCity: "Islamabad"
	},
	{
		educationTitle: "FSc. Pre-Engineering",
		startMonth: "March",
		startYear: "2016",
		endMonth: "April",
		endYear: "2018",
		isOngoing: false,
		instituteName: "Superior Group Of Colleges",
		instituteCity: "Rahim Yar Khan"
	},
	{
		educationTitle: "Matriculation",
		startMonth: "March",
		startYear: "2014",
		endMonth: "April",
		endYear: "2016",
		isOngoing: false,
		instituteName: "The Muslim Scholars Schools System",
		instituteCity: "Rahim Yar Khan"
	}
];

export const skills = [
	{id: 1, name: "C++", percentage: "40"},
	{id: 2, name: "Python", percentage: "60"},
	{id: 3, name: "Java", percentage: "50"},
	{id: 4, name: "C#", percentage: "80"},
	{id: 5, name: "Angular 2+", percentage: "70"},
	{id: 6, name: "React JS", percentage: "90"},
];

export const hobbies = [
	{id: 1, name: "Book Reading"},
	{id: 2, name: "Programming"},
	{id: 3, name: "Gardening"},
	{id: 4, name: "Farming"},
	{id: 5, name: "Sleeping"},
	{id: 6, name: "Chilling Out"},
	{id: 7, name: "Book Reading"},
	{id: 8, name: "Programming"},
	{id: 9, name: "Gardening"},
	{id: 10, name: "Farming"},
	{id: 11, name: "Sleeping"},
	{id: 12, name: "Chilling Out"},
];

export const lifePhilosophy = "If you don't ave any shadows, you're not standing in the light";

export const mostProudOf = [
	{icon: "fas fa-ribbon", title: "Courage I had", description: "to take a sinking ship and try to make it float"},
	{icon: "fas fa-handshake", title: "Persistence & Loyalty", description: "I showed despite the hard moments and my willingness to stay with Yahoo after the acquisition"},
	{icon: "fas fa-chart-line", title: "Google's Growth", description: "from a hundred thousand searches per day to over a billion"},
	{icon: "fas fa-female", title: "Inspiring women in tech", description: "Youngest CEO in Fortune's list of 50 most powerful women"}
];
