export const MenuItem = ({ src, label, href, isActive }) => (
  <li className='menu-bar-items_li'>
    <a href={href} className={`menu-bar-items_a ${isActive ? "current" : ""}`}>
      <div className='img'>
        <img src={src} alt={label} />
      </div>
      <span>{label}</span>
    </a>
  </li>
);
