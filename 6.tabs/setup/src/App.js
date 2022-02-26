import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  	const [loading, setLoading] = React.useState(true);
  	const [jobs, setJobs] = React.useState([]);
  	const [value, setValue] = React.useState(0);

	const fetchItem = async() =>{
		setLoading(true)
		try{
			let response = await fetch(url);
			let jobData  = await response.json();
			setJobs(jobData);
			setLoading(false);	
		}catch(err){
			setLoading(true);
			console.log(err);
		}
	}

	React.useEffect(() =>{
		fetchItem();
	}, [])

	if(loading){
		return(
		<div className="section loading">
			<h1>loading...</h1>
		</div>
		)
	}
	const {company, duties, dates, title} = jobs[value];
  	return (
    	<section className="section">
			<div className="title">
				<h2>experience</h2>
				<div className="underline"></div>
			</div>
			<div className="jobs-center">
			{/* btn container */}
			<div className="btn-container">
				{
					jobs.map((item, index) =>{
						return (<button key={item.id} onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`} >{item.company}</button>)
					})
				}
			</div>

			{/* job info */}
				<article className="job-info">
					<h3>{title}</h3>
					<h4>{company}</h4>
					<p className="job-date">{dates}</p>
					{
						duties.map((duty, index) =>{
							return (<div className="job-desc" key={index}>
								<FaAngleDoubleRight className='job-icon'>
								</FaAngleDoubleRight>
									<p>{duty}</p>
							</div>)
						})
					}
				</article>
			</div>
		</section>
  	)
}

export default App;