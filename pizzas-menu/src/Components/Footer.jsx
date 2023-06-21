const Footer = () => {
  const hour = new Date().getHours();
  const openHOur = 12;
  const closeHour = 22;
  const isOpen = hour >= openHOur && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <span>
            we are open till {closeHour}:00, you can visit us or order online.
          </span>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <span>
          Please visit us between {openHOur}:00 and {closeHour}:00.
        </span>
      )}
    </footer>
  );
};
export default Footer;
