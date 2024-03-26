import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill />
        {/* <Image src="https://images.pexels.com/photos/17528288/pexels-photo-17528288/free-photo-of-jaguar-lying-on-tree-log.jpeg" alt="" fill /> */}
      </div>
    </div>
  )
}

export default AboutPage;