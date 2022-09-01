import React from 'react';
import resumeFile from '../../assets/resume/resume.zip'

function Resume() {

    return (
        <div className='resume-container'>
            <div className='resume'>
                <a href={resumeFile} download><button>Download My Resume</button></a>
            </div>
        </div>
  )
}


export default Resume;