import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/18151445/pexels-photo-18151445/free-photo-of-close-up-of-an-owl-sitting-on-a-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 cname={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src="https://images.pexels.com/photos/18151445/pexels-photo-18151445/free-photo-of-close-up-of-an-owl-sitting-on-a-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Mari Metsola</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates repellat. Reprehenderit ipsum architecto doloribus ad consectetur hic natus! Nisi suscipit sed tenetur qui minima delectus blanditiis quos quaerat nemo.
        </div>
      </div>
    </div >
  )
}

export default SinglePostPage;