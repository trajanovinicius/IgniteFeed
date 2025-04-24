import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post
						author="Vinicius T"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque explicabo rerum. Optio numquam consequuntur perspiciatis rerum corporis quidem esse cumque dignissimos vero aspernatur sint, quisquam obcaecati iure pariatur quos."
					/>
					<Post
						author="Bob D"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque explicabo rerum. Optio numquam consequuntur perspiciatis rerum corporis quidem esse cumque dignissimos vero aspernatur sint, quisquam obcaecati iure pariatur quos."
					/>
				</main>
			</div>
		</div>
	);
}
