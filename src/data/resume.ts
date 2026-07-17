export interface Job {
  company: string;
  link?: string;
  title: string;
  location: string;
  date: string;
  bullets: string[];
}

export interface Project {
  link: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ContactLink {
  link: string;
  type: string;
  title: string;
}

export const profile = {
  name: "Patrick McAlinden",
  role: "Product Analyst",
  company: "Dick's Sporting Goods",
  location: "New Jersey, USA",
  email: "mcalindenpatrick226@gmail.com",
  site: "https://patrickmcalinden.com",
  tagline:
    "I turn terabytes of messy data into pipelines, dashboards, and decisions.",
  summary: [
    "I'm a data professional with 4+ years of experience building and deploying ETL pipelines, designing data models, and delivering self-service reporting solutions that process terabytes of data at scale.",
    "Day to day I work in SQL, PySpark, and Python, with hands-on experience in Azure Databricks, Git-based deployment workflows, and Airflow-based orchestration.",
  ],
};

export const experience: Job[] = [
  {
    company: "Dick's Sporting Goods",
    link: "https://www.dickssportinggoods.com/",
    title: "Product Analyst II",
    location: "Remote, USA",
    date: "Jan 2026 — Present",
    bullets: [
      "Ingest streaming data from Kafka topics into Databricks, enabling near real-time data availability for downstream reporting and analytics.",
      "Developed a PySpark pipeline to identify duplicate inventory entries, helping engineers fix the root cause and ensuring accurate stock levels across all stores.",
    ],
  },
  {
    company: "Red Storm Entertainment",
    link: "https://www.redstorm.com/",
    title: "Business Intelligence Analyst",
    location: "Remote, USA",
    date: "May 2023 — Jan 2026",
    bullets: [
      "Led ETL validation and modification for a data migration impacting 4M+ customer profiles, delivering 100% accurate reporting on day one of launch.",
      "Analyzed customer behavior trends, delivering insights that boosted D7 retention by 5% and D21 by 3%.",
      "Built self-service datasets and Tableau dashboards for 4 product lines, enabling near real-time KPI tracking for stakeholders.",
      "Optimized ETL pipelines with PySpark on Azure Databricks, cutting average runtime by 7% while processing terabytes of data daily.",
    ],
  },
  {
    company: "CVS Health",
    link: "https://www.cvshealth.com/",
    title: "Rebate Finance Analyst",
    location: "Remote, USA",
    date: "Mar 2022 — Aug 2022",
    bullets: [
      "Developed SQL procedures to automate verification and standardize reporting, ensuring 97% data accuracy and a 20% efficiency improvement.",
      "Analyzed rebate reports to detect over- and under-payments, correcting discrepancies across multi-million dollar contracts.",
    ],
  },
  {
    company: "Freelance",
    title: "Marketing Data Analyst",
    location: "Remote, USA",
    date: "Mar 2021 — Dec 2021",
    bullets: [
      "Automated reporting for marketing and email campaigns, generating acquisition insights that reduced Google Ads spend by 12%.",
      "Built browser automation scripts with JavaScript and Puppeteer to streamline e-commerce workflows, improving productivity by 13%.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Programming",
    items: ["Python", "Pandas", "PySpark", "SQL", "JavaScript"],
  },
  {
    label: "Visualization & Reporting",
    items: ["Tableau", "Power BI", "Plotly"],
  },
  {
    label: "Data Platforms & Tools",
    items: [
      "Azure Databricks",
      "Kafka",
      "Airflow",
      "Apache Hadoop",
      "GCP",
      "Elastic",
      "Git",
      "Jira",
    ],
  },
];

export const projects: Project[] = [
  {
    link: "https://github.com/patrickmcalinden/sql-work",
    title: "Citi Bike Analysis",
    description:
      "Interactive Tableau visualizations and insights built on the public Citi Bike BigQuery dataset.",
    date: "2023",
    tags: ["SQL", "BigQuery", "Tableau"],
  },
  {
    link: "https://github.com/patrickmcalinden/kaggle_ml_sleep",
    title: "Kaggle Sleep Prediction",
    description:
      "A machine learning entry in a Kaggle competition predicting sleep patterns from wearable data.",
    date: "2023",
    tags: ["Python", "Machine Learning"],
  },
  {
    link: "https://github.com/patrickmcalinden/Spotify-Data-Analysis",
    title: "Spotify Data Analysis",
    description:
      "A dashboard and analysis of my own listening habits, built on personal usage data and the Spotify API.",
    date: "2023",
    tags: ["Python", "Spotify API", "Dashboards"],
  },
  {
    link: "https://github.com/patrickmcalinden/spotfiy-stats",
    title: "Spotify Stats",
    description:
      "A Bootstrap and JavaScript site that pulls a user's top songs and artists from the Spotify API across weekly, half-yearly, and yearly periods.",
    date: "2021",
    tags: ["JavaScript", "Bootstrap", "Spotify API"],
  },
];

export const education = {
  school: "Kean University",
  location: "Union, NJ",
  degree: "B.S. Finance",
  detail: "GPA: 4.0 / 4.0",
  date: "Class of 2021",
};

export const contact: ContactLink[] = [
  {
    link: "mailto:mcalindenpatrick226@gmail.com",
    type: "Email",
    title: "mcalindenpatrick226@gmail.com",
  },
  {
    link: "https://www.linkedin.com/in/patrick-mcalinden/",
    type: "LinkedIn",
    title: "patrick-mcalinden",
  },
  {
    link: "https://github.com/patrickmcalinden",
    type: "GitHub",
    title: "patrickmcalinden",
  },
  {
    link: "https://public.tableau.com/app/profile/patrick.mcalinden/vizzes",
    type: "Tableau Public",
    title: "patrick.mcalinden",
  },
];
