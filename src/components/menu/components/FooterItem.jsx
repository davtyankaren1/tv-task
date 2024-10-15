export const FooterItem = ({ label, href }) => (
  <li className='menu-bar-footer_li'>
    <a href={href}>
      <span>{label}</span>
    </a>
  </li>
);
