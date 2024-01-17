import style from './svg.module.scss';

const Phone = () => {
  return (
    <>
      <svg
        className={style.svg}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20.851" cy="20" r="20" fill="black" />
        <path
          d="M18.5196 12.7732C18.3811 12.427 18.142 12.1302 17.8333 11.9211C17.5245 11.712 17.1602 11.6001 16.7873 11.6H14.2197C13.7506 11.6 13.3008 11.7863 12.9691 12.118C12.6374 12.4497 12.451 12.8996 12.451 13.3686C12.451 21.6697 19.1804 28.4 27.4824 28.4C27.9515 28.4 28.4013 28.2136 28.733 27.8819C29.0647 27.5503 29.2511 27.1004 29.2511 26.6313V24.0637C29.2511 23.6907 29.1393 23.3262 28.9302 23.0172C28.7211 22.7083 28.4242 22.4691 28.0779 22.3305L25.6176 21.3468C25.3052 21.2217 24.9648 21.1835 24.6324 21.2361C24.3 21.2886 23.988 21.4301 23.7295 21.6454L23.0948 22.1756C22.7368 22.474 22.2801 22.6278 21.8146 22.6067C21.349 22.5856 20.9081 22.3912 20.5785 22.0617L18.7903 20.2706C18.4609 19.9414 18.2666 19.5009 18.2453 19.0357C18.2241 18.5705 18.3775 18.1141 18.6754 17.7562L19.2047 17.1216C19.4205 16.8631 19.5624 16.551 19.6153 16.2185C19.6682 15.8859 19.6301 15.5452 19.5052 15.2325L18.5196 12.7732Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Phone;
