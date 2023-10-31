export default function NavIcon({ event, styles, iconClass }) {
  return (
    <>
      <i onClick={event} style={styles} className={iconClass}></i>
    </>
  );
}
