import resumeFile from "../assets/Resume_AtharvaN.pdf";

const About = () => {
  const handleDownloadResume = () => {
    // Create a virtual link element
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "AtharvaNaik_resume.pdf";

    // Trigger the download
    link.click();
  };

  return (
    <div className="about">
      <h2>About Me</h2>
      <p>Here is some information about me.</p>
      <button onClick={handleDownloadResume} className="btn">Download Resume</button>
    </div>
  );
};

export default About;
