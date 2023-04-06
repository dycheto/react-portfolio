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
    name: 'github.com/Dycheto',
    icon: <FiGithub />,
    link: 'https://github.com/Dycheto',
  },
  {
    id: 4,
    name: 'linkedin.com/in/tihomir-dukov-232237266',
    icon: <FiLinkedin />,
    link: 'https://linkedin.com/in/tihomir-dukov-232237266',
  },
];

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <div className="contact-details__heading">Contact details</div>
      <ul className="contact-details__list">
        {contacts.map((contact) => (
          <li className="contact-details__list__item" key={contact.id}>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-details__list__item__link"
            >
              <i className="contact-details__list__item__icon">{contact.icon}</i>
              <span className="contact-details__list__item__details">{contact.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactDetails;
