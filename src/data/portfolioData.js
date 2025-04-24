export const profile = {
    name: "Patrick",
    full_name: "Patrick McAlinden",
    title: "Data Professional",
    bio: "I’m passionate about turning raw data into something useful—whether that’s through analysis or building the pipelines behind the scenes. I like figuring out the small things others might miss, whether it’s a weird edge case in a dataset or a way to make a workflow run faster.\nI work with tools like Python, Spark (PySpark and Spark SQL), Databricks, Tableau, and Power BI to help answer questions and support better decisions. I enjoy the process of making complex things simple and helping others see what’s possible with data.\nOutside of work, I’m usually gaming or messing around with cars—both things I’ve always loved. I try to use data wherever I can, whether it's tracking performance in a game or figuring out what’s going on under the hood. It’s all about finding those little details that make a difference.",
    contact: {
      email: "mcalindenpatrick226@gmail.com",
      linkedin: "https://www.linkedin.com/in/patrick-mcalinden/",
      github: "https://github.com/patrickmcalinden",
    },
  };
  
  export const experiences = [
    { id: 1, role: "Business Intelligence Analyst", company: "Red Storm Entertainment", period: "May 2023 - Present", description: "I use Spark (PySpark and Spark SQL), Databricks, Tableau, and Power BI to answer complex analytics questions about player behavior across multiple games. My work focuses on building scalable pipelines and intuitive dashboards that uncover insights for game designers, product teams, and studio leadership." },
    { id: 2, role: "Rebate Finance Analyst", company: "CVS Health", period: "Mar 2022 - Sep 2022", description: "I verified and reported on rebate discrepancies using SQL and Excel, working to identify, validate, and resolve financial issues across large datasets. My role involved close collaboration with finance and operations teams to ensure rebate accuracy and support smoother reimbursement workflows." },
    { id: 3, role: "Marketing Data Analyst", company: "Freelance", period: "May 2021 - Dec 2021", description: "I helped small businesses grow their ecommerce presence by analyzing campaign performance, site traffic, and conversion rates. Using Python, Tableau, Google Analytics, and Facebook Insights, I uncovered key opportunities that improved sales and marketing ROI." },
    { id: 4, role: "Mobile Sales", company: "Best Buy", period: "June 2018 - Oct 2020", description: "This job basically forced me to talk—a lot. It taught me how to ask better questions, read the room, and communicate clearly, skills I now use to understand users and stakeholders just as much as customers." },
  ];
  
  export const projects = [
    { id: 1, title: "Spotify Data Analysis", description: "I frequently use Spotify and, as I have experience with the Spotify API, I decided to utilize my extensive history data to interact with the API and conduct data analysis.", tech: ["Python", "Pandas", "Tableau"], imageUrl: "/images/spotify-dashboard.png", liveUrl: "https://public.tableau.com/app/profile/patrick.mcalinden/viz/SpotifyDataDashboardRework/Dashboard1", repoUrl: "https://github.com/patrickmcalinden/Spotify-Data-Analysis?tab=readme-ov-file" },
    { id: 2, title: "Citi Bike Dashboard", description: "This project analyzes Citibike usage patterns using SQL for data preparation and Tableau for building an interactive dashboard that highlights key trends in rider behavior and station activity.", tech: ["Tableau", "MySQL"], imageUrl: "/images/citi-bike-dashboard.png", liveUrl: "https://public.tableau.com/app/profile/patrick.mcalinden/viz/CitiBikeDashboardRework/Basic", repoUrl: "https://github.com/patrickmcalinden/sql-work/tree/main" },
    { id: 3, title: "MLB Analysis", description: "Analysis of historical baseball data using PySpark, focusing on player batting averages, home run leaders, and team slugging percentages. Includes SQL queries and insights into MLB player performances.", tech: ["Python", "Spark SQL"], imageUrl: "/images/mlb-analysis.png", liveUrl: "#", repoUrl: "https://github.com/patrickmcalinden/baseball_analysis" },
    { id: 4, title: "Spotify Stats", description: "This site, built with Bootstrap and JavaScript, connects to the Spotify API to display personalized music stats. Users can view their top songs and artists across weekly, six-month, and yearly timeframes in a clean dashboard layout.", tech: ["Javascript", "HTML", "CSS"], imageUrl: "/images/spotify-stats.png", liveUrl: "https://patrickmcalinden.github.io/spotfiy-stats/", repoUrl: "https://github.com/patrickmcalinden/spotfiy-stats" },
  ];
  
    export const sections = [
    { id: 'hero', title: 'Home' },
    { id: 'about', title: 'About Me' },
    { id: 'experience', title: 'Experiences' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
  ];