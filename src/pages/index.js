import * as React from "react"
import { useEffect } from "react"
import Layout from "./layout"
import pImg from "../images/p.svg"
import productHuntArrowImg from "../images/product_hunt_arrow.svg"
import skillsListImg from "../images/skills_list.svg"
import linkedinIconImg from "../images/linkedin-icon.svg"
import avatarImg from "../images/avatar.png"
import socialLinkImg from "../images/social-link.svg"
import aiSkillsImg from "../images/ai_skills.svg"
import aiSkillsLine1Img from "../images/ai_skills_line1.svg"
import aiSkillsLine2Img from "../images/ai_skills_line2.svg"
import aiSkillsLine3Img from "../images/ai_skills_line3.svg"
import rustExpImg from "../images/do_you_have_experience_working_with_rust.svg"
import greenDotsImg from "../images/green_dots.svg"
import titeDotsImg from "../images/tile_dots.svg"
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { start } from "@popperjs/core"

const faqs = [
	{
		title: "What is an AI-powered resume fine-tuning platform?",
		content: "An AI-powered resume fine-tuning platform is an online service that uses advanced artificial intelligence algorithms to analyze and optimize resumes to match specific job descriptions. It helps job seekers increase their chances of landing interviews by tailoring their resumes with precision."
	},
	{
		title: "What is an AI-powered resume fine-tuning platform?",
		content: "An AI-powered resume fine-tuning platform is an online service that uses advanced artificial intelligence algorithms to analyze and optimize resumes to match specific job descriptions. It helps job seekers increase their chances of landing interviews by tailoring their resumes with precision."
	},
	{
		title: "What is an AI-powered resume fine-tuning platform?",
		content: "An AI-powered resume fine-tuning platform is an online service that uses advanced artificial intelligence algorithms to analyze and optimize resumes to match specific job descriptions. It helps job seekers increase their chances of landing interviews by tailoring their resumes with precision."
	},
]

