import './SingleProject.scss';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function SingleProject() {
    const location = useLocation();

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        >
            <div className="single-project-container">
                <div className="project-header">
                    <h1>Project Name</h1>
                    <div className="project-photos">
                        {location.state.image.map((image, index) => (
                            <div className="project-photo-wrapper" key={index}>
                                <img
                                    src={image}
                                    alt=""
                                    onClick={() => handleImageClick(index)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="project-photo-modal" style={{ display: currentImageIndex !== null ? 'block' : 'none' }}>
                        <span className="close" onClick={() => setCurrentImageIndex(null)}>&times;</span>
                        <img src={location.state.image[currentImageIndex]} alt="" />
                    </div>
                </div>
                <div className="project-details-container">
                    <div className="project-details-left">
                        <div className="project-detail">
                            <h2>Objective</h2>
                            <p>{location.state.objective}</p>
                        </div>
                        <div className="project-detail">
                            <h2>Tools & Technologies</h2>
                            <p>{location.state.tools}</p>
                        </div>
                    </div>
                    <div className="project-details-right">
                        <div className="project-detail">
                            <h2>Challenge</h2>
                            <p>{location.state.description}</p>
                        </div>
                    </div>
                </div>
                <div className="back-button">
                    <a href="#" onClick={() => window.history.back()}>Back</a>
                </div>
            </div>
        </motion.section>
    );
}

export default SingleProject;
