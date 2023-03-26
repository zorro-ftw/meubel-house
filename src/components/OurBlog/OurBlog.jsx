import React from 'react';
import { useNavigate } from 'react-router-dom';
import Ourblog1 from '../../assets/svgs/Ourblog1.png';
import Ourblog2 from '../../assets/svgs/Ourblog2.png';
import Ourblog3 from '../../assets/svgs/Ourblog3.png';
import clock from '../../assets/svgs/clock.svg';
import calender from '../../assets/svgs/calender.svg';
import StyledBlog from './OurBlog-styles';

function OurBlog() {
  const navigate = useNavigate();

  return (
    <StyledBlog>
      <div className="blog__heading">
        <p>Our Blogs</p>
        <p className="blog__title-s">Find a bright ideal to suit your taste with our great selection</p>
      </div>

      <div className="blog__img">
        <div className="blog__img__text">
          <img src={Ourblog1} alt="coffee and keyboard" />
          <p>Going all-in with millenial design</p>
          <button>Read More</button>
          <div className="blog__img__text__small">
            <img src={clock} alt="clock" className="blog__clock" />
            <small>5 min</small>
            <img src={calender} alt="calender" className="blog__calender" />
            <small>
              12
              <sup>th</sup>
              &nbsp; Oct 2022
            </small>
          </div>
        </div>
        <div className="blog__img__text">
          <img src={Ourblog2} alt="coffee and keyboard" />
          <p>Going all-in with millenial design</p>
          <button>Read More</button>
          <div className="blog__img__text__small">
            <img src={clock} alt="clock" className="blog__clock" />
            <small>5 min</small>
            <img src={calender} alt="calender" className="blog__calender" />
            <small>
              12
              <sup>th</sup>
              &nbsp; Oct 2022
            </small>
          </div>
        </div>
        <div className="blog__img__text">
          <img src={Ourblog3} alt="coffee and keyboard" />
          <p>Going all-in with millenial design</p>
          <button>Read More</button>
          <div className="blog__img__text__small">
            <img src={clock} alt="clock" className="blog__clock" />
            <small>5 min</small>
            <img src={calender} alt="calender" className="blog__calender" />
            <small>
              12
              <sup>th</sup>
              &nbsp; Oct 2022
            </small>
          </div>
        </div>
      </div>
      <button
        className="blog__button"
        onClick={() => {
          navigate('/blog');
        }}
      >
        View All Post
      </button>
    </StyledBlog>
  );
}

export default OurBlog;
