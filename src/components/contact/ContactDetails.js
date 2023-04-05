import './ContactDetails.scss';
import { FiGithub, FiMapPin, FiMail, FiLinkedin } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Sofia, Bulgaria',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 't.i.dukov@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: 'github.com/Dycheto ',
		icon: <FiGithub />,
	},
	{
		id: 4,
		name: 'linkedin.com/in/tihomir-dukov-232237266',
		icon: <FiLinkedin />,
	}
];

const ContactDetails = () => {
	return (
		<div className="contact-details">
			<div className="contact-details__heading">
				Contact details
			</div>
			<ul className="contact-details__list">
				{contacts.map((contact) => (
					<li className="contact-details__list__item" key={contact.id}>
						<i className="contact-details__list__item__icon">
							{contact.icon}
						</i>
						<span className="contact-details__list__item__details">
							{contact.name}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ContactDetails;
