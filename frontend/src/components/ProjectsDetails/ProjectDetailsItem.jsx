import React from 'react';
import './ProjectsDetails.css';

const ProjectDetailsItem = ({ description, images, videos }) => {

  return (
    <div className='container project_content'>
      <p>{description}</p>

      {/* Images Section */}
      <div className="project_images">
        {images.map((image, index) => (
          <img key={index} src={image.image_url} alt={`Project image ${index + 1}`} />
        ))}
      </div>

      {/* Videos Section */}
      <div className="project_videos">
        {videos.map((video, index) => (
          <video key={index} controls>
            <source
              src={`https://res.cloudinary.com/deoefj9hc/${video.video}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailsItem;
