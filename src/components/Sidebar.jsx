import styles from "./Sidebar.module.css";

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&w=500&q=60&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>

			<div className={styles.profile}>
				<strong>Vinicius Trajano</strong>
				<span>Web Developer</span>
			</div>

			<footer>
				<a href="#">Editar Seu Perfil</a>
			</footer>
		</aside>
	);
}