const startAnimation = () => {
	// alert()
	const $divs = document.querySelectorAll('.animation-start')
	if ($divs.length) {
		$divs.forEach($div => {
			$div.classList.remove('animation-start')
		})
		document.querySelector('div.experience ul').classList.add('list-unstyled')
	}
	setTimeout(() => {
		let $div = document.querySelector('div.job-description')
		$div.classList.add('animation-start')
		setTimeout(() => {
			let $div = document.querySelector('div.vertical-line')
			$div.classList.add('animation-start')
			setTimeout(() => {
				let $div = document.querySelector('div.horizontal-line')
				$div.classList.add('animation-start')
				setTimeout(() => {
					let $div = document.querySelector('div.about-me')
					$div.classList.add('animation-start')
					$div = document.querySelector('div.experience')
					$div.classList.add('animation-start')
					setTimeout(() => {
						let $ul = document.querySelector('div.experience ul.list-unstyled')
						if ($ul)
							$ul.classList.remove('list-unstyled')
					}, 6 * 1000)
					setTimeout(() => {
						startAnimation();
					}, 18 * 1000)
					$div = document.querySelector('div.skills')
					$div.classList.add('animation-start')
				}, 1 * 1000)
			}, 2 * 1000)
		}, 1 * 1000)
	}, 1* 1000)
}
const IndexPage = () => {
	useEffect(() => {
		startAnimation()
	});
	return (
		<Layout pageTitle="home">
			<div className="d-block d-lg-grid home-top">
				<div className="home-top-left ms-2x me-5 text-center text-lg-start mb-5">
					<p className="text-black fw-bolder mb-3 text-unlock-your-dynamic font-poppins">Unlock Your Dynamic Resume: Tailored by AI ✨ Crafted for Success 🚀</p>
					<p className="d-none d-lg-block mb-5 pb-4 text-tailor-your-resume fst-italic font-roboto">Tailor Your Resume Uniquely for Every Job Application Increase your Interview Chance By 80%. 📈</p>
					<div className="border border-danger d-flex div-product-hunt rounded-4 align-items-center mx-auto ms-lg-4">
						<img src={pImg} alt="pSvg" className="me-2" />
						<div className="me-3 text-start">
							<p className="text-danger fw-bold text-featured-on mb-1 lh-1">FEATURED ON</p>
							<p className="text-danger fw-bold product-hunt mb-0 lh-1">Product Hunt</p>
						</div>
						<div className="text-center">
							<img src={productHuntArrowImg} alt="" className="mb-1" />
							<p className="text-danger text-523 fw-bold mb-0">523</p>
						</div>
					</div>
				</div>
				<div className="div-animation me-0 me-lg-3 position-relative">
					<div className="job-description-block">
						<p className="block-title font-poppins mb-1">Job Description</p>
						<div className="job-description border border-black px-4 py-3 rounded-4 position-relative ">
							<div className="px-2 py-1">
								<div className="d-flex justify-content-between">
									<p className="full-stack-developer text-black mb-1 fw-medium">Full Stack Developer</p>
									<img src={linkedinIconImg} alt="" />
								</div>
								<p className="quantum-code-systems mb-2">QuantumCode Systems  .  Germany (Remote)<span className="ms-2 color-949494">1 day ago</span></p>
								<div className="mb-3"><img src={skillsListImg} alt="" className="me-2" /><span className="job-description-skills text-black">Skills: TypeScript, React.js, +8 more</span></div>
								<p className="text-black we-are-seeking">We are seeking a talented Full Stack Developer to join our innovative team at QuantumCode Systems. As a Full Stack Developer, you will have the opportunity to work on exciting projects that span the entire software development lifecycle. From crafting intuitive user interfaces to architecting robust back-end systems, you will play a crucial role in creating high-quality</p>
							</div>
						</div>
					</div>
					<div className="resume-block">
						<p className="block-title font-poppins mb-1">Resume</p>
						<div className="resume border border-black py-4 px-3 mb-4 position-relative ">
							<div className="px-1 d-grid resume-grid pb-4">
								<div className="me-4">
									<div className="me-1 bg-white p-3 rounded-4 mb-4">
										<img src={avatarImg} alt="" className="mb-2" />
										<p className="andrew-mallen fw-medium text-dark mb-2">Andrew Mallen</p>
										<p className="design-lead fw-medium text-yellow mb-3 mb-lg-4">Design Lead</p>
										<p className="text-12 fw-medium mb-2 mb-lg-3 text-dark-grey">hello@andrew.com</p>
										<p className="text-12 fw-medium mb-0 text-dark-grey">www.andrewmallen.com</p>
									</div>
									<div className="mt-2 skills mb-3">
										<p className="skills text-dark fw-medium mb-2 text-18 type-animation">Skills</p>
										<div className="mb-3">
											<p className="skill-language text-18 text-dark-grey fw-medium mb-0 type-animation type1">Web Design</p>
											<p className="skill-language text-18 text-dark-grey fw-medium mb-0 type-animation type2 d-none d-lg-inline-block">Figma</p>
										</div>
										<div className="mb-3">
											<p className="skill-language text-18 text-dark-grey fw-medium mb-0 type-animation type3">UX/UI Design</p>
											<p className="skill-language text-18 text-dark-grey fw-medium mb-0 type-animation type4 d-none d-lg-inline-block">Framer</p>
										</div>
										<div className="mb-3">
											<p className="skill-language text-18 text-dark-grey fw-medium mb-0 type-animation type5">Usability testing</p>
											<p className="skill-language text-18 text-dark-grey fw-medium mb-0 type-animation type6 d-none d-lg-inline-block">Webflow</p>
										</div>
										<div className="mb-3">
											<p className="skill-language text-18 text-dark-grey fw-medium mb-0 type-animation type7">Prototyping</p>
											<p className="skill-language text-18 text-dark-grey fw-medium mb-0 type-animation type8 d-none d-lg-inline-block">After Effects</p>
										</div>
									</div>
									<div className="social-links me-1 d-none d-lg-block">
										<div className="d-flex justify-content-between align-items-center social-link py-2 border-bottom border-light-grey">
											<p className="social-link text-12 text-grey mb-0">LinkedIn</p>
											<img src={socialLinkImg} alt="" />
										</div>
										<div className="d-flex justify-content-between align-items-center social-link py-2 border-bottom border-light-grey">
											<p className="social-link text-12 text-grey mb-0">Twitter</p>
											<img src={socialLinkImg} alt="" />
										</div>
										<div className="d-flex justify-content-between align-items-center social-link py-2 border-bottom border-light-grey">
											<p className="social-link text-12 text-grey mb-0">Instagram</p>
											<img src={socialLinkImg} alt="" />
										</div>
									</div>
								</div>
								<div>
									<div className="about-me">
										<p className="about-me text-dark fw-medium mb-2 text-18 type-animation">About me</p>
										<p className="text-dark-grey fw-medium mb-0 text-12 type-animation type1">I'm a multi-disciplinary Product</p>
										<p className="text-dark-grey fw-medium mb-0 text-12 type-animation type2">Designer, specialising in no-code and </p>
										<p className="text-dark-grey fw-medium mb-0 text-12 type-animation type3">visual development. Currently Design </p>
										<p className="text-dark-grey fw-medium mb-0 text-12 type-animation type4">Lead @ Revolution. Take a look below!</p>
										<p className="text-dark-grey fw-medium mb-0 text-12 type-animation type5">I'm a multi-disciplinary Product </p>
										<p className="text-dark-grey fw-medium mb-0 text-12 type-animation type6">Designer, specialising in no-code and </p>
										<p className="text-dark-grey fw-medium mb-0 text-12 type-animation type7">visual development. Currently Design </p>
										<p className="text-dark-grey fw-medium mb-0 text-12 type-animation type8">Lead @ Revolution. Take a look below!</p>
										<div className="mb-4"></div>
										<div className="mb-2"></div>
									</div>

									<div className="experience">
										<p className="experience text-dark fw-medium mb-2 text-18 type-animation">Experience</p>
										<p className="experience text-yellow fw-medium mb-1 text-yellow text-14 type-animation type1">Design Lead @ Revolution</p>
										<p className="text-dark-grey fw-medium mb-2 text-12 type-animation type2">Sep 2019  -  Present</p>
										<ul className="list-unstyled">
											<li className="text-dark-grey">
												<p className="text-dark-grey text-12 mb-0 type-animation type3 fw-medium">Details of your job experience goes </p>
												<p className="text-dark-grey text-12 mb-0 type-animation type4 fw-medium">here. Briefly showcase what you </p>
												<p className="text-dark-grey text-12 mb-0 type-animation type5 fw-medium">did and what you have </p>
												<p className="text-dark-grey text-12 mb-0 type-animation type6 fw-medium">accomplished at this role. You can </p>
												<p className="text-dark-grey text-12 mb-0 type-animation type7 fw-medium">also talk about the tools you used.</p>
											</li>
											<li className="text-dark-grey">
												<p className="text-dark-grey text-12 mb-0 type-animation type3 fw-medium">Details of your job experience goes </p>
												<p className="text-dark-grey text-12 mb-0 type-animation type4 fw-medium">here. Briefly showcase what you </p>
												<p className="text-dark-grey text-12 mb-0 type-animation type5 fw-medium">did and what you have </p>
												<p className="text-dark-grey text-12 mb-0 type-animation type6 fw-medium">have accomplished at this role. You </p>
												<p className="text-dark-grey text-12 mb-0 type-animation type7 fw-medium">can also talk about the tools you </p>
												<p className="text-dark-grey text-12 mb-0 type-animation type8 fw-medium">used.</p>
											</li>
											<li className="text-dark-grey">
												<p className="text-dark-grey text-12 mb-0 type-animation type3 fw-medium">Details of your job experience goes </p>
												<p className="text-dark-grey text-12 mb-0 type-animation type4 fw-medium">here. Briefly showcase what you </p>
												<p className="text-dark-grey text-12 mb-0 type-animation type5 fw-medium">did and what you have </p>
												<p className="text-dark-grey text-12 mb-0 type-animation type6 fw-medium">have accomplished at this role.</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="vertical-line position-absolute"></div>
					<div className="horizontal-line position-absolute d-none d-md-block"></div>
				</div>
			</div>
			<div className="d-block d-lg-grid home-middle">
				<div className="position-relative">
					<img src={aiSkillsImg} alt="" className="img-fluid" id="aiSkillsImg" />
					<img src={aiSkillsLine1Img} alt="" className="position-absolute" id="aiSkillsLine1" />
					<img src={aiSkillsLine2Img} alt="" className="position-absolute" id="aiSkillsLine2" />
					<img src={aiSkillsLine3Img} alt="" className="position-absolute" id="aiSkillsLine3" />
				</div>
				<div className="text-center text-lg-start our-advanced-algorithm">
					<p className="fw-bolder mb-3 mb-lg-4 text-37">Our Advanced Algorithm</p>
					<p className="text-black fw-lighter text-25">Our advanced algorithm analyzes your existing resume and identifies areas that can be improved to align with the desired job description.</p>
				</div>
			</div>
			<div className="d-grid home-bottom">
				<div className="order-1 order-lg-0 text-center text-lg-left tailored-questionnaire">
					<div className="mb-5 mb-lg-0"></div>
					<p className="fw-bolder mb-3 mb-lg-4 text-37">Tailored Questionnaire</p>
					<p className="text-black fw-lighter text-25">Based on the job description analysis and user's existing resume, the application generates customized questions to address skill gaps and missing qualifications.</p>
				</div>
				<div className="order-0 order-lg-1 position-relative">
					<img src={rustExpImg} alt="" className="img-fluid" id="rustExpImg" />
					<img src={greenDotsImg} alt="" className="position-absolute" id="greenDotsImg" />
					<img src={titeDotsImg} alt="" className="position-absolute" id="tileDotsImg1" />
					<img src={titeDotsImg} alt="" className="position-absolute" id="tileDotsImg2" />
				</div>
			</div>
			<div className="faq">
				<p className="text-black fw-bolder text-center text-poppins fst-italic mb-5">FAQ</p>
				<Accordion defaultActiveKey="0">
					{
						faqs.map((faq, index) =>
							<Accordion.Item className="mb-3 mb-lg-5" eventKey={index + ""} key={index}>
								<Accordion.Header>{faq.title}</Accordion.Header>
								<Accordion.Body>{faq.content}
								</Accordion.Body>
							</Accordion.Item>
						)
					}
				</Accordion>
			</div>
			<div className="wait-list text-center">
				<p className="fw-bolder text-poppins mb-3">
					Interested? Join the Waitlist:
				</p>
				<div className="mb-1"></div>
				<p className="text-poppins mb-3 sign-up-for mx-auto">Sign up for our waitlist to be the first in line for exclusive access to our exciting product/service launch, gain early access privileges, and receive regular updates. Join our waitlist community today and stay one step ahead of the crowd!
				</p>
				<div className="mb-1"></div>
				<div className="your-email-form mx-auto">
					<InputGroup className="mb-5 d-none d-md-flex">
						<Form.Control
							placeholder="Your Email"
							aria-label="Your Email"
							aria-describedby="basic-addon2"
						/>
						<InputGroup.Text id="basic-addon2" className="notify-me">Notify Me</InputGroup.Text>
					</InputGroup>
					<div className="d-block d-md-none">
						<input placeholder="Your Email" class="form-control mb-3" />
						<button className="w-50 mx-auto btn notify-me">Notify Me</button>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default IndexPage

export const Head = () => <title>Home</title>
