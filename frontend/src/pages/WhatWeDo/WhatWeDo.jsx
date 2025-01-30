import React from 'react'
import Banners from '../../common/Banners/Banners'
import FocousArea from '../../components/WhatWeDoComponents/FocousArea/FocousArea'
import {Helmet} from 'react-helmet-async';

const WhatWeDo = () => {
  return (
    <div>
    <Helmet>
            <title>Thematic Areas</title>
            <meta name="description" content="
            At Unity for Change, we focus on creating sustainable social impact through a variety of programs in Nepal. Our key initiatives include education for underprivileged children, healthcare access, environmental conservation, and women empowerment projects. Through innovative solutions and community-driven efforts, we strive to improve lives and promote equality. Learn more about our ongoing projects and how you can contribute to these transformative efforts. Join us in making a lasting impact!
            " />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
          </Helmet>
        <hr />
        <Banners content='Unity for Change focuses on empowering LBT individuals through three key areas: enhancing access to sexual and reproductive health services, fostering mental well-being and community support, and building leadership to drive advocacy and systemic change for an inclusive society.' title='THEMATIC AREAS'/>
        <FocousArea/>
    </div>
  )
}

export default WhatWeDo