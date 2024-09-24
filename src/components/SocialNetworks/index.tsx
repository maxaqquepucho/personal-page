import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

import './styles.scss'


export default function SocialNetworks() {
  const socialNetworks = [
    {
      name: 'Github',
      url: 'https://github.com/maxaqquepucho',
      icon: faGithub,
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/maxaqq/',
      icon: faLinkedin,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/maxaqq/',
      icon: faInstagram,
      hideName: true,
    },
    {
      name: 'X',
      url: 'https://x.com/maxaqq',
      icon: faXTwitter,
      hideName: true,
    },
  ]

  return (
    <>
      <section className="flex gap-3 mt-6">
        {socialNetworks.map(item => (
          <a
            className={
              item.hideName
                ? `social-network-button !px-2`
                : 'social-network-button'
            }
            href={item.url}
            key={item.name}
            target="_blank"
          >
            <FontAwesomeIcon icon={item.icon} />
            {!item.hideName && <span className="ml-2">{item.name}</span>}
          </a>
        ))}
      </section>
    </>
  )
}
