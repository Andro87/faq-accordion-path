"use client";

import styles from "./FaqItem.module.scss";

import { useState } from "react";

import Plus from "@/svgr/icon-plus.svg";
import Minus from "@/svgr/icon-minus.svg";

import { motion, AnimatePresence } from "framer-motion";
import { exit } from "process";

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
            <AnimatePresence>
                {showAnswer && (
                    <motion.div
                        id={`question-${questionId}`}
                        role="region"
                        aria-labelledby={`content-${questionId}`}
                        className={styles.content_container}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    );
};
