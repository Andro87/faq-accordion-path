import styles from "./page.module.scss";

import { Accordion } from "./component";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.main_container}>
                <h1 className={styles.header}>
                    <span></span>
                    FAQs
                </h1>

                <Accordion />
            </div>
        </main>
    );
}
