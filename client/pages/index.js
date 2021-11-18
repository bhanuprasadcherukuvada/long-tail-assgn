import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ long_tails, error }) {
	if (error) {
		return <h1>{ error.message}</h1>
	}
	return (
		<div className={styles.container}>
			<Head>
				<title>Long Tails</title>
				<meta
					name="description"
					content="gives title and description"
				/>
				<link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 className={styles.heading}>Long Tails</h1>

			<ul >
				{long_tails.map((item, index) => {
					return (
						<li key={index} className={styles.listStyle}>
							<Link href={`/${item.tail}`}>
								<a>{item.tail}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}


export async function getServerSideProps({ params }) {
	console.log(process.env.GRAPHQL_URL);
	try {
		const res = await fetch(process.env.GRAPHQL_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: `query ListAllTails {
  								long_tails {
    									tail
    									json_id
  								}
					    }
      `,
			}),
		});

		const result = await res.json();
		const {
			data: { long_tails },
		} = result;
	}
	catch (err) {
		console.log(err);
		return {
			props: {
				error: {
					message: " some error occured while fetching tails",
				}
			}
		}
	}

	return {
		props: {
			long_tails,
		},
	};
}
