import React from 'react'
import ibm_logo from '../../assets/ibm_logo.jpeg'
import clocky_logo from '../../assets/toymail_co_logo.jpeg'
import microsoft_logo from '../../assets/microsoft-logo.jpeg'
import Experience from '@/components/Experience/Experience'

const Experiences = () => {
  /*
  Reformatted Deferred Defects system for the Platform Dashboard by adding new fields (graphs and tables) for customer facing issues and updated backend code to filter data by new parameters
Created new APIs to handle data on the platform’s Cluster Portal and wrote new SQL queries to filter clusters and virtual machines by multiple parameters including addons, squad, and versions
Wrote and updated python scripts to populate active cluster data and added a new system to access quotas for cluster use sorted by squad, which was used to update data summary graphs on the portal
Developed new data schemas and tables in PostgreSQL database to better organize cluster information and increase efficiency, and automated table updating in the cluster python scripts
*/

/*
Worked on updating and developing functions in Python to find counterfeit products across multiple websites such as Walmart, Amazon, Ebay, Google, Alibaba, Mercari, etc.
Used web scraping libraries to parse site data and grab images, used cv2 to compare fake images and record them based on match parameters, and sent data to frontend using Django
Developed frontend screens to display counterfeits and updated website using Shopify (liquid)

*/

  const experiences = [
    {
      company: "Microsoft",
      position: "Software Engineer Intern",
      start: "June 2025",
      end: "Sept 2025",
      location: "Redmond, WA",
      teamName: "Service 360",
      description: [
        "Created an AI description generation and validation service to security KPIs as part of Microsoft’s S360 security platform",
        "Developed pipelines using C# and Dotnet framework to query internal engineering systems AI model and scraped data off of Microsoft’s internal engineering hub to generate high-quality descriptions",
        "Empowered KPI owners to automatically summarize complex security initiatives and compile action items with detailed resolution steps within seconds",
        "Wrote Kusto functions to pull action item data for individual KPIs, allowing the service to create accurate trouble shooting guides for devs",
        "Engineered a validation service, evaluating existing descriptions and assigning scores based on structural validity and data accuracy for 10,000+ KPI owners",
        "Significantly reduced developer hours and toil for 70,000+ software engineers/developers, impacting productivity and overall security compliance for Microsoft services"
      ],
      skills: "C#, Generative AI, API development, Azure Kusto, Security, Dotnet Framework",
      color: "#0043ce",
      logo: microsoft_logo,
    },
    {
      company: "IBM",
      position: "Software Engineer Intern",
      start: "June 2024",
      end: "Dec 2024",
      location: "San Jose, CA",
      teamName: "Platform Engineering (Cloud Pak for Data)",
      description: [
        "Reformatted Deferred Defects system for the Platform Dashboard by adding new fields (graphs and tables) for customer facing issues and updated backend code to filter data by new parameters",
        "Created new APIs to handle data on the platform’s Cluster Portal and wrote new SQL queries to filter clusters and virtual machines by multiple parameters including addons, squad, and versions",
        "Wrote and updated python scripts to populate active cluster data and added a new system to access quotas for cluster use sorted by squad, which was used to update data summary graphs on the portal",
        "Developed new data schemas and tables in PostgreSQL database to better organize cluster information and increase efficiency, and automated table updating in the cluster python scripts"
      ],
      skills: "Python, React.js, Node.js, PostgreSQL, Javascript, Backend Dev, Full-Stack Dev, Automation",
      color: "#0043ce",
      logo: ibm_logo,
    },
    {
      company: "Clocky LLC",
      position: "Software Developer Intern",
      start: "June 2023",
      end: "Sept 2023",
      location: "Remote",
      teamName: null,
      description: [
        "Worked on updating and developing functions in Python to find counterfeit products across multiple websites such as Walmart, Amazon, Ebay, Google, Alibaba, Mercari, etc.",
        "Used web scraping libraries to parse site data and grab images, used cv2 to compare fake images and record them based on match parameters, and sent data to frontend using Django",
        "Developed frontend screens to display counterfeits and updated website using Shopify (liquid)"
      ],
      skills: "Python, Django, Selenium, Web Scraping Libraries - Beautiful Soup, webDriver, Liquid, Shopify",
      color: "#0043ce",
      logo: clocky_logo,
    }
  ]

  return (
    <div className="flex justify-center">
      <div className='mt-[5vh] flex flex-col justify-start items-center gap-[50px] pb-[100px]'>
        {
          experiences.map((experience, index) => (
            <Experience key={index} experience={experience} />
          ))
        }
      </div>
    </div>
  )
}

export default Experiences