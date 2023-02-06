import './index.css'


const About = () => {
    return (
        <div id='about-wrapper'>
            <div id='individual-developer'>
                <div id='developer-name'>
                    Connor Lam
                </div>
                <div id='profile-picture-wrapper'>
                    <img id='developer-profile-picture' src='https://avatars.githubusercontent.com/u/104233383?v=4' />
                </div>
                {/* change font color? */}
                <div id="bio">
                    Hi I'm Connor and welcome to DropShotz! This project was created by me as my final project at App Academy. DropShotz was an application inspired by YouTube. Besides my love for coding, I'm an avid lover of badminton and also enjoy playing video games with friends. If you would like to connect with me or checkout my other projects please check the links below.
                </div>
                <div>
                    <div id="connect">Connect:</div>
                    <div id='developer-socials'>
                        <a href="https://github.com/ConnorLam" target="_blank" rel="noreferrer noopener" id='github-logo'><i className="fa-brands fa-github fa-4x about-logo" /></a>
                        <a href='https://www.linkedin.com/in/connor-lam-a6545a23b/' target="_blank" rel="noreferrer noopener" id='linkedin-logo'><i className="fa-brands fa-linkedin fa-4x about-logo" /></a>
                        <a href='https://angel.co/u/connor-lam' target="_blank" rel="noreferrer noopener" id='angelList-logo'><i className="fa-brands fa-angellist fa-4x about-logo" /></a>
                    </div>
                </div>
                <div id="projects">
                    <div>Other Projects:</div>
                    <div id='projects-wrapper'>
                        <div id='individual-project' ><a href='https://y-eat.herokuapp.com/' target="_blank" rel="noreferrer noopener">Y-eat</a></div>
                        <div id='individual-project' ><a href='https://fake-bnb.onrender.com/' target="_blank" rel="noreferrer noopener">FakeBnb</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About