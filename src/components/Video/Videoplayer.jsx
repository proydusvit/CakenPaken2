import styles from './Video.module.scss'; // Стилі для компонента

const VideoPlayer = ({ videoId, title }) => {
  return (
    <div className={styles.video}>
      <iframe
        className={styles.frame}
        width="1065"
        height="550"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
