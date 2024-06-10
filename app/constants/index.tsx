export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Development",
		icon: "/web.webp",
	},
	{
		title: "Mobile App Development",
		icon: "/mobile.webp",
	},
	{
		title: "Graphics Designing",
		icon: "/backend.webp",
	},
	{
		title: "Social Media Marketing",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Illustrator",
		icon: "/tech/illustrator.webp",
	},
	{
		name: "Photoshop",
		icon: "/tech/photoshop.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Web Designer",
		company_name: "A.V.M Auto",
		icon: "/company/avm.webp",
		iconBg: "#383E56",
		date: "2020 -  2021",
		points: [
			"Analyzing the needs of customer in a website.",
			"Designing User Interface (UI) for the problem statement.",
			"Improving designs to make more user friendly.",
			"User Experience improvements and feedbacks.",
		],
	},
	{
		title: "Wordpress Developer",
		company_name: "A.V.M Auto",
		icon: "/company/avm.webp",
		iconBg: "#E6DEDD",
		date: "2021 - 2022",
		points: [
			"Developing and maintaining Wordpress Site for A.V.M Auto The Car Body Shop based in Ahmedabad, Gujarat India.",
			"Analyzing feedbacks and fixing bugs.",
			"Search Engine Optimization.",
			"Design Maintainence and hosting maintenance.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
		name: "Om Patel",
		image: "/socialmedia/behance.svg",
		link: "https://www.behance.net/omthecreator",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Om Patel",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/om-patel-401068143/",
	},
	{
		id: 3,
		testimonial:
			"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
		name: "Om Patel",
		image: "/socialmedia/dribble.svg",
		link: "https://dribbble.com/om2121",
	},
	{
		id: 4,
		testimonial:
			"Also do check out my UI/UX Portfolio where I have shared by design studies.",
		name: "Om Patel",
		image: "/socialmedia/portfolio.svg",
		link: "https://omthecreator.netlify.app/",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Om Patel",
		image: "/tech/github.webp",
		link: "https://github.com/omunite215",
	},
];

const projects = [
	{
		name: "Laserxone CRM",
		description:
			"A Fully Responsive CRM project given by SENFENG company, developend using React, HTML, CSS and Firebase. It manages Customers, financials, tasks, employees, and inventory",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "bootstrap",
				color: "pink-text-gradient",
			},
			{
				name: "firebase",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/laserxone.jpg",
	},
	{
		name: "Blink Sales",
		description:
			"Blink Sales Admin Dashboard is a stunning web application to manage migration services. It has a beautiful User Interface and has been built using advanced JavaScript concepts, React, .Net and Tailwind CSS which has different graphs, stats and themes.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: ".Net",
				color: "orange-text-gradient",
			},
			{
				name: "bootstrap",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/CRM.jpg",
	},
	{
		name: "SENFENG",
		description:
			"Android Mobile application to manage day to day actvities, attendance, employee management and task management. It is build using React Native and Expo ",
		tags: [
			{
				name: "reactnative",
				color: "blue-text-gradient",
			},
			{
				name: "expo",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/senfeng.jpg",
	},
	{
		name: "Graphics Designing",
		description:
			"Created Multiple Logos, branding Kit, letterheads, Business Cards, Brochures and flyers for multiple clients.",
		tags: [
			{
				name: "photoshop",
				color: "blue-text-gradient",
			},
			{
				name: "illustrator",
				color: "orange-text-gradient",
			},
			{
				name: "canva",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/graphicsdesigning.jpg",
	},
	{
		name: "Social Media Marketing",
		description:
			"Social Media Marketing services given to restaurants like Lal Qilla, Al Nakhal, Yasir Broast and Howdies.",
		tags: [
			{
				name: "facebbok",
				color: "blue-text-gradient",
			},
			{
				name: "instagram",
				color: "green-text-gradient",
			},
			{
				name: "campaigns",
				color: "orange-text-gradient",
			},
			{
				name: "emailjs",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/smm.jpeg",
	},
];

export { services, technologies, experiences, testimonials, projects };
