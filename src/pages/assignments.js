import React, {Component} from 'react';

class Assignments extends Component {
  render(){
    return (
      <div>
        <h1>Assignments</h1>

        <div className='card-container'>
          <section className='card'>
            <div>
              <div>
                <h2>Introduction to the data analysis platform</h2>
                <p>This activity uses data on student hometowns to introduce key concepts related to the nature of data and its visualization. This will also introduce you to the platform used throughout these activities. You will then explore several ways that your data can be presented visually, and discuss the significance of presenting the same data in different ways. To get started select the Google Sheet to submit your data before class:</p>
                <p><small><a href="">Resources and Requirements</a></small></p>
                <ul>
                  <li>
                    <a href="https://docs.google.com/spreadsheets/d/1dpzgAd3pRgiwvADAYhJ9ZptfO6qLN2aiJjAd1WhElRg/edit?usp=sharing" target="_blank">Google Sheet</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className='card'>
            <div>
              <div>
                <h2>Follow Up: Introduction to the Data Analysis Platform</h2>
                <p>To introduce you to what you will be doing for your research project, you will use the tools from the in-class activity to practice asking and answering your own research question with the class data. We also introduce you to the research project data on galaxies.</p>
                <ul>
                  <li>
                    <a href="https://docs.google.com/document/d/1zhWI5cNoBW5g8NPSQmf7ftE0tpLZxmspjCNgiCpySNU/edit?usp=sharing" target="_blank">Instructions</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className='card'>
            <div>
              <div>
                <h2>HR Diagram</h2>
                <p>Students will explore how to develop the HR diagram from cluster data using the relationships between luminosity to V magnitude and temperature to B-V. They will then use the HR diagrams they develop to understand the evolution of a star cluster.</p>
                <ul>
                  <li>
                    <a href="https://docs.google.com/spreadsheets/d/1ZKXsPrea3ZCVh3lkqAVFVzf4j1hVcVetps2tWPY3cmw/edit#gid=1053908318" target="_blank">Google Sheet</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className='card'>
            <div>
              <div>
                <h2>Galaxy Zoo 101</h2>
                <p>This activity introduces the technique of using crowdsourcing to produce useful data to advance scientific inquiry, also know as citizen science. Students will explore the uncertainty in using citizen science projects, through Galaxy Zoo classifications, and how we address it. They will also look into how scientists address uncertainty in publications and numerically in calculating parameters with their measured data.</p>
                <ul>
                  <li>
                    <a href="https://docs.google.com/spreadsheets/d/1hRJuiRimuZc9G1V4MLZmf178eezDyqPze2WDYcqYRCk/edit#gid=0" target="_blank">Google Sheet</a>
                  </li>
                  <li>
                    <a href="https://www.zooniverse.org/projects/srallen/galaxy-zoo-in-astronomy-101/home" target="_blank">Project Page</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className='card'>
            <div>
              <div>
                <h2>Hubble’s Law</h2>
                <p>This activity will introduce students to the concept of determining a galaxy’s velocity using its spectrum, and highlight how a galaxy’s velocity is inherently tied to how far away it is (i.e. Hubble’s Law). Students will identify key spectral lines in a galaxy’s spectrum and use their wavelengths to calculate the recessional velocity of the galaxy. This data will be aggregated and displayed to demonstrate Hubble’s Law, and a value for Hubble’s constant will be determined from the class’s data. This will familiarize them with dealing with spectra in addition to images, and highlight how physical information is derived from a spectrum and used in addition to information from imaging. This activity could be used to begin discussion on cosmology and the Big Bang.</p>
                <ul>
                  <li>
                    <a href="https://www.zooniverse.org/projects/srallen/intro2astro-hubbles-law/home" target="_blank">Project Page</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className='card'>
            <div>
              <div>
                <h2>Research Project</h2>
                <p>This project utilizes the skills you have developed from the in class activities to start your own research project. Included in this project is an introductory activity to guide you to begin working on the Galaxy Zoo data set. Then you will develop your own research question, use the tools to help you answer this question and create a video to communicate how you have interpreted the results. Everything you need to know is provided in the instruction below.</p>
                <ul>
                  <li>
                    <a href="https://docs.google.com/document/d/1Vecf3KhDvSL2j4TuREif0Hbb10Ym9zJTwbRhTeJFYQc/edit?usp=sharing" target="_blank">Instructions</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <section>
          <div>
            <small>This material is based upon work supported by the National Science Foundation under Grant Number NSF-IUSE 1524189. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.</small>
          </div>
        </section>
      </div>
    )
  }
}

export default Assignments;
