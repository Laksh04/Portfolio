const About = ({ data }) => {
  return (
    <div className="flex flex-col py-2 font-Noto pl-12 md:pl-32" id="about" >
      <div className="w-full flex flex-col justify-between mt-20" >

        <div className="font-Space text-lg" data-aos="fade-up" data-aos-delay="500">Hello, I am</div>
        <div className="text-main  font-semibold opacity-[.95] text-4xl md:text-7xl pt-2" data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="center-bottom">{data.firstName} {data.lastName}</div>
        <div className="text-main opacity-[.70] mt-6 text-3xl md:text-6xl" data-aos="fade-up" data-aos-delay="700" data-aos-anchor-placement="center-bottom">{data.role}</div>

      </div>

      <div className="w-4/5 md:w-1/2 flex flex-col justify-start" data-aos="fade-up" data-aos-delay="800" data-aos-anchor-placement="center-bottom">
        <div className="text-main opacity-[.70] mt-14 text-base md:text-lg font-Space">{data.about}</div>
      </div>

      <div data-aos="fade-up" data-aos-delay="900" data-aos-anchor-placement="center-bottom">
        <button className="duration-500 mt-16 mr-4 hover:bg-transparent bg-secondaryHover hover:text-secondary text-main py-4 px-4 border border-transparent hover:border-secondary rounded-xl  font-Space font-semibold" onClick={() => window.location = `mailto: ${data.email}`}>Get in Touch</button>
        <a href="https://drive.google.com/file/d/1iKFYLO1-nXZKrzHDDqxGDibvA1wqlLQc/view?usp=sharing" target="_blank"><button className="duration-500 mt-16 bg-transparent hover:bg-secondaryHover hover:text-main py-4 px-4 border border-secondary hover:border-transparent rounded  font-Space font-semibold">Resume</button></a>
      </div>
    </div>
  );
};

export default About;
