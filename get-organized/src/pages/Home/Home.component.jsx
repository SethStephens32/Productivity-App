import React from 'react'
import './Home.styles.scss'

const Home = () => {
  return (
    <div className='home-container'>
    <section className="main-section">
      <h3><span className="span-color">Welcome</span> To</h3>
      <h1>GetOrganized</h1>
    </section>
    <section className="secondary-section">
      <h3>What is GetOrganized?</h3>
      <p>GetOrganized is an app that uses a kanban style for productivity. With this app, users can easily organize tasks and projects, break them down into smaller subtasks, and track their progress. GetOrganized helps users maximize their productivity by providing a visual overview of their tasks and projects, enabling them to focus on one task at a time and make quick decisions on what to prioritize. Users can also assign tasks to other users, set deadlines, and update their progress in real-time. With GetOrganized, users can stay organized and get more done!</p>
    </section>
    </div>
  )
}

export default Home