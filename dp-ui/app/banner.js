import styles from "./banner.module.css"

const Banner = ({children}) => {
	return (
		<div className={styles.minwidth + " dev-border-red text-4xl "}  >
			<h1  >{children}</h1>
		</div>
	)
}
export default Banner