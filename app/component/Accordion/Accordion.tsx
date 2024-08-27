import styles from "./Accordion.module.scss";

import { allData } from "data";

import { FaqItem } from "./FaqItem/FaqItem";

export const Accordion = () => {
    return (
        <ul
            aria-label="Accordion Control Group Buttons"
            className={styles.accordion_list}
        >
            {allData.map(content => {
                return (
                    <FaqItem
                        key={content.id}
                        questionId={content.id}
                        question={content.question}
                        answer={content.answer}
                        border_top={
                            content.id === "1"
                                ? "accordion_item_border_top"
                                : ""
                        }
                    />
                );
            })}
        </ul>
    );
};
