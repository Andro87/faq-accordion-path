"use client";

import styles from "./FaqItem.module.scss";

import { useState } from "react";

import Plus from "@/svgr/icon-plus.svg";
import Minus from "@/svgr/icon-minus.svg";

interface Props {
    readonly questionId: string;
    readonly question: string;
    readonly answer: string;
    readonly border_top: string;
}

export const FaqItem: React.FunctionComponent<Props> = ({
    questionId,
    question,
    answer,
    border_top
}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleAnswer = () => {
        setShowAnswer(prevValue => !prevValue);
    };

    return (
        <li className={`${styles.accordion_item} ${styles[border_top]} `}>
            <button
                aria-controls={`question-${questionId}`}
                id={`content-${questionId}`}
                aria-expanded={showAnswer}
                className={styles.accordion_item_btn}
                onClick={handleAnswer}
            >
                {question}
                <span>{!showAnswer ? <Plus /> : <Minus />}</span>
            </button>

            {showAnswer && (
                <div
                    id={`question-${questionId}`}
                    role="region"
                    aria-labelledby={`content-${questionId}`}
                    className={styles.content_container}
                >
                    <p>{answer}</p>
                </div>
            )}
        </li>
    );
};
