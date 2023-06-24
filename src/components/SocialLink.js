const SocialLink = ({ href, rel, icon, itemClass }) => {
  return (
    <li>
      <a href={href} rel={rel} className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
