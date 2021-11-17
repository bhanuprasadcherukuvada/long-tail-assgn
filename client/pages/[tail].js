import React from "react";
import data from "../store/data.json";
import styles from '../styles/Main.module.css';
import { useRouter } from "next/router";

const Main = ({ title, description }) => {
	const router = useRouter();

	const backButton = (e) => {
		e.preventDefault();
		router.push('/');
	}
	return (
		<div className={styles.container}>
			<button onClick={backButton} className={styles.button}>Home</button>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.description}>{description}</p>
		</div>
	);
};


export async function getServerSideProps({ params }) {
	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `query fetchID($tail:String!=""){
				long_tails_by_pk(tail: $tail) {
    						json_id
  							}
			}`,
			variables: {
				tail: params.tail,
			},
		}),
	});

	const result = await res.json();
	const {
		data: {
			long_tails_by_pk: { json_id },
		},
	} = result;

	const posts = data.filter(item => item.id === json_id);
	if (!posts) {
		return {
			props: {
				title: "",
				description:"",
			}
		}
	}

	return {
		props: {
			title: posts[0].title,
			description: posts[0].description
		},
	};
}
export default Main;
