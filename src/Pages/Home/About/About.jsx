
import service from '../../../assets/home/chef-service.jpg';

const About = () => {
  return (
    <div className='relative h-[45vh] '>
      <img src={service} className='absolute inset-0 w-full h-full object-cover' alt="" />
      <div className='absolute inset-0 my-24 mx-20 bg-white '></div>
      {/* Your content goes here */}
      <div className='text-center absolute inset-0 flex flex-col justify-center '>
        <h2 className='text-black text-5xl font-normal'> Bistro Boss</h2>
        <p className='text-black font-medium w-2/3 mx-auto'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
      </div>
    </div>
  );
};

export default About;