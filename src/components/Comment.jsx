import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
	return (
		<div className={styles.comment}>
			<img src="https://github.com/trajanovinicius.png" alt="" />
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Vinicius Trajano</strong>
							<time title="23 de abril às 23:19" dateTime="2025-04-23">
								Cerca de 1h atrás
							</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={20} />
						</button>
					</header>

					<p>Muito Bom Devon, parabéns!!</p>
				</div>

				<footer>
					<button>
						<ThumbsUp />
						Apludir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
