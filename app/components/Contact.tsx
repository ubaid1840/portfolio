"use client";
import { slideIn } from "@/app/utils/motion";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				"service_9tosc17",
				"template_b8e3yf6",
				{
					from_name: form.name,
					to_name: "Muhammad Usama",
					from_email: form.email,
					to_email: "usamanazir1@gmail.com",
					message: form.message,
				},
				"eIyixeQjBtbp1q-qL",
			)
			.then(() => {
				setLoading(false);
				alert(
					"A humble thanks for reaching me out. I will respond to you as soon as possible.",
				);
				setForm({
					name: "",
					email: "",
					message: "",
				});
			})
			.catch(() => {
				setLoading(false);
				alert("Sorry!! Something went wrong!!");
			});
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className="heroSubText">Get in Touch</p>
				<h3 className="heroHeadText">Contact.</h3>
			<div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<FaWhatsapp />
					<div style={{ fontSize: '13px', marginLeft: '10px' }}>+92 315 6888903</div>
				</div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<IoMailOutline />
					<div style={{ fontSize: '13px', marginLeft: '10px' }}>usamanazir1@gmail.com</div>
				</div>
				</div>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name.</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Whats's your name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email.</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Whats's your email?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message.</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
					>
						{loading ? "Sending..." : "Sent"}
					</button>
				</form>
			</motion.div>
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
