export interface Project {
	/** Used for the linkable URL hash: `#project-<slug>`. */
	slug: string;
	title: string;
	/** Stack tag, rendered in IBM Plex Mono. */
	stack: string;
	/** One-line hook shown on the compact card. */
	hook: string;
	/** Full write-up shown in the detail panel. Unabridged. */
	body: string;
	/** Optional "why it's here" line, rendered as a rule-marked aside. */
	why?: string;
	/** Renders the "In progress" badge on both card and panel. */
	inProgress?: boolean;
}

export const PROJECTS: Project[] = [
	{
		slug: 'traffic-control',
		title: 'Adaptive Intelligent Traffic Control',
		stack: 'Python · Markov Decision Processes · Reinforcement Learning',
		hook: 'An intersection modeled as a Markov Decision Process, solved for the optimal signal policy instead of hand-tuned.',
		body: 'Traffic signals are a small, tractable version of a much bigger question: how do you control a system when the state changes faster than you can react to it? I modeled an intersection as a Markov Decision Process — defining the state space (queue lengths, arrival patterns), action space (signal phases), and reward structure (minimizing delay) — then solved for the optimal policy using Value Iteration and compared it against fixed-cycle and heuristic controllers under stochastic traffic arrivals. The Value Iteration policy consistently outperformed both baselines on delay, throughput, and queue stability.',
		why: "Why it's here: this is the same modeling pattern I want to apply to biological control systems — define states, actions, and objectives, then find the policy, rather than hand-tuning rules.",
	},
	{
		slug: 'vehicle-routing',
		title: 'Heterogeneous Vehicle Routing Optimization',
		stack: 'GAMS/CPLEX · Mixed-Integer Linear Programming · Python',
		hook: "A routing model for an NGO's mixed fleet, where reaching vulnerable communities matters as much as minimizing cost.",
		body: "Built for an NGO with a mixed fleet and a problem that doesn't fit the textbook version of vehicle routing: minimizing cost isn't the only goal when some of the stops are vulnerable communities that need to be reached regardless of efficiency. I formulated a priority-based MILP that balances cost against equitable coverage, solved it to proven optimality in GAMS/CPLEX, and — since exact solvers don't scale to every real deployment — built a Clarke-Wright-plus-2-opt heuristic in Python as a solver-free benchmark. The heuristic landed within 15% of the optimal solution, which tells you roughly what you give up when you can't afford to run CPLEX.",
	},
	{
		slug: 'student-attrition',
		title: 'Interpretable Student Attrition Modeling',
		stack: 'Python · Regression · Statistical Inference',
		hook: "Regression models on 121,000+ student records, built to explain who's at risk and why, not just predict it.",
		body: "Institutions collect a lot of data on why students leave and rarely look at it in a way that's actually usable by the people making decisions. I built linear and logistic regression models on 121,000+ institutional records, deliberately choosing interpretability over squeezing out marginal predictive accuracy, because a model that flags at-risk students without being able to say why isn't actionable — and can quietly encode bias no one checked for. I built in a bias assessment alongside the modeling and delivered both a technical report and a presentation aimed at non-technical stakeholders.",
	},
	{
		slug: 'commerce-dashboard',
		title: 'Digital Commerce Performance Dashboard',
		stack: 'Python · Streamlit · Power BI · Machine Learning',
		hook: 'A full analytics pipeline on 12,000+ B2B orders — KPIs, forecasting models, and two dashboards built for two different audiences.',
		body: 'An end-to-end analytics build on a 12,000+ order B2B ecommerce dataset: KPI engineering (AOV, conversion rate, cart abandonment, RFM segmentation) across twelve structured tables, then revenue forecasting, churn scoring, and demand prediction models (Random Forest, Gradient Boosting, Logistic Regression) on top. Delivered two ways — a five-page Streamlit + Plotly dashboard and a Power BI report with DAX measures on a proper star-schema data model — because the same analysis needs to look different depending on who\'s reading it.',
	},
	{
		slug: 'reading-behavior',
		title: 'Reading Behavior Analysis in Mexico',
		stack: 'R · INEGI/MOLEC Survey Data · Statistical Inference',
		hook: 'A national survey analysis on why Mexicans choose digital or print reading — and how much the data can actually claim.',
		body: "Used Mexico's national MOLEC survey to look at how sociodemographic factors relate to digital versus print reading preference. Straightforward inferential statistics work — data cleaning, confidence intervals, hypothesis testing in R — but it's on here because it's the project where I got the most rigorous about not overstating what the numbers actually support, which is a habit I want visible everywhere else too.",
	},
	{
		slug: 'logistics-pipeline',
		title: 'Multi-Source Logistics Data Pipeline',
		stack: 'Docker Compose · Airflow · Postgres · dbt · MinIO',
		hook: 'A production-style order fulfillment pipeline, in progress — medallion architecture, Airflow, dbt, CI.',
		body: 'A production-style data pipeline on Olist order data plus simulated streams: medallion architecture, Airflow orchestration, dbt transformations, CI via GitHub Actions. Built to demonstrate pipeline engineering at a level closer to what a data team actually runs, not just a notebook.',
		inProgress: true,
	},
];
